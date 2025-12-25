'use client'

import { useRouter } from 'next/navigation'

export default function HeroSection() {
  const router = useRouter()

  const handleShopNow = () => {
    router.push('/products')
  }

  const handleLearnMore = () => {
    const featuresSection = document.getElementById('features')
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <section className="bg-gradient-to-r from-orange-500 to-orange-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Premium Products for Your Lifestyle
          </h1>
          <p className="text-xl text-orange-100 mb-8">
            Discover our curated collection of high-quality products at unbeatable prices.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              onClick={handleShopNow}
              className="bg-white text-orange-600 px-8 py-3 rounded-lg font-bold hover:bg-orange-50 transition"
            >
              Shop Now
            </button>
            <button 
              onClick={handleLearnMore}
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-orange-600 transition"
            >
              Learn More
            </button>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <div className="w-80 h-80 bg-gradient-to-br from-orange-300 to-orange-400 rounded-2xl flex items-center justify-center">
            <svg className="w-40 h-40 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}