'use client';
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
    Plus
} from 'lucide-react';

const SERVICES = [
    {
        id: 'aiml',
        title: 'AIML Services',
        description: 'Deploying bespoke machine learning models that analyze operational data to predict market shifts.',
        icon: Bot,
        color: 'bg-soft-azure',
        colSpan: 2,
    },
    {
        id: 'cloud',
        title: 'Cloud Computing',
        description: 'Elastic, scalable serverless architectures designed for high-availability and global reach.',
        icon: Cloud,
        color: 'bg-white',
        colSpan: 1,
    },
    {
        id: 'audit',
        title: 'Audit & Compliance',
        description: 'Precision regulatory frameworks covering HIPAA, GDPR, and ISO standards.',
        icon: FileCheck,
        color: 'bg-white',
        colSpan: 1,
    },
    {
        id: 'finance',
        title: 'Financial Reports',
        description: 'Real-time data visualization of IT spend versus ROI for transparent fiscal governance.',
        icon: BarChart3,
        color: 'bg-white',
        colSpan: 1,
    },
    {
        id: 'training',
        title: 'Corporate Training',
        description: 'Upskilling workforces with cybersecurity awareness and modern toolset proficiency.',
        icon: GraduationCap,
        color: 'bg-white',
        colSpan: 1,
    },
    {
        id: 'toolkit',
        title: 'AI Powered Toolkit',
        description: 'Proprietary automation scripts that reduce manual overhead by up to 40%.',
        icon: Shield,
        color: 'bg-white',
        colSpan: 1,
    },
    {
        id: 'staffing',
        title: 'Strategic Staffing',
        description: 'We don\'t just find employees; we headhunt the top 1% of technical talent.',
        icon: Users,
        color: 'bg-navy-premium text-white',
        colSpan: 2,
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
        <div className="relative">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {SERVICES.map((service) => {
                    const isSelected = selected.includes(service.id);
                    const isDark = service.dark;

                    return (
                        <div
                            key={service.id}
                            onClick={() => toggleService(service.id)}
                            className={`
                relative rounded-2xl p-8 transition-all duration-300 cursor-pointer group border
                ${service.colSpan === 2 ? 'lg:col-span-2' : ''}
                ${isSelected
                                    ? 'ring-2 ring-primary border-primary transform scale-[1.02] shadow-xl'
                                    : 'hover:shadow-lg hover:-translate-y-1 border-transparent'
                                }
                ${isDark
                                    ? 'bg-gradient-to-r from-navy-premium to-[#1E3A8A] text-white shadow-lg'
                                    : 'bg-white text-navy-premium shadow-sm border-slate-100'
                                }
              `}
                        >
                            {/* Selection Indicator */}
                            <div className={`absolute top-6 right-6 transition-all duration-300 ${isSelected ? 'scale-100 opacity-100' : 'scale-75 opacity-0 group-hover:opacity-50'}`}>
                                {isSelected ? (
                                    <div className="bg-primary text-white rounded-full p-1">
                                        <CheckCircle2 className="w-5 h-5" />
                                    </div>
                                ) : (
                                    <div className={`rounded-full p-1 border ${isDark ? 'border-white/30' : 'border-slate-300'}`}>
                                        <Plus className={`w-5 h-5 ${isDark ? 'text-white' : 'text-slate-400'}`} />
                                    </div>
                                )}
                            </div>

                            <div className={`flex flex-col ${service.colSpan === 2 ? 'md:flex-row md:items-center' : ''} gap-6`}>
                                <div className={`
                  w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 transition-transform duration-500 group-hover:scale-110
                  ${isDark ? 'bg-white/10 text-white' : 'bg-soft-azure text-primary'}
                `}>
                                    <service.icon className="w-7 h-7" strokeWidth={1.5} />
                                </div>

                                <div>
                                    <h3 className={`text-xl font-display uppercase tracking-tight mb-2 ${isDark ? 'text-white' : 'text-navy-premium'}`}>
                                        {service.title}
                                    </h3>
                                    <p className={`text-sm leading-relaxed font-light ${isDark ? 'text-slate-300' : 'text-text-muted'}`}>
                                        {service.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Floating Action Bar */}
            <div className={`
        fixed bottom-8 left-1/2 -translate-x-1/2 z-50 w-full max-w-md px-6 transition-all duration-500
        ${selected.length > 0 ? 'translate-y-0 opacity-100' : 'translate-y-24 opacity-0 pointer-events-none'}
      `}>
                <div className="bg-navy-premium text-white p-4 rounded-full shadow-2xl border border-white/10 flex items-center justify-between backdrop-blur-xl">
                    <div className="pl-4">
                        <span className="font-bold text-primary">{selected.length}</span>
                        <span className="text-sm ml-2 text-slate-300">Services Selected</span>
                    </div>
                    <button className="bg-primary hover:bg-white hover:text-primary text-white px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all flex items-center gap-2">
                        Get Quote
                        <ArrowRight className="w-4 h-4" />
                    </button>
                </div>
            </div>
        </div>
    );
}
