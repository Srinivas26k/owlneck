import React, { useState } from 'react';
import {
    GraduationCap, PlusSquare, Building2, Home, Codepen, Coffee, ShoppingBag,
    Signal, Shield, CreditCard, ShoppingCart, Factory, Fuel, Clapperboard,
    Landmark, Pill, ChevronDown, Lock, Cloud, Cpu, ArrowRight, CheckCircle2, Filter
} from 'lucide-react';
import { Link } from 'react-router-dom';

const industryIcons = [
    { icon: GraduationCap, name: 'Education', desc: 'LMS management & Campus Wi-Fi', category: 'Public' },
    { icon: PlusSquare, name: 'Healthcare', desc: 'HIPAA compliant cloud storage', category: 'Public' },
    { icon: Building2, name: 'BFSI', desc: 'Secure transaction processing', category: 'Enterprise' },
    { icon: Home, name: 'Real Estate', desc: 'CRM & Property Tech integration', category: 'Consumer' },
    { icon: Codepen, name: 'SaaS', desc: 'DevOps & CI/CD pipeline optimization', category: 'Tech' },
    { icon: Coffee, name: 'Hospitality', desc: 'Guest Wi-Fi & POS systems', category: 'Consumer' },
    { icon: ShoppingBag, name: 'Retail', desc: 'Inventory management solutions', category: 'Consumer' },
    { icon: Signal, name: 'Telecom', desc: '5G infrastructure support', category: 'Tech' },
    { icon: Shield, name: 'Insurance', desc: 'Claim processing automation', category: 'Enterprise' },
    { icon: CreditCard, name: 'Fintech', desc: 'Blockchain & Crypto security', category: 'Tech' },
    { icon: ShoppingCart, name: 'E-commerce', desc: 'High-traffic server scaling', category: 'Consumer' },
    { icon: Factory, name: 'Manufacturing', desc: 'IoT & Smart Factory setup', category: 'Industrial' },
    { icon: Fuel, name: 'Oil & Energy', desc: 'Remote site connectivity', category: 'Industrial' },
    { icon: Clapperboard, name: 'Media', desc: 'High-speed content rendering', category: 'Consumer' },
    { icon: Landmark, name: 'Government', desc: 'Citizen portal security', category: 'Public' },
    { icon: Pill, name: 'Pharma', desc: 'R&D data protection', category: 'Public' },
];

const categories = ['All', 'Enterprise', 'Consumer', 'Tech', 'Industrial', 'Public'];

