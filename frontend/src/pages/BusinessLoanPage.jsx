// src/pages/products/BusinessLoanPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, FileText, Clock, TrendingUp, Phone, ArrowLeft, Briefcase, Target, Zap, Shield } from 'lucide-react';

const BusinessLoanPage = () => {
  const features = [
    { 
      icon: <TrendingUp className="w-6 h-6" />, 
      title: "Business Growth", 
      desc: "Fuel expansion and scale operations" 
    },
    { 
      icon: <Zap className="w-6 h-6" />, 
      title: "Quick Processing", 
      desc: "Get funds within 3-5 business days" 
    },
    { 
      icon: <Target className="w-6 h-6" />, 
      title: "Flexible Usage", 
      desc: "Use for any business purpose" 
    },
    { 
      icon: <Shield className="w-6 h-6" />, 
      title: "Competitive Rates", 
      desc: "Starting from 9% per annum" 
    }
  ];

  const loanPurposes = [
    { icon: "🏭", title: "Business Expansion", desc: "Open new branches or locations" },
    { icon: "🛠️", title: "Machinery Purchase", desc: "Buy equipment and machinery" },
    { icon: "📦", title: "Inventory Management", desc: "Stock up inventory" },
    { icon: "💼", title: "Working Capital", desc: "Meet day-to-day expenses" },
    { icon: "🏢", title: "Office Setup", desc: "Set up or upgrade office space" },
    { icon: "👥", title: "Staff Hiring", desc: "Recruit and train employees" }
  ];

  const businessTypes = [
    "Manufacturing Units",
    "Trading Companies",
    "Service Providers",
    "Retail Businesses",
    "MSME Enterprises",
    "Startups (with revenue)"
  ];

  const eligibility = [
    "Business vintage: Minimum 3 years",
    "Age: 21-65 years",
    "Annual turnover: Minimum ₹10 lakhs",
    "Credit score: 700+ preferred",
    "Business type: Proprietorship, Partnership, Pvt Ltd, LLP"
  ];

  const documents = [
    "Business registration documents",
    "PAN and Aadhaar of proprietors/partners/directors",
    "ITR and audited financials for last 2 years",
    "Bank statements for last 12 months",
    "Business proof (GST registration, Shop Act license)"
  ];

  const loanFeatures = [
    "Up to ₹75 lakhs loan amount",
    "Flexible repayment tenure up to 7 years",
    "Part payment facility available",
    "No end-use restrictions",
    "Quick processing and disbursal",
    "Minimal documentation",
    "Doorstep service available",
    "Balance transfer facility"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50">
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
                💼 Grow Your Business
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Business Loan</h1>
              <p className="text-lg md:text-xl mb-8 opacity-90">
                Fuel your business growth with our comprehensive business loan solutions. Expand operations, purchase machinery, or boost working capital.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/contact" className="bg-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1" style={{ color: '#002c60' }}>
                  Apply Now
                </Link>
                {/* <button className="border-2 border-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all">
                  Calculate EMI
                </button> */}
              </div>
            </div>
            
            {/* <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-2xl">
              <div className="flex items-center gap-2 mb-6">
                <Briefcase className="w-6 h-6" />
                <h3 className="text-2xl font-bold">Loan Highlights</h3>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-center pb-3 border-b border-white/20">
                  <span className="opacity-90">Loan Amount</span>
                  <span className="font-bold">₹5 Lakhs - ₹75 Lakhs</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-white/20">
                  <span className="opacity-90">Interest Rate</span>
                  <span className="font-bold">9% p.a. onwards</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-white/20">
                  <span className="opacity-90">Tenure</span>
                  <span className="font-bold">1 to 7 years</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="opacity-90">Processing Fee</span>
                  <span className="font-bold">1-2% + GST</span>
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
            { label: "Interest Rate", value: "9% p.a." },
            { label: "Max Loan", value: "₹75 Lakhs" },
            { label: "Tenure", value: "Up to 7 years" },
            { label: "Processing", value: "3-5 days" }
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
          Why Choose Our Business Loan?
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

      {/* Loan Purposes */}
      <div className="py-16" style={{ background: 'linear-gradient(to right, rgba(0, 44, 96, 0.05), rgba(0, 64, 128, 0.05))' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4" style={{ color: '#002c60' }}>
            What Can You Use Business Loan For?
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Versatile financing solutions for all your business needs
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {loanPurposes.map((purpose, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all text-center">
                <div className="text-4xl mb-3">{purpose.icon}</div>
                <h3 className="text-lg font-bold mb-2" style={{ color: '#ff6900' }}>{purpose.title}</h3>
                <p className="text-gray-600 text-sm">{purpose.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Eligible Business Types */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12" style={{ color: '#002c60' }}>
          Eligible Business Types
        </h2>
        <div className="grid md:grid-cols-3 gap-4">
          {businessTypes.map((type, idx) => (
            <div key={idx} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all text-center border-2" style={{ borderColor: 'rgba(0, 44, 96, 0.1)' }}>
              <CheckCircle className="w-8 h-8 mx-auto mb-3" style={{ color: '#002c60' }} />
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
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
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
              { step: "2", title: "Business Assessment", desc: "We evaluate your business" },
              { step: "3", title: "Documentation", desc: "Submit required documents" },
              { step: "4", title: "Disbursal", desc: "Get funds in 3-5 days" }
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#ff6900]">Ready to Grow Your Business?</h2>
          <p className="text-lg md:text-xl mb-8 opacity-90 ">
            Apply now and get the funding your business deserves
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

export default BusinessLoanPage;