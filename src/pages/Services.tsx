import React, { useState } from 'react';
import {
    GraduationCap, PlusSquare, Building2, Home, Codepen, Coffee, ShoppingBag,
    Signal, Shield, CreditCard, ShoppingCart, Factory, Fuel, Clapperboard,
    Landmark, Pill, ChevronDown, Lock, Cloud, Cpu
} from 'lucide-react';

const industryIcons = [
    { icon: GraduationCap, name: 'Education', desc: 'LMS management & Campus Wi-Fi' },
    { icon: PlusSquare, name: 'Healthcare', desc: 'HIPAA compliant cloud storage' },
    { icon: Building2, name: 'BFSI', desc: 'Secure transaction processing' },
    { icon: Home, name: 'Real Estate', desc: 'CRM & Property Tech integration' },
    { icon: Codepen, name: 'SaaS', desc: 'DevOps & CI/CD pipeline optimization' },
    { icon: Coffee, name: 'Hospitality', desc: 'Guest Wi-Fi & POS systems' },
    { icon: ShoppingBag, name: 'Retail', desc: 'Inventory management solutions' },
    { icon: Signal, name: 'Telecom', desc: '5G infrastructure support' },
    { icon: Shield, name: 'Insurance', desc: 'Claim processing automation' },
    { icon: CreditCard, name: 'Fintech', desc: 'Blockchain & Crypto security' },
    { icon: ShoppingCart, name: 'E-commerce', desc: 'High-traffic server scaling' },
    { icon: Factory, name: 'Manufacturing', desc: 'IoT & Smart Factory setup' },
    { icon: Fuel, name: 'Oil & Energy', desc: 'Remote site connectivity' },
    { icon: Clapperboard, name: 'Media', desc: 'High-speed content rendering' },
    { icon: Landmark, name: 'Government', desc: 'Citizen portal security' },
    { icon: Pill, name: 'Pharma', desc: 'R&D data protection' },
];

const Services: React.FC = () => {
    const [openAccordion, setOpenAccordion] = useState<number | null>(0);

    const accordions = [
        {
            id: 0,
            title: 'Cybersecurity',
            icon: Lock,
            content: 'Our zero-trust architecture ensures that your data is protected at every endpoint. We provide 24/7 Threat Monitoring, Penetration Testing, and Automated Incident Response to keep your business safe from evolving digital threats.'
        },
        {
            id: 1,
            title: 'Cloud Computing',
            icon: Cloud,
            content: 'Whether you need AWS, Azure, or Hybrid Cloud solutions, we architect scalable environments that grow with you. Our services include Migration Strategies, Cost Optimization, and Serverless Architecture implementation.'
        },
        {
            id: 2,
            title: 'AI/ML Services',
            icon: Cpu,
            content: 'Leverage the power of Artificial Intelligence to automate mundane tasks. From Chatbots and Predictive Analytics to Computer Vision and Natural Language Processing, we build custom models tailored to your business needs.'
        }
    ];

    return (
        <div className="pt-20">
            {/* Hero */}
            <section className="bg-cream/50 py-40 text-center relative overflow-hidden">
                <div className="absolute inset-0 opacity-30 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-multiply" />
                <div className="container mx-auto px-6 relative z-10">
                    <h1 className="text-display-mobile md:text-display-desktop font-bold text-navy mb-8 tracking-tight leading-[0.95]">Our Industries</h1>
                    <p className="text-2xl md:text-3xl font-light text-muted max-w-3xl mx-auto leading-relaxed">
                        Delivering specialized IT solutions across 15+ industry verticals.
                    </p>
                </div>
            </section>

            {/* Industries Grid */}
            <section className="py-40 bg-white">
                <div className="container mx-auto px-6 md:px-12">
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-12 perspective-1000">
                        {industryIcons.map((item, idx) => (
                            <div
                                key={idx}
                                className="group relative p-10 border border-gray-200 rounded-[2rem] bg-white transition-all duration-500 flex flex-col items-start gap-8 hover:-translate-y-2 hover:shadow-[0_30px_60px_-15px_rgba(0,27,183,0.3)] preserve-3d hover:rotate-x-12 hover:bg-gradient-to-br hover:from-cream/30 hover:to-white"
                                style={{ animationDelay: `${idx * 50}ms` }}
                            >
                                <div className="p-5 bg-cream/50 rounded-2xl group-hover:bg-gradient-to-br group-hover:from-primary/10 group-hover:to-electric/10 text-muted group-hover:text-electric transition-colors shadow-sm group-hover:shadow-md group-hover:rotate-6 duration-500">
                                    <item.icon size={36} />
                                </div>
                                <div className="backface-hidden">
                                    <h3 className="font-bold text-navy text-xl leading-tight group-hover:text-electric transition-colors mb-2 tracking-tight">
                                        {item.name}
                                    </h3>
                                    <p className="text-base text-gray-500 line-clamp-2 group-hover:text-navy/80 transition-colors leading-relaxed">
                                        {item.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Service Deep Dive - Accordion */}
            <section className="py-40 bg-white border-t border-gray-100">
                <div className="container mx-auto px-6 md:px-12 max-w-5xl">
                    <h2 className="text-h2-mobile md:text-h2-desktop font-bold text-center mb-24 tracking-tight">Deep Dive</h2>

                    <div className="space-y-6">
                        {accordions.map((item) => (
                            <div
                                key={item.id}
                                className={`border border-gray-200 rounded-3xl overflow-hidden transition-colors duration-500 ${openAccordion === item.id ? 'border-electric bg-cream/20 shadow-xl shadow-electric/5' : 'bg-white hover:border-gray-300'
                                    }`}
                            >
                                <button
                                    onClick={() => setOpenAccordion(openAccordion === item.id ? null : item.id)}
                                    className="w-full flex items-center justify-between p-8 md:p-10 text-left focus:outline-none"
                                >
                                    <div className="flex items-center gap-8">
                                        <div className={`p-4 rounded-2xl transition-colors ${openAccordion === item.id ? 'bg-electric text-white' : 'bg-gray-100 text-gray-500'
                                            }`}>
                                            <item.icon size={32} />
                                        </div>
                                        <span className={`text-2xl md:text-3xl font-bold tracking-tight ${openAccordion === item.id ? 'text-electric' : 'text-navy'
                                            }`}>
                                            {item.title}
                                        </span>
                                    </div>
                                    <ChevronDown
                                        className={`text-gray-400 transition-transform duration-500 transform scale-125 ${openAccordion === item.id ? 'rotate-180 text-electric' : ''
                                            }`}
                                    />
                                </button>

                                <div
                                    className={`overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] ${openAccordion === item.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                                        }`}
                                >
                                    <div className="p-8 md:p-10 pt-0 text-muted leading-loose text-xl pl-[7.5rem] pr-12">
                                        {item.content}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Services;
