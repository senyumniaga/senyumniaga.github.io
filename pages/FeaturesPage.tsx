import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Brain, Lock, MessageCircle, GitBranch, Database, Sparkles } from 'lucide-react';

export const FeaturesPage: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen relative overflow-hidden pt-20">
      
      {/* Page Header */}
      <section className="relative pt-20 pb-16 px-4 text-center z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neon-cyan/10 border border-neon-cyan/30 text-neon-cyan text-xs font-bold tracking-wider uppercase mb-6">
          <Sparkles className="w-3 h-3" /> {t('fp_hero_badge')}
        </div>
        <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6">
            {t('fp_hero_title')}
        </h1>
        <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
            {t('fp_hero_desc')}
        </p>
      </section>

      {/* Feature 1: Context Core */}
      <section className="py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                <div className="flex-1 order-2 lg:order-1">
                     {/* Abstract Neural Viz */}
                    <div className="relative w-full aspect-square max-w-[500px] mx-auto bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl border border-white/10 shadow-[0_0_50px_rgba(217,70,239,0.15)] overflow-hidden flex items-center justify-center group">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(217,70,239,0.1),transparent_70%)]"></div>
                        
                        {/* Center Core */}
                        <div className="w-32 h-32 bg-neon-fuchsia/20 rounded-full blur-xl absolute animate-pulse"></div>
                        <div className="relative z-10 w-24 h-24 bg-dark-bg border border-neon-fuchsia/50 rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(217,70,239,0.5)]">
                            <Brain className="w-10 h-10 text-neon-fuchsia" />
                        </div>

                        {/* Orbiting nodes */}
                        <div className="absolute w-[60%] h-[60%] border border-white/5 rounded-full animate-spin [animation-duration:10s]">
                             <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-neon-cyan rounded-full shadow-[0_0_10px_#06b6d4]"></div>
                        </div>
                        <div className="absolute w-[85%] h-[85%] border border-white/5 rounded-full animate-spin [animation-duration:15s] direction-reverse">
                             <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-3 h-3 bg-neon-amber rounded-full shadow-[0_0_10px_#f59e0b]"></div>
                        </div>
                    </div>
                </div>
                <div className="flex-1 order-1 lg:order-2">
                    <div className="w-12 h-12 bg-neon-fuchsia/10 rounded-xl flex items-center justify-center mb-6 text-neon-fuchsia border border-neon-fuchsia/20">
                        <Database className="w-6 h-6" />
                    </div>
                    <h2 className="text-3xl font-bold text-white mb-4">{t('fp_s1_title')}</h2>
                    <p className="text-lg text-slate-400 leading-relaxed mb-6">
                        {t('fp_s1_desc')}
                    </p>
                    <ul className="space-y-3">
                        {['128k Token Memory', 'Long-term preference recall', 'Cross-session continuity'].map((item, i) => (
                            <li key={i} className="flex items-center gap-3 text-slate-300">
                                <div className="w-1.5 h-1.5 rounded-full bg-neon-fuchsia"></div>
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
      </section>

       {/* Feature 2: Tone Engine */}
       <section className="py-20 bg-white/5 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                <div className="flex-1">
                    <div className="w-12 h-12 bg-neon-amber/10 rounded-xl flex items-center justify-center mb-6 text-neon-amber border border-neon-amber/20">
                        <MessageCircle className="w-6 h-6" />
                    </div>
                    <h2 className="text-3xl font-bold text-white mb-4">{t('fp_s2_title')}</h2>
                    <p className="text-lg text-slate-400 leading-relaxed mb-6">
                        {t('fp_s2_desc')}
                    </p>
                    <div className="grid grid-cols-2 gap-4 mt-8">
                        <div className="p-4 rounded-lg bg-dark-bg border border-white/10">
                            <h4 className="text-neon-cyan font-bold text-sm mb-1">Corporate</h4>
                            <p className="text-xs text-slate-500">"We appreciate your inquiry. A representative will assist shortly."</p>
                        </div>
                        <div className="p-4 rounded-lg bg-dark-bg border border-neon-amber/30 shadow-[0_0_15px_rgba(245,158,11,0.1)]">
                            <h4 className="text-neon-amber font-bold text-sm mb-1">Casual</h4>
                            <p className="text-xs text-slate-300">"Thanks for reaching out! Hold tight, we'll get you sorted in a sec."</p>
                        </div>
                    </div>
                </div>
                <div className="flex-1">
                    {/* Tone Slider Visual */}
                    <div className="relative w-full max-w-[500px] bg-dark-bg/50 backdrop-blur-md rounded-3xl border border-white/10 p-8 shadow-2xl">
                         <div className="space-y-6">
                            {[
                                { label: 'Empathy', val: '80%', color: 'bg-neon-fuchsia' },
                                { label: 'Formality', val: '40%', color: 'bg-neon-cyan' },
                                { label: 'Verbosity', val: '60%', color: 'bg-neon-amber' }
                            ].map((s, i) => (
                                <div key={i}>
                                    <div className="flex justify-between text-sm text-slate-400 mb-2">
                                        <span>{s.label}</span>
                                        <span>{s.val}</span>
                                    </div>
                                    <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                                        <div className={`h-full ${s.color} w-[${s.val}] rounded-full shadow-[0_0_10px_currentColor]`} style={{width: s.val}}></div>
                                    </div>
                                </div>
                            ))}
                         </div>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* Feature 3: Security */}
      <section className="py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                 <div className="flex-1 order-2 lg:order-1">
                     <div className="relative w-full max-w-[500px] h-[300px] mx-auto bg-dark-card rounded-2xl border border-white/10 overflow-hidden flex flex-col p-6">
                        <div className="flex items-center gap-2 mb-4 border-b border-white/5 pb-4">
                            <div className="w-3 h-3 rounded-full bg-red-500"></div>
                            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                            <div className="w-3 h-3 rounded-full bg-green-500"></div>
                            <div className="ml-auto text-xs text-slate-500">Security Log</div>
                        </div>
                        <div className="space-y-3 font-mono text-xs">
                             <div className="flex gap-2">
                                <span className="text-slate-500">[10:02:45]</span>
                                <span className="text-neon-cyan">Analyzing prompt...</span>
                             </div>
                             <div className="flex gap-2">
                                <span className="text-slate-500">[10:02:46]</span>
                                <span className="text-red-400">Threat detected: Competitor Mention</span>
                             </div>
                             <div className="flex gap-2">
                                <span className="text-slate-500">[10:02:46]</span>
                                <span className="text-neon-amber">Guardrail Active: Redirecting topic...</span>
                             </div>
                             <div className="flex gap-2">
                                <span className="text-slate-500">[10:02:47]</span>
                                <span className="text-green-400">Response Approved.</span>
                             </div>
                        </div>
                        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-dark-card to-transparent"></div>
                     </div>
                </div>
                <div className="flex-1 order-1 lg:order-2">
                    <div className="w-12 h-12 bg-neon-cyan/10 rounded-xl flex items-center justify-center mb-6 text-neon-cyan border border-neon-cyan/20">
                        <Lock className="w-6 h-6" />
                    </div>
                    <h2 className="text-3xl font-bold text-white mb-4">{t('fp_s3_title')}</h2>
                    <p className="text-lg text-slate-400 leading-relaxed mb-6">
                        {t('fp_s3_desc')}
                    </p>
                    <div className="flex gap-4">
                        <div className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-sm text-slate-300 flex items-center gap-2">
                            <GitBranch className="w-4 h-4 text-neon-cyan" /> Topic Enforcement
                        </div>
                        <div className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-sm text-slate-300 flex items-center gap-2">
                            <Lock className="w-4 h-4 text-neon-fuchsia" /> PII Redaction
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-24 text-center z-10 relative">
          <h2 className="text-3xl font-bold text-white mb-8">Seen enough? Let's build it.</h2>
          <a href="/#contact" className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-neon-fuchsia to-neon-cyan text-white px-10 py-4 rounded-full text-lg font-bold hover:brightness-110 transition-all shadow-[0_0_30px_rgba(217,70,239,0.4)]">
              Start Building Now
          </a>
      </section>
    </div>
  );
};