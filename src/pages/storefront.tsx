import Header from '@/components/Header'
import ProductGrid from '@/components/ProductGrid'
import Footer from '@/components/Footer'

export default function StorefrontPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <ProductGrid />
      <Footer />
    </div>
  )
}