const Services: React.FC = () => {
    const [openAccordion, setOpenAccordion] = useState<number | null>(0);
    const [filter, setFilter] = useState('All');

    const filteredIndustries = filter === 'All'
        ? industryIcons
        : industryIcons.filter(item => item.category === filter);

    const accordions = [
        {
            id: 0,
            title: 'Cybersecurity',
            icon: Lock,
            content: 'Our zero-trust architecture ensures that your data is protected at every endpoint. We provide 24/7 Threat Monitoring, Penetration Testing, and Automated Incident Response to keep your business safe from evolving digital threats. We employ advanced heuristic analysis to detect zero-day exploits before they compromise your infrastructure.'
        },
        {
            id: 1,
            title: 'Cloud Computing',
            icon: Cloud,
            content: 'Whether you need AWS, Azure, or Hybrid Cloud solutions, we architect scalable environments that grow with you. Our services include Migration Strategies, Cost Optimization, and Serverless Architecture implementation. We optimize your cloud spend while maximizing performance through intelligent auto-scaling policies.'
        },
        {
            id: 2,
            title: 'AI/ML Services',
            icon: Cpu,
            content: 'Leverage the power of Artificial Intelligence to automate mundane tasks. From Chatbots and Predictive Analytics to Computer Vision and Natural Language Processing, we build custom models tailored to your business needs. Our team specializes in deploying edge-AI solutions for real-time inference in industrial environments.'
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

            {/* Filters */}
            <section className="bg-white pt-24 pb-12 sticky top-20 z-40 border-b border-gray-100 shadow-sm backdrop-blur-md bg-white/90">
                <div className="container mx-auto px-6 md:px-12 flex items-center justify-center">
                    <div className="flex flex-wrap gap-4 justify-center">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setFilter(cat)}
                                className={`px-8 py-3 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 ${filter === cat
                                        ? 'bg-electric text-white shadow-lg shadow-electric/30 scale-105'
                                        : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Industries Grid */}
            <section className="py-24 bg-white min-h-[600px]">
                <div className="container mx-auto px-6 md:px-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 perspective-1000">
                        {filteredIndustries.map((item, idx) => (
                            <div
                                key={item.name}
                                className="group relative p-10 border border-gray-200 rounded-[2rem] bg-white transition-all duration-500 flex flex-col items-start gap-8 hover:-translate-y-2 hover:shadow-[0_30px_60px_-15px_rgba(0,27,183,0.3)] preserve-3d hover:rotate-x-12 hover:bg-gradient-to-br hover:from-cream/30 hover:to-white overflow-hidden animate-slide-in-left"
                                style={{ animationDelay: `${idx * 50}ms`, animationFillMode: 'both' }}
                            >
                                {/* Animated drawing border on hover */}
                                <div className="absolute inset-0 border-2 border-electric rounded-[2rem] opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500 pointer-events-none" />

                                <div className="p-5 bg-cream/50 rounded-2xl group-hover:bg-gradient-to-br group-hover:from-primary/10 group-hover:to-electric/10 text-muted group-hover:text-electric transition-colors shadow-sm group-hover:shadow-md group-hover:rotate-6 duration-500">
                                    <item.icon size={36} className="stroke-[1.5px] group-hover:stroke-[2px] transition-all" />
                                </div>
                                <div className="backface-hidden relative z-10 w-full">
                                    <h3 className="font-bold text-navy text-xl leading-tight group-hover:text-electric transition-colors mb-2 tracking-tight">
                                        {item.name}
                                    </h3>
                                    <p className="text-base text-gray-500 line-clamp-2 group-hover:text-navy/80 transition-colors leading-relaxed mb-6">
                                        {item.desc}
                                    </p>

                                    {/* View Details Button that appears on hover */}
                                    <div className="opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                                        <button className="text-electric font-bold text-sm uppercase tracking-wider flex items-center gap-2 group/btn">
                                            View Details <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                                        </button>
                                    </div>
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

                    {/* Progress Bar (Conceptual - indicating active step) */}
                    <div className="flex gap-2 mb-12 justify-center">
                        {accordions.map((item) => (
                            <div
                                key={item.id}
                                className={`h-1.5 rounded-full transition-all duration-500 ${openAccordion === item.id ? 'w-16 bg-electric' : 'w-4 bg-gray-200'}`}
                            />
                        ))}
                    </div>

                    <div className="space-y-8">
                        {accordions.map((item) => (
                            <div
                                key={item.id}
                                className={`border border-gray-200 rounded-[2rem] overflow-hidden transition-all duration-500 ${openAccordion === item.id
                                        ? 'border-electric bg-cream/20 shadow-2xl shadow-electric/10 scale-[1.02]'
                                        : 'bg-white hover:border-gray-300 opacity-80 hover:opacity-100'
                                    }`}
                            >
                                <button
                                    onClick={() => setOpenAccordion(openAccordion === item.id ? null : item.id)}
                                    className="w-full flex items-center justify-between p-8 md:p-12 text-left focus:outline-none"
                                >
                                    <div className="flex items-center gap-8">
                                        <div className={`p-4 rounded-2xl transition-all duration-500 ${openAccordion === item.id
                                                ? 'bg-electric text-white scale-110 shadow-lg shadow-electric/30'
                                                : 'bg-gray-100 text-gray-500'
                                            }`}>
                                            <item.icon size={32} className={`transition-transform duration-500 ${openAccordion === item.id ? 'rotate-[360deg]' : ''}`} />
                                        </div>
                                        <span className={`text-2xl md:text-3xl font-bold tracking-tight transition-colors duration-300 ${openAccordion === item.id ? 'text-electric' : 'text-navy'
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
                                    className={`overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] ${openAccordion === item.id ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                                        }`}
                                >
                                    <div className="p-8 md:p-12 pt-0 text-muted leading-loose text-xl pl-[8rem] pr-12">
                                        {item.content.split('. ').map((sentence, sIdx) => (
                                            <span
                                                key={sIdx}
                                                className="block mb-2 opacity-0 animate-slide-in-right"
                                                style={{ animationDelay: `${sIdx * 100}ms`, animationFillMode: 'forwards' }}
                                            >
                                                {sentence}.
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section - Added */}
            <section className="py-40 bg-gradient-to-tr from-primary via-electric to-electric text-center px-6 relative overflow-hidden">
                <div className="relative z-10 max-w-5xl mx-auto space-y-12">
                    <h2 className="text-5xl md:text-7xl font-bold text-white leading-[0.95] tracking-tight drop-shadow-lg">
                        Ready to Transform Your IT Infrastructure?
                    </h2>
                    <p className="text-2xl text-white/90 max-w-3xl mx-auto font-light leading-relaxed">
                        Join the industry leaders who trust OWLNECK for security, speed, and reliability.
                    </p>
                    <Link
                        to="/contact"
                        className="inline-flex items-center px-12 py-6 bg-white text-primary text-2xl font-bold rounded-full hover:bg-sunset hover:text-white transition-all transform hover:scale-110 active:scale-95 shadow-2xl shadow-black/20"
                    >
                        Start Your Journey <ArrowRight className="ml-3 w-6 h-6" />
                    </Link>
                </div>

                {/* Abstract background shapes - Enhanced with float animation */}
                <div className="absolute top-20 left-20 w-32 h-32 bg-white/10 rounded-full blur-[40px] animate-float" />
                <div className="absolute bottom-20 right-20 w-48 h-48 bg-sunset/30 rounded-lg rotate-12 blur-[60px] animate-float" style={{ animationDelay: '1s' }} />
                <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] bg-electric/20 rounded-full blur-[150px] transform -translate-x-1/2 -translate-y-1/2 mix-blend-overlay" />
            </section>
        </div>
    );
};

export default Services;
