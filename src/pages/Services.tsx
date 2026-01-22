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
            <section className="bg-cream/50 py-24 text-center">
                <div className="container mx-auto px-6">
                    <h1 className="text-display-mobile md:text-display-desktop font-bold text-navy mb-6">Our Industries</h1>
                    <p className="text-xl md:text-2xl font-light text-muted max-w-2xl mx-auto">
                        Delivering specialized IT solutions across 15+ industry verticals.
                    </p>
                </div>
            </section>

            {/* Industries Grid */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6 md:px-12">
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6">
                        {industryIcons.map((item, idx) => (
                            <div
                                key={idx}
                                className="group p-6 border border-gray-100 rounded-xl hover:bg-cream hover:border-electric transition-all duration-300 flex flex-col items-start gap-4 hover:-translate-y-1"
                            >
                                <div className="p-3 bg-gray-50 rounded-lg group-hover:bg-white text-muted group-hover:text-electric transition-colors">
                                    <item.icon size={28} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-navy text-lg leading-tight group-hover:text-electric transition-colors">
                                        {item.name}
                                    </h3>
                                    <p className="text-sm text-gray-500 mt-1 line-clamp-2 group-hover:text-navy/70 transition-colors">
                                        {item.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Service Deep Dive - Accordion */}
            <section className="py-24 bg-white border-t border-gray-100">
                <div className="container mx-auto px-6 md:px-12 max-w-4xl">
                    <h2 className="text-h2-mobile md:text-h2-desktop font-bold text-center mb-16">Deep Dive</h2>

                    <div className="space-y-4">
                        {accordions.map((item) => (
                            <div
                                key={item.id}
                                className={`border border-gray-200 rounded-2xl overflow-hidden transition-colors duration-300 ${openAccordion === item.id ? 'border-electric bg-cream/10' : 'bg-white'
                                    }`}
                            >
                                <button
                                    onClick={() => setOpenAccordion(openAccordion === item.id ? null : item.id)}
                                    className="w-full flex items-center justify-between p-6 md:p-8 text-left focus:outline-none"
                                >
                                    <div className="flex items-center gap-6">
                                        <div className={`p-3 rounded-xl transition-colors ${openAccordion === item.id ? 'bg-electric text-white' : 'bg-gray-100 text-gray-500'
                                            }`}>
                                            <item.icon size={24} />
                                        </div>
                                        <span className={`text-xl md:text-2xl font-bold ${openAccordion === item.id ? 'text-electric' : 'text-navy'
                                            }`}>
                                            {item.title}
                                        </span>
                                    </div>
                                    <ChevronDown
                                        className={`text-gray-400 transition-transform duration-500 ${openAccordion === item.id ? 'rotate-180 text-electric' : ''
                                            }`}
                                    />
                                </button>

                                <div
                                    className={`overflow-hidden transition-all duration-500 ease-in-out ${openAccordion === item.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                                        }`}
                                >
                                    <div className="p-6 md:p-8 pt-0 text-muted leading-relaxed text-lg pl-[6rem]">
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
