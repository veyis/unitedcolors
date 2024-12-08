'use client'
import { Typewriter } from "react-simple-typewriter";

export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-red-900 to-red-500 text-white overflow-hidden">
      {/* Hero Content */}
      <div className="relative z-20 text-center py-1 md:py-2 container mx-auto px-4">
        <h1 className="text-2xl md:text-3xl font-extrabold mb- leading-tight">
          <span>United Colors Painters</span>
        </h1>
        <p className="text-lg md:text-xl mb-0 max-w-2xl mx-auto leading-relaxed">
          <span>Your trusted partner,  </span>
          <span className="text-gray-100 text-xl md:text-2xl">
            <Typewriter
              words={[
                "Residential Painting",
                "Commercial Excellence",
                "Specialty Finishes",
                "in PA, NJ, and NY",
              ]}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </span>
          </p>
   
      </div>
    </section>
  );
}