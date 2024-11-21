'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { MessageCircle, X } from 'lucide-react'

export function LiveChat() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleChat = () => setIsOpen(!isOpen)

  return (
    <>
      <Button
        onClick={toggleChat}
        className="fixed bottom-4 right-4 rounded-full p-4 bg-blue-600 hover:bg-blue-700 text-white"
      >
        <MessageCircle size={24} />
      </Button>
      {isOpen && (
        <div className="fixed bottom-20 right-4 w-80 h-96 bg-white rounded-lg shadow-lg overflow-hidden flex flex-col">
          <div className="bg-blue-600 text-white p-4 flex justify-between items-center">
            <h3 className="font-bold">Live Chat</h3>
            <Button variant="ghost" size="icon" onClick={toggleChat}>
              <X size={24} />
            </Button>
          </div>
          <div className="flex-grow p-4 overflow-y-auto">
            {/* Chat messages would go here */}
            <p className="text-gray-500 text-center">Chat functionality not implemented in this demo.</p>
          </div>
          <div className="p-4 border-t">
            <Input placeholder="Type your message..." disabled />
          </div>
        </div>
      )}
    </>
  )
}

