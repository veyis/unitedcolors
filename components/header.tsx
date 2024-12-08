'use client';

import * as React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuContent,
} from "@/components/ui/navigation-menu";
import { Logo } from "./logo";
import { Menu, X, Phone } from "lucide-react";

const services = [
  {
    title: "Interior Painting",
    href: "/services/interior-painting",
    description: "Transform your indoor spaces with our expert interior painting services.",
  },
  {
    title: "Exterior Painting",
    href: "/services/exterior-painting",
    description: "Enhance your property's curb appeal with our durable exterior painting solutions.",
  },
  {
    title: "Commercial Painting",
    href: "/services/commercial-painting",
    description: "Professional painting services for offices, retail spaces, and industrial facilities.",
  },
  {
    title: "Residential Painting",
    href: "/services/residential-painting",
    description: "Personalized painting solutions for homes of all sizes and styles.",
  },
  {
    title: "Specialty Finishes",
    href: "/services/specialty-finishes",
    description: "Unique textures and finishes to add character to your walls.",
  },
];

const blog = [
  {
    title: "Popular Paint Colors 2024",
    href: "/blog/popular-paint-colors-2024",
    description: "Discover the trending colors of 2024 to refresh your space with style.",
  },
  {
    title: "Prepare Home Exterior Painting",
    href: "/blog/prepare-home-exterior-painting",
    description: "Learn how to prepare your home for a flawless exterior paint job.",
  },
  {
    title: "Choosing the Right Paint Finish",
    href: "/blog/choosing-the-right-paint-finish",
    description: "Find out which paint finish is best for your walls, ceilings, and trim.",
  },
  {
    title: "Painting Safety Tips",
    href: "/blog/painting-safety-tips",
    description: "Stay safe during your next painting project with these essential tips.",
  },
  {
    title: "Painting vs. Wallpaper",
    href: "/blog/painting-vs-wallpaper",
    description: "Compare the pros and cons of painting and wallpaper to find the best fit for your space.",
  },
  {
    title: "How to Paint a Room",
    href: "/blog/how-to-paint-a-room",
    description: "Step-by-step guide to painting a room like a pro, from preparation to cleanup.",
  },
  {
    title: "Painting Mistakes to Avoid",
    href: "/blog/painting-mistakes-to-avoid",
    description: "Learn how to prevent common painting mistakes for a flawless finish every time.",
  },
  {
    title: "Choosing the Right Paint Color",
    href: "/blog/choosing-the-right-paint-color",
    description: "Expert tips for selecting the perfect paint color for your home or business.",
  },
  {
    title: "Painting Your Front Door",
    href: "/blog/painting-your-front-door",
    description: "Boost your curb appeal with a fresh coat of paint on your front door.",
  },
  {
    title: "Painting Your Kitchen Cabinets",
    href: "/blog/painting-your-kitchen-cabinets",
    description: "Transform your kitchen with a budget-friendly cabinet painting project.",
  },
  {
    title: "Painting Your Bathroom",
    href: "/blog/painting-your-bathroom",
    description: "Update your bathroom with a fresh coat of paint for a clean, modern look.",
  },
  {
    title: "Painting Your Bedroom",
    href: "/blog/painting-your-bedroom",
    description: "Create a relaxing retreat with the perfect paint color for your bedroom walls.",
  },
  {
    title: "Painting Your Living Room",
    href: "/blog/painting-your-living-room",
    description: "Refresh your living room with a new paint color to set the mood for relaxation.",
  },
  
];



const projects = [
  {
    title: "Residential Projects",
    href: "/projects/residential",
    description: "Explore our stunning transformations in residential painting and remodeling.",
  },
  {
    title: "Commercial Projects",
    href: "/projects/commercial",
    description: "See how we've enhanced offices, retail spaces, and more.",
  },
  {
    title: "Custom Designs",
    href: "/projects/custom-designs",
    description: "Dive into our unique, custom painting designs tailored to individual clients.",
  },
  {
    title: "Color Inspiration",
    href: "/projects/color-inspiration",
    description: "Get inspired by our color palettes and design ideas for your next project.",
  },
  {
    title: "Before & After",
    href: "/projects/before-after",
    description: "Witness the dramatic transformations of our painting projects.",
  },
  {
    title: "Specialty Finishes",
    href: "/projects/specialty-finishes",
    description: "Discover the artistry of our specialty finishes and textures.",
  },
  {
    title: "Exterior Makeovers",
    href: "/projects/exterior-makeovers",
    description: "See how we've transformed homes with our exterior painting services.",
  },
  {
    title: "Interior Renovations",
    href: "/projects/interior-renovations",
    description: "Explore our interior painting and remodeling projects for homes and businesses.",
  },
  {
    title: "Default Project",
    href: "/projects/default",
    description: "Default project description.",
  }
];

