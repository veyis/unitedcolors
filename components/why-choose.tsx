import { Star, Brush, House } from "lucide-react";

export function WhyChooseUs() {
  return (
    <section className="bg-gradient-to-b from-gray-50 to-gray-100 py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-5xl font-extrabold text-center text-gray-800 mb-16 leading-tight">
          Why Choose United Colors Painters?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {[
            {
              title: "Quality Guaranteed",
              icon: <Star className="w-14 h-14 text-blue-600" />,
              description:
                "We stand behind our work with a 100% satisfaction guarantee, ensuring excellence every time.",
            },
            {
              title: "Expert Painters",
              icon: <Brush className="w-14 h-14 text-blue-600" />,
              description:
                "Our team consists of highly skilled professionals with years of experience in painting.",
            },
            {
              title: "Comprehensive Services",
              icon: <House className="w-14 h-14 text-blue-600" />,
              description:
                "From residential to commercial projects, we handle all your painting needs with precision.",
            },
          ].map(({ title, icon, description }) => (
            <div
              key={title}
              className="flex flex-col items-center text-center bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="bg-blue-100 p-4 rounded-full">{icon}</div>
              <h3 className="text-2xl font-bold mt-6 text-gray-800">
                {title}
              </h3>
              <p className="text-gray-600 mt-4 leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}