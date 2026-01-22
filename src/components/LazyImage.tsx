import React, { useState } from 'react';

interface LazyImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
    src: string;
    alt: string;
    className?: string;
}

const LazyImage: React.FC<LazyImageProps> = ({ src, alt, className, ...props }) => {
    const [isLoaded, setIsLoaded] = useState(false);

    return (
        <div className={`relative overflow-hidden ${className || ''}`}>
            {/* Placeholder / Blur Effect */}
            <div
                className={`absolute inset-0 bg-gray-200 animate-pulse transition-opacity duration-700 ${isLoaded ? 'opacity-0' : 'opacity-100'
                    }`}
                aria-hidden="true"
            />

            <img
                src={src}
                alt={alt}
                loading="lazy"
                decoding="async"
                onLoad={() => setIsLoaded(true)}
                className={`transition-opacity duration-700 w-full h-full object-cover ${isLoaded ? 'opacity-100' : 'opacity-0'
                    } ${className || ''}`}
                {...props}
            />
        </div>
    );
};

export default LazyImage;
