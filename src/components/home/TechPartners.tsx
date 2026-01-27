import { motion } from 'framer-motion';

const partners = [
    "Microsoft Azure", "AWS", "Google Cloud", "Cisco", "Palo Alto Networks",
    "CrowdStrike", "Splunk", "SentinelOne", "Fortinet", "Zscaler"
];

export const TechPartners = () => {
    return (
        <section className="py-16 bg-white border-y border-gray-100 overflow-hidden relative">
            <div className="absolute inset-y-0 left-0 w-32 md:w-64 bg-gradient-to-r from-white to-transparent z-10" />
            <div className="absolute inset-y-0 right-0 w-32 md:w-64 bg-gradient-to-l from-white to-transparent z-10" />

            {/* Scan Line */}
            <div className="absolute inset-y-0 w-px bg-electric/30 animate-draw-line z-20 left-0"
                style={{ animation: 'marquee 8s linear infinite', width: '2px', opacity: 0.5, boxShadow: '0 0 10px #0046FF' }}
            />

            <div className="flex whitespace-nowrap overflow-hidden group">
                <motion.div
                    className="flex gap-16 md:gap-32 items-center animate-marquee group-hover:[animation-play-state:paused]"
                >
                    {/* Double the list for seamless loop */}
                    {[...partners, ...partners].map((partner, index) => (
                        <span
                            key={index}
                            className="text-3xl md:text-5xl font-bold uppercase text-gray-300 transition-all duration-300 hover:text-electric hover:scale-110 hover:drop-shadow-[0_0_10px_rgba(0,70,255,0.5)] cursor-default select-none relative"
                        >
                            {partner}
                        </span>
                    ))}
                </motion.div>
                {/* Second copy for no-gap loop if CSS animation isn't enough (using keyframe marquee instead of framer motion x value for simplicity with Tailwind) */}
                <motion.div
                    className="flex gap-16 md:gap-32 items-center animate-marquee group-hover:[animation-play-state:paused]"
                    aria-hidden="true"
                >
                    {[...partners, ...partners].map((partner, index) => (
                        <span
                            key={`copy-${index}`}
                            className="text-3xl md:text-5xl font-bold uppercase text-gray-300 transition-all duration-300 hover:text-electric hover:scale-110 hover:drop-shadow-[0_0_10px_rgba(0,70,255,0.5)] cursor-default select-none relative"
                        >
                            {partner}
                        </span>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};
