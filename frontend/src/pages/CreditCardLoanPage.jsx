// src/pages/products/CreditCardLoanPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, FileText, CreditCard, Phone, ArrowLeft, Zap, Shield, DollarSign, TrendingUp, Percent } from 'lucide-react';

const CreditCardLoanPage = () => {
  const features = [
    { 
      icon: <Zap className="w-6 h-6" />, 
      title: "Instant Approval", 
      desc: "Get approved within minutes" 
    },
    { 
      icon: <DollarSign className="w-6 h-6" />, 
      title: "High Credit Limit", 
      desc: "Up to ₹5 lakhs credit limit" 
    },
    { 
      icon: <Percent className="w-6 h-6" />, 
      title: "Low Interest Rates", 
      desc: "Competitive interest on EMI" 
    },
    { 
      icon: <Shield className="w-6 h-6" />, 
      title: "Secure Transactions", 
      desc: "EMV chip & PIN protection" 
    }
  ];

  const cardTypes = [
    { 
      icon: "💳", 
      title: "Lifestyle Credit Cards", 
      desc: "Rewards, cashback, and lifestyle benefits",
      features: ["Cashback on purchases", "Reward points", "Dining privileges", "Fuel surcharge waiver"]
    },
    { 
      icon: "✈️", 
      title: "Travel Credit Cards", 
      desc: "Airport lounge access and travel benefits",
      features: ["Airport lounge access", "Travel insurance", "Air miles", "Hotel discounts"]
    },
    { 
      icon: "🛍️", 
      title: "Shopping Credit Cards", 
      desc: "Exclusive shopping discounts and offers",
      features: ["E-commerce discounts", "EMI conversion", "Shopping vouchers", "Zero markup forex"]
    },
    { 
      icon: "⛽", 
      title: "Fuel Credit Cards", 
      desc: "Fuel surcharge waiver and rewards",
      features: ["Fuel surcharge waiver", "Reward points on fuel", "Monthly spending benefits", "Emergency roadside assistance"]
    }
  ];

  const loanFacilities = [
    {
      title: "Balance Transfer",
      desc: "Transfer high-interest debt to lower rates",
      features: ["Lower interest rates", "Flexible tenure", "Processing fee waiver", "Easy approval"]
    },
    {
      title: "EMI Conversion",
      desc: "Convert purchases to easy EMIs",
      features: ["No documentation", "Flexible tenure options", "Low processing fee", "Instant conversion"]
    },
    {
      title: "Cash Advance",
      desc: "Withdraw cash against credit limit",
      features: ["ATM withdrawal", "Instant access", "Emergency cash", "Flexible repayment"]
    }
  ];

  const benefits = [
    "Welcome bonus and joining benefits",
    "Reward points on every purchase",
    "Cashback offers",
    "Zero liability on lost card",
    "Travel and purchase protection",
    "Interest-free credit period up to 50 days",
    "Easy EMI conversion",
    "Fuel surcharge waiver",
    "Airport lounge access",
    "Contactless payments",
    "Online shopping protection",
    "Credit limit enhancement"
  ];

  const eligibility = [
    "Age: 21-60 years",
    "Salaried: Minimum income ₹25,000/month",
    "Self-employed: Annual income ₹6 lakhs+",
    "Good credit score (700+ preferred)",
    "Stable employment/business"
  ];

  const documents = [
    "Identity Proof (Aadhaar/PAN/Passport)",
    "Address Proof (Utility bills/Aadhaar)",
    "Income Proof (Salary slips/ITR/Bank statements)",
    "Passport size photographs",
    "Employment proof (for salaried)",
    "Business proof (for self-employed)"
  ];

  const fees = [
    { feature: "Joining Fee", amount: "₹500 - ₹5,000", note: "(Varies by card type)" },
    { feature: "Annual Fee", amount: "₹500 - ₹5,000", note: "(Often waived on spending)" },
    { feature: "Interest Rate", amount: "3% per month", note: "(36% p.a. on revolving credit)" },
    { feature: "Cash Advance Fee", amount: "2.5% of amount", note: "(Min ₹250 - ₹500)" }
  ];

  const securityFeatures = [
    "EMV chip technology",
    "Two-factor authentication",
    "SMS & email alerts",
    "Fraud detection system",
    "Zero liability protection",
    "Secure PIN"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50">
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
                💳 Smart Spending Solutions
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Credit Card Services</h1>
              <p className="text-lg md:text-xl mb-8 opacity-90">
                Get premium credit cards with exclusive rewards, cashback, and benefits. Convert purchases to EMI, transfer balances, and enjoy flexible credit facilities.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/contact" className="bg-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1" style={{ color: '#002c60' }}>
                  Apply Now
                </Link>
                {/* <button className="border-2 border-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all">
                  Compare Cards
                </button> */}
              </div>
            </div>
            
            {/* <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-2xl">
              <div className="flex items-center gap-2 mb-6">
                <CreditCard className="w-6 h-6" />
                <h3 className="text-2xl font-bold">Card Highlights</h3>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-center pb-3 border-b border-white/20">
                  <span className="opacity-90">Credit Limit</span>
                  <span className="font-bold">Up to ₹5 Lakhs</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-white/20">
                  <span className="opacity-90">Interest-Free Period</span>
                  <span className="font-bold">Up to 50 days</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-white/20">
                  <span className="opacity-90">Reward Points</span>
                  <span className="font-bold">On Every Purchase</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="opacity-90">Approval Time</span>
                  <span className="font-bold">Instant</span>
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
            { label: "Credit Limit", value: "₹5 Lakhs" },
            { label: "Interest-Free Days", value: "Up to 50" },
            { label: "Card Partners", value: "10+" },
            { label: "Approval Time", value: "Instant" }
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
          Why Choose Our Credit Card Services?
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

      {/* Card Types */}
      <div className="py-16" style={{ background: 'linear-gradient(to right, rgba(0, 44, 96, 0.05), rgba(0, 64, 128, 0.05))' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4" style={{ color: '#002c60' }}>
            Types of Credit Cards
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Choose the card that best suits your lifestyle and spending habits
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            {cardTypes.map((card, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="p-6">
                  <div className="text-5xl mb-4">{card.icon}</div>
                  <h3 className="text-2xl font-bold mb-2" style={{ color: '#002c60' }}>{card.title}</h3>
                  <p className="text-gray-600 mb-4">{card.desc}</p>
                  <ul className="space-y-2">
                    {card.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 flex-shrink-0" style={{ color: '#002c60' }} />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Loan Facilities */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12" style={{ color: '#002c60' }}>
          Credit Card Loan Facilities
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {loanFacilities.map((facility, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl shadow-xl">
              <h3 className="text-2xl font-bold mb-3" style={{ color: '#002c60' }}>{facility.title}</h3>
              <p className="text-gray-600 mb-6">{facility.desc}</p>
              <ul className="space-y-3">
                {facility.features.map((feature, i) => (
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

      {/* Benefits */}
      <div className="py-16" style={{ background: 'linear-gradient(to right, rgba(0, 44, 96, 0.05), rgba(0, 64, 128, 0.05))' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12" style={{ color: '#002c60' }}>
            Credit Card Benefits
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
      </div>

      {/* Security Features */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-center mb-12" style={{ color: '#002c60' }}>Security Features</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {securityFeatures.map((feature, idx) => (
            <div key={idx} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all text-center">
              <Shield className="w-12 h-12 mx-auto mb-4" style={{ color: '#002c60' }} />
              <p className="font-semibold text-gray-800">{feature}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Fees & Charges */}
      <div className="py-16" style={{ background: 'linear-gradient(to right, rgba(0, 44, 96, 0.05), rgba(0, 64, 128, 0.05))' }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12" style={{ color: '#002c60' }}>Fees & Charges</h2>
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr style={{ background: 'linear-gradient(135deg, #002c60 0%, #004080 100%)' }}>
                    <th className="px-6 py-4 text-left text-white">Feature</th>
                    <th className="px-6 py-4 text-left text-white">Amount</th>
                    <th className="px-6 py-4 text-left text-white">Note</th>
                  </tr>
                </thead>
                <tbody>
                  {fees.map((fee, idx) => (
                    <tr key={idx} className={`border-b ${idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
                      <td className="px-6 py-4 font-semibold">{fee.feature}</td>
                      <td className="px-6 py-4">{fee.amount}</td>
                      <td className="px-6 py-4 text-sm text-gray-600">{fee.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
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
              { step: "1", title: "Choose Card", desc: "Select the card that suits you" },
              { step: "2", title: "Fill Application", desc: "Complete online form" },
              { step: "3", title: "Upload Documents", desc: "Submit required documents" },
              { step: "4", title: "Get Approved", desc: "Receive card in 5-7 days" }
            ].map((item, idx) => (
              <div key={idx} className="text-center">
                <div className="text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4" style={{ background: 'linear-gradient(135deg, #002c60 0%, #004080 100%)' }}>
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Get Your Credit Card?</h2>
          <p className="text-lg md:text-xl mb-8 opacity-90">
            Apply now and enjoy exclusive rewards, cashback, and benefits
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

export default CreditCardLoanPage;