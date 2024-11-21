import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { StructuredData } from '@/components/structured-data'
import { MarketingHeader } from '@/components/marketing-header'
import { Button } from "@/components/ui/button"
import { CheckCircle, Paintbrush, Home } from 'lucide-react'
import Image from 'next/image'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Residential Painting Services | United Color Painters',
  description: 'Transform your home with our expert residential painting services. Interior and exterior painting solutions for homes in PA, NJ, and NY.',
  openGraph: {
    title: 'Residential Painting Services | United Color Painters',
    description: 'Transform your home with our expert residential painting services. Interior and exterior painting solutions for homes in PA, NJ, and NY.',
  },
}

export default function ResidentialPaintingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <StructuredData page="residential" />
      <MarketingHeader />
      <Header />
      <main className="flex-grow">
        <section className="bg-gradient-to-br from-blue-600 to-purple-600 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Residential Painting Services</h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">Transform your home with our expert painting services. We bring color and life to every room.</p>
            <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
              Get a Free Quote
            </Button>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
                <Image src="/placeholder.svg?height=400&width=600" alt="Residential Painting" width={600} height={400} className="rounded-lg shadow-lg" />
              </div>
              <div className="md:w-1/2">
                <h2 className="text-3xl font-bold mb-6">Expert Home Painting Services</h2>
                <p className="text-lg mb-6">
                  At United Color Painters, we understand that your home is your sanctuary. Our residential painting services are designed to bring your vision to life, enhancing the beauty and value of your property. Whether you're looking to refresh a single room or transform your entire home, our team of skilled painters is here to deliver exceptional results.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-center">
                    <CheckCircle className="text-green-500 mr-2" />
                    <span>Interior and exterior painting</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="text-green-500 mr-2" />
                    <span>Color consultation services</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="text-green-500 mr-2" />
                    <span>Eco-friendly paint options</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="text-green-500 mr-2" />
                    <span>Detailed surface preparation</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-gray-100 py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Our Residential Painting Process</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-100 rounded-full p-3 mr-4">
                    <Paintbrush className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold">Consultation</h3>
                </div>
                <p>We start with a thorough consultation to understand your vision, preferences, and requirements for your home.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-100 rounded-full p-3 mr-4">
                    <Paintbrush className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold">Preparation</h3>
                </div>
                <p>Our team carefully prepares the surfaces, ensuring a smooth and long-lasting finish for your walls and trim.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-100 rounded-full p-3 mr-4">
                    <Paintbrush className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold">Painting</h3>
                </div>
                <p>Using high-quality paints and techniques, we bring your vision to life with precision and attention to detail.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-8">Ready to Transform Your Home?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">Contact United Color Painters today for a free consultation and quote. Let's bring your vision to life!</p>
            <Button size="lg" className="bg-blue-600 text-white hover:bg-blue-700">
              Get Started
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

