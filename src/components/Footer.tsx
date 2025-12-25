export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">E</span>
              </div>
              <h3 className="text-lg font-semibold">EcoShop</h3>
            </div>
            <p className="text-gray-400 text-sm">
              Your one-stop shop for premium, eco-friendly products at great prices.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-green-500 transition">Home</a></li>
              <li><a href="#products" className="hover:text-green-500 transition">Products</a></li>
              <li><a href="#" className="hover:text-green-500 transition">Categories</a></li>
              <li><a href="#" className="hover:text-green-500 transition">About</a></li>
              <li><a href="#" className="hover:text-green-500 transition">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Customer Care</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-green-500 transition">Help Center</a></li>
              <li><a href="#" className="hover:text-green-500 transition">Shipping Info</a></li>
              <li><a href="#" className="hover:text-green-500 transition">Returns & Exchanges</a></li>
              <li><a href="#" className="hover:text-green-500 transition">Size Guide</a></li>
              <li><a href="#" className="hover:text-green-500 transition">FAQ</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
            <div className="flex space-x-4 mb-4">
              <a href="#" className="text-gray-400 hover:text-green-500 transition text-2xl" title="Facebook">📘</a>
              <a href="#" className="text-gray-400 hover:text-green-500 transition text-2xl" title="Twitter">🐦</a>
              <a href="#" className="text-gray-400 hover:text-green-500 transition text-2xl" title="Instagram">📷</a>
              <a href="#" className="text-gray-400 hover:text-green-500 transition text-2xl" title="YouTube">🎥</a>
            </div>
            <p className="text-gray-400 text-sm">
              📧 support@ecoshop.com<br/>
              📞 1-800-ECO-SHOP
            </p>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
            <p>&copy; 2024 EcoShop. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-green-500 transition">Privacy Policy</a>
              <a href="#" className="hover:text-green-500 transition">Terms of Service</a>
              <a href="#" className="hover:text-green-500 transition">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}