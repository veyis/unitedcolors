'use client'

import * as React from "react"
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuContent,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils"
import { Logo } from "./logo"
import { Menu, X } from 'lucide-react'

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

]

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <header className="bg-white text-gray-800 shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-2">
            <Logo />
          </Link>
          <div className="hidden md:flex items-center space-x-4">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Services</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                      {services.map((service) => (
                        <ListItem
                          key={service.title}
                          title={service.title}
                          href={service.href}
                        >
                          {service.description}
                        </ListItem>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/about" legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                      About
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/contact" legacyBehavior passHref>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                      Contact
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            <Button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700" size="sm">
              Get a Quote
            </Button>
          </div>
          <div className="md:hidden">
            <Button variant="ghost" size="icon"  onClick={toggleMenu}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden">
          <nav className="container mx-auto px-4 py-4">
            <ul className="space-y-4">
              <li>
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center justify-between w-full text-left"
                >
                  <span>Services</span>
                  <span className="text-sm">▼</span>
                </button>
                <ul className="mt-2 ml-4 space-y-2">
                  {services.map((service) => (
                    <li key={service.title}>
                      <Link href={service.href} className="block py-2 text-sm hover:text-blue-600" onClick={() => setIsMenuOpen(false)}>
                        {service.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
              <li>
                <Link href="/about" className="block py-2 hover:text-blue-600" onClick={() => setIsMenuOpen(false)}>
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="block py-2 hover:text-blue-600" onClick={() => setIsMenuOpen(false)}>
                  Contact
                </Link>
              </li>
              <li>
                <Button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700" size="sm">
                  Get a Quote
                </Button>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"

