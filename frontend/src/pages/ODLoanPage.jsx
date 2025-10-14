// src/pages/products/ODLoanPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, FileText, Clock, RefreshCw, Phone, ArrowLeft, Zap, Shield, DollarSign, TrendingUp } from 'lucide-react';

const ODLoanPage = () => {
  const features = [
    { 
      icon: <RefreshCw className="w-6 h-6" />, 
      title: "Revolving Credit", 
      desc: "Withdraw and repay as needed" 
    },
    { 
      icon: <DollarSign className="w-6 h-6" />, 
      title: "Pay for Usage Only", 
      desc: "Interest only on utilized amount" 
    },
    { 
      icon: <Zap className="w-6 h-6" />, 
      title: "Instant Access", 
      desc: "Quick access to funds anytime" 
    },
    { 
      icon: <Shield className="w-6 h-6" />, 
      title: "No Restrictions", 
      desc: "Use for any financial need" 
    }
  ];

  const useCases = [
    { icon: "💰", title: "Emergency Expenses", desc: "Handle unexpected costs instantly" },
    { icon: "📦", title: "Inventory Purchase", desc: "Stock up when needed" },
    { icon: "💼", title: "Business Operations", desc: "Meet day-to-day business needs" },
    { icon: "👥", title: "Salary Payments", desc: "Ensure timely staff payments" },
    { icon: "⚡", title: "Utility Bills", desc: "Pay bills even with zero balance" },
    { icon: "🔧", title: "Equipment Repair", desc: "Quick funds for maintenance" }
  ];

  const odTypes = [
    {
      title: "Personal Overdraft",
      desc: "For salaried individuals",
      features: ["Linked to salary account", "Up to ₹5 lakhs limit", "Minimal documentation"]
    },
    {
      title: "Business Overdraft",
      desc: "For business owners",
      features: ["Against business assets", "Up to ₹50 lakhs limit", "Flexible withdrawal"]
    }
  ];

  const benefits = [
    "Interest charged only on utilized amount",
    "No prepayment or foreclosure charges",
    "Automatic renewal available",
    "Flexible repayment options",
    "Access funds 24/7 through net banking",
    "No restrictions on number of transactions",
    "Helps maintain healthy cash flow",
    "Build credit history"
  ];

  const eligibility = [
    "Age: 21-65 years",
    "Salaried: Minimum income ₹20,000/month",
    "Self-employed: Annual turnover ₹10 lakhs+",
    "Employment: Minimum 2 years for salaried",
    "Credit score: 700+ preferred",
    "Stable income source required"
  ];

  const documents = [
    "Identity Proof (Aadhaar/PAN/Passport)",
    "Address Proof (Utility bills/Aadhaar)",
    "Income Proof (Salary slips/ITR/Bank statements)",
    "Bank statements for last 6 months",
    "Employment proof (for salaried)",
    "Business proof (for self-employed)"
  ];

  const howItWorks = [
    {
      step: "1",
      title: "Sanctioned Limit",
      desc: "Get approved for a specific credit limit based on your profile"
    },
    {
      step: "2",
      title: "Withdraw Funds",
      desc: "Use funds as needed up to your sanctioned limit"
    },
    {
      step: "3",
      title: "Pay Interest",
      desc: "Pay interest only on the amount utilized, not the full limit"
    },
    {
      step: "4",
      title: "Repay Anytime",
      desc: "Repay and reuse the credit facility as per your needs"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-white to-cyan-50">
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
                🔄 Flexible Credit Facility
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Overdraft (OD) Loan</h1>
              <p className="text-lg md:text-xl mb-8 opacity-90">
                Get instant access to funds whenever you need them. Pay interest only on what you use. Perfect for managing cash flow and handling unexpected expenses.
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
                <RefreshCw className="w-6 h-6" />
                <h3 className="text-2xl font-bold">OD Loan Highlights</h3>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-center pb-3 border-b border-white/20">
                  <span className="opacity-90">Credit Limit</span>
                  <span className="font-bold">Up to ₹50 Lakhs</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-white/20">
                  <span className="opacity-90">Interest Rate</span>
                  <span className="font-bold">10% p.a. onwards</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-white/20">
                  <span className="opacity-90">Validity</span>
                  <span className="font-bold">Renewable yearly</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="opacity-90">Interest On</span>
                  <span className="font-bold">Utilized Amount</span>
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
            { label: "Interest Rate", value: "10% p.a." },
            { label: "Max Limit", value: "₹50 Lakhs" },
            { label: "Access", value: "24/7" },
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
          Why Choose Overdraft Loan?
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

      {/* How It Works */}
      <div className="py-16" style={{ background: 'linear-gradient(to right, rgba(0, 44, 96, 0.05), rgba(0, 64, 128, 0.05))' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12" style={{ color: '#002c60' }}>
            How Overdraft Works?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {howItWorks.map((item, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl shadow-lg text-center">
                <div className="text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4" style={{ background: 'linear-gradient(135deg, #002c60 0%, #004080 100%)' }}>
                  {item.step}
                </div>
                <h3 className="text-lg font-bold mb-2" style={{ color: '#002c60' }}>{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* OD Types */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12" style={{ color: '#002c60' }}>
          Types of Overdraft Facilities
        </h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {odTypes.map((type, idx) => (
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

      {/* Use Cases */}
      <div className="py-16" style={{ background: 'linear-gradient(to right, rgba(0, 44, 96, 0.05), rgba(0, 64, 128, 0.05))' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4" style={{ color: '#002c60' }}>
            What Can You Use OD Loan For?
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Flexible usage for various personal and business needs
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

      {/* Benefits */}
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

      {/* Comparison */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-center mb-12" style={{ color: '#002c60' }}>
          OD Loan vs Term Loan
        </h2>
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr style={{ background: 'linear-gradient(135deg, #002c60 0%, #004080 100%)' }}>
                  <th className="px-6 py-4 text-left text-white">Feature</th>
                  <th className="px-6 py-4 text-left text-white">Overdraft Loan</th>
                  <th className="px-6 py-4 text-left text-white">Term Loan</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="px-6 py-4 font-semibold">Interest</td>
                  <td className="px-6 py-4">Only on utilized amount</td>
                  <td className="px-6 py-4">On entire loan amount</td>
                </tr>
                <tr className="border-b bg-gray-50">
                  <td className="px-6 py-4 font-semibold">Repayment</td>
                  <td className="px-6 py-4">Flexible, anytime</td>
                  <td className="px-6 py-4">Fixed EMI schedule</td>
                </tr>
                <tr className="border-b">
                  <td className="px-6 py-4 font-semibold">Access</td>
                  <td className="px-6 py-4">Multiple withdrawals</td>
                  <td className="px-6 py-4">One-time disbursal</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 font-semibold">Best For</td>
                  <td className="px-6 py-4">Short-term needs</td>
                  <td className="px-6 py-4">Long-term financing</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="rounded-3xl p-8 md:p-12 text-center text-white shadow-2xl" style={{ background: 'linear-gradient(135deg, #002c60 0%, #004080 100%)' }}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Need Flexible Credit Access?</h2>
          <p className="text-lg md:text-xl mb-8 opacity-90">
            Apply for an overdraft facility and get instant access to funds whenever you need
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

export default ODLoanPage;