import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight, Github, Twitter, Linkedin } from 'lucide-react';

// --- Custom Cursor ---
const CustomCursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      if (cursorRef.current && dotRef.current) {
        // Dot follows instantly
        dotRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
        
        // Ring follows with slight delay (simulated via CSS transition or simple lag)
        // For pure smoothness, we use direct assignment here but the CSS transition property on the element creates the lag
        setTimeout(() => {
           if(cursorRef.current) cursorRef.current.style.transform = `translate3d(${e.clientX - 12}px, ${e.clientY - 12}px, 0)`;
        }, 50);
      }
    };

    const onMouseDown = () => {
      if (cursorRef.current) cursorRef.current.classList.add('scale-75');
    };
    const onMouseUp = () => {
       if (cursorRef.current) cursorRef.current.classList.remove('scale-75');
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
    };
  }, []);

  return (
    <>
      <div 
        ref={cursorRef} 
        className="custom-cursor fixed top-0 left-0 w-8 h-8 border border-electric rounded-full pointer-events-none z-[9999] transition-transform duration-100 ease-out hidden md:block mix-blend-difference"
      />
      <div 
        ref={dotRef}
        className="custom-cursor fixed top-0 left-0 w-1.5 h-1.5 bg-electric rounded-full pointer-events-none z-[9999] -ml-[3px] -mt-[3px] hidden md:block"
      />
    </>
  );
};

// --- Scroll Progress Bar ---
const ScrollProgress: React.FC = () => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.body.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = (window.scrollY / totalHeight) * 100;
        setWidth(progress);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 h-[3px] z-[60] bg-gradient-to-r from-primary to-sunset transition-all duration-100 ease-out" style={{ width: `${width}%` }} />
  );
};

// --- Header ---
const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b ${
        isScrolled 
          ? 'bg-white/90 backdrop-blur-md border-gray-200 py-4 shadow-sm' 
          : 'bg-transparent border-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold tracking-tight text-primary z-50">
          OWLNECK
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path}
              className={`text-sm font-medium transition-colors hover:text-electric relative group ${
                location.pathname === link.path ? 'text-electric' : 'text-navy'
              }`}
            >
              {link.name}
              <span className={`absolute -bottom-1 left-0 w-full h-[2px] bg-electric scale-x-0 group-hover:scale-x-100 transition-transform origin-left ${
                location.pathname === link.path ? 'scale-x-100' : ''
              }`} />
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
           <Link to="/contact" className="group relative inline-flex items-center gap-2 px-6 py-2.5 bg-sunset text-white text-sm font-medium rounded-full overflow-hidden transition-all hover:bg-opacity-90 hover:shadow-lg hover:-translate-y-0.5">
             <span className="relative z-10">Book Consultation</span>
             <ArrowRight className="w-4 h-4 relative z-10 transition-transform group-hover:translate-x-1" />
           </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden z-50 p-2 text-navy"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>

        {/* Mobile Menu */}
        <div className={`fixed inset-0 bg-white z-40 flex flex-col items-center justify-center gap-8 transition-transform duration-300 ease-in-out md:hidden ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
           {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path}
              onClick={() => setMobileMenuOpen(false)}
              className="text-2xl font-semibold text-navy hover:text-electric"
            >
              {link.name}
            </Link>
          ))}
          <Link to="/contact" onClick={() => setMobileMenuOpen(false)} className="px-8 py-3 bg-sunset text-white text-lg rounded-full">
            Book Consultation
          </Link>
        </div>
      </div>
    </header>
  );
};

// --- Footer ---
const Footer: React.FC = () => {
  return (
    <footer className="bg-primary text-white pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
        <div>
          <h3 className="text-2xl font-bold mb-6">OWLNECK</h3>
          <p className="text-gray-300 text-sm leading-relaxed mb-6">
            Empowering businesses with secure, scalable, and intelligent IT infrastructure. 
            Building the future of enterprise technology.
          </p>
          <div className="flex gap-4">
             <a href="#" className="p-2 border border-white/20 rounded-full hover:bg-sunset hover:border-sunset transition-colors"><Twitter size={18} /></a>
             <a href="#" className="p-2 border border-white/20 rounded-full hover:bg-sunset hover:border-sunset transition-colors"><Linkedin size={18} /></a>
             <a href="#" className="p-2 border border-white/20 rounded-full hover:bg-sunset hover:border-sunset transition-colors"><Github size={18} /></a>
          </div>
        </div>
        
        <div>
          <h4 className="text-lg font-semibold mb-6">Platform</h4>
          <ul className="space-y-4 text-gray-300 text-sm">
            <li><Link to="/services" className="hover:text-sunset transition-colors">Managed Services</Link></li>
            <li><Link to="/services" className="hover:text-sunset transition-colors">Cloud Solutions</Link></li>
            <li><Link to="/about" className="hover:text-sunset transition-colors">Our Team</Link></li>
            <li><a href="#" className="hover:text-sunset transition-colors">Case Studies</a></li>
            <li><a href="#" className="hover:text-sunset transition-colors">System Status</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-6">Legal & Support</h4>
          <ul className="space-y-4 text-gray-300 text-sm">
            <li><a href="#" className="hover:text-sunset transition-colors">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-sunset transition-colors">Terms of Service</a></li>
            <li><a href="#" className="hover:text-sunset transition-colors">Cookie Policy</a></li>
            <li><Link to="/contact" className="hover:text-sunset transition-colors">Contact Support</Link></li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 mt-20 pt-8 border-t border-white/10 text-center text-gray-400 text-xs">
        © {new Date().getFullYear()} OWLNECK. All rights reserved.
      </div>
    </footer>
  );
};

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <CustomCursor />
      <ScrollProgress />
      <Header />
      <main className="flex-grow pt-20">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
