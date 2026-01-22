import React, { useEffect, useState } from 'react';

const CustomCursor: React.FC = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [trailingPosition, setTrailingPosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const updateMousePosition = (e: MouseEvent) => {
            setPosition({ x: e.clientX, y: e.clientY });
            setIsVisible(true);
        };

        const handleMouseEnter = () => setIsVisible(true);
        const handleMouseLeave = () => setIsVisible(false);

        window.addEventListener('mousemove', updateMousePosition);
        document.addEventListener('mouseenter', handleMouseEnter);
        document.addEventListener('mouseleave', handleMouseLeave);

        // Check for hoverable elements
        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (target.tagName === 'A' || target.tagName === 'BUTTON' || target.closest('a') || target.closest('button')) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        document.addEventListener('mouseover', handleMouseOver);

        return () => {
            window.removeEventListener('mousemove', updateMousePosition);
            document.removeEventListener('mouseenter', handleMouseEnter);
            document.removeEventListener('mouseleave', handleMouseLeave);
            document.removeEventListener('mouseover', handleMouseOver);
        };
    }, []);

    useEffect(() => {
        let animationFrameId: number;

        const moveTrailingCursor = () => {
            setTrailingPosition(prev => {
                const dx = position.x - prev.x;
                const dy = position.y - prev.y;
                return {
                    x: prev.x + dx * 0.15,
                    y: prev.y + dy * 0.15
                };
            });
            animationFrameId = requestAnimationFrame(moveTrailingCursor);
        };

        moveTrailingCursor();
        return () => cancelAnimationFrame(animationFrameId);
    }, [position]);

    if (typeof window === 'undefined') return null;

    return (
        <>
            <div
                className={`fixed top-0 left-0 w-8 h-8 rounded-full border border-electric pointer-events-none z-50 transition-transform duration-100 ease-out mix-blend-difference hidden md:block ${isHovering ? 'scale-150 bg-electric/20' : 'scale-100'
                    } ${!isVisible ? 'opacity-0' : 'opacity-100'}`}
                style={{
                    transform: `translate(${trailingPosition.x - 16}px, ${trailingPosition.y - 16}px) ${isHovering ? 'scale(1.5)' : 'scale(1)'}`
                }}
            />
            <div
                className={`fixed top-0 left-0 w-1.5 h-1.5 bg-electric rounded-full pointer-events-none z-50 mix-blend-difference hidden md:block ${!isVisible ? 'opacity-0' : 'opacity-100'
                    }`}
                style={{
                    transform: `translate(${position.x - 3}px, ${position.y - 3}px)`
                }}
            />
        </>
    );
};

export default CustomCursor;
