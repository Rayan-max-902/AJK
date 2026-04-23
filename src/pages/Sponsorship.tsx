import React from 'react';
import { motion } from 'motion/react';
import { Check, Star, Trophy, Crown, Globe, Zap, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function Sponsorship() {
  const { t } = useTranslation();

  const plans = [
    {
      name: t('sponsorship.bronze'),
      price: "$500",
      icon: Star,
      color: "from-orange-500/10 to-orange-500/5",
      border: "border-orange-500/30",
      accent: "text-orange-500",
      features: [
        t('sponsorship.feature_1'),
        t('sponsorship.feature_2'),
        t('sponsorship.feature_3')
      ]
    },
    {
      name: t('sponsorship.silver'),
      price: "$1,500",
      icon: Trophy,
      featured: true,
      color: "from-primary/20 to-primary/5",
      border: "border-primary/50",
      accent: "text-primary",
      features: [
        t('sponsorship.feature_1'),
        t('sponsorship.feature_2'),
        t('sponsorship.feature_3'),
        t('sponsorship.feature_4')
      ]
    },
    {
      name: t('sponsorship.gold'),
      price: "$5,000",
      icon: Crown,
      color: "from-yellow-500/10 to-yellow-500/5",
      border: "border-yellow-500/30",
      accent: "text-yellow-500",
      features: [
        t('sponsorship.feature_1'),
        t('sponsorship.feature_2'),
        t('sponsorship.feature_3'),
        t('sponsorship.feature_4'),
        t('sponsorship.feature_5')
      ]
    }
  ];

  return (
    <div className="container mx-auto px-4 py-24 text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="mb-20"
      >
        <h2 className="text-5xl font-black mb-6">{t('sponsorship.title').split(' ')[0]} <span className="text-primary neon-text">{t('sponsorship.title').split(' ').slice(1).join(' ')}</span></h2>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
          {t('sponsorship.subtitle')}
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
        {plans.map((plan, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className={`relative p-1 glass rounded-[40px] overflow-hidden ${plan.border} ${plan.featured ? 'scale-105 z-10 neon-border' : ''}`}
          >
            {plan.featured && (
              <div className="absolute top-6 right-8 bg-primary text-white text-[10px] font-black py-1 px-3 rounded-full uppercase tracking-widest animate-pulse">
                {t('common.coming_soon')}
              </div>
            )}
            <div className={`h-full bg-gradient-to-b ${plan.color} p-10 rounded-[38px] flex flex-col`}>
              <div className={`w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center mb-8 mx-auto ${plan.accent}`}>
                <plan.icon className="w-8 h-8" />
              </div>

              <h3 className="text-2xl font-bold mb-2 uppercase tracking-widest">{plan.name}</h3>
              <div className="mb-8">
                <span className="text-4xl font-black text-white">{plan.price}</span>
                <span className="text-gray-500 text-sm uppercase font-bold ml-2">/ {t('sponsorship.per_event')}</span>
              </div>

              <ul className="space-y-4 mb-10 flex-grow text-left">
                {plan.features.map((feature, j) => (
                  <li key={j} className="flex items-center space-x-3 text-sm text-gray-300">
                    <Check className={`w-4 h-4 shrink-0 ${plan.accent}`} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <button className={`w-full py-4 rounded-2xl font-black text-sm uppercase tracking-widest transition-all ${
                plan.featured ? 'bg-primary text-white hover:bg-primary/80' : 'glass text-white hover:bg-white/10'
              }`}>
                {t('sponsorship.select')}
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Trust Badges */}
      <div className="py-20 border-t border-white/5">
        <p className="text-gray-500 text-xs font-black uppercase tracking-widest mb-12">{t('sponsorship.trust')}</p>
        <div className="flex flex-wrap justify-center gap-12 opacity-30 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-700">
           <div className="flex items-center space-x-2 text-2xl font-bold"><Globe className="w-8 h-8" /> <span>GLOBO-CO</span></div>
           <div className="flex items-center space-x-2 text-2xl font-bold"><Zap className="w-8 h-8" /> <span>ZAP-LABS</span></div>
           <div className="flex items-center space-x-2 text-2xl font-bold"><Shield className="w-8 h-8" /> <span>SECURE-NET</span></div>
        </div>
      </div>
    </div>
  );
}
