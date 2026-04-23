import React from 'react';
import { Link } from 'react-router-dom';
import { Rocket, Mail, MapPin, Phone, Instagram, Twitter, Linkedin } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="glass border-t border-white/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Rocket className="text-primary w-6 h-6" />
              <span className="text-xl font-bold tracking-tight">AJK ASSOCIATION</span>
            </div>
            <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
              {t('footer.description')}
            </p>
            <div className="flex space-x-4">
              <Link to="#" className="p-2 bg-white/5 rounded-lg hover:bg-primary/20 transition-colors">
                <Instagram className="w-5 h-5 text-gray-400 hover:text-white" />
              </Link>
              <Link to="#" className="p-2 bg-white/5 rounded-lg hover:bg-primary/20 transition-colors">
                <Twitter className="w-5 h-5 text-gray-400 hover:text-white" />
              </Link>
              <Link to="#" className="p-2 bg-white/5 rounded-lg hover:bg-primary/20 transition-colors">
                <Linkedin className="w-5 h-5 text-gray-400 hover:text-white" />
              </Link>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">{t('footer.quick_links')}</h4>
            <ul className="space-y-4">
              <li><Link to="/about" className="text-gray-400 hover:text-primary transition-colors text-sm">{t('nav.about')}</Link></li>
              <li><Link to="/programs" className="text-gray-400 hover:text-primary transition-colors text-sm">{t('nav.programs')}</Link></li>
              <li><Link to="/events" className="text-gray-400 hover:text-primary transition-colors text-sm">{t('nav.events')}</Link></li>
              <li><Link to="/projects" className="text-gray-400 hover:text-primary transition-colors text-sm">{t('nav.projects')}</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">{t('footer.support')}</h4>
            <ul className="space-y-4">
              <li><Link to="/contact" className="text-gray-400 hover:text-primary transition-colors text-sm">{t('nav.contact')}</Link></li>
              <li><Link to="/sponsorship" className="text-gray-400 hover:text-primary transition-colors text-sm">{t('nav.sponsorship')}</Link></li>
              <li><Link to="/login" className="text-gray-400 hover:text-primary transition-colors text-sm">{t('nav.admin')}</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">{t('contact.title').split(' ')[1] || t('nav.contact')}</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 text-sm">
                <MapPin className="w-4 h-4 text-primary shrink-0" />
                <span className="text-gray-400">123 innovation Drive, Tech District</span>
              </li>
              <li className="flex items-center space-x-3 text-sm">
                <Mail className="w-4 h-4 text-primary shrink-0" />
                <span className="text-gray-400">moatadidrayan7@gmail.com</span>
              </li>
              <li className="flex items-center space-x-3 text-sm">
                <Phone className="w-4 h-4 text-primary shrink-0" />
                <span className="text-gray-400">+1 (555) 000-0000</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-gray-500 text-xs text-center md:text-left">
            {t('footer.rights')}
          </p>
          <div className="flex space-x-8">
            <Link to="#" className="text-gray-500 hover:text-white text-xs transition-colors">{t('footer.privacy')}</Link>
            <Link to="#" className="text-gray-500 hover:text-white text-xs transition-colors">{t('footer.terms')}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
