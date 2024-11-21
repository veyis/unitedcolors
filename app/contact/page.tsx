import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { StructuredData } from '@/components/structured-data'
import { MarketingHeader } from '@/components/marketing-header'
import { ContactForm } from '@/components/contact-form'
import { FAQSection } from '@/components/faq-section'
import { LiveChat } from '@/components/live-chat'
import { SocialLinks } from '@/components/social-links'
import { Phone, Mail, MapPin } from 'lucide-react'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact United Color Painters | Expert Painting Services in PA, NJ, NY',
  description: 'Get in touch with United Color Painters for professional painting services in Pennsylvania, New Jersey, and New York. Request a quote or schedule a consultation today.',
  openGraph: {
    title: 'Contact United Color Painters | Expert Painting Services in PA, NJ, NY',
    description: 'Get in touch with United Color Painters for professional painting services in Pennsylvania, New Jersey, and New York. Request a quote or schedule a consultation today.',
  },
}

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <StructuredData page="contact" />
      <MarketingHeader />
      <Header />
      <main className="flex-grow">
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-12 md:py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-4 md:mb-6">Contact United Color Painters</h1>
            <p className="text-lg md:text-xl mb-4 md:mb-8">Expert painting services in Pennsylvania, New Jersey, and New York</p>
          </div>
        </section>

        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-12">
              <div className="lg:w-1/2">
                <h2 className="text-2xl md:text-3xl font-bold mb-6">Send Us a Message</h2>
                <ContactForm />
              </div>
              <div className="lg:w-1/2">
                <h2 className="text-2xl md:text-3xl font-bold mb-6">Contact Information</h2>
                <div className="space-y-4 mb-8">
                  <div className="flex items-center">
                    <Phone className="w-6 h-6 text-blue-600 mr-4" />
                    <div>
                      <h3 className="font-semibold">Phone</h3>
                      <p>(123) 456-7890</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Mail className="w-6 h-6 text-blue-600 mr-4" />
                    <div>
                      <h3 className="font-semibold">Email</h3>
                      <p>info@unitedcolorpainters.com</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-6 h-6 text-blue-600 mr-4" />
                    <div>
                      <h3 className="font-semibold">Address</h3>
                      <p>123 Paint Street, Philadelphia, PA 19019</p>
                    </div>
                  </div>
                </div>
                <div className="mb-8">
                  <h3 className="text-xl font-bold mb-4">Service Areas</h3>
                  <p>We provide professional painting services throughout Pennsylvania, New Jersey, and New York.</p>
                </div>
                <div className="mb-8">
                  <h3 className="text-xl font-bold mb-4">Business Hours</h3>
                  <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                  <p>Saturday: 9:00 AM - 3:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
                <div className="mb-8">
                  <h3 className="text-xl font-bold mb-4">Connect With Us</h3>
                  <SocialLinks />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Our Location</h2>
            <div className="aspect-w-16 aspect-h-9 max-w-4xl mx-auto">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3058.5376757598765!2d-75.16769368461656!3d39.95257897942119!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c6c62f36fbe869%3A0x19ce369bdaa21642!2sPhiladelphia%20City%20Hall!5e0!3m2!1sen!2sus!4v1621436591510!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">Why Choose United Color Painters?</h2>
            <div className="max-w-3xl mx-auto">
              <p className="text-center mb-4">At United Color Painters, we pride ourselves on delivering exceptional painting services to residential and commercial clients throughout Pennsylvania, New Jersey, and New York. Our team of skilled professionals is committed to transforming your space with precision, creativity, and attention to detail.</p>
              <p className="text-center mb-4">We offer a wide range of services, including interior painting, exterior painting, color consultation, and specialty finishes. Whether you&apos;re looking to refresh a single room or completely transform your property&apos;s appearance, we have the expertise and resources to bring your vision to life.</p>
              <p className="text-center">Our dedication to quality, use of premium materials, and focus on customer satisfaction set us apart in the industry. Contact us today to experience the United Color Painters&apos; difference!</p>
            </div>
          </div>
        </section>

        <FAQSection />
      </main>
      <Footer />
      <LiveChat />
    </div>
  )
}

