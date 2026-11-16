import React from 'react';

export default function AboutSection() {
  return (
    <section id="about" className="scroll-mt-28 space-y-8">
      <div className="border-b border-white/[0.08] pb-6">
        <div className="flex items-center gap-2 text-amber-400 font-mono text-xs uppercase tracking-wider mb-2">
          <span className="w-2 h-2 rounded-full bg-amber-400" />
          <span>Persona &amp; Mindset</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          🌟 ჩემ შესახებ (About Me)
        </h2>
        <p className="text-slate-400 text-sm mt-1 max-w-xl">
          ცხოვრების წესი, დისციპლინა, ინტერესები და პროგრამირებისადმი მიდგომა.
        </p>
      </div>

      {/* Bento-Style Grid for About */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* Martial Arts & Calisthenics (Large) */}
        <div className="md:col-span-7 glass-panel glass-panel-hover rounded-3xl p-8 relative overflow-hidden group">
          <div className="absolute -right-8 -bottom-8 w-44 h-44 bg-rose-500/10 rounded-full blur-2xl pointer-events-none" />
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-400 text-xs font-mono">
              🥋 Discipline &amp; Strength
            </div>
            <h3 className="text-2xl font-bold text-white">
              საბრძოლო ხელოვნება და კალისტენიკა
            </h3>
            <p className="text-slate-300 text-base leading-relaxed">
              „ჩემი მეორე ენა TypeScript-ის შემდეგ.“ ფიზიკური ვარჯიში, კალისტენიკა და საბრძოლო ხელოვნება მასწავლის მკაცრ დისციპლინას, ფოკუსირებას და ამოცანების ბოლომდე მიყვანის უნარს ნებისმიერ დატვირთვაში.
            </p>
          </div>
        </div>

        {/* Chess & Math */}
        <div className="md:col-span-5 glass-panel glass-panel-hover rounded-3xl p-8 relative overflow-hidden group">
          <div className="absolute -right-8 -bottom-8 w-44 h-44 bg-brand-500/10 rounded-full blur-2xl pointer-events-none" />
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-300 text-xs font-mono">
              ♟ Strategy &amp; Logic
            </div>
            <h3 className="text-2xl font-bold text-white">
              ჭადრაკი &amp; მათემატიკა
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed">
              ალგორითმული აზროვნება, რამდენიმე სვლით წინ გათვლა, პრობლემის დეკომპოზიცია და სტრატეგიული დაგეგმვა — როგორც საჭადრაკო დაფაზე, ისე პროგრამულ არქიტექტურაში.
            </p>
          </div>
        </div>

        {/* Linux & Windows Daily Driver */}
        <div className="md:col-span-6 glass-panel glass-panel-hover rounded-3xl p-8 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-mono">
            🐧 OS &amp; Environment
          </div>
          <h3 className="text-2xl font-bold text-white">
            Linux და Windows გარემო
          </h3>
          <p className="text-slate-300 text-sm leading-relaxed">
            ყოველდღიურად თავისუფლად ვიყენებ როგორც Linux სისტემებს (CLI, Shell scripting, სერვერული კონფიგურაციები), ისე Windows-საც 😆. ადაპტირება ნებისმიერ სამუშაო გარემოსთან.
          </p>
        </div>

        {/* Location & Quote Block */}
        <div className="md:col-span-6 glass-panel glass-panel-hover rounded-3xl p-8 space-y-5 flex flex-col justify-between">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono">
              📍 Location
            </div>
            <h3 className="text-2xl font-bold text-white mt-2">
              თბილისი, საქართველო
            </h3>
            <p className="text-slate-400 text-sm">
              ღია ვარ როგორც ლოკალური, ისე დისტანციური (Remote) საერთაშორისო თანამშრომლობისთვის.
            </p>
          </div>

          {/* Quote Block */}
          <blockquote className="p-4 rounded-2xl bg-black/40 border border-white/[0.08] text-slate-300">
            <p className="italic text-sm">„ლაპარაკი იაფია. მანახე კოდი.“</p>
            <cite className="block text-xs font-mono text-brand-300 not-italic mt-2">— ლინუს ტორვალდსი</cite>
          </blockquote>
        </div>
      </div>
    </section>
  );
}

