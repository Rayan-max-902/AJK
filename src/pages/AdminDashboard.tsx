import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useAuth } from '../context/AuthContext';
import { Navigate } from 'react-router-dom';
import { db } from '../lib/firebase';
import { collection, addDoc, updateDoc, deleteDoc, doc, onSnapshot, query, orderBy } from 'firebase/firestore';
import { LayoutDashboard, CalendarDays, Rocket, Plus, Trash2, Edit2, CheckCircle2, XCircle } from 'lucide-react';

export default function AdminDashboard() {
  const { user, isAdmin, loading: authLoading } = useAuth();
  const [activeTab, setActiveTab] = useState<'events' | 'projects'>('events');
  const [events, setEvents] = useState<any[]>([]);
  const [projects, setProjects] = useState<any[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingItem, setEditingItem] = useState<any>(null);

  // Form states
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    date: '',
    status: 'Open',
    participationEnabled: true,
    category: '',
    imageUrl: '',
    participantCount: 0
  });

  useEffect(() => {
    if (!isAdmin) return;

    const qEvents = query(collection(db, 'events'), orderBy('date', 'desc'));
    const unsubEvents = onSnapshot(qEvents, (snap) => setEvents(snap.docs.map(d => ({ id: d.id, ...d.data() }))));

    const qProjects = collection(db, 'projects');
    const unsubProjects = onSnapshot(qProjects, (snap) => setProjects(snap.docs.map(d => ({ id: d.id, ...d.data() }))));

    return () => { unsubEvents(); unsubProjects(); };
  }, [isAdmin]);

  if (authLoading) return <div className="h-screen flex items-center justify-center">Loading...</div>;
  if (!isAdmin) return <Navigate to="/login" replace />;

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (activeTab === 'events') {
        const eventData = {
          title: formData.title,
          description: formData.description,
          date: formData.date,
          status: formData.status,
          participationEnabled: formData.participationEnabled,
          imageUrl: formData.imageUrl,
          participantCount: formData.participantCount
        };
        if (editingItem) {
          await updateDoc(doc(db, 'events', editingItem.id), eventData);
        } else {
          await addDoc(collection(db, 'events'), eventData);
        }
      } else {
        const projectData = {
          title: formData.title,
          description: formData.description,
          category: formData.category,
          imageUrl: formData.imageUrl
        };
        if (editingItem) {
          await updateDoc(doc(db, 'projects', editingItem.id), projectData);
        } else {
          await addDoc(collection(db, 'projects'), projectData);
        }
      }
      setIsModalOpen(false);
      setEditingItem(null);
      setFormData({ title: '', description: '', date: '', status: 'Open', participationEnabled: true, category: '', imageUrl: '', participantCount: 0 });
    } catch (err) {
      console.error(err);
      alert('Operation failed. Check permissions.');
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure?')) return;
    try {
      await deleteDoc(doc(db, activeTab, id));
    } catch (err) {
       alert('Delete failed.');
    }
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-12 gap-6">
        <div>
           <h1 className="text-4xl font-black mb-2 flex items-center space-x-3">
            <LayoutDashboard className="text-primary w-8 h-8" />
            <span>Admin <span className="text-primary">Dashboard</span></span>
           </h1>
           <p className="text-muted-foreground text-sm">Managing contents for AJK Platform</p>
        </div>
        <button 
          onClick={() => { setEditingItem(null); setIsModalOpen(true); }}
          className="bg-primary text-white px-6 py-3 rounded-xl font-bold flex items-center justify-center space-x-2 hover:scale-105 transition-all neon-border"
        >
          <Plus className="w-5 h-5" />
          <span>Add New {activeTab === 'events' ? 'Event' : 'Project'}</span>
        </button>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-border mb-8">
        <button 
          onClick={() => setActiveTab('events')}
          className={`px-8 py-4 font-bold text-sm transition-all border-b-2 ${activeTab === 'events' ? 'border-primary text-primary' : 'border-transparent text-muted-foreground hover:text-foreground'}`}
        >
          <div className="flex items-center space-x-2">
            <CalendarDays className="w-4 h-4" />
            <span>Events Management</span>
          </div>
        </button>
        <button 
          onClick={() => setActiveTab('projects')}
          className={`px-8 py-4 font-bold text-sm transition-all border-b-2 ${activeTab === 'projects' ? 'border-primary text-primary' : 'border-transparent text-muted-foreground hover:text-foreground'}`}
        >
          <div className="flex items-center space-x-2">
            <Rocket className="w-4 h-4" />
            <span>Projects Showcase</span>
          </div>
        </button>
      </div>

      {/* Content List */}
      <div className="grid grid-cols-1 gap-4">
        {(activeTab === 'events' ? events : projects).map((item) => (
          <div key={item.id} className="glass p-6 rounded-3xl border-white/5 flex flex-col md:flex-row items-center justify-between hover:border-white/20 transition-all group">
            <div className="flex items-center space-x-6 mb-4 md:mb-0 w-full">
              <div className="w-16 h-16 rounded-xl bg-white/5 overflow-hidden shrink-0">
                 <img src={item.imageUrl || 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4'} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
              <div className="flex-grow min-w-0">
                <h3 className="font-bold text-lg truncate">{item.title}</h3>
                <p className="text-gray-500 text-xs truncate max-w-md">{item.description}</p>
                {activeTab === 'events' && (
                  <div className="flex items-center space-x-4 mt-2">
                    <span className="text-[10px] bg-primary/20 text-primary px-2 py-0.5 rounded uppercase font-black">{item.status}</span>
                    <span className="text-[10px] text-gray-600 font-mono">{item.date}</span>
                    {item.participationEnabled ? <CheckCircle2 className="w-3 h-3 text-green-500" /> : <XCircle className="w-3 h-3 text-red-500" />}
                  </div>
                )}
              </div>
            </div>
            <div className="flex space-x-3 w-full md:w-auto shrink-0">
               <button 
                onClick={() => { setEditingItem(item); setFormData(item); setIsModalOpen(true); }}
                className="p-3 glass hover:bg-white/5 text-gray-400 hover:text-white rounded-xl transition-all"
              >
                <Edit2 className="w-5 h-5" />
               </button>
               <button 
                onClick={() => handleDelete(item.id)}
                className="p-3 glass hover:bg-red-500/10 text-gray-400 hover:text-red-500 rounded-xl transition-all"
              >
                <Trash2 className="w-5 h-5" />
               </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }}
              className="relative glass w-full max-w-2xl p-10 rounded-[40px] border-white/10 shadow-2xl max-h-[90vh] overflow-y-auto"
            >
              <h2 className="text-2xl font-black mb-8 uppercase">{editingItem ? 'Edit' : 'Create'} {activeTab === 'events' ? 'Event' : 'Project'}</h2>
              <form onSubmit={handleSave} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest ml-1">Title</label>
                    <input required value={formData.title} onChange={e => setFormData({...formData, title: e.target.value})} className="w-full glass border-white/10 rounded-xl p-3 text-sm focus:border-primary outline-none" />
                  </div>
                  {activeTab === 'events' ? (
                    <div className="space-y-2">
                      <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest ml-1">Event Date</label>
                      <input required type="datetime-local" value={formData.date} onChange={e => setFormData({...formData, date: e.target.value})} className="w-full glass border-white/10 rounded-xl p-3 text-sm focus:border-primary outline-none" />
                    </div>
                  ) : (
                    <div className="space-y-2">
                      <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest ml-1">Category</label>
                      <input required value={formData.category} onChange={e => setFormData({...formData, category: e.target.value})} className="w-full glass border-white/10 rounded-xl p-3 text-sm focus:border-primary outline-none" />
                    </div>
                  )}
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest ml-1">Image URL</label>
                  <input value={formData.imageUrl} onChange={e => setFormData({...formData, imageUrl: e.target.value})} className="w-full glass border-white/10 rounded-xl p-3 text-sm focus:border-primary outline-none" placeholder="https://..." />
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest ml-1">Description</label>
                  <textarea required rows={4} value={formData.description} onChange={e => setFormData({...formData, description: e.target.value})} className="w-full glass border-white/10 rounded-xl p-3 text-sm focus:border-primary outline-none resize-none" />
                </div>

                {activeTab === 'events' && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest ml-1">Status</label>
                      <select value={formData.status} onChange={e => setFormData({...formData, status: e.target.value})} className="w-full glass border-border rounded-xl p-3 text-sm outline-none bg-background">
                        <option value="Open">Open</option>
                        <option value="Closed">Closed</option>
                        <option value="Coming Soon">Coming Soon</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest ml-1">Participant Count (Manual)</label>
                      <input type="number" value={formData.participantCount} onChange={e => setFormData({...formData, participantCount: parseInt(e.target.value) || 0})} className="w-full glass border-white/10 rounded-xl p-3 text-sm focus:border-primary outline-none" />
                    </div>
                    <div className="flex items-center space-x-3 pt-6">
                      <input type="checkbox" checked={formData.participationEnabled} onChange={e => setFormData({...formData, participationEnabled: e.target.checked})} className="w-5 h-5 accent-primary" />
                      <label className="text-sm font-bold text-gray-400">Participation Button Enabled</label>
                    </div>
                  </div>
                )}

                <div className="flex space-x-4 pt-6">
                   <button type="button" onClick={() => setIsModalOpen(false)} className="flex-grow py-4 glass rounded-2xl font-bold text-sm tracking-widest uppercase hover:bg-white/5 transition-all">Cancel</button>
                   <button type="submit" className="flex-grow py-4 bg-primary rounded-2xl font-bold text-sm tracking-widest uppercase neon-border hover:scale-105 transition-all">Save Changes</button>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
