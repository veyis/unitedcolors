import { Facebook, Instagram, LinkedinIcon as LinkedIn, Twitter } from 'lucide-react'

export function SocialLinks() {
  return (
    <div className="flex space-x-4">
      <a href="https://facebook.com/unitedcolorpainters" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
        <Facebook size={24} />
      </a>
      <a href="https://instagram.com/unitedcolorpainters" target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:text-pink-800">
        <Instagram size={24} />
      </a>
      <a href="https://linkedin.com/company/unitedcolorpainters" target="_blank" rel="noopener noreferrer" className="text-blue-800 hover:text-blue-900">
        <LinkedIn size={24} />
      </a>
      <a href="https://twitter.com/unitedcolorpainters" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-600">
        <Twitter size={24} />
      </a>
    </div>
  )
}

