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
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=500&fit=crop',
  },
  {
    id: 2,
    name: 'Omar Laptop',
    price: 299,
    originalPrice: 349,
    rating: 5,
    reviews: 0,
    image: '',
  },
  {
    id: 3,
    name: 'Geha Laptop',
    price: 299,
    originalPrice: 349,
    rating: 5,
    reviews: 0,
    image: '',
  },
  {
    id: 4,
    name: 'Ergonomic Desk Chair',
    price: 199.99,
    originalPrice: 299.99,
    rating: 4,
    reviews: 156,
    image: 'https://images.unsplash.com/photo-1592078615290-033ee584e267?w=500&h=500&fit=crop',
  },
  {
    id: 3,
    name: 'Ultra Slim Laptop Stand',
    price: 29.99,
    originalPrice: 49.99,
    rating: 5,
    reviews: 89,
    image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=500&h=500&fit=crop',
  },
  {
    id: 4,
    name: 'Smart Watch Pro',
    price: 199.99,
    originalPrice: 249.99,
    rating: 5,
    reviews: 512,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&h=500&fit=crop',
  },
  {
    id: 5,
    name: 'Portable USB-C Hub',
    price: 34.99,
    originalPrice: 59.99,
    rating: 4,
    reviews: 203,
    image: 'https://images.unsplash.com/photo-1625948515291-69613efd103f?w=500&h=500&fit=crop',
  },
  {
    id: 6,
    name: 'Mechanical Keyboard RGB',
    price: 99.99,
    originalPrice: 149.99,
    rating: 5,
    reviews: 445,
    image: 'https://images.unsplash.com/photo-1595225476474-87563907a212?w=500&h=500&fit=crop',
  },
  {
    id: 7,
    name: '4K Webcam Pro',
    price: 129.99,
    originalPrice: 179.99,
    rating: 4,
    reviews: 267,
    image: 'https://images.unsplash.com/photo-1614624532983-4ce03382d63d?w=500&h=500&fit=crop',
  },
  {
    id: 8,
    name: 'Wireless Phone Charger',
    price: 24.99,
    originalPrice: 39.99,
    rating: 5,
    reviews: 678,
    image: 'https://images.unsplash.com/photo-1591290619762-c588f96b8c83?w=500&h=500&fit=crop',
  },
  {
    id: 9,
    name: 'Bluetooth Speaker',
    price: 89.99,
    originalPrice: 139.99,
    rating: 5,
    reviews: 432,
    image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500&h=500&fit=crop',
  },
  {
    id: 10,
    name: 'Gaming Mouse',
    price: 59.99,
    originalPrice: 89.99,
    rating: 4,
    reviews: 298,
    image: 'https://images.unsplash.com/photo-1527814050087-3793815479db?w=500&h=500&fit=crop',
  },
  {
    id: 11,
    name: 'LED Desk Lamp',
    price: 44.99,
    originalPrice: 69.99,
    rating: 5,
    reviews: 187,
    image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=500&h=500&fit=crop',
  },
  {
    id: 12,
    name: 'Laptop Backpack',
    price: 49.99,
    originalPrice: 79.99,
    rating: 4,
    reviews: 356,
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&h=500&fit=crop',
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
            <button className="px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition">
              All Products
            </button>
            <button className="px-4 py-2 bg-white text-gray-700 border border-gray-300 rounded-lg hover:border-orange-600 transition">
              Electronics
            </button>
            <button className="px-4 py-2 bg-white text-gray-700 border border-gray-300 rounded-lg hover:border-orange-600 transition">
              Accessories
            </button>
          </div>
          <select className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-gray-700 hover:border-orange-600 transition">
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
              onAddToCart={handleAddToCart}
            />
          ))}
        </div>

        {/* Load More Button */}
        <div className="flex justify-center mt-12">
          <button className="px-8 py-3 bg-orange-600 text-white rounded-lg font-semibold hover:bg-orange-700 transition">
            Load More Products
          </button>
        </div>
      </div>
    </section>
  )
}