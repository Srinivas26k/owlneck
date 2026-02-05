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
        <footer className="relative bg-vapor-white border-t border-silver-divider overflow-hidden" itemScope itemType="https://schema.org/Organization">
            {/* Decorative gradient blur */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10"></div>
            <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-soft-azure rounded-full blur-3xl -z-10"></div>

            <div className="max-w-[1800px] mx-auto px-6 md:px-12 lg:px-20 py-10 lg:py-14">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12">
                    {/* Company Info - AI/SEO: Authority statement in footer */}
                    <div className="sm:col-span-2 lg:col-span-3">
                        <div className="mb-4">
                            <h3 className="font-display text-2xl font-bold tracking-tight text-navy-premium mb-2" itemProp="name">
                                CYBERARCMSP
                            </h3>
                            <p className="text-base text-text-muted leading-relaxed font-medium" itemProp="slogan">
                                Enterprise AI, Cloud & Technology Solutions
                            </p>
                        </div>
                        {/* AI/SEO: Quotable authority statement */}
                        <p className="text-base text-text-muted leading-relaxed max-w-sm font-medium" itemProp="description">
                            AI/ML solutions, cloud & DevSecOps, SaaS, and cybersecurity services for global enterprises.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="lg:col-span-2">
                        <h4 className="text-sm font-bold uppercase tracking-widest mb-4 text-navy-premium">
                            Quick Links
                        </h4>
                        <ul className="space-y-2">
                            <li><a href="/" className="text-base text-foreground hover:text-primary transition-colors duration-300 font-medium">Home</a></li>
                            <li><a href="/about" className="text-base text-foreground hover:text-primary transition-colors duration-300 font-medium">About Us</a></li>
                            <li><a href="/services" className="text-base text-foreground hover:text-primary transition-colors duration-300 font-medium">Services</a></li>
                            <li><a href="/contact" className="text-base text-foreground hover:text-primary transition-colors duration-300 font-medium">Contact</a></li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div className="sm:col-span-2 lg:col-span-4">
                        <h4 className="text-sm font-bold uppercase tracking-widest mb-4 text-navy-premium">
                            Our Services
                        </h4>
                        <div className='grid grid-cols-1 xs:grid-cols-2 gap-x-6 gap-y-2'>
                            <a href="/services/cybersecurity-services" className="text-base text-foreground hover:text-primary transition-colors font-medium">Cybersecurity Services</a>
                            <a href="/services/corporate-training" className="text-base text-foreground hover:text-primary transition-colors font-medium">Corporate Training</a>
                            <a href="/services/aiml-services" className="text-base text-foreground hover:text-primary transition-colors font-medium">AIML Services</a>
                            <a href="/services/ai-powered-toolkit" className="text-base text-foreground hover:text-primary transition-colors font-medium">AI Powered Toolkit</a>
                            <a href="/services/cloud-devsecops" className="text-base text-foreground hover:text-primary transition-colors font-medium">Cloud & DevSecOps</a>
                            <a href="/services/saas-services" className="text-base text-foreground hover:text-primary transition-colors font-medium">SaaS Services</a>
                            <a href="/services/audit-compliance" className="text-base text-foreground hover:text-primary transition-colors font-medium">Audit & Compliance</a>
                            <a href="/services/c-level-services" className="text-base text-foreground hover:text-primary transition-colors font-medium">C-Level Advisory</a>
                            <a href="/services/financial-reports" className="text-base text-foreground hover:text-primary transition-colors font-medium">Financial Reports</a>
                        </div>
                    </div>

                    {/* Contact Info */}
                    <div className="lg:col-span-3">
                        <h4 className="text-sm font-bold uppercase tracking-widest mb-4 text-navy-premium">
                            Get In Touch
                        </h4>
                        <ul className="space-y-3">
                            <li>
                                <a href="mailto:contact@cyberarcmsp.com" className="text-base text-foreground hover:text-primary transition-colors duration-300 font-medium flex items-center gap-2" itemProp="email">
                                    <span className="material-symbols-outlined text-base text-primary">mail</span>
                                    contact@cyberarcmsp.com
                                </a>
                            </li>
                            <li>
                                <a href="tel:+917842325201" className="text-base text-foreground hover:text-primary transition-colors duration-300 font-medium flex items-center gap-2" itemProp="telephone">
                                    <span className="material-symbols-outlined text-base text-primary">phone</span>
                                    +91 7842325201
                                </a>
                            </li>
                            <li>
                                <a href="https://x.com/cyberarcmsp" target="_blank" rel="noopener noreferrer" className="text-base text-foreground hover:text-primary transition-colors duration-300 font-medium flex items-center gap-2">
                                    <svg viewBox="0 0 24 24" className="w-4 h-4 text-primary fill-current" aria-hidden="true"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></svg>
                                    Follow on X
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Global Offices Section */}
                <div className="mt-10 pt-8 border-t border-silver-divider/50">
                    <h4 className="text-xs font-bold uppercase tracking-widest mb-6 text-navy-premium text-center opacity-50">
                        Global Presence
                    </h4>

                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
                        {GLOBAL_OFFICES.map((office) => (
                            <div
                                key={office.city}
                                className="group flex items-center gap-2 opacity-70 hover:opacity-100 transition-opacity cursor-default"
                                itemProp="location"
                                itemScope
                                itemType="https://schema.org/Place"
                            >
                                <span className="text-lg sm:text-xl grayscale group-hover:grayscale-0 transition-all flex-shrink-0">{office.flag}</span>
                                <div className="text-left min-w-0">
                                    <span className="text-xs sm:text-sm font-bold uppercase tracking-wide text-navy-premium block leading-tight">
                                        {office.city}
                                        {office.isHQ && <span className="ml-1 text-[10px] sm:text-xs text-primary">• HQ</span>}
                                    </span>
                                    <p
                                        className="text-[10px] sm:text-xs text-text-muted font-light truncate"
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
                <div className="mt-8 pt-6 border-t border-silver-divider/50 flex flex-col sm:flex-row justify-between items-center gap-4">
                    <p className="text-sm text-text-muted font-light">
                        © {currentYear} CyberArcMSP. All rights reserved.
                    </p>
                    <div className="flex gap-6 text-sm text-text-muted font-light">
                        <a href="#" className="hover:text-primary transition-colors duration-300">Privacy</a>
                        <a href="#" className="hover:text-primary transition-colors duration-300">Terms</a>
                        <a href="#" className="hover:text-primary transition-colors duration-300">Cookies</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
