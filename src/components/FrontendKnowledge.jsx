import React from 'react';

export default function FrontendKnowledge() {
  return (
    <section id="frontend-knowledge" className="scroll-mt-28 space-y-8">
      <div className="border-b border-white/[0.08] pb-6">
        <div className="flex items-center gap-2 text-accent-cyan font-mono text-xs uppercase tracking-wider mb-2">
          <span className="w-2 h-2 rounded-full bg-accent-cyan" />
          <span>Knowledge Base</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          2. Front-End Knowledge (Front-End ცოდნა)
        </h2>
        <p className="text-slate-400 text-sm mt-1 max-w-2xl">
          მომხმარებლის ინტერფეისის შემუშავების გამოცდილება, Next.js ინტეგრაცია და სრულსტეკიანი ურთიერთქმედება.
        </p>
      </div>

      {/* Front-End Main Card */}
      <div className="glass-panel rounded-3xl p-8 space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/[0.08] pb-6">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-white/[0.05] border border-white/[0.1] flex items-center justify-center font-bold text-white text-xl">
              ▲
            </div>
            <div>
              <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-medium bg-accent-cyan/10 text-accent-cyan border border-accent-cyan/20">
                Working Knowledge
              </span>
              <h3 className="text-2xl font-bold text-white mt-1">Next.js &amp; Modern Front-End</h3>
            </div>
          </div>
          <div className="text-xs font-mono text-slate-400 bg-surface-card px-4 py-2 rounded-xl border border-white/[0.06]">
            Applied in <span className="text-brand-300 font-semibold">Newton Project</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
          <div className="p-5 rounded-2xl bg-surface-card border border-white/[0.06] space-y-3">
            <div className="text-brand-400 text-lg">🧩</div>
            <h4 className="text-base font-bold text-white">ინტერფეისის შემუშავება</h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              ინტერფეისის შემუშავებასთან დაკავშირებული თანამედროვე ხელსაწყოები, კომპონენტური არქიტექტურა და სუფთა სტილიზაცია.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-surface-card border border-white/[0.06] space-y-3">
            <div className="text-accent-cyan text-lg">🔗</div>
            <h4 className="text-base font-bold text-white">Full-Stack ინტეგრაცია</h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              სრულსტეკიან პროექტებში ფრონტენდისა და ბექენდის ჰარმონიული დაკავშირება REST API-ების საშუალებით (მაგ. Newton).
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-surface-card border border-white/[0.06] space-y-3">
            <div className="text-emerald-400 text-lg">⚡</div>
            <h4 className="text-base font-bold text-white">რეაქტიულობა &amp; UX</h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              მომხმარებელზე ორიენტირებული სწრაფი რეაგირება, მდგომარეობის ეფექტური მართვა და საიმედო მონაცემთა ნაკადები.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

