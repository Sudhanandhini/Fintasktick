import React, { useState, useEffect, useRef } from 'react';
import { Target, Eye, Award, Users, TrendingUp, CheckCircle } from 'lucide-react';
import heroBg3 from '../assets/about.jpg';
import heroBg4 from '../assets/about2.jpg';

// Counter Component - moved outside
const Counter = ({ end, suffix, label, description, inView, duration }) => {
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
      <div className="text-5xl font-bold text-orange-500 mb-3">
        {count}{suffix}
      </div>
      <h3 className="text-xl font-semibold mb-2">{label}</h3>
      <p className="text-blue-100">{description}</p>
    </div>
  );
};

const AboutPage = () => {
  const [inView, setInView] = useState(false);
  const sectionRef = useRef(null);

  const stats = [
    { end: 20, suffix: '+', label: 'Years of Experience', description: 'Combined expertise from former banking professionals' },
    { end: 5000, suffix: '+', label: 'Satisfied Clients', description: 'Successfully served thousands of customers' },
    { end: 100, suffix: '%', label: 'Personalized Service', description: 'Tailored solutions for your unique needs' }
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

  const values = [
    {
      icon: <Award className="w-12 h-12 text-orange-500" />,
      title: 'Excellence',
      description: 'We strive for excellence in every service we provide, ensuring the highest quality standards.'
    },
    {
      icon: <Users className="w-12 h-12 text-orange-500" />,
      title: 'Customer First',
      description: 'Our customers are at the heart of everything we do. Your satisfaction is our priority.'
    },
    {
      icon: <CheckCircle className="w-12 h-12 text-orange-500" />,
      title: 'Integrity',
      description: 'We maintain the highest standards of integrity in all our actions and relationships.'
    },
    {
      icon: <TrendingUp className="w-12 h-12 text-orange-500" />,
      title: 'Innovation',
      description: 'We continuously innovate to provide better financial solutions for our clients.'
    }
  ];

  const teamMembers = [
    {
      name: 'Former Banking Professionals',
      role: 'Financial Advisors',
      description: 'Our team comprises experienced bankers with deep industry knowledge.'
    },
    {
      name: 'Loan Specialists',
      role: 'Product Experts',
      description: 'Specialized in various loan products to meet diverse customer needs.'
    },
    {
      name: 'Customer Support',
      role: 'Service Excellence',
      description: 'Dedicated team ensuring smooth loan processing and customer satisfaction.'
    }
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative text-white py-20 px-4 overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroBg3})` }}
        ></div>

        {/* Dark Overlay for better text readability */}
        <div className="absolute inset-0  bg-opacity-70"></div>

        {/* Content */}
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About Fintasktick
            </h1>
            <p className="text-xl mb-8 text-blue-100">
              Your trusted partner in financial solutions with over 20 years of combined experience
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Who We Are</h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Fintasktick is your trusted partner in helping you find the best financial products that meet your specific requirements. With our experienced team and vast network of lenders, we ensure you get a loan that fits your needs perfectly.
              </p>
              <p className="text-gray-600 mb-4 leading-relaxed">
                What sets us apart is our team's collective experience of over 20 years, comprising former bankers who have an in-depth understanding of the financial landscape. We leverage our expertise to carefully analyze your requirements and provide personalized guidance.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We believe that every customer is unique, and we strive to tailor our services to fit your exact needs. Whether you are planning to expand your business, fulfill personal aspirations, or purchase your dream home, we are here to guide you.
              </p>
            </div>
            <div className="bg-gradient-to-br from-orange-50 to-blue-50 p-8 rounded-lg">
              <img src={heroBg4} alt="about" className="rounded-lg shadow-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center">
                  <Eye className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Our Vision</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Empowering Individuals, Creating Opportunities. We are committed to providing financial solutions that empower individuals and businesses to realize their dreams and aspirations. Through our dedicated efforts, we strive to grow our presence across the entire region, making a positive impact on the economy and the lives of people we serve.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                  <Target className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Empowering Financial Growth - Disbursing INR 5000 Crore in Loans within the Next 10 Years. At our company, we are driven by a bold and ambitious mission to transform lives by making a substantial impact on individuals, businesses, and communities we serve through accessible and efficient financial solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The principles that guide us in delivering exceptional financial services
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow text-center">
                <div className="flex justify-center mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600 text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us - Counter Section */}
      <section ref={sectionRef} className="py-16 px-4 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Fintasktick?</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <Counter
                key={index}
                end={stat.end}
                suffix={stat.suffix}
                label={stat.label}
                description={stat.description}
                inView={inView}
                duration={2000}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Expert Team</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Experienced professionals dedicated to your financial success
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-md text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-orange-600 font-semibold mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;