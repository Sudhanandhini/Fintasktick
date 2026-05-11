import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Instagram, Facebook, Linkedin, Rss, ChevronDown, Menu, X } from 'lucide-react';
import logo from '../assets/logo-full.png'

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);

  const productSubmenu = [
    { name: 'Home Loan', path: '/homeloan' },
    { name: 'Mortgage Loan', path: '/mortgageloan' },
    { name: 'Personal Loan', path: '/personalloan' },
    { name: 'Business Loan', path: '/businessloan' },
    { name: 'Car Loan', path: '/carloan' },
    { name: 'Education Loan', path: '/educationloan' },
    { name: 'Drop Line OD Loan', path: '/odloan' },
    { name: 'Machinery Loan', path: '/machineryloan' },
    { name: 'Working Capital', path: '/workingcapitalloan' },
    { name: 'Gold Loan', path: '/goldloan' },
    { name: 'Insurance', path: '/insuranceloan' },
  ];

  const menuItems = [
    { name: 'HOME', path: '/', hasDropdown: false },
    { name: 'ABOUT', path: '/about', hasDropdown: false },
    { name: 'PRODUCTS', path: '/products', hasDropdown: true },
    { name: 'OTHER SERVICES', path: '/services', hasDropdown: false },
    { name: 'GALLERY', path: '/gallery', hasDropdown: false },
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
              <span>Vijayanagar, Bangalore( <a href="https://maps.app.goo.gl/hEMV4RHSMcK7RDte6" className="underline hover:text-orange-500">View map</a> )</span>
            </div>

            {/* Phone */}
            <div className="hidden md:flex items-center gap-2">
              <Phone size={16} className="text-orange-500" />
              <a
                href="tel:9164366690"
                className="hover:text-orange-500 transition-colors duration-200"
              >
                9164366690
              </a>
            </div>
          </div>

          {/* Right Side - Social Icons */}
          <div className="flex items-center gap-3">
            <a href="https://www.instagram.com/fintasktick100323?igsh=MWcycm5yY25vbmUyNA==" className="hover:text-orange-500 transition-colors">
              <Instagram size={16} />
            </a>
            <a href="https://www.facebook.com/share/1Bsnyx2PuY/?mibextid=wwXIfr" className="hover:text-orange-500 transition-colors">
              <Facebook size={16} />
            </a>
            {/* <a href="#" className="hover:text-orange-500 transition-colors">
              <Linkedin size={16} />
            </a> */}
            {/* <a href="#" className="hover:text-orange-500 transition-colors">
              <Rss size={16} />
            </a> */}
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
              <div
                key={index}
                className="relative group"
                onMouseEnter={() => item.hasDropdown && setProductsOpen(true)}
                onMouseLeave={() => item.hasDropdown && setProductsOpen(false)}
              >
                <Link
                  to={item.path}
                  className="flex items-center gap-1 text-gray-700 hover:text-orange-500 font-medium transition-colors text-sm"
                >
                  {item.name}
                  {item.hasDropdown && <ChevronDown size={14} className={`transition-transform duration-200 ${productsOpen ? 'rotate-180' : ''}`} />}
                </Link>
                {item.hasDropdown && productsOpen && (
                  <div className="absolute top-full left-0 mt-2 w-52 bg-white rounded-xl shadow-xl border border-gray-100 z-50 py-2">
                    {productSubmenu.map((sub, i) => (
                      <Link
                        key={i}
                        to={sub.path}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-500 transition-colors"
                        onClick={() => setProductsOpen(false)}
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                )}
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
            <nav className="flex flex-col gap-1 mt-4">
              {menuItems.map((item, index) => (
                <div key={index}>
                  {item.hasDropdown ? (
                    <>
                      <button
                        className="w-full flex items-center justify-between text-gray-700 hover:text-orange-500 font-medium py-2 text-left"
                        onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
                      >
                        {item.name}
                        <ChevronDown size={14} className={`transition-transform duration-200 ${mobileProductsOpen ? 'rotate-180' : ''}`} />
                      </button>
                      {mobileProductsOpen && (
                        <div className="pl-4 flex flex-col gap-1 mb-1">
                          {productSubmenu.map((sub, i) => (
                            <Link
                              key={i}
                              to={sub.path}
                              className="text-gray-600 hover:text-orange-500 text-sm py-1.5"
                              onClick={() => { setMobileMenuOpen(false); setMobileProductsOpen(false); }}
                            >
                              {sub.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      to={item.path}
                      className="block text-gray-700 hover:text-orange-500 font-medium py-2"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;