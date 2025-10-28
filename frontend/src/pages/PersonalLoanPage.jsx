// src/pages/products/PersonalLoanPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, FileText, Clock, Zap, Phone, ArrowLeft, DollarSign, Users, Shield } from 'lucide-react';

const PersonalLoanPage = () => {
  const features = [
    { 
      icon: <Zap className="w-6 h-6" />, 
      title: "Quick Disbursal", 
      desc: "Get funds in 24-72 hours" 
    },
    { 
      icon: <Shield className="w-6 h-6" />, 
      title: "No Collateral", 
      desc: "Completely unsecured loan" 
    },
    { 
      icon: <DollarSign className="w-6 h-6" />, 
      title: "Flexible Amount", 
      desc: "Borrow ₹1 Lakhs to ₹70 Lakhs" 
    },
    { 
      icon: <Clock className="w-6 h-6" />, 
      title: "Flexible Tenure", 
      desc: "1 to 5 years repayment" 
    }
  ];

  const useCases = [
    { icon: "💍", title: "Weddings", desc: "Make your special day memorable" },
    { icon: "🏥", title: "Medical Emergency", desc: "Cover unexpected healthcare costs" },
    { icon: "🎓", title: "Education", desc: "Invest in your future" },
    { icon: "🏠", title: "Home Renovation", desc: "Upgrade your living space" },
    { icon: "✈️", title: "Travel", desc: "Plan your dream vacation" },
    { icon: "💼", title: "Business", desc: "Expand your business ventures" }
  ];

  const eligibility = [
    "Age: 21-60 years",
    "Employment: Salaried ",
    "Minimum Monthly Income: ₹20,000",
    "Work Experience: Minimum 1 year",
    "Credit Score: 700+ preferred"
  ];

  const documents = [
    "Identity Proof (Aadhaar/PAN/Passport/Driving License)",
    "Address Proof (Utility bills/Rent agreement)",
    "Income Proof (Salary slips/Bank statements)",
    "Employment Proof (Offer letter/Appointment letter)"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-slate-50">
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
                ⚡ Fast & Easy Approval
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Personal Loan</h1>
              <p className="text-lg md:text-xl mb-8 opacity-90">
                Quick funds for any purpose - weddings, vacations, medical emergencies, or business expansion. No collateral required!
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
              <h3 className="text-2xl font-bold mb-6">Loan Highlights</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center pb-3 border-b border-white/20">
                  <span className="opacity-90">Loan Amount</span>
                  <span className="font-bold">₹50K - ₹40 Lakhs</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-white/20">
                  <span className="opacity-90">Interest Rate</span>
                  <span className="font-bold">10.5% p.a. onwards</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-white/20">
                  <span className="opacity-90">Tenure</span>
                  <span className="font-bold">1 to 5 years</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="opacity-90">Processing Fee</span>
                  <span className="font-bold">Up to 2% + GST</span>
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
            { label: "Interest Rate", value: "10.5% p.a." },
            { label: "Max Loan", value: "₹40 to ₹70 Lakhs" },
            { label: "Tenure", value: "Up to 7 years" },
            { label: "Disbursal", value: "24-72 hours" }
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
          Why Choose Our Personal Loan?
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
            What Can You Use It For?
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Our personal loans give you the freedom to use funds for any legitimate purpose
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {useCases.map((useCase, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all text-center">
                <div className="text-4xl mb-3">{useCase.icon}</div>
                <h3 className="text-lg font-bold mb-2" style={{ color: '#ff6900' }}>{useCase.title}</h3>
                <p className="text-gray-600 text-sm">{useCase.desc}</p>
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

      {/* Quick Apply Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-3xl p-8 shadow-xl">
          <h2 className="text-3xl font-bold text-center mb-8" style={{ color: '#002c60' }}>Quick Application Process</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: "1", title: "Apply Online", desc: "Fill simple form in 2 minutes" },
              { step: "2", title: "Upload Documents", desc: "Submit required documents" },
              { step: "3", title: "Get Approved", desc: "Approval within 2 hours" },
              { step: "4", title: "Receive Funds", desc: "Money in your account" }
            ].map((item, idx) => (
              <div key={idx} className="text-center">
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#ff6900]">Need Funds Urgently?</h2>
          <p className="text-lg md:text-xl mb-8 opacity-90">
            Apply now and get instant approval. Money in your account within 48 hours!
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

export default PersonalLoanPage;