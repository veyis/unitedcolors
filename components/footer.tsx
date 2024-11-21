import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">United Colors Painters</h3>
            <p className="text-sm leading-relaxed">
              Transforming spaces with professional painting services across PA, NJ, and NY. Quality craftsmanship you can trust.
            </p>
          </div>

          {/* Services Section */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-2">
              {[
                { name: 'Interior Painting', href: '/services/interior-painting' },
                { name: 'Exterior Painting', href: '/services/exterior-painting' },
                { name: 'Specialty Finishes', href: '/services/specialty-finishes' },
                { name: 'Commercial Painting', href: '/services/commercial-painting' },
              ].map((service) => (
                <li key={service.name}>
                  <Link href={service.href} className="hover:text-white transition-colors">
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contact Us</h4>
            <ul className="space-y-2">
              <li>
                <Link href="tel:1234567890" className="hover:text-white transition-colors">
                  Phone: (123) 456-7890
                </Link>
              </li>
              <li>
                <Link href="mailto:info@unitedcolorspainters.com" className="hover:text-white transition-colors">
                  Email: info@unitedcolorspainters.com
                </Link>
              </li>
              <li>
                <p>123 Main Street, City, PA 12345</p>
              </li>
            </ul>
          </div>

          {/* Social Media Section */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              {[
                {
                  name: 'Facebook',
                  href: 'https://facebook.com',
                  icon: (
                    <svg
                      className="h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.992 3.657 9.128 8.438 9.879v-6.988h-2.54v-2.891h2.54V9.796c0-2.508 1.492-3.891 3.777-3.891 1.094 0 2.238.195 2.238.195v2.46h-1.261c-1.243 0-1.631.771-1.631 1.561v1.875h2.773l-.443 2.891h-2.33v6.988C18.343 21.128 22 16.992 22 12z" />
                    </svg>
                  ),
                },
                {
                  name: 'Instagram',
                  href: 'https://instagram.com',
                  icon: (
                    <svg
                      className="h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.333 3.608 1.308.975.975 1.246 2.242 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.333 2.633-1.308 3.608-.975.975-2.242 1.246-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.333-3.608-1.308-.975-.975-1.246-2.242-1.308-3.608C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.85c.062-1.366.333-2.633 1.308-3.608C4.516 2.496 5.783 2.225 7.149 2.163 8.415 2.105 8.795 2.163 12 2.163zm0-2.163C8.694 0 8.293.01 7.052.067 5.633.124 4.298.38 3.05 1.628 1.802 2.876 1.546 4.21 1.489 5.628.432 7.852.422 8.254.422 12s.01 4.148.067 5.628c.057 1.418.313 2.752 1.561 4 1.248 1.248 2.582 1.504 4 1.561C8.294 23.99 8.694 24 12 24s3.706-.01 5.628-.067c1.418-.057 2.752-.313 4-1.561 1.248-1.248 1.504-2.582 1.561-4 .057-1.418.067-1.819.067-5.628s-.01-3.706-.067-5.628c-.057-1.418-.313-2.752-1.561-4-1.248-1.248-2.582-1.504-4-1.561C15.706.01 15.306 0 12 0z" />
                      <path d="M12 5.838c-3.405 0-6.162 2.757-6.162 6.162s2.757 6.162 6.162 6.162 6.162-2.757 6.162-6.162-2.757-6.162-6.162-6.162zm0 10.324c-2.295 0-4.162-1.867-4.162-4.162s1.867-4.162 4.162-4.162 4.162 1.867 4.162 4.162-1.867 4.162-4.162 4.162zM18.406 4.594a1.44 1.44 0 1 1-2.88 0 1.44 1.44 0 1 1 2.88 0z" />
                    </svg>
                  ),
                },
                {
                  name: 'LinkedIn',
                  href: 'https://linkedin.com',
                  icon: (
                    <svg
                      className="h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M4.983 3C3.339 3 2 4.343 2 5.95c0 1.582 1.314 2.95 2.862 2.95h.02C6.625 8.9 8 7.532 8 5.95 8 4.343 6.674 3 4.984 3zM.328 21.99h9.315V7.982H.328v14.01zM18.022 7.338c-2.642 0-3.912 1.45-4.574 2.474V7.983h-9.317v14.011h9.317v-7.83c0-.413.031-.827.156-1.122.313-.75 1.026-1.528 2.219-1.528 1.567 0 2.193 1.156 2.193 2.85v7.63h9.316v-8.184c0-5.185-2.75-7.606-6.31-7.606z" />
                    </svg>
                  ),
                },
              ].map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-700 hover:bg-gray-600 rounded-full transition-colors"
                  aria-label={social.name}
                >
                  {social.icon}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 text-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} United Colors Painters. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}