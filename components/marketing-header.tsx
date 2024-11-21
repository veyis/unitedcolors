import { AlertCircle } from 'lucide-react'
import Link from 'next/link'

export function MarketingHeader() {
  return (
    <div className="bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 text-white py-1">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center">
          <AlertCircle className="h-4 w-4 mr-2 flex-shrink-0" />
          <p className="text-sm font-medium truncate">
            <span className="font-bold mr-1">Limited Time Offer:</span>
            <span className="hidden sm:inline">Get 20% off!</span>
            <Link href="/offer" className="underline ml-1 whitespace-nowrap">
              Book now
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

