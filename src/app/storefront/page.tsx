'use client'

import Header from '@/components/Header'
import ProductGrid from '@/components/ProductGrid'
import Footer from '@/components/Footer'
import { useState } from 'react'

export default function StorefrontPage() {
  const [banner, setBanner] = useState(true)

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Banner Section */}
      {banner && (
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold mb-2">🎉 Summer Sale</h1>
              <p className="text-lg">Up to 50% off on selected items!</p>
            </div>
            <button
              onClick={() => setBanner(false)}
              className="text-white hover:text-gray-200 transition"
            >
              ✕
            </button>
          </div>
        </div>
      )}

      {/* Search and Filter Bar */}
      <div className="bg-gray-100 py-4 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-4 items-center flex-col md:flex-row">
            <div className="flex-1 w-full">
              <input
                type="text"
                placeholder="Search products, brands, and more..."
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-indigo-500"
              />
            </div>
            <button className="w-full md:w-auto px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition">
              Search
            </button>
          </div>
        </div>
      </div>

      {/* Promotional Cards */}
      <div className="bg-white py-8 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-lg border border-blue-200 hover:shadow-lg transition">
              <div className="text-3xl mb-2">🚚</div>
              <h3 className="font-semibold text-gray-900 mb-1">Free Shipping</h3>
              <p className="text-sm text-gray-600">On orders over $50</p>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-lg border border-green-200 hover:shadow-lg transition">
              <div className="text-3xl mb-2">🔒</div>
              <h3 className="font-semibold text-gray-900 mb-1">Secure Payment</h3>
              <p className="text-sm text-gray-600">100% safe transactions</p>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-lg border border-purple-200 hover:shadow-lg transition">
              <div className="text-3xl mb-2">↩️</div>
              <h3 className="font-semibold text-gray-900 mb-1">Easy Returns</h3>
              <p className="text-sm text-gray-600">30-day money-back guarantee</p>
            </div>
          </div>
        </div>
      </div>

      {/* Product Grid */}
      <ProductGrid />

      {/* Newsletter Section */}
      <div className="bg-indigo-600 py-12 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
          <p className="text-lg mb-6 text-indigo-100">Get the latest deals and exclusive offers straight to your inbox</p>
          <div className="flex gap-2 max-w-md mx-auto flex-col md:flex-row">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none"
            />
            <button className="px-6 py-3 bg-indigo-900 hover:bg-indigo-950 rounded-lg font-semibold transition">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Trust Badges */}
      <div className="bg-gray-50 py-8 border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-around items-center gap-6">
            <div className="text-center">
              <div className="text-2xl mb-2">⭐</div>
              <p className="text-sm text-gray-600">4.8/5 Customer Rating</p>
            </div>
            <div className="text-center">
              <div className="text-2xl mb-2">👥</div>
              <p className="text-sm text-gray-600">50,000+ Happy Customers</p>
            </div>
            <div className="text-center">
              <div className="text-2xl mb-2">📦</div>
              <p className="text-sm text-gray-600">1M+ Orders Shipped</p>
            </div>
            <div className="text-center">
              <div className="text-2xl mb-2">🏆</div>
              <p className="text-sm text-gray-600">Award-Winning Service</p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}