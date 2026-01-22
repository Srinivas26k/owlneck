import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
    title: string;
    description: string;
    canonical?: string;
    type?: string;
    image?: string;
}

const SEO: React.FC<SEOProps> = ({
    title,
    description,
    canonical,
    type = 'website',
    image = 'https://owlneck.com/og-image.jpg' // Placeholder default
}) => {
    const siteTitle = 'OWLNECK | Intelligent IT Managed Services';

    return (
        <Helmet>
            <title>{title} | OWLNECK</title>
            <meta name="description" content={description} />
            <link rel="canonical" href={canonical || window.location.href} />

            {/* Open Graph */}
            <meta property="og:type" content={type} />
            <meta property="og:title" content={title} />
            <meta propriedade="og:description" content={description} />
            <meta property="og:image" content={image} />
            <meta property="og:url" content={window.location.href} />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={image} />
        </Helmet>
    );
};

export default SEO;
