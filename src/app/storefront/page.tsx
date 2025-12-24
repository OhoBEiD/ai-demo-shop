'use client'

import Header from '@/components/Header'
import ProductGrid from '@/components/ProductGrid'
import Footer from '@/components/Footer'
import { useState } from 'react'

export default function StorefrontPage() {
  const [banner, setBanner] = useState(true)
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [priceRange, setPriceRange] = useState([0, 1000])
  const [sortBy, setSortBy] = useState('featured')
  const [searchQuery, setSearchQuery] = useState('')

  const categories = [
    { id: 'all', name: 'All Products', icon: '🛍️' },
    { id: 'electronics', name: 'Electronics', icon: '💻' },
    { id: 'fashion', name: 'Fashion', icon: '👕' },
    { id: 'home', name: 'Home & Living', icon: '🏠' },
    { id: 'beauty', name: 'Beauty', icon: '💄' },
    { id: 'sports', name: 'Sports', icon: '⚽' },
    { id: 'books', name: 'Books', icon: '📚' },
  ]

  const handleSearch = () => {
    console.log('Searching for:', searchQuery)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero Banner Section */}
      {banner && (
        <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white py-8 relative overflow-hidden">
          <div className="absolute inset-0 bg-black opacity-10"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center relative z-10">
            <div>
              <h1 className="text-4xl font-bold mb-2">🎉 Summer Mega Sale</h1>
              <p className="text-xl">Up to 50% off on selected items + Free Shipping!</p>
              <button className="mt-4 px-6 py-2 bg-white text-indigo-600 rounded-lg font-semibold hover:bg-gray-100 transition">
                Shop Now →
              </button>
            </div>
            <button
              onClick={() => setBanner(false)}
              className="text-white hover:text-gray-200 transition text-2xl"
            >
              ✕
            </button>
          </div>
        </div>
      )}

      {/* Search and Filter Bar */}
      <div className="bg-white py-6 border-b shadow-sm sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-4 items-center flex-col md:flex-row">
            <div className="flex-1 w-full relative">
              <input
                type="text"
                placeholder="Search products, brands, and more..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                className="w-full px-4 py-3 pl-12 rounded-lg border-2 border-gray-300 focus:outline-none focus:border-indigo-500 transition"
              />
              <svg className="w-6 h-6 text-gray-400 absolute left-3 top-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <button 
              onClick={handleSearch}
              className="w-full md:w-auto px-8 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition font-semibold">
              Search
            </button>
          </div>
        </div>
      </div>

      {/* Categories Navigation */}
      <div className="bg-white py-4 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold whitespace-nowrap transition ${
                  selectedCategory === category.id
                    ? 'bg-indigo-600 text-white shadow-md'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <span className="text-xl">{category.icon}</span>
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Promotional Cards */}
      <div className="bg-gradient-to-br from-gray-50 to-gray-100 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition transform hover:-translate-y-1">
              <div className="text-4xl mb-3">🚚</div>
              <h3 className="font-bold text-gray-900 mb-1 text-lg">Free Shipping</h3>
              <p className="text-sm text-gray-600">On orders over $50</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition transform hover:-translate-y-1">
              <div className="text-4xl mb-3">🔒</div>
              <h3 className="font-bold text-gray-900 mb-1 text-lg">Secure Payment</h3>
              <p className="text-sm text-gray-600">100% safe transactions</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition transform hover:-translate-y-1">
              <div className="text-4xl mb-3">↩️</div>
              <h3 className="font-bold text-gray-900 mb-1 text-lg">Easy Returns</h3>
              <p className="text-sm text-gray-600">30-day money-back</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition transform hover:-translate-y-1">
              <div className="text-4xl mb-3">💬</div>
              <h3 className="font-bold text-gray-900 mb-1 text-lg">24/7 Support</h3>
              <p className="text-sm text-gray-600">Always here to help</p>
            </div>
          </div>
        </div>
      </div>

      {/* Filter and Sort Bar */}
      <div className="bg-white py-4 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div className="flex items-center gap-4 flex-wrap">
              <div className="flex items-center gap-2">
                <label className="text-sm font-semibold text-gray-700">Sort by:</label>
                <select 
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500">
                  <option value="featured">Featured</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Highest Rated</option>
                  <option value="newest">Newest</option>
                </select>
              </div>
            </div>
            <div className="text-sm text-gray-600">
              Showing <span className="font-semibold text-gray-900">1-12</span> of <span className="font-semibold text-gray-900">48</span> products
            </div>
          </div>
        </div>
      </div>

      {/* Product Grid */}
      <div className="py-8">
        <ProductGrid />
      </div>

      {/* Featured Deals Banner */}
      <div className="bg-gradient-to-r from-orange-500 to-red-500 py-12 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="inline-block bg-white text-orange-600 px-4 py-1 rounded-full text-sm font-bold mb-4">
                LIMITED TIME OFFER
              </div>
              <h2 className="text-4xl font-bold mb-4">Flash Sale! 🔥</h2>
              <p className="text-xl mb-6 text-orange-100">Save up to 70% on trending items. Hurry, sale ends soon!</p>
              <div className="flex gap-4">
                <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg p-4 text-center">
                  <div className="text-3xl font-bold">08</div>
                  <div className="text-sm">Hours</div>
                </div>
                <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg p-4 text-center">
                  <div className="text-3xl font-bold">24</div>
                  <div className="text-sm">Minutes</div>
                </div>
                <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg p-4 text-center">
                  <div className="text-3xl font-bold">35</div>
                  <div className="text-sm">Seconds</div>
                </div>
              </div>
            </div>
            <div className="text-center">
              <button className="px-8 py-4 bg-white text-orange-600 rounded-lg font-bold text-lg hover:bg-gray-100 transition transform hover:scale-105">
                Shop Flash Sale →
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="bg-indigo-600 py-12 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">📬 Subscribe to Our Newsletter</h2>
          <p className="text-lg mb-6 text-indigo-100">Get the latest deals and exclusive offers straight to your inbox</p>
          <div className="flex gap-2 max-w-md mx-auto flex-col md:flex-row">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-300"
            />
            <button className="px-6 py-3 bg-indigo-900 hover:bg-indigo-950 rounded-lg font-semibold transition">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Trust Badges */}
      <div className="bg-white py-12 border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl mb-3">⭐</div>
              <div className="text-2xl font-bold text-gray-900">4.8/5</div>
              <p className="text-sm text-gray-600">Customer Rating</p>
            </div>
            <div>
              <div className="text-4xl mb-3">👥</div>
              <div className="text-2xl font-bold text-gray-900">50,000+</div>
              <p className="text-sm text-gray-600">Happy Customers</p>
            </div>
            <div>
              <div className="text-4xl mb-3">📦</div>
              <div className="text-2xl font-bold text-gray-900">1M+</div>
              <p className="text-sm text-gray-600">Orders Shipped</p>
            </div>
            <div>
              <div className="text-4xl mb-3">🏆</div>
              <div className="text-2xl font-bold text-gray-900">Award</div>
              <p className="text-sm text-gray-600">Winning Service</p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}