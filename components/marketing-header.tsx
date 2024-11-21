import { AlertCircle } from 'lucide-react'
import Link from 'next/link'

export function MarketingHeader() {
  return (
    // <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700">
<div className="bg-black  hover:to-slate-700 text-white">
      <div className="container mx-auto px-6 py-1">
        <div className="flex items-center justify-center">
          <AlertCircle className="h-4 w-4 mr-2 flex-shrink-0" />
          <p className="text-sm font-medium truncate">
            <span className="font-bold mr-1">Limited Time Offer:</span>
            <span className="hidden sm:inline">Get 20% off</span>
            <Link href="/getquote" className="underline ml-1 whitespace-nowrap">
              Book now
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

