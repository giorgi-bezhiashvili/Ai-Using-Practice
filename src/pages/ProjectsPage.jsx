import React, { useState } from 'react';
import { projectsData } from '../data/projectsData';

export default function ProjectsPage({ onNavigate }) {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredProjects = projectsData.filter((project) => {
    if (activeFilter === 'all') return true;
    return project.category === activeFilter;
  });

  const renderIcon = (type) => {
    switch (type) {
      case 'chat':
        return (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
            />
          </svg>
        );
      case 'cart':
        return (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
            />
          </svg>
        );
      case 'beaker':
        return (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
            />
          </svg>
        );
      case 'lock':
        return (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
            />
          </svg>
        );
      default:
        return null;
    }
  };

  const getBadgeColors = (category, categoryBadge) => {
    if (categoryBadge.includes('Realtime')) {
      return {
        iconBg: 'bg-brand-600/10 border-brand-500/20 text-brand-400',
        badge: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
        hoverText: 'group-hover:text-brand-300',
      };
    }
    if (categoryBadge.includes('FinTech')) {
      return {
        iconBg: 'bg-accent-cyan/10 border-accent-cyan/20 text-accent-cyan',
        badge: 'bg-accent-cyan/10 text-accent-cyan border-accent-cyan/20',
        hoverText: 'group-hover:text-accent-cyan',
      };
    }
    if (categoryBadge.includes('Full-Stack')) {
      return {
        iconBg: 'bg-accent-purple/10 border-accent-purple/20 text-accent-purple',
        badge: 'bg-accent-purple/10 text-accent-purple border-accent-purple/20',
        hoverText: 'group-hover:text-accent-purple',
      };
    }
    return {
      iconBg: 'bg-amber-500/10 border-amber-500/20 text-amber-400',
      badge: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
      hoverText: 'group-hover:text-amber-300',
    };
  };

  return (
    <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex-grow w-full space-y-10">
      {/* Header / Breadcrumbs & Back Navigation */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/[0.08]">
        <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
          <button
            onClick={() => onNavigate('home')}
            className="hover:text-brand-300 transition-colors cursor-pointer"
          >
            მთავარი
          </button>
          <span>/</span>
          <span className="text-white font-semibold">პროექტები (მეორე გვერდი)</span>
        </div>

        <button
          onClick={() => onNavigate('home')}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.1] hover:border-brand-500/40 text-slate-200 hover:text-white text-xs font-mono transition-all w-fit group cursor-pointer"
        >
          <svg
            className="w-4 h-4 transition-transform group-hover:-translate-x-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          <span>მთავარზე დაბრუნება</span>
        </button>
      </div>

      {/* FEATURED PROJECTS SECTION */}
      <section id="projects" className="space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-white/[0.08] pb-6">
          <div>
            <div className="flex items-center gap-2 text-brand-400 font-mono text-xs uppercase tracking-wider mb-2">
              <span className="w-2 h-2 rounded-full bg-brand-400" />
              <span>Showcase &middot; ნამუშევრების კატალოგი</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight flex items-center gap-3">
              <span>🚀 ჩემი გამორჩეული პროექტები</span>
            </h1>
            <p className="text-slate-400 text-sm mt-1 max-w-xl">
              სერვერული არქიტექტურა, მონაცემთა ნაკადები, უსაფრთხოება და რეალურ დროში მომუშავე სისტემები.
            </p>
          </div>

          {/* Project Category Filters */}
          <div className="flex items-center gap-1.5 p-1 bg-surface-card rounded-xl border border-white/[0.08] text-xs font-mono">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-3.5 py-1.5 rounded-lg transition-all cursor-pointer font-semibold ${
                activeFilter === 'all'
                  ? 'bg-brand-600 text-white'
                  : 'text-slate-300 hover:text-white hover:bg-white/[0.05]'
              }`}
            >
              ყველა
            </button>
            <button
              onClick={() => setActiveFilter('backend')}
              className={`px-3.5 py-1.5 rounded-lg transition-all cursor-pointer ${
                activeFilter === 'backend'
                  ? 'bg-brand-600 text-white font-semibold'
                  : 'text-slate-300 hover:text-white hover:bg-white/[0.05]'
              }`}
            >
              Backend &amp; API
            </button>
            <button
              onClick={() => setActiveFilter('fullstack')}
              className={`px-3.5 py-1.5 rounded-lg transition-all cursor-pointer ${
                activeFilter === 'fullstack'
                  ? 'bg-brand-600 text-white font-semibold'
                  : 'text-slate-300 hover:text-white hover:bg-white/[0.05]'
              }`}
            >
              Full-Stack
            </button>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8" id="projects-container">
          {filteredProjects.map((project) => {
            const styles = getBadgeColors(project.category, project.categoryBadge);

            return (
              <article
                key={project.id}
                data-category={project.category}
                className="project-card glass-panel glass-panel-hover rounded-3xl p-7 flex flex-col justify-between relative group"
              >
                <div className="space-y-4">
                  <div className="flex items-start justify-between gap-3">
                    <div className={`p-3 rounded-2xl border ${styles.iconBg}`}>
                      {renderIcon(project.iconType)}
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-mono font-medium border ${styles.badge}`}>
                      {project.categoryBadge}
                    </span>
                  </div>

                  <div>
                    <h3 className={`text-2xl font-bold text-white transition-colors ${styles.hoverText}`}>
                      {project.title}
                    </h3>
                    <p className="text-xs font-mono text-slate-400 mt-1">{project.subtitle}</p>
                  </div>

                  <p className="text-slate-300 text-sm leading-relaxed">{project.description}</p>

                  {/* Key Feature Highlights */}
                  <ul className="space-y-2 text-xs text-slate-300 pt-2">
                    {project.features.map((feat, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <span>{feat.icon}</span>
                        <span>
                          <strong>{feat.label}</strong> {feat.text}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-6 mt-6 border-t border-white/[0.08] space-y-4">
                  <div className="flex flex-wrap gap-1.5 text-[11px] font-mono">
                    {project.tech.map((t, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded-md bg-white/[0.05] text-slate-300 border border-white/[0.06]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-3">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 py-2.5 px-4 rounded-xl text-xs font-semibold font-mono bg-white/[0.06] hover:bg-brand-600 text-white transition-all text-center flex items-center justify-center gap-2 border border-white/[0.08] hover:border-transparent"
                    >
                      <span>View on GitHub</span>
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </main>
  );
}

