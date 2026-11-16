import React from 'react';

export default function BackendKnowledge() {
  return (
    <section id="backend-knowledge" className="scroll-mt-28 space-y-8">
      <div className="border-b border-white/[0.08] pb-6">
        <div className="flex items-center gap-2 text-brand-400 font-mono text-xs uppercase tracking-wider mb-2">
          <span className="w-2 h-2 rounded-full bg-brand-400" />
          <span>Core Specialization</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          3. Backend Knowledge (Backend ცოდნა)
        </h2>
        <p className="text-slate-400 text-sm mt-1 max-w-2xl">
          სისტემური არქიტექტურა, სერვერული უსაფრთხოება, მონაცემთა ბაზები და მესამე მხარის სერვისების ინტეგრაცია.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Block 1: ძირითადი ტექნოლოგიები */}
        <div className="glass-panel glass-panel-hover rounded-3xl p-7 flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-brand-600/10 border border-brand-500/20 text-brand-400 flex items-center justify-center text-xl">
              ⚙️
            </div>
            <div>
              <span className="text-xs font-mono text-brand-400 uppercase tracking-wider font-semibold">Core Stack</span>
              <h3 className="text-xl font-bold text-white mt-1">ძირითადი ტექნოლოგიები</h3>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              სერვერული გადაწყვეტების ფუნდამენტური დასაყრდენი და არქიტექტურული მოდულარობა.
            </p>

            <div className="space-y-3 pt-2">
              <div className="p-3.5 rounded-xl bg-surface-card border border-white/[0.06] space-y-1">
                <div className="flex items-center justify-between text-xs font-mono font-bold text-white">
                  <span className="flex items-center gap-2">
                    <span className="text-emerald-400">●</span> Node.js &amp; Nest.js
                  </span>
                  <span className="text-brand-300">Core</span>
                </div>
                <p className="text-[11px] text-slate-400">Dependency Injection, Controllers, Services &amp; Enterprise Patterns</p>
              </div>

              <div className="p-3.5 rounded-xl bg-surface-card border border-white/[0.06] space-y-1">
                <div className="flex items-center justify-between text-xs font-mono font-bold text-white">
                  <span className="flex items-center gap-2">
                    <span className="text-accent-cyan">●</span> TypeScript
                  </span>
                  <span className="text-accent-cyan">Type-Safe</span>
                </div>
                <p className="text-[11px] text-slate-400">მკაცრი ტიპიზაცია, ინტერფეისები, Generic ტიპები და DTO-ები</p>
              </div>

              <div className="p-3.5 rounded-xl bg-surface-card border border-white/[0.06] space-y-1">
                <div className="flex items-center justify-between text-xs font-mono font-bold text-white">
                  <span className="flex items-center gap-2">
                    <span className="text-green-400">●</span> MongoDB
                  </span>
                  <span className="text-green-400">NoSQL</span>
                </div>
                <p className="text-[11px] text-slate-400">Mongoose მოდელები, აგრეგაციის მილსადენები და ინდექსირება</p>
              </div>
            </div>
          </div>
        </div>

        {/* Block 2: ინტეგრაციები და ბიბლიოთეკები */}
        <div className="glass-panel glass-panel-hover rounded-3xl p-7 flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-accent-cyan/10 border border-accent-cyan/20 text-accent-cyan flex items-center justify-center text-xl">
              🔌
            </div>
            <div>
              <span className="text-xs font-mono text-accent-cyan uppercase tracking-wider font-semibold">Ecosystem</span>
              <h3 className="text-xl font-bold text-white mt-1">ინტეგრაციები &amp; ბიბლიოთეკები</h3>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              მესამე მხარის სისტემების, გადახდებისა და უსაფრთხოების მოდულების სინქრონიზაცია.
            </p>

            <div className="space-y-2.5 pt-2 text-xs">
              <div className="p-3 rounded-xl bg-surface-card border border-white/[0.06] flex items-center justify-between">
                <span className="font-medium text-white flex items-center gap-2">
                  <span className="text-purple-400">⚡</span> Socket.io
                </span>
                <span className="text-[11px] font-mono text-slate-400">რეალურ დროში კომუნიკაცია</span>
              </div>

              <div className="p-3 rounded-xl bg-surface-card border border-white/[0.06] flex items-center justify-between">
                <span className="font-medium text-white flex items-center gap-2">
                  <span className="text-indigo-400">💳</span> Stripe Connect
                </span>
                <span className="text-[11px] font-mono text-slate-400">გადახდების სისტემები</span>
              </div>

              <div className="p-3 rounded-xl bg-surface-card border border-white/[0.06] flex items-center justify-between">
                <span className="font-medium text-white flex items-center gap-2">
                  <span className="text-amber-400">🔑</span> Passport.js
                </span>
                <span className="text-[11px] font-mono text-slate-400">ავტორიზაცია &amp; უსაფრთხოება</span>
              </div>

              <div className="p-3 rounded-xl bg-surface-card border border-white/[0.06] flex items-center justify-between">
                <span className="font-medium text-white flex items-center gap-2">
                  <span className="text-rose-400">🛡️</span> ClamAV
                </span>
                <span className="text-[11px] font-mono text-slate-400">ვირუსების სკანირება</span>
              </div>
            </div>
          </div>
        </div>

        {/* Block 3: გამოცდილება სისტემურ არქიტექტურაში */}
        <div className="glass-panel glass-panel-hover rounded-3xl p-7 flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-accent-purple/10 border border-accent-purple/20 text-accent-purple flex items-center justify-center text-xl">
              🏛️
            </div>
            <div>
              <span className="text-xs font-mono text-accent-purple uppercase tracking-wider font-semibold">Architecture</span>
              <h3 className="text-xl font-bold text-white mt-1">სისტემური არქიტექტურა</h3>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              სანდო, დაცული და მასშტაბირებადი სერვერული ინფრასტრუქტურის დიზაინი.
            </p>

            <div className="space-y-3 pt-2">
              <div className="p-3.5 rounded-xl bg-surface-card border border-white/[0.06] space-y-1">
                <div className="text-xs font-bold text-white flex items-center gap-2">
                  <span className="text-brand-400">✓</span> REST API დიზაინი
                </div>
                <p className="text-[11px] text-slate-400 leading-relaxed">
                  REST API-ების დაპროექტება, აწყობა, ვერსიონირება და მაღალი დატვირთვის მართვა.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-surface-card border border-white/[0.06] space-y-1">
                <div className="text-xs font-bold text-white flex items-center gap-2">
                  <span className="text-brand-400">✓</span> JWT &amp; Refresh Rotation
                </div>
                <p className="text-[11px] text-slate-400 leading-relaxed">
                  JSON Web Token ავტორიზაცია, ავტომატური refresh token rotation და secure cookie მექანიზმები.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

