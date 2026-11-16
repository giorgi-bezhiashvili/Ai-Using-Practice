import React from 'react';

export default function Toast({ toast }) {
  if (!toast) return null;

  return (
    <div
      className={`fixed bottom-6 right-6 z-50 transition-all duration-300 pointer-events-none flex items-center gap-3 px-5 py-3 rounded-xl bg-slate-900/95 border border-brand-500/30 text-white shadow-2xl backdrop-blur-xl ${
        toast.visible
          ? 'transform translate-y-0 opacity-100'
          : 'transform translate-y-24 opacity-0'
      }`}
    >
      <span className={toast.isSuccess ? 'text-accent-emerald text-lg' : 'text-accent-cyan text-lg'}>
        {toast.isSuccess ? '✓' : 'ℹ'}
      </span>
      <span className="text-sm font-medium">{toast.message}</span>
    </div>
  );
}

