import React from 'react';

export default function FeaturedProjectsCallout({ onNavigate }) {
  return (
    <section id="projects" className="scroll-mt-28">
      <div className="relative glass-panel rounded-3xl p-8 sm:p-12 text-center overflow-hidden group border border-white/[0.08] hover:border-brand-500/40 transition-all">
        <div className="absolute inset-0 bg-gradient-to-r from-brand-600/10 via-indigo-600/10 to-accent-cyan/10 pointer-events-none" />
        <div className="relative z-10 max-w-2xl mx-auto space-y-5">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-300 font-mono text-xs uppercase tracking-wider">
            <span className="w-2 h-2 rounded-full bg-brand-400" />
            <span>Showcase &middot; პორტფოლიო</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            🚀 ჩემი გამორჩეული პროექტები
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            სერვერული არქიტექტურა, მონაცემთა ნაკადები, უსაფრთხოება და რეალურ დროში მომუშავე სისტემები. პროექტების დეტალური კატალოგის სანახავად გადადით მეორე გვერდზე:
          </p>
          <div className="pt-2 flex flex-wrap justify-center gap-4">
            <button
              onClick={() => onNavigate('projects')}
              className="inline-flex items-center gap-3 px-8 py-4 rounded-xl font-semibold text-sm bg-gradient-to-r from-brand-600 via-indigo-600 to-brand-500 hover:from-brand-500 hover:to-indigo-500 text-white shadow-xl shadow-brand-600/30 transition-all transform hover:scale-105 active:scale-95 group cursor-pointer"
            >
              <span>👉 ყველა პროექტის ნახვა (გვერდი 2)</span>
              <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

