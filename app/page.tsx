import  Header  from '@/components/header';
import { Footer } from '@/components/footer';
import { StructuredData } from '@/components/structured-data';

import { MarketingHeader } from '@/components/marketing-header';

import { Testimonials } from '@/components/testimonials';
import { CTASection } from '@/components/cta-section';
import { WhyChooseUs } from '@/components/why-choose';
import {Services } from '@/components/our-services';
import { HeroSection } from '@/components/HeroSection';
import HeroSection2 from '@/components/heroSection2';
import Partners from '@/components/partners';

export const metadata = {
  title: 'United Colors Painters | Expert Painting Services in PA, NJ, NY',
  description: 'Transform your space with United Colors Painters. Professional residential and commercial painting services in PA, NJ, and NY. Get a free quote today!',
};


export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <StructuredData page="home" />
      <MarketingHeader />
      <Header />
      <main className="flex-grow">
    
        {/* <HeroSection/> */}
      <HeroSection2/>
    <HeroSection/>
    


        {/* Services Section */}
        <Services />

        {/* Why Choose Us Section */}
        <WhyChooseUs />

        {/* Testimonials Section */}
        <Testimonials />

        {/* CTA Section */}
        <CTASection />
        <Partners />
      </main>
      <Footer />
    </div>
  );
}