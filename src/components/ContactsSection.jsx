import React, { useState } from 'react';

export default function ContactsSection({ onCopyEmail, onShowToast }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      onShowToast('გთხოვთ შეავსოთ სავალდებულო ველები', false);
      return;
    }
    onShowToast(`გმადლობთ, ${formData.name}! შეტყობინება წარმატებით გაიგზავნა.`, true);
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
  };

  return (
    <section id="contacts" className="scroll-mt-28 space-y-8">
      <div className="border-b border-white/[0.08] pb-6">
        <div className="flex items-center gap-2 text-emerald-400 font-mono text-xs uppercase tracking-wider mb-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400" />
          <span>Get In Touch</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          4. Contacts (კონტაქტი)
        </h2>
        <p className="text-slate-400 text-sm mt-1 max-w-xl">
          მზად ვარ საინტერესო პროექტებისა და სამუშაო შემოთავაზებებისთვის.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Contact Methods Column */}
        <div className="lg:col-span-5 glass-panel rounded-3xl p-8 space-y-6">
          <h3 className="text-xl font-bold text-white">საკონტაქტო არხები</h3>
          <p className="text-slate-400 text-xs leading-relaxed">
            შეგიძლიათ პირდაპირ მომწეროთ ან გაეცნოთ ჩემს რეპოზიტორიებს GitHub-ზე.
          </p>

          <address className="not-italic space-y-4">
            {/* Location Item */}
            <div className="flex items-center gap-4 p-4 rounded-2xl bg-surface-card border border-white/[0.06]">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center text-lg">
                📍
              </div>
              <div>
                <span className="text-xs text-slate-400 font-mono">მდებარეობა:</span>
                <p className="text-sm font-semibold text-white">თბილისი, საქართველო (Tbilisi, Georgia)</p>
              </div>
            </div>

            {/* GitHub Item */}
            <a
              href="https://github.com/giorgi-bezhiashvili"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-4 rounded-2xl bg-surface-card hover:bg-surface-cardHover border border-white/[0.06] hover:border-brand-500/40 transition-all group gap-3 min-w-0"
            >
              <div className="flex items-center gap-3 sm:gap-4 min-w-0">
                <div className="w-10 h-10 rounded-xl bg-white/[0.05] border border-white/[0.1] text-white flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    />
                  </svg>
                </div>
                <div className="min-w-0">
                  <span className="text-xs text-slate-400 font-mono">GitHub Profile:</span>
                  <p className="text-xs sm:text-sm font-semibold text-white group-hover:text-brand-300 transition-colors truncate">
                    github.com/giorgi-bezhiashvili
                  </p>
                </div>
              </div>
              <svg className="w-4 h-4 text-slate-400 group-hover:text-brand-300 transform group-hover:translate-x-1 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>

            {/* Email Quick Copy Box */}
            <div className="p-4 rounded-2xl bg-surface-card border border-white/[0.06] flex items-center justify-between gap-3 min-w-0">
              <div className="flex items-center gap-3 sm:gap-4 min-w-0 flex-1">
                <div className="w-10 h-10 rounded-xl bg-brand-500/10 border border-brand-500/20 text-brand-400 flex items-center justify-center flex-shrink-0">
                  📫
                </div>
                <div className="min-w-0 flex-1">
                  <span className="text-xs text-slate-400 font-mono block">Direct Email:</span>
                  <p className="text-xs sm:text-sm font-mono font-medium text-white break-all select-all" title="giorgibezhiashvili5@gmail.com">
                    giorgibezhiashvili5@gmail.com
                  </p>
                </div>
              </div>
              <button
                onClick={() => onCopyEmail('giorgibezhiashvili5@gmail.com')}
                className="p-2.5 rounded-xl bg-white/[0.05] hover:bg-brand-600 text-slate-300 hover:text-white transition-all flex-shrink-0 cursor-pointer"
                title="Copy Email"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </button>
            </div>
          </address>
        </div>

        {/* Interactive Quick Message Form */}
        <div className="lg:col-span-7 glass-panel rounded-3xl p-8 space-y-6">
          <div>
            <h3 className="text-xl font-bold text-white">გამოგზავნეთ შეტყობინება</h3>
            <p className="text-xs text-slate-400 mt-1">დამიტოვეთ მოკლე წერილი და შევეცდები მალე გიპასუხოთ.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label htmlFor="sender-name" className="block text-xs font-mono text-slate-300">
                  თქვენი სახელი *
                </label>
                <input
                  type="text"
                  id="sender-name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="მაგ. ალექსანდრე"
                  className="w-full px-4 py-3 rounded-xl bg-surface-card border border-white/[0.08] focus:border-brand-500 focus:ring-1 focus:ring-brand-500 text-white placeholder-slate-500 text-sm outline-none transition-all"
                />
              </div>
              <div className="space-y-1.5">
                <label htmlFor="sender-email" className="block text-xs font-mono text-slate-300">
                  ელ-ფოსტა *
                </label>
                <input
                  type="email"
                  id="sender-email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="name@company.com"
                  className="w-full px-4 py-3 rounded-xl bg-surface-card border border-white/[0.08] focus:border-brand-500 focus:ring-1 focus:ring-brand-500 text-white placeholder-slate-500 text-sm outline-none transition-all"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label htmlFor="sender-subject" className="block text-xs font-mono text-slate-300">
                თემა
              </label>
              <input
                type="text"
                id="sender-subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="მაგ. ახალი პროექტი / ვაკანსია"
                className="w-full px-4 py-3 rounded-xl bg-surface-card border border-white/[0.08] focus:border-brand-500 focus:ring-1 focus:ring-brand-500 text-white placeholder-slate-500 text-sm outline-none transition-all"
              />
            </div>

            <div className="space-y-1.5">
              <label htmlFor="sender-message" className="block text-xs font-mono text-slate-300">
                შეტყობინება *
              </label>
              <textarea
                id="sender-message"
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="აღწერეთ თქვენი პროექტი ან შემოთავაზება..."
                className="w-full px-4 py-3 rounded-xl bg-surface-card border border-white/[0.08] focus:border-brand-500 focus:ring-1 focus:ring-brand-500 text-white placeholder-slate-500 text-sm outline-none transition-all resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3.5 px-6 rounded-xl font-semibold text-sm bg-gradient-to-r from-brand-600 via-indigo-600 to-brand-500 hover:from-brand-500 hover:to-indigo-500 text-white shadow-xl shadow-brand-600/25 transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>🚀 შეტყობინების გაგზავნა</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

