import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Calendar, Users, MapPin, ExternalLink, Clock } from 'lucide-react';
import { db } from '../lib/firebase';
import { collection, query, orderBy, onSnapshot } from 'firebase/firestore';
import { useTranslation } from 'react-i18next';

interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  status: 'Open' | 'Closed' | 'Coming Soon';
  participationEnabled: boolean;
  participantCount: number;
  imageUrl?: string;
}

const CountdownTimer = ({ targetDate }: { targetDate: string }) => {
  const { t } = useTranslation();
  const [timeLeft, setTimeLeft] = useState({ d: 0, h: 0, m: 0, s: 0 });

  useEffect(() => {
    const timer = setInterval(() => {
      const target = new Date(targetDate).getTime();
      const now = new Date().getTime();
      const diff = target - now;

      if (diff < 0) {
        clearInterval(timer);
        return;
      }

      setTimeLeft({
        d: Math.floor(diff / (1000 * 60 * 60 * 24)),
        h: Math.floor((diff / (1000 * 60 * 60)) % 24),
        m: Math.floor((diff / 1000 / 60) % 60),
        s: Math.floor((diff / 1000) % 60)
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="flex space-x-3 mt-4">
      {[
        { val: timeLeft.d, label: t('common.days').charAt(0) },
        { val: timeLeft.h, label: t('common.hours').charAt(0) },
        { val: timeLeft.m, label: t('common.minutes').charAt(0) },
        { val: timeLeft.s, label: t('common.seconds').charAt(0) }
      ].map((unit, i) => (
        <div key={i} className="flex flex-col items-center">
          <div className="px-2 py-1 bg-white/5 rounded-md border border-white/10 text-primary font-mono text-xs font-bold leading-none min-w-[32px] text-center">
            {String(unit.val).padStart(2, '0')}
          </div>
          <span className="text-[8px] text-gray-500 mt-1 uppercase font-bold">{unit.label}</span>
        </div>
      ))}
    </div>
  );
};

export default function Events() {
  const { t, i18n } = useTranslation();
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);

  const getStatusTranslation = (status: string) => {
    switch(status) {
      case 'Open': return t('common.open');
      case 'Closed': return t('common.closed');
      case 'Coming Soon': return t('common.coming_soon');
      default: return status;
    }
  };

  useEffect(() => {
    const q = query(collection(db, 'events'), orderBy('date', 'asc'));
    const unsub = onSnapshot(q, (snapshot) => {
      const eventData = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      })) as Event[];
      setEvents(eventData);
      setLoading(false);
    });
    return () => unsub();
  }, []);

  return (
    <div className="container mx-auto px-4 py-24">
      <div className="text-center mb-16">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl font-black mb-6"
        >
          {t('events.title').split(' ')[0]} <span className="text-primary neon-text">{t('events.title').split(' ').slice(1).join(' ')}</span>
        </motion.h2>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg italic">
          {t('events.subtitle')}
        </p>
      </div>

      {loading ? (
        <div className="flex justify-center items-center h-64">
          <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin" />
        </div>
      ) : events.length === 0 ? (
        <div className="text-center p-12 glass rounded-3xl border-white/10">
          <Calendar className="w-12 h-12 text-gray-600 mx-auto mb-4" />
          <h3 className="text-xl font-bold text-gray-400">{t('common.error')}</h3>
          <p className="text-gray-500 mt-2">{t('common.coming_soon')}</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, i) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col glass rounded-[40px] border-white/5 overflow-hidden group hover:border-primary/50 transition-all duration-500"
            >
              <div className="h-52 relative overflow-hidden">
                <img 
                  src={event.imageUrl || `https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80`} 
                  alt={event.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest ${
                    event.status === 'Open' ? 'bg-green-500 text-white' :
                    event.status === 'Closed' ? 'bg-red-500/80 text-white' :
                    'bg-primary text-white'
                  }`}>
                    {getStatusTranslation(event.status)}
                  </span>
                </div>
              </div>

              <div className="p-8 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-4">
                   <h3 className="text-2xl font-bold leading-tight group-hover:text-primary transition-colors">{event.title}</h3>
                   <div className="flex items-center space-x-1 text-gray-500 text-xs font-bold">
                    <Users className="w-3 h-3" />
                    <span>{event.participantCount}</span>
                   </div>
                </div>

                <p className="text-gray-400 text-sm mb-6 line-clamp-3 leading-relaxed">
                  {event.description}
                </p>

                <div className="space-y-3 mb-8">
                  <div className="flex items-center space-x-3 text-gray-300 text-sm">
                    <Calendar className="w-4 h-4 text-primary" />
                    <span>{new Date(event.date).toLocaleDateString(i18n.language === 'ar' ? 'ar-MA' : i18n.language === 'fr' ? 'fr-FR' : 'en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-300 text-sm">
                    <Clock className="w-4 h-4 text-primary" />
                    <span>{new Date(event.date).toLocaleTimeString(i18n.language === 'ar' ? 'ar-MA' : i18n.language === 'fr' ? 'fr-FR' : 'en-US', { hour: '2-digit', minute: '2-digit' })}</span>
                  </div>
                </div>

                {event.status === 'Open' && <CountdownTimer targetDate={event.date} />}

                <div className="mt-auto pt-8">
                  <button
                    disabled={!event.participationEnabled || event.status === 'Closed'}
                    className={`w-full py-4 rounded-2xl font-bold text-sm flex items-center justify-center space-x-2 transition-all ${
                      event.participationEnabled && event.status !== 'Closed'
                        ? 'bg-primary text-white hover:bg-primary/80 neon-border hover:scale-[1.02]'
                        : 'bg-white/5 text-gray-500 cursor-not-allowed border border-white/5'
                    }`}
                  >
                    <span>{event.status === 'Closed' ? t('common.closed') : t('common.participate')}</span>
                    <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
}
