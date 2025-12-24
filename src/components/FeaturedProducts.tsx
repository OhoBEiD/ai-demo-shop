'use client'

const products = [
  { id: 1, name: 'Premium Headphones', price: '$199.99', image: '🎧', rating: 4.5, reviews: 128 },
  { id: 2, name: 'Smart Watch', price: '$299.99', image: '⌚', rating: 4.8, reviews: 256 },
  { id: 3, name: 'Wireless Speaker', price: '$149.99', image: '🔊', rating: 4.3, reviews: 89 },
  { id: 4, name: 'Camera', price: '$599.99', image: '📷', rating: 4.9, reviews: 342 },
  { id: 5, name: 'Laptop Stand', price: '$79.99', image: '💻', rating: 4.6, reviews: 156 },
  { id: 6, name: 'USB Hub', price: '$49.99', image: '🔌', rating: 4.4, reviews: 204 },
]

export default function FeaturedProducts() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {products.map((product) => (
        <div key={product.id} className="bg-white rounded-lg shadow hover:shadow-lg transition-shadow duration-300 p-6 group">
          <div className="text-6xl mb-4 text-center group-hover:scale-110 transition-transform duration-300">
            {product.image}
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">{product.name}</h3>
          <div className="flex items-center mb-4">
            <div className="flex text-yellow-400">
              {'⭐'.repeat(Math.floor(product.rating))}
            </div>
            <span className="text-gray-600 text-sm ml-2">({product.reviews} reviews)</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-2xl font-bold text-indigo-600">{product.price}</span>
            <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors duration-200 font-medium">
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}