import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail, MessageCircle } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Projects', href: '/projects' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-lg fixed w-full top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-[#6B0012] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">SV</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-[#6B0012]">Sharp Vision</h1>
                <p className="text-sm text-gray-600">Audio-Visual Management</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActive(item.href)
                      ? 'text-[#6B0012] bg-red-50'
                      : 'text-gray-700 hover:text-[#6B0012] hover:bg-gray-50'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* Contact Info & Mobile Menu */}
            <div className="flex items-center space-x-4">
              <div className="hidden lg:flex items-center space-x-4">
                <a href="tel:+1234567890" className="flex items-center space-x-2 text-[#6B0012] hover:text-red-700">
                  <Phone className="w-4 h-4" />
                  <span className="text-sm font-medium">+1 (234) 567-890</span>
                </a>
                <a href="mailto:info@sharpvision.com" className="flex items-center space-x-2 text-[#6B0012] hover:text-red-700">
                  <Mail className="w-4 h-4" />
                  <span className="text-sm font-medium">info@sharpvision.com</span>
                </a>
              </div>
              
              {/* Mobile menu button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden p-2 rounded-md text-[#6B0012] hover:bg-gray-100"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                    isActive(item.href)
                      ? 'text-[#6B0012] bg-red-50'
                      : 'text-gray-700 hover:text-[#6B0012] hover:bg-gray-50'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 border-t">
                <a href="tel:+1234567890" className="block px-3 py-2 text-[#6B0012] hover:bg-gray-50">
                  <Phone className="w-4 h-4 inline mr-2" />
                  +1 (234) 567-890
                </a>
                <a href="mailto:info@sharpvision.com" className="block px-3 py-2 text-[#6B0012] hover:bg-gray-50">
                  <Mail className="w-4 h-4 inline mr-2" />
                  info@sharpvision.com
                </a>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="pt-20">
        {children}
      </main>

      

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-[#6B0012] rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">SV</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold">Sharp Vision</h3>
                  <p className="text-gray-400">Audio-Visual Management Company</p>
                </div>
              </div>
              <p className="text-gray-400 mb-4">
                Your trusted partner for professional audio-visual solutions, specializing in medical events, conferences, and live surgery relays.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white">Facebook</a>
                <a href="#" className="text-gray-400 hover:text-white">LinkedIn</a>
                <a href="#" className="text-gray-400 hover:text-white">Twitter</a>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {navigation.map((item) => (
                  <li key={item.name}>
                    <Link to={item.href} className="text-gray-400 hover:text-white">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
              <div className="space-y-2">
                <p className="text-gray-400">
                  <Phone className="w-4 h-4 inline mr-2" />
                  +1 (234) 567-890
                </p>
                <p className="text-gray-400">
                  <Mail className="w-4 h-4 inline mr-2" />
                  info@sharpvision.com
                </p>
                <p className="text-gray-400">
                  123 Business Ave, Suite 100<br />
                  New York, NY 10001
                </p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Sharp Vision. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;