import { Star, Brush, House } from "lucide-react";

export function WhyChooseUs() {
  return (
    <section className="relative bg-gradient-to-b from-white to-gray-100 py-24 overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="bg-gradient-to-tr from-red-200 to-transparent opacity-40 rounded-full w-[400px] h-[400px] absolute top-10 left-10 animate-pulse"></div>
        <div className="bg-gradient-to-bl from-red-300 to-transparent opacity-40 rounded-full w-[300px] h-[300px] absolute bottom-20 right-10 animate-pulse"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-16 leading-tight bg-gradient-to-r from-black to-red-600 text-transparent bg-clip-text">
          Why Choose United Colors Painters?
        </h2>

        {/* Features */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {[
            {
              title: "Unmatched Quality",
              icon: <Star className="w-16 h-16 text-white" />,
              description:
                "We don't just paint walls—we transform spaces. Our commitment to top-tier materials and precision ensures stunning results every time.",
            },
            {
              title: "Skilled Professionals",
              icon: <Brush className="w-16 h-16 text-white" />,
              description:
                "Our painters are artisans. With years of expertise, they bring your vision to life with flawless execution and attention to detail.",
            },
            {
              title: "Tailored Solutions",
              icon: <House className="w-16 h-16 text-white" />,
              description:
                "Every project is unique. From homes to businesses, we provide customized painting solutions designed to meet your exact needs.",
            },
          ].map(({ title, icon, description }) => (
            <div
              key={title}
              className="flex flex-col items-center text-center bg-gradient-to-b from-white to-gray-50 p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105 duration-300"
            >
              <div className="bg-gradient-to-br from-red-400 to-red-600 p-5 rounded-full shadow-md">
                {icon}
              </div>
              <h3 className="text-2xl font-bold mt-6 text text-black">
                {title}
              </h3>
              <p className="text-gray-700 mt-4 leading-relaxed">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}