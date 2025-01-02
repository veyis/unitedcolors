
import Image from 'next/image'

export function Logo() {
  return (
    <div className="flex items-end">
    
    <Image 
       src="/logo/l3.png" alt="United Colors Painters Logo" 
       width={42} 
       height={42}
     
      
       />
    
    <div className="text-container ml-4">
      <span className="text-united text-2xl sm:text-2xl font-bold text-gray-800">United</span>
      <span className="text-colors text-2xl sm:text-2xl font-normal text-red-600">Colors</span>
    </div>
  </div>

  )
}

