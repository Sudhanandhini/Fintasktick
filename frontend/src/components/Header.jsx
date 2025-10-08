import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Twitter, Facebook, Linkedin, Rss, ChevronDown, Menu, X } from 'lucide-react';
import logo from '../assets/resized-image.jpg'

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const menuItems = [
    { name: 'HOME', path: '/', hasDropdown: false },
    { name: 'ABOUT', path: '/about', hasDropdown: false },
    { name: 'PRODUCTS', path: '/products', hasDropdown: false },
    { name: 'SERVICES', path: '/services', hasDropdown: false },
    { name: 'CONTACT', path: '/contact', hasDropdown: false },
  ];

  return (
    <header className="w-full">
      {/* Top Bar */}
      <div className="bg-blue-900 text-white py-2 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-sm">
          {/* Left Side - Location */}
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <MapPin size={16} className="text-orange-500" />
              <span>London City, England ( <a href="#" className="underline hover:text-orange-500">View map</a> )</span>
            </div>
            
            {/* Phone */}
            <div className="hidden md:flex items-center gap-2">
              <Phone size={16} className="text-orange-500" />
              <span>(+97) 814 - 3527</span>
            </div>
          </div>

          {/* Right Side - Social Icons */}
          <div className="flex items-center gap-3">
            <a href="#" className="hover:text-orange-500 transition-colors">
              <Twitter size={16} />
            </a>
            <a href="#" className="hover:text-orange-500 transition-colors">
              <Facebook size={16} />
            </a>
            <a href="#" className="hover:text-orange-500 transition-colors">
              <Linkedin size={16} />
            </a>
            <a href="#" className="hover:text-orange-500 transition-colors">
              <Rss size={16} />
            </a>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="bg-white shadow-md py-4 px-4 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            {/* Logo Image - Replace with your actual logo */}
            {/* <div className="relative w-12 h-12">
              <div className="w-10 h-10 bg-orange-500 transform rotate-45"></div>
              <div className="absolute top-0 left-0 w-10 h-10 bg-orange-600 transform rotate-45 translate-x-1 translate-y-1"></div>
            </div>
            <span className="text-2xl font-bold text-blue-900">Consultax</span> */}
            <img src={logo} alt="logo" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {menuItems.map((item, index) => (
              <div key={index} className="relative group">
                <Link
                  to={item.path}
                  className="flex items-center gap-1 text-gray-700 hover:text-orange-500 font-medium transition-colors text-sm"
                >
                  {item.name}
                  {item.hasDropdown && <ChevronDown size={14} />}
                </Link>
              </div>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden text-gray-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t">
            <nav className="flex flex-col gap-3 mt-4">
              {menuItems.map((item, index) => (
                <Link
                  key={index}
                  to={item.path}
                  className="text-gray-700 hover:text-orange-500 font-medium py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;