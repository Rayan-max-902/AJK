import React from 'react';
import { motion } from 'motion/react';
import { Cpu, Code, BarChart3, Binary, Globe, Lightbulb } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function Programs() {
  const { t } = useTranslation();

  const programs = [
    {
      icon: Cpu,
      title: t('programs.dia.title'),
      tag: t('programs.dia.tag'),
      desc: t('programs.dia.desc'),
      color: "from-blue-600 to-cyan-500",
      features: t('programs.dia.features', { returnObjects: true }) as string[]
    },
    {
      icon: Code,
      title: t('programs.dai.title'),
      tag: t('programs.dai.tag'),
      desc: t('programs.dai.desc'),
      color: "from-purple-600 to-pink-500",
      features: t('programs.dai.features', { returnObjects: true }) as string[]
    },
    {
      icon: BarChart3,
      title: t('programs.cg.title'),
      tag: t('programs.cg.tag'),
      desc: t('programs.cg.desc'),
      color: "from-orange-600 to-yellow-500",
      features: t('programs.cg.features', { returnObjects: true }) as string[]
    }
  ];

  return (
    <div className="container mx-auto px-4 py-24">
      <div className="max-w-3xl mb-16">
        <motion.h2 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-5xl font-black mb-6"
        >
          {t('programs.title').split(' ')[0]} <span className="text-primary">{t('programs.title').split(' ').slice(1).join(' ')}</span>
        </motion.h2>
        <p className="text-gray-400 text-lg">
          {t('programs.subtitle')}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {programs.map((prog, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="group relative h-full"
          >
            <div className="h-full glass rounded-[32px] border-white/5 p-8 flex flex-col hover:border-primary/50 transition-all duration-500 overflow-hidden">
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${prog.color} opacity-10 blur-3xl group-hover:opacity-30 transition-opacity`} />
              
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${prog.color} flex items-center justify-center text-white mb-8 shadow-lg`}>
                <prog.icon className="w-7 h-7" />
              </div>

              <div className="mb-4">
                <span className="text-xs font-bold text-primary tracking-widest uppercase">{prog.tag}</span>
                <h3 className="text-3xl font-bold mt-2">{prog.title}</h3>
              </div>

              <p className="text-gray-400 text-sm leading-relaxed mb-8 flex-grow">
                {prog.desc}
              </p>

              <div className="space-y-3 mb-8">
                {prog.features.map((f, j) => (
                  <div key={j} className="flex items-center space-x-2 text-xs font-medium text-gray-300">
                    <div className="w-1 h-1 rounded-full bg-primary" />
                    <span>{f}</span>
                  </div>
                ))}
              </div>

              <Link 
                to="/quiz" 
                className="w-full py-4 glass text-center rounded-2xl font-bold text-sm tracking-tight hover:bg-primary hover:text-white hover:neon-border transition-all"
              >
                {t('hero.learn')}
              </Link>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Why Section */}
      <div className="mt-32 grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-white/5 pt-24">
        {[
          { icon: Binary, title: t('about.legacy.title'), desc: t('about.legacy.desc') },
          { icon: Globe, title: t('about.mission.title'), desc: t('about.mission.desc') },
          { icon: Lightbulb, title: t('about.vision.title'), desc: t('about.vision.desc') }
        ].map((item, i) => (
          <div key={i} className="flex flex-col items-center text-center">
            <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-gray-400 mb-6">
              <item.icon className="w-5 h-5" />
            </div>
            <h4 className="text-lg font-bold mb-3">{item.title}</h4>
            <p className="text-gray-500 text-sm">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
