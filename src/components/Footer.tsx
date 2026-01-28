'use client';

import React from 'react';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="relative bg-vapor-white border-t border-silver-divider overflow-hidden">
            {/* Decorative gradient blur */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10"></div>
            <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-soft-azure rounded-full blur-3xl -z-10"></div>

            <div className="max-w-[1800px] mx-auto px-6 md:px-12 lg:px-20 py-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
                    {/* Company Info */}
                    <div className="lg:col-span-1">
                        <div className="mb-6">
                            <h3 className="font-display text-2xl font-bold tracking-tight text-navy-premium mb-2">
                                CYBERARC.MSP
                            </h3>
                            <p className="text-sm text-text-muted leading-relaxed font-light">
                                Elite Standards, Institutional Grade Architecture
                            </p>
                        </div>
                        <p className="text-sm text-text-muted leading-relaxed max-w-sm">
                            Delivering enterprise-grade cybersecurity solutions with medical-grade precision and institutional authority.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-[11px] font-bold uppercase tracking-widest mb-6 text-navy-premium">
                            Quick Links
                        </h4>
                        <ul className="space-y-3">
                            <li>
                                <a
                                    href="/"
                                    className="text-sm text-text-muted hover:text-primary transition-colors duration-300 font-light"
                                >
                                    Home
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/about"
                                    className="text-sm text-text-muted hover:text-primary transition-colors duration-300 font-light"
                                >
                                    About Us
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/services"
                                    className="text-sm text-text-muted hover:text-primary transition-colors duration-300 font-light"
                                >
                                    Services
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/contact"
                                    className="text-sm text-text-muted hover:text-primary transition-colors duration-300 font-light"
                                >
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-[11px] font-bold uppercase tracking-widest mb-6 text-navy-premium">
                            Our Services
                        </h4>
                        <ul className="space-y-3">
                            <li className="text-sm text-text-muted font-light">Cyber Defense</li>
                            <li className="text-sm text-text-muted font-light">Cloud Systems</li>
                            <li className="text-sm text-text-muted font-light">Compliance</li>
                            <li className="text-sm text-text-muted font-light">Infrastructure Management</li>
                            <li className="text-sm text-text-muted font-light">Security Architecture</li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-[11px] font-bold uppercase tracking-widest mb-6 text-navy-premium">
                            Get In Touch
                        </h4>
                        <ul className="space-y-4">
                            <li>
                                <a
                                    href="mailto:contact@cyberarc.msp"
                                    className="text-sm text-text-muted hover:text-primary transition-colors duration-300 font-light flex items-center gap-2"
                                >
                                    <span className="material-symbols-outlined text-base text-primary">mail</span>
                                    contact@cyberarc.msp
                                </a>
                            </li>
                            <li>
                                <a
                                    href="tel:+1234567890"
                                    className="text-sm text-text-muted hover:text-primary transition-colors duration-300 font-light flex items-center gap-2"
                                >
                                    <span className="material-symbols-outlined text-base text-primary">phone</span>
                                    +1 (234) 567-890
                                </a>
                            </li>
                            <li className="text-sm text-text-muted font-light flex items-start gap-2">
                                <span className="material-symbols-outlined text-base text-primary mt-0.5">location_on</span>
                                <span>123 Security Blvd<br />Enterprise City, EC 12345</span>
                            </li>
                        </ul>

                        {/* Social Media */}
                        <div className="mt-6 flex gap-3">
                            <a
                                href="#"
                                className="w-9 h-9 rounded-full bg-white border border-silver-divider flex items-center justify-center hover:bg-primary hover:border-primary hover:text-white transition-all duration-300 text-navy-premium"
                                aria-label="LinkedIn"
                            >
                                <span className="text-sm font-bold">in</span>
                            </a>
                            <a
                                href="#"
                                className="w-9 h-9 rounded-full bg-white border border-silver-divider flex items-center justify-center hover:bg-primary hover:border-primary hover:text-white transition-all duration-300 text-navy-premium"
                                aria-label="Twitter"
                            >
                                <span className="text-sm font-bold">𝕏</span>
                            </a>
                            <a
                                href="#"
                                className="w-9 h-9 rounded-full bg-white border border-silver-divider flex items-center justify-center hover:bg-primary hover:border-primary hover:text-white transition-all duration-300 text-navy-premium"
                                aria-label="GitHub"
                            >
                                <span className="text-sm font-bold">GH</span>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-16 pt-8 border-t border-silver-divider flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-xs text-text-muted font-light">
                        © {currentYear} CyberArc.MSP. All rights reserved.
                    </p>
                    <div className="flex gap-6 text-xs text-text-muted font-light">
                        <a href="#" className="hover:text-primary transition-colors duration-300">
                            Privacy Policy
                        </a>
                        <a href="#" className="hover:text-primary transition-colors duration-300">
                            Terms of Service
                        </a>
                        <a href="#" className="hover:text-primary transition-colors duration-300">
                            Cookie Policy
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
