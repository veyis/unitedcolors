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
      "I'm extremely satisfied with the commercial painting job. They worked efficiently and the results are fantastic.",
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
    <section className="py-20 bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-5xl md:text-6xl font-extrabold text-center text-gray-800 mb-16 leading-tight">
          Hear from Our Happy Clients
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-2xl overflow-hidden border border-gray-200"
            >
              <CardContent className="p-8">
                {/* Star Rating */}
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-6 w-6 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                {/* Testimonial Content */}
                <blockquote className="text-gray-700 mb-6 italic leading-relaxed border-l-4 border-blue-600 pl-4">
                  "{testimonial.content}"
                </blockquote>
                {/* Name and Role */}
                <div className="font-bold text-lg text-gray-900">
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