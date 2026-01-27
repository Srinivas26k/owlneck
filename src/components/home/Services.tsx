import { motion } from 'framer-motion';
import { Shield, Cloud, Cpu, Lock, ArrowRight } from 'lucide-react';

const services = [
    {
        icon: Shield,
        title: "Cybersecurity",
        description: "Enterprise-grade protection that never sleeps. Proactive threat hunting and zero-trust architecture."
    },
    {
        icon: Cloud,
        title: "Cloud Infrastructure",
        description: "Scalable, resilient cloud solutions designed for high-availability and disaster recovery."
    },
    {
        icon: Cpu,
        title: "IT Automation",
        description: "Streamline operations with intelligent automation sequences that reduce manual overhead by 40%."
    },
    {
        icon: Lock,
        title: "Compliance Management",
        description: "Automated compliance frameworks ensuring you meet SOC2, HIPAA, and ISO standards effortlessly."
    }
];

export const Services = () => {
    return (
        <section className="py-32 bg-white relative overflow-hidden">
            {/* Background Decorative */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cream/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

            <div className="container mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ delay: index * 0.1, duration: 0.6 }}
                            className="group relative p-8 h-full bg-white rounded-sm overflow-hidden transition-all duration-400 ease-out hover:-translate-y-3"
                        >
                            {/* Card Border on Hover */}
                            <div className="absolute inset-0 border-2 border-transparent group-hover:border-electric transition-colors duration-300 pointer-events-none z-10" />

                            {/* Card Shadow on Hover */}
                            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 shadow-[0_40px_80px_rgba(0,70,255,0.15)] z-0" />

                            {/* Background Gradient Shift */}
                            <div className="absolute inset-0 bg-white group-hover:bg-[linear-gradient(135deg,#F5F1DC_0%,#FFFFFF_100%)] transition-colors duration-400 z-0" />

                            <div className="relative z-20 flex flex-col h-full">
                                {/* Background Icon */}
                                <service.icon className="absolute -right-4 -top-4 w-32 h-32 text-muted/5 stroke-1 -rotate-12 transition-all duration-500 group-hover:rotate-0 group-hover:scale-110 group-hover:text-electric/5" />

                                {/* Main Icon */}
                                <div className="mb-6 relative">
                                    <service.icon className="w-16 h-16 text-navy stroke-1 transition-all duration-400 group-hover:text-electric group-hover:fill-electric/10 group-hover:rotate-6" />
                                </div>

                                <h3 className="text-2xl font-bold text-navy mb-4 group-hover:text-electric transition-colors duration-300">
                                    {service.title}
                                </h3>

                                {/* Underline Animation */}
                                <div className="w-16 h-1 bg-electric mb-6 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out" />

                                <p className="text-muted leading-relaxed mb-8 flex-grow group-hover:text-navy transition-colors duration-300">
                                    {service.description}
                                </p>

                                <div className="flex items-center text-electric font-bold opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 delay-100">
                                    <span className="mr-2">Learn More</span>
                                    <ArrowRight className="w-4 h-4" />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
