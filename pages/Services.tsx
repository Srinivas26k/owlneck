import React, { useState } from 'react';
import { Reveal, SectionHeading, CTASection } from '../components/Components';
import { Book, Stethoscope, Building2, Home, Layout, Coffee, ShoppingBag, Radio, Shield, Banknote, ShoppingCart, Factory, Fuel, Clapperboard, Landmark, Pill, ChevronDown } from 'lucide-react';

// --- Accordion Component ---
const AccordionItem: React.FC<{ title: string; content: string; icon: any; isOpen: boolean; onClick: () => void }> = ({ title, content, icon: Icon, isOpen, onClick }) => {
    return (
        <div className="border-b border-gray-200">
            <button 
                onClick={onClick}
                className="w-full py-8 flex items-center justify-between text-left group focus:outline-none"
            >
                <div className="flex items-center gap-6">
                    <div className={`p-3 rounded-lg transition-colors ${isOpen ? 'bg-primary text-white' : 'bg-gray-100 text-gray-500 group-hover:text-primary'}`}>
                        <Icon className="w-6 h-6" />
                    </div>
                    <span className={`text-2xl font-semibold transition-colors ${isOpen ? 'text-primary' : 'text-navy group-hover:text-electric'}`}>
                        {title}
                    </span>
                </div>
                <ChevronDown className={`w-6 h-6 text-gray-400 transition-transform duration-300 ${isOpen ? 'rotate-180 text-primary' : ''}`} />
            </button>
            <div 
                className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
            >
                <div className="pb-8 pl-20 pr-4 text-muted text-lg leading-relaxed">
                    {content}
                </div>
            </div>
        </div>
    )
}

const Services: React.FC = () => {
  const industries = [
    { name: "Education", icon: Book, desc: "LMS & Remote Learning" },
    { name: "Healthcare", icon: Stethoscope, desc: "HIPAA Compliant Cloud" },
    { name: "BFSI", icon: Banknote, desc: "Secure Transaction Processing" },
    { name: "Real Estate", icon: Home, desc: "Property Mgmt Systems" },
    { name: "SaaS", icon: Layout, desc: "Scalable Architecture" },
    { name: "Hospitality", icon: Coffee, desc: "Guest Experience Tech" },
    { name: "Retail", icon: ShoppingBag, desc: "POS & Inventory" },
    { name: "Telecom", icon: Radio, desc: "High-Availability Networks" },
    { name: "Insurance", icon: Shield, desc: "Risk Analysis AI" },
    { name: "Fintech", icon: Building2, desc: "Blockchain & Security" },
    { name: "E-commerce", icon: ShoppingCart, desc: "High Traffic Handling" },
    { name: "Manufacturing", icon: Factory, desc: "IoT & Automation" },
    { name: "Oil & Energy", icon: Fuel, desc: "Field Data Sync" },
    { name: "Media", icon: Clapperboard, desc: "Content Delivery Networks" },
    { name: "Government", icon: Landmark, desc: "Secure Public Infrastructure" },
    { name: "Pharma", icon: Pill, desc: "R&D Data Protection" }
  ];

  const deepDives = [
      { 
          title: "Cybersecurity Services", 
          icon: Shield,
          content: "Our comprehensive cybersecurity framework protects your digital assets 24/7. We utilize advanced threat detection, regular penetration testing, and strict compliance monitoring (SOC2, ISO 27001) to ensure your enterprise data remains impregnable against evolving cyber threats."
      },
      { 
          title: "Cloud Computing", 
          icon: Layout,
          content: "Whether migrating legacy systems or building cloud-native applications, our experts handle AWS, Azure, and GCP environments. We optimize for cost, performance, and scalability, ensuring your infrastructure grows seamlessly with your business demands."
      },
      { 
          title: "AI/ML Services", 
          icon: Factory,
          content: "Unlock the power of your data. From predictive analytics and natural language processing to intelligent process automation, we build bespoke AI solutions that drive operational efficiency and create new competitive advantages."
      }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <>
      {/* HERO */}
      <section className="bg-cream/50 py-32 text-center border-b border-gray-100">
          <div className="max-w-4xl mx-auto px-6">
            <Reveal>
              <h1 className="text-5xl md:text-6xl font-bold text-navy mb-6">Our Industries</h1>
              <p className="text-xl text-muted">Delivering specialized IT solutions across 15+ industry verticals.</p>
            </Reveal>
          </div>
      </section>

      {/* INDUSTRIES GRID */}
      <section className="py-32 bg-white">
          <div className="max-w-7xl mx-auto px-6">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                  {industries.map((ind, idx) => (
                      <Reveal key={idx} delay={idx * 30}>
                          <div className="group border border-gray-200 p-8 rounded-xl hover:bg-cream hover:border-electric transition-all duration-300 hover:-translate-y-1">
                              <ind.icon className="w-10 h-10 text-electric mb-4 group-hover:scale-110 transition-transform" />
                              <h3 className="font-bold text-lg text-navy mb-2">{ind.name}</h3>
                              <p className="text-sm text-muted">{ind.desc}</p>
                          </div>
                      </Reveal>
                  ))}
              </div>
          </div>
      </section>

      {/* DEEP DIVE */}
      <section className="py-32 bg-white border-t border-gray-100">
          <div className="max-w-4xl mx-auto px-6">
              <Reveal>
                  <SectionHeading title="Service Deep Dive" subtitle="Expertise" />
              </Reveal>
              <div className="mt-12">
                  {deepDives.map((item, idx) => (
                      <Reveal key={idx} delay={idx * 100}>
                        <AccordionItem 
                            {...item} 
                            isOpen={openIndex === idx} 
                            onClick={() => setOpenIndex(openIndex === idx ? null : idx)} 
                        />
                      </Reveal>
                  ))}
              </div>
          </div>
      </section>

      <CTASection />
    </>
  );
};

export default Services;
