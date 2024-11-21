import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { StructuredData } from '@/components/structured-data';
import { MarketingHeader } from '@/components/marketing-header';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Layers, Sparkles, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'Specialty Finishes | United Color Painters',
  description: 'Discover the art of specialty finishes with United Color Painters. Unique textures, metallic finishes, and faux painting to elevate your space in PA, NJ, and NY.',
  keywords: 'specialty finishes, decorative painting, faux finishes, metallic paint, textured walls, PA, NJ, NY',
};

export default function SpecialtyFinishesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <StructuredData />
      <MarketingHeader />
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-gray-700 to-gray-900 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Elevate Your Space with Specialty Finishes</h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">Bring a touch of elegance and uniqueness to your home with our custom specialty finishes, available in PA, NJ, and NY.</p>
            <Button size="lg" className="bg-white text-gray-800 hover:bg-gray-100">
              Explore Options
            </Button>
          </div>
        </section>

        {/* Why Choose Specialty Finishes */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
                <Image src="/placeholder-specialty-finishes.svg?height=400&width=600" alt="Specialty Finishes" width={600} height={400} className="rounded-lg shadow-lg" />
              </div>
              <div className="md:w-1/2">
                <h2 className="text-3xl font-bold mb-6">Why Choose Specialty Finishes?</h2>
                <p className="text-lg mb-6">
                  At United Color Painters, we go beyond traditional painting to offer custom specialty finishes that transform your walls into works of art. Whether you’re looking for textured walls, metallic accents, or faux painting techniques, our experts deliver unmatched quality and style.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-center">
                    <Star className="text-yellow-500 mr-2" />
                    <span>Custom textures and finishes</span>
                  </li>
                  <li className="flex items-center">
                    <Star className="text-yellow-500 mr-2" />
                    <span>Expert faux painting techniques</span>
                  </li>
                  <li className="flex items-center">
                    <Star className="text-yellow-500 mr-2" />
                    <span>Metallic and Venetian plaster options</span>
                  </li>
                  <li className="flex items-center">
                    <Star className="text-yellow-500 mr-2" />
                    <span>Personalized designs tailored to your vision</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Our Specialty Finishes */}
        <section className="bg-gray-100 py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Our Specialty Finish Options</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <div className="bg-yellow-100 rounded-full p-3 mr-4">
                    <Layers className="h-6 w-6 text-yellow-600" />
                  </div>
                  <h3 className="text-xl font-semibold">Textured Finishes</h3>
                </div>
                <p>Add depth and dimension to your walls with textured finishes like knockdown, skip trowel, or sanded designs.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <div className="bg-yellow-100 rounded-full p-3 mr-4">
                    <Sparkles className="h-6 w-6 text-yellow-600" />
                  </div>
                  <h3 className="text-xl font-semibold">Metallic Paint</h3>
                </div>
                <p>Achieve a luxurious and reflective look with metallic finishes, perfect for accent walls or decorative touches.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <div className="bg-yellow-100 rounded-full p-3 mr-4">
                    <Star className="h-6 w-6 text-yellow-600" />
                  </div>
                  <h3 className="text-xl font-semibold">Faux Finishes</h3>
                </div>
                <p>Mimic the look of marble, wood, or stone with our expert faux painting techniques.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-8">Ready to Make a Statement?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">Contact United Color Painters today for a consultation and quote. Let’s create something truly unique for your home.</p>
            <Button size="lg" className="bg-gray-900 text-white hover:bg-gray-800">
              Get Started
            </Button>
          </div>
        </section>

        {/* Additional Resources */}
        <section className="bg-gray-100 py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8">Learn More About Specialty Finishes</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">Top Specialty Finishes for 2024</h3>
                  <p className="text-gray-600 mb-4">Explore the most popular specialty finishes and how they can elevate your space.</p>
                  <Link href="/blog/specialty-finishes-2024" className="text-yellow-600 hover:underline inline-flex items-center">
                    Read more <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">How to Choose the Right Finish for Your Home</h3>
                  <p className="text-gray-600 mb-4">Learn how to select a finish that complements your home’s style and personality.</p>
                  <Link href="/blog/choose-right-finish" className="text-yellow-600 hover:underline inline-flex items-center">
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