// src/pages/products/MortgageLoanPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, FileText, Building2, Phone, ArrowLeft, Home, IndianRupee, Shield, TrendingUp } from 'lucide-react';

const MortgageLoanPage = () => {
  const features = [
    { 
      icon: <IndianRupee className="w-6 h-6" />, 
      title: "High Loan Amount", 
      desc: "Get up to ₹100 Crores against property" 
    },
    { 
      icon: <TrendingUp className="w-6 h-6" />, 
      title: "Low Interest Rates", 
      desc: "Competitive rates from 8.9% P.A." 
    },
    { 
      icon: <Shield className="w-6 h-6" />, 
      title: "Flexible Usage", 
      desc: "Use for any legitimate purpose" 
    },
    { 
      icon: <Building2 className="w-6 h-6" />, 
      title: "Long Tenure", 
      desc: "Repay over 20 years" 
    }
  ];

  const useCases = [
    { icon: "🏠", title: "Property Purchase", desc: "Buy new residential/commercial property" },
    { icon: "🔨", title: "Home Renovation", desc: "Upgrade or expand your property" },
    { icon: "💼", title: "Business Expansion", desc: "Grow your business ventures" },
    { icon: "🌾", title: "Agriculture Land", desc: "Start farming" },
    { icon: "🎓", title: "Education", desc: "Fund higher education" },
    { icon: "🏥", title: "Medical Emergency", desc: "Cover healthcare costs" }
  ];

  const propertyTypes = [
    "Residential Property/Plot",
    "Commercial Property/Plot",
    "Industrial Property/Plot",
    "Mixed-use Property"
  ];

  const eligibility = [
    "Property owner aged 21-70 years",
    "Salaried or self-employed individuals",
    "Property should be free from legal disputes",
    "Property must have clear title",
    "Good credit score (700+ preferred)"
  ];

  const documents = [
    "Property documents (Title deed, Sale deed, Approved plan)",
    "Identity & Address proof (Aadhaar/PAN/Passport)",
    "Income proof (Salary slips/ITR/Bank statements)",
    "Property valuation report",
    "Bank statements for last 6 months",
    "Passport size photographs"
  ];

  const loanFeatures = [
    "Up to 100% of property value (80% Secured, 20% Unsecured)", 
    "Flexible repayment options",
    "Part payment facility available",
    "No end-use restrictions",
    "Quick processing and disbursal",
    "Minimal documentation",
    "Doorstep service available",
    "Balance transfer facility"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-gray-50">
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
                🏢 Leverage Your Property
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Mortgage Loan</h1>
              <p className="text-lg md:text-xl mb-4 opacity-90">
                (Loan Against Property - LAP)
              </p>
              <p className="text-lg md:text-xl mb-8 opacity-90">
                Unlock the value of your property for any financial need. Get high loan amounts at competitive rates with flexible repayment options.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/contact" className="bg-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1" style={{ color: '#002c60' }}>
                  Apply Now
                </Link>
                {/* <button className="border-2 border-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all">
                  Check Eligibility
                </button> */}
              </div>
            </div>
            
            {/* <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-2xl">
              <div className="flex items-center gap-2 mb-6">
                <Building2 className="w-6 h-6" />
                <h3 className="text-2xl font-bold">Loan Highlights</h3>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-center pb-3 border-b border-white/20">
                  <span className="opacity-90">Loan Amount</span>
                  <span className="font-bold">Up to ₹5 Crores</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-white/20">
                  <span className="opacity-90">Interest Rate</span>
                  <span className="font-bold">8% p.a. onwards</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-white/20">
                  <span className="opacity-90">Tenure</span>
                  <span className="font-bold">Up to 15 years</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="opacity-90">LTV Ratio</span>
                  <span className="font-bold">Up to 70%</span>
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
            { label: "Interest Rate", value: "Starts from 8.9% P.A." },
            { label: "Max Loan", value: "Upto ₹100 Crores" },
            { label: "Tenure", value: "Upto 20 years" },
            { label: "Based on type of property", value: "Upto 70% LTV" }
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
          Why Choose Our Mortgage Loan?
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, idx) => (
            <div key={idx} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 duration-300">
              <div className="w-14 h-14 rounded-lg flex items-center justify-center mb-4 text-white" style={{ background: '#ff6900' }}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-2" style={{ color: '#002c60' }}>{feature.title}</h3>
              <p className="text-gray-600">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Use Cases */}
      <div className="py-16" style={{ background: 'linear-gradient(to right, rgba(0, 44, 96, 0.05), rgba(0, 64, 128, 0.05))' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4" style={{ color: '#002c60' }}>
            How Can You Use This Loan?
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Flexible usage for multiple purposes - no restrictions on end-use
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
      </div>

      {/* Property Types */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12" style={{ color: '#002c60' }}>
          Eligible Property Types
        </h2>
        <div className="grid md:grid-cols-3 gap-4">
          {propertyTypes.map((type, idx) => (
            <div key={idx} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all text-center border-2" style={{ borderColor: 'rgba(0, 44, 96, 0.1)' }}>
              <Home className="w-8 h-8 mx-auto mb-3" style={{ color: '#002c60' }} />
              <p className="font-semibold" style={{ color: '#ff6900' }}>{type}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Loan Features */}
      <div className="py-16" style={{ background: 'linear-gradient(to right, rgba(0, 44, 96, 0.05), rgba(0, 64, 128, 0.05))' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12" style={{ color: '#002c60' }}>
            Key Features & Benefits
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 ">
            {loanFeatures.map((feature, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all flex items-start gap-3">
                <CheckCircle className="w-5 h-5 flex-shrink-0 mt-1" style={{ color: '#ff6900' }} />
                <span className="text-gray-700 text-sm">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Eligibility & Documents */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
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

      {/* Application Process */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12" style={{ color: '#002c60' }}>Simple Application Process</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: "1", title: "Apply Online", desc: "Submit your application" },
              { step: "2", title: "Property Valuation", desc: "We assess your property" },
              { step: "3", title: "Documentation", desc: "Submit required documents" },
              { step: "4", title: "Disbursal", desc: "Get funds in your account" }
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl shadow-lg text-center">
                <div className="text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4" style={{ background: '#ff6900' }}>
                  {item.step}
                </div>
                <h3 className="font-bold mb-2" style={{ color: '#002c60' }}>{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="rounded-3xl p-8 md:p-12 text-center text-white shadow-2xl" style={{ background: 'linear-gradient(135deg, #002c60 0%, #004080 100%)' }}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#ff6900]">Ready to Unlock Your Property's Value?</h2>
          <p className="text-lg md:text-xl mb-8 opacity-90">
            Apply now for a mortgage loan and get funds for any purpose
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

export default MortgageLoanPage;