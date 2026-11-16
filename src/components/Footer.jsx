import React from 'react';

export default function Footer({ onNavigate }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative z-10 border-t border-white/[0.08] bg-[#070a13]/90 py-12 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-brand-600/20 border border-brand-500/30 flex items-center justify-center font-mono text-xs font-bold text-brand-300">
            GB
          </div>
          <div>
            <p className="text-sm font-semibold text-white">&copy; 2026 Giorgi Bezhashvili</p>
            <p className="text-xs text-slate-400">Full-Stack &amp; Backend Engineer</p>
          </div>
        </div>

        <div className="flex items-center gap-6 text-xs text-slate-400 font-mono flex-wrap justify-center">
          <button
            onClick={() => onNavigate('home', 'main')}
            className="hover:text-white transition-colors"
          >
            მთავარი
          </button>
          <button
            onClick={() => onNavigate('projects')}
            className="hover:text-white transition-colors"
          >
            პროექტები
          </button>
          <button
            onClick={() => onNavigate('home', 'frontend-knowledge')}
            className="hover:text-white transition-colors"
          >
            Front-End
          </button>
          <button
            onClick={() => onNavigate('home', 'backend-knowledge')}
            className="hover:text-white transition-colors"
          >
            Backend
          </button>
          <a
            href="https://github.com/giorgi-bezhiashvili"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-brand-300 transition-colors"
          >
            GitHub
          </a>
        </div>

        {/* Back to top button */}
        <button
          onClick={scrollToTop}
          aria-label="Back to top"
          className="p-3 rounded-xl bg-white/[0.05] hover:bg-brand-600 text-slate-300 hover:text-white border border-white/[0.08] transition-all cursor-pointer"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
      </div>
    </footer>
  );
}

