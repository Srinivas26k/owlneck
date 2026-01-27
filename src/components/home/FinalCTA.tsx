import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export const FinalCTA = () => {
    return (
        <section className="relative py-32 overflow-hidden flex items-center justify-center">
            {/* Animated Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary via-electric to-electric bg-[length:200%_200%] animate-[gradient_15s_ease_infinite]" />

            {/* 3D Floating Blobs */}
            <motion.div
                animate={{ y: [0, -40, 0], rotate: [0, 10, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-10 left-10 w-64 h-64 bg-white/10 rounded-full blur-3xl"
            />
            <motion.div
                animate={{ y: [0, 60, 0], rotate: [0, -15, 0] }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-20 right-20 w-96 h-96 bg-sunset/20 rounded-full blur-3xl mix-blend-overlay"
            />

            <div className="container mx-auto px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl mx-auto space-y-8"
                >
                    <h2 className="text-5xl md:text-7xl font-black text-white tracking-tight leading-none">
                        Ready to Transform Your <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/70">IT Infrastructure?</span>
                    </h2>

                    <p className="text-xl md:text-2xl text-blue-100 font-light max-w-2xl mx-auto">
                        Join 5,000+ enterprises who trust CyberArcMSP for security, speed, and scale.
                    </p>

                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="group relative inline-flex items-center gap-3 px-12 py-6 bg-white text-primary text-xl font-bold rounded-sm shadow-[0_20px_50px_rgba(0,0,0,0.3)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.4)] transition-all duration-300 overflow-hidden"
                    >
                        <span className="relative z-10">Start Your Journey</span>
                        <ArrowRight className="w-6 h-6 relative z-10 group-hover:translate-x-1 transition-transform" />

                        {/* Hover Fill Effect */}
                        <div className="absolute inset-0 bg-sunset translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                        <span className="absolute inset-0 flex items-center justify-center gap-3 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 font-bold text-xl pointer-events-none">
                            Start Your Journey <ArrowRight className="w-6 h-6" />
                        </span>
                    </motion.button>
                </motion.div>
            </div>

            <style jsx>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
        </section>
    );
};
