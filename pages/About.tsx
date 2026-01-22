import React from 'react';
import { Target, Users, ShieldCheck, Heart, Lightbulb, UserCheck } from 'lucide-react';
import { Reveal, SectionHeading, CTASection } from '../components/Components';

const About: React.FC = () => {
  return (
    <>
      {/* HERO */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-navy">
            <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
                alt="Team collaboration" 
                className="w-full h-full object-cover opacity-30"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-navy/50 to-navy"></div>
        </div>
        <div className="relative z-10 text-center px-6">
            <Reveal>
                <span className="text-electric font-mono text-sm uppercase tracking-widest mb-4 block">About Us</span>
                <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">Who We Are</h1>
                <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                    Empowering Business Through Intelligent IT Managed Services
                </p>
            </Reveal>
        </div>
      </section>

      {/* MISSION */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">
            <Reveal>
                <h2 className="text-4xl font-bold text-navy mb-8">Our Mission</h2>
                <div className="space-y-6 text-lg text-muted leading-relaxed">
                    <p>
                        At OwlNeck, we are a trusted provider of comprehensive IT Managed Services, 
                        dedicated to empowering organizations with resilient, scalable, and secure 
                        technology environments.
                    </p>
                    <p>
                        We simplify IT complexity while enhancing operational efficiency through 
                        intelligent automation, proactive monitoring, and expert guidance.
                    </p>
                </div>
            </Reveal>
            <Reveal delay={200}>
                <div className="relative aspect-square bg-cream rounded-3xl overflow-hidden flex items-center justify-center border border-electric/10">
                     {/* Abstract Visual for Growth */}
                     <div className="w-32 h-32 bg-gradient-to-tr from-primary to-electric rounded-full animate-float blur-lg opacity-80"></div>
                     <div className="absolute inset-0 flex items-center justify-center">
                        <Target className="w-32 h-32 text-navy stroke-1" />
                     </div>
                </div>
            </Reveal>
        </div>
      </section>

      {/* SETS US APART */}
      <section className="py-32 bg-cream/30">
          <div className="max-w-7xl mx-auto px-6">
              <Reveal><SectionHeading title="What Sets Us Apart" /></Reveal>
              
              <div className="grid gap-20">
                  {/* Row 1 */}
                  <div className="grid md:grid-cols-2 gap-12 items-center">
                      <Reveal>
                        <div className="aspect-video rounded-2xl overflow-hidden bg-white shadow-2xl shadow-blue-900/10 border border-gray-100 p-8 flex flex-col justify-center">
                            <div className="flex gap-4 items-end mb-6">
                                <div className="h-24 w-8 bg-electric rounded-t-lg"></div>
                                <div className="h-32 w-8 bg-primary rounded-t-lg"></div>
                                <div className="h-16 w-8 bg-sunset rounded-t-lg"></div>
                                <div className="h-40 w-8 bg-navy rounded-t-lg"></div>
                            </div>
                            <div className="h-2 w-full bg-gray-100 rounded-full"></div>
                        </div>
                      </Reveal>
                      <Reveal delay={200}>
                          <h3 className="text-3xl font-bold text-navy mb-4">AI-Driven Financial Support</h3>
                          <p className="text-muted text-lg">Advanced tools for instant insights. We don't just maintain your systems; we provide the data intelligence to help you grow your bottom line.</p>
                      </Reveal>
                  </div>

                  {/* Row 2 */}
                  <div className="grid md:grid-cols-2 gap-12 items-center md:flex-row-reverse">
                       <Reveal delay={200} className="md:order-2">
                            <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" alt="Team" className="rounded-2xl shadow-2xl" />
                       </Reveal>
                       <Reveal className="md:order-1">
                          <h3 className="text-3xl font-bold text-navy mb-4">Human-Centric Approach</h3>
                          <p className="text-muted text-lg">Real experts, not bots. While we use AI for efficiency, our core service is built on human empathy and deep technical expertise.</p>
                      </Reveal>
                  </div>
              </div>
          </div>
      </section>

      {/* VALUES */}
      <section className="py-32 bg-white">
          <div className="max-w-7xl mx-auto px-6">
              <Reveal>
                  <div className="text-center mb-16">
                      <h2 className="text-4xl font-bold text-navy">Our Core Values</h2>
                  </div>
              </Reveal>
              <div className="grid md:grid-cols-3 gap-x-8 gap-y-16">
                  {[
                      { icon: Lightbulb, title: "Innovation" },
                      { icon: ShieldCheck, title: "Integrity" },
                      { icon: Target, title: "Excellence" },
                      { icon: Users, title: "Transparency" },
                      { icon: Heart, title: "Collaboration" },
                      { icon: UserCheck, title: "Security" }
                  ].map((item, idx) => (
                      <Reveal key={idx} delay={idx * 50}>
                          <div className="flex flex-col items-center text-center group">
                              <div className="w-20 h-20 rounded-full border border-gray-200 flex items-center justify-center mb-6 group-hover:border-electric group-hover:bg-cream transition-colors">
                                  <item.icon className="w-8 h-8 text-navy group-hover:text-primary transition-colors" />
                              </div>
                              <h3 className="text-xl font-bold text-navy">{item.title}</h3>
                          </div>
                      </Reveal>
                  ))}
              </div>
          </div>
      </section>

      <CTASection />
    </>
  );
};

export default About;
