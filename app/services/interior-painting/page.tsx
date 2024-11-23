import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { StructuredData } from '@/components/structured-data';
import { MarketingHeader } from '@/components/marketing-header';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Paintbrush, Home, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'Expert Interior Painting Services | United Color Painters',
  description: 'Refresh your home\'s interior with professional painting services. Personalized color consultation, flawless finishes, and unmatched craftsmanship in PA, NJ, and NY.',
  keywords: 'interior painting, house painting, professional painters, home improvement, PA, NJ, NY',
};

export default function InteriorPaintingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <StructuredData />
      <MarketingHeader />
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-green-600 to-teal-600 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Expert Interior Painting Services</h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">Revitalize your living space with our professional interior painting services, delivering style and sophistication in PA, NJ, and NY.</p>

            <Link href="/getquote">
            <Button size="lg" className="bg-white text-green-600 hover:bg-green-50">
              Get a Free Quote
            </Button>
            </Link>
            
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
                <Image src="/images/interior1.jpg" alt="Interior Painting" width={600} height={400} className="rounded-lg shadow-lg" />
              </div>
              <div className="md:w-1/2">
                <h2 className="text-3xl font-bold mb-6">Why Choose Our Interior Painting Services?</h2>
                <p className="text-lg mb-6">
                  At United Color Painters, we bring creativity and expertise to every project, ensuring your home’s interior reflects your unique style. Our professional team uses premium paints and meticulous techniques for an exceptional finish.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-center">
                    <CheckCircle className="text-green-500 mr-2" />
                    <span>Personalized color consultation</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="text-green-500 mr-2" />
                    <span>Detailed surface preparation</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="text-green-500 mr-2" />
                    <span>Low-VOC and eco-friendly paint options</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="text-green-500 mr-2" />
                    <span>Flawless finishes with attention to detail</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Our Process Section */}
        <section className="bg-gray-100 py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Our Interior Painting Process</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <div className="bg-green-100 rounded-full p-3 mr-4">
                    <Paintbrush className="h-6 w-6 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold">Planning</h3>
                </div>
                <p>We work with you to understand your vision and choose the perfect colors and finishes for your space.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <div className="bg-green-100 rounded-full p-3 mr-4">
                    <Home className="h-6 w-6 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold">Painting</h3>
                </div>
                <p>Our experienced painters deliver smooth, even coats with precision and care to transform your home.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <div className="bg-green-100 rounded-full p-3 mr-4">
                    <CheckCircle className="h-6 w-6 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold">Final Touches</h3>
                </div>
                <p>We inspect every detail and ensure the space is clean, leaving your home ready to enjoy.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-8">Ready to Transform Your Home&apos;s Interior?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">Contact United Color Painters today for a free consultation and quote. Let&apos;s create a space you&apos;ll love to live in!</p>
            <Button size="lg" className="bg-green-600 text-white hover:bg-green-700">
              Get Started
            </Button>
          </div>
        </section>

        {/* Additional Resources */}
        <section className="bg-gray-100 py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8">Learn More About Interior Painting</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">How to Choose the Perfect Colors for Your Home</h3>
                  <p className="text-gray-600 mb-4">Discover tips for selecting colors that reflect your style and enhance your space.</p>
                  <Link href="/blog/perfect-home-colors" className="text-green-600 hover:underline inline-flex items-center">
                    Read more <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">Top Interior Paint Trends for 2025</h3>
                  <p className="text-gray-600 mb-4">Explore the latest trends in interior painting and how to incorporate them into your home.</p>
                  <Link href="/blog/paint-trends-2025" className="text-green-600 hover:underline inline-flex items-center">
                    Read more <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}