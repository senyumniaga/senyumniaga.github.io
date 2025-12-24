import React, { useState, useEffect, useCallback, useRef } from 'react';
import { ChevronLeft, ChevronRight, TrendingUp, DollarSign, Clock, Smile, MessageSquare, Users, Zap, Globe, Heart, CalendarCheck, LucideIcon } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

// Card configuration with icons and colors (content comes from translations)
const cardConfigs: Array<{
  id: number;
  icon: LucideIcon;
  color: 'cyan' | 'amber' | 'fuchsia' | 'purple';
  metricKey: string;
  titleKey: string;
  descKey: string;
  sourceKey: string;
}> = [
  { id: 1, icon: DollarSign, color: 'cyan', metricKey: 'pov_1_metric', titleKey: 'pov_1_title', descKey: 'pov_1_desc', sourceKey: 'pov_1_source' },
  { id: 2, icon: TrendingUp, color: 'amber', metricKey: 'pov_2_metric', titleKey: 'pov_2_title', descKey: 'pov_2_desc', sourceKey: 'pov_2_source' },
  { id: 3, icon: Clock, color: 'fuchsia', metricKey: 'pov_3_metric', titleKey: 'pov_3_title', descKey: 'pov_3_desc', sourceKey: 'pov_3_source' },
  { id: 4, icon: Smile, color: 'purple', metricKey: 'pov_4_metric', titleKey: 'pov_4_title', descKey: 'pov_4_desc', sourceKey: 'pov_4_source' },
  { id: 5, icon: MessageSquare, color: 'cyan', metricKey: 'pov_5_metric', titleKey: 'pov_5_title', descKey: 'pov_5_desc', sourceKey: 'pov_5_source' },
  { id: 6, icon: Users, color: 'amber', metricKey: 'pov_6_metric', titleKey: 'pov_6_title', descKey: 'pov_6_desc', sourceKey: 'pov_6_source' },
  { id: 7, icon: Zap, color: 'fuchsia', metricKey: 'pov_7_metric', titleKey: 'pov_7_title', descKey: 'pov_7_desc', sourceKey: 'pov_7_source' },
  { id: 8, icon: Globe, color: 'purple', metricKey: 'pov_8_metric', titleKey: 'pov_8_title', descKey: 'pov_8_desc', sourceKey: 'pov_8_source' },
  { id: 9, icon: Heart, color: 'cyan', metricKey: 'pov_9_metric', titleKey: 'pov_9_title', descKey: 'pov_9_desc', sourceKey: 'pov_9_source' },
  { id: 10, icon: CalendarCheck, color: 'amber', metricKey: 'pov_10_metric', titleKey: 'pov_10_title', descKey: 'pov_10_desc', sourceKey: 'pov_10_source' },
];

const colorStyles: Record<string, { 
  iconBg: string; 
  iconText: string; 
  glow: string; 
  border: string;
  metricText: string;
  dotActive: string;
}> = {
  cyan: {
    iconBg: 'bg-neon-cyan/10',
    iconText: 'text-neon-cyan',
    glow: 'shadow-[0_0_30px_rgba(6,182,212,0.3)]',
    border: 'border-neon-cyan/30',
    metricText: 'text-neon-cyan',
    dotActive: 'bg-neon-cyan',
  },
  fuchsia: {
    iconBg: 'bg-neon-fuchsia/10',
    iconText: 'text-neon-fuchsia',
    glow: 'shadow-[0_0_30px_rgba(217,70,239,0.3)]',
    border: 'border-neon-fuchsia/30',
    metricText: 'text-neon-fuchsia',
    dotActive: 'bg-neon-fuchsia',
  },
  amber: {
    iconBg: 'bg-neon-amber/10',
    iconText: 'text-neon-amber',
    glow: 'shadow-[0_0_30px_rgba(245,158,11,0.3)]',
    border: 'border-neon-amber/30',
    metricText: 'text-neon-amber',
    dotActive: 'bg-neon-amber',
  },
  purple: {
    iconBg: 'bg-neon-purple/10',
    iconText: 'text-neon-purple',
    glow: 'shadow-[0_0_30px_rgba(139,92,246,0.3)]',
    border: 'border-neon-purple/30',
    metricText: 'text-neon-purple',
    dotActive: 'bg-neon-purple',
  },
};

