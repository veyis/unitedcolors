import Script from 'next/script';

export function StructuredData({
  page = 'home',
  blogPost = null,
}: {
  page?: string;
  blogPost?: any;
}) {
  const baseJsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "United Color Painters",
    "image": "https://www.unitedcolorpainters.com/logo.jpg",
    "@id": "https://www.unitedcolorpainters.com",
    "url": "https://www.unitedcolorpainters.com",
    "telephone": "+1-123-456-7890",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "123 Paint Street",
      "addressLocality": "Philadelphia",
      "addressRegion": "PA",
      "postalCode": "19019",
      "addressCountry": "US",
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 39.9526,
      "longitude": -75.1652,
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
        ],
        "opens": "08:00",
        "closes": "18:00",
      },
    ],
    "sameAs": [
      "https://www.facebook.com/unitedcolorpainters",
      "https://www.instagram.com/unitedcolorpainters",
      "https://www.linkedin.com/company/unitedcolorpainters",
    ],
  };

  const serviceSchema = {
    "@type": "Service",
    "serviceType": "Painting Service",
    "provider": {
      "@type": "LocalBusiness",
      "name": "United Color Painters",
    },
    "areaServed": [
      { "@type": "State", "name": "Pennsylvania" },
      { "@type": "State", "name": "New Jersey" },
      { "@type": "State", "name": "New York" },
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Painting Services",
      "itemListElement": [
        {
          "@type": "OfferCatalog",
          "name": "Residential Painting",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": { "@type": "Service", "name": "Interior Painting" },
            },
            {
              "@type": "Offer",
              "itemOffered": { "@type": "Service", "name": "Exterior Painting" },
            },
          ],
        },
        {
          "@type": "OfferCatalog",
          "name": "Commercial Painting",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": { "@type": "Service", "name": "Office Painting" },
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Retail Space Painting",
              },
            },
          ],
        },
        {
          "@type": "OfferCatalog",
          "name": "Specialty Finishes",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": { "@type": "Service", "name": "Faux Painting" },
            },
            {
              "@type": "Offer",
              "itemOffered": { "@type": "Service", "name": "Textured Walls" },
            },
          ],
        },
      ],
    },
  };

  const pageSpecificSchema: { [key: string]: object } = {
    home: { ...baseJsonLd, ...serviceSchema },
    residential: {
      "@context": "https://schema.org",
      "@type": "Service",
      "serviceType": "Residential Painting",
      "provider": baseJsonLd,
      "areaServed": [
        { "@type": "State", "name": "Pennsylvania" },
        { "@type": "State", "name": "New Jersey" },
        { "@type": "State", "name": "New York" },
      ],
      "description":
        "Expert residential painting services for homes in PA, NJ, and NY. Interior and exterior painting, color consultation, and more.",
    },
    commercial: {
      "@context": "https://schema.org",
      "@type": "Service",
      "serviceType": "Commercial Painting",
      "provider": baseJsonLd,
      "areaServed": [
        { "@type": "State", "name": "Pennsylvania" },
        { "@type": "State", "name": "New Jersey" },
        { "@type": "State", "name": "New York" },
      ],
      "description":
        "Professional commercial painting services for businesses in PA, NJ, and NY. High-quality finishes, minimal disruption, and expert color consulting.",
    },
    exterior: {
      "@context": "https://schema.org",
      "@type": "Service",
      "serviceType": "Exterior Painting",
      "provider": baseJsonLd,
      "areaServed": [
        { "@type": "State", "name": "Pennsylvania" },
        { "@type": "State", "name": "New Jersey" },
        { "@type": "State", "name": "New York" },
      ],
      "description":
        "Transform your home's exterior with our professional exterior painting services. Serving PA, NJ, and NY with high-quality finishes.",
    },
    blogPost: blogPost
      ? {
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "headline": blogPost.title,
          "description": blogPost.description,
          "datePublished": blogPost.datePublished,
          "author": {
            "@type": "Person",
            "name": blogPost.author,
          },
          "publisher": {
            "@type": "Organization",
            "name": "United Color Painters",
          },
        }
      : {},
  };

  const structuredData = pageSpecificSchema[page] || baseJsonLd;

  return (
    <Script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData),
      }}
    />
  );
}