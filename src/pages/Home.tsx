import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Zap, Target, Star, Trophy, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function Home() {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80" 
            alt="Hero Background" 
            className="w-full h-full object-cover opacity-20"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/80 to-background" />
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="px-4 py-2 bg-primary/20 text-primary border border-primary/30 rounded-full text-xs font-bold uppercase tracking-widest mb-6 inline-block neon-border">
              {t('hero.tag')}
            </span>
            <div className="mb-6">
              <h1 className="text-5xl md:text-8xl font-black tracking-tight leading-tight">
                {t('hero.title')}
              </h1>
              <h2 className="text-4xl md:text-6xl font-black text-primary neon-text tracking-tighter">
                {t('hero.subtitle')}
              </h2>
            </div>
            <p className="max-w-2xl mx-auto text-muted-foreground text-lg md:text-xl mb-10 leading-relaxed">
              {t('hero.description')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/events"
                className="px-8 py-4 bg-primary text-white rounded-xl font-bold flex items-center justify-center space-x-2 hover:bg-primary/80 transition-all hover:scale-105 neon-border"
              >
                <span>{t('hero.explore')}</span>
                <ArrowRight className="w-5 h-5 rtl:rotate-180" />
              </Link>
              <Link
                to="/about"
                className="px-8 py-4 glass rounded-xl font-bold flex items-center justify-center space-x-2 hover:bg-black/5 dark:hover:bg-white/10 transition-all"
              >
                <span>{t('hero.learn')}</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>


      {/* Featured Section */}
      <section className="py-24 container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: Zap, title: t('about.legacy.title'), desc: t('about.legacy.desc') },
            { icon: Target, title: t('about.mission.title'), desc: t('about.mission.desc') },
            { icon: Trophy, title: t('about.vision.title'), desc: t('about.vision.desc') }
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="p-8 glass rounded-3xl border-white/5 hover:border-primary/30 transition-all group"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 border border-primary/20 group-hover:bg-primary group-hover:text-white transition-all">
                <item.icon className="w-6 h-6 text-primary group-hover:text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4">{item.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Schedule Section */}
      <section className="py-24 container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black mb-4 uppercase">
            {(t('home.schedule.title') || '').split(' ')[0]} <span className="text-primary tracking-tighter">{(t('home.schedule.title') || '').split(' ').slice(1).join(' ')}</span>
          </h2>
          <p className="text-muted-foreground">{t('home.schedule.subtitle')}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass p-8 rounded-[40px] border-white/10"
          >
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-xl font-bold uppercase tracking-widest">{t('home.schedule.weekly')}</h3>
              <button className="text-primary text-xs font-black uppercase hover:underline flex items-center space-x-2">
                <Star className="w-4 h-4" />
                <span>{t('home.schedule.download')}</span>
              </button>
            </div>
            
            <div className="space-y-4">
              {[
                { branch: 'DIA', level: '1ère Année / 2ème Année', time: '08:30 - 17:30', days: 'Mon - Fri' },
                { branch: 'DAI', level: '1ère Année / 2ème Année', time: '08:30 - 17:30', days: 'Mon - Fri' },
                { branch: 'CG', level: '1ère Année / 2ème Année', time: '08:30 - 17:30', days: 'Mon - Fri' },
                { branch: 'Workshops', level: 'All Branches', time: '09:00 - 14:00', days: 'Saturday' },
              ].map((row, i) => (
                <div key={i} className="flex items-center justify-between p-4 rounded-2xl bg-white/5 border border-white/5 group hover:border-primary/30 transition-all">
                  <div>
                    <div className="font-bold flex items-center space-x-2">
                       <span className="text-primary font-black">{row.branch}</span>
                       <span className="text-xs text-gray-500">- {row.level}</span>
                    </div>
                    <div className="text-[10px] text-gray-500 uppercase font-bold">{row.days}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-mono text-primary font-black">{row.time}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div 
             initial={{ opacity: 0, x: 30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             className="relative aspect-video rounded-[40px] overflow-hidden group shadow-2xl"
          >
            <img 
              src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80" 
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
            <div className="absolute bottom-8 left-8 right-8">
              <div className="text-primary font-black uppercase tracking-widest text-xs mb-2">Campus Al Kendi</div>
              <p className="text-white text-sm leading-relaxed opacity-80">A state-of-the-art environment designed for collaborative research and innovation.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Latest Events Preview */}
      <section className="py-24 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <h2 className="text-4xl md:text-6xl font-black uppercase mb-4">
                {(t('home.events.title') || '').split(' ')[0]} <span className="text-primary">{(t('home.events.title') || '').split(' ').slice(1).join(' ')}</span>
              </h2>
              <p className="text-muted-foreground">{t('home.events.subtitle')}</p>
            </div>
            <Link 
              to="/events"
              className="px-8 py-4 glass rounded-2xl font-bold uppercase text-xs tracking-widest hover:bg-primary hover:text-white transition-all flex items-center space-x-2"
            >
              <span>{t('home.events.viewAll')}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="glass p-8 rounded-[40px] border-white/10 flex flex-col justify-between group hover:border-primary/50 transition-all cursor-pointer">
              <div>
                <div className="text-[10px] font-black text-primary uppercase mb-4">Upcoming Workshop</div>
                <h3 className="text-3xl font-black mb-4 leading-tight">Mastering Generative AI with Gemini 1.5</h3>
                <p className="text-gray-500 mb-8 max-w-md">Discover the cutting-edge of LLM development in our intensive weekend laboratory.</p>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full overflow-hidden border border-primary">
                  <img src="https://i.pravatar.cc/150?u=1" />
                </div>
                <div>
                    <div className="text-sm font-bold">Dr. Alami</div>
                    <div className="text-[10px] text-gray-500 uppercase font-black">Lead AI Researcher</div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="glass p-6 rounded-3xl border-white/10 hover:bg-white/5 transition-all">
                <div className="p-3 bg-primary/20 text-primary w-fit rounded-xl mb-4">
                  <Target className="w-5 h-5" />
                </div>
                <h4 className="font-bold mb-2">Hackathon 2026</h4>
                <p className="text-xs text-gray-500">48h of intense coding for change.</p>
              </div>
              <div className="glass p-6 rounded-3xl border-white/10 hover:bg-white/5 transition-all">
                <div className="p-3 bg-purple-500/20 text-purple-500 w-fit rounded-xl mb-4">
                  <Star className="w-5 h-5" />
                </div>
                <h4 className="font-bold mb-2">Design Sprint</h4>
                <p className="text-xs text-gray-500">UX/UI excellence workshop.</p>
              </div>
              <div className="glass p-6 rounded-3xl border-white/10 hover:bg-white/5 transition-all">
                <div className="p-3 bg-blue-500/20 text-blue-500 w-fit rounded-xl mb-4">
                  <Users className="w-5 h-5" />
                </div>
                <h4 className="font-bold mb-2">Alumni Meetup</h4>
                <p className="text-xs text-gray-500">Connecting generations of leaders.</p>
              </div>
              <div className="glass p-6 rounded-3xl border-white/10 hover:bg-white/5 transition-all">
                <div className="p-3 bg-emerald-500/20 text-emerald-500 w-fit rounded-xl mb-4">
                  <Trophy className="w-5 h-5" />
                </div>
                <h4 className="font-bold mb-2">E-Sport Cup</h4>
                <p className="text-xs text-gray-500">Competition meets performance.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-24 bg-white/[0.02] border-y border-white/5">
        <div className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { value: "500+", label: t('nav.events') },
            { value: "50+", label: t('nav.projects') },
            { value: "15+", label: (t('events.title') || 'Events').split(' ')[0] },
            { value: "98%", label: t('about.vision.title') }
          ].map((stat, i) => (
            <div key={i}>
              <h2 className="text-4xl font-black text-primary mb-2 neon-text">{stat.value}</h2>
              <p className="text-gray-500 text-sm uppercase tracking-widest">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
