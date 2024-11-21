export function Services() {
    const services = [
        {
            title: "Interior Painting",
            href: "/services/interior-painting",
            description: "Transform your indoor spaces with our expert interior painting services."
        },
        {
            title: "Exterior Painting",
            href: "/services/exterior-painting",
            description: "Enhance your property's curb appeal with our durable exterior painting solutions."
        },
        {
            title: "Commercial Painting",
            href: "/services/commercial-painting",
            description: "Professional painting services for offices, retail spaces, and industrial facilities."
        },
        {
            title: "Residential Painting",
            href: "/services/residential-painting",
            description: "Personalized painting solutions for homes of all sizes and styles."
        },
        {
            title: "Specialty Finishes",
            href: "/services/specialty-finishes",
            description: "Unique textures and finishes to add character to your walls."
        },
        {
            title: "Color Consultation",
            href: "/services/color-consultation",
            description: "Expert advice to help you choose the perfect colors for your space."
        },
        {
            title: "Cabinet Refinishing",
            href: "/services/cabinet-refinishing",
            description: "Revitalize your kitchen or bathroom with our cabinet refinishing services."
        },
        {
            title: "Deck Staining",
            href: "/services/deck-staining",
            description: "Protect and beautify your deck with our professional staining services."
        },
        {
            title: "Power Washing",
            href: "/services/power-washing",
            description: "Remove dirt, grime, and mildew from your property with our power washing services."
        },
        {
            title: "Drywall Repair",
            href: "/services/drywall-repair",
            description: "Seamless repairs for damaged drywall, including holes, cracks, and water damage."
        },
        {
            title: "Wallpaper Removal",
            href: "/services/wallpaper-removal",
            description: "Efficient removal of old wallpaper to prepare your walls for a fresh coat of paint."
        },
        {
            title: "Popcorn Ceiling Removal",
            href: "/services/popcorn-ceiling-removal",
            description: "Update your ceilings with our professional popcorn ceiling removal services."
        },
        {
            title: "Epoxy Flooring",
            href: "/services/epoxy-flooring",
            description: "Durable and stylish flooring solutions for garages, basements, and commercial spaces."
        },
        {
            title: "Stucco Repair",
            href: "/services/stucco-repair",
            description: "Restore the beauty and integrity of your stucco surfaces with our repair services."
        },
        {
            title: "Lead Paint Removal",
            href: "/services/lead-paint-removal",
            description: "Safe and effective removal of lead-based paint from residential and commercial properties."
        },
        {
            title: "Mold Remediation",
            href: "/services/mold-remediation",
            description: "Professional mold removal and remediation services to protect your property and health."
        },
        {
            title: "Water Damage Repair",
            href: "/services/water-damage-repair",
            description: "Comprehensive repair and restoration services for water-damaged properties."
        }
    ];
    
    return (
      <section className="relative py-24 bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute inset-0">
          <div className="w-96 h-96 bg-gradient-to-br from-blue-200 to-purple-200 rounded-full blur-3xl opacity-50 absolute -top-20 -left-20"></div>
          <div className="w-80 h-80 bg-gradient-to-bl from-blue-300 to-purple-300 rounded-full blur-3xl opacity-30 absolute bottom-0 right-0"></div>
        </div>
  
        <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-5xl md:text-6xl font-extrabold text-center text-gray-800 mb-16 leading-tight">
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {services.map((service) => (
              <a
                key={service.title}
                href={service.href}
                className="group block bg-white shadow-xl rounded-3xl overflow-hidden hover:shadow-2xl transition-shadow duration-300"
              >
                <div className="relative p-8 h-full flex flex-col justify-between">
                  {/* Gradient Line and Icon Area */}
                  <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-500 to-purple-600"></div>
                  <div>
                    <h3 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-800 text-transparent bg-clip-text mb-6">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 group-hover:text-gray-800 leading-relaxed transition-colors duration-300">
                      {service.description}
                    </p>
                  </div>
                  <span className="mt-6 inline-block text-blue-600 font-semibold group-hover:underline transition-all duration-300">
                    Learn More →
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    );
  }