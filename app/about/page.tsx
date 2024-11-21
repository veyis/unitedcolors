import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { StructuredData } from "@/components/structured-data";
import { MarketingHeader } from "@/components/marketing-header";
import { Button } from "@/components/ui/button";
import { Star, Award, Users, Paintbrush } from "lucide-react";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About United Color Painters | Professional Painting Services",
  description:
    "Learn about United Color Painters, our history, values, and commitment to quality painting services in PA, NJ, and NY.",
  openGraph: {
    title: "About United Color Painters | Professional Painting Services",
    description:
      "Learn about United Color Painters, our history, values, and commitment to quality painting services in PA, NJ, and NY.",
  },
};

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <StructuredData page="about" />
      <MarketingHeader />
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-blue-700 via-purple-600 to-purple-800 text-white py-20 overflow-hidden">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-6xl font-extrabold mb-6 leading-tight">
              About United Color Painters
            </h1>
            <p className="text-2xl max-w-3xl mx-auto mb-8">
              Transforming spaces with expert craftsmanship, innovative
              techniques, and unmatched dedication.
            </p>
            <Button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg shadow-md text-lg">
              Get to Know Us
            </Button>
          </div>
          <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-white to-blue-400 opacity-20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-white to-purple-500 opacity-20 rounded-full blur-3xl"></div>
        </section>

        {/* Mission Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-5xl font-bold mb-4">Our Mission</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                At United Color Painters, we aim to elevate your space through
                precision, creativity, and an unwavering commitment to
                excellence. Your vision is our inspiration.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: <Star className="w-12 h-12 text-blue-600 mx-auto mb-4" />,
                  title: "Quality Craftsmanship",
                  description:
                    "Delivering meticulous attention to detail with every brushstroke.",
                },
                {
                  icon: (
                    <Award className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  ),
                  title: "Industry Recognition",
                  description:
                    "Proudly recognized for our excellence and reliability.",
                },
                {
                  icon: (
                    <Users className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  ),
                  title: "Client Focus",
                  description:
                    "Building lasting relationships through personalized service.",
                },
                {
                  icon: (
                    <Paintbrush className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  ),
                  title: "Innovative Solutions",
                  description:
                    "Bringing creativity to life with unique painting techniques.",
                },
              ].map(({ icon, title, description }, idx) => (
                <div
                  key={idx}
                  className="bg-gray-50 shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300 text-center"
                >
                  {icon}
                  <h3 className="text-xl font-semibold mb-2">{title}</h3>
                  <p className="text-gray-600">{description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-4">Our Story</h2>
              <p className="text-lg text-gray-600 mb-6">
                United Color Painters began with a simple vision: to redefine
                painting services with unparalleled quality and dedication.
                Today, our team continues to deliver exceptional results that
                transform spaces and exceed expectations.
              </p>
              <p className="text-lg text-gray-600">
                From humble beginnings to becoming a trusted name, we take pride
                in our journey and the clients who inspire us.
              </p>
            </div>
            <div>
              <img
                src="/images/our-story.jpg"
                alt="Our story"
                className="rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              />
            </div>
          </div>
        </section>

        {/* Vision Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-5xl font-bold mb-8">Our Vision</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              To be the premier choice for painting services, delivering
              transformative solutions that inspire and delight our clients.
            </p>
          </div>
        </section>

        {/* Call-to-Action Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-800 text-white">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold mb-6">
              Ready to Experience the Difference?
            </h2>
            <p className="text-lg max-w-2xl mx-auto mb-8">
              Contact United Color Painters today and let us transform your
              vision into a masterpiece. We’re ready to exceed your
              expectations.
            </p>
            <Button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg shadow-lg text-lg">
              Get a Free Quote
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}