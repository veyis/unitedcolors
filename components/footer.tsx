import Link from "next/link";
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* About Section */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">United Color Painters</h3>
          <p className="text-sm">
            Transforming spaces across PA, NJ, and NY with expert painting and remodeling services. Your vision, our craftsmanship.
          </p>
          <div className="flex space-x-4 mt-6">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="text-gray-400 hover:text-white transition"
            >
              <Facebook className="w-6 h-6" />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-gray-400 hover:text-white transition"
            >
              <Instagram className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-gray-400 hover:text-white transition"
            >
              <Linkedin className="w-6 h-6" />
            </a>
          </div>
        </div>

        {/* Contact Section */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
          <div className="flex items-center mb-4">
            <Phone className="w-5 h-5 text-blue-500 mr-3" />
            <a href="tel:+14849427316" className="text-sm hover:text-white transition">
              (484) 942-7316
            </a>
          </div>
          <div className="flex items-center mb-4">
            <Mail className="w-5 h-5 text-blue-500 mr-3" />
            <a
              href="mailto:info@vmpowerconstruction.com"
              className="text-sm hover:text-white transition"
            >
              info@vmpowerconstruction.com
            </a>
          </div>
          <div className="flex items-center">
            <MapPin className="w-5 h-5 text-blue-500 mr-3" />
            <p className="text-sm">Whitehall, PA 18052, USA</p>
          </div>
        </div>

        {/* Quick Links Section */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-3">
            <li>
              <Link href="/about" className="text-sm hover:text-white transition">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/services" className="text-sm hover:text-white transition">
                Our Services
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-sm hover:text-white transition">
                Contact Us
              </Link>
            </li>
            <li>
              <Link href="/getquote" className="text-sm hover:text-white transition">
                Get a Quote
              </Link>
            </li>
          </ul>
        </div>

       
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-12 pt-6">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-sm">
          <p className="mb-4 md:mb-0">© {new Date().getFullYear()} United Color Painters. All rights reserved.</p>
          <p>
            Built with <span className="text-red-500">&hearts;</span> by{" "}
            <a href="https://pxl`.com" target="_blank" className="text-blue-500 hover:underline">
              pxlpeak
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}