'use client'

import Image from 'next/image'
import { useState } from 'react'

const products = [
  { 
    id: 1, 
    name: 'Premium Headphones', 
    price: '$199.99', 
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=500&fit=crop',
    rating: 4.5, 
    reviews: 128 
  },
  { 
    id: 2, 
    name: 'Smart Watch', 
    price: '$299.99', 
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&h=500&fit=crop',
    rating: 4.8, 
    reviews: 256 
  },
  { 
    id: 3, 
    name: 'Wireless Speaker', 
    price: '$149.99', 
    image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500&h=500&fit=crop',
    rating: 4.3, 
    reviews: 89 
  },
  { 
    id: 4, 
    name: 'Camera', 
    price: '$599.99', 
    image: 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=500&h=500&fit=crop',
    rating: 4.9, 
    reviews: 342 
  },
  { 
    id: 5, 
    name: 'Laptop Stand', 
    price: '$79.99', 
    image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=500&h=500&fit=crop',
    rating: 4.6, 
    reviews: 156 
  },
  { 
    id: 6, 
    name: 'USB Hub', 
    price: '$49.99', 
    image: 'https://images.unsplash.com/photo-1625948515291-69613efd103f?w=500&h=500&fit=crop',
    rating: 4.4, 
    reviews: 204 
  },
]

export default function FeaturedProducts() {
  const [imageErrors, setImageErrors] = useState<{ [key: number]: boolean }>({})

  const handleImageError = (productId: number) => {
    setImageErrors(prev => ({ ...prev, [productId]: true }))
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {products.map((product) => (
        <div key={product.id} className="bg-white rounded-lg shadow hover:shadow-lg transition-shadow duration-300 p-6 group border border-orange-100">
          <div className="relative h-48 mb-4 overflow-hidden rounded-lg bg-gray-100">
            {!imageErrors[product.id] ? (
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-300"
                onError={() => handleImageError(product.id)}
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <svg className="w-16 h-16 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" />
                </svg>
              </div>
            )}
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">{product.name}</h3>
          <div className="flex items-center mb-4">
            <div className="flex text-yellow-400">
              {'⭐'.repeat(Math.floor(product.rating))}
            </div>
            <span className="text-gray-600 text-sm ml-2">({product.reviews} reviews)</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-2xl font-bold text-orange-600">{product.price}</span>
            <button className="bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700 transition-colors duration-200 font-medium">
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}