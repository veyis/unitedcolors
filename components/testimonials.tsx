import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Homeowner",
    content:
      "United Colors Painters transformed our home beautifully. Their attention to detail and professionalism were outstanding!",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "Business Owner",
    content:
      "I'm extremely satisfied with the commercial painting job. They worked efficiently, and the results are fantastic.",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    role: "Interior Designer",
    content:
      "As an interior designer, I have high standards. United Colors Painters exceeded my expectations in every way.",
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-100">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-12 bg-gradient-to-r from-red-600 to-black text-transparent bg-clip-text leading-tight">
          Hear from Our Happy Clients
        </h2>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="bg-gradient-to-b from-gray-50 to-white shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-3xl overflow-hidden border border-gray-200"
            >
              <CardContent className="p-6 md:p-8">
                {/* Star Rating */}
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-6 w-6 text-yellow-500 fill-current"
                    />
                  ))}
                </div>

                {/* Testimonial Content */}
                <blockquote className="text-gray-700 mb-6 italic leading-relaxed border-l-4 border-red-500 pl-4">
                  &ldquo;{testimonial.content}&rdquo;
                </blockquote>

                {/* Name and Role */}
                <div className="font-bold text-lg text-gray-800">
                  {testimonial.name}
                </div>
                <div className="text-sm text-gray-500">{testimonial.role}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}