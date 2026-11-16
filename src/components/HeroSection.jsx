import React from 'react';

export default function HeroSection({ onNavigate, onCopyEmail }) {
  return (
    <section id="main" className="pt-6 sm:pt-12 scroll-mt-28">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Introduction & Pitch */}
        <div className="lg:col-span-7 space-y-6">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-medium shadow-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span>Available for Full-Stack &amp; Backend Roles</span>
          </div>

          {/* Main H1 Title */}
          <div className="space-y-3">
            <p className="text-slate-400 font-mono text-sm tracking-wide">გამარჯობა! 👋 მე ვარ</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15]">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-slate-400">
                გიორგი ბეჟიაშვილი
              </span>
              <span className="block text-2xl sm:text-3xl lg:text-4xl font-bold mt-2 text-transparent bg-clip-text bg-gradient-to-r from-brand-400 via-indigo-300 to-accent-cyan">
                Full-Stack &amp; Backend დეველოპერი
              </span>
            </h1>
          </div>

          {/* Bio Paragraph */}
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl font-light">
            ორიენტირებული ვარ მასშტაბური <span className="text-brand-300 font-medium font-mono">REST API</span>-ებისა და მაღალდატვირთული სერვერული სისტემების შექმნაზე <span className="text-white font-medium">Nest.js</span>, <span className="text-white font-medium">Node.js</span>, <span className="text-white font-medium">TypeScript</span> და <span className="text-white font-medium">MongoDB</span> ტექნოლოგიების გამოყენებით.
          </p>

          {/* Tech Badges Strip */}
          <div className="pt-2 flex flex-wrap gap-2 text-xs font-mono">
            <span className="px-3 py-1.5 rounded-lg bg-surface-card border border-white/[0.08] text-brand-300 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-400" />Nest.js
            </span>
            <span className="px-3 py-1.5 rounded-lg bg-surface-card border border-white/[0.08] text-accent-cyan flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan" />TypeScript
            </span>
            <span className="px-3 py-1.5 rounded-lg bg-surface-card border border-white/[0.08] text-emerald-300 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />Node.js
            </span>
            <span className="px-3 py-1.5 rounded-lg bg-surface-card border border-white/[0.08] text-green-300 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400" />MongoDB
            </span>
            <span className="px-3 py-1.5 rounded-lg bg-surface-card border border-white/[0.08] text-slate-300 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-slate-400" />Next.js
            </span>
            <span className="px-3 py-1.5 rounded-lg bg-surface-card border border-white/[0.08] text-purple-300 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />Socket.io
            </span>
          </div>

          {/* Call To Actions */}
          <div className="pt-4 flex flex-wrap items-center gap-4">
            <button
              onClick={() => onNavigate('projects')}
              className="px-6 py-3 rounded-xl font-semibold text-sm bg-gradient-to-r from-brand-600 via-indigo-600 to-brand-500 hover:from-brand-500 hover:to-indigo-500 text-white shadow-xl shadow-brand-600/30 transition-all flex items-center gap-2 group cursor-pointer"
            >
              <span>🚀 პროექტების ნახვა</span>
              <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
            <button
              onClick={() => onNavigate('home', 'contacts')}
              className="px-6 py-3 rounded-xl font-semibold text-sm bg-surface-card hover:bg-surface-cardHover text-slate-200 border border-white/[0.1] hover:border-brand-500/50 transition-all cursor-pointer"
            >
              📫 დამიკავშირდით
            </button>
            <button
              onClick={() => onCopyEmail('giorgibezhiashvili5@gmail.com')}
              className="px-4 py-3 rounded-xl font-mono text-xs text-slate-300 hover:text-white bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.08] transition-all flex items-center gap-2 cursor-pointer"
            >
              <svg className="w-4 h-4 text-brand-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
              </svg>
              <span>Copy Email</span>
            </button>
          </div>

          {/* Quick Metrics Counter Strip */}
          <div className="pt-6 grid grid-cols-3 gap-4 border-t border-white/[0.06]">
            <div>
              <div className="text-2xl font-bold font-mono text-white">4+</div>
              <div className="text-xs text-slate-400">Architecture Projects</div>
            </div>
            <div>
              <div className="text-2xl font-bold font-mono text-brand-400">100%</div>
              <div className="text-xs text-slate-400">TypeScript &amp; REST APIs</div>
            </div>
            <div>
              <div className="text-2xl font-bold font-mono text-accent-cyan">Tbilisi</div>
              <div className="text-xs text-slate-400">Georgia (UTC+4)</div>
            </div>
          </div>
        </div>

        {/* Right Column: Visual Avatar & Interactive Terminal Card */}
        <div className="lg:col-span-5 flex flex-col items-center">
          <div className="relative w-full max-w-md">
            {/* Ambient aura behind card */}
            <div className="absolute -inset-1 bg-gradient-to-r from-brand-600 to-accent-cyan rounded-3xl blur-xl opacity-30 animate-pulse-glow" />

            <div className="relative glass-panel rounded-3xl overflow-hidden p-6 space-y-6">
              {/* Avatar with status rings */}
              <div className="flex items-center gap-5">
                <div className="relative group">
                  <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden ring-2 ring-brand-500/50 p-1 bg-gradient-to-tr from-brand-600 via-indigo-500 to-accent-cyan shadow-xl">
                    <img
                      src="/assets/avatar.jpg"
                      alt="Giorgi Bezhashvili Avatar"
                      className="w-full h-full object-cover rounded-xl transition-transform duration-500 group-hover:scale-105"
                      onError={(e) => {
                        e.currentTarget.src = './assets/avatar.jpg';
                      }}
                    />
                  </div>
                  <div className="absolute -bottom-1.5 -right-1.5 w-6 h-6 rounded-full bg-[#070a13] flex items-center justify-center">
                    <span className="w-3.5 h-3.5 rounded-full bg-emerald-400 border-2 border-[#070a13]" />
                  </div>
                </div>
                <div className="space-y-1">
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono uppercase tracking-wider font-semibold bg-brand-500/20 text-brand-300 border border-brand-500/30">
                    Backend Architect
                  </span>
                  <h3 className="text-xl font-bold text-white">Giorgi Bezhashvili</h3>
                  <p className="text-xs text-slate-400 font-mono">Full-Stack Engineer</p>
                  <p className="text-xs text-slate-400 flex items-center gap-1">
                    <span>📍</span> თბილისი, საქართველო
                  </p>
                </div>
              </div>

              {/* Interactive Mock Terminal Code View */}
              <div className="rounded-xl bg-[#090d16] border border-white/[0.08] overflow-hidden text-xs font-mono shadow-inner">
                <div className="px-4 py-2.5 bg-[#0e1424] border-b border-white/[0.06] flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                  </div>
                  <span className="text-slate-500 text-[11px]">giorgi-developer.ts</span>
                  <span className="text-[10px] text-brand-400 font-semibold">TypeScript</span>
                </div>
                <div className="p-4 space-y-1 text-slate-300 leading-relaxed terminal-code">
                  <div><span className="text-purple-400">interface</span> <span className="text-amber-300">Developer</span> {'{'}</div>
                  <div className="pl-4">name: <span className="text-emerald-300">'Giorgi Bezhashvili'</span>;</div>
                  <div className="pl-4">focus: <span className="text-emerald-300">'Scalable Backend &amp; APIs'</span>;</div>
                  <div className="pl-4">stack: [<span className="text-cyan-300">'NestJS'</span>, <span className="text-cyan-300">'TS'</span>, <span className="text-cyan-300">'Mongo'</span>, <span className="text-cyan-300">'Next'</span>];</div>
                  <div className="pl-4">readyToDeploy: <span className="text-brand-400">true</span>;</div>
                  <div>{'}'}</div>
                </div>
              </div>

              {/* Live Quote Card */}
              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.06] text-xs text-slate-300 italic flex items-start gap-3">
                <span className="text-brand-400 text-lg font-serif">“</span>
                <div>
                  <p className="leading-relaxed">„ლაპარაკი იაფია. მანახე კოდი.“</p>
                  <p className="mt-1 text-[11px] text-slate-400 font-mono not-italic">— ლინუს ტორვალდსი (Linus Torvalds)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

