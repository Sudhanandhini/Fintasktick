// src/pages/products/WorkingCapitalLoanPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, FileText, TrendingUp, Phone, ArrowLeft, RefreshCw, Zap, Target, DollarSign } from 'lucide-react';

const WorkingCapitalLoanPage = () => {
  const features = [
    { 
      icon: <RefreshCw className="w-6 h-6" />, 
      title: "Revolving Credit", 
      desc: "Withdraw and repay as needed" 
    },
    { 
      icon: <Zap className="w-6 h-6" />, 
      title: "Quick Access", 
      desc: "Instant funds for operations" 
    },
    { 
      icon: <Target className="w-6 h-6" />, 
      title: "Flexible Usage", 
      desc: "Use for any business need" 
    },
    { 
      icon: <DollarSign className="w-6 h-6" />, 
      title: "Pay Interest on Usage", 
      desc: "Interest only on utilized amount" 
    }
  ];

  const useCases = [
    { icon: "💰", title: "Accounts Payable", desc: "Clear vendor payments on time" },
    { icon: "👥", title: "Salary & Wages", desc: "Ensure timely employee payments" },
    { icon: "📦", title: "Inventory Purchase", desc: "Stock up raw materials" },
    { icon: "⚡", title: "Utility Bills", desc: "Pay rent, electricity, water" },
    { icon: "🚚", title: "Transportation", desc: "Logistics and delivery costs" },
    { icon: "🔧", title: "Maintenance", desc: "Equipment and facility upkeep" }
  ];

  const businessTypes = [
    "Manufacturing Units",
    "Trading Companies",
    "Service Providers",
    "Wholesalers & Distributors",
    "Retailers",
    "MSME Enterprises",
    "Startups (with revenue)",
    "Contractors"
  ];

  const eligibility = [
    "Business vintage: Minimum 2 years",
    "Annual turnover: Minimum ₹10 lakhs",
    "Age: 21-65 years",
    "Profitable business operations",
    "Good credit score (700+ preferred)"
  ];

  const documents = [
    "Business registration documents",
    "PAN and Aadhaar of proprietors/partners/directors",
    "ITR and audited financials for last 2 years",
    "GST returns for last 12 months",
    "Bank statements for last 12 months",
    "List of major debtors and creditors"
  ];

  const loanTypes = [
    {
      title: "Term Loan",
      desc: "Fixed loan amount with regular EMI payments",
      features: ["Fixed repayment schedule", "Up to 5 years tenure", "Suitable for expansion"]
    },
    {
      title: "Cash Credit/Overdraft",
      desc: "Revolving credit line for daily operations",
      features: ["Pay interest on usage", "Flexible withdrawals", "Continuous access to funds"]
    }
  ];

  const benefits = [
    "Interest charged only on utilized amount",
    "Flexible repayment options",
    "No collateral required (for smaller amounts)",
    "Quick processing and approval",
    "Helps maintain cash flow",
    "Build business credit score",
    "Part payment facility available",
    "Dedicated relationship manager"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-white to-green-50">
      {/* <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <Link to="/products" className="inline-flex items-center gap-2 font-medium hover:opacity-80 transition-opacity" style={{ color: '#002c60' }}>
          <ArrowLeft className="w-5 h-5" /> Back to Products
        </Link>
      </div> */}

      {/* Hero Section */}
      <div className="text-white py-20" style={{ background: 'linear-gradient(135deg, #002c60 0%, #004080 100%)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm mb-4">
                📊 Fuel Your Operations
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Working Capital Loan</h1>
              <p className="text-lg md:text-xl mb-8 opacity-90">
                Manage your business operations smoothly with working capital loans. Cover day-to-day expenses, manage cash flow, and keep your business running efficiently.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/contact" className="bg-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1" style={{ color: '#002c60' }}>
                  Apply Now
                </Link>
                {/* <button className="border-2 border-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all">
                  Calculate Needs
                </button> */}
              </div>
            </div>
            
            {/* <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-2xl">
              <div className="flex items-center gap-2 mb-6">
                <TrendingUp className="w-6 h-6" />
                <h3 className="text-2xl font-bold">Loan Highlights</h3>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-center pb-3 border-b border-white/20">
                  <span className="opacity-90">Loan Amount</span>
                  <span className="font-bold">Up to ₹1 Crore</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-white/20">
                  <span className="opacity-90">Interest Rate</span>
                  <span className="font-bold">9.5% p.a. onwards</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-white/20">
                  <span className="opacity-90">Tenure</span>
                  <span className="font-bold">Up to 5 years</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="opacity-90">Processing</span>
                  <span className="font-bold">2-3 days</span>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>

      {/* Key Stats */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: "Interest Rate", value: "9.5% p.a." },
            { label: "Max Loan", value: "₹1 Crore" },
            { label: "Tenure", value: "Up to 5 years" },
            { label: "Processing", value: "2-3 days" }
          ].map((stat, idx) => (
            <div key={idx} className="bg-white p-6 rounded-xl shadow-lg text-center">
              <p className="text-3xl font-bold mb-2" style={{ color: '#002c60' }}>{stat.value}</p>
              <p className="text-gray-600 text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12" style={{ color: '#002c60' }}>
          Why Choose Working Capital Loan?
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, idx) => (
            <div key={idx} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 duration-300">
              <div className="w-14 h-14 rounded-lg flex items-center justify-center mb-4 text-white" style={{ background: 'linear-gradient(135deg, #002c60 0%, #004080 100%)' }}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-2" style={{ color: '#002c60' }}>{feature.title}</h3>
              <p className="text-gray-600">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Loan Types */}
      <div className="py-16" style={{ background: 'linear-gradient(to right, rgba(0, 44, 96, 0.05), rgba(0, 64, 128, 0.05))' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12" style={{ color: '#002c60' }}>
            Types of Working Capital Financing
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {loanTypes.map((type, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl shadow-xl">
                <h3 className="text-2xl font-bold mb-3" style={{ color: '#002c60' }}>{type.title}</h3>
                <p className="text-gray-600 mb-6">{type.desc}</p>
                <ul className="space-y-3">
                  {type.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Use Cases */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4" style={{ color: '#002c60' }}>
          What Can You Use It For?
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Cover all your day-to-day business operational expenses
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          {useCases.map((useCase, idx) => (
            <div key={idx} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all text-center">
              <div className="text-4xl mb-3">{useCase.icon}</div>
              <h3 className="text-lg font-bold mb-2" style={{ color: '#002c60' }}>{useCase.title}</h3>
              <p className="text-gray-600 text-sm">{useCase.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Eligible Business Types */}
      <div className="py-16" style={{ background: 'linear-gradient(to right, rgba(0, 44, 96, 0.05), rgba(0, 64, 128, 0.05))' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12" style={{ color: '#002c60' }}>
            Eligible Business Types
          </h2>
          <div className="grid md:grid-cols-4 gap-4">
            {businessTypes.map((type, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all text-center border-2" style={{ borderColor: 'rgba(0, 44, 96, 0.1)' }}>
                <CheckCircle className="w-8 h-8 mx-auto mb-3" style={{ color: '#002c60' }} />
                <p className="font-semibold" style={{ color: '#002c60' }}>{type}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12" style={{ color: '#002c60' }}>
          Key Benefits
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, idx) => (
            <div key={idx} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all flex items-start gap-3">
              <CheckCircle className="w-5 h-5 flex-shrink-0 mt-1" style={{ color: '#002c60' }} />
              <span className="text-gray-700 text-sm">{benefit}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Eligibility & Documents */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            <div className="bg-white p-8 rounded-2xl shadow-xl">
              <h3 className="text-2xl md:text-3xl font-bold mb-6" style={{ color: '#002c60' }}>Eligibility Criteria</h3>
              <ul className="space-y-4">
                {eligibility.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-xl">
              <h3 className="text-2xl md:text-3xl font-bold mb-6" style={{ color: '#002c60' }}>Required Documents</h3>
              <ul className="space-y-4">
                {documents.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <FileText className="w-6 h-6 flex-shrink-0 mt-1" style={{ color: '#002c60' }} />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* How It Works */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-center mb-12" style={{ color: '#002c60' }}>How It Works</h2>
        <div className="grid md:grid-cols-4 gap-6">
          {[
            { step: "1", title: "Apply Online", desc: "Submit your application with documents" },
            { step: "2", title: "Assessment", desc: "We evaluate your business financials" },
            { step: "3", title: "Approval", desc: "Get approved within 2-3 days" },
            { step: "4", title: "Disbursal", desc: "Access funds immediately" }
          ].map((item, idx) => (
            <div key={idx} className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4" style={{ background: 'linear-gradient(135deg, #002c60 0%, #004080 100%)' }}>
                {item.step}
              </div>
              <h3 className="font-bold mb-2" style={{ color: '#002c60' }}>{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="rounded-3xl p-8 md:p-12 text-center text-white shadow-2xl" style={{ background: 'linear-gradient(135deg, #002c60 0%, #004080 100%)' }}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Need Working Capital for Your Business?</h2>
          <p className="text-lg md:text-xl mb-8 opacity-90">
            Apply now and keep your business operations running smoothly
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/contact" className="bg-white px-10 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-all shadow-lg inline-flex items-center justify-center gap-2" style={{ color: '#002c60' }}>
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

export default WorkingCapitalLoanPage;