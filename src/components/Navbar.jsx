import React, { useState } from 'react';

export default function Navbar({ activePage, onNavigate }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (target, sectionId = null) => {
    setMobileMenuOpen(false);
    onNavigate(target, sectionId);
  };

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-xl bg-[#070a13]/80 border-b border-white/[0.08] transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <button
          onClick={() => handleNavClick('home', 'main')}
          className="flex items-center gap-3 group focus:outline-none text-left"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-brand-600 to-accent-cyan p-[2px] transition-transform group-hover:scale-105 shadow-lg shadow-brand-500/20">
            <div className="w-full h-full bg-[#0b1021] rounded-[10px] flex items-center justify-center font-mono font-bold text-base text-brand-300">
              &lt;/&gt;
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-white tracking-tight group-hover:text-brand-300 transition-colors">
              Giorgi Bezhashvili
            </span>
            <span className="text-xs text-slate-400 font-mono">Full-Stack · Nest.js</span>
          </div>
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 bg-surface-subtle/80 p-1.5 rounded-full border border-white/[0.06] backdrop-blur-md">
          <button
            onClick={() => handleNavClick('home', 'main')}
            className={`px-4 py-2 rounded-full text-xs uppercase tracking-wider font-semibold transition-all ${
              activePage === 'home'
                ? 'text-white bg-white/[0.08]'
                : 'text-slate-300 hover:text-white hover:bg-white/[0.06]'
            }`}
          >
            მთავარი
          </button>
          <button
            onClick={() => handleNavClick('projects')}
            className={`px-4 py-2 rounded-full text-xs uppercase tracking-wider font-semibold transition-all ${
              activePage === 'projects'
                ? 'text-white bg-brand-600 shadow-md shadow-brand-600/30'
                : 'text-slate-300 hover:text-white hover:bg-white/[0.06]'
            }`}
          >
            პროექტები
          </button>
          <button
            onClick={() => handleNavClick('home', 'frontend-knowledge')}
            className="px-4 py-2 rounded-full text-xs uppercase tracking-wider font-semibold text-slate-300 hover:text-white hover:bg-white/[0.06] transition-all"
          >
            Front-End
          </button>
          <button
            onClick={() => handleNavClick('home', 'backend-knowledge')}
            className="px-4 py-2 rounded-full text-xs uppercase tracking-wider font-semibold text-slate-300 hover:text-white hover:bg-white/[0.06] transition-all"
          >
            Backend
          </button>
          <button
            onClick={() => handleNavClick('home', 'about')}
            className="px-4 py-2 rounded-full text-xs uppercase tracking-wider font-semibold text-slate-300 hover:text-white hover:bg-white/[0.06] transition-all"
          >
            ჩემ შესახებ
          </button>
          <button
            onClick={() => handleNavClick('home', 'contacts')}
            className="px-4 py-2 rounded-full text-xs uppercase tracking-wider font-semibold text-slate-300 hover:text-white hover:bg-white/[0.06] transition-all"
          >
            კონტაქტი
          </button>
        </nav>

        {/* Header Quick Action */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href="https://github.com/giorgi-bezhiashvili"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold font-mono bg-white/[0.05] hover:bg-white/[0.1] text-slate-200 border border-white/[0.1] hover:border-brand-400/50 transition-all shadow-sm"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
              />
            </svg>
            <span>GitHub</span>
          </a>
          <button
            onClick={() => handleNavClick('home', 'contacts')}
            className="px-4 py-2 rounded-xl text-xs font-semibold bg-gradient-to-r from-brand-600 to-brand-500 hover:from-brand-500 hover:to-brand-400 text-white shadow-lg shadow-brand-500/25 transition-all"
          >
            კონტაქტი
          </button>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Navigation Menu"
          className="md:hidden p-2 rounded-xl bg-white/[0.05] border border-white/[0.1] text-slate-300 hover:text-white"
        >
          {mobileMenuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-white/[0.08] bg-[#070a13]/95 backdrop-blur-2xl px-6 py-6 space-y-3">
          <button
            onClick={() => handleNavClick('home', 'main')}
            className={`w-full text-left py-2 font-medium border-b border-white/[0.04] transition-colors ${
              activePage === 'home' ? 'text-white' : 'text-slate-300 hover:text-white'
            }`}
          >
            1. მთავარი (Main)
          </button>
          <button
            onClick={() => handleNavClick('projects')}
            className={`w-full text-left py-2 font-medium border-b border-white/[0.04] transition-colors ${
              activePage === 'projects' ? 'text-brand-300 font-semibold' : 'text-slate-300 hover:text-white'
            }`}
          >
            🚀 გამორჩეული პროექტები
          </button>
          <button
            onClick={() => handleNavClick('home', 'frontend-knowledge')}
            className="w-full text-left py-2 text-slate-300 hover:text-white font-medium border-b border-white/[0.04] transition-colors"
          >
            2. Front-End ცოდნა
          </button>
          <button
            onClick={() => handleNavClick('home', 'backend-knowledge')}
            className="w-full text-left py-2 text-slate-300 hover:text-white font-medium border-b border-white/[0.04] transition-colors"
          >
            3. Backend ცოდნა
          </button>
          <button
            onClick={() => handleNavClick('home', 'about')}
            className="w-full text-left py-2 text-slate-300 hover:text-white font-medium border-b border-white/[0.04] transition-colors"
          >
            🌟 ჩემ შესახებ
          </button>
          <button
            onClick={() => handleNavClick('home', 'contacts')}
            className="w-full text-left py-2 text-slate-300 hover:text-white font-medium transition-colors"
          >
            4. კონტაქტი
          </button>
          <div className="pt-4 flex gap-3">
            <a
              href="https://github.com/giorgi-bezhiashvili"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center py-2.5 rounded-xl text-xs font-semibold bg-white/[0.06] border border-white/[0.1] text-white"
            >
              GitHub
            </a>
            <button
              onClick={() => handleNavClick('home', 'contacts')}
              className="flex-1 text-center py-2.5 rounded-xl text-xs font-semibold bg-brand-600 text-white"
            >
              დაკავშირება
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

