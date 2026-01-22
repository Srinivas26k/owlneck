import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Cpu, Cloud, FileCheck, BarChart3, GraduationCap, Zap, Users } from 'lucide-react';
import { Reveal, SectionHeading, CTASection } from '../components/Components';

// --- Hero Sphere Component (CSS Only for stability) ---
const AbstractSphere = () => (
  <div className="relative w-64 h-64 md:w-96 md:h-96 mx-auto perspective-1000">
    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-electric via-primary to-sunset opacity-20 blur-3xl animate-pulse"></div>
    <div className="relative w-full h-full animate-float">
      {/* Outer Ring */}
      <div className="absolute inset-0 border-[1px] border-electric/30 rounded-full animate-spin-slow" style={{ transformStyle: 'preserve-3d', transform: 'rotateX(60deg)' }}></div>
      {/* Inner Rings */}
      <div className="absolute inset-4 border-[1px] border-sunset/40 rounded-full animate-spin-slow" style={{ animationDuration: '15s', animationDirection: 'reverse' }}></div>
      <div className="absolute inset-12 border-[1px] border-primary/50 rounded-full animate-spin-slow" style={{ animationDuration: '8s', transform: 'rotateY(45deg)' }}></div>
      
      {/* Core */}
      <div className="absolute inset-0 m-auto w-32 h-32 bg-gradient-to-r from-electric to-primary rounded-full blur-md opacity-80 mix-blend-screen animate-pulse"></div>
    </div>
  </div>
);

const Home: React.FC = () => {
  const services = [
    { icon: Shield, title: "Cybersecurity", desc: "Enterprise-grade protection." },
    { icon: Cpu, title: "AIML Services", desc: "Intelligent automation." },
    { icon: Cloud, title: "Cloud Computing", desc: "Scalable infrastructure." },
    { icon: FileCheck, title: "Audit & Compliance", desc: "SOC2 ready compliance." },
    { icon: BarChart3, title: "Financial Reports", desc: "Real-time insights." },
    { icon: GraduationCap, title: "Corporate Training", desc: "Upskill your workforce." },
    { icon: Zap, title: "AI Powered Toolkit", desc: "Next-gen productivity." },
    { icon: Users, title: "Staffing Solutions", desc: "Expert talent acquisition." },
  ];

  const partners = [
    "OneAldo", "Trench", "Plumsoft", "Align", "Bank K", "Fortune Cloud", "ArmiSys", "Cloud N Cluster"
  ];

  return (
    <>
      {/* HERO */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-cream/30">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-5 gap-12 items-center pt-20">
          <div className="lg:col-span-3 z-10">
            <Reveal>
              <h1 className="text-5xl md:text-7xl font-bold text-navy leading-[1.1] mb-8">
                Empowering Businesses with <span className="text-primary">Secure</span> and <span className="text-electric">Scalable</span> IT Managed Services
              </h1>
            </Reveal>
            <Reveal delay={200}>
              <p className="text-xl text-muted mb-10 max-w-lg leading-relaxed">
                1ms response time. 99% uptime guarantee. The future of enterprise technology is here.
              </p>
            </Reveal>
            <Reveal delay={400}>
              <div className="flex flex-wrap gap-4">
                <Link to="/contact" className="px-8 py-4 bg-primary text-white font-medium rounded-full transition-all hover:bg-electric hover:scale-105 shadow-lg shadow-primary/30">
                  Get Started
                </Link>
                <Link to="/services" className="px-8 py-4 bg-white text-navy border border-gray-200 font-medium rounded-full transition-all hover:border-electric hover:text-electric">
                  View Services
                </Link>
              </div>
            </Reveal>
          </div>
          <div className="lg:col-span-2 relative">
             <Reveal delay={600}>
               <AbstractSphere />
             </Reveal>
          </div>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <Reveal>
            <SectionHeading title="Our Core Services" subtitle="Capabilities" />
          </Reveal>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
            {services.map((service, idx) => (
              <Reveal key={idx} delay={idx * 50}>
                <div className="group p-8 border border-electric/20 rounded-2xl hover:bg-cream/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-electric/5 hover:border-electric cursor-none">
                  <service.icon className="w-10 h-10 text-primary mb-6 group-hover:scale-110 transition-transform" />
                  <h3 className="text-xl font-bold text-navy mb-3">{service.title}</h3>
                  <p className="text-muted text-sm">{service.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* METRICS */}
      <section className="py-24 bg-cream border-y border-electric/10">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-center gap-12">
          {[
            { val: "99%", label: "Customer Retention" },
            { val: "411", label: "Service Requests" },
            { val: "90+", label: "Happy Clients" }
          ].map((stat, idx) => (
            <React.Fragment key={idx}>
              <Reveal delay={idx * 100}>
                <div className="flex flex-col items-center">
                  <span className="text-6xl md:text-8xl font-bold text-primary mb-2 font-sans">{stat.val}</span>
                  <span className="text-muted font-medium uppercase tracking-widest text-sm">{stat.label}</span>
                </div>
              </Reveal>
              {idx !== 2 && <div className="hidden md:block w-px h-24 bg-electric/20" />}
            </React.Fragment>
          ))}
        </div>
      </section>

      {/* PARTNERS MARQUEE */}
      <section className="py-24 overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto px-6 mb-12">
          <h3 className="text-navy text-xl font-semibold text-center">Trusted By Industry Leaders</h3>
        </div>
        <div className="relative w-full overflow-hidden">
          <div className="flex whitespace-nowrap animate-marquee hover:[animation-play-state:paused]">
            {[...partners, ...partners, ...partners].map((partner, i) => (
              <div key={i} className="mx-12 text-3xl font-bold text-gray-300 hover:text-electric transition-colors cursor-default select-none">
                {partner}
              </div>
            ))}
          </div>
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10"></div>
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10"></div>
        </div>
      </section>

      {/* CTA */}
      <CTASection />
    </>
  );
};

export default Home;
