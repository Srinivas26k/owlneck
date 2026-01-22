import React, { useEffect, useRef, useState } from 'react';
import {
  ShieldCheck, Cpu, Cloud, FileSearch,
  FileText, GraduationCap, Wrench, Users,
  ArrowRight
} from 'lucide-react';
import { Link } from 'react-router-dom';

// --- Components ---

const SphereAnimation = () => (
  <div className="relative w-[300px] h-[300px] md:w-[500px] md:h-[500px] animate-float">
    {/* Core Gradient Sphere */}
    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-electric via-primary to-sunset opacity-80 blur-3xl animate-pulse" />

    {/* Rotating Rings */}
    <div className="absolute inset-0 border-2 border-electric/40 rounded-full animate-[spin_10s_linear_infinite]" style={{ transform: 'rotateX(70deg)' }} />
    <div className="absolute inset-0 border-2 border-sunset/40 rounded-full animate-[spin_15s_linear_infinite_reverse]" style={{ transform: 'rotateY(70deg)' }} />
    <div className="absolute inset-8 border border-white/30 rounded-full animate-[spin_20s_linear_infinite]" />

    {/* Floating Particles - Increased Count */}
    {[...Array(12)].map((_, i) => (
      <div
        key={i}
        className="absolute w-3 h-3 bg-sunset rounded-full shadow-[0_0_15px_#FF8040] opacity-80"
        style={{
          top: `${Math.random() * 80 + 10}%`,
          left: `${Math.random() * 80 + 10}%`,
          animation: `float ${2 + i * 0.5}s ease-in-out infinite alternate ${i * 0.2}s`
        }}
      />
    ))}
  </div>
);

