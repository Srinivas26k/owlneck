'use client';

import React, { useState, useEffect } from 'react';

interface NavigationProps {
  currentPage?: string;
}

export default function Navigation({ currentPage = 'home' }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { href: '/', label: 'Home', key: 'home' },
    { href: '/about', label: 'About', key: 'about' },
    { href: '/services', label: 'Services', key: 'services' },
    { href: '/contact', label: 'Contact', key: 'contact' },
  ];

  // Prevent scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  return (
    <>
      {/* Main Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex justify-between items-start p-6 md:p-10 transition-all duration-300">
        <div className="glass-effect absolute inset-x-4 top-4 bottom-0 rounded-2xl -z-10 shadow-sm opacity-90 h-20 md:h-24"></div>

        {/* Logo / Location Info */}
        <a href="/" className="flex flex-col gap-1 relative z-20">
          <span className="text-[10px] uppercase tracking-widest font-semibold text-navy-premium">CyberArcMSP</span>
          <span className="text-[10px] uppercase tracking-widest text-text-muted">New York, USA</span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-12 absolute left-1/2 -translate-x-1/2 top-10 relative z-20">
          {navItems.map(item => (
            <a
              key={item.key}
              href={item.href}
              className={`text-[11px] uppercase tracking-widest font-semibold transition-colors ${currentPage === item.key
                ? 'text-primary relative after:content-[\'\'] after:absolute after:-bottom-2 after:left-1/2 after:-translate-x-1/2 after:w-1 after:h-1 after:bg-primary after:rounded-full'
                : 'text-navy-premium hover:text-primary'
                }`}
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Menu Button */}
        <div className="flex flex-col items-end gap-1 relative z-20">
          <button
            onClick={() => setIsMenuOpen(true)}
            className="group flex items-center gap-2"
            aria-label="Open menu"
          >
            <span className="text-[10px] uppercase tracking-widest font-bold hidden sm:block text-navy-premium group-hover:text-primary transition-colors">
              Menu
            </span>
            <span className="material-symbols-outlined text-2xl cursor-pointer text-navy-premium group-hover:text-primary transition-colors">
              menu
            </span>
          </button>
        </div>
      </nav>

      {/* Full-Screen Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-[100] bg-white/95 backdrop-blur-xl transition-all duration-500 ${isMenuOpen
          ? 'opacity-100 visible'
          : 'opacity-0 invisible'
          }`}
        onClick={() => setIsMenuOpen(false)}
      >
        {/* Decorative gradients matching approved templates */}
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px] -z-10"></div>
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-soft-azure rounded-full blur-[80px] -z-10"></div>

        {/* Close Button */}
        <button
          onClick={() => setIsMenuOpen(false)}
          className="absolute top-8 right-8 md:top-12 md:right-12 z-50 w-12 h-12 rounded-full bg-white border border-silver-divider flex items-center justify-center hover:bg-primary hover:border-primary hover:text-white transition-all duration-300 group"
          aria-label="Close menu"
        >
          <span className="material-symbols-outlined text-2xl text-navy-premium group-hover:text-white transition-colors">
            close
          </span>
        </button>

        {/* Menu Content */}
        <div
          className="flex flex-col items-center justify-center h-full px-6"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Navigation Links */}
          <nav className="flex flex-col items-center gap-8 md:gap-10 mb-16">
            {navItems.map((item, index) => (
              <a
                key={item.key}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className={`font-display text-4xl md:text-5xl lg:text-6xl uppercase tracking-tight transition-all duration-300 ${currentPage === item.key
                  ? 'text-primary'
                  : 'text-navy-premium hover:text-primary hover:translate-x-2'
                  }`}
                style={{
                  transitionDelay: isMenuOpen ? `${index * 50}ms` : '0ms',
                }}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Contact Info at Bottom */}
          <div className="text-center space-y-3">
            <p className="text-[10px] uppercase tracking-widest text-text-muted font-semibold">
              Direct Contact
            </p>
            <a
              href="mailto:hello@cyberarcmsp.com"
              className="font-serif text-xl md:text-2xl text-navy-premium hover:text-primary transition-colors block"
            >
              hello@cyberarcmsp.com
            </a>
            <p className="text-sm text-text-muted font-light">
              New York, USA · EST Timezone
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
