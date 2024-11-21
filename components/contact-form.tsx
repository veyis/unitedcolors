'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Toast } from "@/components/ui/toast"

declare global {
  interface Window {
    gtag: (event: string, action: string, params: object) => void;
  }
}

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const router = useRouter()

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsSubmitting(true)

    const formData = new FormData(event.currentTarget)
    const response = await fetch('/api/contact', {
      method: 'POST',
      body: formData,
    })

    const data = await response.json()

    if (response.ok) {
      // Track form submission
      window.gtag('event', 'form_submission', {
        'event_category': 'Contact',
        'event_label': 'Contact Form'
      });

      Toast({
        title: "Success!",
        content: "Your message has been sent. We'll get back to you soon.",
      })
      router.push('/thank-you')
    } else {
      Toast({
        title: "Error",
        content: data.message || "An error occurred. Please try again.",
        variant: "destructive",
      })
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
        <Input id="name" name="name" type="text" placeholder="Your Name" required />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
        <Input id="email" name="email" type="email" placeholder="Your Email" required />
      </div>
      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
        <Input id="phone" name="phone" type="tel" placeholder="Your Phone Number" />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
        <Textarea id="message" name="message" placeholder="Your Message" rows={4} required />
      </div>
      <Button type="submit" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </Button>
    </form>
  )
}

