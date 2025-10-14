// src/pages/products/GoldLoanPage.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  CheckCircle,
  FileText,
  Clock,
  Shield,
  Phone,
  ArrowLeft,
  TrendingUp,
} from "lucide-react";

const GoldLoanPage = () => {
  const [loanAmount, setLoanAmount] = useState(100000);

  const features = [
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Instant Approval",
      desc: "Get your loan approved within minutes",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Secure Process",
      desc: "Your gold is safely stored in our vaults",
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Competitive Rates",
      desc: "Starting from 7% per annum",
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Minimal Documentation",
      desc: "Just your ID and gold jewelry",
    },
  ];

  const eligibility = [
    "Indian citizen aged 18 years and above",
    "Gold jewelry of 18-22 karat",
    "Valid identity proof",
    "No credit score required",
  ];

  const documents = [
    "Identity Proof (Aadhaar/PAN/Passport)",
    "Address Proof",
    "Passport size photographs",
    "Gold items for pledge",
  ];

  const howToApply = [
    { step: 1, title: "Submit Application", desc: "Fill out our simple online form" },
    { step: 2, title: "Gold Evaluation", desc: "Bring your gold to our branch for assessment" },
    { step: 3, title: "Instant Approval", desc: "Get approved within minutes" },
    { step: 4, title: "Receive Funds", desc: "Money transferred to your account" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100">
      {/* Back Button */}
      {/* <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <Link
          to="/products"
          className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium"
        >
          <ArrowLeft className="w-5 h-5" /> Back to Products
        </Link>
      </div> */}

      {/* Hero Section */}
      <div className="text-white py-20" style={{ background: 'linear-gradient(135deg, #002c60 0%, #004080 100%)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm mb-4">
                ⭐ Most Popular Loan
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Gold Loan</h1>
              <p className="text-lg md:text-xl mb-8 text-blue-100">
                Unlock the power of your gold with instant loans at competitive
                rates. Get up to 75% of your gold's value within minutes!
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  Apply Now
                </Link>
                {/* <button className="border-2 border-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all">
                  Calculate EMI
                </button> */}
              </div>
            </div>
            {/* <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-2xl">
              <h3 className="text-2xl font-bold mb-6">Quick Loan Calculator</h3>
              <div className="space-y-4">
                <div>
                  <label className="block mb-2">
                    Loan Amount: ₹{loanAmount.toLocaleString()}
                  </label>
                  <input
                    type="range"
                    min="10000"
                    max="5000000"
                    step="10000"
                    value={loanAmount}
                    onChange={(e) => setLoanAmount(Number(e.target.value))}
                    className="w-full h-2 bg-white/30 rounded-lg appearance-none cursor-pointer"
                  />
                </div>
                <div className="bg-white/20 p-4 rounded-lg">
                  <p className="text-sm mb-2">Estimated Gold Required</p>
                  <p className="text-3xl font-bold">
                    {(loanAmount / 3500).toFixed(0)}g
                  </p>
                  <p className="text-sm mt-1 text-blue-100">
                    Based on ₹3,500/gram
                  </p>
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
            { label: "Interest Rate", value: "7% p.a." },
            { label: "Max Loan", value: "₹50 Lakhs" },
            { label: "Tenure", value: "Up to 3 years" },
            { label: "Processing", value: "0.5% + GST" },
          ].map((stat, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-xl shadow-lg text-center"
            >
              <p className="text-3xl font-bold text-blue-600 mb-2">
                {stat.value}
              </p>
              <p className="text-gray-600 text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
          Why Choose Our Gold Loan?
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 duration-300"
            >
              <div className="bg-gradient-to-br from-blue-100 to-indigo-100 w-14 h-14 rounded-lg flex items-center justify-center mb-4 text-blue-600">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-800">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Eligibility & Documents */}
      <div className="bg-gradient-to-r from-blue-100 to-indigo-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            <div className="bg-white p-8 rounded-2xl shadow-xl">
              <h3 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800">
                Eligibility Criteria
              </h3>
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
              <h3 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800">
                Required Documents
              </h3>
              <ul className="space-y-4">
                {documents.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <FileText className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* How to Apply */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
          How to Apply
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {howToApply.map((item, idx) => (
            <div key={idx} className="relative">
              <div className="bg-white p-6 rounded-xl shadow-lg text-center">
                <div className="bg-gradient-to-br from-blue-500 to-indigo-500 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-lg font-bold mb-2 text-gray-800">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
              {idx < howToApply.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                  <ArrowRight className="w-6 h-6 text-blue-400" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
       <div className="rounded-3xl p-8 md:p-12 text-center text-white shadow-2xl" style={{ background: 'linear-gradient(135deg, #002c60 0%, #004080 100%)' }}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Get Your Gold Loan?
          </h2>
          <p className="text-lg md:text-xl mb-8 text-blue-100">
            Apply now and get instant approval within minutes
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/contact"
              className="bg-white text-blue-600 px-10 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-all shadow-lg inline-flex items-center justify-center gap-2"
            >
              Apply Now <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href="tel:+911234567890"
              className="border-2 border-white px-10 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all inline-flex items-center justify-center gap-2"
            >
              <Phone className="w-5 h-5" /> Call Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GoldLoanPage;
