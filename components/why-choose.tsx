import { Star, Brush, House } from "lucide-react";

export function WhyChooseUs() {
  return (
    <section className="relative bg-gradient-to-b from-gray-50 to-gray-100 py-24 overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="bg-gradient-to-tr from-blue-200 to-transparent opacity-40 rounded-full w-[400px] h-[400px] absolute top-10 left-10 animate-pulse"></div>
        <div className="bg-gradient-to-bl from-purple-200 to-transparent opacity-40 rounded-full w-[300px] h-[300px] absolute bottom-20 right-10 animate-pulse"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-center text-gray-800 mb-16 leading-tight bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
          Why Choose United Colors Painters?
        </h2>

        {/* Features */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {[
            {
              title: "Quality Guaranteed",
              icon: <Star className="w-16 h-16 text-blue-600" />,
              description:
                "We stand behind our work with a 100% satisfaction guarantee, ensuring excellence every time.",
            },
            {
              title: "Expert Painters",
              icon: <Brush className="w-16 h-16 text-blue-600" />,
              description:
                "Our team consists of highly skilled professionals with years of experience in painting.",
            },
            {
              title: "Comprehensive Services",
              icon: <House className="w-16 h-16 text-blue-600" />,
              description:
                "From residential to commercial projects, we handle all your painting needs with precision.",
            },
          ].map(({ title, icon, description }) => (
            <div
              key={title}
              className="flex flex-col items-center text-center bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105 duration-300"
            >
              <div className="bg-gradient-to-r from-blue-100 to-purple-100 p-5 rounded-full shadow-md">
                {icon}
              </div>
              <h3 className="text-2xl font-bold mt-6 text-gray-800">
                {title}
              </h3>
              <p className="text-gray-600 mt-4 leading-relaxed">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}