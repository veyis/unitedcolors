import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { StructuredData } from '@/components/structured-data';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Brush, Building, House, Star, Phone } from 'lucide-react';
import { MarketingHeader } from '@/components/marketing-header';
import Link from 'next/link';
import { Testimonials } from '@/components/testimonials';
import { CTASection } from '@/components/cta-section';
import Image from 'next/image';
import { WhyChooseUs } from '@/components/why-choose';

export const metadata = {
  title: 'United Colors Painters | Expert Painting Services in PA, NJ, NY',
  description: 'Transform your space with United Colors Painters. Professional residential and commercial painting services in PA, NJ, and NY. Get a free quote today!',
};

const services = [
  {
    title: "Interior Painting",
    href: "/services/interior-painting",
    description: "Transform your indoor spaces with our expert interior painting services."
  },
  {
    title: "Exterior Painting",
    href: "/services/exterior-painting",
    description: "Enhance your property's curb appeal with our durable exterior painting solutions."
  },
  {
    title: "Commercial Painting",
    href: "/services/commercial-painting",
    description: "Professional painting services for offices, retail spaces, and industrial facilities."
  },
  {
    title: "Residential Painting",
    href: "/services/residential-painting",
    description: "Personalized painting solutions for homes of all sizes and styles."
  },
  {
    title: "Specialty Finishes",
    href: "/services/specialty-finishes",
    description: "Unique textures and finishes to add character to your walls."
  },
  {
    title: "Color Consultation",
    href: "/services/color-consultation",
    description: "Expert advice to help you choose the perfect colors for your space."
  },
  {

    title: "Cabinet Refinishing",
    href: "/services/cabinet-refinishing",
    description: "Revitalize your kitchen or bathroom with our cabinet refinishing services."
  },
  {
    title: "Deck Staining",
    href: "/services/deck-staining",
    description: "Protect and beautify your deck with our professional staining services."
  },
  {
    title: "Power Washing",
    href: "/services/power-washing",
    description: "Remove dirt, grime, and mildew from your property with our power washing services."
  },
  {
    title: "Drywall Repair",
    href: "/services/drywall-repair",
    description: "Seamless repairs for damaged drywall, including holes, cracks, and water damage."
  },
  {
    title: "Wallpaper Removal",
    href: "/services/wallpaper-removal",
    description: "Efficient removal of old wallpaper to prepare your walls for a fresh coat of paint."
  },
  {
    title: "Popcorn Ceiling Removal",
    href: "/services/popcorn-ceiling-removal",
    description: "Update your ceilings with our professional popcorn ceiling removal services."
  },
  {
    title: "Epoxy Flooring",
    href: "/services/epoxy-flooring",
    description: "Durable and stylish flooring solutions for garages, basements, and commercial spaces."
  },
  {
    title: "Stucco Repair",
    href: "/services/stucco-repair",
    description: "Restore the beauty and integrity of your stucco surfaces with our repair services."
  },
  {
    title: "Lead Paint Removal",
    href: "/services/lead-paint-removal",
    description: "Safe and effective removal of lead-based paint from residential and commercial properties."
  },
  {
    title: "Mold Remediation",
    href: "/services/mold-remediation",
    description: "Professional mold removal and remediation services to protect your property and health."
  },
  {
    title: "Water Damage Repair",
    href: "/services/water-damage-repair",
    description: "Comprehensive repair and restoration services for water-damaged properties."
  }

]



export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <StructuredData page="home" />
      <MarketingHeader />
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-600 to-purple-600 text-white overflow-hidden">
          <Image
            src="/hero-background.jpg"
            alt="Beautifully painted interior"
            fill
            style={{ objectFit: 'cover' }}
            quality={100}
            className="absolute inset-0 opacity-30"
          />
          <div className="relative z-10 text-center py-20 md:py-32 container mx-auto px-4">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              United Colors Painters
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Your trusted partner for residential, commercial, and specialty painting services in PA, NJ, and NY.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-3">
                Get a Free Quote
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3"
              >
                <Phone className="mr-2 h-5 w-5" />
                Call Us Now
              </Button>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-gray-50">
  <div className="container mx-auto px-4">
    <h2 className="text-5xl font-extrabold text-center mb-12 bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text leading-tight">
      Our Services
    </h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {services.map((service) => (
        <a
          key={service.title}
          href={service.href}
          className="group block p-6 bg-white shadow-md hover:shadow-lg transition-shadow duration-300 rounded-xl relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="relative z-10">
            <h3 className="text-2xl font-semibold bg-gradient-to-tr from-blue-600 to-purple-800 text-transparent bg-clip-text group-hover:from-blue-600 group-hover:to-purple-700 transition-all duration-300">
              {service.title}
            </h3>
            <p className="text-gray-600 mt-4 group-hover:text-gray-800 transition-colors duration-300">
              {service.description}
            </p>
            <span className="inline-block mt-4 text-blue-600 group-hover:underline">
              Learn More →
            </span>
          </div>
        </a>
      ))}
    </div>
  </div>
</section>
        {/* Why Choose Us Section */}
        <WhyChooseUs/>

        {/* Testimonials Section */}
        <Testimonials />

        {/* CTA Section */}
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}