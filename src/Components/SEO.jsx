import React from 'react';
import { Helmet } from 'react-helmet';

const SEO = ({
  title = 'LoginXol | Digital Services & Technology Solutions',
  description = 'LoginXol delivers responsive websites, software development, IT consulting, graphic design, digital marketing, and networking services optimized for performance and growth.',
  canonical = 'https://loginxol.com',
  image = 'https://loginxol.com/social-share.png',
  keywords = 'LoginXol, web design, software development, IT consulting, digital marketing, networking solutions, responsive design, SEO',
  robots = 'index, follow',
}) => {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'LoginXol',
    url: canonical,
    logo: `${canonical}/logo icon.png`,
    sameAs: [],
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: '+1-800-000-0000',
        contactType: 'Customer service',
      },
    ],
  };

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content={robots} />
      <link rel="canonical" href={canonical} />

      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={image} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      <meta name="theme-color" content="#111827" />
      <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
    </Helmet>
  );
};

export default SEO;