const CountUp: React.FC<{ end: number; suffix?: string; duration?: number }> = ({ end, suffix = '', duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const nodeRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (nodeRef.current) observer.observe(nodeRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    let startTime: number | null = null;
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * end));

      if (progress < 1) requestAnimationFrame(animate);
      else setCount(end);
    };
    requestAnimationFrame(animate);
  }, [isVisible, end, duration]);

  return <span ref={nodeRef}>{count}{suffix}</span>;
}


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
      { threshold: 0.1 } // Trigger slightly earlier
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
      <section className="relative min-h-screen flex items-center pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden bg-white">
        {/* Animated Gradient Mesh Background */}
        <div className="absolute top-[-20%] right-[-10%] w-[70vw] h-[70vw] bg-gradient-to-br from-cream via-white to-electric/5 rounded-full blur-[100px] animate-pulse -z-10 mix-blend-multiply opacity-60" />
        <div className="absolute bottom-[-20%] left-[-10%] w-[60vw] h-[60vw] bg-gradient-to-tr from-cream via-white to-sunset/5 rounded-full blur-[100px] animate-float -z-10 mix-blend-multiply opacity-60" />

        <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center gap-16 md:gap-0">
          <div className="md:w-3/5 space-y-10 z-10 opacity-0 animate-[scroll-reveal_0.8s_ease-out_forwards]">
            <h1 className="text-display-mobile md:text-display-desktop font-bold leading-[0.95] tracking-tight text-navy drop-shadow-sm">
              Empowering Businesses with <span className="text-primary relative inline-block">Secure</span> and <span className="text-sunset relative inline-block">Scalable</span> IT Services
            </h1>
            <p className="text-body text-muted max-w-xl leading-relaxed tracking-wide">
              Experience the future of managed services with 1ms response times and a 99% uptime guarantee. We build infrastructure that scales with your ambition.
            </p>
            <div className="flex flex-wrap gap-6 pt-4">
              <Link
                to="/contact"
                className="group relative px-10 py-5 bg-primary text-white text-lg font-bold rounded-full overflow-hidden shadow-2xl shadow-primary/40 transition-all hover:scale-105 hover:shadow-primary/60"
              >
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-electric to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-out"></span>
                <span className="relative z-10 flex items-center">Get Started <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" /></span>
              </Link>
              <Link
                to="/services"
                className="px-10 py-5 bg-white border-2 border-gray-200 text-primary text-lg font-bold rounded-full hover:border-primary hover:bg-primary/5 transition-all hover:scale-105 hover:-translate-y-1"
              >
                View Services
              </Link>
            </div>
          </div>
          <div className="md:w-2/5 flex justify-center z-0 relative">
            <SphereAnimation />
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-40 bg-white" ref={el => sectionsRef.current[0] = el}>
        <div className="container mx-auto px-6 md:px-12">
          <div className="mb-24 max-w-3xl">
            <h2 className="text-h2-mobile md:text-h2-desktop font-bold text-navy mb-8 tracking-tight leading-none">Our Services</h2>
            <p className="text-muted text-lg tracking-wide max-w-xl">Comprehensive digital solutions engineered for the modern enterprise.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {services.map((service, idx) => (
              <div
                key={idx}
                className="group relative p-10 rounded-3xl border border-gray-200 bg-white transition-all duration-500 hover:shadow-2xl hover:shadow-electric/10 hover:-translate-y-2 overflow-hidden"
              >
                {/* Top Border Accent */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-electric scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

                <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-8 bg-gradient-to-br from-cream to-white group-hover:from-primary/10 group-hover:to-electric/10 transition-colors duration-500 text-primary group-hover:text-electric">
                  <service.icon size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-navy group-hover:text-electric transition-colors tracking-tight">{service.title}</h3>
                <p className="text-muted text-base leading-relaxed group-hover:text-navy/80 transition-colors">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Metrics */}
      <section className="py-40 bg-cream relative overflow-hidden" ref={el => sectionsRef.current[1] = el}>
        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-multiply" />
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-primary/10 gap-16 md:gap-0">
            {[
              { end: 99, label: 'Customer Retention', suffix: '%' },
              { end: 411, label: 'Service Requests' },
              { end: 90, label: 'Happy Clients', suffix: '+' }
            ].map((stat, idx) => (
              <div key={idx} className="text-center px-8 py-10">
                <div className="text-[120px] md:text-[140px] font-bold text-transparent bg-clip-text bg-gradient-to-b from-primary to-electric leading-[0.85] mb-6 tracking-tighter">
                  <CountUp end={stat.end} suffix={stat.suffix} />
                </div>
                <div className="text-xl font-bold text-navy uppercase tracking-[0.2em]">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Marquee */}
      <section className="py-32 bg-white overflow-hidden" ref={el => sectionsRef.current[2] = el}>
        <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
          <ul className="flex items-center justify-center md:justify-start [&_li]:mx-12 [&_img]:max-w-none animate-marquee hover:[animation-play-state:paused]">
            {['OneAldo', 'Trench', 'Plumsoft', 'Align', 'Bank K', 'Fortune Cloud', 'ArmiSys', 'Cloud N Cluster'].map((partner, i) => (
              <li key={i} className="text-4xl font-bold text-gray-300 uppercase hover:text-electric transition-colors cursor-default select-none whitespace-nowrap tracking-tighter">
                {partner}
              </li>
            ))}
            {/* Duplicate for infinite loop */}
            {['OneAldo', 'Trench', 'Plumsoft', 'Align', 'Bank K', 'Fortune Cloud', 'ArmiSys', 'Cloud N Cluster'].map((partner, i) => (
              <li key={`d-${i}`} className="text-4xl font-bold text-gray-300 uppercase hover:text-electric transition-colors cursor-default select-none whitespace-nowrap tracking-tighter">
                {partner}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-40 bg-gradient-to-tr from-primary via-electric to-electric text-center px-6 relative overflow-hidden" ref={el => sectionsRef.current[3] = el}>
        <div className="relative z-10 max-w-5xl mx-auto space-y-12">
          <h2 className="text-5xl md:text-7xl font-bold text-white leading-[0.95] tracking-tight drop-shadow-lg">
            Ready to Transform Your IT Infrastructure?
          </h2>
          <p className="text-2xl text-white/90 max-w-3xl mx-auto font-light leading-relaxed">
            Join the industry leaders who trust OWLNECK for security, speed, and reliability.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center px-12 py-6 bg-white text-primary text-2xl font-bold rounded-full hover:bg-sunset hover:text-white transition-all transform hover:scale-110 shadow-2xl shadow-black/20"
          >
            Start Your Journey <ArrowRight className="ml-3 w-6 h-6" />
          </Link>
        </div>

        {/* Abstract background shapes - Enhanced */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-[100px] transform -translate-y-1/2 -translate-x-1/2 animate-pulse" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-sunset/30 rounded-full blur-[120px] transform translate-y-1/2 translate-x-1/2" />
        <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] bg-electric/20 rounded-full blur-[150px] transform -translate-x-1/2 -translate-y-1/2 mix-blend-overlay" />
      </section>
    </div>
  );
};

export default Home;
