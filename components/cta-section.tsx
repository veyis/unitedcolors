import { Button } from "@/components/ui/button";

export function CTASection() {
  return (
    <section className="relative py-20 bg-gradient-to-r from-red-600 to-black text-white overflow-hidden">
      {/* Background Overlay with Decorative Shapes */}
      <div className="absolute inset-0">
        <div className="bg-gradient-to-t from-red-700 via-transparent to-red-800 opacity-70 h-full"></div>
        <div className="absolute -top-10 -right-10 w-[300px] h-[300px] bg-gradient-to-br from-white/20 to-white/10 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute bottom-10 left-10 w-[200px] h-[200px] bg-gradient-to-tl from-white/20 to-white/10 rounded-full blur-3xl opacity-50"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-extrabold mb-6 leading-tight bg-gradient-to-r from-blue-100 to-white text-transparent bg-clip-text">
          Ready to Transform Your Space?
        </h2>

        {/* Subtext */}
        <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed text-white/90">
          Contact us today for a free consultation and quote. Let us bring your vision to life with expert painting services that exceed expectations!
        </p>

        {/* Call-to-Action Button */}
        <Button
          size="lg"
          className="bg-white text-black hover:bg-blue-100 hover:shadow-xl text-lg px-8 py-4 font-semibold rounded-lg transition-all duration-300"
        >
          Get Your Free Quote
        </Button>
      </div>
    </section>
  );
}