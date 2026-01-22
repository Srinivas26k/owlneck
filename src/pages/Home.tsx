import React, { useEffect, useRef } from 'react';
import {
  ShieldCheck, Cpu, Cloud, FileSearch,
  FileText, GraduationCap, Wrench, Users,
  ArrowRight, CheckCircle
} from 'lucide-react';
import { Link } from 'react-router-dom';

const SphereAnimation = () => (
  <div className="relative w-[400px] h-[400px] animate-float">
    {/* Core Gradient Sphere */}
    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-electric via-primary to-sunset opacity-80 blur-3xl animate-pulse" />

    {/* Rotating Rings */}
    <div className="absolute inset-0 border-2 border-electric/30 rounded-full animate-[spin_10s_linear_infinite]" style={{ transform: 'rotateX(70deg)' }} />
    <div className="absolute inset-0 border-2 border-sunset/30 rounded-full animate-[spin_15s_linear_infinite_reverse]" style={{ transform: 'rotateY(70deg)' }} />
    <div className="absolute inset-4 border border-white/20 rounded-full animate-[spin_20s_linear_infinite]" />

    {/* Floating Particles */}
    {[...Array(5)].map((_, i) => (
      <div
        key={i}
        className="absolute w-2 h-2 bg-sunset rounded-full shadow-[0_0_10px_#FF8040]"
        style={{
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          animation: `float ${3 + i}s ease-in-out infinite alternate`
        }}
      />
    ))}
  </div>
);

const Home: React.FC = () => {
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

  const services = [
    { icon: ShieldCheck, title: 'Cybersecurity', desc: 'Enterprise-grade protection.' },
    { icon: Cpu, title: 'AIML Integration', desc: 'Smart automation workflows.' },
    { icon: Cloud, title: 'Cloud Computing', desc: 'Scalable infrastructure.' },
    { icon: FileSearch, title: 'Audit & Compliance', desc: 'Regulatory adherence.' },
    { icon: FileText, title: 'Financial Reports', desc: 'Data-driven insights.' },
    { icon: GraduationCap, title: 'Corporate Training', desc: 'Upskilling your workforce.' },
    { icon: Wrench, title: 'AI Toolkit', desc: 'Custom developer tools.' },
    { icon: Users, title: 'Staffing Solutions', desc: 'Top-tier technical talent.' },
  ];

  return (
    <div className="w-full overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden bg-white">
        <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center">
          <div className="md:w-3/5 space-y-8 z-10 opacity-0 animate-[scroll-reveal_0.8s_ease-out_forwards]">
            <h1 className="text-display-mobile md:text-display-desktop font-bold leading-tight text-navy">
              Empowering Businesses with <span className="text-primary">Secure</span> and <span className="text-sunset">Scalable</span> IT Services
            </h1>
            <p className="text-body text-muted max-w-xl">
              Experience the future of managed services with 1ms response times and a 99% uptime guarantee. We build infrastructure that scales with your ambition.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="px-8 py-4 bg-primary text-white text-lg font-semibold rounded-full hover:bg-electric transition-all hover:-translate-y-1 shadow-lg shadow-primary/30"
              >
                Get Started
              </Link>
              <Link
                to="/services"
                className="px-8 py-4 bg-transparent border-2 border-primary text-primary text-lg font-semibold rounded-full hover:bg-primary/5 transition-all hover:-translate-y-1"
              >
                View Services
              </Link>
            </div>
          </div>
          <div className="md:w-2/5 mt-12 md:mt-0 flex justify-center z-0">
            <SphereAnimation />
          </div>
        </div>

        {/* Background Decor */}
        <div className="absolute -top-20 -right-20 w-[600px] h-[600px] bg-cream/50 rounded-full blur-3xl -z-10" />
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-white" ref={el => sectionsRef.current[0] = el}>
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {services.map((service, idx) => (
              <div
                key={idx}
                className="group p-8 rounded-2xl border border-gray-100 bg-white hover:border-electric transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-electric/10"
              >
                <div className="w-12 h-12 bg-cream rounded-xl flex items-center justify-center mb-6 group-hover:bg-electric group-hover:text-white transition-colors duration-300 text-primary">
                  <service.icon size={24} />
                </div>
                <h3 className="text-xl font-bold mb-2 text-navy group-hover:text-electric transition-colors">{service.title}</h3>
                <p className="text-muted text-sm leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Metrics */}
      <section className="py-24 bg-cream relative overflow-hidden" ref={el => sectionsRef.current[1] = el}>
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-multiply" />
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-primary/10 gap-8 md:gap-0">
            {[
              { num: '99%', label: 'Customer Retention' },
              { num: '411', label: 'Service Requests' },
              { num: '90+', label: 'Happy Clients' }
            ].map((stat, idx) => (
              <div key={idx} className="text-center px-4 py-8">
                <div className="text-[96px] font-bold text-primary leading-none mb-2 tracking-tighter">
                  {stat.num}
                </div>
                <div className="text-lg font-medium text-navy uppercase tracking-widest">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Marquee */}
      <section className="py-20 bg-white overflow-hidden" ref={el => sectionsRef.current[2] = el}>
        <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
          <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-marquee hover:[animation-play-state:paused]">
            {['OneAldo', 'Trench', 'Plumsoft', 'Align', 'Bank K', 'Fortune Cloud', 'ArmiSys', 'Cloud N Cluster'].map((partner, i) => (
              <li key={i} className="text-3xl font-bold text-gray-300 uppercase hover:text-electric transition-colors cursor-default select-none whitespace-nowrap">
                {partner}
              </li>
            ))}
            {/* Duplicate for infinite loop */}
            {['OneAldo', 'Trench', 'Plumsoft', 'Align', 'Bank K', 'Fortune Cloud', 'ArmiSys', 'Cloud N Cluster'].map((partner, i) => (
              <li key={`d-${i}`} className="text-3xl font-bold text-gray-300 uppercase hover:text-electric transition-colors cursor-default select-none whitespace-nowrap">
                {partner}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-gradient-to-tr from-primary to-electric text-center px-6 relative overflow-hidden" ref={el => sectionsRef.current[3] = el}>
        <div className="relative z-10 max-w-4xl mx-auto space-y-8">
          <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight">
            Ready to Transform Your IT Infrastructure?
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Join the industry leaders who trust OWLNECK for security, speed, and reliability.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-10 py-5 bg-white text-primary text-xl font-bold rounded-full hover:bg-sunset hover:text-white transition-all transform hover:scale-105 shadow-2xl"
          >
            Start Your Journey <ArrowRight className="ml-2" />
          </Link>
        </div>
        {/* Abstract background shapes */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl transform -translate-y-1/2 -translate-x-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-sunset/20 rounded-full blur-3xl transform translate-y-1/2 translate-x-1/2" />
      </section>
    </div>
  );
};

export default Home;
