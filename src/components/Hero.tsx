'use client'

import { useRouter } from 'next/navigation'

export default function Hero() {
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
    <section className="bg-gradient-to-r from-green-500 to-green-600 text-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-5xl md:text-6xl font-bold mb-6">
          Discover Amazing Products
        </h2>
        <p className="text-xl md:text-2xl mb-8 text-green-100">
          Shop the best selection of high-quality products at unbeatable prices
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            onClick={handleShopNow}
            className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition"
          >
            Shop
          </button>
          <button 
            onClick={handleLearnMore}
            className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition"
          >
            Learn More
          </button>
        </div>
      </div>
    </section>
  )
}