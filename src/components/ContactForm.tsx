import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

export default function ContactForm() {
    const [state, handleSubmit] = useForm("xqebogaq");

    if (state.succeeded) {
        return (
            <div className="bg-soft-azure/30 rounded-2xl p-12 text-center border border-primary/20">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="material-symbols-outlined text-4xl text-primary">check_circle</span>
                </div>
                <h3 className="font-display text-2xl text-navy-premium mb-4 uppercase">
                    Message Sent!
                </h3>
                <p className="text-text-muted font-light max-w-md mx-auto">
                    Thank you for reaching out. Our team will respond within 24 hours.
                </p>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name */}
            <div>
                <label
                    htmlFor="name"
                    className="block text-sm font-medium text-navy-premium mb-2"
                >
                    Full Name <span className="text-primary">*</span>
                </label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 bg-white border border-silver-divider rounded-lg text-navy-premium placeholder:text-text-muted/50 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                    placeholder="John Doe"
                />
                <ValidationError prefix="Name" field="name" errors={state.errors} className="text-red-500 text-sm mt-1" />
            </div>

            {/* Email */}
            <div>
                <label
                    htmlFor="email"
                    className="block text-sm font-medium text-navy-premium mb-2"
                >
                    Email Address <span className="text-primary">*</span>
                </label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 bg-white border border-silver-divider rounded-lg text-navy-premium placeholder:text-text-muted/50 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                    placeholder="john@company.com"
                />
                <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-500 text-sm mt-1" />
            </div>

            {/* Phone */}
            <div>
                <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-navy-premium mb-2"
                >
                    Phone Number
                </label>
                <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-3 bg-white border border-silver-divider rounded-lg text-navy-premium placeholder:text-text-muted/50 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                    placeholder="+1 (234) 567-890"
                />
            </div>

            {/* Service Interest */}
            <div>
                <label
                    htmlFor="service"
                    className="block text-sm font-medium text-navy-premium mb-2"
                >
                    Service of Interest
                </label>
                <select
                    id="service"
                    name="service"
                    className="w-full px-4 py-3 bg-white border border-silver-divider rounded-lg text-navy-premium focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                >
                    <option value="">Select a service</option>
                    <option value="cybersecurity">Cybersecurity Services</option>
                    <option value="cybersecurity">AIML Services</option>
                    <option value="aiml">Cloud & DevSecOps</option>
                    <option value="cloud">Audit & Compliance</option>
                    <option value="audit-compliance">Financial Reports</option>
                    <option value="saas">Corporate Training</option>
                    <option value="managed-services">AI Powered Toolkit</option>
                    <option value="consultation">SaaS Services</option>
                    <option value="consultation">Virtual C-Level Advisory & Managed Services</option>
                </select>
            </div>

            {/* Message */}
            <div>
                <label
                    htmlFor="message"
                    className="block text-sm font-medium text-navy-premium mb-2"
                >
                    Message <span className="text-primary">*</span>
                </label>
                <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-white border border-silver-divider rounded-lg text-navy-premium placeholder:text-text-muted/50 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 resize-none"
                    placeholder="Tell us about your security needs..."
                />
                <ValidationError prefix="Message" field="message" errors={state.errors} className="text-red-500 text-sm mt-1" />
            </div>

            {/* Submit Button */}
            <button
                type="submit"
                disabled={state.submitting}
                className="bg-primary hover:bg-primary/90 text-white text-[11px] font-bold uppercase tracking-widest px-12 py-5 rounded-full transition-all w-full md:w-auto shadow-lg shadow-primary/30 hover:shadow-xl hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0 flex items-center justify-center gap-3"
            >
                {state.submitting ? (
                    <>
                        <svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                    </>
                ) : (
                    'Send Message →'
                )}
            </button>

            {/* Error Message */}
            {state.errors && Object.keys(state.errors).length > 0 && (
                <p className="text-red-500 text-sm">
                    Please fix the errors above and try again.
                </p>
            )}
        </form>
    );
}
