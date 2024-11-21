import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { StructuredData } from "@/components/structured-data";
import { MarketingHeader } from "@/components/marketing-header";
import { ContactForm } from "@/components/contact-form";
import { FAQSection } from "@/components/faq-section";
import { LiveChat } from "@/components/live-chat";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Phone, Mail, MapPin } from "lucide-react";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact United Colors Painters and Remodelers | Top-Quality Services in Whitehall, PA",
  description:
    "Reach out to United Colors Painters and Remodelers for exceptional construction services in Whitehall, PA. Call (484) 942-7316 or email info@vmpowerconstruction.com today!",
};

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <StructuredData page="contact" />
      <MarketingHeader />
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-800 text-white py-20">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-6xl font-extrabold mb-6 leading-tight">
              Get in Touch with United Colors Painters
            </h1>
            <p className="text-2xl max-w-3xl mx-auto mb-10">
              Contact us today for expert construction services in PA, NJ, and NY. Let’s bring your vision to life!
            </p>
          </div>
        </section>

        {/* Contact Form & Information Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="shadow-lg transition hover:shadow-xl">
              <CardHeader className="text-center pb-4">
                <h2 className="text-4xl font-bold mb-2">Send Us a Message</h2>
                <p className="text-gray-500">We’ll get back to you shortly</p>
              </CardHeader>
              <CardContent>
                <ContactForm />
              </CardContent>
            </Card>

            {/* Contact Info */}
            <Card className="shadow-lg transition hover:shadow-xl">
              <CardHeader className="text-center pb-4">
                <h2 className="text-4xl font-bold mb-2">Contact Information</h2>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {/* Phone */}
                  <div className="flex items-center">
                    <Phone className="w-8 h-8 text-blue-600 mr-4" />
                    <div>
                      <h3 className="font-semibold text-xl">Phone</h3>
                      <p>
                        <a
                          href="tel:+14849427316"
                          className="text-blue-600 hover:underline"
                        >
                          (484) 942-7316
                        </a>
                      </p>
                    </div>
                  </div>
                  {/* Email */}
                  <div className="flex items-center">
                    <Mail className="w-8 h-8 text-blue-600 mr-4" />
                    <div>
                      <h3 className="font-semibold text-xl">Email</h3>
                      <p>
                        <a
                          href="mailto:info@vmpowerconstruction.com"
                          className="text-blue-600 hover:underline"
                        >
                          info@vmpowerconstruction.com
                        </a>
                      </p>
                    </div>
                  </div>
                  {/* Address */}
                  <div className="flex items-center">
                    <MapPin className="w-8 h-8 text-blue-600 mr-4" />
                    <div>
                      <h3 className="font-semibold text-xl">Address</h3>
                      <p>Whitehall, PA 18052, USA</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Google Maps Section */}
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold mb-8">Visit Our Location</h2>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3089.57182726212!2d-75.5003276846792!3d40.65459337933871!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c44123d8b0b4b9%3A0x1119fa111bbb141!2sWhitehall%2C%20PA%2018052%2C%20USA!5e0!3m2!1sen!2sus!4v1690737598719!5m2!1sen!2sus"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <FAQSection />
      </main>
      <Footer />
      <LiveChat />
    </div>
  );
}