interface ProofCardProps {
  config: typeof cardConfigs[0];
  isActive: boolean;
  t: (key: string) => string;
}

const ProofCard: React.FC<ProofCardProps> = ({ config, isActive, t }) => {
  const styles = colorStyles[config.color];
  const IconComponent = config.icon;
  
  return (
    <div 
      className={`
        relative flex-shrink-0 w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]
        p-6 rounded-2xl
        bg-white/[0.03] backdrop-blur-xl
        border border-white/10
        transition-all duration-500 ease-out
        group cursor-default
        ${isActive ? `${styles.glow} ${styles.border} scale-[1.02]` : 'hover:border-white/20 hover:bg-white/[0.05]'}
      `}
    >
      {/* Gradient overlay on hover/active */}
      <div className={`
        absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500
        bg-gradient-to-br from-white/5 via-transparent to-transparent
        ${isActive ? 'opacity-100' : 'group-hover:opacity-100'}
      `} />
      
      {/* Top accent line */}
      <div className={`
        absolute top-0 left-6 right-6 h-px
        bg-gradient-to-r from-transparent via-white/20 to-transparent
        transition-all duration-500
        ${isActive ? 'via-white/40' : ''}
      `} />
      
      <div className="relative z-10">
        {/* Icon */}
        <div className={`
          w-12 h-12 rounded-xl flex items-center justify-center mb-4
          ${styles.iconBg} ${styles.iconText}
          transition-all duration-300
          ${isActive ? 'scale-110' : 'group-hover:scale-105'}
        `}>
          <IconComponent className="w-6 h-6" />
        </div>
        
        {/* Metric - The hero number */}
        <div className={`
          text-4xl font-black mb-2 tracking-tight
          ${styles.metricText}
          transition-all duration-300
          ${isActive ? 'drop-shadow-[0_0_10px_currentColor]' : ''}
        `}>
          {t(config.metricKey)}
        </div>
        
        {/* Title */}
        <h4 className="text-lg font-bold text-white mb-2">
          {t(config.titleKey)}
        </h4>
        
        {/* Description */}
        <p className="text-sm text-slate-400 leading-relaxed mb-4">
          {t(config.descKey)}
        </p>
        
        {/* Source badge */}
        <div className="flex items-center gap-2">
          <span className="text-[10px] uppercase tracking-wider text-slate-500 font-medium">
            Source:
          </span>
          <span className="text-xs px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-slate-300">
            {t(config.sourceKey)}
          </span>
        </div>
      </div>
    </div>
  );
};

