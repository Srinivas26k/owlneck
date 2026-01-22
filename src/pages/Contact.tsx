import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, ArrowRight, CheckCircle2 } from 'lucide-react';

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

                                <div className="relative group">
                                    <input
                                        type="text"
                                        name="name"
                                        id="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="block py-4 px-0 w-full text-xl text-navy bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0 focus:border-electric peer transition-colors"
                                        placeholder=" "
                                        required
                                    />
                                    <label
                                        htmlFor="name"
                                        className="absolute text-muted duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-electric peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 text-xl tracking-wide font-light"
                                    >
                                        Name
                                    </label>
                                    <div className={`absolute right-0 top-4 text-green-500 transition-all duration-500 ${formData.name.length > 2 ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}>
                                        <CheckCircle2 size={24} />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                                    <div className="relative group">
                                        <input
                                            type="email"
                                            name="email"
                                            id="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="block py-4 px-0 w-full text-xl text-navy bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0 focus:border-electric peer transition-colors"
                                            placeholder=" "
                                            required
                                        />
                                        <label
                                            htmlFor="email"
                                            className="absolute text-muted duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-electric peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 text-xl tracking-wide font-light"
                                        >
                                            Business Email
                                        </label>
                                        <div className={`absolute right-0 top-4 text-green-500 transition-all duration-500 ${formData.email.includes('@') ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}>
                                            <CheckCircle2 size={24} />
                                        </div>
                                    </div>

                                    <div className="relative group">
                                        <input
                                            type="tel"
                                            name="phone"
                                            id="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            className="block py-4 px-0 w-full text-xl text-navy bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0 focus:border-electric peer transition-colors"
                                            placeholder=" "
                                        />
                                        <label
                                            htmlFor="phone"
                                            className="absolute text-muted duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-electric peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 text-xl tracking-wide font-light"
                                        >
                                            Phone
                                        </label>
                                    </div>
                                </div>

                                <div className="relative group">
                                    <select
                                        name="subject"
                                        id="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        className="block py-4 px-0 w-full text-xl text-navy bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0 focus:border-electric peer transition-colors font-medium cursor-pointer"
                                    >
                                        <option>General Inquiry</option>
                                        <option>Project Proposal</option>
                                        <option>Careers</option>
                                        <option>Support</option>
                                    </select>
                                    <label
                                        htmlFor="subject"
                                        className="absolute text-muted duration-300 transform -translate-y-8 scale-75 top-0 -z-10 origin-[0] text-xl tracking-wide font-light uppercase text-xs"
                                    >
                                        Subject
                                    </label>
                                    <div className="absolute right-0 top-1/2 transform -translate-y-1/2 pointer-events-none">
                                        <ArrowRight className="rotate-90 text-gray-400 group-hover:text-electric transition-colors" size={20} />
                                    </div>
                                </div>

                                <div className="relative group">
                                    <textarea
                                        name="message"
                                        id="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows={4}
                                        className="block py-4 px-0 w-full text-xl text-navy bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0 focus:border-electric peer transition-colors resize-none"
                                        placeholder=" "
                                        required
                                    />
                                    <label
                                        htmlFor="message"
                                        className="absolute text-muted duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-electric peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 text-xl tracking-wide font-light"
                                    >
                                        Message
                                    </label>
                                </div>

                                <button
                                    type="submit"
                                    className="group relative bg-gradient-to-r from-primary to-electric text-white px-12 py-6 rounded-full font-bold text-xl hover:shadow-2xl hover:shadow-primary/40 transform transition-all active:scale-95 flex items-center justify-center w-full md:w-auto overflow-hidden"
                                >
                                    <span className="absolute inset-0 w-full h-full bg-gradient-to-l from-electric to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out" />
                                    <span className="relative flex items-center gap-3">
                                        Send Message
                                        <Send className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" size={20} />
                                    </span>
                                    {/* Ripple effect container (simplified as a pulse on active for now) */}
                                    <span className="absolute inset-0 rounded-full ring-2 ring-white/30 opacity-0 group-active:opacity-100 animate-ping" />
                                </button>
                            </form>
                        </div>

                        {/* Contact Info Card */}
                        <div className="lg:w-1/2">
                            <div className="bg-cream/50 rounded-[3rem] p-16 h-full flex flex-col justify-center space-y-16 border border-white shadow-xl shadow-cream hover:shadow-2xl hover:shadow-cream/50 transition-shadow duration-500">
                                <div className="space-y-10">
                                    <div className="flex items-start gap-8 group">
                                        <div className="p-5 bg-white rounded-2xl text-sunset shadow-lg shadow-sunset/10 group-hover:scale-110 group-hover:bg-sunset group-hover:text-white transition-all duration-300">
                                            <Phone size={32} />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-navy text-2xl mb-2">Call Us</h3>
                                            <p className="text-muted text-xl font-light leading-relaxed hover:text-electric transition-colors cursor-pointer">+91 40 1234 5678</p>
                                            <p className="text-muted text-xl font-light leading-relaxed hover:text-electric transition-colors cursor-pointer">+1 800 123 4567</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-8 group">
                                        <div className="p-5 bg-white rounded-2xl text-sunset shadow-lg shadow-sunset/10 group-hover:scale-110 group-hover:bg-sunset group-hover:text-white transition-all duration-300">
                                            <Mail size={32} />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-navy text-2xl mb-2">Email Us</h3>
                                            <p className="text-muted text-xl font-light leading-relaxed hover:text-electric transition-colors cursor-pointer">hello@owlneck.com</p>
                                            <p className="text-muted text-xl font-light leading-relaxed hover:text-electric transition-colors cursor-pointer">support@owlneck.com</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-8 group">
                                        <div className="p-5 bg-white rounded-2xl text-sunset shadow-lg shadow-sunset/10 group-hover:scale-110 group-hover:bg-sunset group-hover:text-white transition-all duration-300">
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