const company = [
  {
    title: "About Us",
    href: "/about",
    description: "Learn more about our company and our commitment to quality and customer satisfaction.",
  },
  {
    title: "Our Team",
    href: "/team",
    description: "Meet the talented professionals behind United Color Painters.",
  },
  {
    title: "Testimonials",
    href: "/testimonials",
    description: "Read what our satisfied customers have to say about their experience with us.",
  },
  {
    title: "Careers",
    href: "/careers",
    description: "Join our team of skilled painters and craftsmen dedicated to excellence.",
  },
  {
    title: "Contact Us",
    href: "/contact",
    description: "Get in touch with us to discuss your painting project or request a quote.",
  },

]

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="bg-white text-gray-800 shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Logo />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <NavigationMenu>
              <NavigationMenuList>
                {/* Services Dropdown */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="hover:text-red-600">
                    Services
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[300px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                      {services.map((service) => (
                        <li key={service.title}>
                          <NavigationMenuLink asChild>
                            <Link href={service.href} className="block py-2 text-sm hover:text-red-600">
                              <div className="font-semibold">{service.title}</div>
                              <p className="text-gray-600 text-sm">{service.description}</p>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                {/* Projects Dropdown */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="hover:text-red-600">
                    Projects
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[300px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                      {projects.map((project) => (
                        <li key={project.title}>
                          <NavigationMenuLink asChild>
                            <Link href={project.href ?? "/projects/default"} className="block py-2 text-sm hover:text-red-600">
                              <div className="font-semibold">{project.title}</div>
                              <p className="text-gray-600 text-sm">{project.description}</p>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                {/* Blog Dropdown */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="hover:text-red-600">
                    Blog
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[300px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                      {blog.map((post) => (
                        <li key={post.title}>
                          <NavigationMenuLink asChild>
                            <Link href={post.href} className="block py-2 text-sm hover:text-red-600">
                              <div className="font-semibold">{post.title}</div>
                              <p className="text-gray-600 text-sm">{post.description}</p>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                {/* Company Links */}
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="hover:text-red-600">
                    Company
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[300px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                      {company.map((company) => (
                        <li key={company.title}>
                          <NavigationMenuLink asChild>
                            <Link href={company.href ?? "/projects/default"} className="block py-2 text-sm hover:text-red-600">
                              <div className="font-semibold">{company.title}</div>
                              <p className="text-gray-600 text-sm">{company.description}</p>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            {/* Call Phone Button */}
            <Link href="tel:+14849427316" passHref>
              <Button variant="outline" size="icon" className="text-gray-800 hover:text-black">
                <Phone className="h-5 w-5" />
                <span className="sr-only">Call us</span>
              </Button>
            </Link>

            {/* Get a Quote Button */}
            <Link href="/getquote" passHref>
              <Button className="bg-gradient-to-r from-red-500 to-black text-white hover:from-black hover:to-red-500" size="sm">
                Get a Quote
              </Button>
            </Link>
          </div>

          {/* Mobile Navigation Toggle */}
          <div className="md:hidden">
            <Button variant="outline" size="icon" onClick={toggleMenu}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              <span className="sr-only">{isMenuOpen ? 'Close menu' : 'Open menu'}</span>
            </Button>
          </div>
        </div>
      </div>

   {/* Mobile Menu */}
{isMenuOpen && (
  <nav className="md:hidden container mx-auto px-4 py-4">
    <ul className="space-y-4">
      {/* Services Menu */}
      <li>
        <button
          onClick={() => setIsMenuOpen(false)}
          className="flex items-center justify-between w-full text-left"
          aria-expanded={isMenuOpen}
        >
          <span>Services</span>
          <span className="text-sm" aria-hidden="true">▼</span>
        </button>
        <ul className="mt-2 ml-4 space-y-2">
          {services.map((service) => (
            <li key={service.title}>
              <Link
                href={service.href}
                className="block py-2 text-sm hover:text-red-600"
              >
                {service.title}
              </Link>
            </li>
          ))}
        </ul>
      </li>

      {/* Blog Menu */}
      <li>
        <button
          onClick={() => setIsMenuOpen(false)}
          className="flex items-center justify-between w-full text-left"
          aria-expanded={isMenuOpen}
        >
          <span>Blog</span>
          <span className="text-sm" aria-hidden="true">▼</span>
        </button>
        <ul className="mt-2 ml-4 space-y-2">
          {blog.map((post) => (
            <li key={post.title}>
              <Link
                href={post.href}
                className="block py-2 text-sm hover:text-red-600"
              >
                {post.title}
              </Link>
            </li>
          ))}
        </ul>
      </li>

      {/* Projects Menu */}
      <li>
        <button
          onClick={() => setIsMenuOpen(false)}
          className="flex items-center justify-between w-full text-left"
          aria-expanded={isMenuOpen}
        >
          <span>Projects</span>
          <span className="text-sm" aria-hidden="true">▼</span>
        </button>
        <ul className="mt-2 ml-4 space-y-2">
          {projects.map((project) => (
            <li key={project.title}>
              <Link
                href={project.href}
                className="block py-2 text-sm hover:text-red-600"
              >
                {project.title}
              </Link>
            </li>
          ))}
        </ul>
      </li>

      {/* Call Now Button */}
      <li>
        <Link
          href="tel:+14849427316"
          className="block w-full bg-gradient-to-r from-red-500 to-black text-white text-center py-2 rounded hover:from-black hover:to-red-500"
        >
          <div className="flex items-center justify-center space-x-2">
            <Phone className="h-5 w-5" />
            <span>Call Now</span>
          </div>
        </Link>
      </li>

      {/* Get a Quote Button */}
      <li>
        <Link
          href="/getquote"
          className="block w-full bg-gradient-to-r from-red-500 to-black text-white text-center py-2 rounded hover:from-black hover:to-red-500"
        >
          Get a Quote
        </Link>
      </li>
    </ul>
  </nav>
)}
    </header>
  );
}

export default Header;