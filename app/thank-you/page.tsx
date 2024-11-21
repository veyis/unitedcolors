import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { MarketingHeader } from '@/components/marketing-header'
import { Button } from "@/components/ui/button"
import Link from 'next/link'

export const metadata = {
  title: 'Thank You | United Color Painters',
  description: 'Thank you for contacting United Color Painters. We appreciate your interest in our professional painting services.',
}

export default function ThankYouPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <MarketingHeader />
      <Header />
      <main className="flex-grow flex items-center justify-center bg-gray-100">
        <div className="text-center p-8">
          <h1 className="text-4xl font-bold mb-4">Thank You!</h1>
          <p className="text-xl mb-8">We've received your message and will get back to you shortly.</p>
          <Button asChild>
            <Link href="/">Return to Home</Link>
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  )
}

