import { Card, CardHeader, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

export function Services() {
  const services = [
    // Painting Services
    {
      title: "Interior Painting",
      href: "/services/interior-painting",
      description: "Transform your indoor spaces with expert interior painting services. Our professional painters deliver flawless finishes for homes and offices in New Jersey, New York, and Pennsylvania. Get a free quote today!",
      image: "/images/interior-painting1.png",
      alt: "Professional Interior Painting Services in New Jersey, New York, and Pennsylvania"
    },
    {
      title: "Exterior Painting",
      href: "/services/exterior-painting",
      description: "Enhance your property's curb appeal with durable exterior painting solutions. We use high-quality paints to protect and beautify your home or business in New Jersey, New York, and Pennsylvania.",
      image: "/images/exterior-painting1.png",
      alt: "Exterior Painting Services in New Jersey, New York, and Pennsylvania"
    },
    {
      title: "Commercial Painting",
      href: "/services/commercial-painting",
      description: "Professional commercial painting services for offices, retail spaces, and industrial facilities in New Jersey, New York, and Pennsylvania. Trust us for efficient, high-quality results.",
      image: "/images/commercial-painting1.jpg",
      alt: "Commercial Painting Services in New Jersey, New York, and Pennsylvania"
    },
    {
      title: "Residential Painting",
      href: "/services/residential-painting",
      description: "Personalized residential painting solutions for homes of all sizes and styles in New Jersey, New York, and Pennsylvania. We deliver exceptional quality and customer satisfaction.",
      image: "/images/d1.png",
      alt: "Residential Painting Services in New Jersey, New York, and Pennsylvania"
    },
    {
      title: "Specialty Finishes",
      href: "/services/specialty-finishes",
      description: "Add character to your walls with unique textures and specialty finishes. Our experts in New Jersey, New York, and Pennsylvania create stunning, custom designs for any space.",
      image: "/images/d2.png",
      alt: "Specialty Finishes in New Jersey, New York, and Pennsylvania"
    },
  
    // Flooring Services
    {
      title: "Hardwood Installation",
      href: "/services/hardwood-installation",
      description: "Install beautiful and durable hardwood flooring with our expert team in New Jersey, New York, and Pennsylvania. Perfect for homes and offices. Request a free consultation!",
      image: "/images/hardwood.jpg",
      alt: "Hardwood Flooring Installation in New Jersey, New York, and Pennsylvania"
    },
    {
      title: "Luxury Vinyl Plank Installation",
      href: "/services/luxury-vinyl-plank-installation",
      description: "Upgrade your space with modern and resilient luxury vinyl plank flooring. Our professionals in New Jersey, New York, and Pennsylvania ensure a flawless installation.",
      image: "/images/luxury-vinyl.jpg",
      alt: "Luxury Vinyl Plank Installation in New Jersey, New York, and Pennsylvania"
    },
    {
      title: "Home Edition Flooring Tile Installation",
      href: "/services/home-edition-flooring-tile-installation",
      description: "Elegant and durable tile flooring installed to perfection in New Jersey, New York, and Pennsylvania. Transform your home with our expert tile installation services.",
      image: "/images/tile-installation.jpg",
      alt: "Tile Flooring Installation in New Jersey, New York, and Pennsylvania"
    },
  
    // Exterior Services
    {
      title: "Roofing",
      href: "/services/roofing",
      description: "Protect and enhance your property with expert roofing services in New Jersey, New York, and Pennsylvania. We offer durable and stylish roofing solutions for homes and businesses.",
      image: "/images/roofing.jpg",
      alt: "Roofing Services in New Jersey, New York, and Pennsylvania"
    },
    {
      title: "Siding",
      href: "/services/siding",
      description: "Upgrade your property's exterior with durable and stylish siding solutions in New Jersey, New York, and Pennsylvania. Improve aesthetics and protection with our expert team.",
      image: "/images/siding.jpg",
      alt: "Siding Installation in New Jersey, New York, and Pennsylvania"
    },
    {
      title: "Deck Staining",
      href: "/services/deck-staining",
      description: "Protect and beautify your deck with professional staining services in New Jersey, New York, and Pennsylvania. We use high-quality stains for long-lasting results.",
      image: "/images/deck1.jpg",
      alt: "Deck Staining Services in New Jersey, New York, and Pennsylvania"
    },
    {
      title: "Power Washing",
      href: "/services/power-washing",
      description: "Remove dirt, grime, and mildew with our professional power washing services in New Jersey, New York, and Pennsylvania. Restore the beauty of your property today!",
      image: "/images/powerwash.jpg",
      alt: "Power Washing Services in New Jersey, New York, and Pennsylvania"
    },
  
    // Home Improvement Services
    {
      title: "Cabinet Refinishing",
      href: "/services/cabinet-refinishing",
      description: "Revitalize your kitchen or bathroom with expert cabinet refinishing services in New Jersey, New York, and Pennsylvania. Affordable and transformative solutions for your home.",
      image: "/images/kitchen1.jpg",
      alt: "Cabinet Refinishing Services in New Jersey, New York, and Pennsylvania"
    },
    {
      title: "Home Extension",
      href: "/services/home-extension",
      description: "Expand your living space with professional home extension services in New Jersey, New York, and Pennsylvania. We design and build to meet your needs and budget.",
      image: "/images/home-extension.jpg",
      alt: "Home Extension Services in New Jersey, New York, and Pennsylvania"
    }
  ];

  return (
    <section className="relative py-24 bg-gray-100 overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 leading-tight bg-gradient-to-r from-black to-red-600 text-transparent bg-clip-text">
          Our Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Card key={service.title} className="bg-white shadow-md hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="relative h-48 w-full">
                  <Image
                    src={service.image}
                    alt={service.title}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-t-lg"
                  />
                </div>
                <h2 className="text-3xl font-bold bg-gradient-to-r from-black to-red-800 text-transparent bg-clip-text mt-4">
                  {service.title}
                </h2>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{service.description}</p>
              </CardContent>
              <CardFooter>
                <Button variant="link" className="text-red-600 hover:text-red-800 transition-colors duration-300">
                  <a href={service.href}>Learn More →</a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}