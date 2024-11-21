import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { StructuredData } from '@/components/structured-data'
import { MarketingHeader } from '@/components/marketing-header'
import { Button } from "@/components/ui/button"
import { CheckCircle, Briefcase, Building } from 'lucide-react'
import Image from 'next/image'


export const metadata = {

  title: 'Commercial Painting Services | United Color Painters',
  description: 'Transform your business environment with our professional commercial painting services in PA, NJ, and NY. Our expert solutions ensure a high-quality finish with minimal disruption.',
  keywords: 'commercial painting, business painting, office painting, retail painting, industrial painting, PA, NJ, NY, professional painting services, commercial painting solutions',
}

export default function CommercialPaintingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <StructuredData page="commercial" />
      <MarketingHeader />
      <Header />
      <main className="flex-grow">
        <section className="bg-gradient-to-br from-blue-600 to-purple-600 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Commercial Painting Services</h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">Enhance your business environment with our professional commercial painting services.</p>
            <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
              Request a Quote
            </Button>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
                <Image src="/placeholder.svg?height=400&width=600" alt="Commercial Painting" width={600} height={400} className="rounded-lg shadow-lg" />
              </div>
              <div className="md:w-1/2">
                <h2 className="text-3xl font-bold mb-6">Expert Commercial Painting Solutions</h2>
                <p className="text-lg mb-6">
                  United Color Painters specializes in delivering high-quality commercial painting services that enhance your business environment. We understand the unique challenges of commercial projects and work efficiently to minimize disruption to your operations.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-center">
                    <CheckCircle className="text-green-500 mr-2" />
                    <span>Office and retail space painting</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="text-green-500 mr-2" />
                    <span>Industrial and warehouse painting</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="text-green-500 mr-2" />
                    <span>Exterior commercial painting</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="text-green-500 mr-2" />
                    <span>Flexible scheduling to minimize downtime</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-gray-100 py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Our Commercial Painting Process</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-100 rounded-full p-3 mr-4">
                    <Briefcase className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold">Assessment</h3>
                </div>
                <p>We conduct a thorough assessment of your commercial space to develop a customized painting plan.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-100 rounded-full p-3 mr-4">
                    <Building className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold">Preparation</h3>
                </div>
                <p>Our team carefully prepares the surfaces and protects your equipment and furnishings.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-100 rounded-full p-3 mr-4">
                    <Briefcase className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold">Execution</h3>
                </div>
                <p>We use high-quality, durable paints and efficient techniques to complete your project on time.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-8">Elevate Your Business Environment</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">Contact United Color Painters today for a free consultation and quote. Let&apos;s enhance your commercial space!</p>
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

