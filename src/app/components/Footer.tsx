import Link from 'next/link'
import { Facebook, Instagram, Twitter } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-[#800020] text-white py-8 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Categories */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Categories</h3>
            <ul className="space-y-2">
              <li><p  className="hover:text-gray-900">Women</p></li>
              <li><p  className="hover:text-gray-900">Men</p></li>
              <li><p  className="hover:text-gray-900">Kids</p></li>
              <li><p  className="hover:text-gray-900">Accessories</p></li>
              <li><p  className="hover:text-gray-900">Sale</p></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Customer Service</h3>
            <ul className="space-y-2">
              <li><p className="hover:text-gray-900">Contact Us</p></li>
              <li><p className="hover:text-gray-900">Shipping Information</p></li>
              <li><p className="hover:text-gray-900">Returns & Exchanges</p></li>
              <li><p className="hover:text-gray-900">FAQ</p></li>
              <li><p className="hover:text-gray-900">Size Guide</p></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-2">
              <li><p className="hover:text-gray-900">About Us</p></li>
              <li><p className="hover:text-gray-900">Careers</p></li>
              <li><p className="hover:text-gray-900">Press</p></li>
              <li><p className="hover:text-gray-900">Sustainability</p></li>
              <li><p className="hover:text-gray-900">Affiliates</p></li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Connect</h3>
            <div className="flex space-x-4 mb-4">
              <p className="text-gray-400 hover:text-gray-900" aria-label="Facebook">
                <Facebook size={24} />
              </p>
              <p className="text-gray-400 hover:text-gray-900" aria-label="Instagram">
                <Instagram size={24} />
              </p>
              <p className="text-gray-400 hover:text-gray-900" aria-label="Twitter">
                <Twitter size={24} />
              </p>
            </div>
            <p className="text-sm">Sign up for our newsletter to get exclusive offers and the latest news.</p>
            <form className="mt-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-3 py-2 text-gray-700 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                required
              />
              <button
                type="submit"
                className="mt-2 w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Your Clothing Brand. All rights reserved.</p>
          <div className="mt-2 space-x-4">
            <p className="hover:text-gray-900">Privacy Policy</p>
            <p className="hover:text-gray-900">Terms of Service</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

