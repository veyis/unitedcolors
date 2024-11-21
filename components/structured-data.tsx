
// Define types for different structured data objects
type BaseBusinessJsonLd = {
  "@context": string;
  "@type": string;
  name?: string;
  description?: string;
  url?: string;
  logo?: string;
  contactPoint?: {
    "@type": string;
    telephone?: string;
    contactType?: string;
  };
};

type BlogPostJsonLd = {
  "@context": string;
  "@type": string;
  headline: string;
  description: string;
  author: {
    "@type": string;
    name: string;
  };
  datePublished: string;
  image: string;
  url: string;
};

type BlogPost = {
  title: string;
  description: string;
  author: string;
  publishDate: string;
  imageUrl: string;
  url: string;
} | null;

// Props interface
interface StructuredDataProps {
  page?: string;
  blogPost?: BlogPost;
}

export function StructuredData({ 
  blogPost = null 
}: StructuredDataProps) {
  // Base business JSON-LD
  const baseJsonLd: BaseBusinessJsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "United Color Painters",
    description: "Professional painting services for residential and commercial properties",
    url: "https://www.unitedcolorpainters.com",
    logo: "https://www.unitedcolorpainters.com/logo.png",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+1-555-PAINT",
      contactType: "Customer Service"
    }
  };

  // Blog post JSON-LD
  const blogJsonLd: BlogPostJsonLd | null = blogPost ? {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: blogPost.title,
    description: blogPost.description,
    author: {
      "@type": "Person",
      name: blogPost.author
    },
    datePublished: blogPost.publishDate,
    image: blogPost.imageUrl,
    url: blogPost.url
  } : null;

  // Render script tags with structured data
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(baseJsonLd)
        }}
      />
      {blogJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(blogJsonLd)
          }}
        />
      )}
    </>
  );
}