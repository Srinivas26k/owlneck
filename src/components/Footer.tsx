import React from 'react';
import { Link } from 'react-router-dom';
import { Twitter, Linkedin, Github, ArrowRight } from 'lucide-react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-primary text-white pt-20 pb-10">
            <div className="container mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
                    {/* Company Info */}
                    <div className="space-y-6">
                        <h3 className="text-2xl font-bold tracking-tight">OWLNECK</h3>
                        <p className="text-white/70 max-w-xs leading-relaxed">
                            Empowering businesses with secure, scalable, and intelligent IT managed services.
                            1ms response time. 99% uptime guarantee.
                        </p>
                        <div className="flex space-x-4">
                            {[Twitter, Linkedin, Github].map((Icon, idx) => (
                                <a
                                    key={idx}
                                    href="#"
                                    className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-sunset hover:border-sunset transition-all duration-300 group"
                                >
                                    <Icon size={18} className="text-white group-hover:scale-110 transition-transform" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Platform Links */}
                    <div>
                        <h4 className="text-lg font-semibold mb-6">Platform</h4>
                        <ul className="space-y-4">
                            {['About', 'Services', 'Case Studies', 'Pricing', 'Contact'].map((item) => (
                                <li key={item}>
                                    <Link
                                        to={`/${item.toLowerCase().replace(' ', '-')}`}
                                        className="text-white/70 hover:text-sunset transition-colors flex items-center group w-fit"
                                    >
                                        <ArrowRight size={14} className="mr-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Legal Links */}
                    <div>
                        <h4 className="text-lg font-semibold mb-6">Legal</h4>
                        <ul className="space-y-4">
                            {['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'Security Audit', 'SLA'].map((item) => (
                                <li key={item}>
                                    <a href="#" className="text-white/70 hover:text-sunset transition-colors">
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-white/50">
                    <p>© {new Date().getFullYear()} OWLNECK. All rights reserved.</p>
                    <div className="mt-4 md:mt-0 flex space-x-6">
                        <a href="#" className="hover:text-white transition-colors">Privacy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
