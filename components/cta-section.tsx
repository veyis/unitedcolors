import { Button } from "@/components/ui/button";

export function CTASection() {
  return (
    <section className="relative py-20 bg-cover bg-center text-white overflow-hidden" style={{ backgroundImage: 'url(/images/cta-background.jpg)' }}>
      {/* Background Overlay with Decorative Shapes */}
      <div className="absolute inset-0">
        <div className="bg-gradient-to-t from-blue-800 via-transparent to-purple-700 opacity-60 h-full"></div>
     
      </div>
      
      <div className="relative z-10 container mx-auto px-6 text-center">
        <h2 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
          Transform Your Space with Our Expert Painting Services!
        </h2>
        <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
          Don't wait any longer to give your home or business the makeover it deserves. Contact us now for a free consultation and let our professionals bring your vision to life!
        </p>
        <Button
          size="lg"
          className="bg-yellow-500 text-white hover:bg-yellow-600 hover:shadow-xl text-lg px-10 py-5 font-semibold rounded-full transition-transform transform hover:scale-105 duration-300"
        >
          Get Your Free Quote Now
        </Button>
      </div>
    </section>
  );
}