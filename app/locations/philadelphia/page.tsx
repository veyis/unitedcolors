import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { StructuredData } from '@/components/structured-data'
import { MarketingHeader } from '@/components/marketing-header'
import { Button } from "@/components/ui/button"
import { CheckCircle, MapPin } from 'lucide-react'
import Image from 'next/image'


import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Professional Painters in Philadelphia | United Color Painters',
  description: 'Expert painting services for residential and commercial properties in Philadelphia. Quality, reliability, and stunning results guaranteed.',
  openGraph: {
    title: 'Professional Painters in Philadelphia | United Color Painters',
    description: 'Expert painting services for residential and commercial properties in Philadelphia. Quality, reliability, and stunning results guaranteed.',
  },
}

export default function PhiladelphiaPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <StructuredData page="philadelphia" />
      <MarketingHeader />
      <Header />
      <main className="flex-grow">
        <section className="bg-gradient-to-br from-blue-600 to-purple-600 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Professional Painters in Philadelphia</h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">Transform your space with United Color Painters. Expert painting services for homes and businesses in Philadelphia.</p>
            <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
              Get a Free Quote
            </Button>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
                <Image src="/placeholder.svg?height=400&width=600" alt="Painting in Philadelphia" width={600} height={400} className="rounded-lg shadow-lg" />
              </div>
              <div className="md:w-1/2">
                <h2 className="text-3xl font-bold mb-6">Expert Painting Services in Philadelphia</h2>
                <p className="text-lg mb-6">
                  United Color Painters is your trusted partner for all painting needs in Philadelphia. With years of experience and a commitment to quality, we deliver exceptional results for both residential and commercial properties.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-center">
                    <CheckCircle className="text-green-500 mr-2" />
                    <span>Residential and commercial painting</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="text-green-500 mr-2" />
                    <span>Interior and exterior services</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="text-green-500 mr-2" />
                    <span>Color consultation and design services</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="text-green-500 mr-2" />
                    <span>Eco-friendly paint options</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-gray-100 py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Why Choose United Color Painters in Philadelphia?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-100 rounded-full p-3 mr-4">
                    <CheckCircle className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold">Local Expertise</h3>
                </div>
                <p>We understand Philadelphia&apos;s unique architecture and climate, ensuring long-lasting results.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-100 rounded-full p-3 mr-4">
                    <CheckCircle className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold">Quality Materials</h3>
                </div>
                <p>We use premium paints and materials to ensure a beautiful, durable finish for your property.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-100 rounded-full p-3 mr-4">
                    <CheckCircle className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold">Satisfaction Guaranteed</h3>
                </div>
                <p>We&apos;re not happy until you&apos;re thrilled with the results of our painting services.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Our Service Areas in Philadelphia</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {['Center City', 'South Philadelphia', 'North Philadelphia', 'West Philadelphia', 'Northeast Philadelphia', 'Northwest Philadelphia', 'Southwest Philadelphia', 'Manayunk'].map((area) => (
                <div key={area} className="bg-gray-100 p-4 rounded-lg flex items-center">
                  <MapPin className="text-blue-600 mr-2" />
                  <span>{area}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-blue-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-8">Ready to Transform Your Philadelphia Property?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">Contact United Color Painters today for a free consultation and quote. Let&apos;s bring your vision to life!</p>
            <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
              Get Started
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

