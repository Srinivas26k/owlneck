import { motion, useScroll, useSpring } from 'framer-motion';

export const ScrollProgress = () => {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <motion.div
            className="fixed top-0 left-0 right-0 h-1 origin-left z-[10001] bg-gradient-to-r from-primary via-electric to-sunset shadow-[0_0_10px_currentColor]"
            style={{ scaleX }}
        />
    );
};
