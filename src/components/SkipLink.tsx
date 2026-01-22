import React from 'react';

const SkipLink: React.FC = () => {
    return (
        <a
            href="#main-content"
            className="fixed top-4 left-4 z-[100] -translate-y-[150%] focus:translate-y-0 bg-electric text-white px-6 py-3 rounded-md font-bold shadow-lg transition-transform duration-300 focus:outline-none focus:ring-4 focus:ring-white/50"
        >
            Skip to Main Content
        </a>
    );
};

export default SkipLink;
