import React, { useState, useEffect } from 'react';
import { FileText, Scale, Building, Shield, Calculator, BookOpen, ClipboardCheck, Briefcase, CheckCircle, ChevronLeft, ChevronRight } from 'lucide-react';
import heroBg1 from '../assets/bg-pheader.jpg';

const ServicesPage = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    
    const mainServices = [
        {
            icon: <Calculator className="w-12 h-12 text-orange-500" />,
            title: 'Accounting & Taxation Consultancy',
            description: 'Comprehensive accounting and tax solutions for individuals and businesses',
            services: [
                'Company registration',
                'Partnership registration',
                'Proprietorship registration',
                'MSME registration',
                'Labour registration',
                'GST registration',
                'Income tax filing',
                'Preparation of financials',
                'Project report - financial',
                'Provisional financials',
                'Form – 16'
            ]
        },
        {
            icon: <Scale className="w-12 h-12 text-blue-500" />,
            title: 'Legal Services',
            description: 'Professional legal assistance for property and documentation',
            services: [
                'Property Registration',
                'Encumbrance Certificate (EC)',
                'Tax paid receipt',
                'Khata extract/certificate',
                'Sale agreement',
                'Legal documentation',
                'Property verification',
                'Title search services'
            ]
        },
        {
            icon: <Building className="w-12 h-12 text-green-500" />,
            title: 'Real Estate Services',
            description: 'Complete real estate solutions for buying and selling properties',
            services: [
                'Residential properties',
                'Industrial properties',
                'Commercial properties',
                'Property buying assistance',
                'Property selling support',
                'Market analysis',
                'Property valuation',
                'Documentation support'
            ]
        },
        {
            icon: <FileText className="w-12 h-12 text-purple-500" />,
            title: 'Plan & Estimation',
            description: 'Professional architectural planning and cost estimation services',
            services: [
                'Architectural planning',
                'Construction estimates',
                'Material costing',
                'Project feasibility',
                'Budget planning',
                'Design consultation',
                'Renovation planning'
            ]
        },
        {
            icon: <Shield className="w-12 h-12 text-red-500" />,
            title: 'Insurance Services',
            description: 'Comprehensive insurance solutions for life, health, and assets',
            services: [
                'Life insurance',
                'Health insurance',
                'Vehicle insurance',
                'Property insurance',
                'Business insurance',
                'Term insurance',
                'Investment plans',
                'Claims assistance'
            ]
        }
    ];

    // Auto-play effect - ADD THIS
    useEffect(() => {
        if (isPaused) return;

        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % mainServices.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [isPaused, mainServices.length]);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % mainServices.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + mainServices.length) % mainServices.length);
    };

    const goToSlide = (index) => {
        setCurrentSlide(index);
    };

    // ADD THESE TWO FUNCTIONS
    const handleMouseEnter = () => {
        setIsPaused(true);
    };

    const handleMouseLeave = () => {
        setIsPaused(false);
    };

    const benefits = [
        {
            icon: <CheckCircle className="w-8 h-8 text-orange-500" />,
            title: 'Expert Guidance',
            description: 'Professional advice from experienced consultants'
        },
        {
            icon: <ClipboardCheck className="w-8 h-8 text-orange-500" />,
            title: 'End-to-End Support',
            description: 'Complete assistance from start to finish'
        },
        {
            icon: <BookOpen className="w-8 h-8 text-orange-500" />,
            title: 'Transparent Process',
            description: 'Clear communication and documentation'
        },
        {
            icon: <Briefcase className="w-8 h-8 text-orange-500" />,
            title: 'One-Stop Solution',
            description: 'All services under one roof'
        }
    ];

    return (
        <div className="w-full">
            {/* Hero Section */}
            <section className="relative text-white py-20 px-4 overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                    style={{ backgroundImage: `url(${heroBg1})` }}
                ></div>
                <div className="absolute inset-0  bg-opacity-70"></div>
                
                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="max-w-3xl">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">
                            Our Services
                        </h1>
                        <p className="text-xl mb-8 text-blue-100">
                            Comprehensive business and financial services beyond lending
                        </p>
                    </div>
                </div>
            </section>

            {/* Main Services Slider */}
            <section className="py-16 px-4 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            What We Offer
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Professional services to support your business and personal needs
                        </p>
                    </div>

                    <div 
                        className="relative"
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                    >
                        <div className="overflow-hidden">
                            <div
                                className="flex transition-transform duration-500 ease-in-out"
                                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                            >
                                {mainServices.map((service, index) => (
                                    <div key={index} className="w-full flex-shrink-0">
                                        <div className="bg-white rounded-lg shadow-lg overflow-hidden mx-2">
                                            <div className="flex flex-col md:flex-row">
                                                <div className="md:w-1/3 bg-gradient-to-br from-gray-50 to-gray-100 p-8 flex flex-col justify-center items-center text-center">
                                                    <div className="mb-4">{service.icon}</div>
                                                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                                                        {service.title}
                                                    </h3>
                                                    <p className="text-gray-600">{service.description}</p>
                                                </div>

                                                <div className="md:w-2/3 p-8">
                                                    <h4 className="text-lg font-semibold text-gray-900 mb-4">
                                                        Services Include:
                                                    </h4>
                                                    <div className="grid md:grid-cols-2 gap-3">
                                                        {service.services.map((item, idx) => (
                                                            <div key={idx} className="flex items-start gap-2">
                                                                <CheckCircle
                                                                    size={18}
                                                                    className="text-orange-500 mt-1 flex-shrink-0"
                                                                />
                                                                <span className="text-gray-700">{item}</span>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <button
                            onClick={prevSlide}
                            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white hover:bg-gray-100 text-gray-800 p-3 rounded-full shadow-lg transition-all z-10"
                        >
                            <ChevronLeft size={24} />
                        </button>

                        <button
                            onClick={nextSlide}
                            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white hover:bg-gray-100 text-gray-800 p-3 rounded-full shadow-lg transition-all z-10"
                        >
                            <ChevronRight size={24} />
                        </button>
                    </div>

                    <div className="flex justify-center gap-2 mt-8">
                        {mainServices.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => goToSlide(index)}
                                className={`w-3 h-3 rounded-full transition-all ${
                                    currentSlide === index
                                        ? 'bg-orange-500 w-8'
                                        : 'bg-gray-300 hover:bg-gray-400'
                                }`}
                            />
                        ))}
                    </div>

                    <div className="text-center mt-4 text-gray-600">
                        {currentSlide + 1} / {mainServices.length}
                    </div>
                </div>
            </section>

            {/* Why Choose Our Services */}
            <section className="py-16 px-4 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Why Choose Our Services?
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            We provide comprehensive solutions with professional expertise
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {benefits.map((benefit, index) => (
                            <div key={index} className="text-center p-6 bg-gray-50 rounded-lg hover:shadow-md transition-shadow">
                                <div className="flex justify-center mb-4">{benefit.icon}</div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
                                <p className="text-gray-600 text-sm">{benefit.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Service Process */}
            <section className="py-16 px-4 bg-gray-50">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            How We Work
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Our streamlined process ensures efficient service delivery
                        </p>
                    </div>

                    <div className="grid md:grid-cols-5 gap-6">
                        <div className="text-center">
                            <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                                1
                            </div>
                            <h3 className="font-bold text-gray-900 mb-2">Consultation</h3>
                            <p className="text-gray-600 text-sm">Initial discussion to understand your needs</p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                                2
                            </div>
                            <h3 className="font-bold text-gray-900 mb-2">Assessment</h3>
                            <p className="text-gray-600 text-sm">Detailed evaluation and planning</p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                                3
                            </div>
                            <h3 className="font-bold text-gray-900 mb-2">Documentation</h3>
                            <p className="text-gray-600 text-sm">Gathering required documents</p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                                4
                            </div>
                            <h3 className="font-bold text-gray-900 mb-2">Processing</h3>
                            <p className="text-gray-600 text-sm">Complete service execution</p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                                5
                            </div>
                            <h3 className="font-bold text-gray-900 mb-2">Delivery</h3>
                            <p className="text-gray-600 text-sm">Final service delivery and support</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Industries We Serve */}
            <section className="py-16 px-4 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Industries We Serve
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-4 gap-6">
                        {['Manufacturing', 'Retail', 'Real Estate', 'Healthcare', 'Education', 'Hospitality', 'IT Services', 'Construction'].map((industry, index) => (
                            <div key={index} className="bg-gradient-to-br from-orange-50 to-blue-50 p-6 rounded-lg text-center hover:shadow-md transition-shadow">
                                <Building className="w-10 h-10 text-orange-500 mx-auto mb-3" />
                                <h3 className="font-semibold text-gray-900">{industry}</h3>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ServicesPage;