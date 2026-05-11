// src/pages/products/HomeLoanPage.jsx
import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, FileText, Clock, Shield, Phone, Home, TrendingUp, ArrowLeft, Calculator } from 'lucide-react';

const styles = `
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  
  @keyframes slideUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  @keyframes slideInLeft {
    from {
      opacity: 0;
      transform: translateX(-50px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
  
  @keyframes slideInRight {
    from {
      opacity: 0;
      transform: translateX(50px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
  
  @keyframes scaleIn {
    from {
      opacity: 0;
      transform: scale(0.9);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }
  
  @keyframes pulse-light {
    0%, 100% {
      opacity: 1;
    }
    50% {
      opacity: 0.7;
    }
  }
  
  .scroll-section {
    opacity: 0;
  }
  
  .scroll-section.visible {
    opacity: 1;
  }
  
  .animate-fade-in {
    animation: fadeIn 0.6s ease-out forwards;
  }
  
  .animate-slide-up {
    animation: slideUp 0.6s ease-out forwards;
  }
  
  .animate-slide-left {
    animation: slideInLeft 0.6s ease-out forwards;
  }
  
  .animate-slide-right {
    animation: slideInRight 0.6s ease-out forwards;
  }
  
  .animate-scale-in {
    animation: scaleIn 0.6s ease-out forwards;
  }
  
  .animate-pulse-light {
    animation: pulse-light 2s ease-in-out infinite;
  }
  
  .stagger-1 { animation-delay: 0.1s; }
  .stagger-2 { animation-delay: 0.2s; }
  .stagger-3 { animation-delay: 0.3s; }
  .stagger-4 { animation-delay: 0.4s; }
  .stagger-5 { animation-delay: 0.5s; }
  .stagger-6 { animation-delay: 0.6s; }
`;

