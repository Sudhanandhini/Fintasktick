import React from 'react';
import {
    Users, Home, Building2, Briefcase, Car, Coins,
    TrendingUp, GraduationCap, Cog, DollarSign, ChevronRight,
    CreditCard, ShieldCheck, Phone
} from 'lucide-react';
import heroBg from '../assets/5.jpg';
import { useNavigate } from "react-router-dom";

const ProductsPage = () => {
    const navigate = useNavigate();
    const products = [
       
        {
            id: 1,
            icon: <Home className="w-12 h-12" />,
            title: 'Home Loan',
            shortDesc: 'Make your dream home a reality',
            features: [
                'Competitive interest rates',
                'Long repayment tenure',
                'Affordable EMIs',
                'Tax benefits available',
                'Pre-approved options'
            ],
            description: 'Find your dream home easily. We offer Home Loans with low interest, long tenure, and flexible repayment options through our partner banks.',
            path: '/homeloan'
        },
        {
            id: 2,
            icon: <Building2 className="w-12 h-12" />,
            title: 'Mortgage Loan',
            shortDesc: 'Leverage your property value',
            features: [
                'Lowest interest rates',
                'Flexible tenures',
                'High loan amounts',
                'Multiple property types',
                'Quick processing'
            ],
            description: 'Leverage your property for financial support. Loan Against Property (LAP) helps fund education, renovations, or business growth.',
            path: '/mortgageloan'
        },
         {
            id: 3,
            icon: <Users className="w-12 h-12" />,
            title: 'Personal Loan',
            shortDesc: 'Quick funds for any purpose without collateral',
            features: [
                'No collateral required',
                'Minimal documentation',
                'Quick approval process',
                'Flexible repayment options',
                'Competitive interest rates'
            ],
            description: 'Need quick funds for any purpose? With Fintasktick, get a Personal Loan without collateral or heavy paperwork. Perfect for weddings, vacations, renovations, or emergencies.',
            path: '/personalloan'
        },
        {
            id: 4,
            icon: <Briefcase className="w-12 h-12" />,
            title: 'Business Loan',
            shortDesc: 'Fuel your business growth',
            features: [
                'No collateral for small amounts',
                'Quick disbursement',
                'Flexible repayment',
                'Working capital support',
                'Business expansion funding'
            ],
            description: 'Boost your business with our customized Business Loan options — quick disbursal, flexible repayment, and easy processing.',
            path: '/businessloan'
        },
        {
            id: 5,
            icon: <Car className="w-12 h-12" />,
            title: 'Car Loan',
            shortDesc: 'Drive your dream car home',
            features: [
                'Attractive interest rates',
                'Up to 100% financing',
                'Flexible EMI options',
                'New and used cars',
                'Quick approval'
            ],
            description: 'Own your dream car easily with flexible EMIs and low interest rates on our Car Loan options.',
            path: '/carloan'
        },
         {
            id: 6,
            icon: <GraduationCap className="w-12 h-12" />,
            title: 'Education Loan',
            shortDesc: 'Invest in your future',
            features: [
                'Cover tuition fees',
                'Study materials funding',
                'Living expenses',
                'Moratorium period',
                'Tax benefits'
            ],
            description: 'Secure your future with our Education Loan options, designed to make higher education affordable and accessible.',
            path: '/educationloan'
        },
       
        {
            id: 7,
            icon: <DollarSign className="w-12 h-12" />,
            title: 'OD Loan',
            shortDesc: 'Overdraft facility for emergencies',
            features: [
                'Pay interest only on used amount',
                'Flexible withdrawal',
                'Emergency fund access',
                'No prepayment charges',
                'Quick activation'
            ],
            description: 'Our Overdraft (OD) Loan ensures financial flexibility in emergencies — borrow only what you use.',
            path: '/odloan'
        },
         {
            id: 8,
            icon: <Cog className="w-12 h-12" />,
            title: 'Machinery Loan',
            shortDesc: 'Upgrade your business equipment',
            features: [
                'New machinery purchase',
                'Equipment upgrade',
                'Attractive interest rates',
                'Flexible repayment tenure',
                'Quick processing'
            ],
            description: 'Enhance productivity with our Machinery Loan — finance new equipment or upgrades with ease.',
            path: '/machineryloan'
        },
        {
            id: 9,
            icon: <TrendingUp className="w-12 h-12" />,
            title: 'Working Capital Loan',
            shortDesc: 'Support daily business operations',
            features: [
                'Cover operational expenses',
                'Wage payments',
                'Inventory management',
                'Seasonal business support',
                'Flexible repayment'
            ],
            description: 'Keep your business running smoothly with our Working Capital Loan — perfect for managing daily expenses and cash flow.',
            path: '/workingcapitalloan'
        },
         {
            id: 10,
            icon: <Coins className="w-12 h-12" />,
            title: 'Gold Loan',
            shortDesc: 'Unlock the power of your gold',
            features: [
                'Competitive interest rates',
                'Minimal documentation',
                'Quick disbursement',
                'Secure gold storage',
                'Easy repayment'
            ],
            description: 'Get instant funds by pledging your gold. Safe, fast, and hassle-free with competitive rates.',
            path: '/goldloan'
        },
       {
            id: 11,
            icon: <ShieldCheck className="w-12 h-12" />,
            title: 'Insurance',
            shortDesc: 'Protect your life, health, and assets',
            features: [
                'Life, health & vehicle coverage',
                'Flexible premiums',
                'Tax benefits',
                'Hassle-free claim process',
                'Wide network support'
            ],
            description: 'Ensure financial protection with our comprehensive insurance plans covering health, life, vehicle, and more.',
            path: '/insuranceloan'
        },
       
        {
            id: 12,
            icon: <CreditCard className="w-12 h-12" />,
            title: 'Credit Card Loan',
            shortDesc: 'Instant funds via your credit card',
            features: [
                'No collateral required',
                'Instant disbursement',
                'Flexible repayment options',
                'Competitive rates',
                'Online application'
            ],
            description: 'Turn your credit card limit into instant cash with a Credit Card Loan. Quick, convenient, and secure.',
            path: '/creditcardloan'
        },
        
    ];

    return (
        <div className="w-full">
            {/* Hero Section */}
            <section className="relative text-white py-20 px-4 overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: `url(${heroBg})` }}
                ></div>
                <div className="absolute inset-0  bg-opacity-60"></div>
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

            {/* Products Grid */}
            <section className="py-16 px-4 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {products.map((product) => (
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
                                    <button
                                        onClick={() => navigate(`${product.path}`)}
                                        className="w-full bg-gradient-to-r from-blue-900 to-blue-700 text-white py-3 rounded font-semibold transition-colors flex items-center justify-center gap-2 hover:from-blue-800 hover:to-blue-600"
                                    >
                                        Enquire Now <ChevronRight size={18} />
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
                    <button
                        onClick={() => navigate("/contact")}
                        className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded font-semibold transition-colors inline-flex items-center gap-2">
                        <Phone size={20} />
                        Contact Our Team <ChevronRight size={18} />
                    </button>

                </div>
            </section>


        </div>
    );
};

export default ProductsPage;
