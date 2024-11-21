import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { StructuredData } from "@/components/structured-data";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import Image from "next/image";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Projects | United Color Painters",
  description:
    "Explore our premium projects at United Color Painters. From residential to commercial, see how we transform spaces with expert craftsmanship.",
};

const projects = [
  {
    title: "Modern Home Interior",
    description: "A complete interior transformation with elegant finishes and vibrant colors.",
    image: "/images/projects/home-interior.jpg",
    location: "Philadelphia, PA",
  },
  {
    title: "Corporate Office Revamp",
    description: "A sleek and modern workspace designed to inspire productivity.",
    image: "/images/projects/corporate-office.jpg",
    location: "New York, NY",
  },
  {
    title: "Luxury Residential Exterior",
    description: "High-quality exterior painting with durable finishes and stunning curb appeal.",
    image: "/images/projects/luxury-home.jpg",
    location: "Whitehall, PA",
  },
  {
    title: "Retail Store Makeover",
    description: "A vibrant retail space that draws customers in with bold colors and clean lines.",
    image: "/images/projects/retail-store.jpg",
    location: "Newark, NJ",
  },
];

export default function ProjectsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <StructuredData page="projects" />
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-800 text-white py-16 text-center">
          <div className="container mx-auto px-6">
            <h1 className="text-5xl font-extrabold mb-4">Our Projects</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Take a closer look at our premium projects and see how we bring visions to life with expert craftsmanship and attention to detail.
            </p>
          </div>
        </section>

        {/* Projects Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-12">Featured Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <Card key={index} className="shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300">
                  <CardHeader className="p-0">
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={400}
                      height={300}
                      className="w-full h-48 object-cover rounded-t-lg"
                    />
                  </CardHeader>
                  <CardContent className="p-6">
                    <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                    <p className="text-gray-600 mb-4">{project.description}</p>
                    <p className="text-sm text-gray-500">Location: {project.location}</p>
                  </CardContent>
                  <CardFooter className="p-6 text-center">
                    <Button variant="outline" className="text-blue-600 hover:bg-blue-50">
                      View Details
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Call-to-Action Section */}
        <section className="py-16 bg-gray-100 text-center">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold mb-6">Have a Vision for Your Next Project?</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Let United Color Painters bring your dream project to life. From design to execution, we ensure exceptional results.
            </p>
            <Button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg text-lg hover:from-blue-700 hover:to-purple-700">
              Get a Free Quote
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}