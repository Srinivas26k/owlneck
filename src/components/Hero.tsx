'use client';

import React, { useEffect, useState } from 'react';

interface HeroProps {
  title?: string;
  subtitle?: string;
  backgroundImage?: string;
  variant?: 'home' | 'services' | 'about';
}

export default function Hero({
  title = 'CYBERARC.MSP',
  subtitle = 'Elite Standards, Institutional Grade Architecture',
  backgroundImage,
  variant = 'home'
}: HeroProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (variant === 'services') {
    return (
      <header className="relative pt-48 pb-24 px-6 md:px-12 w-full flex items-center justify-center overflow-hidden mesh-gradient">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px] -z-10 animate-pulse"></div>
        <div className="absolute top-20 right-1/4 w-[400px] h-[400px] bg-soft-azure rounded-full blur-[80px] -z-10"></div>
        
        <div className="max-w-[1400px] w-full relative z-10 text-center scroll-reveal">
          <span className="inline-block py-1 px-3 rounded-full bg-white border border-silver-divider text-[10px] uppercase tracking-widest font-bold text-primary mb-6 shadow-sm">
            Elite Capabilities
          </span>
          <h1 className="font-serif font-medium text-5xl md:text-7xl lg:text-8xl text-navy-premium tracking-tight mb-8">
            Our Capabilities
          </h1>
          <p className="max-w-2xl mx-auto text-text-muted font-light text-lg leading-relaxed">
            We orchestrate digital resilience through high-fidelity infrastructure and institutional-grade security architectures.
          </p>
        </div>
      </header>
    );
  }

  if (variant === 'about') {
    return (
      <header className="relative w-full min-h-[85vh] flex items-center justify-center overflow-hidden bg-vapor-white pt-32 pb-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/40 to-vapor-white z-10"></div>
          <div className="absolute inset-0 mesh-gradient-header z-10 mix-blend-soft-light"></div>
        </div>
        <div className="absolute top-1/3 left-10 w-64 h-64 bg-white/40 rounded-full blur-3xl z-0 animate-pulse"></div>
        <div className="absolute bottom-1/3 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl z-0"></div>
        
        <div className="relative z-20 w-full px-6 md:px-12 max-w-[1400px] mx-auto text-center scroll-reveal">
          <span className="inline-block py-1 px-3 rounded-full border border-primary/20 bg-white/50 backdrop-blur-sm text-[10px] font-bold uppercase tracking-widest text-primary mb-8 shadow-sm">
            Our Mission
          </span>
          <h1 className="font-serif font-medium text-4xl md:text-6xl lg:text-7xl leading-[1.15] tracking-tight text-navy-premium max-w-5xl mx-auto drop-shadow-sm">
            "To empower organizations with <span className="italic text-primary">intelligent, compliant</span>, and <span className="italic text-primary">future‑proof</span> cybersecurity delivered as a seamless, fully managed service."
          </h1>
          <div className="mt-12 flex justify-center">
            <div className="h-16 w-[1px] bg-gradient-to-b from-primary to-transparent"></div>
          </div>
        </div>
      </header>
    );
  }

  // Home variant
  return (
    <header className="relative w-full h-[100vh] min-h-[700px] flex items-center justify-center overflow-hidden bg-vapor-white pt-20">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-transparent to-vapor-white z-10"></div>
        <div className="absolute inset-0 bg-teal-500/5 mix-blend-overlay z-10"></div>
        {backgroundImage && (
          <img
            alt="Corporate Environment"
            className="w-full h-full object-cover opacity-90"
            src={backgroundImage || "/placeholder.svg"}
          />
        )}
      </div>
      <div className="absolute top-1/4 left-10 w-64 h-64 bg-white/20 rounded-full blur-3xl z-0 animate-pulse"></div>
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl z-0"></div>

      <div className="relative z-10 w-full px-6 md:px-12 flex flex-col items-center justify-center h-full">
        <div className={`text-center w-full max-w-[1400px] relative transition-all duration-1000 ${
          mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h1 className="font-display font-bold text-[16vw] leading-[0.8] tracking-tighter text-glossy uppercase select-none opacity-90 drop-shadow-sm">
            CYBER
          </h1>
          <div className="relative inline-block w-full">
            <h1 className="font-display font-bold text-[16vw] leading-[0.8] tracking-tighter text-glossy uppercase select-none relative z-10">
              ARC<span className="text-primary text-[16vw] leading-[0.8] animate-pulse">.</span>MSP
            </h1>
            <div className="absolute -top-[1vw] right-[8vw] size-[5vw] min-w-[50px] min-h-[50px] bg-white/60 backdrop-blur-md border border-white/50 shadow-lg rounded-full flex items-center justify-center transform rotate-12 hover:rotate-0 transition-transform duration-500">
              <span className="text-primary font-bold text-[2vw]">R</span>
            </div>
          </div>
        </div>

        <div className="absolute bottom-12 left-0 right-0 px-6 md:px-12 flex justify-between items-end text-navy-premium">
          <div className="hidden md:flex gap-8 text-[11px] uppercase tracking-widest font-medium">
            <span className="flex items-center gap-2"><span className="w-2 h-2 bg-primary rounded-full"></span>Security</span>
            <span className="flex items-center gap-2"><span className="w-2 h-2 bg-primary rounded-full opacity-50"></span>Infrastructure</span>
            <span className="flex items-center gap-2"><span className="w-2 h-2 bg-primary rounded-full opacity-25"></span>Compliance</span>
          </div>
          <div className="text-[11px] uppercase tracking-widest text-right font-medium leading-relaxed">
            <span className="opacity-60">Elite Standards</span><br />
            Institutional Grade Architecture
          </div>
        </div>
      </div>
    </header>
  );
}
