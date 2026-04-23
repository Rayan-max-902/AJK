import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, Compass, Calendar, Brain, MessageCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function BottomNav() {
  const { t } = useTranslation();

  const links = [
    { name: t('nav.home'), path: '/', icon: Home },
    { name: t('nav.programs'), path: '/programs', icon: Compass },
    { name: t('nav.events'), path: '/events', icon: Calendar },
    { name: t('nav.quiz'), path: '/quiz', icon: Brain },
    { name: t('nav.contact'), path: '/contact', icon: MessageCircle },
  ];

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 px-4 pb-4">
      <div className="glass-morphism rounded-2xl border border-white/10 flex items-center justify-around p-2 shadow-2xl backdrop-blur-2xl">
        {links.map((link) => (
          <NavLink
            key={link.path}
            to={link.path}
            className={({ isActive }) =>
              `flex flex-col items-center justify-center p-2 rounded-xl transition-all ${
                isActive ? 'text-primary' : 'text-gray-500'
              }`
            }
          >
            <link.icon className="w-5 h-5 mb-1" />
            <span className="text-[10px] font-bold truncate max-w-[60px]">{link.name}</span>
          </NavLink>
        ))}
      </div>
    </div>
  );
}
