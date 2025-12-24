import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { FuturisticSlider } from '../components/FuturisticSlider';
import { 
  Bot, 
  Zap, 
  Clock, 
  ShieldCheck, 
  Code2, 
  BarChart3,
  ArrowRight
} from 'lucide-react';

export const Home: React.FC = () => {
  const { t } = useLanguage();

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden z-10">
        {/* Background Gradients */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full z-0 pointer-events-none">
          <div className="absolute top-20 left-1/4 w-[500px] h-[500px] bg-neon-fuchsia/20 rounded-full blur-[120px] animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-neon-cyan/10 rounded-full blur-[120px]"></div>
          <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-neon-amber/20 rounded-full blur-[100px] animate-float"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-md shadow-[0_0_15px_rgba(245,158,11,0.2)] hover:bg-white/10 transition-colors cursor-default">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neon-amber opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-neon-amber"></span>
            </span>
            <span className="text-xs md:text-sm text-slate-300 font-medium tracking-wide uppercase">{t('hero_badge')}</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 leading-tight text-white drop-shadow-2xl">
            {t('hero_title_1')} <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-fuchsia via-neon-amber to-neon-cyan animate-glow">
              {t('hero_title_highlight')}
            </span>
          </h1>

          <p className="mt-4 max-w-2xl mx-auto text-xl text-slate-400 mb-10 leading-relaxed">
            {t('hero_tagline')}
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="#contact" className="group flex items-center justify-center gap-2 bg-gradient-to-r from-neon-amber to-neon-fuchsia text-white px-8 py-4 rounded-full text-lg font-bold hover:brightness-110 transition-all shadow-[0_0_20px_rgba(245,158,11,0.4)] hover:shadow-[0_0_40px_rgba(217,70,239,0.6)]">
              {t('hero_cta_primary')}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            {/* View Features Button - Navigates to Features Page */}
            <Link to="/features" className="flex items-center justify-center gap-2 bg-transparent text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-white/10 transition-all border border-white/20 hover:border-neon-amber/50">
              {t('hero_cta_secondary')}
            </Link>
          </div>

          {/* Proof of Value Slider */}
          <FuturisticSlider />
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-24 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-neon-amber font-semibold tracking-widest uppercase text-xs">{t('features_eyebrow')}</h2>
            <h3 className="mt-2 text-3xl md:text-4xl font-extrabold text-white">{t('features_title')}</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard 
              icon={<Code2 />}
              title={t('feat_train_title')}
              desc={t('feat_train_desc')}
              color="cyan"
            />
            <FeatureCard 
              icon={<Clock />}
              title={t('feat_247_title')}
              desc={t('feat_247_desc')}
              color="fuchsia"
            />
             <FeatureCard 
              icon={<Zap />}
              title={t('feat_rapid_title')}
              desc={t('feat_rapid_desc')}
              color="amber"
            />
             <FeatureCard 
              icon={<Bot />}
              title="Human Handoff"
              desc="Smart routing sends complex issues to your human team seamlessly."
              color="purple"
            />
             <FeatureCard 
              icon={<BarChart3 />}
              title="Analytics Dashboard"
              desc="Track conversations, sentiment, and conversion goals in real-time."
              color="cyan"
            />
             <FeatureCard 
              icon={<ShieldCheck />}
              title="Enterprise Security"
              desc="Data encryption and GDPR compliance built-in from day one."
              color="fuchsia"
            />
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="how-it-works" className="py-24 relative overflow-hidden z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white">{t('process_title')}</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
             {/* Connector Line (Desktop) */}
            <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent z-0"></div>

            <Step 
              number="01"
              title={t('step_1_title')}
              desc={t('step_1_desc')}
              color="border-neon-cyan text-neon-cyan shadow-neon-cyan/20"
            />
            <Step 
              number="02"
              title={t('step_2_title')}
              desc={t('step_2_desc')}
              color="border-neon-fuchsia text-neon-fuchsia shadow-neon-fuchsia/20"
            />
            <Step 
              number="03"
              title={t('step_3_title')}
              desc={t('step_3_desc')}
              color="border-neon-amber text-neon-amber shadow-neon-amber/20"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-24 relative overflow-hidden z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-neon-fuchsia/10 pointer-events-none"></div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-neon-amber/10 blur-[100px] rounded-full pointer-events-none"></div>
        
        <div className="max-w-4xl mx-auto px-4 text-center relative z-20">
          <h2 className="text-4xl font-bold text-white mb-6 drop-shadow-lg">{t('cta_title')}</h2>
          <p className="text-slate-300 text-lg mb-10 max-w-2xl mx-auto">
            {t('cta_desc')}
          </p>
          
          <div className="bg-white/5 p-8 rounded-3xl border border-white/10 backdrop-blur-xl shadow-[0_0_50px_rgba(0,0,0,0.5)] relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-neon-cyan via-neon-fuchsia to-neon-amber"></div>
            <form className="space-y-4 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label htmlFor="email" className="sr-only">Work Email</label>
                <input 
                  type="email" 
                  id="email" 
                  placeholder="Enter your work email" 
                  className="w-full px-5 py-4 bg-black/40 border border-white/10 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-neon-amber/50 focus:border-transparent transition-all"
                />
              </div>
              <button type="submit" className="w-full bg-gradient-to-r from-neon-fuchsia to-neon-amber hover:brightness-110 text-white font-bold py-4 rounded-xl transition-all shadow-lg hover:shadow-neon-amber/25">
                {t('cta_btn')}
              </button>
              <p className="text-xs text-slate-500 mt-4">
                {t('cta_footer')}
              </p>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

// Internal Helpers
const FeatureCard: React.FC<{ icon: React.ReactNode, title: string, desc: string, color: string }> = ({ icon, title, desc, color }) => {
  let iconClass = "text-white";
  let hoverBorder = "hover:border-white/30";
  let shadow = "";

  if (color === 'cyan') {
    iconClass = "text-neon-cyan";
    hoverBorder = "hover:border-neon-cyan/50";
    shadow = "group-hover:shadow-[0_0_20px_rgba(6,182,212,0.3)]";
  } else if (color === 'fuchsia') {
    iconClass = "text-neon-fuchsia";
    hoverBorder = "hover:border-neon-fuchsia/50";
    shadow = "group-hover:shadow-[0_0_20px_rgba(217,70,239,0.3)]";
  } else if (color === 'amber') {
    iconClass = "text-neon-amber";
    hoverBorder = "hover:border-neon-amber/50";
    shadow = "group-hover:shadow-[0_0_20px_rgba(245,158,11,0.3)]";
  } else {
    iconClass = "text-neon-purple";
    hoverBorder = "hover:border-neon-purple/50";
    shadow = "group-hover:shadow-[0_0_20px_rgba(139,92,246,0.3)]";
  }

  return (
    <div className={`bg-white/5 p-8 rounded-2xl border border-white/5 ${hoverBorder} transition-all duration-300 group backdrop-blur-sm ${shadow}`}>
      <div className={`w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center ${iconClass} mb-6 group-hover:scale-110 transition-transform border border-white/10`}>
        {React.cloneElement(icon as React.ReactElement<any>, { className: "w-6 h-6" })}
      </div>
      <h4 className="text-xl font-bold text-white mb-3">{title}</h4>
      <p className="text-slate-400 leading-relaxed">{desc}</p>
    </div>
  );
};

const Step: React.FC<{ number: string, title: string, desc: string, color: string }> = ({ number, title, desc, color }) => (
  <div className="relative z-10 flex flex-col items-center text-center group">
    <div className={`w-24 h-24 bg-dark-bg border-2 ${color} rounded-full flex items-center justify-center mb-6 shadow-xl relative transition-all duration-500 group-hover:scale-110 group-hover:shadow-[0_0_30px_currentColor]`}>
       <span className="text-3xl font-black text-white">{number}</span>
    </div>
    <h4 className="text-xl font-bold text-white mb-3">{title}</h4>
    <p className="text-slate-400 max-w-xs">{desc}</p>
  </div>
);