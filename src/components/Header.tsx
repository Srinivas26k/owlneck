import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
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
            className={`fixed w-full z-50 transition-all duration-500 border-b ${scrolled
                    ? 'bg-white/80 backdrop-blur-xl py-4 shadow-sm border-gray-100'
                    : 'bg-transparent py-6 border-transparent'
                }`}
        >
            <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">

                {/* Logo */}
                <Link to="/" className="text-2xl font-bold tracking-tight text-navy animate-slide-in-left group">
                    OWL<span className="text-electric group-hover:text-sunset transition-colors duration-300">NECK</span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex gap-10 items-center">
                    {navLinks.map((link) => {
                        const isActive = location.pathname === link.path;
                        return (
                            <Link
                                key={link.name}
                                to={link.path}
                                className={`relative text-sm font-medium uppercase tracking-widest transition-colors hover:text-electric flex flex-col items-center group ${isActive ? 'text-navy' : 'text-gray-500'
                                    }`}
                            >
                                {link.name}
                                {/* Active Indicator (Thick Line) */}
                                <span className={`h-1 bg-electric rounded-full transition-all duration-300 mt-1 ${isActive ? 'w-full' : 'w-0 group-hover:w-1/2'
                                    }`} />
                                {/* Glowing Dot for Active */}
                                {isActive && (
                                    <span className="absolute -bottom-3 w-1.5 h-1.5 bg-electric rounded-full shadow-[0_0_8px_#0046FF]" />
                                )}
                            </Link>
                        )
                    })}
                </nav>

                {/* CTA Button */}
                <div className="hidden md:block">
                    <Link to="/contact">
                        <button className="px-8 py-3 rounded-full border border-gray-200 text-sm font-bold uppercase tracking-wider hover:bg-navy hover:text-white hover:border-navy transition-all duration-300 active:scale-95">
                            Get Started
                        </button>
                    </Link>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden text-navy p-2"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <div className={`fixed inset-0 bg-white/95 backdrop-blur-xl z-40 transition-transform duration-500 ease-in-out md:hidden flex flex-col items-center justify-center gap-12 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'
                }`}>
                {navLinks.map((link, idx) => (
                    <Link
                        key={link.name}
                        to={link.path}
                        onClick={() => setIsMenuOpen(false)}
                        className={`text-4xl font-light text-navy hover:text-electric transition-transform duration-300 ${isMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'}`}
                        style={{ transitionDelay: `${idx * 100}ms` }}
                    >
                        {link.name}
                    </Link>
                ))}
                <Link to="/contact" onClick={() => setIsMenuOpen(false)} className={`mt-8 px-12 py-4 bg-electric text-white rounded-full text-xl font-bold shadow-xl shadow-electric/30 active:scale-95 transition-all ${isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{ transitionDelay: '400ms' }}>
                    Get Started <ArrowRight className="inline ml-2" />
                </Link>
            </div>
        </header>
    );
};

export default Header;
