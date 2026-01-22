import React, { useRef, useEffect, useState } from 'react';

// --- Reveal on Scroll ---
interface RevealProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

export const Reveal: React.FC<RevealProps> = ({ children, delay = 0, className = '' }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      } ${className}`}
    >
      {children}
    </div>
  );
};

// --- Section Header ---
export const SectionHeading: React.FC<{ title: string; subtitle?: string; align?: 'left' | 'center' }> = ({ title, subtitle, align = 'left' }) => (
  <div className={`mb-16 ${align === 'center' ? 'text-center' : 'text-left'}`}>
    {subtitle && (
      <span className="block text-electric font-semibold tracking-wider text-sm uppercase mb-3">
        {subtitle}
      </span>
    )}
    <h2 className="text-3xl md:text-5xl font-bold text-navy leading-tight">{title}</h2>
  </div>
);

// --- CTA Section ---
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const CTASection: React.FC = () => {
  return (
    <section className="py-32 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary to-electric z-0" />
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 z-0 mix-blend-overlay"></div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <Reveal>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">
            Ready to Transform Your<br/>IT Infrastructure?
          </h2>
          <p className="text-xl text-blue-100 mb-12 font-light">
            Let's build something secure, scalable, and smart.
          </p>
          <Link 
            to="/contact"
            className="inline-flex items-center gap-3 bg-white text-primary px-8 py-4 rounded-full font-semibold text-lg transition-all hover:bg-sunset hover:text-white hover:scale-105 shadow-xl"
          >
            Schedule a Consultation <ArrowRight className="w-5 h-5" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
};