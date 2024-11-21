import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { StructuredData } from '@/components/structured-data'
import { MarketingHeader } from '@/components/marketing-header'
import { Button } from "@/components/ui/button"
import { Star, Award, Users, Paintbrush } from 'lucide-react'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About United Color Painters | Professional Painting Services',
  description: 'Learn about United Color Painters, our history, values, and commitment to quality painting services in PA, NJ, and NY.',
  openGraph: {
    title: 'About United Color Painters | Professional Painting Services',
    description: 'Learn about United Color Painters, our history, values, and commitment to quality painting services in PA, NJ, and NY.',
  },
}

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <StructuredData page="about" />
      <MarketingHeader />
      <Header />
      <main className="flex-grow">
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">About United Color Painters</h1>
            <p className="text-xl mb-8">Transforming spaces with precision, creativity, and unmatched quality since 2000</p>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="md:w-1/2 mb-8 md:mb-0">
                {/* <Image src="/public/placeholder.png" alt="United Color Painters Team" className="rounded-lg shadow-lg" width={600} height={400} /> */}
              </div>
              <div className="md:w-1/2 md:pl-8">
                <h2 className="text-3xl font-bold mb-4">Our Story</h2>
                <p className="text-lg mb-4">
                  Founded in 2000, United Color Painters began with a simple mission: to provide top-quality painting services that transform spaces and exceed client expectations. Over the past two decades, we&apos;ve grown from a small local operation to a trusted name in residential and commercial painting across Pennsylvania, New Jersey, and New York.
                </p>
                <p className="text-lg mb-4">
                  Our success is built on a foundation of skilled craftsmanship, attention to detail, and a commitment to using only the finest materials. We&apos;ve assembled a team of experienced painters who share our passion for perfection and customer satisfaction.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-gray-100 py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Why Choose United Color Painters?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="flex flex-col items-center text-center">
                <Star className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Quality Assurance</h3>
                <p>We stand behind our work with a satisfaction guarantee on every project.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Award className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Expert Team</h3>
                <p>Our painters are skilled professionals with years of experience in the industry.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Users className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Customer-Centric</h3>
                <p>We prioritize clear communication and exceptional customer service throughout your project.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Paintbrush className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Premium Materials</h3>
                <p>We use only high-quality, eco-friendly paints and materials for lasting results.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-8">Ready to Transform Your Space?</h2>
            <p className="text-xl mb-8">Experience the United Color Painters difference for yourself.</p>
            <Button size="lg" className="bg-blue-600 text-white hover:bg-blue-700">Get a Free Quote</Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

