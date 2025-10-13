import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Clock, Users, TrendingUp, Home, Car, GraduationCap, Building2, Briefcase, Coins, ChevronLeft, DollarSign,Cog, ChevronRight, CreditCard  } from 'lucide-react';
import heroBg1 from '../assets/14.jpg';
import heroBg2 from '../assets/2.jpg';
import heroBg3 from '../assets/3.jpg';

// Counter Component
const Counter = ({ end, suffix, label, inView, duration = 2000 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;

    let startTime;
    let animationFrame;

    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = (currentTime - startTime) / duration;

      if (progress < 1) {
        setCount(Math.floor(end * progress));
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [inView, end, duration]);

  return (
    <div className="text-center">
      <div className="text-3xl md:text-4xl font-bold text-orange-500 mb-2">
        {count.toLocaleString()}{suffix}
      </div>
      <div className="text-sm md:text-base text-blue-100">{label}</div>
    </div>
  );
};

const HomePage = () => {
  const [inView, setInView] = useState(false);
  const sectionRef = useRef(null);

  // Slider state
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Slider data
  const slides = [
    {
      image: heroBg1,
      title: 'Welcome to Fintasktick - Your Trusted Loan Partners!',
      description: 'Fintasktick is your trusted partner in helping you find the best financial products that meet your specific requirements.',
      primaryBtn: { text: 'Explore Products', link: '/products' },
      secondaryBtn: { text: 'Contact Us', link: '/contact' }
    },
    {
      image: heroBg2,
      title: 'Get the Best Loan Deals',
      description: 'Compare multiple lenders and find the perfect loan solution tailored to your needs with competitive rates.',
      primaryBtn: { text: 'Apply Now', link: '/contact' },
      secondaryBtn: { text: 'Learn More', link: '/about' }
    },
    {
      image: heroBg3,
      title: 'Expert Financial Guidance',
      description: 'Over 20 years of experience helping customers achieve their financial goals with personalized solutions.',
      primaryBtn: { text: 'View Services', link: '/services' },
      secondaryBtn: { text: 'Contact Us', link: '/contact' }
    }
  ];

  // Auto-play functionality for slider
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isPaused, slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  // Stats with numeric values for counter
  const stats = [
    { end: 20, suffix: '+', label: 'Years in Business' },
    { end: 100, suffix: '+ Cr', label: 'Unsecured Loans Disbursed' },
    { end: 500, suffix: '+ Cr', label: 'Secured Loans Disbursed' },
    { end: 2, suffix: '+ Cr', label: 'Insurance' },
    { end: 3000, suffix: '+', label: 'Clients Serviced' }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const whyChooseUs = [
    {
      icon: <Shield className="w-12 h-12 text-orange-500" />,
      title: 'Experience You Can Rely On',
      description: 'Our team brings over 20 years of collective experience, comprising former bankers with in-depth understanding of the financial landscape.'
    },
    {
      icon: <Users className="w-12 h-12 text-orange-500" />,
      title: 'Your Loan, Your Way',
      description: 'We understand that each individual has unique financial goals. We tailor our services to align with your specific needs and aspirations.'
    },
    {
      icon: <Clock className="w-12 h-12 text-orange-500" />,
      title: 'Simple and Hassle-Free',
      description: 'Our user-friendly platform streamlines the loan application process, making it simple to compare offers from multiple lenders.'
    }
  ];

  const products = [
   
    {
      icon: <Home className="w-8 h-8" />,
      title: 'Home Loan',
      description: 'Competitive interest rates and affordable EMIs for your dream home.',
      path: '/products'
    },
    {
      icon: <Building2 className="w-8 h-8" />,
      title: 'Mortgage Loan',
      description: 'Leverage your property value to meet diverse financial needs.',
      path: '/products'
    },
     {
      icon: <Users className="w-8 h-8" />,
      title: 'Personal Loan',
      description: 'Quick funds for any purpose without collateral or extensive documentation.',
      path: '/products'
    },
    {
      icon: <Briefcase className="w-8 h-8" />,
      title: 'Business Loan',
      description: 'Fuel your business growth with comprehensive loan solutions.',
      path: '/products'
    },
    {
      icon: <Car className="w-8 h-8" />,
      title: 'Car Loan',
      description: 'Turn your dream car into reality with attractive rates.',
      path: '/products'
    },
     {
      icon: <GraduationCap className="w-8 h-8" />,
      title: 'Education Loan',
      description: 'Invest in your future with education loan benefits.',
      path: '/products'
    },
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: 'OD Loan',
      description: 'Ensures financial flexibility in emergencies.',
      path: '/products'
    },
     {
      icon: <Cog className="w-8 h-8" />,
      title: 'Machinery Loan',
      description: 'Enhance productivity with our Machinery Loan options.',
      path: '/products'
    },

     {
      icon: <TrendingUp className="w-8 h-8" />,
      title: 'Working Capital',
      description: 'Meet recurring expenses and ensure smooth business operations.',
      path: '/products'
    },
    {
      icon: <Coins className="w-8 h-8" />,
      title: 'Gold Loan',
      description: 'Unlock the power of your gold with hassle-free loans.',
      path: '/products'
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: 'Insurance',
      description: 'Protect your life, health, and assets with comprehensive coverage.',
      path: '/products'
    },
    {
      icon: <CreditCard  className="w-8 h-8" />,
      title: 'Credit Card Loan',
      description: 'Turn your credit card limit into instant cash with a Credit Card Loan.',
      path: '/products'
    },
    
    
  ];

  return (
    <div className="w-full">
      {/* Hero Slider Section */}
      <section
        className="relative text-white overflow-hidden"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Slides Container */}
        <div className="relative h-[500px] md:h-[600px]">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${slide.image})` }}
              ></div>

              {/* Dark Overlay */}
              <div className="absolute inset-0  bg-opacity-100"></div>

              {/* Content */}
              <div className="absolute inset-0 flex items-center">
                <div className="max-w-7xl mx-auto px-4 w-full">
                  <div className="max-w-3xl">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">
                      {slide.title}
                    </h1>
                    <p className="text-xl mb-8 text-white">
                      {slide.description}
                    </p>
                    <div className="flex gap-4">
                      <Link
                        to={slide.primaryBtn.link}
                        className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded font-semibold flex items-center gap-2 transition-colors"
                      >
                        {slide.primaryBtn.text} <ArrowRight size={20} />
                      </Link>
                      <Link
                        to={slide.secondaryBtn.link}
                        className="bg-white text-blue-900 hover:bg-gray-100 px-8 py-3 rounded font-semibold transition-colors"
                      >
                        {slide.secondaryBtn.text}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Previous Button */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-30 hover:bg-opacity-50 text-white p-3 rounded-full transition-all z-20"
          aria-label="Previous slide"
        >
          <ChevronLeft size={24} />
        </button>

        {/* Next Button */}
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-30 hover:bg-opacity-50 text-white p-3 rounded-full transition-all z-20"
          aria-label="Next slide"
        >
          <ChevronRight size={24} />
        </button>

        {/* Dots Navigation */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-20">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                currentSlide === index
                  ? 'bg-orange-500 w-8'
                  : 'bg-white bg-opacity-50 hover:bg-opacity-75'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Fintasktick?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We leverage our expertise to provide personalized guidance for informed decisions
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                <div className="mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Stats Section with Counter */}
      <section ref={sectionRef} className="py-16 px-4 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Portfolio</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            {stats.map((stat, index) => (
              <Counter
                key={index}
                end={stat.end}
                suffix={stat.suffix}
                label={stat.label}
                inView={inView}
                duration={2000}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-700 leading-relaxed">
                Empowering Individuals, Creating Opportunities. We are committed to providing financial solutions that empower individuals and businesses to realize their dreams and aspirations.
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-700 leading-relaxed">
                Empowering Financial Growth - Disbursing INR 5000 Crore in Loans within the Next 10 Years. We are driven by a bold and ambitious mission to transform lives.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Products
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive financial solutions tailored to your needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product, index) => (
              <Link
                key={index}
                to={product.path}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all hover:-translate-y-1 group"
              >
                <div className="text-orange-500 mb-4 group-hover:scale-110 transition-transform">
                  {product.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{product.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{product.description}</p>
              </Link>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              to="/products"
              className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded font-semibold transition-colors"
            >
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* Other Services Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Other Services
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-orange-500">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Accounting & Taxation</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Company registration</li>
                <li>• GST registration</li>
                <li>• Income tax filing</li>
                <li>• Financial preparation</li>
                <li>• MSME registration</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-blue-500">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Legal Services</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Property Registration</li>
                <li>• Encumbrance Certificate</li>
                <li>• Tax paid receipt</li>
                <li>• Khata certificate</li>
                <li>• Sale agreement</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md border-t-4 border-green-500">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Real Estate & Others</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Buying and Selling</li>
                <li>• Residential properties</li>
                <li>• Commercial properties</li>
                <li>• Plan & Estimation</li>
                <li>• Insurance services</li>
              </ul>
            </div>
          </div>

          <div className="text-center mt-10">
            <Link
              to="/services"
              className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded font-semibold transition-colors"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative text-white py-20 px-4 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroBg3})` }}
        ></div>
        <div className="absolute inset-0 bg-opacity-70"></div>

        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8">
            Let us help you find the perfect financial solution for your needs
          </p>
          <Link
            to="/contact"
            className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded font-semibold transition-colors"
          >
            Apply Now
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;