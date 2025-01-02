import { Card, CardHeader, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

export function Services() {
  const services = [
    {
      title: "Interior Painting",
      href: "/services/interior-painting",
      description: "Transform your indoor spaces with our expert interior painting services.",
      image: "/images/interior-painting1.png"
    },
    {
      title: "Exterior Painting",
      href: "/services/exterior-painting",
      description: "Enhance your property's curb appeal with our durable exterior painting solutions.",
      image: "/images/exterior-painting1.png"
    },
    {
      title: "Commercial Painting",
      href: "/services/commercial-painting",
      description: "Professional painting services for offices, retail spaces, and industrial facilities.",
      image: "/images/commercial-painting1.jpg"
    },
    {
      title: "Residential Painting",
      href: "/services/residential-painting",
      description: "Personalized painting solutions for homes of all sizes and styles.",
      image: "/images/d1.png"
    },
    {
      title: "Specialty Finishes",
      href: "/services/specialty-finishes",
      description: "Unique textures and finishes to add character to your walls.",
      image: "/images/d2.png"
    },
    {
      title: "Cabinet Refinishing",
      href: "/services/cabinet-refinishing",
      description: "Revitalize your kitchen or bathroom with our cabinet refinishing services.",
      image: "/images/kitchen1.jpg"
    },
    {
      title: "Deck Staining",
      href: "/services/deck-staining",
      description: "Protect and beautify your deck with our professional staining services.",
      image: "/images/deck1.jpg"
    },
    {
      title: "Power Washing",
      href: "/services/power-washing",
      description: "Remove dirt, grime, and mildew from your property with our power washing services.",
      image: "/images/powerwash.jpg"
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