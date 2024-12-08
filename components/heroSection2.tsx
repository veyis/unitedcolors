import { Button } from "@/components/ui/button";
import { Phone } from 'lucide-react';
import Link from 'next/link';



export default function HeroSection2() {
  return (
    <section className="relative bg-gradient-to-br from-blue-600 to-purple-800 text-white overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/hero-video2.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Floating Decorative Elements */}
      {/* <div className="absolute -top-10 -left-20 w-96 h-96 bg-gradient-to-br from-blue-400 to-purple-600 opacity-40 rounded-full blur-[120px]"></div> */}
      {/* <div className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-tr from-blue-300 to-purple-500 opacity-30 rounded-full blur-[100px]"></div> */}

      {/* Hero Content */}
      <div className="relative z-10 text-center py-28 md:py-40 container mx-auto px-6">
        {/* <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight bg-blue-800 bg-opacity-0 text-red-950 rounded-md px-4 py-2 inline-block shadow-lg">
          United Colors Painters
        </h1> */}
        <div className="relative z-20 mt-6">
          
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
        <br />
          {/* <p className="text-lg md:text-2xl max-w-3xl mx-auto leading-relaxed text-white bg-slate-800 bg-opacity-40 p-6 rounded-xl shadow-md">
            Your trusted partner for residential, commercial, and specialty painting services in PA, NJ, and NY.
          </p> */}
        </div>

        {/* Call-to-Action Buttons */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mt-8">
          
          <Link href="/getquote">
          <Button
            size="lg"
            className="bg-white text-gray-600 hover:bg-blue-50 px-8 py-4 font-semibold rounded-lg shadow-xl hover:scale-105 transition-transform duration-300"
          >
            Get a Free Quote
          </Button>
          </Link>
          
          <Link href="tel:+19427316
">
          <Button
            size="lg"
            variant="outline"
            className="bg-transparent border-white text-white hover:bg-white hover:text-red-600 px-8 py-4 font-semibold rounded-lg shadow-xl hover:scale-105 transition-transform duration-300"
          >
            <Phone className="mr-2 h-6 w-6" />
            Call Us Now
          </Button>
          </Link>
   
      
        </div>
      </div>

      {/* Decorative Border at Bottom */}
      {/* <div className="absolute bottom-0 left-0 w-full h-10 bg-gradient-to-t from-purple-800 to-transparent"></div> */}
    </section>
  );
}

