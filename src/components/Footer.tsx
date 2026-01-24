import React from 'react';
import { Twitter, Linkedin, Github, Facebook, Send } from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

const Footer: React.FC = () => {
    return (
        <footer className="bg-navy text-white pt-32 pb-12 relative overflow-hidden">
            {/* Pulse Background */}
            <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-electric/10 rounded-full blur-[100px] animate-pulse pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-sunset/5 rounded-full blur-[80px] animate-pulse pointer-events-none" style={{ animationDelay: '2s' }} />

            <div className="container mx-auto px-6 md:px-12 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">

                    {/* Brand */}
                    <div className="space-y-8">
                        <Link to="/" className="text-3xl font-bold tracking-tight inline-block hover:scale-105 transition-transform flex items-center gap-3">
                            <img src={logo} alt="CyberArcMSP" className="h-10 w-auto bg-white/10 rounded-lg p-1" />
                            <span>CYBERARC<span className="text-electric">MSP</span></span>
                        </Link>
                        <p className="text-gray-400 leading-relaxed text-lg">
                            Building the future, one server at a time. Empowering enterprises with intelligent, secure, and scalable IT infrastructure.
                        </p>
                        <div className="flex gap-6">
                            {[Twitter, Linkedin, Github, Facebook].map((Icon, i) => (
                                <a key={i} href="#" className="p-3 bg-white/5 rounded-full hover:bg-electric hover:text-white transition-all duration-300 hover:-translate-y-1 hover:animate-bounce">
                                    <Icon size={20} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Links */}
                    <div>
                        <h4 className="font-bold text-xl mb-8 text-white">Platform</h4>
                        <ul className="space-y-4">
                            {['Solutions', 'Services', 'Case Studies', 'Pricing', 'Documentation'].map((item) => (
                                <li key={item}>
                                    <Link to="#" className="text-gray-400 hover:text-white transition-colors relative group inline-block">
                                        {item}
                                        <span className="absolute left-1/2 bottom-0 w-0 h-[2px] bg-electric transition-all duration-300 group-hover:w-full group-hover:left-0" />
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-xl mb-8 text-white">Company</h4>
                        <ul className="space-y-4">
                            {['About Us', 'Careers', 'Blog', 'Press Kit', 'Contact'].map((item) => (
                                <li key={item}>
                                    <Link to="#" className="text-gray-400 hover:text-white transition-colors relative group inline-block">
                                        {item}
                                        <span className="absolute left-1/2 bottom-0 w-0 h-[2px] bg-sunset transition-all duration-300 group-hover:w-full group-hover:left-0" />
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h4 className="font-bold text-xl mb-8 text-white">Stay Updated</h4>
                        <p className="text-gray-400 mb-6">Subscribe to our newsletter for the latest tech insights.</p>
                        <form className="flex rounded-full bg-white/5 border border-white/10 p-1 focus-within:border-electric transition-colors">
                            <input
                                type="email"
                                placeholder="Enter email"
                                className="bg-transparent border-none text-white px-4 py-2 w-full focus:outline-none placeholder-gray-500"
                            />
                            <button type="submit" className="p-3 bg-electric rounded-full text-white hover:bg-white hover:text-electric transition-colors">
                                <Send size={18} />
                            </button>
                        </form>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-12 flex flex-col md:flex-row justify-between items-center gap-6 text-gray-500 text-sm">
                    <p>&copy; {new Date().getFullYear()} CyberArcMSP Technologies. All rights reserved.</p>
                    <div className="flex gap-8">
                        <Link to="#" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link to="#" className="hover:text-white transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
