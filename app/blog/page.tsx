import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { StructuredData } from '@/components/structured-data'
import { MarketingHeader } from '@/components/marketing-header'
import Link from 'next/link'
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight } from 'lucide-react'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Painting Tips & Trends | United Color Painters Blog',
  description: 'Discover the latest painting tips, color trends, and home improvement ideas from the experts at United Color Painters.',
  openGraph: {
    title: 'Painting Tips & Trends | United Color Painters Blog',
    description: 'Discover the latest painting tips, color trends, and home improvement ideas from the experts at United Color Painters.',
  },
}

const blogPosts = [
  {
    title: "10 Popular Paint Colors for 2024",
    slug: "popular-paint-colors-2024",
    excerpt: "Discover the hottest paint colors trending in 2024 and how to incorporate them into your home.",
    date: "2024-01-15",
  },
  {
    title: "How to Prepare Your Home for Exterior Painting",
    slug: "prepare-home-exterior-painting",
    excerpt: "Learn the essential steps to prepare your home's exterior for a fresh coat of paint.",
    date: "2024-02-01",
  },
  {
    title: "The Benefits of Hiring Professional Painters",
    slug: "benefits-hiring-professional-painters",
    excerpt: "Find out why hiring professional painters can save you time, money, and ensure better results.",
    date: "2024-02-15",
  },
  {
    title: "Color Psychology: Choosing the Right Colors for Your Space",
    slug: "color-psychology-choosing-right-colors",
    excerpt: "Understand how different colors can affect mood and atmosphere in your home or office.",
    date: "2024-03-01",
  },
]

export default function BlogIndex() {
  return (
    <div className="flex flex-col min-h-screen">
      <StructuredData />
      <MarketingHeader />
      <Header />
      <main className="flex-grow">
        <section className="bg-gradient-to-br from-blue-600 to-purple-600 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Painting Tips & Trends</h1>
            <p className="text-xl mb-8 max-w-2xl mx-auto">Expert advice and inspiration for your next painting project</p>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <Card key={post.slug} className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <h2 className="text-2xl font-bold mb-2">{post.title}</h2>
                    <p className="text-gray-600 mb-4">{post.excerpt}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-500">{post.date}</span>
                      <Link href={`/blog/${post.slug}`} className="text-blue-600 hover:underline inline-flex items-center">
                        Read more <ArrowRight className="ml-1 h-4 w-4" />
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

