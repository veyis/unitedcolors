import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { StructuredData } from "@/components/structured-data";
import { MarketingHeader } from "@/components/marketing-header";
import { Button } from "@/components/ui/button";
import { CheckCircle, MapPin } from "lucide-react";
import Image from "next/image";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Professional Painters in New Jersey | United Color Painters",
  description:
    "Expert painting services for residential and commercial properties in New Jersey. Quality, reliability, and stunning results guaranteed.",
  openGraph: {
    title: "Professional Painters in New Jersey | United Color Painters",
    description:
      "Expert painting services for residential and commercial properties in New Jersey. Quality, reliability, and stunning results guaranteed.",
  },
};

export default function NewjerseyPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <StructuredData page="newjersey" />
      <MarketingHeader />
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-600 to-purple-600 text-white py-20">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
              Professional Painters in New Jersey
            </h1>
            <p className="text-lg md:text-2xl mb-8 max-w-3xl mx-auto">
              Transform your space with United Color Painters. Expert painting
              services for homes and businesses in New Jersey.
            </p>
            <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 font-semibold rounded-lg shadow-lg">
              Get a Free Quote
            </Button>
          </div>
        </section>

        {/* About Services Section */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
                <Image
                  src="/images/newjersey-painting.jpg"
                  alt="Painting in New Jersey"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg"
                />
              </div>
              <div className="md:w-1/2">
                <h2 className="text-4xl font-bold mb-6">
                  Expert Painting Services in New Jersey
                </h2>
                <p className="text-lg mb-6 leading-relaxed text-gray-700">
                  United Color Painters is your trusted partner for all painting
                  needs in New Jersey. With years of experience and a commitment
                  to quality, we deliver exceptional results for both
                  residential and commercial properties.
                </p>
                <ul className="space-y-4">
                  {[
                    "Residential and commercial painting",
                    "Interior and exterior services",
                    "Color consultation and design services",
                    "Eco-friendly paint options",
                  ].map((item, index) => (
                    <li key={index} className="flex items-center">
                      <CheckCircle className="text-green-500 mr-2" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="bg-gray-100 py-16">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-12">
              Why Choose United Color Painters in New Jersey?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Local Expertise",
                  description:
                    "We understand New Jersey's unique architecture and climate, ensuring long-lasting results.",
                },
                {
                  title: "Quality Materials",
                  description:
                    "We use premium paints and materials to ensure a beautiful, durable finish for your property.",
                },
                {
                  title: "Satisfaction Guaranteed",
                  description:
                    "We&apos;re not happy until you&apos;re thrilled with the results of our painting services.",
                },
              ].map(({ title, description }, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-center mb-4">
                    <div className="bg-blue-100 rounded-full p-3 mr-4">
                      <CheckCircle className="h-6 w-6 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-semibold">{title}</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">{description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Service Areas Section */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-12">
              Our Service Areas in New Jersey
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {[
                "Newark",
                "Jersey City",
                "Paterson",
                "Elizabeth",
                "Edison",
                "Woodbridge",
                "Lakewood",
                "Toms River",
              ].map((area) => (
                <div key={area} className="bg-gray-100 p-4 rounded-lg flex items-center shadow-md">
                  <MapPin className="text-blue-600 mr-2" />
                  <span>{area}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call-to-Action Section */}
        <section className="py-16 bg-blue-600 text-white">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold mb-6">
              Ready to Transform Your New Jersey Property?
            </h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
              Contact United Color Painters today for a free consultation and
              quote. Let&apos;s bring your vision to life!
            </p>
            <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 font-semibold rounded-lg shadow-lg">
              Get Started
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}