import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, MessageCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function Contact() {
  const { t } = useTranslation();
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    setTimeout(() => setStatus('sent'), 1500);
  };

  return (
    <div className="container mx-auto px-4 py-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
        <div>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <h2 className="text-5xl font-black mb-6">{t('contact.title').split(' ')[0]} <span className="text-primary italic">{t('contact.title').split(' ').slice(1).join(' ')}</span></h2>
            <p className="text-gray-400 text-lg mb-12">
              {t('contact.subtitle')}
            </p>

            <div className="space-y-8">
              <div className="flex items-start space-x-6 p-6 glass rounded-3xl border-white/5 group hover:border-primary/30 transition-all">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                   <h4 className="font-bold text-white mb-1">{t('contact.email_label')}</h4>
                   <p className="text-gray-400 text-sm">moatadidrayan7@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-6 p-6 glass rounded-3xl border-white/5 group hover:border-primary/30 transition-all">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                   <h4 className="font-bold text-white mb-1">{t('contact.phone')}</h4>
                   <p className="text-gray-400 text-sm">+1 (555) 000-0000</p>
                </div>
              </div>

              <div className="flex items-start space-x-6 p-6 glass rounded-3xl border-white/5 group hover:border-primary/30 transition-all">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                   <h4 className="font-bold text-white mb-1">{t('contact.address')}</h4>
                   <p className="text-gray-400 text-sm">123 Innovation Drive, Tech District</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="glass p-10 rounded-[40px] border-white/10 relative"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full blur-[80px] -z-10" />
          
          <h3 className="text-2xl font-bold mb-8 flex items-center space-x-3">
            <MessageCircle className="w-6 h-6 text-primary" />
            <span>{t('contact.form_title')}</span>
          </h3>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-500 uppercase tracking-widest ml-1">{t('contact.name')}</label>
                <input 
                  required
                  type="text" 
                  className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 text-sm focus:outline-none focus:border-primary transition-all text-white placeholder:text-gray-600"
                  placeholder="John Doe"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-500 uppercase tracking-widest ml-1">{t('contact.email')}</label>
                <input 
                  required
                  type="email" 
                  className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 text-sm focus:outline-none focus:border-primary transition-all text-white placeholder:text-gray-600"
                  placeholder="john@example.com"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-gray-500 uppercase tracking-widest ml-1">{t('contact.message')}</label>
              <textarea 
                required
                rows={6}
                className="w-full bg-white/5 border border-white/10 rounded-3xl p-4 text-sm focus:outline-none focus:border-primary transition-all text-white placeholder:text-gray-600 resize-none"
                placeholder="..."
              />
            </div>

            <button 
              disabled={status !== 'idle'}
              className="w-full py-5 bg-primary text-white rounded-2xl font-bold uppercase tracking-[2px] text-xs flex items-center justify-center space-x-3 hover:bg-primary/80 transition-all neon-border"
            >
              {status === 'idle' ? (
                <>
                  <span>{t('common.submit')}</span>
                  <Send className="w-4 h-4" />
                </>
              ) : status === 'sending' ? (
                <span>{t('common.loading')}</span>
              ) : (
                <span>{t('contact.sent')}</span>
              )}
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
