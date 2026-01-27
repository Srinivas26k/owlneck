import CountUp from 'react-countup';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const metrics = [
    { value: 99, suffix: '%', label: 'Customer Retention' },
    { value: 50, suffix: '+', label: 'Enterprise Clients' },
    { value: 1000, suffix: 'TB+', label: 'Data Secured Daily' },
];

export const TrustMetrics = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section ref={ref} className="py-24 bg-cream relative overflow-hidden">
            {/* Grain Overlay specific to section if needed, though global covers it */}
            <div className="absolute inset-0 bg-gradient-mesh opacity-[0.03] animate-pulse-glow" />

            <div className="container mx-auto px-6 md:px-12 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-center gap-12 text-center">
                    {metrics.map((metric, index) => (
                        <div key={index} className="flex-1 w-full relative group">
                            <motion.div
                                initial={{ opacity: 0, filter: 'blur(10px)', y: 20 }}
                                animate={isInView ? { opacity: 1, filter: 'blur(0)', y: 0 } : {}}
                                transition={{ duration: 0.8, delay: index * 0.2 }}
                                className="relative z-10"
                            >
                                <div className="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-br from-primary to-electric mb-2">
                                    {isInView ? (
                                        <CountUp
                                            end={metric.value}
                                            duration={3}
                                            suffix={metric.suffix}
                                            useEasing={true}
                                        />
                                    ) : (
                                        <span>0{metric.suffix}</span>
                                    )}
                                </div>
                                <div className="text-sm md:text-base font-bold uppercase tracking-[0.2em] text-navy">
                                    {metric.label}
                                </div>
                            </motion.div>

                            {/* Vertical Divider (Desktop only, not for last item) */}
                            {index !== metrics.length - 1 && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={isInView ? { height: '60px', opacity: 1 } : {}}
                                    transition={{ duration: 1, delay: 1 + index * 0.2 }}
                                    className="absolute right-0 top-1/2 -translate-y-1/2 w-px bg-electric/20 hidden md:block shadow-[0_0_20px_rgba(0,70,255,0.2)]"
                                />
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
