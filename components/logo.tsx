import { Paintbrush } from 'lucide-react'

export function Logo() {
  return (
    <div className="flex items-center space-x-2">
      <Paintbrush className="h-8 w-8 text-blue-600" />
      <span className="text-xl font-bold text-gray-800">United<span className="text-blue-600">Colors</span></span>
    </div>
  )
}

