import React, { useState } from 'react';
import { Users, Home, Building2, Briefcase, Car, Coins, TrendingUp, GraduationCap, Cog, DollarSign, ChevronRight, Phone } from 'lucide-react';
import heroBg from '../assets/project.jpg'
import { ArrowRight } from "lucide-react";



const ProductsPage = () => {
    const [selectedCategory, setSelectedCategory] = useState('all');

    const products = [
        {
            id: 1,
            icon: <Users className="w-12 h-12" />,
            title: 'Personal Loan',
            category: 'unsecured',
            shortDesc: 'Quick funds for any purpose without collateral',
            features: [
                'No collateral required',
                'Minimal documentation',
                'Quick approval process',
                'Flexible repayment options',
                'Competitive interest rates'
            ],
            description: 'In need of quick funds for any purpose? Look no further! With Fintasktick, you can easily avail a Personal Loan without the hassle of pledging collateral or dealing with extensive documentation. Whether planning a wedding, vacation, home renovation, medical emergency, or business expansion, a Personal Loan can be your financial solution.'
        },
        {
            id: 2,
            icon: <Home className="w-12 h-12" />,
            title: 'Home Loan',
            category: 'secured',
            shortDesc: 'Make your dream home a reality',
            features: [
                'Competitive interest rates',
                'Long repayment tenure',
                'Affordable EMIs',
                'Tax benefits available',
                'Pre-approved options'
            ],
            description: 'Finding your dream home is just the beginning. At Fintasktick, we offer Home Loans with competitive interest rates and affordable EMIs spread over a longer tenure. Our partner banks are dedicated to catering to all your home loan needs, ensuring a seamless and convenient borrowing experience.'
        },
        {
            id: 3,
            icon: <Building2 className="w-12 h-12" />,
            title: 'Mortgage Loan',
            category: 'secured',
            shortDesc: 'Leverage your property value',
            features: [
                'Lowest interest rates',
                'Flexible tenures',
                'High loan amounts',
                'Multiple property types',
                'Quick processing'
            ],
            description: 'A Loan Against Property (LAP) allows you to leverage the value of your residential or commercial property to meet financial obligations. Whether purchasing a new property, renovating your existing home, consolidating debts, funding education, or expanding business, a LAP offers a secured borrowing option.'
        },
        {
            id: 4,
            icon: <Briefcase className="w-12 h-12" />,
            title: 'Business Loan',
            category: 'business',
            shortDesc: 'Fuel your business growth',
            features: [
                'No collateral for small amounts',
                'Quick disbursement',
                'Flexible repayment',
                'Working capital support',
                'Business expansion funding'
            ],
            description: 'Running a business requires constant investment. Our Business Loan product is designed to cater to all your commercial needs, ensuring smooth and efficient functioning. From expanding operations to purchasing new machinery or boosting working capital, we provide comprehensive solutions.'
        },
        {
            id: 5,
            icon: <Car className="w-12 h-12" />,
            title: 'Car Loan',
            category: 'secured',
            shortDesc: 'Drive your dream car home',
            features: [
                'Attractive interest rates',
                'Up to 100% financing',
                'Flexible EMI options',
                'New and used cars',
                'Quick approval'
            ],
            description: 'Turn your dream car into reality with our Car Loan solutions. We offer attractive rates and flexible EMIs to help you drive home in your desired vehicle without financial strain.'
        },
        {
            id: 6,
            icon: <Coins className="w-12 h-12" />,
            title: 'Gold Loan',
            category: 'secured',
            shortDesc: 'Unlock the power of your gold',
            features: [
                'Competitive interest rates',
                'Minimal documentation',
                'Quick disbursement',
                'Secure gold storage',
                'Easy repayment'
            ],
            description: 'Unlock the power of your gold with a hassle-free Gold Loan. By pledging your gold, you can avail a trouble-free loan within minutes with competitive interest rates, making it one of the most preferred loan types.'
        },
        {
            id: 7,
            icon: <DollarSign className="w-12 h-12" />,
            title: 'OD Loan',
            category: 'business',
            shortDesc: 'Overdraft facility for emergencies',
            features: [
                'Pay interest on utilized amount',
                'Flexible withdrawal',
                'Emergency fund access',
                'No prepayment charges',
                'Quick activation'
            ],
            description: 'Financial emergencies can arise unexpectedly. Our Overdraft (OD) Loan solutions provide flexibility and convenience to pay bills and meet expenses even when your account balance reaches zero.'
        },
        {
            id: 8,
            icon: <TrendingUp className="w-12 h-12" />,
            title: 'Working Capital Loan',
            category: 'business',
            shortDesc: 'Support daily business operations',
            features: [
                'Cover operational expenses',
                'Accounts payable support',
                'Wage payments',
                'Inventory management',
                'Seasonal business support'
            ],
            description: 'Running a business requires constant financial support for day-to-day operations. Our Working Capital Loan provides necessary funds to meet recurring expenses, helping you navigate through low sales or revenue periods.'
        },
        {
            id: 9,
            icon: <GraduationCap className="w-12 h-12" />,
            title: 'Education Loan',
            category: 'unsecured',
            shortDesc: 'Invest in your future',
            features: [
                'Cover tuition fees',
                'Study materials funding',
                'Living expenses',
                'Moratorium period',
                'Tax benefits'
            ],
            description: 'Invest in your future with an Education Loan. We understand the importance of quality education and offer loans with benefits to help you achieve your educational aspirations without financial burden.'
        },
        {
            id: 10,
            icon: <Cog className="w-12 h-12" />,
            title: 'Machinery Loan',
            category: 'business',
            shortDesc: 'Upgrade your business equipment',
            features: [
                'New machinery purchase',
                'Equipment upgrade',
                'Attractive interest rates',
                'Flexible repayment tenure',
                'Quick processing'
            ],
            description: 'Technology is vital for business growth. Our Machinery Loans allow you to purchase new machinery or upgrade existing equipment with attractive interest rates and flexible repayment tenure to power your business growth.'
        }
    ];

    const categories = [
        { id: 'all', label: 'All Products' },
        { id: 'secured', label: 'Secured Loans' },
        { id: 'unsecured', label: 'Unsecured Loans' },
        { id: 'business', label: 'Business Loans' }
    ];

    const filteredProducts = selectedCategory === 'all'
        ? products
        : products.filter(p => p.category === selectedCategory);

    return (
        <div className="w-full">
            {/* Hero Section */}
            {/* <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Loan Products</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Comprehensive financial solutions tailored to meet your diverse needs
          </p>
        </div>
      </section> */}
            <section className="relative  text-white py-20 px-4 overflow-hidden">
                {/* Background Image */}
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: `url(${heroBg})` }}
                ></div>

                {/* Dark Overlay for better text readability */}
                <div className="absolute inset-0  bg-opacity-70"></div>

                {/* Content */}
                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="max-w-3xl">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">
                            Our Loan Products
                        </h1>
                        <p className="text-xl mb-8 text-blue-100">
                            Comprehensive financial solutions tailored to meet your diverse needs
                        </p>
                      
                    </div>
                </div>
            </section>

            {/* Category Filter */}
            <section className="py-8 px-4 bg-white shadow-md sticky top-0 z-10">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-wrap justify-center gap-4">
                        {categories.map((category) => (
                            <button
                                key={category.id}
                                onClick={() => setSelectedCategory(category.id)}
                                className={`px-6 py-2 rounded-full font-semibold transition-all ${selectedCategory === category.id
                                        ? 'bg-orange-500 text-white shadow-lg'
                                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                    }`}
                            >
                                {category.label}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Products Grid */}
            <section className="py-16 px-4 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredProducts.map((product) => (
                            <div
                                key={product.id}
                                className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all overflow-hidden group"
                            >
                                <div className="bg-gradient-to-r from-orange-300 to-orange-400 p-6 text-white">
                                    <div className="mb-3 text-[#002c60]">{product.icon}</div>
                                    <h3 className="text-2xl font-bold ">{product.title}</h3>
                                    <p className="text-orange-100 mt-2">{product.shortDesc}</p>
                                </div>

                                <div className="p-6">
                                    <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                                        {product.description.substring(0, 150)}...
                                    </p>

                                    <div className="mb-4">
                                        <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                                        <ul className="space-y-2">
                                            {product.features.slice(0, 3).map((feature, idx) => (
                                                <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                                                    <ChevronRight size={16} className="text-orange-500 mt-1 flex-shrink-0" />
                                                    <span>{feature}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <button className="w-full bg-gradient-to-r from-blue-900 to-blue-700 text-white py-3 rounded font-semibold transition-colors flex items-center justify-center gap-2">
                                        Apply Now <ChevronRight size={18} />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Loan Process Section */}
            <section className="py-16 px-4 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Simple Loan Process
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Get your loan approved in just 4 easy steps
                        </p>
                    </div>

                    <div className="grid md:grid-cols-4 gap-8">
                        <div className="text-center">
                            <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                                1
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Choose Product</h3>
                            <p className="text-gray-600 text-sm">Select the loan product that suits your needs</p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                                2
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Submit Details</h3>
                            <p className="text-gray-600 text-sm">Fill out the application with required documents</p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                                3
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Get Approved</h3>
                            <p className="text-gray-600 text-sm">Quick verification and approval process</p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                                4
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Receive Funds</h3>
                            <p className="text-gray-600 text-sm">Get the loan amount disbursed to your account</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 px-4 bg-gray-50 ">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#002c60]">
                        Need Help Choosing the Right Product?
                    </h2>
                    <p className="text-xl mb-8 ">
                        Our experts are here to guide you through the selection process
                    </p>
                    <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded font-semibold transition-colors inline-flex items-center gap-2">
                        <Phone size={20} />
                        <a href="/contact"> Contact Our Team</a>
                    </button>
                </div>
            </section>
        </div>
    );
};

export default ProductsPage;