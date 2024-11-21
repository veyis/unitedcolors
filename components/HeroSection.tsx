'use client'
import { Typewriter } from "react-simple-typewriter";

export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-blue-600 to-purple-800 text-white overflow-hidden">
      {/* Hero Content */}
      <div className="relative z-20 text-center py-4 md:py-8 container mx-auto px-6">
        <h1 className="text-5xl md:text-7xl font-extrabold mb- leading-tight">
          <span>United Colors Painters</span>
        </h1>
        <p className="text-lg md:text-2xl mb-0 max-w-3xl mx-auto leading-relaxed">
          <span>We specialize in </span>
          <span className="text-yellow-300 text-2xl md:text-4xl">
            <Typewriter
              words={[
                "Residential Painting",
                "Commercial Excellence",
                "Specialty Finishes",
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