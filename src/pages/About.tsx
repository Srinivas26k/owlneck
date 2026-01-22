import React, { useEffect, useRef, useState } from 'react';
import { Target, TrendingUp, Users, Shield, Lightbulb, Heart, Lock, Quote } from 'lucide-react';
import SEO from '../components/SEO';
import LazyImage from '../components/LazyImage';

const About: React.FC = () => {
    const sectionsRef = useRef<(HTMLDivElement | null)[]>([]);
    const [isExpanded, setIsExpanded] = useState(false);
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => requestAnimationFrame(() => setScrollY(window.scrollY));
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        if (entry.target.classList.contains('slide-left-target')) {
                            entry.target.classList.add('animate-slide-in-left');
                        } else if (entry.target.classList.contains('slide-right-target')) {
                            entry.target.classList.add('animate-slide-in-right');
                        } else {
                            entry.target.classList.add('animate-scroll-reveal');
                        }
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.15 }
        );

        sectionsRef.current.forEach((section) => {
            if (section) observer.observe(section);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <div className="pt-20 overflow-hidden">
            <SEO
                title="About Us"
                description="Learn about OWLNECK's mission to democratize secure, scalable IT infrastructure. We combine AI-driven insights with a human-centric approach."
                canonical="https://owlneck.com/about"
            />

            {/* Hero with Ken Burns Effect */}
            <section className="relative h-[85vh] min-h-[700px] flex items-center justify-center overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center z-0 animate-ken-burns transform origin-center will-change-transform"
                    style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&q=80")' }}
                    aria-hidden="true"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/60 to-primary/40 mix-blend-multiply z-10" />
                <div className="absolute inset-0 bg-black/20 z-10" />

                <div className="relative z-20 text-center text-white px-6 max-w-5xl mx-auto flex flex-col items-center">
                    <h1 className="text-display-mobile md:text-display-desktop font-bold mb-6 animate-scroll-reveal tracking-tight leading-[0.95] drop-shadow-xl text-shadow">
                        Who We Are
                    </h1>
                    {/* Animated Line */}
                    <div className="h-1.5 bg-sunset rounded-full mb-10 animate-draw-line" />

                    <p className="text-2xl md:text-4xl font-light text-white/95 max-w-4xl mx-auto animate-scroll-reveal delay-100 leading-relaxed drop-shadow-lg tracking-wide">
                        Empowering Business Through Intelligent <span className="font-semibold text-cream">IT Managed Services</span>
                    </p>
                </div>
            </section>

            {/* Mission Section */}
            <section className="py-40 bg-white relative overflow-hidden" ref={el => sectionsRef.current[0] = el}>
                {/* Pulse BG */}
                <div className="absolute top-1/2 left-1/4 w-[600px] h-[600px] bg-electric/5 rounded-full blur-[100px] animate-pulse -z-0 transform -translate-y-1/2" />

                <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-24 relative z-10">
                    <div className="md:w-3/5 space-y-12 opacity-0 slide-left-target" ref={el => sectionsRef.current[3] = el}>
                        <h2 className="text-h2-mobile md:text-h2-desktop font-bold text-navy tracking-tight leading-none">Our Mission</h2>

                        <div className="space-y-8 pl-8 border-l-4 border-electric">
                            <p className="text-xl md:text-2xl text-muted leading-relaxed font-light">
                                At OWLNECK, we believe that technology should be an enabler, not a bottleneck. Our mission is to democratize prompt, secure, and scalable IT infrastructure for enterprises of all sizes.
                            </p>
                            <div className={`overflow-hidden transition-all duration-500 ${isExpanded ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`} style={{ willChange: isExpanded ? 'max-height, opacity' : 'auto' }}>
                                <p className="text-xl md:text-2xl text-muted leading-relaxed font-light pt-4">
                                    We strive to bridge the gap between complex technical challenges and business goals, ensuring that every line of code and every server configuration contributes directly to your bottom line. Our team operates with a relentless focus on efficiency, stripping away the unnecessary to reveal the essential power of your digital systems.
                                </p>
                            </div>
                        </div>

                        <button
                            onClick={() => setIsExpanded(!isExpanded)}
                            className="text-primary font-bold text-lg hover:text-electric transition-colors flex items-center gap-2 uppercase tracking-widest border-b-2 border-primary/20 hover:border-primary pb-1 focus:outline-none focus:ring-4 focus:ring-electric/50 rounded-sm"
                            aria-expanded={isExpanded}
                            aria-controls="mission-details"
                        >
                            {isExpanded ? 'Read Less' : 'Read More'}
                        </button>
                    </div>

                    <div className="md:w-2/5 flex justify-center opacity-0 slide-right-target" ref={el => sectionsRef.current[4] = el}>
                        <div className="relative w-[400px] h-[400px]">
                            {/* Complex Orbiting Rings */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-electric to-sunset rounded-full opacity-10 blur-3xl" />
                            <div className="absolute inset-0 border border-gray-100 rounded-full" />
                            <div className="absolute inset-8 border border-gray-100 rounded-full" />

                            <div className="absolute inset-4 border-2 border-primary/20 rounded-full animate-[spin_8s_linear_infinite]" />
                            <div className="absolute inset-12 border border-sunset/30 rounded-full animate-[spin_12s_linear_infinite_reverse]" />
                            <div className="absolute inset-20 border border-electric/40 rounded-full animate-[spin_20s_linear_infinite] border-dashed" />

                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="bg-white p-8 rounded-full shadow-2xl shadow-primary/20 z-10">
                                    <Target size={64} className="text-primary" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* What Sets Us Apart */}
            <section className="py-40 bg-cream/30 relative" ref={el => sectionsRef.current[1] = el}>
                <div className="container mx-auto px-6 md:px-12 space-y-40">
                    {/* Row 1 */}
                    <div className="flex flex-col md:flex-row items-center gap-24 relative">
                        <div className="absolute -top-32 -left-20 text-[20rem] font-bold text-white/80 select-none z-0 pointer-events-none drop-shadow-md" style={{ WebkitTextStroke: '2px #E5E7EB' }} aria-hidden="true">
                            01
                        </div>

                        <div className="md:w-1/2 rounded-[3rem] overflow-hidden shadow-2xl shadow-primary/20 transform z-10 opacity-0 slide-left-target" ref={el => sectionsRef.current[5] = el}>
                            <div className="overflow-hidden h-[600px]">
                                <LazyImage
                                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&q=80"
                                    alt="Data Analytics Dashboard showing optimize IT spend"
                                    className="w-full h-full object-cover scale-110 transition-transform duration-100 ease-out will-change-transform"
                                    style={{ transform: `translateY(${(scrollY - 1800) * 0.1}px) scale(1.1)` }}
                                />
                            </div>
                        </div>

                        <div className="md:w-1/2 space-y-10 z-10 opacity-0 slide-right-target" ref={el => sectionsRef.current[6] = el}>
                            <div className="inline-block p-5 bg-white rounded-2xl shadow-lg shadow-electric/10 mb-2 rotate-3">
                                <TrendingUp className="text-electric" size={48} />
                            </div>
                            <h3 className="text-5xl md:text-6xl font-bold text-navy tracking-tight leading-[1.1]">AI-Driven Financial Support</h3>
                            <div className="relative">
                                <Quote className="absolute -top-6 -left-8 text-primary/10 fill-current w-16 h-16" aria-hidden="true" />
                                <p className="text-xl md:text-2xl text-muted leading-relaxed relative z-10">
                                    We don't just fix computers. We analyze your IT spend and optimize it using our proprietary AI models, often saving our clients up to <span className="text-primary font-bold">30%</span> on infrastructure costs in the first year.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Row 2 */}
                    <div className="flex flex-col md:flex-row-reverse items-center gap-24 relative">
                        <div className="absolute -top-32 -right-20 text-[20rem] font-bold text-white/80 select-none z-0 pointer-events-none drop-shadow-md" style={{ WebkitTextStroke: '2px #E5E7EB' }} aria-hidden="true">
                            02
                        </div>

                        <div className="md:w-1/2 rounded-[3rem] overflow-hidden shadow-2xl shadow-sunset/20 transform z-10 opacity-0 slide-right-target" ref={el => sectionsRef.current[7] = el}>
                            <div className="overflow-hidden h-[600px]">
                                <LazyImage
                                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&q=80"
                                    alt="Owlneck Team collaborating in a modern office"
                                    className="w-full h-full object-cover scale-110 transition-transform duration-100 ease-out will-change-transform"
                                    style={{ transform: `translateY(${(scrollY - 2600) * 0.1}px) scale(1.1)` }}
                                />
                            </div>
                        </div>

                        <div className="md:w-1/2 space-y-10 z-10 opacity-0 slide-left-target" ref={el => sectionsRef.current[8] = el}>
                            <div className="inline-block p-5 bg-white rounded-2xl shadow-lg shadow-sunset/10 mb-2 -rotate-3">
                                <Users className="text-sunset" size={48} />
                            </div>
                            <h3 className="text-5xl md:text-6xl font-bold text-navy tracking-tight leading-[1.1]">Human-Centric Approach</h3>
                            <div className="relative">
                                <Quote className="absolute -top-6 -left-8 text-sunset/10 fill-current w-16 h-16" aria-hidden="true" />
                                <p className="text-xl md:text-2xl text-muted leading-relaxed relative z-10">
                                    Technology is useless without the people who wield it. We prioritize user training and experience, ensuring your team feels <span className="text-sunset font-bold">empowered</span>, not overwhelmed, by new tools.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Values */}
            <section className="py-40 bg-navy relative overflow-hidden" ref={el => sectionsRef.current[2] = el}>
                {/* Geometric Background Pattern */}
                <div className="absolute inset-0 opacity-5">
                    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
                                <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="1" />
                            </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#grid)" />
                    </svg>
                </div>

                {/* Connecting Lines (Conceptual - rendered as absolute SVGs behind) */}
                <div className="absolute top-1/2 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-electric/30 to-transparent transform -translate-y-1/2 hidden lg:block" />

                <div className="container mx-auto px-6 md:px-12 relative z-10">
                    <div className="text-center mb-32">
                        <h2 className="text-h2-mobile md:text-h2-desktop font-bold text-white mb-6 tracking-tight">Core Values</h2>
                        <div className="w-24 h-1.5 bg-electric mx-auto rounded-full" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
                        {[
                            { icon: Lightbulb, title: 'Innovation', desc: 'Always dragging the future into the present.' },
                            { icon: Shield, title: 'Integrity', desc: 'Doing the right thing, even when no one is watching.' },
                            { icon: TrendingUp, title: 'Excellence', desc: 'Good enough is never enough.' },
                            { icon: Users, title: 'Transparency', desc: 'Clear communication, no hidden fees.' },
                            { icon: Heart, title: 'Collaboration', desc: 'We work with you, not just for you.' },
                            { icon: Lock, title: 'Security', desc: 'Safety first, second, and third.' }
                        ].map((val, idx) => (
                            <div
                                key={idx}
                                className="group relative p-10 rounded-[2rem] bg-navy-light/50 border border-white/10 hover:border-electric transition-all duration-500 overflow-hidden hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.5)] hover:-translate-y-2 backdrop-blur-sm"
                            >
                                {/* Hover Gradient Background */}
                                <div className="absolute inset-0 bg-gradient-to-br from-electric/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                <div className="relative z-10 flex flex-col items-center text-center">
                                    <div className="w-24 h-24 rounded-full bg-navy border border-white/10 flex items-center justify-center mb-10 group-hover:scale-110 group-hover:border-electric transition-all duration-300 shadow-xl shadow-black/20">
                                        <val.icon className="text-white group-hover:text-electric transition-colors transform group-hover:rotate-12 duration-500" size={40} />
                                    </div>
                                    <h3 className="text-3xl font-bold text-white mb-6 tracking-tight group-hover:text-electric transition-colors">{val.title}</h3>
                                    <p className="text-gray-400 text-lg leading-relaxed group-hover:text-gray-200 transition-colors">{val.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
