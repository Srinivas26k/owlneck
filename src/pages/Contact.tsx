import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, ArrowRight } from 'lucide-react';

const Contact: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: 'General Inquiry',
        message: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert('Thank you for reaching out! We will get back to you shortly.');
    };

    return (
        <div className="pt-20">
            {/* Hero */}
            <section className="bg-white py-32 md:py-40 text-center">
                <h1 className="text-display-mobile md:text-display-desktop font-bold text-navy mb-8 tracking-tight leading-[0.95]">Get In Touch</h1>
                <p className="text-2xl text-muted font-light tracking-wide">We'd love to hear from you.</p>
            </section>

            {/* Split Section */}
            <section className="bg-white pb-40">
                <div className="container mx-auto px-6 md:px-12">
                    <div className="flex flex-col lg:flex-row gap-24">

                        {/* Contact Form */}
                        <div className="lg:w-1/2">
                            <form onSubmit={handleSubmit} className="space-y-12">
                                <div className="group">
                                    <label className="block text-base font-semibold text-muted mb-4 tracking-wide uppercase text-xs">Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full border-b-2 border-gray-200 py-4 text-xl focus:outline-none focus:border-electric transition-colors bg-transparent font-medium text-navy placeholder-gray-300"
                                        placeholder="John Doe"
                                        required
                                    />
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                                    <div className="group">
                                        <label className="block text-base font-semibold text-muted mb-4 tracking-wide uppercase text-xs">Business Email</label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="w-full border-b-2 border-gray-200 py-4 text-xl focus:outline-none focus:border-electric transition-colors bg-transparent font-medium text-navy placeholder-gray-300"
                                            placeholder="john@company.com"
                                            required
                                        />
                                    </div>
                                    <div className="group">
                                        <label className="block text-base font-semibold text-muted mb-4 tracking-wide uppercase text-xs">Phone</label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className="w-full border-b-2 border-gray-200 py-4 text-xl focus:outline-none focus:border-electric transition-colors bg-transparent font-medium text-navy placeholder-gray-300"
                                            placeholder="+1 (555) 000-0000"
                                        />
                                    </div>
                                </div>

                                <div className="group">
                                    <label className="block text-base font-semibold text-muted mb-4 tracking-wide uppercase text-xs">Subject</label>
                                    <div className="relative">
                                        <select
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleChange}
                                            className="w-full border-b-2 border-gray-200 py-4 text-xl focus:outline-none focus:border-electric transition-colors bg-transparent appearance-none font-medium text-navy"
                                        >
                                            <option>General Inquiry</option>
                                            <option>Project Proposal</option>
                                            <option>Careers</option>
                                            <option>Support</option>
                                        </select>
                                        <div className="absolute right-0 top-1/2 transform -translate-y-1/2 pointer-events-none">
                                            <ArrowRight className="rotate-90 text-gray-400" size={20} />
                                        </div>
                                    </div>
                                </div>

                                <div className="group">
                                    <label className="block text-base font-semibold text-muted mb-4 tracking-wide uppercase text-xs">Message</label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows={4}
                                        className="w-full border-b-2 border-gray-200 py-4 text-xl focus:outline-none focus:border-electric transition-colors bg-transparent resize-none font-medium text-navy placeholder-gray-300"
                                        placeholder="Tell us about your project..."
                                        required
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="bg-gradient-to-r from-primary to-electric text-white px-12 py-6 rounded-full font-bold text-xl hover:shadow-2xl hover:shadow-primary/40 transform hover:-translate-y-1 hover:scale-105 transition-all flex items-center justify-center w-full md:w-auto"
                                >
                                    Send Message <Send className="ml-3" size={20} />
                                </button>
                            </form>
                        </div>

                        {/* Contact Info Card */}
                        <div className="lg:w-1/2">
                            <div className="bg-cream/50 rounded-[3rem] p-16 h-full flex flex-col justify-center space-y-16 border border-white shadow-xl shadow-cream">
                                <div className="space-y-10">
                                    <div className="flex items-start gap-8 group">
                                        <div className="p-5 bg-white rounded-2xl text-sunset shadow-lg shadow-sunset/10 group-hover:scale-110 transition-transform duration-300">
                                            <Phone size={32} />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-navy text-2xl mb-2">Call Us</h3>
                                            <p className="text-muted text-xl font-light leading-relaxed hover:text-electric transition-colors cursor-pointer">+91 40 1234 5678</p>
                                            <p className="text-muted text-xl font-light leading-relaxed hover:text-electric transition-colors cursor-pointer">+1 800 123 4567</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-8 group">
                                        <div className="p-5 bg-white rounded-2xl text-sunset shadow-lg shadow-sunset/10 group-hover:scale-110 transition-transform duration-300">
                                            <Mail size={32} />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-navy text-2xl mb-2">Email Us</h3>
                                            <p className="text-muted text-xl font-light leading-relaxed hover:text-electric transition-colors cursor-pointer">hello@owlneck.com</p>
                                            <p className="text-muted text-xl font-light leading-relaxed hover:text-electric transition-colors cursor-pointer">support@owlneck.com</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-8 group">
                                        <div className="p-5 bg-white rounded-2xl text-sunset shadow-lg shadow-sunset/10 group-hover:scale-110 transition-transform duration-300">
                                            <MapPin size={32} />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-navy text-2xl mb-2">Our Locations</h3>
                                            <p className="text-muted text-xl font-light leading-relaxed">Hyderabad, India (HQ)</p>
                                            <p className="text-muted text-xl font-light leading-relaxed">Sydney, Australia</p>
                                            <p className="text-muted text-xl font-light leading-relaxed">New York, USA</p>
                                            <p className="text-muted text-xl font-light leading-relaxed">London, UK</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Map Embed */}
            <section className="w-full h-[600px] grayscale hover:grayscale-0 transition-all duration-[1.5s] ease-in-out">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d243647.3160407063!2d78.26795861937985!3d17.412153075677!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99daeaebd2c7%3A0xae93b78392bafbc2!2sHyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1709825484836!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Hyderabad Map"
                />
            </section>
        </div>
    );
};

export default Contact;
