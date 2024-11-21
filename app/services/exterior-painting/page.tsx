import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { StructuredData } from '@/components/structured-data'
import { MarketingHeader } from '@/components/marketing-header'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Paintbrush, Sun, ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export const metadata = {
  title: 'Expert Exterior Painting Services | United Color Painters',
  description: 'Transform your home\'s exterior with our professional painting services. Durable finishes, expert color consultation, and superior craftsmanship in PA, NJ, and NY.',
  keywords: 'exterior painting, house painting, professional painters, curb appeal, PA, NJ, NY',
}

export default function ExteriorPaintingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <StructuredData/>
      <MarketingHeader />
      <Header />
      <main className="flex-grow">
        <section className="bg-gradient-to-br from-blue-600 to-purple-600 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Expert Exterior Painting Services</h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">Transform your home&apos;s curb appeal with our professional exterior painting services in PA, NJ, and NY.</p>
            <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
              Get a Free Quote
            </Button>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
                <Image src="/placeholder.svg?height=400&width=600" alt="Exterior Painting" width={600} height={400} className="rounded-lg shadow-lg" />
              </div>
              <div className="md:w-1/2">
                <h2 className="text-3xl font-bold mb-6">Why Choose Our Exterior Painting Services?</h2>
                <p className="text-lg mb-6">
                  At United Color Painters, we specialize in delivering high-quality exterior painting services that not only enhance your home&apos;s appearance but also protect it from the elements. Our team of skilled professionals uses top-grade materials and proven techniques to ensure a durable, long-lasting finish.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-center">
                    <CheckCircle className="text-green-500 mr-2" />
                    <span>Expert color consultation</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="text-green-500 mr-2" />
                    <span>Thorough surface preparation</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="text-green-500 mr-2" />
                    <span>Premium, weather-resistant paints</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="text-green-500 mr-2" />
                    <span>Attention to detail and clean work areas</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-gray-100 py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Our Exterior Painting Process</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-100 rounded-full p-3 mr-4">
                    <Paintbrush className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold">Preparation</h3>
                </div>
                <p>We thoroughly clean, repair, and prime surfaces to ensure the best paint adhesion and longevity.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-100 rounded-full p-3 mr-4">
                    <Sun className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold">Application</h3>
                </div>
                <p>Our team applies premium paints using professional techniques for a smooth, even finish.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-100 rounded-full p-3 mr-4">
                    <CheckCircle className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold">Inspection</h3>
                </div>
                <p>We conduct a thorough final inspection to ensure every detail meets our high standards.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-8">Ready to Transform Your Home&apos;s Exterior?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">Contact United Color Painters today for a free consultation and quote. Let&apos;s bring your vision to life!</p>
            <Button size="lg" className="bg-blue-600 text-white hover:bg-blue-700">
              Get Started
            </Button>
          </div>
        </section>

        <section className="bg-gray-100 py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8">Learn More About Exterior Painting</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">How to Prepare Your Home for Exterior Painting</h3>
                  <p className="text-gray-600 mb-4">Learn the essential steps to prepare your home&apos;s exterior for a fresh coat of paint.</p>
                  <Link href="/blog/prepare-home-exterior-painting" className="text-blue-600 hover:underline inline-flex items-center">
                    Read more <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
              <Card className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">10 Popular Exterior Paint Colors for 2024</h3>
                  <p className="text-gray-600 mb-4">Discover the hottest exterior paint colors trending in 2024 and how to incorporate them into your home.</p>
                  <Link href="/blog/popular-paint-colors-2024" className="text-blue-600 hover:underline inline-flex items-center">
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
  )
}

