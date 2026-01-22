import React from 'react';
import { Target, TrendingUp, Users, Shield, Lightbulb, Heart, Lock } from 'lucide-react';

const About: React.FC = () => {
    return (
        <div className="pt-20">
            {/* Hero */}
            <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center z-0"
                    style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&q=80")' }}
                />
                <div className="absolute inset-0 bg-primary/60 mix-blend-multiply z-0" />
                <div className="absolute inset-0 bg-black/30 z-0" /> {/* Extra overlay for text pop */}

                <div className="relative z-10 text-center text-white px-6">
                    <h1 className="text-display-mobile md:text-display-desktop font-bold mb-6 animate-scroll-reveal">Who We Are</h1>
                    <p className="text-xl md:text-2xl font-light text-white/90 max-w-2xl mx-auto animate-scroll-reveal delay-100">
                        Empowering Business Through Intelligent IT Managed Services
                    </p>
                </div>
            </section>

            {/* Mission Section */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-16">
                    <div className="md:w-3/5 space-y-8">
                        <h2 className="text-h2-mobile md:text-h2-desktop font-bold text-navy">Our Mission</h2>
                        <div className="w-20 h-1 bg-sunset" />
                        <p className="text-body text-muted">
                            At OWLNECK, we believe that technology should be an enabler, not a bottleneck. Our mission is to democratize prompt, secure, and scalable IT infrastructure for enterprises of all sizes.
                        </p>
                        <p className="text-body text-muted">
                            We strive to bridge the gap between complex technical challenges and business goals, ensuring that every line of code and every server configuration contributes directly to your bottom line.
                        </p>
                    </div>
                    <div className="md:w-2/5 flex justify-center">
                        <div className="relative w-80 h-80">
                            <div className="absolute inset-0 bg-gradient-to-tr from-electric to-sunset rounded-full opacity-20 animate-pulse" />
                            <div className="absolute inset-4 border-2 border-primary/20 rounded-full animate-[spin_8s_linear_infinite]" />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <Target size={64} className="text-primary" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* What Sets Us Apart */}
            <section className="py-24 bg-cream/30">
                <div className="container mx-auto px-6 md:px-12 space-y-24">
                    {/* Row 1 */}
                    <div className="flex flex-col md:flex-row items-center gap-12">
                        <div className="md:w-1/2 rounded-3xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-500">
                            <img
                                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&q=80"
                                alt="Data Analytics"
                                className="w-full h-[400px] object-cover"
                            />
                        </div>
                        <div className="md:w-1/2 space-y-6">
                            <div className="inline-block p-3 bg-white rounded-xl shadow-sm mb-2">
                                <TrendingUp className="text-electric" size={32} />
                            </div>
                            <h3 className="text-4xl font-bold text-navy">AI-Driven Financial Support</h3>
                            <p className="text-body text-muted">
                                We don't just fix computers. We analyze your IT spend and optimize it using our proprietary AI models, often saving our clients up to 30% on infrastructure costs in the first year.
                            </p>
                        </div>
                    </div>

                    {/* Row 2 */}
                    <div className="flex flex-col md:flex-row-reverse items-center gap-12">
                        <div className="md:w-1/2 rounded-3xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-500">
                            <img
                                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&q=80"
                                alt="Team Collaboration"
                                className="w-full h-[400px] object-cover"
                            />
                        </div>
                        <div className="md:w-1/2 space-y-6">
                            <div className="inline-block p-3 bg-white rounded-xl shadow-sm mb-2">
                                <Users className="text-sunset" size={32} />
                            </div>
                            <h3 className="text-4xl font-bold text-navy">Human-Centric Approach</h3>
                            <p className="text-body text-muted">
                                Technology is useless without the people who wield it. We prioritize user training and experience, ensuring your team feels empowered, not overwhelmed, by new tools.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Values */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6 md:px-12">
                    <div className="text-center mb-16">
                        <h2 className="text-h2-mobile md:text-h2-desktop font-bold text-navy mb-4">Core Values</h2>
                        <div className="w-16 h-1 bg-electric mx-auto" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                                className="group p-8 rounded-2xl border border-gray-100 hover:border-electric hover:bg-cream/30 transition-all duration-300 flex flex-col items-center text-center"
                            >
                                <div className="w-20 h-20 rounded-full bg-white border border-gray-200 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:border-electric transition-all duration-300 shadow-sm">
                                    <val.icon className="text-navy group-hover:text-electric transition-colors" size={32} />
                                </div>
                                <h3 className="text-xl font-bold text-navy mb-3">{val.title}</h3>
                                <p className="text-muted">{val.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
