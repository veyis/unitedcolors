import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

export default function GetQuotePage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-600 to-purple-600 text-white py-20">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-5xl font-extrabold mb-6 leading-tight">
              Get Your Free Quote
            </h1>
            <p className="text-lg md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
              Let United Color Painters bring your vision to life. Fill out the form below to receive a free quote for your next project.
            </p>
          </div>
        </section>

        {/* Quote Form Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto bg-gray-50 p-8 rounded-lg shadow-lg">
              <h2 className="text-3xl font-bold text-center mb-6">
                Request a Free Quote
              </h2>
              <form className="space-y-6">
                {/* Name Field */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-600 focus:ring focus:ring-blue-600 focus:ring-opacity-50"
                    placeholder="John Doe"
                  />
                </div>
                {/* Email Field */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-600 focus:ring focus:ring-blue-600 focus:ring-opacity-50"
                    placeholder="example@domain.com"
                  />
                </div>
                {/* Phone Field */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-600 focus:ring focus:ring-blue-600 focus:ring-opacity-50"
                    placeholder="(123) 456-7890"
                  />
                </div>
                {/* Service Type Dropdown */}
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700">
                    Type of Service
                  </label>
                  <select
                    id="service"
                    name="service"
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-600 focus:ring focus:ring-blue-600 focus:ring-opacity-50"
                  >
                    <option value="" disabled selected>
                      Select a Service
                    </option>
                    <option value="interior-painting">Interior Painting</option>
                    <option value="exterior-painting">Exterior Painting</option>
                    <option value="commercial-painting">Commercial Painting</option>
                    <option value="specialty-finishes">Specialty Finishes</option>
                  </select>
                </div>
                {/* Message Field */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                    Additional Details
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-600 focus:ring focus:ring-blue-600 focus:ring-opacity-50"
                    placeholder="Describe your project..."
                  ></textarea>
                </div>
                {/* Submit Button */}
                <div className="text-center">
                  <Button size="lg" className="w-full bg-blue-600 text-white hover:bg-blue-700">
                    Submit Request
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-6">
              Why Choose United Color Painters?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Professional Expertise",
                  description:
                    "Our team of experienced painters ensures the highest quality results.",
                },
                {
                  title: "Eco-Friendly Options",
                  description:
                    "We offer environmentally friendly paint options for sustainable projects.",
                },
                {
                  title: "Satisfaction Guaranteed",
                  description:
                    "We stand behind our work with a 100% satisfaction guarantee.",
                },
              ].map(({ title, description }, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  <CheckCircle className="h-10 w-10 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{title}</h3>
                  <p className="text-gray-600">{description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}


