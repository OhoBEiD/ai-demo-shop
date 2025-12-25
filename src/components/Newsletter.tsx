'use client'

import { useState } from 'react'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setIsSubmitted(true)
      setEmail('')
      setTimeout(() => setIsSubmitted(false), 3000)
    }
  }

  return (
    <section className="bg-gradient-to-r from-orange-500 to-orange-600 text-white py-16">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold mb-4">Subscribe to Our Newsletter</h2>
        <p className="text-xl text-orange-100 mb-8">
          Get exclusive deals, new product launches, and special offers delivered to your inbox.
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
            required
          />
          <button
            type="submit"
            className="px-8 py-3 bg-white text-orange-600 rounded-lg font-bold hover:bg-orange-50 transition whitespace-nowrap"
          >
            {isSubmitted ? '✓ Subscribed' : 'Subscribe'}
          </button>
        </form>
        {isSubmitted && (
          <p className="text-orange-100 mt-4">Thank you for subscribing! Check your email for a special offer.</p>
        )}
      </div>
    </section>
  )
}