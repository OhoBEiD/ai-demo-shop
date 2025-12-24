'use client'

import { useState } from 'react'
import ProductCard from './ProductCard'

const PRODUCTS = [
  {
    id: 1,
    name: 'Premium Wireless Headphones',
    price: 79.99,
    originalPrice: 129.99,
    rating: 5,
    reviews: 324,
  },
  {
    id: 2,
    name: 'Ergonomic Desk Chair',
    price: 199.99,
    originalPrice: 299.99,
    rating: 4,
    reviews: 156,
  },
  {
    id: 3,
    name: 'Ultra Slim Laptop Stand',
    price: 29.99,
    originalPrice: 49.99,
    rating: 5,
    reviews: 89,
  },
  {
    id: 4,
    name: 'Smart Watch Pro',
    price: 199.99,
    originalPrice: 249.99,
    rating: 5,
    reviews: 512,
  },
  {
    id: 5,
    name: 'Portable USB-C Hub',
    price: 34.99,
    originalPrice: 59.99,
    rating: 4,
    reviews: 203,
  },
  {
    id: 6,
    name: 'Mechanical Keyboard RGB',
    price: 99.99,
    originalPrice: 149.99,
    rating: 5,
    reviews: 445,
  },
  {
    id: 7,
    name: '4K Webcam Pro',
    price: 129.99,
    originalPrice: 179.99,
    rating: 4,
    reviews: 267,
  },
  {
    id: 8,
    name: 'Wireless Phone Charger',
    price: 24.99,
    originalPrice: 39.99,
    rating: 5,
    reviews: 678,
  },
]

export default function ProductGrid() {
  const [cartCount, setCartCount] = useState(0)

  const handleAddToCart = () => {
    setCartCount(cartCount + 1)
  }

  return (
    <section id="products" className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Products</h2>
          <p className="text-lg text-gray-600">Discover our best-selling items with amazing discounts</p>
        </div>

        {/* Filter and Sort */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
          <div className="flex gap-2">
            <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition">
              All Products
            </button>
            <button className="px-4 py-2 bg-white text-gray-700 border border-gray-300 rounded-lg hover:border-indigo-600 transition">
              Electronics
            </button>
            <button className="px-4 py-2 bg-white text-gray-700 border border-gray-300 rounded-lg hover:border-indigo-600 transition">
              Accessories
            </button>
          </div>
          <select className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-gray-700 hover:border-indigo-600 transition">
            <option>Sort by: Latest</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
            <option>Best Rated</option>
          </select>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PRODUCTS.map((product) => (
            <ProductCard
              key={product.id}
              {...product}
              image=""
              onAddToCart={handleAddToCart}
            />
          ))}
        </div>

        {/* Load More Button */}
        <div className="flex justify-center mt-12">
          <button className="px-8 py-3 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 transition">
            Load More Products
          </button>
        </div>
      </div>
    </section>
  )
}