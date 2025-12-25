'use client'

import { useState } from 'react'

export default function Header() {
  const [cartCount, setCartCount] = useState(0)
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-xl">C</span>
          </div>
          <span className="text-2xl font-bold text-gray-900">Carrouna Shop</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#" className="text-gray-700 hover:text-red-600 transition">Home</a>
          <a href="#products" className="text-gray-700 hover:text-red-600 transition">Products</a>
          <a href="#" className="text-gray-700 hover:text-red-600 transition">Categories</a>
          <a href="#" className="text-gray-700 hover:text-red-600 transition">About</a>
        </div>

        {/* Cart Icon */}
        <div className="flex items-center space-x-4">
          <button className="relative">
            <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </button>

          <button className="hidden md:block bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition">
            Sign In
          </button>

          {/* Mobile menu button */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-gray-50 border-t px-4 py-4 space-y-2">
          <a href="#" className="block text-gray-700 hover:text-red-600 py-2">Home</a>
          <a href="#products" className="block text-gray-700 hover:text-red-600 py-2">Products</a>
          <a href="#" className="block text-gray-700 hover:text-red-600 py-2">Categories</a>
          <a href="#" className="block text-gray-700 hover:text-red-600 py-2">About</a>
          <button className="w-full bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition mt-2">
            Sign In
          </button>
        </div>
      )}
    </header>
  )
}