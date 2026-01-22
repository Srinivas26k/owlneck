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
            <section className="bg-white py-16 text-center">
                <h1 className="text-display-mobile md:text-display-desktop font-bold text-navy mb-4">Get In Touch</h1>
                <p className="text-xl text-muted font-light">We'd love to hear from you.</p>
            </section>

            {/* Split Section */}
            <section className="bg-white pb-24">
                <div className="container mx-auto px-6 md:px-12">
                    <div className="flex flex-col lg:flex-row gap-16">

                        {/* Contact Form */}
                        <div className="lg:w-1/2">
                            <form onSubmit={handleSubmit} className="space-y-8">
                                <div className="group">
                                    <label className="block text-sm font-semibold text-muted mb-2">Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full border-b border-gray-300 py-3 text-lg focus:outline-none focus:border-electric transition-colors bg-transparent"
                                        placeholder="John Doe"
                                        required
                                    />
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="group">
                                        <label className="block text-sm font-semibold text-muted mb-2">Business Email</label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="w-full border-b border-gray-300 py-3 text-lg focus:outline-none focus:border-electric transition-colors bg-transparent"
                                            placeholder="john@company.com"
                                            required
                                        />
                                    </div>
                                    <div className="group">
                                        <label className="block text-sm font-semibold text-muted mb-2">Phone</label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className="w-full border-b border-gray-300 py-3 text-lg focus:outline-none focus:border-electric transition-colors bg-transparent"
                                            placeholder="+1 (555) 000-0000"
                                        />
                                    </div>
                                </div>

                                <div className="group">
                                    <label className="block text-sm font-semibold text-muted mb-2">Subject</label>
                                    <div className="relative">
                                        <select
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleChange}
                                            className="w-full border-b border-gray-300 py-3 text-lg focus:outline-none focus:border-electric transition-colors bg-transparent appearance-none"
                                        >
                                            <option>General Inquiry</option>
                                            <option>Project Proposal</option>
                                            <option>Careers</option>
                                            <option>Support</option>
                                        </select>
                                        <div className="absolute right-0 top-1/2 transform -translate-y-1/2 pointer-events-none">
                                            <ArrowRight className="rotate-90 text-gray-400" size={16} />
                                        </div>
                                    </div>
                                </div>

                                <div className="group">
                                    <label className="block text-sm font-semibold text-muted mb-2">Message</label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows={4}
                                        className="w-full border-b border-gray-300 py-3 text-lg focus:outline-none focus:border-electric transition-colors bg-transparent resize-none"
                                        placeholder="Tell us about your project..."
                                        required
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="bg-gradient-to-r from-primary to-electric text-white px-10 py-4 rounded-full font-bold text-lg hover:shadow-lg hover:shadow-primary/30 transform hover:-translate-y-1 transition-all flex items-center justify-center w-full md:w-auto"
                                >
                                    Send Message <Send className="ml-2" size={18} />
                                </button>
                            </form>
                        </div>

                        {/* Contact Info Card */}
                        <div className="lg:w-1/2">
                            <div className="bg-cream/50 rounded-[2rem] p-12 h-full flex flex-col justify-center space-y-10">
                                <div className="space-y-6">
                                    <div className="flex items-start gap-4">
                                        <div className="p-3 bg-white rounded-full text-sunset shadow-sm">
                                            <Phone size={24} />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-navy text-lg">Call Us</h3>
                                            <p className="text-muted text-lg font-light">+91 40 1234 5678</p>
                                            <p className="text-muted text-lg font-light">+1 800 123 4567</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="p-3 bg-white rounded-full text-sunset shadow-sm">
                                            <Mail size={24} />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-navy text-lg">Email Us</h3>
                                            <p className="text-muted text-lg font-light">hello@owlneck.com</p>
                                            <p className="text-muted text-lg font-light">support@owlneck.com</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="p-3 bg-white rounded-full text-sunset shadow-sm">
                                            <MapPin size={24} />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-navy text-lg">Our Locations</h3>
                                            <p className="text-muted text-lg font-light">Hyderabad, India (HQ)</p>
                                            <p className="text-muted text-lg font-light">Sydney, Australia</p>
                                            <p className="text-muted text-lg font-light">New York, USA</p>
                                            <p className="text-muted text-lg font-light">London, UK</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Map Embed */}
            <section className="w-full h-[400px] grayscale hover:grayscale-0 transition-all duration-700 ease-in-out">
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
