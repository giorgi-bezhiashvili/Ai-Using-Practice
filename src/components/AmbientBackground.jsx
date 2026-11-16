import React from 'react';

export default function AmbientBackground() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      <div className="glow-sphere absolute -top-40 -left-40 w-96 h-96 bg-brand-600/25 rounded-full animate-pulse-glow" />
      <div className="glow-sphere absolute top-1/3 -right-40 w-[30rem] h-[30rem] bg-accent-cyan/15 rounded-full animate-float" />
      <div className="glow-sphere absolute bottom-20 left-1/4 w-[28rem] h-[28rem] bg-accent-purple/15 rounded-full animate-float-delayed" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
    </div>
  );
}

