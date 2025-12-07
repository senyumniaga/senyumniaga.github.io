import React, { useState } from 'react';
import { Bot, Menu, X, Globe } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { Link, useLocation, useNavigate } from 'react-router-dom';

export const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const location = useLocation();
  const navigate = useNavigate();

  const toggleLanguage = () => {
    const langs: ('en' | 'ru' | 'vi' | 'id')[] = ['en', 'ru', 'vi', 'id'];
    const currentIndex = langs.indexOf(language);
    const nextIndex = (currentIndex + 1) % langs.length;
    setLanguage(langs[nextIndex]);
  };

  const getLangLabel = (lang: string) => {
    switch(lang) {
      case 'en': return '🇺🇸 EN';
      case 'ru': return '🇷🇺 RU';
      case 'vi': return '🇻🇳 VI';
      case 'id': return '🇮🇩 ID';
      default: return 'EN';
    }
  };

  // Helper to handle scrolling if on home, or navigating if not
  const handleNavClick = (e: React.MouseEvent, hash: string) => {
    if (location.pathname !== '/') {
      e.preventDefault();
      // Navigate to home then scroll
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(hash);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
        // Default anchor behavior works for same page
    }
  };

  return (
    <nav className="fixed w-full z-40 bg-dark-bg/60 backdrop-blur-lg border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-2 group cursor-pointer">
            <div className="bg-gradient-to-br from-neon-fuchsia to-neon-amber p-2 rounded-lg shadow-[0_0_15px_rgba(217,70,239,0.3)] group-hover:shadow-[0_0_25px_rgba(245,158,11,0.5)] transition-all">
              <Bot className="w-6 h-6 text-white" />
            </div>
            <span className="font-bold text-xl tracking-tight text-white group-hover:text-neon-amber transition-colors">BotForge</span>
          </Link>
          
          <div className="hidden md:flex items-center gap-8">
            <div className="flex items-baseline space-x-8">
              {/* Features Link - Goes to separate page */}
              <Link to="/features" className={`text-slate-300 hover:text-neon-amber transition-colors px-3 py-2 rounded-md text-sm font-medium ${location.pathname === '/features' ? 'text-neon-amber' : ''}`}>
                {t('nav_features')}
              </Link>
              
              {/* Process Link - Anchor on Home */}
              <a href="#how-it-works" onClick={(e) => handleNavClick(e, 'how-it-works')} className="text-slate-300 hover:text-neon-amber transition-colors px-3 py-2 rounded-md text-sm font-medium">
                {t('nav_process')}
              </a>
              
              {/* Pricing/Contact Link - Anchor on Home */}
              <a href="#contact" onClick={(e) => handleNavClick(e, 'contact')} className="text-slate-300 hover:text-neon-amber transition-colors px-3 py-2 rounded-md text-sm font-medium">
                {t('nav_pricing')}
              </a>
            </div>
            
            <div className="flex items-center gap-4">
               <button 
                onClick={toggleLanguage}
                className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-medium text-slate-300 transition-all"
               >
                 <Globe className="w-3 h-3" />
                 {getLangLabel(language)}
               </button>

               <a href="#contact" onClick={(e) => handleNavClick(e, 'contact')} className="relative group px-5 py-2.5 rounded-full text-sm font-bold overflow-hidden bg-white text-dark-bg shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_30px_rgba(245,158,11,0.4)] transition-all">
                  <span className="relative z-10">{t('nav_contact')}</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-neon-amber to-neon-fuchsia opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </a>
            </div>
          </div>
          
          <div className="md:hidden flex items-center gap-4">
            <button 
                onClick={toggleLanguage}
                className="flex items-center gap-2 px-2 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-slate-300"
               >
                 {getLangLabel(language)}
            </button>
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-slate-300 hover:text-white">
              {isMobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-dark-card/95 border-b border-white/10 backdrop-blur-xl">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/features" className="text-slate-300 hover:text-neon-cyan block px-3 py-2 rounded-md text-base font-medium" onClick={() => setIsMobileMenuOpen(false)}>{t('nav_features')}</Link>
            <a href="#how-it-works" onClick={(e) => { handleNavClick(e, 'how-it-works'); setIsMobileMenuOpen(false); }} className="text-slate-300 hover:text-neon-cyan block px-3 py-2 rounded-md text-base font-medium">{t('nav_process')}</a>
            <a href="#contact" onClick={(e) => { handleNavClick(e, 'contact'); setIsMobileMenuOpen(false); }} className="text-neon-fuchsia font-bold block px-3 py-2 rounded-md text-base">{t('nav_contact')}</a>
          </div>
        </div>
      )}
    </nav>
  );
};