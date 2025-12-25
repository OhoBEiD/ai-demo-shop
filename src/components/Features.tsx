export default function Features() {
  const features = [
    {
      icon: '🚚',
      title: 'Free Shipping',
      description: 'Free shipping on orders over $50. Fast and reliable delivery.',
    },
    {
      icon: '🔒',
      title: 'Secure Payment',
      description: 'Your payment information is encrypted and secure.',
    },
    {
      icon: '↩️',
      title: 'Easy Returns',
      description: '30-day return policy. No questions asked.',
    },
    {
      icon: '💬',
      title: '24/7 Support',
      description: 'Customer support available round the clock.',
    },
  ]

  return (
    <section id="features" className="bg-orange-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}