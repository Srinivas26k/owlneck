import React from 'react';

interface NavigationProps {
  currentPage?: string;
}

export default function Navigation({ currentPage = 'home' }: NavigationProps) {
  const navItems = [
    { href: '/', label: 'Home', key: 'home' },
    { href: '/about', label: 'About Us', key: 'about' },
    { href: '/services', label: 'Services', key: 'services' },
    { href: '/#contact', label: 'Contact', key: 'contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-between items-start p-6 md:p-10 transition-all duration-300">
      <div className="glass-effect absolute inset-x-4 top-4 bottom-0 rounded-2xl -z-10 shadow-sm opacity-90 h-20 md:h-24"></div>

      <a href="/" className="flex flex-col gap-1 relative z-20">
        <img
          src="/logo.png"
          alt="CyberArcMSP"
          className="h-12 md:h-14 w-auto object-contain"
        />
      </a>

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

      <div className="flex flex-col items-end gap-1 relative z-20">
        <button className="group flex items-center gap-2">
          <span className="text-[10px] uppercase tracking-widest font-bold hidden sm:block text-navy-premium group-hover:text-primary transition-colors">
            Menu
          </span>
          <span className="material-symbols-outlined text-2xl cursor-pointer text-navy-premium group-hover:text-primary transition-colors">
            menu
          </span>
        </button>
      </div>
    </nav>
  );
}
