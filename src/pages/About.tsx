import React from 'react';
import { motion } from 'motion/react';
import { Shield, Eye, Compass } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function About() {
  const { t } = useTranslation();

  return (
    <div className="container mx-auto px-4 py-24">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-black mb-6">{t('about.title').split(' ')[0]} <span className="text-primary">{t('about.title').split(' ').slice(1).join(' ')}</span></h2>
        <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
          {t('about.description')}
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="p-10 glass rounded-3xl border-border space-y-6"
        >
          <div className="w-16 h-16 bg-blue-500/10 rounded-2xl flex items-center justify-center text-blue-500">
            <Shield className="w-8 h-8" />
          </div>
          <h3 className="text-2xl font-bold">{t('about.mission.title')}</h3>
          <p className="text-muted-foreground leading-relaxed">
            {t('about.mission.desc')}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="p-10 glass rounded-3xl border-primary/20 space-y-6 bg-primary/5"
        >
          <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary">
            <Compass className="w-8 h-8" />
          </div>
          <h3 className="text-2xl font-bold">{t('about.vision.title')}</h3>
          <p className="text-muted-foreground leading-relaxed">
            {t('about.vision.desc')}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="p-10 glass rounded-3xl border-white/5 space-y-6"
        >
          <div className="w-16 h-16 bg-purple-500/10 rounded-2xl flex items-center justify-center text-purple-500">
            <Eye className="w-8 h-8" />
          </div>
          <h3 className="text-2xl font-bold">{t('about.inspiration.title')}</h3>
          <p className="text-gray-400 leading-relaxed">
            {t('about.inspiration.desc')}
          </p>
        </motion.div>
      </div>

      <section className="mt-32 p-12 glass rounded-[40px] border-white/5 relative overflow-hidden group">
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-[100px] -z-10 group-hover:scale-150 transition-transform duration-1000" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-3xl font-black mb-6">{t('about.legacy.title').split(' ').slice(0,2).join(' ')} <span className="text-primary">{t('about.legacy.title').split(' ').slice(2).join(' ')}</span></h3>
            <p className="text-gray-400 mb-8 leading-relaxed">
              {t('about.legacy.desc')}
            </p>
            <div className="flex space-x-12">
              <div>
                <dt className="text-primary font-black text-3xl">10+</dt>
                <dd className="text-gray-500 text-sm uppercase">{t('about.legacy.years')}</dd>
              </div>
              <div>
                <dt className="text-primary font-black text-3xl">100%</dt>
                <dd className="text-gray-500 text-sm uppercase">{t('about.legacy.growth')}</dd>
              </div>
            </div>
          </div>
          <div className="relative">
             <img 
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80" 
              alt="Community" 
              className="rounded-3xl shadow-2xl relative z-10"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-primary/20 blur-2xl rounded-3xl -z-10 translate-x-4 translate-y-4" />
          </div>
        </div>
      </section>
    </div>
  );
}
