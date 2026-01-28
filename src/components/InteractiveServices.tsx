import React, { useState } from 'react';

const services = [
    {
        id: 1,
        title: "Strategic Consulting",
        description: "Aligning your technology roadmap with business objectives to drive efficiency and innovation.",
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop",
        details: "We analyze your current infrastructure, identify gaps, and create a comprehensive strategy that turns IT from a cost center into a growth driver."
    },
    {
        id: 2,
        title: "Cloud & Hybrid Systems",
        description: "Designing robust, scalable environments that adapt to the fluctuating demands of the market.",
        image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=2070&auto=format&fit=crop",
        details: "Whether you need public, private, or hybrid cloud solutions, our architects design resilient systems that ensure 99.99% uptime and seamless scalability."
    },
    {
        id: 3,
        title: "Cyber Defense",
        description: "Advanced threat detection and response systems that neutralize risks 24/7.",
        image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1470&auto=format&fit=crop",
        details: "Utilizing AI-driven heuristics and zero-trust architecture to protect your critical assets against evolving digital threats before they strike."
    }
];

export default function InteractiveServices() {
    const [activeId, setActiveId] = useState(1);

    const activeService = services.find(s => s.id === activeId) || services[0];

    return (
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-16">
            {/* List Section */}
            <div className="md:col-span-5 flex flex-col justify-center space-y-8">
                {services.map((service) => (
                    <div
                        key={service.id}
                        className={`group cursor-pointer transition-all duration-300 p-6 rounded-xl border ${activeId === service.id ? 'bg-white border-primary/20 shadow-lg' : 'bg-transparent border-transparent hover:bg-white/50'}`}
                        onMouseEnter={() => setActiveId(service.id)}
                        onClick={() => setActiveId(service.id)}
                    >
                        <span className={`text-[10px] uppercase tracking-widest mb-2 block transition-colors ${activeId === service.id ? 'text-primary' : 'text-text-muted'}`}>
                            0{service.id}. Strategy
                        </span>
                        <h4 className={`font-serif text-3xl md:text-4xl transition-colors mb-4 ${activeId === service.id ? 'text-primary' : 'text-navy-premium'}`}>
                            {service.title}
                        </h4>
                        <p className="text-sm text-text-muted leading-relaxed max-w-md">
                            {service.description}
                        </p>
                    </div>
                ))}
            </div>

            {/* Card Section */}
            <div className="md:col-span-7 relative h-[500px] md:h-auto min-h-[500px]">
                <div className="w-full h-full relative rounded-2xl overflow-hidden glass-card shadow-2xl transition-all duration-500">
                    <div className="absolute inset-0">
                        <img
                            src={activeService.image}
                            alt={activeService.title}
                            className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-navy-premium/90 via-navy-premium/40 to-transparent"></div>
                    </div>

                    <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 z-10 text-white">
                        <div className="mb-4 w-12 h-1 bg-primary rounded-full"></div>
                        <h3 className="font-display text-4xl md:text-5xl mb-6 relative">
                            {activeService.title}
                        </h3>
                        <p className="text-base md:text-lg text-white/80 leading-relaxed max-w-xl font-light">
                            {activeService.details}
                        </p>

                        <div className="mt-8 flex items-center gap-4">
                            <button className="bg-primary hover:bg-white hover:text-primary text-white text-[10px] font-bold uppercase tracking-widest px-6 py-3 rounded-full transition-all">
                                Learn More
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
