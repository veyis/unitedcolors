import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { StructuredData } from '@/components/structured-data';
import { MarketingHeader } from '@/components/marketing-header';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Top Interior Paint Trends for 2025 | United Color Painters',
  description: 'Explore the latest trends in interior painting for 2025 and discover how to incorporate them into your home for a stylish and modern look.',
  openGraph: {
    title: 'Top Interior Paint Trends for 2025 | United Color Painters',
    description: 'Discover the top interior paint trends for 2025 and learn how to bring them into your space for a refreshed and contemporary aesthetic.',
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
        <section className="relative bg-gradient-to-r from-blue-700 via-purple-600 to-purple-800 text-white py-16">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-5xl md:text-6xl font-extrabold mb-6">Top Interior Paint Trends for 2025</h1>
            <p className="text-lg md:text-2xl max-w-3xl mx-auto">
              Discover the latest trends in interior painting and learn how to incorporate them into your home for a stylish and refreshed look.
            </p>
          </div>
        </section>

        {/* Blog Content Section */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            {/* Trend: Warm Neutrals */}
            <div className="mb-12">
              <h2 className="text-4xl font-bold mb-4">Warm Neutrals</h2>
              <p className="text-lg text-gray-600 mb-4">
                Beige, taupe, and greige are making a strong comeback in 2025. These colors bring warmth and sophistication to living spaces, creating a cozy and inviting atmosphere.
              </p>
              <div className="relative w-full h-64 mb-6">
                <Image
                  src="/images/warm-neutrals21.png"
                  alt="Warm neutrals in a sophisticated living room"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
            <Separator />

            {/* Trend: Earthy Greens */}
            <div className="mb-12">
              <h2 className="text-4xl font-bold mb-4">Earthy Greens</h2>
              <p className="text-lg text-gray-600 mb-4">
                Inspired by nature, shades of green are revitalizing interiors with a fresh and calming touch. Perfect for living rooms and kitchens, earthy greens bring the outdoors inside.
              </p>
              <div className="relative w-full h-64 mb-6">
                <Image
                  src="/images/greens2.png"
                  alt="Earthy greens in a modern living room"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
            <Separator />

            {/* Trend: Calming Blues */}
            <div className="mb-12">
              <h2 className="text-4xl font-bold mb-4">Calming Blues</h2>
              <p className="text-lg text-gray-600 mb-4">
                Shades of blue continue to dominate, bringing a sense of tranquility to bedrooms and bathrooms. These hues create a peaceful and serene environment perfect for relaxation.
              </p>
              <div className="relative w-full h-64 mb-6">
                <Image
                  src="/images/calming-blues21.png"
                  alt="Calming blues in a tranquil bedroom"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
            <Separator />

            {/* Trend: Bold Accent Walls */}
            <div className="mb-12">
              <h2 className="text-4xl font-bold mb-4">Bold Accent Walls</h2>
              <p className="text-lg text-gray-600 mb-4">
                Deep, bold shades like navy, emerald, and charcoal are being used to create dramatic accent walls. This trend adds depth and character to any room.
              </p>
              <div className="relative w-full h-64 mb-6">
                <Image
                  src="/images/bold-accents.png"
                  alt="Bold accent wall in a modern living room"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
            <Separator />

            {/* Trend: Minimalist White */}
            <div className="mb-12">
              <h2 className="text-4xl font-bold mb-4">Minimalist White</h2>
              <p className="text-lg text-gray-600 mb-4">
                Crisp white walls remain a staple for minimalist designs. They offer a clean and timeless look, allowing furniture and decor to stand out.
              </p>
              <div className="relative w-full h-64 mb-6">
                <Image
                  src="/images/minimalist-white.png"
                  alt="Minimalist white walls in a clean modern space"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Call-to-Action Section */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-800 text-white">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold mb-6">
              Ready to Refresh Your Home?
            </h2>
            <p className="text-lg max-w-3xl mx-auto mb-8">
              Contact United Color Painters today and let our experts bring these stunning trends into your space.
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
