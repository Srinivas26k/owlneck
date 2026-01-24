import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, ArrowRight, CheckCircle2, Copy, X, Loader2, ShieldCheck, Clock } from 'lucide-react';
import SEO from '../components/SEO';

const SuccessModal: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
    if (!isOpen) return null;
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} aria-hidden="true" />
            <div role="dialog" aria-modal="true" className="relative bg-white rounded-3xl p-10 max-w-md w-full text-center shadow-2xl animate-scroll-reveal">
                <button onClick={onClose} className="absolute top-6 right-6 text-gray-400 hover:text-navy transition-colors" aria-label="Close modal">
                    <X size={24} />
                </button>
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 size={40} className="text-green-600" />
                </div>
                <h3 className="text-3xl font-bold text-navy mb-4">Message Sent!</h3>
                <p className="text-muted text-lg mb-8">
                    Thanks for reaching out. Our team will get back to you within 2 hours.
                </p>
                <button
                    onClick={onClose}
                    className="w-full py-4 bg-primary text-white rounded-xl font-bold hover:bg-electric transition-colors focus:outline-none focus:ring-4 focus:ring-electric/50"
                >
                    Close
                </button>
            </div>
        </div>
    );
};

const Contact: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: 'General Inquiry',
        message: ''
    });

    const [errors, setErrors] = useState<{ [key: string]: boolean }>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);
    const [copied, setCopied] = useState<string | null>(null);

    const validateField = (name: string, value: string) => {
        let isValid = true;
        if (name === 'email') isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
        if (name === 'name') isValid = value.length > 2;
        if (name === 'message') isValid = value.length > 10;

        setErrors(prev => ({ ...prev, [name]: !isValid }));
        return isValid;
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        if (value) validateField(name, value);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const isNameValid = validateField('name', formData.name);
        const isEmailValid = validateField('email', formData.email);
        const isMessageValid = validateField('message', formData.message);

        if (isNameValid && isEmailValid && isMessageValid) {
            setIsSubmitting(true);
            // Simulate API call
            setTimeout(() => {
                setIsSubmitting(false);
                setShowSuccess(true);
                setFormData({ name: '', email: '', phone: '', subject: 'General Inquiry', message: '' });
                setErrors({});
            }, 1500);
        }
    };

    const copyToClipboard = (text: string, type: string) => {
        navigator.clipboard.writeText(text);
        setCopied(type);
        setTimeout(() => setCopied(null), 2000);
    };

    return (
        <div className="pt-20">
            <SEO
                title="Contact Us"
                description="Get in touch with CyberArcMSP - 24/7 Support, Strategic IT Consulting, and Enterprise Solutions. We respond within 2 hours."
                canonical="https://cyberarcmsp.com/contact"
            />
            <SuccessModal isOpen={showSuccess} onClose={() => setShowSuccess(false)} />

            {/* Hero */}
            <section className="bg-white py-32 md:py-40 text-center relative overflow-hidden">
                <div className="container mx-auto px-6 relative z-10">
                    <h1 className="text-display-mobile md:text-display-desktop font-bold text-navy mb-8 tracking-tight leading-[0.95]">Get In Touch</h1>
                    <p className="text-2xl text-muted font-light tracking-wide mb-12">We'd love to hear from you.</p>

                    {/* Social Proof Bar */}
                    <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 py-8 border-y border-gray-100 bg-gray-50/50 max-w-5xl mx-auto rounded-2xl">
                        <div className="flex items-center gap-3">
                            <ShieldCheck className="text-green-600" size={24} aria-hidden="true" />
                            <span className="font-bold text-navy text-lg">Trusted by 5000+ Businesses</span>
                        </div>
                        <div className="h-8 w-[1px] bg-gray-300 hidden md:block" role="presentation" />
                        <div className="flex items-center gap-3">
                            <Clock className="text-electric" size={24} aria-hidden="true" />
                            <span className="font-bold text-navy text-lg">Response within 2 Hours</span>
                        </div>
                        <div className="h-8 w-[1px] bg-gray-300 hidden md:block" role="presentation" />
                        <div className="text-muted italic">"Best IT partner we've worked with"</div>
                    </div>
                </div>
            </section>

            {/* Split Section */}
            <section className="bg-white pb-40">
                <div className="container mx-auto px-6 md:px-12">
                    <div className="flex flex-col lg:flex-row gap-24">

                        {/* Contact Form */}
                        <div className="lg:w-1/2">
                            <form onSubmit={handleSubmit} className="space-y-12" noValidate>

                                <div className="relative group">
                                    <input
                                        type="text"
                                        name="name"
                                        id="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className={`block py-4 px-0 w-full text-xl bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 peer transition-colors ${errors.name ? 'border-red-400 text-red-500' : formData.name.length > 2 ? 'border-green-500 text-navy' : 'border-gray-200 text-navy focus:border-electric'
                                            }`}
                                        placeholder=" "
                                        required
                                        aria-invalid={errors.name}
                                        aria-describedby={errors.name ? "name-error" : undefined}
                                    />
                                    <label
                                        htmlFor="name"
                                        className={`absolute duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 text-xl tracking-wide font-light ${errors.name ? 'text-red-400' : 'text-muted peer-focus:text-electric'
                                            }`}
                                    >
                                        Name
                                    </label>
                                    <div className={`absolute right-0 top-4 transition-all duration-500 ${formData.name.length > 2 && !errors.name ? 'opacity-100 scale-100 text-green-500' : 'opacity-0 scale-50'}`}>
                                        <CheckCircle2 size={24} />
                                    </div>
                                    {errors.name && <p id="name-error" className="text-red-500 text-sm mt-1">Name must be at least 3 characters.</p>}
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                                    <div className="relative group">
                                        <input
                                            type="email"
                                            name="email"
                                            id="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            className={`block py-4 px-0 w-full text-xl bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 peer transition-colors ${errors.email ? 'border-red-400 text-red-500' : formData.email && !errors.email ? 'border-green-500 text-navy' : 'border-gray-200 text-navy focus:border-electric'
                                                }`}
                                            placeholder=" "
                                            required
                                            aria-invalid={errors.email}
                                            aria-describedby={errors.email ? "email-error" : undefined}
                                        />
                                        <label
                                            htmlFor="email"
                                            className={`absolute duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 text-xl tracking-wide font-light ${errors.email ? 'text-red-400' : 'text-muted peer-focus:text-electric'
                                                }`}
                                        >
                                            Business Email
                                        </label>
                                        <div className={`absolute right-0 top-4 transition-all duration-500 ${formData.email && !errors.email ? 'opacity-100 scale-100 text-green-500' : 'opacity-0 scale-50'}`}>
                                            <CheckCircle2 size={24} />
                                        </div>
                                        {errors.email && <p id="email-error" className="text-red-500 text-sm mt-1">Please enter a valid email address.</p>}
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
                                        maxLength={500}
                                        className={`block py-4 px-0 w-full text-xl bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 peer transition-colors resize-none ${errors.message ? 'border-red-400 text-red-500' : 'border-gray-200 text-navy focus:border-electric'
                                            }`}
                                        placeholder=" "
                                        required
                                        aria-invalid={errors.message}
                                        aria-describedby={errors.message ? "message-error" : undefined}
                                    />
                                    <label
                                        htmlFor="message"
                                        className={`absolute duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 text-xl tracking-wide font-light ${errors.message ? 'text-red-400' : 'text-muted peer-focus:text-electric'
                                            }`}
                                    >
                                        Message
                                    </label>
                                    <div className="absolute bottom-4 right-0 text-sm text-gray-400">
                                        {formData.message.length}/500
                                    </div>
                                    {errors.message && <p id="message-error" className="text-red-500 text-sm mt-1">Message must be at least 10 characters.</p>}
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="group relative bg-gradient-to-r from-primary to-electric text-white px-12 py-6 rounded-full font-bold text-xl hover:shadow-2xl hover:shadow-primary/40 transform transition-all active:scale-95 flex items-center justify-center w-full md:w-auto overflow-hidden disabled:opacity-70 disabled:cursor-not-allowed focus:outline-none focus:ring-4 focus:ring-electric/50"
                                >
                                    <span className="absolute inset-0 w-full h-full bg-gradient-to-l from-electric to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out" />
                                    <span className="relative flex items-center gap-3">
                                        {isSubmitting ? (
                                            <>Sending... <Loader2 className="animate-spin" size={20} /></>
                                        ) : (
                                            <>Send Message <Send className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" size={20} /></>
                                        )}
                                    </span>
                                </button>
                            </form>
                        </div>

                        {/* Contact Info Card */}
                        <div className="lg:w-1/2">
                            <div className="bg-cream/50 rounded-[3rem] p-16 h-full flex flex-col justify-center space-y-16 border border-white shadow-xl shadow-cream hover:shadow-2xl hover:shadow-cream/50 transition-shadow duration-500 relative overflow-hidden">
                                {/* Gradient Mesh BG */}
                                <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gradient-to-bl from-electric/5 to-transparent rounded-full blur-3xl pointer-events-none" />

                                <div className="space-y-12 relative z-10">
                                    {/* Phone */}
                                    <button
                                        onClick={() => copyToClipboard('+18001234567', 'phone')}
                                        className="flex items-start gap-8 group cursor-pointer p-6 rounded-2xl hover:bg-white/60 transition-all duration-300 hover:scale-102 hover:shadow-lg animate-slide-in-right w-full text-left focus:outline-none focus:ring-4 focus:ring-electric/50"
                                        style={{ animationDelay: '0ms' }}
                                        aria-label="Copy phone number"
                                    >
                                        <div className="p-5 bg-white rounded-2xl text-sunset shadow-lg shadow-sunset/10 group-hover:bg-sunset group-hover:text-white transition-all duration-300">
                                            <Phone size={32} />
                                        </div>
                                        <div className="flex-1">
                                            <div className="flex justify-between items-center">
                                                <h3 className="font-bold text-navy text-2xl mb-2">Call Us</h3>
                                                {copied === 'phone' && <span className="text-sm text-green-500 font-bold bg-green-100 px-2 py-1 rounded">Copied!</span>}
                                                <Copy size={16} className="opacity-0 group-hover:opacity-50 transition-opacity" />
                                            </div>
                                            <p className="text-muted text-xl font-light leading-relaxed">+1 800 123 4567</p>
                                            <p className="text-muted text-sm mt-1">Mon-Fri, 9am - 6pm EST</p>
                                        </div>
                                    </button>

                                    {/* Email */}
                                    <button
                                        onClick={() => copyToClipboard('hello@cyberarcmsp.com', 'email')}
                                        className="flex items-start gap-8 group cursor-pointer p-6 rounded-2xl hover:bg-white/60 transition-all duration-300 hover:scale-102 hover:shadow-lg animate-slide-in-right w-full text-left focus:outline-none focus:ring-4 focus:ring-electric/50"
                                        style={{ animationDelay: '100ms' }}
                                        aria-label="Copy email address"
                                    >
                                        <div className="p-5 bg-white rounded-2xl text-sunset shadow-lg shadow-sunset/10 group-hover:bg-sunset group-hover:text-white transition-all duration-300">
                                            <Mail size={32} />
                                        </div>
                                        <div className="flex-1">
                                            <div className="flex justify-between items-center">
                                                <h3 className="font-bold text-navy text-2xl mb-2">Email Us</h3>
                                                {copied === 'email' && <span className="text-sm text-green-500 font-bold bg-green-100 px-2 py-1 rounded">Copied!</span>}
                                                <Copy size={16} className="opacity-0 group-hover:opacity-50 transition-opacity" />
                                            </div>
                                            <p className="text-muted text-xl font-light leading-relaxed">hello@cyberarcmsp.com</p>
                                            <p className="text-muted text-sm mt-1">24/7 Support available</p>
                                        </div>
                                    </button>

                                    {/* Location */}
                                    <div
                                        className="flex items-start gap-8 group p-6 rounded-2xl hover:bg-white/60 transition-all duration-300 hover:scale-102 hover:shadow-lg animate-slide-in-right"
                                        style={{ animationDelay: '200ms' }}
                                    >
                                        <div className="p-5 bg-white rounded-2xl text-sunset shadow-lg shadow-sunset/10 group-hover:bg-sunset group-hover:text-white transition-all duration-300">
                                            <MapPin size={32} />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-navy text-2xl mb-2">Our HQ</h3>
                                            <p className="text-muted text-xl font-light leading-relaxed">Hyderabad, India</p>
                                            <p className="text-muted text-sm mt-1">Tech City, Hitech City Main Rd</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Map Embed - Enhanced */}
            <section className="w-full h-[600px] border-t-8 border-transparent relative group border-image-source bg-gradient-to-r from-primary to-electric" style={{ borderImage: 'linear-gradient(to right, #001BB7, #0046FF) 1' }}>
                {/* Overlay Tags */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none">
                    <div className="bg-white px-6 py-3 rounded-xl shadow-2xl shadow-black/30 animate-bounce flex items-center gap-3">
                        <div className="w-3 h-3 bg-green-500 rounded-full animate-ping" />
                        <span className="font-bold text-navy">CyberArcMSP HQ</span>
                    </div>
                </div>

                <div className="w-full h-full overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-[1.5s] ease-in-out">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d243647.3160407063!2d78.26795861937985!3d17.412153075677!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99daeaebd2c7%3A0xae93b78392bafbc2!2sHyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1709825484836!5m2!1sen!2sin"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen={true}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="CyberArcMSP Headquarters Location Map"
                        className="w-full h-full transform group-hover:scale-110 transition-transform duration-[2s]"
                    />
                </div>
            </section>
        </div>
    );
};

export default Contact;
