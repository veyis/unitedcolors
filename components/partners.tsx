'use client';

import React from 'react';
import Image from 'next/image';

const partners = [
  { name: "Sherwin-Williams", logo: "/images/partners/sherwin-williams.png", url: "https://www.sherwin-williams.com" },
  { name: "Behr Paint", logo: "/images/partners/behr.svg", url: "https://www.behr.com" },
  { name: "Benjamin Moore", logo: "/images/partners/benjamin-moore.png", url: "https://www.benjaminmoore.com" },
  { name: "Valspar", logo: "/images/partners/valspar.png", url: "https://www.valspar.com" },
  { name: "PPG Paints", logo: "/images/partners/ppg.png", url: "https://www.ppgpaints.com" },
  { name: "Dunn-Edwards", logo: "/images/partners/dunn-edwards.png", url: "https://www.dunnedwards.com" },
  { name: "Glidden", logo: "/images/partners/glidden.png", url: "https://www.glidden.com" },
  { name: "Olympic Paints", logo: "/images/partners/olympic.png", url: "https://www.olympic.com" },
  { name: "Farrow & Ball", logo: "/images/partners/farrow.png", url: "https://www.farrow-ball.com" },
  { name: "California Paints", logo: "/images/partners/california.png", url: "https://www.californiapaints.com" },

];

export default function Partners() {
  return (
    <div className="overflow-hidden bg-gray-100 py-8">
      <div className="relative flex space-x-8 animate-marquee">
        {/* Loop through partners and duplicate for seamless scrolling */}
        {[...partners, ...partners].map((partner, index) => (
          <a
            key={index}
            href={partner.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center"
          >
            <div className="relative h-16 w-36 mx-4">
              <Image
                src={partner.logo}
                alt={partner.name}
                layout="fill"
                objectFit="contain"
                className="grayscale hover:grayscale-0 transition-all"
              />
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

