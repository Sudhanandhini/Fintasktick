// src/pages/products/CarLoanPage.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, FileText, Clock, Car, Phone, ArrowLeft, Zap, Shield, DollarSign } from 'lucide-react';

const CarLoanPage = () => {
  const [carPrice, setCarPrice] = useState(800000);
  const [downPayment, setDownPayment] = useState(80000);
  
  const loanAmount = carPrice - downPayment;
  const interestRate = 7.5;
  const tenure = 5;

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
      icon: <Car className="w-6 h-6" />, 
      title: "New & Used Cars", 
      desc: "Finance both new and pre-owned vehicles" 
    },
    { 
      icon: <DollarSign className="w-6 h-6" />, 
      title: "Up to 90% Funding", 
      desc: "Minimal down payment required" 
    },
    { 
      icon: <Zap className="w-6 h-6" />, 
      title: "Quick Approval", 
      desc: "Get approved within 48 hours" 
    },
    { 
      icon: <Shield className="w-6 h-6" />, 
      title: "Competitive Rates", 
      desc: "Starting from 7.5% per annum" 
    }
  ];

  const carTypes = [
    { icon: "🚗", title: "Hatchback", desc: "Compact and fuel-efficient" },
    { icon: "🚙", title: "Sedan", desc: "Comfortable family cars" },
    { icon: "🚐", title: "SUV", desc: "Spacious and powerful" },
    { icon: "🏎️", title: "Luxury Cars", desc: "Premium brands" },
    { icon: "🚚", title: "Commercial", desc: "Business vehicles" },
    { icon: "♻️", title: "Used Cars", desc: "Pre-owned vehicles" }
  ];

  const eligibility = [
    "Age: 21-65 years",
    "Salaried: Minimum income ₹25,000/month",
    "Self-employed: ITR of ₹3 lakhs/year",
    "Employment: Minimum 2 years experience",
    "Credit score: 650+ preferred"
  ];

  const documents = [
    "Identity Proof (Aadhaar/PAN/Passport)",
    "Address Proof (Utility bills/Aadhaar)",
    "Income Proof (Salary slips/ITR/Bank statements)",
    "Car quotation/proforma invoice",
    "Passport size photographs"
  ];

  const benefits = [
    "Zero or minimal documentation for existing customers",
    "Flexible repayment tenure up to 7 years",
    "Part payment and foreclosure available",
    "Insurance included in loan amount",
    "Doorstep service available",
    "Special rates for women borrowers"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-orange-50">
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
                🚗 Drive Your Dreams
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Car Loan</h1>
              <p className="text-lg md:text-xl mb-8 opacity-90">
                Turn your dream car into reality with affordable auto loans. Quick approval, flexible EMIs, and hassle-free documentation!
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
            
            {/* Car Loan Calculator */}
            {/* <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-2xl">
              <div className="flex items-center gap-2 mb-6">
                <Car className="w-6 h-6" />
                <h3 className="text-2xl font-bold">Loan Calculator</h3>
              </div>
              <div className="space-y-6">
                <div>
                  <label className="block mb-2">Car Price: ₹{(carPrice/100000).toFixed(1)} Lakhs</label>
                  <input 
                    type="range" 
                    min="300000" 
                    max="5000000" 
                    step="50000"
                    value={carPrice}
                    onChange={(e) => setCarPrice(Number(e.target.value))}
                    className="w-full h-2 bg-white/30 rounded-lg appearance-none cursor-pointer"
                  />
                </div>
                <div>
                  <label className="block mb-2">Down Payment: ₹{(downPayment/1000).toFixed(0)}K</label>
                  <input 
                    type="range" 
                    min="10000" 
                    max={carPrice * 0.3} 
                    step="10000"
                    value={downPayment}
                    onChange={(e) => setDownPayment(Number(e.target.value))}
                    className="w-full h-2 bg-white/30 rounded-lg appearance-none cursor-pointer"
                  />
                </div>
                <div className="bg-white/20 p-4 rounded-lg space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm">Loan Amount</span>
                    <span className="font-bold">₹{(loanAmount/100000).toFixed(2)}L</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Monthly EMI</span>
                    <span className="text-2xl font-bold">₹{calculateEMI().toLocaleString()}</span>
                  </div>
                  <p className="text-xs opacity-90">@ {interestRate}% for {tenure} years</p>
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
            { label: "Interest Rate", value: "7.5% p.a." },
            { label: "Max Loan", value: "₹50 Lakhs" },
            { label: "Tenure", value: "Up to 7 years" },
            { label: "Funding", value: "Up to 90%" }
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
          Why Choose Our Car Loan?
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

      {/* Car Types */}
      <div className="py-16" style={{ background: 'linear-gradient(to right, rgba(0, 44, 96, 0.05), rgba(0, 64, 128, 0.05))' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4" style={{ color: '#002c60' }}>
            Finance Any Type of Vehicle
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            From hatchbacks to luxury cars, we have you covered
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {carTypes.map((type, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all text-center">
                <div className="text-4xl mb-3">{type.icon}</div>
                <h3 className="text-lg font-bold mb-2" style={{ color: '#002c60' }}>{type.title}</h3>
                <p className="text-gray-600 text-sm">{type.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Additional Benefits */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12" style={{ color: '#002c60' }}>
          Additional Benefits
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, idx) => (
            <div key={idx} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all flex items-start gap-3">
              <CheckCircle className="w-6 h-6 flex-shrink-0 mt-1" style={{ color: '#ff6900' }} />
              <span className="text-gray-700">{benefit}</span>
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

      {/* Application Process */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-center mb-12" style={{ color: '#002c60' }}>Quick Application Process</h2>
        <div className="grid md:grid-cols-4 gap-6">
          {[
            { step: "1", title: "Choose Car", desc: "Select your dream car" },
            { step: "2", title: "Apply Online", desc: "Submit loan application" },
            { step: "3", title: "Get Approved", desc: "Approval within 48 hours" },
            { step: "4", title: "Drive Home", desc: "Take delivery of your car" }
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

      {/* CTA Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="rounded-3xl p-8 md:p-12 text-center text-white shadow-2xl" style={{ background: 'linear-gradient(135deg, #002c60 0%, #004080 100%)' }}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#ff6900]">Ready to Drive Your Dream Car?</h2>
          <p className="text-lg md:text-xl mb-8 opacity-90">
            Apply now and get on the road in no time!
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

export default CarLoanPage;