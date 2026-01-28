import React, { useState } from "react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { FiArrowRight, FiCheck } from "react-icons/fi";

const SERVICES = [
    {
        id: 'aiml',
        slug: 'aiml-services',
        heading: 'AIML Services',
        description: 'Deploying bespoke machine learning models that analyze operational data to predict market shifts.',
        imgSrc: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1260',
    },
    {
        id: 'cloud',
        slug: 'cloud-computing',
        heading: 'Cloud Computing',
        description: 'Elastic, scalable serverless architectures designed for high-availability and global reach.',
        imgSrc: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1260',
    },
    {
        id: 'audit',
        slug: 'audit-compliance',
        heading: 'Audit & Compliance',
        description: 'Precision regulatory frameworks covering HIPAA, GDPR, and ISO standards.',
        imgSrc: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=1260',
    },
    {
        id: 'finance',
        slug: 'financial-reports',
        heading: 'Financial Reports',
        description: 'Real-time data visualization of IT spend versus ROI for transparent fiscal governance.',
        imgSrc: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1260',
    },
    {
        id: 'training',
        slug: 'corporate-training',
        heading: 'Corporate Training',
        description: 'Upskilling workforces with cybersecurity awareness and modern toolset proficiency.',
        imgSrc: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=1260',
    },
    {
        id: 'toolkit',
        slug: 'ai-powered-toolkit',
        heading: 'AI Powered Toolkit',
        description: 'Proprietary automation scripts that reduce manual overhead by up to 40%.',
        imgSrc: 'https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?auto=format&fit=crop&q=80&w=1260',
    },
    {
        id: 'staffing',
        slug: 'strategic-staffing',
        heading: 'Strategic Staffing',
        description: 'We don\'t just find employees; we headhunt the top 1% of technical talent.',
        imgSrc: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=1260',
    },
];

const ColorChangeCards = () => {
    const [selected, setSelected] = useState<string[]>([]);

    const toggleService = (id: string) => {
        setSelected(prev =>
            prev.includes(id) ? prev.filter(s => s !== id) : [...prev, id]
        );
    };

    return (
        <div className="p-4 py-12 md:p-8 relative">
            <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 md:gap-8">
                {SERVICES.map((service) => (
                    <Card
                        key={service.id}
                        {...service}
                        isSelected={selected.includes(service.id)}
                        onToggle={() => toggleService(service.id)}
                    />
                ))}
            </div>

            {/* Floating Action Bar */}
            <div className={`
        fixed bottom-8 left-1/2 -translate-x-1/2 z-50 w-full max-w-md px-6 transition-all duration-500
        ${selected.length > 0 ? 'translate-y-0 opacity-100' : 'translate-y-24 opacity-0 pointer-events-none'}
      `}>
                <div className="bg-navy-premium text-white p-4 rounded-full shadow-2xl border border-white/10 flex items-center justify-between backdrop-blur-xl">
                    <div className="pl-4">
                        <span className="font-bold text-primary">{selected.length}</span>
                        <span className="text-sm ml-2 text-slate-300">Services Selected</span>
                    </div>
                    <button className="bg-primary hover:bg-white hover:text-primary text-white px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all flex items-center gap-2">
                        Get Quote
                        <FiArrowRight className="w-4 h-4" />
                    </button>
                </div>
            </div>

        </div>
    );
};

// --- Card Component ---
interface CardProps {
    id: string;
    slug: string;
    heading: string;
    description: string;
    imgSrc: string;
    isSelected?: boolean;
    onToggle?: () => void;
}

const Card = ({ id, slug, heading, description, imgSrc, isSelected, onToggle }: CardProps) => {
    return (
        <motion.div
            transition={{ staggerChildren: 0.035 }}
            whileHover="hover"
            className={`group relative h-96 w-full overflow-hidden bg-slate-100 rounded-2xl transition-all duration-300 ${isSelected ? 'ring-4 ring-primary ring-offset-2' : ''}`}
        >
            <div
                className="absolute inset-0 saturate-0 transition-all duration-500 group-hover:scale-110 group-hover:saturate-100"
                style={{
                    backgroundImage: `url(${imgSrc})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            />
            {/* Overlay for text readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black/90 opacity-60 transition-opacity duration-500 group-hover:opacity-80"></div>

            <div className="relative z-20 flex h-full flex-col justify-between p-6 text-slate-300 transition-colors duration-500 group-hover:text-white">

                {/* Top Content: Heading & Description */}
                <div>
                    <h4 className="mb-4 font-display text-2xl font-bold uppercase tracking-tight text-white">
                        {heading.split("").map((letter, index) => (
                            <AnimatedLetter letter={letter} key={index} />
                        ))}
                    </h4>
                    <p className="text-sm font-light leading-relaxed text-slate-200 line-clamp-3 mb-6">{description}</p>
                </div>

                {/* Bottom Actions: Two Explicit Buttons */}
                <div className="flex gap-3 mt-auto">
                    {/* Button 1: Get Quote (Toggle Selection) */}
                    <button
                        onClick={(e) => {
                            e.stopPropagation();
                            onToggle?.();
                        }}
                        className={`
                            flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-lg text-xs font-bold uppercase tracking-wider transition-all duration-300 border
                            ${isSelected
                                ? 'bg-primary border-primary text-white shadow-lg shadow-primary/30'
                                : 'bg-white/10 border-white/20 text-white hover:bg-white hover:text-navy-premium'
                            }
                        `}
                    >
                        {isSelected ? (
                            <>
                                <FiCheck className="text-lg" />
                                Selected
                            </>
                        ) : (
                            <>
                                Get Quote
                            </>
                        )}
                    </button>

                    {/* Button 2: View Details (Navigation) */}
                    <a
                        href={`/services/${slug}`}
                        className="flex-1 flex items-center justify-center gap-2 bg-white/10 hover:bg-primary hover:border-primary hover:text-white border border-white/20 backdrop-blur-md py-3 px-4 rounded-lg text-xs font-bold uppercase tracking-wider text-white transition-all duration-300"
                    >
                        Details
                        <FiArrowRight className="text-lg" />
                    </a>
                </div>
            </div>
        </motion.div>
    );
};

// --- AnimatedLetter Helper Component ---
interface AnimatedLetterProps {
    letter: string;
}

const letterVariants: Variants = {
    hover: {
        y: "-50%",
    },
};

const AnimatedLetter = ({ letter }: AnimatedLetterProps) => {
    return (
        <div className="inline-block h-[1em] overflow-hidden font-bold">
            <motion.span
                className="flex min-w-[4px] flex-col"
                style={{ y: "0%" }}
                variants={letterVariants}
                transition={{ duration: 0.5 }}
            >
                <span className="inline-block">{letter === " " ? "\u00A0" : letter}</span>
                <span className="inline-block text-primary">{letter === " " ? "\u00A0" : letter}</span>
            </motion.span>
        </div>
    );
};

export default ColorChangeCards;
