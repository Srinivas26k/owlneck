import React, { useState } from 'react';
import {
    Shield,
    Cloud,
    FileCheck,
    BarChart3,
    GraduationCap,
    Bot,
    Users,
    CheckCircle2,
    ArrowRight,
    Plus,
    Layers
} from 'lucide-react';
import { formatWhatsAppUrl } from 'omni-storefront';


const SERVICES = [
    {
        id: 'aiml',
        slug: 'aiml-services',
        title: 'AIML Services',
        description: 'Deploying bespoke machine learning models that analyze operational data to predict market shifts.',
        icon: Bot,
        color: 'bg-sky-50', // Replaced bg-soft-azure
        colSpan: 2,
    },
    {
        id: 'cloud',
        slug: 'cloud-computing',
        title: 'Cloud Computing',
        description: 'Elastic, scalable serverless architectures designed for high-availability and global reach.',
        icon: Cloud,
        color: 'bg-white',
        colSpan: 1,
    },
    {
        id: 'audit',
        slug: 'audit-compliance',
        title: 'Audit & Compliance',
        description: 'Precision regulatory frameworks covering HIPAA, GDPR, and ISO standards.',
        icon: FileCheck,
        color: 'bg-white',
        colSpan: 1,
    },
    {
        id: 'finance',
        slug: 'financial-reports',
        title: 'Financial Reports',
        description: 'Real-time data visualization of IT spend versus ROI for transparent fiscal governance.',
        icon: BarChart3,
        color: 'bg-white',
        colSpan: 1,
    },
    {
        id: 'training',
        slug: 'corporate-training',
        title: 'Corporate Training',
        description: 'Upskilling workforces with cybersecurity awareness and modern toolset proficiency.',
        icon: GraduationCap,
        color: 'bg-white',
        colSpan: 1,
    },
    {
        id: 'toolkit',
        slug: 'ai-powered-toolkit',
        title: 'AI Powered Toolkit',
        description: 'Proprietary automation scripts that reduce manual overhead by up to 40%.',
        icon: Shield,
        color: 'bg-white',
        colSpan: 1,
    },
    {
        id: 'saas',
        slug: 'saas-services',
        title: 'SaaS Services',
        description: 'End-to-end Software as a Service solutions delivering scalable, secure cloud applications.',
        icon: Layers,
        color: 'bg-white',
        colSpan: 1,
    },
    {
        id: 'managed',
        slug: 'c-level-services',
        title: 'C-Level Advisory & Managed Services',
        description: 'Enterprise-grade IT governance, cybersecurity leadership, and cloud financial optimization designed for executive-level risk management and scalable business growth.',
        icon: Users,
        color: 'bg-slate-900 text-white',
        colSpan: 1,
        dark: true,
    },
];

export default function InteractiveServices() {
    const [selected, setSelected] = useState<string[]>([]);

    const toggleService = (id: string) => {
        setSelected(prev =>
            prev.includes(id) ? prev.filter(s => s !== id) : [...prev, id]
        );
    };

    return (
        <div className="relative min-h-screen bg-slate-50 p-8 font-sans">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {SERVICES.map((service) => {
                    const isSelected = selected.includes(service.id);
                    const isDark = service.dark;

                    return (
                        <div
                            key={service.id}
                            className={`
                relative rounded-2xl p-8 transition-all duration-300 group border
                ${service.colSpan === 2 ? 'lg:col-span-2' : ''}
                ${isSelected
                                    ? 'ring-2 ring-blue-600 border-blue-600 transform scale-[1.02] shadow-xl' // Replaced primary
                                    : 'hover:shadow-lg hover:-translate-y-1 border-transparent'
                                }
                ${isDark
                                    ? 'bg-gradient-to-r from-slate-900 to-blue-900 text-white shadow-lg' // Replaced navy-premium
                                    : 'bg-white text-slate-900 shadow-sm border-slate-100'
                                }
              `}
                        >
                            {/* Click handler for selection on the card background */}
                            <div
                                className="absolute inset-0 z-0 cursor-pointer"
                                onClick={() => toggleService(service.id)}
                            />

                            {/* Selection Indicator */}
                            <div className={`absolute top-6 right-6 transition-all duration-300 pointer-events-none z-10 ${isSelected ? 'scale-100 opacity-100' : 'scale-75 opacity-0 group-hover:opacity-50'}`}>
                                {isSelected ? (
                                    <div className="bg-blue-600 text-white rounded-full p-1">
                                        <CheckCircle2 className="w-5 h-5" />
                                    </div>
                                ) : (
                                    <div className={`rounded-full p-1 border ${isDark ? 'border-white/30' : 'border-slate-300'}`}>
                                        <Plus className={`w-5 h-5 ${isDark ? 'text-white' : 'text-slate-400'}`} />
                                    </div>
                                )}
                            </div>

                            <div className={`flex flex-col ${service.colSpan === 2 && 'md:flex-row md:items-center'} gap-6 relative z-10 pointer-events-none`}>
                                <div className={`
                  w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 transition-transform duration-500 group-hover:scale-110
                  ${isDark ? 'bg-white/10 text-white' : 'bg-sky-50 text-blue-600'} 
                `}>
                                    <service.icon className="w-7 h-7" strokeWidth={1.5} />
                                </div>

                                <div className="flex-1">
                                    <h3 className={`text-xl font-bold uppercase tracking-tight mb-2 ${isDark ? 'text-white' : 'text-slate-900'}`}>
                                        {service.title}
                                    </h3>
                                    <p className={`text-sm leading-relaxed font-light ${isDark ? 'text-slate-300' : 'text-slate-500'}`}>
                                        {service.description}
                                    </p>
                                </div>

                                {/* Learn More Link - Proper clickable element */}
                                <div className={`mt-4 md:mt-0 pointer-events-auto`}>
                                    <a href={`/services/${service.slug}`} className={`
                        inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest px-4 py-2 rounded-full border transition-all hover:scale-105
                        ${isDark
                                            ? 'border-white/20 text-white hover:bg-white hover:text-slate-900'
                                            : 'border-slate-200 text-slate-900 hover:border-blue-600 hover:text-blue-600'
                                        }
                    `}>
                                        Details
                                        <ArrowRight className="w-3 h-3" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    );
                })}


                {/* Floating Action Bar */}
                <div className={`
            fixed bottom-8 left-1/2 -translate-x-1/2 z-50 w-full max-w-md px-6 transition-all duration-500
            ${selected.length > 0 ? 'translate-y-0 opacity-100' : 'translate-y-24 opacity-0 pointer-events-none'}
        `}>
                    <div className="bg-slate-900 text-white p-4 rounded-full shadow-2xl border border-white/10 flex items-center justify-between backdrop-blur-xl">
                        <div className="pl-4">
                            <span className="font-bold text-blue-400">{selected.length}</span>
                            <span className="text-sm ml-2 text-slate-300">Services Selected</span>
                        </div>
                        <a
                            href={formatWhatsAppUrl("917842325201", `I'm interested in the following services: ${SERVICES.filter(s => selected.includes(s.id)).map(s => s.title).join(', ')}`)}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => {
                                console.log("Get Quote Clicked");
                                console.log("Selected Services:", selected);
                                console.log("Target URL:", e.currentTarget.href);
                            }}
                            className="bg-blue-600 hover:bg-white hover:text-blue-600 text-white px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all flex items-center gap-2 cursor-pointer no-underline"
                        >
                            Get Quote
                            <ArrowRight className="w-4 h-4" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
