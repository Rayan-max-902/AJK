import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Github, Globe, ExternalLink, Code2, Tag } from 'lucide-react';
import { db } from '../lib/firebase';
import { collection, query, onSnapshot } from 'firebase/firestore';
import { useTranslation } from 'react-i18next';

interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  imageUrl?: string;
}

export default function Projects() {
  const { t } = useTranslation();
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const q = query(collection(db, 'projects'));
    const unsub = onSnapshot(q, (snapshot) => {
      const projectData = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as Project[];
      setProjects(projectData);
      setLoading(false);
    });
    return () => unsub();
  }, []);

  return (
    <div className="container mx-auto px-4 py-24">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div>
          <motion.h2 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-5xl font-black mb-4"
          >
            {t('projects.title').split(' ')[0]} <span className="text-primary italic">{t('projects.title').split(' ').slice(1).join(' ')}</span>
          </motion.h2>
          <p className="text-gray-400 max-w-xl">
            {t('projects.subtitle')}
          </p>
        </div>
        <div className="flex space-x-2">
          {[t('projects.all'), 'AI', 'Web', 'Social'].map(cat => (
            <button key={cat} className="px-5 py-2 glass rounded-full text-xs font-bold hover:bg-white/10 transition-colors">
              {cat}
            </button>
          ))}
        </div>
      </div>

      {loading ? (
        <div className="flex justify-center h-64 items-center">
          <div className="w-10 h-10 border-4 border-primary border-t-transparent rounded-full animate-spin" />
        </div>
      ) : projects.length === 0 ? (
        <div className="text-center p-20 glass rounded-[40px] border-white/5">
           <Code2 className="w-16 h-16 text-gray-700 mx-auto mb-6 opacity-50" />
           <p className="text-gray-500 font-medium">{t('common.coming_soon')}</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="group glass rounded-[32px] border-white/5 overflow-hidden hover:border-primary/50 transition-all duration-500 flex flex-col"
            >
              <div className="h-64 relative overflow-hidden">
                <img 
                  src={project.imageUrl || `https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80`} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                   <div className="flex space-x-4">
                    <button className="p-3 bg-white/10 backdrop-blur-md rounded-xl hover:bg-white/20 transition-colors">
                      <Github className="w-5 h-5 text-white" />
                    </button>
                    <button className="p-3 bg-white/10 backdrop-blur-md rounded-xl hover:bg-white/20 transition-colors">
                      <Globe className="w-5 h-5 text-white" />
                    </button>
                   </div>
                </div>
              </div>

              <div className="p-8 flex flex-col flex-grow">
                <div className="flex items-center space-x-2 text-primary font-bold text-[10px] uppercase tracking-widest mb-3">
                  <Tag className="w-3 h-3" />
                  <span>{project.category || 'Tech Innovation'}</span>
                </div>
                <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-8 flex-grow">
                  {project.description}
                </p>
                <div className="flex items-center text-primary text-sm font-bold group/link cursor-pointer">
                  <span>{t('projects.view')}</span>
                  <ExternalLink className="w-4 h-4 ml-2 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      )}

      {/* Impact Timeline placeholder */}
      <section className="mt-32 pt-24 border-t border-white/5">
         <h3 className="text-3xl font-black mb-12 text-center uppercase tracking-tighter">{t('projects.impact').split(' ').slice(0,2).join(' ')} <span className="text-primary">{t('projects.impact').split(' ').slice(2).join(' ')}</span></h3>
         <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-1/2 hidden md:block" />
            <div className="space-y-12">
               {[
                 { year: '2025', title: t('about.vision.title'), desc: t('about.vision.desc') },
                 { year: '2024', title: t('about.mission.title'), desc: t('about.mission.desc') },
                 { year: '2023', title: t('about.inspiration.title'), desc: t('about.inspiration.desc') }
               ].map((item, i) => (
                 <motion.div 
                  key={i} 
                  initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  className={`flex flex-col md:flex-row items-center gap-8 ${i % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
                 >
                    <div className="md:w-1/2 text-center md:text-left px-8 py-6 glass rounded-2xl border-white/5">
                      <span className="text-primary font-black text-xl mb-2 block">{item.year}</span>
                      <h4 className="text-lg font-bold mb-2">{item.title}</h4>
                      <p className="text-gray-500 text-sm">{item.desc}</p>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-primary neon-border z-10 shrink-0 hidden md:block" />
                    <div className="md:w-1/2" />
                 </motion.div>
               ))}
            </div>
         </div>
      </section>
    </div>
  );
}
