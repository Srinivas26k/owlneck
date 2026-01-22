import React, { useEffect, useState } from 'react';

const ScrollProgress: React.FC = () => {
    const [scrollWidth, setScrollWidth] = useState(0);

    const handleScroll = () => {
        const totalScroll = document.documentElement.scrollTop;
        const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scroll = `${totalScroll / windowHeight}`;
        setScrollWidth(Number(scroll));
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="fixed top-0 left-0 w-full h-1 z-[100] bg-transparent pointer-events-none">
            <div
                className="h-full bg-gradient-to-r from-primary via-electric to-sunset transition-all duration-100 ease-out shadow-[0_0_10px_#0046FF]"
                style={{ width: `${scrollWidth * 100}%` }}
            />
        </div>
    );
};

export default ScrollProgress;
