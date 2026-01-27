import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';

export const Hero = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 500], [0, 200]);
    const y2 = useTransform(scrollY, [0, 500], [0, -150]);

    const handleMouseMove = (e: React.MouseEvent) => {
        const { clientX, clientY } = e;
        const { innerWidth, innerHeight } = window;
        const x = (clientX / innerWidth - 0.5) * 20; // -10 to 10
        const y = (clientY / innerHeight - 0.5) * 20; // -10 to 10
        setMousePosition({ x, y });
    };

    const headlineWords = [
        { text: "Empowering", type: "normal" },
        { text: "Businesses", type: "normal" },
        { text: "with", type: "normal" },
        { text: "SECURE", type: "electric" },
        { text: "and", type: "normal" },
        { text: "SCALABLE", type: "sunset" },
        { text: "IT", type: "normal" },
        { text: "Services", type: "normal" },
    ];

    return (
        <section
            className="relative min-h-screen w-full flex items-center overflow-hidden bg-white"
            onMouseMove={handleMouseMove}
        >
            {/* Background Mesh */}
            <div className="absolute inset-0 bg-gradient-mesh opacity-[0.08] blur-3xl animate-pulse-glow" />
            <div className="absolute inset-0 bg-[linear-gradient(rgba(10,22,40,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(10,22,40,0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />

            <div className="container mx-auto px-6 md:px-12 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center h-full pt-20">

                {/* Left Content */}
                <motion.div
                    className="space-y-8"
                    style={{ y: y1 }}
                >
                    <h1 className="flex flex-wrap gap-x-4 gap-y-2 max-w-3xl">
                        {headlineWords.map((word, i) => (
                            <motion.span
                                key={i}
                                initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
                                animate={{ opacity: 1, y: 0, filter: 'blur(0)' }}
                                transition={{ duration: 0.8, delay: i * 0.1, ease: [0.2, 0.65, 0.3, 0.9] }}
                                className={
                                    word.type === 'electric' ? 'text-electric font-black' :
                                        word.type === 'sunset' ? 'text-sunset font-black' :
                                            'text-navy'
                                }
                            >
                                {word.text}
                            </motion.span>
                        ))}
                    </h1>

                    <motion.p
                        initial={{ opacity: 0, filter: 'blur(10px)' }}
                        animate={{ opacity: 1, filter: 'blur(0)' }}
                        transition={{ duration: 1, delay: 0.8 }}
                        className="text-lg md:text-xl text-muted max-w-xl"
                    >
                        We define the standard for enterprise reliability. Surgical precision, unbreakable security, and intelligent scalability for the modern command center.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 1 }}
                        className="flex flex-wrap gap-4"
                    >
                        <button className="group relative px-8 py-4 bg-gradient-to-r from-primary to-electric text-white font-bold rounded-sm shadow-lg hover:shadow-glow-electric transition-all duration-300 hover:scale-102 overflow-hidden cursor-hover">
                            <span className="relative z-10 flex items-center gap-2">
                                Get Started
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </span>
                            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                        </button>

                        <button className="group px-8 py-4 border-2 border-primary/20 text-primary font-bold rounded-sm hover:border-primary transition-all duration-300 relative overflow-hidden cursor-hover">
                            <span className="relative z-10 group-hover:text-white transition-colors duration-300">View Services</span>
                            <div className="absolute inset-0 bg-primary translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300 ease-out" />
                        </button>
                    </motion.div>
                </motion.div>

                {/* Right Visual - 3D Sphere */}
                <motion.div
                    className="relative h-[500px] w-full flex items-center justify-center perspective-1000 hidden lg:flex"
                    style={{
                        y: y2,
                        rotateX: mousePosition.y,
                        rotateY: mousePosition.x,
                    }}
                >
                    <div className="relative w-80 h-80 preserve-3d animate-float">
                        {/* Core Sphere */}
                        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-electric via-primary to-sunset opacity-20 blur-md animate-pulse-glow" />

                        {/* Orbiting Rings */}
                        {[...Array(5)].map((_, i) => (
                            <div
                                key={i}
                                className="absolute inset-[-40px] border border-electric/30 rounded-full"
                                style={{
                                    transform: `rotateX(${i * 36}deg) rotateY(${i * 24}deg)`,
                                    animation: `spin ${10 + i * 5}s linear infinite reverse`
                                }}
                            />
                        ))}

                        {/* Floating Particles */}
                        {[...Array(12)].map((_, i) => (
                            <div
                                key={`p-${i}`}
                                className="absolute w-2 h-2 bg-electric rounded-full shadow-[0_0_10px_currentColor]"
                                style={{
                                    top: '50%',
                                    left: '50%',
                                    transform: `rotate(${i * 30}deg) translateX(${140 + (i % 3) * 20}px) translateY(${Math.sin(i) * 20}px)`,
                                    animation: `orbit ${6 + (i % 4)}s linear infinite`
                                }}
                            />
                        ))}

                        {/* Central Badge or Core */}
                        <div className="absolute inset-10 bg-white/10 backdrop-blur-md rounded-full border border-white/20 shadow-inner flex items-center justify-center">
                            <div className="w-4 h-4 bg-white rounded-full shadow-[0_0_20px_white] animate-pulse" />
                        </div>
                    </div>
                </motion.div>

            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, y: [0, 10, 0] }}
                transition={{ delay: 2, duration: 2, repeat: Infinity }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted flex flex-col items-center gap-2"
            >
                <span className="text-xs tracking-[0.2em] uppercase">Scroll</span>
                <ChevronDown className="w-5 h-5" />
            </motion.div>

            <style jsx>{`
        @keyframes spin {
          from { transform: rotateX(var(--rx, 0deg)) rotateY(0deg); }
          to { transform: rotateX(var(--rx, 0deg)) rotateY(360deg); }
        }
        @keyframes orbit {
          from { transform: rotate(var(--r, 0deg)) translateX(140px) rotate(-var(--r, 0deg)); }
          to { transform: rotate(calc(var(--r, 0deg) + 360deg)) translateX(140px) rotate(calc(-var(--r, 0deg) - 360deg)); }
        }
      `}</style>
        </section>
    );
};
