import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { cn } from '../../lib/utils';

export const CustomCursor = () => {
    const [isHovering, setIsHovering] = useState(false);
    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    const springConfig = { damping: 25, stiffness: 400 };
    const cursorXSpring = useSpring(cursorX, springConfig);
    const cursorYSpring = useSpring(cursorY, springConfig);

    useEffect(() => {
        const moveCursor = (e: MouseEvent) => {
            cursorX.set(e.clientX);
            cursorY.set(e.clientY);
        };

        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (
                target.tagName === 'BUTTON' ||
                target.tagName === 'A' ||
                target.closest('button') ||
                target.closest('a') ||
                target.classList.contains('cursor-hover')
            ) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        window.addEventListener('mousemove', moveCursor);
        window.addEventListener('mouseover', handleMouseOver);

        return () => {
            window.removeEventListener('mousemove', moveCursor);
            window.removeEventListener('mouseover', handleMouseOver);
        };
    }, [cursorX, cursorY]);

    return (
        <>
            {/* Main Dot - Follows instantly */}
            <motion.div
                className="fixed top-0 left-0 w-1.5 h-1.5 bg-electric rounded-full pointer-events-none z-[10000] mix-blend-difference"
                style={{
                    x: cursorX,
                    y: cursorY,
                    translateX: '-50%',
                    translateY: '-50%',
                }}
            />

            {/* Ring - Follows with spring delay */}
            <motion.div
                className={cn(
                    "fixed top-0 left-0 border border-electric rounded-full pointer-events-none z-[9999] transition-all duration-300 ease-out",
                    isHovering ? "w-16 h-16 border-dashed" : "w-8 h-8 border-solid opacity-50"
                )}
                style={{
                    x: cursorXSpring,
                    y: cursorYSpring,
                    translateX: '-50%',
                    translateY: '-50%',
                }}
                animate={{
                    rotate: isHovering ? 360 : 0
                }}
                transition={{
                    rotate: {
                        duration: 8,
                        ease: "linear",
                        repeat: Infinity,
                        repeatType: "loop"
                    }
                }}
            />
        </>
    );
};
