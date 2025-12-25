'use client';

import Link from 'next/link';
import { ShoppingCart, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-5 h-5">
                <path d="M12 2l2.5 7.5H22l-6 4.5 2.5 7.5L12 17l-6.5 4.5L8 14 2 9.5h7.5z"/>
              </svg>
            </div>
            <span className="text-xl font-bold text-gray-900">Carrouna Shop</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-700 hover:text-purple-600 transition">
              Home
            </Link>
            <Link href="/products" className="text-gray-700 hover:text-purple-600 transition">
              Products
            </Link>
            <Link href="/storefront" className="text-gray-700 hover:text-purple-600 transition">
              Storefront
            </Link>
          </nav>

          {/* Cart Icon */}
          <div className="flex items-center space-x-4">
            <Link href="/cart" className="relative">
              <ShoppingCart className="w-6 h-6 text-gray-700 hover:text-purple-600 transition" />
              <span className="absolute -top-2 -right-2 bg-purple-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                0
              </span>
            </Link>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6 text-gray-700" />
              ) : (
                <Menu className="w-6 h-6 text-gray-700" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 space-y-2">
            <Link
              href="/"
              className="block py-2 text-gray-700 hover:text-purple-600 transition"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/products"
              className="block py-2 text-gray-700 hover:text-purple-600 transition"
              onClick={() => setIsMenuOpen(false)}
            >
              Products
            </Link>
            <Link
              href="/storefront"
              className="block py-2 text-gray-700 hover:text-purple-600 transition"
              onClick={() => setIsMenuOpen(false)}
            >
              Storefront
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}