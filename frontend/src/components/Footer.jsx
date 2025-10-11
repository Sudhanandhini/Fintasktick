import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, ChevronRight } from 'lucide-react';
import logo from '../assets/resized-image.jpg'



const Footer = ({ services = [], companyLinks = [] }) => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [showError, setShowError] = useState(false);

    const handleSubscribe = () => {
        if (!email) {
            setShowError(true);
        } else {
            setShowError(false);
            console.log('Subscribed:', { name, email });
            setName('');
            setEmail('');
        }
    };

    return (
        <footer className="text-white">
            {/* Main Footer Content */}
            <div className="bg-[#002c60]">
            <div className="   max-w-7xl mx-auto px-4 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Column 1 - Logo & Description */}
                    <div>
                        {/* Logo */}
                        <div className="flex items-center gap-2 mb-6">
                            <div className="relative">
                                <div className="w-10 h-10 bg-orange-500 transform rotate-45"></div>
                                <div className="absolute top-0 left-0 w-10 h-10 bg-[#f27e00]-600 transform rotate-45 translate-x-1 translate-y-1"></div>
                            </div>
                            <span className="text-2xl font-bold">Fintastick</span>
                            {/* <img src={logo} alt="logo" /> */}
                        </div>

                        {/* Description */}
                        <p className="text-blue-100 mb-6 leading-relaxed">
                            Sorem ipsum dolor sit amet consectetur adipiscing elit dapibus non apte magna ad suspendisse nec pulvi.
                        </p>

                      
                    </div>

                    {/* Column 2 - Services */}
                    <div>
                        <h3 className="text-xl font-bold mb-6">Quick Links</h3>
                        {services.length > 0 ? (
                            <ul className="space-y-3">
                                {services.map((service, index) => (
                                    <li key={index}>
                                        {service}
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <ul className="space-y-3">
                                <li>
                                    <Link to="/" className="flex items-center text-blue-100 hover:text-orange-500 transform transition-all duration-300 hover:translate-x-1">
                                        <ChevronRight size={16} className="mr-2" />
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/about" className="flex items-center text-blue-100 hover:text-orange-500 transform transition-all duration-300 hover:translate-x-1">
                                        <ChevronRight size={16} className="mr-2" />
                                        About
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/services" className="flex items-center text-blue-100 hover:text-orange-500 transform transition-all duration-300 hover:translate-x-1">
                                        <ChevronRight size={16} className="mr-2" />
                                        Services
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/products" className="flex items-center text-blue-100 hover:text-orange-500 transform transition-all duration-300 hover:translate-x-1">
                                        <ChevronRight size={16} className="mr-2" />
                                        Products
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/contact" className="flex items-center text-blue-100 hover:text-orange-500 transform transition-all duration-300 hover:translate-x-1">
                                        <ChevronRight size={16} className="mr-2" />
                                        Contact
                                    </Link>
                                </li>
                            </ul>
                        )}
                    </div>

                    {/* Column 3 - Company */}
                    <div>
                        <h3 className="text-xl font-bold mb-6">Products</h3>
                        {companyLinks.length > 0 ? (
                            <ul className="space-y-3">
                                {companyLinks.map((link, index) => (
                                    <li key={index}>
                                        {link}
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <ul className="space-y-3">
                                 <li>
                                    <Link to="/products" className="flex items-center text-blue-100 hover:text-orange-500 transform transition-all duration-300 hover:translate-x-1">
                                        <ChevronRight size={16} className="mr-2" />
                                        Home Loan
                                    </Link>
                                </li>
                                 <li>
                                    <Link to="/products" className="flex items-center text-blue-100 hover:text-orange-500 transform transition-all duration-300 hover:translate-x-1">
                                        <ChevronRight size={16} className="mr-2" />
                                        Mortgage
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/products" className="flex items-center text-blue-100 hover:text-orange-500 transform transition-all duration-300 hover:translate-x-1">
                                        <ChevronRight size={16} className="mr-2" />
                                        Personal Loan
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/products" className="flex items-center text-blue-100 hover:text-orange-500 transform transition-all duration-300 hover:translate-x-1">
                                        <ChevronRight size={16} className="mr-2" />
                                        Business Loan
                                    </Link>
                                </li>
                               
                                <li>
                                    <Link to="/products" className="flex items-center text-blue-100 hover:text-orange-500 transform transition-all duration-300 hover:translate-x-1">
                                        <ChevronRight size={16} className="mr-2" />
                                        Car Loan
                                    </Link>
                                </li>
                               
                                <li>
                                    <Link to="/products" className="flex items-center text-blue-100 hover:text-orange-500 transform transition-all duration-300 hover:translate-x-1">
                                        <ChevronRight size={16} className="mr-2" />
                                        Gold Loan
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/products" className="flex items-center text-blue-100 hover:text-orange-500 transform transition-all duration-300 hover:translate-x-1">
                                        <ChevronRight size={16} className="mr-2" />
                                        Machinery Loan
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/products" className="flex items-center text-blue-100 hover:text-orange-500 transform transition-all duration-300 hover:translate-x-1">
                                        <ChevronRight size={16} className="mr-2" />
                                        Insurance
                                    </Link>
                                </li>
                            </ul>
                        )}
                    </div>

                    {/* Column 4 - Subscribe */}
                    {/* <div>
            <h3 className="text-xl font-bold mb-6">Subscribe</h3>
            <div className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>
              
              <div className="relative">
                <input
                  type="email"
                  placeholder="Email Address"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setShowError(false);
                  }}
                  className="w-full px-4 py-3 bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
                {showError && (
                  <div className="absolute -bottom-6 right-0 bg-white text-gray-800 px-3 py-1 text-sm shadow-lg">
                    Please fill out this field.
                  </div>
                )}
              </div>

              <button
                onClick={handleSubscribe}
                className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 uppercase transition-colors"
              >
                Subscribe
              </button>
            </div>
          </div> */}
                    <div>
                        <div>
                            <h3 className="text-xl font-bold mb-6">Services</h3>
                            {companyLinks.length > 0 ? (
                                <ul className="space-y-3">
                                    {companyLinks.map((link, index) => (
                                        <li key={index}>
                                            {link}
                                        </li>
                                    ))}
                                </ul>
                            ) : (
                                <ul className="space-y-3">
                                    <li>
                                        <Link to="/services" className="flex items-center text-blue-100 hover:text-orange-500 transform transition-all duration-300 hover:translate-x-1">
                                            <ChevronRight size={16} className="mr-2" />
                                            Real Estate
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/services" className="flex items-center text-blue-100 hover:text-orange-500 transform transition-all duration-300 hover:translate-x-1">
                                            <ChevronRight size={16} className="mr-2" />
                                            Property Legal Solutions

                                        </Link>
                                    </li>

                                </ul>
                            )}
                        </div>

                        {/* About Us Link */}
                        {/* <Link to="/about" className="text-blue-200 hover:text-white underline mb-6 inline-block">
                            About us
                        </Link> */}

                        {/* Social Icons */}
                        <div className="flex gap-3 mt-6">
                            <a
                                href="#"
                                className="w-10 h-10 bg-white text-blue-900 rounded-full flex items-center justify-center hover:bg-orange-500 hover:text-white transition-colors"
                            >
                                <Facebook size={18} />
                            </a>
                            <a
                                href="#"
                                className="w-10 h-10 bg-white text-blue-900 rounded-full flex items-center justify-center hover:bg-orange-500 hover:text-white transition-colors"
                            >
                                <Twitter size={18} />
                            </a>
                            <a
                                href="#"
                                className="w-10 h-10 bg-white text-blue-900 rounded-full flex items-center justify-center hover:bg-orange-500 hover:text-white transition-colors"
                            >
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z" />
                                </svg>
                            </a>
                            <a
                                href="#"
                                className="w-10 h-10 bg-white text-blue-900 rounded-full flex items-center justify-center hover:bg-orange-500 hover:text-white transition-colors"
                            >
                                <Linkedin size={18} />
                            </a>
                        </div>
                    </div>




                </div>
            </div>
            </div>

            {/* Bottom Bar */}
            <div className="bg-blue-900 border-t border-blue-800">
                <div className="max-w-7xl mx-auto px-4 py-6">
                    <div className="flex flex-col md:flex-row justify-between items-center text-sm text-blue-200">
                        <p>Copyright © Fintastick 2025 </p>
                        <div className="flex gap-6 mt-4 md:mt-0">
                            <Link to="https://www.sunsys.in/" className="hover:text-white">Developed By Sunsys Technologies</Link>

                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;