export const FuturisticSlider: React.FC = () => {
  const { t } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [visibleCards, setVisibleCards] = useState(3);
  const sliderRef = useRef<HTMLDivElement>(null);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);
  
  // Responsive card count
  useEffect(() => {
    const updateVisibleCards = () => {
      if (window.innerWidth < 640) {
        setVisibleCards(1);
      } else if (window.innerWidth < 1024) {
        setVisibleCards(2);
      } else {
        setVisibleCards(3);
      }
    };
    
    updateVisibleCards();
    window.addEventListener('resize', updateVisibleCards);
    return () => window.removeEventListener('resize', updateVisibleCards);
  }, []);
  
  const maxIndex = cardConfigs.length - visibleCards;
  
  const goToSlide = useCallback((index: number) => {
    setCurrentIndex(Math.max(0, Math.min(index, maxIndex)));
  }, [maxIndex]);
  
  const nextSlide = useCallback(() => {
    setCurrentIndex(prev => (prev >= maxIndex ? 0 : prev + 1));
  }, [maxIndex]);
  
  const prevSlide = useCallback(() => {
    setCurrentIndex(prev => (prev <= 0 ? maxIndex : prev - 1));
  }, [maxIndex]);
  
  // Auto-play (5 seconds)
  useEffect(() => {
    if (isPaused) {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
      return;
    }
    
    autoPlayRef.current = setInterval(nextSlide, 5000);
    
    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [isPaused, nextSlide]);
  
  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') prevSlide();
      if (e.key === 'ArrowRight') nextSlide();
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  // Touch/swipe support
  const touchStartX = useRef<number>(0);
  const touchEndX = useRef<number>(0);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current;
    const threshold = 50;

    if (Math.abs(diff) > threshold) {
      if (diff > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
    }
  };
  
  return (
    <div className="relative mt-24 mx-auto max-w-6xl px-4">
      {/* Section Header */}
      <div className="text-center mb-12">
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-4 backdrop-blur-md">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neon-fuchsia opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-neon-fuchsia"></span>
          </span>
          <span className="text-xs text-slate-300 font-medium tracking-wide uppercase">{t('pov_badge')}</span>
        </span>
        <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
          {t('pov_title')}
        </h3>
        <p className="text-slate-400 max-w-lg mx-auto">
          {t('pov_desc')}
        </p>
      </div>
      
      {/* Slider Container */}
      <div 
        className="relative overflow-hidden rounded-2xl"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Glass background */}
        <div className="absolute inset-0 bg-white/[0.02] backdrop-blur-sm rounded-2xl border border-white/5" />
        
        {/* Cards Track */}
        <div 
          ref={sliderRef}
          className="relative flex gap-6 p-6 transition-transform duration-500 ease-out"
          style={{
            transform: `translateX(-${currentIndex * (100 / visibleCards)}%)`,
          }}
        >
          {cardConfigs.map((config, index) => (
            <ProofCard 
              key={config.id} 
              config={config} 
              isActive={index >= currentIndex && index < currentIndex + visibleCards}
              t={t}
            />
          ))}
        </div>
        
        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className={`
            absolute left-2 top-1/2 -translate-y-1/2 z-20
            w-10 h-10 rounded-full
            bg-white/10 backdrop-blur-md border border-white/10
            flex items-center justify-center
            text-white/70 hover:text-white hover:bg-white/20
            transition-all duration-300
            hover:shadow-[0_0_20px_rgba(255,255,255,0.1)]
            ${currentIndex === 0 ? 'opacity-50 cursor-not-allowed' : ''}
          `}
          disabled={currentIndex === 0}
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        
        <button
          onClick={nextSlide}
          className={`
            absolute right-2 top-1/2 -translate-y-1/2 z-20
            w-10 h-10 rounded-full
            bg-white/10 backdrop-blur-md border border-white/10
            flex items-center justify-center
            text-white/70 hover:text-white hover:bg-white/20
            transition-all duration-300
            hover:shadow-[0_0_20px_rgba(255,255,255,0.1)]
            ${currentIndex >= maxIndex ? 'opacity-50 cursor-not-allowed' : ''}
          `}
          disabled={currentIndex >= maxIndex}
          aria-label="Next slide"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
      
      {/* Pagination Dots */}
      <div className="flex justify-center gap-2 mt-6">
        {Array.from({ length: maxIndex + 1 }).map((_, index) => {
          const activeCard = cardConfigs[index];
          const dotColor = activeCard ? colorStyles[activeCard.color].dotActive : 'bg-white';
          
          return (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`
                h-2 rounded-full transition-all duration-300
                ${currentIndex === index 
                  ? `w-8 ${dotColor} shadow-[0_0_10px_currentColor]` 
                  : 'w-2 bg-white/20 hover:bg-white/40'
                }
              `}
              aria-label={`Go to slide ${index + 1}`}
            />
          );
        })}
      </div>
      
      {/* Auto-play indicator */}
      <div className="flex justify-center mt-4">
        <span className={`
          text-xs text-slate-500 flex items-center gap-2
          transition-opacity duration-300
          ${isPaused ? 'opacity-100' : 'opacity-0'}
        `}>
          <span className="w-1.5 h-1.5 rounded-full bg-neon-amber animate-pulse" />
          {t('pov_paused')}
        </span>
      </div>
    </div>
  );
};
