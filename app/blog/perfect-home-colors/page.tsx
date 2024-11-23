import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { StructuredData } from '@/components/structured-data';
import { MarketingHeader } from '@/components/marketing-header';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Perfect Home Colors: Trends and Tips | United Color Painters Blog',
  description:
    'Discover expert tips and trends for choosing the perfect home colors. Transform your living space with the right palette, inspired by design psychology.',
  openGraph: {
    title: 'Perfect Home Colors: Trends and Tips | United Color Painters Blog',
    description:
      'Discover expert tips and trends for choosing the perfect home colors. Transform your living space with the right palette, inspired by design psychology.',
  },
};

export default function BlogPost() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <StructuredData page="blog" />
      <MarketingHeader />
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-600 to-purple-600 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Perfect Home Colors: Trends and Tips
            </h1>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Transform your living space with expert advice on choosing the
              perfect palette for every room.
            </p>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Why Colors Matter</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                The colors you choose for your home have the power to influence
                mood, energy, and even perceived space. Discover how to
                incorporate timeless and trendy colors into your home to create
                a harmonious and inviting environment.
              </p>
            </div>
          </div>
        </section>

        {/* Color Trends Section */}
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-8 text-center">Top Color Trends for 2024</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: 'Calming Blues',
                  description:
                    'Shades of blue bring a sense of tranquility, perfect for bedrooms and bathrooms.',
                  img: '/images/calming-blues.png',
                },
                {
                  title: 'Warm Neutrals',
                  description:
                    'Colors like beige, taupe, and greige add warmth and sophistication to living areas.',
                  img: '/images/warm-neutral.png',
                },
                {
                  title: 'Earthy Greens',
                  description:
                    'Inspired by nature, greens create a refreshing and revitalizing atmosphere.',
                  img: '/images/earthy-greens.png',
                },
              ].map((trend, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                  <Image
                    src={trend.img}
                    alt={trend.title}
                    width={400}
                    height={300}
                    className="rounded-t-lg"
                  />
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2">{trend.title}</h3>
                    <p className="text-gray-600">{trend.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Tips Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-8 text-center">Expert Tips for Choosing Home Colors</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <CheckCircle className="text-blue-600 w-12 h-12 mb-4" />,
                  title: 'Consider Lighting',
                  description:
                    'Natural and artificial light can change how a color appears. Always test samples at different times of the day.',
                },
                {
                  icon: <CheckCircle className="text-blue-600 w-12 h-12 mb-4" />,
                  title: 'Start Small',
                  description:
                    'Experiment with bold colors in smaller spaces like powder rooms or accent walls.',
                },
                {
                  icon: <CheckCircle className="text-blue-600 w-12 h-12 mb-4" />,
                  title: 'Use a Color Wheel',
                  description:
                    'Understand complementary and analogous colors to create harmony or contrast.',
                },
              ].map((tip, index) => (
                <div key={index} className="bg-gray-50 shadow-lg rounded-lg p-6 text-center">
                  {tip.icon}
                  <h3 className="text-xl font-semibold mb-2">{tip.title}</h3>
                  <p className="text-gray-600">{tip.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Call-to-Action Section */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-800 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Space?</h2>
            <p className="text-lg max-w-3xl mx-auto mb-8">
              Contact United Color Painters for expert advice and professional
              services to bring your vision to life.
            </p>
            <Link href="/getquote">
            <Button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg shadow-lg text-lg">
              Get a Free Quote
            </Button>
            </Link>
            
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
