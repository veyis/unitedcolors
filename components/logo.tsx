import { Paintbrush } from 'lucide-react'
import Image from 'next/image'

export function Logo() {
  return (
    <div className="flex items-end">
    
    <Image 
       src="/logo/logo4.svg" alt="United Colors Painters Logo" 
       width={70} 
       height={50}
      
       />
    
    <div className="text-container ml-2 -m-1">
      <span className="text-united text-lg sm:text-xl font-bold text-gray-800">United</span>
      <span className="text-colors text-lg sm:text-xl font-normal text-red-600">Colors</span>
    </div>
  </div>

  )
}