const HomeLoanPage = () => {
  const [loanAmount, setLoanAmount] = useState(5000000);
  const [tenure, setTenure] = useState(20);
  const interestRate = 6.5;

  // Scroll animation hook
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          // Get all animated children and apply classes
          const children = entry.target.querySelectorAll('[data-animate]');
          children.forEach((child) => {
            const animationType = child.dataset.animate;
            if (animationType) {
              child.classList.add(animationType);
            }
          });
        }
      });
    }, observerOptions);

    const sections = document.querySelectorAll('.scroll-section');
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  const calculateEMI = () => {
    const principal = loanAmount;
    const ratePerMonth = interestRate / 12 / 100;
    const numberOfMonths = tenure * 12;
    
    const emi = (principal * ratePerMonth * Math.pow(1 + ratePerMonth, numberOfMonths)) / 
                (Math.pow(1 + ratePerMonth, numberOfMonths) - 1);
    
    return Math.round(emi);
  };

  const features = [
    { 
      icon: <Home className="w-6 h-6" />, 
      title: "Up to 80% Funding", 
      desc: "Finance up to 80% of property value" 
    },
    { 
      icon: <Clock className="w-6 h-6" />, 
      title: "Long Tenure", 
      desc: "Repay over 30 years" 
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Low Interest Rates",
      desc: "Starting from 7.1% per annum"
    },
    { 
      icon: <Shield className="w-6 h-6" />, 
      title: "Tax Benefits", 
      desc: "" 
    }
  ];

  const eligibility = [
    "Age: 21-65 years for salaried, 21-70 years for self-employed",
    "Minimum income: ₹25,000 per month for salaried",
    "Credit score: should be 700+ and varies case to case",
    "Employment: Min 2 years experience (salaried) or 3 years in business"
  ];

  const documents = [
    "Identity & Address Proof (Aadhaar, PAN, Passport, Etc)",
    "Income proof (Salary slips, ITR, Bank statements)",
    "Passport size photographs",
    "Property documents (Katha, Sale deed and Other documents)",
  ];

  const loanTypes = [
    { title: "Home Purchase Loan", desc: "For buying ready-to-move-in properties" },
    { title: "Home Construction Loan", desc: "For constructing your dream home" },
    { title: "Home Improvement Loan", desc: "For renovating your existing home" },
    { title: "Plot Loan (Residential, Commercial, Industrial)", desc: "For purchasing residential, commercial, and industrial plots" },
    { title: "Home Loan Composite", desc: "For purchasing land and constructing house" },
    { title: "Home Loan Refinance", desc: "Refinance your home loan for better rates and manageable EMIs." },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <style>{styles}</style>
      {/* <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <Link to="/products" className="inline-flex items-center gap-2 font-medium hover:opacity-80 transition-opacity" style={{ color: '#003a77' }}>
          <ArrowLeft className="w-5 h-5" /> Back to Products
        </Link>
      </div> */}

      {/* Hero Section */}
      <div className="text-white py-20" style={{ background: 'linear-gradient(135deg, #003a77 0%, #004080 100%)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-left">
              <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm mb-4 animate-scale-in">
                🏠 Own Your Dream Home
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-slide-up stagger-1">Home Loan</h1>
              <p className="text-lg md:text-xl mb-8 opacity-90 animate-slide-up stagger-2">
                Turn your dream of owning a home into reality with our flexible home loan solutions at attractive rates.
              </p>
              <div className="flex flex-wrap gap-4 animate-slide-up stagger-3">
                <Link to="/contact" className="bg-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1" style={{ color: '#003a77' }}>
                  Apply Now
                </Link>
                {/* <button className="border-2 border-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all">
                  Check Eligibility
                </button> */}
              </div>
            </div>
            
            {/* EMI Calculator */}
            {/* <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-2xl">
              <div className="flex items-center gap-2 mb-6">
                <Calculator className="w-6 h-6" />
                <h3 className="text-2xl font-bold">EMI Calculator</h3>
              </div>
              <div className="space-y-6">
                <div>
                  <label className="block mb-2">Loan Amount: ₹{(loanAmount/100000).toFixed(1)} Lakhs</label>
                  <input 
                    type="range" 
                    min="500000" 
                    max="10000000" 
                    step="100000"
                    value={loanAmount}
                    onChange={(e) => setLoanAmount(Number(e.target.value))}
                    className="w-full h-2 bg-white/30 rounded-lg appearance-none cursor-pointer"
                  />
                </div>
                <div>
                  <label className="block mb-2">Tenure: {tenure} years</label>
                  <input 
                    type="range" 
                    min="5" 
                    max="30" 
                    step="1"
                    value={tenure}
                    onChange={(e) => setTenure(Number(e.target.value))}
                    className="w-full h-2 bg-white/30 rounded-lg appearance-none cursor-pointer"
                  />
                </div>
                <div className="bg-white/20 p-4 rounded-lg">
                  <p className="text-sm mb-2">Monthly EMI</p>
                  <p className="text-3xl font-bold">₹{calculateEMI().toLocaleString()}</p>
                  <p className="text-sm mt-2 opacity-90">@ {interestRate}% interest rate</p>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>

      {/* Key Stats */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 scroll-section">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: "Interest Rate starts from", value: "7.1% P.A." },
            { label: "Max Loan", value: "₹20 Crores" },
            { label: "Tenure", value: "Up to 30 years" },
            { label: "Processing Fees", value: "Starts from 10k + GST" }
          ].map((stat, idx) => (
            <div key={idx} className={`bg-white p-6 rounded-xl shadow-lg text-center transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 animate-slide-up stagger-${(idx % 4) + 1}`} data-animate="animate-slide-up">
              <p className="text-3xl font-bold mb-2" style={{ color: '#003a77' }}>{stat.value}</p>
              <p className="text-gray-600 text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ROI Disclaimer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-3 mb-2 ">
        <p className="text-sm text-gray-500 italic text-center">*ROI will Be based On Customer's Credit rating and Bankers Decision</p>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 scroll-section">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 animate-slide-up" style={{ color: '#003a77' }} data-animate="animate-slide-up">
          Key Features
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, idx) => (
            <div key={idx} className={`bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 duration-300 animate-scale-in stagger-${(idx % 4) + 1}`} data-animate="animate-scale-in">
              <div className="w-14 h-14 rounded-lg flex items-center justify-center mb-4 text-white" style={{ background: '#f97316' }}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-2" style={{ color: '#003a77' }}>{feature.title}</h3>
              <p className="text-gray-600">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Loan Types */}
      <div className="py-16 scroll-section" style={{ background: 'linear-gradient(to right, rgba(0, 44, 96, 0.05), rgba(0, 64, 128, 0.05))' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 animate-slide-up" style={{ color: '#003a77' }} data-animate="animate-slide-up">
            Types of Home Loans
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {loanTypes.map((type, idx) => (
              <div key={idx} className={`bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all animate-slide-up stagger-${(idx % 6) + 1}`} data-animate="animate-slide-up">
                <h3 className="text-xl font-bold mb-2" style={{ color: '#f97316' }}>{type.title}</h3>
                <p className="text-gray-600">{type.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Eligibility & Documents */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 scroll-section">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          <div className="bg-white p-8 rounded-2xl shadow-xl animate-slide-left hover:shadow-2xl transition-all" data-animate="animate-slide-left">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 animate-slide-up stagger-1" style={{ color: '#003a77' }} data-animate="animate-slide-up">Eligibility Criteria</h3>
            <ul className="space-y-4">
              {eligibility.map((item, idx) => (
                <li key={idx} className={`flex items-start gap-3 animate-slide-up stagger-${(idx % 4) + 2}`} data-animate="animate-slide-up">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-xl animate-slide-right hover:shadow-2xl transition-all" data-animate="animate-slide-right">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 animate-slide-up stagger-1" style={{ color: '#003a77' }} data-animate="animate-slide-up">Required Documents</h3>
            <ul className="space-y-4">
              {documents.map((item, idx) => (
                <li key={idx} className={`flex items-start gap-3 animate-slide-up stagger-${(idx % 4) + 2}`} data-animate="animate-slide-up">
                  <FileText className="w-6 h-6 flex-shrink-0 mt-1" style={{ color: '#003a77' }} />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 scroll-section">
        <div className="rounded-3xl p-8 md:p-12 text-center text-white shadow-2xl animate-scale-in" style={{ background: 'linear-gradient(135deg, #003a77 0%, #004080 100%)' }} data-animate="animate-scale-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#f97316] animate-slide-up stagger-1" data-animate="animate-slide-up">Ready to Buy Your Dream Home?</h2>
          <p className="text-lg md:text-xl mb-8 opacity-90 animate-slide-up stagger-2" data-animate="animate-slide-up">
            Start your home buying journey
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-slide-up stagger-3" data-animate="animate-slide-up">
            <Link to="/contact" className="bg-white px-10 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-all shadow-lg inline-flex items-center justify-center gap-2 hover:shadow-xl transform hover:-translate-y-1" style={{ color: '#003a77' }}>
              Apply Now <ArrowRight className="w-5 h-5" />
            </Link>
            <a href="tel:+911234567890" className="border-2 border-white px-10 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all inline-flex items-center justify-center gap-2">
              <Phone className="w-5 h-5" /> Call Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeLoanPage;

