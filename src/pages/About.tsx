import React, { useEffect, useRef } from 'react';
import { Target, TrendingUp, Users, Shield, Lightbulb, Heart, Lock } from 'lucide-react';

const About: React.FC = () => {
    const sectionsRef = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate-scroll-reveal');
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.1 }
        );

        sectionsRef.current.forEach((section) => {
            if (section) observer.observe(section);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <div className="pt-20">
            {/* Hero */}
            <section className="relative h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center z-0 scale-105 animate-[float_20s_ease-in-out_infinite_alternate]"
                    style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&q=80")' }}
                />
                <div className="absolute inset-0 bg-primary/80 mix-blend-multiply z-0" />
                <div className="absolute inset-0 bg-black/40 z-0" />

                <div className="relative z-10 text-center text-white px-6 max-w-5xl mx-auto">
                    <h1 className="text-display-mobile md:text-display-desktop font-bold mb-10 animate-scroll-reveal tracking-tight leading-[0.95] drop-shadow-2xl">Who We Are</h1>
                    <p className="text-2xl md:text-3xl font-light text-white/95 max-w-3xl mx-auto animate-scroll-reveal delay-100 leading-relaxed drop-shadow-lg">
                        Empowering Business Through Intelligent IT Managed Services
                    </p>
                </div>
            </section>

            {/* Mission Section */}
            <section className="py-40 bg-white" ref={el => sectionsRef.current[0] = el}>
                <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-24">
                    <div className="md:w-3/5 space-y-12">
                        <h2 className="text-h2-mobile md:text-h2-desktop font-bold text-navy tracking-tight leading-none">Our Mission</h2>
                        <div className="w-32 h-1.5 bg-gradient-to-r from-sunset to-primary rounded-full" />
                        <p className="text-xl md:text-2xl text-muted leading-relaxed font-light">
                            At OWLNECK, we believe that technology should be an enabler, not a bottleneck. Our mission is to democratize prompt, secure, and scalable IT infrastructure for enterprises of all sizes.
                        </p>
                        <p className="text-xl md:text-2xl text-muted leading-relaxed font-light">
                            We strive to bridge the gap between complex technical challenges and business goals, ensuring that every line of code and every server configuration contributes directly to your bottom line.
                        </p>
                    </div>
                    <div className="md:w-2/5 flex justify-center">
                        <div className="relative w-[400px] h-[400px]">
                            <div className="absolute inset-0 bg-gradient-to-tr from-electric to-sunset rounded-full opacity-20 animate-pulse blur-3xl" />
                            <div className="absolute inset-4 border-2 border-primary/20 rounded-full animate-[spin_8s_linear_infinite]" />
                            <div className="absolute inset-12 border border-sunset/30 rounded-full animate-[spin_12s_linear_infinite_reverse]" />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <Target size={96} className="text-primary drop-shadow-lg" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* What Sets Us Apart */}
            <section className="py-40 bg-cream/30" ref={el => sectionsRef.current[1] = el}>
                <div className="container mx-auto px-6 md:px-12 space-y-32">
                    {/* Row 1 */}
                    <div className="flex flex-col md:flex-row items-center gap-24">
                        <div className="md:w-1/2 rounded-[2.5rem] overflow-hidden shadow-2xl shadow-primary/20 transform hover:scale-[1.02] transition-transform duration-700">
                            <img
                                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&q=80"
                                alt="Data Analytics"
                                className="w-full h-[500px] object-cover scale-105 hover:scale-110 transition-transform duration-1000"
                            />
                        </div>
                        <div className="md:w-1/2 space-y-8">
                            <div className="inline-block p-4 bg-white rounded-2xl shadow-lg shadow-electric/10 mb-4">
                                <TrendingUp className="text-electric" size={40} />
                            </div>
                            <h3 className="text-5xl font-bold text-navy tracking-tight leading-tight">AI-Driven Financial Support</h3>
                            <p className="text-xl text-muted leading-loose">
                                We don't just fix computers. We analyze your IT spend and optimize it using our proprietary AI models, often saving our clients up to 30% on infrastructure costs in the first year.
                            </p>
                        </div>
                    </div>

                    {/* Row 2 */}
                    <div className="flex flex-col md:flex-row-reverse items-center gap-24">
                        <div className="md:w-1/2 rounded-[2.5rem] overflow-hidden shadow-2xl shadow-sunset/20 transform hover:scale-[1.02] transition-transform duration-700">
                            <img
                                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&q=80"
                                alt="Team Collaboration"
                                className="w-full h-[500px] object-cover scale-105 hover:scale-110 transition-transform duration-1000"
                            />
                        </div>
                        <div className="md:w-1/2 space-y-8">
                            <div className="inline-block p-4 bg-white rounded-2xl shadow-lg shadow-sunset/10 mb-4">
                                <Users className="text-sunset" size={40} />
                            </div>
                            <h3 className="text-5xl font-bold text-navy tracking-tight leading-tight">Human-Centric Approach</h3>
                            <p className="text-xl text-muted leading-loose">
                                Technology is useless without the people who wield it. We prioritize user training and experience, ensuring your team feels empowered, not overwhelmed, by new tools.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Values */}
            <section className="py-40 bg-white" ref={el => sectionsRef.current[2] = el}>
                <div className="container mx-auto px-6 md:px-12">
                    <div className="text-center mb-24">
                        <h2 className="text-h2-mobile md:text-h2-desktop font-bold text-navy mb-6 tracking-tight">Core Values</h2>
                        <div className="w-24 h-1.5 bg-electric mx-auto rounded-full" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
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
                                className="group p-10 rounded-[2rem] border border-gray-100 hover:border-electric hover:bg-cream/30 transition-all duration-500 flex flex-col items-center text-center hover:shadow-2xl hover:shadow-electric/10 hover:-translate-y-2"
                            >
                                <div className="w-24 h-24 rounded-full bg-white border border-gray-200 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:border-electric transition-all duration-300 shadow-sm group-hover:shadow-md">
                                    <val.icon className="text-navy group-hover:text-electric transition-colors" size={40} />
                                </div>
                                <h3 className="text-2xl font-bold text-navy mb-4 tracking-tight group-hover:text-electric transition-colors">{val.title}</h3>
                                <p className="text-muted text-lg leading-relaxed">{val.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
