import { Button } from "@/components/ui/button";

export function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
          Ready to Transform Your Space?
        </h2>
        <p className="text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
          Contact us today for a free consultation and quote. Let us bring your vision to life with expert painting services!
        </p>
        <Button
          size="lg"
          className="bg-white text-blue-600 hover:bg-blue-100 hover:shadow-lg text-lg px-8 py-4 font-semibold rounded-lg transition-all duration-300"
        >
          Get Your Free Quote
        </Button>
      </div>
    </section>
  );
}