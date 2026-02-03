'use client';

import React from 'react';

const GLOBAL_OFFICES = [
    {
        country: 'India',
        city: 'Hyderabad',
        flag: '🇮🇳',
        isHQ: true,
        address: 'Jubilee Hills, Hyderabad, Telangana 500033, India',
        plusCode: '7J9W+VG Hyderabad',
    },
    {
        country: 'USA',
        city: 'Wyoming',
        flag: '🇺🇸',
        isHQ: false,
        address: '120 W Pearl Ave, Jackson, WY 83001, United States',
        plusCode: 'F6HP+7C Jackson, Wyoming',
    },
    {
        country: 'Canada',
        city: 'Toronto',
        flag: '🇨🇦',
        isHQ: false,
        address: '20 Camden St Suite 200, Toronto, ON M5V 1V1, Canada',
        plusCode: 'JJW3+W6 Toronto, Ontario',
    },
    {
        country: 'UK',
        city: 'London',
        flag: '🇬🇧',
        isHQ: false,
        address: '53-64 Chancery Ln, London WC2A 1QS, United Kingdom',
        plusCode: 'GV8P+XR London',
    },
    {
        country: 'UAE',
        city: 'Dubai',
        flag: '🇦🇪',
        isHQ: false,
        address: 'Bay Square - 12 P Floor, Business Bay, Dubai, UAE',
        plusCode: '57PJ+8Q Dubai',
    },
    {
        country: 'Australia',
        city: 'Melbourne',
        flag: '🇦🇺',
        isHQ: false,
        address: '17/31 Queen St, Melbourne VIC 3000, Australia',
        plusCode: '5XJ6+PQ Melbourne',
    },
];

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="relative bg-vapor-white border-t border-silver-divider overflow-hidden text-xs" itemScope itemType="https://schema.org/Organization">
            {/* Decorative gradient blur */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10"></div>
            <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-soft-azure rounded-full blur-3xl -z-10"></div>

            <div className="max-w-[1800px] mx-auto px-6 md:px-12 lg:px-20 py-8 lg:py-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
                    {/* Company Info */}
                    <div className="lg:col-span-1">
                        <div className="mb-3">
                            <h3 className="font-display text-xl font-bold tracking-tight text-navy-premium mb-1" itemProp="name">
                                CYBERARCMSP
                            </h3>
                            <p className="text-[10px] text-text-muted leading-relaxed font-light" itemProp="slogan">
                                Elite Standards, Institutional Grade Architecture
                            </p>
                        </div>
                        <p className="text-[10px] text-text-muted leading-relaxed max-w-sm" itemProp="description">
                            Delivering enterprise-grade cybersecurity solutions.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-[9px] font-bold uppercase tracking-widest mb-3 text-navy-premium opacity-70">
                            Quick Links
                        </h4>
                        <ul className="space-y-1.5">
                            <li><a href="/" className="text-text-muted hover:text-primary transition-colors duration-300 font-light">Home</a></li>
                            <li><a href="/about" className="text-text-muted hover:text-primary transition-colors duration-300 font-light">About Us</a></li>
                            <li><a href="/services" className="text-text-muted hover:text-primary transition-colors duration-300 font-light">Services</a></li>
                            <li><a href="/contact" className="text-text-muted hover:text-primary transition-colors duration-300 font-light">Contact</a></li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-[9px] font-bold uppercase tracking-widest mb-3 text-navy-premium opacity-70">
                            Our Services
                        </h4>
                        <ul className="space-y-1.5">
                            <li><a href="/services/cybersecurity-services" className="text-text-muted hover:text-primary transition-colors font-light">Cybersecurity</a></li>
                            <li><a href="/services/aiml-services" className="text-text-muted hover:text-primary transition-colors font-light">AI/ML Services</a></li>
                            <li><a href="/services/cloud-computing" className="text-text-muted hover:text-primary transition-colors font-light">Cloud & DevSecOps</a></li>
                            <li><a href="/services/audit-compliance" className="text-text-muted hover:text-primary transition-colors font-light">GRC & Compliance</a></li>
                            <li><a href="/services/managed-services" className="text-text-muted hover:text-primary transition-colors font-light">Managed Services</a></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-[9px] font-bold uppercase tracking-widest mb-3 text-navy-premium opacity-70">
                            Get In Touch
                        </h4>
                        <ul className="space-y-2">
                            <li>
                                <a href="mailto:contact@cyberarcmsp.com" className="text-text-muted hover:text-primary transition-colors duration-300 font-light flex items-center gap-2" itemProp="email">
                                    <span className="material-symbols-outlined text-sm text-primary">mail</span>
                                    contact@cyberarcmsp.com
                                </a>
                            </li>
                            <li>
                                <a href="tel:+917842325201" className="text-text-muted hover:text-primary transition-colors duration-300 font-light flex items-center gap-2" itemProp="telephone">
                                    <span className="material-symbols-outlined text-sm text-primary">phone</span>
                                    +91 7842325201
                                </a>
                            </li>
                            <li>
                                <a href="https://x.com/cyberarcmsp" target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-primary transition-colors duration-300 font-light flex items-center gap-2">
                                    <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 text-primary fill-current" aria-hidden="true"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></svg>
                                    Follow on X
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Global Offices Section */}
                <div className="mt-8 pt-6 border-t border-silver-divider/50">
                    <h4 className="text-[9px] font-bold uppercase tracking-widest mb-4 text-navy-premium text-center opacity-50">
                        Global Presence
                    </h4>

                    <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-center">
                        {GLOBAL_OFFICES.map((office) => (
                            <div
                                key={office.city}
                                className="group flex items-center gap-2 opacity-70 hover:opacity-100 transition-opacity cursor-default"
                                itemProp="location"
                                itemScope
                                itemType="https://schema.org/Place"
                            >
                                <span className="text-sm grayscale group-hover:grayscale-0 transition-all">{office.flag}</span>
                                <div className="text-left">
                                    <span className="text-[10px] font-bold uppercase tracking-wide text-navy-premium block leading-none">
                                        {office.city}
                                        {office.isHQ && <span className="ml-1 text-[8px] text-primary">• HQ</span>}
                                    </span>
                                    <p
                                        className="text-[9px] text-text-muted font-light truncate max-w-[120px]"
                                        itemProp="address"
                                        itemScope
                                        itemType="https://schema.org/PostalAddress"
                                        title={office.address}
                                    >
                                        <span itemProp="streetAddress">{office.country}</span>
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-6 pt-6 border-t border-silver-divider/50 flex flex-col md:flex-row justify-between items-center gap-3">
                    <p className="text-[10px] text-text-muted font-light">
                        © {currentYear} CyberArcMSP. All rights reserved.
                    </p>
                    <div className="flex gap-4 text-[10px] text-text-muted font-light">
                        <a href="#" className="hover:text-primary transition-colors duration-300">Privacy</a>
                        <a href="#" className="hover:text-primary transition-colors duration-300">Terms</a>
                        <a href="#" className="hover:text-primary transition-colors duration-300">Cookies</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
