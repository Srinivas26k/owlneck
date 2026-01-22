import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Reveal } from '../components/Components';

const ContactInput: React.FC<React.InputHTMLAttributes<HTMLInputElement>> = (props) => (
    <input 
        {...props} 
        className="w-full py-4 bg-transparent border-b border-gray-200 focus:border-electric focus:outline-none transition-colors placeholder-gray-400 text-navy font-medium"
    />
);

const Contact: React.FC = () => {
  return (
    <>
      {/* HERO */}
      <section className="pt-32 pb-20 text-center bg-white">
          <Reveal>
            <h1 className="text-5xl md:text-7xl font-bold text-navy mb-4">Get In Touch</h1>
            <p className="text-xl text-muted">We'd love to hear from you.</p>
          </Reveal>
      </section>

      {/* FORM + INFO */}
      <section className="pb-32 bg-white">
          <div className="max-w-7xl mx-auto px-6">
              <div className="grid lg:grid-cols-2 gap-20">
                  {/* Left: Form */}
                  <Reveal>
                      <div className="bg-white">
                          <h2 className="text-2xl font-bold text-navy mb-8">How May We Help You!</h2>
                          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                              <div className="grid md:grid-cols-2 gap-6">
                                  <ContactInput type="text" placeholder="Your Name" />
                                  <ContactInput type="email" placeholder="Business Email" />
                              </div>
                              <ContactInput type="tel" placeholder="Phone Number" />
                              <div className="relative">
                                  <select className="w-full py-4 bg-transparent border-b border-gray-200 focus:border-electric focus:outline-none text-navy appearance-none">
                                      <option>Subject: General Inquiry</option>
                                      <option>Project Consultation</option>
                                      <option>Support</option>
                                      <option>Careers</option>
                                  </select>
                              </div>
                              <textarea 
                                rows={4} 
                                placeholder="Tell us about your project..." 
                                className="w-full py-4 bg-transparent border-b border-gray-200 focus:border-electric focus:outline-none resize-none placeholder-gray-400 text-navy"
                              ></textarea>
                              
                              <button className="mt-8 group flex items-center gap-3 bg-gradient-to-r from-primary to-electric text-white px-10 py-4 rounded-full font-semibold transition-all hover:shadow-lg hover:-translate-y-1">
                                  Send Message <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                              </button>
                          </form>
                      </div>
                  </Reveal>

                  {/* Right: Info */}
                  <Reveal delay={200}>
                      <div className="bg-cream/50 p-12 rounded-3xl space-y-12">
                          <div>
                              <div className="flex items-center gap-4 mb-4">
                                  <Phone className="text-sunset w-6 h-6" />
                                  <h3 className="text-xl font-bold text-navy">Give us a call</h3>
                              </div>
                              <div className="space-y-2 pl-10 text-muted">
                                  <p>+91 9642325201</p>
                                  <p>+61 412061601</p>
                              </div>
                          </div>

                          <div>
                              <div className="flex items-center gap-4 mb-4">
                                  <Mail className="text-sunset w-6 h-6" />
                                  <h3 className="text-xl font-bold text-navy">Drop us a line</h3>
                              </div>
                              <div className="pl-10 text-muted">
                                  <p>contact@owlneck.com</p>
                              </div>
                          </div>

                          <div>
                              <div className="flex items-center gap-4 mb-4">
                                  <MapPin className="text-sunset w-6 h-6" />
                                  <h3 className="text-xl font-bold text-navy">Our Locations</h3>
                              </div>
                              <ul className="space-y-4 pl-10 text-muted text-sm">
                                  <li><strong>India:</strong> Telangana, Hyderabad</li>
                                  <li><strong>Australia:</strong> Victoria, St. Germina</li>
                                  <li><strong>USA:</strong> California, San Francisco</li>
                                  <li><strong>UK:</strong> Manchester</li>
                              </ul>
                          </div>
                      </div>
                  </Reveal>
              </div>
          </div>
      </section>

      {/* MAP */}
      <section className="h-[400px] w-full filter grayscale hover:grayscale-0 transition-all duration-700">
         <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15224.99757620352!2d78.3725!3d17.4485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93dc8c5d69df%3A0x19688eb5c5504225!2sHITEC%20City%2C%20Hyderabad%2C%20Telangana%2C%20India!5e0!3m2!1sen!2sus!4v1699999999999!5m2!1sen!2sus" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen={false} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Office Locations"
        ></iframe>
      </section>
    </>
  );
};

export default Contact;
