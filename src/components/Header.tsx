import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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

    const isActive = (path: string) => {
        if (path === '/' && location.pathname !== '/') return false;
        return location.pathname.startsWith(path);
    };

    return (
        <header
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-6'
                }`}
        >
            <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
                <Link to="/" className="text-2xl font-bold text-primary tracking-tight z-50">
                    OWLNECK
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center space-x-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.path}
                            className={`relative text-sm font-medium transition-colors hover:text-electric group ${isActive(link.path) ? 'text-electric' : 'text-navy'
                                }`}
                        >
                            {link.name}
                            <span className={`absolute -bottom-1 left-0 w-full h-[2px] bg-electric transform origin-left transition-transform duration-300 ${isActive(link.path) ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                                }`} />
                        </Link>
                    ))}
                    <Link
                        to="/contact"
                        className="bg-sunset text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-orange-600 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-sunset/20"
                    >
                        Book Consultation
                    </Link>
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden z-50 text-navy"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

                {/* Mobile Overlay */}
                <div className={`fixed inset-0 bg-white z-40 flex flex-col items-center justify-center space-y-8 transition-transform duration-300 md:hidden ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
                    }`}>
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.path}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className={`text-2xl font-bold ${isActive(link.path) ? 'text-electric' : 'text-navy'
                                }`}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link
                        to="/contact"
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="bg-sunset text-white px-8 py-3 rounded-full text-lg font-bold shadow-lg shadow-sunset/30"
                    >
                        Book Consultation
                    </Link>
                </div>
            </div>
        </header>
    );
};

export default Header;
