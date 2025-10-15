// src/pages/products/MachineryLoanPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, FileText, Clock, Cog, Phone, ArrowLeft, Zap, Shield, TrendingUp, Factory } from 'lucide-react';

const MachineryLoanPage = () => {
  const features = [
    { 
      icon: <Cog className="w-6 h-6" />, 
      title: "Latest Equipment", 
      desc: "Finance new and advanced machinery" 
    },
    { 
      icon: <TrendingUp className="w-6 h-6" />, 
      title: "Boost Productivity", 
      desc: "Upgrade to maximize business output" 
    },
    { 
      icon: <Zap className="w-6 h-6" />, 
      title: "Quick Approval", 
      desc: "Get funds within 3-5 business days" 
    },
    { 
      icon: <Shield className="w-6 h-6" />, 
      title: "Competitive Rates", 
      desc: "Starting from 9.5% per annum" 
    }
  ];

  const machineryTypes = [
    { icon: "🏭", title: "Manufacturing Equipment", desc: "CNC machines, lathes, milling machines" },
    { icon: "🏗️", title: "Construction Machinery", desc: "Excavators, cranes, bulldozers" },
    { icon: "🚜", title: "Agricultural Equipment", desc: "Tractors, harvesters, tillers" },
    { icon: "🍞", title: "Food Processing", desc: "Commercial ovens, mixers, packaging" },
    { icon: "🏥", title: "Medical Equipment", desc: "Diagnostic machines, lab equipment" },
    { icon: "💻", title: "IT & Technology", desc: "Servers, computers, printing machines" }
  ];

  const loanPurposes = [
    "Purchase new machinery and equipment",
    "Upgrade existing machinery",
    "Replace old/outdated equipment",
    "Expand production capacity",
    "Modernize manufacturing process",
    "Import specialized machinery"
  ];

  const eligibility = [
    "Business vintage: Minimum 3 years",
    "Age: 21-65 years",
    "Annual turnover: Minimum ₹15 lakhs",
    "Profitable business operations",
    "Credit score: 700+ preferred",
    "Valid business registration"
  ];

  const documents = [
    "Business registration and incorporation documents",
    "PAN and Aadhaar of proprietors/partners/directors",
    "ITR and audited financials for last 2 years",
    "Bank statements for last 12 months",
    "Machinery quotation/proforma invoice",
    "GST registration and returns",
    "Business proof and address proof"
  ];

  const benefits = [
    "Up to 90% financing of machinery cost",
    "Flexible repayment tenure up to 7 years",
    "Tax benefits on interest and depreciation",
    "Covers installation and transportation costs",
    "Part payment facility available",
    "Moratorium period available",
    "Collateral options available",
    "Special rates for MSME"
  ];

  const industriesServed = [
    "Manufacturing",
    "Construction",
    "Agriculture",
    "Food Processing",
    "Textile",
    "Healthcare",
    "Printing",
    "Packaging",
    "Automobile",
    "Pharmaceuticals",
    "Chemical",
    "Electronics"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
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
                ⚙️ Power Your Business
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Machinery Loan</h1>
              <p className="text-lg md:text-xl mb-8 opacity-90">
                Upgrade your business with the latest machinery and equipment. Boost productivity, maximize profits, and stay ahead of competition with our flexible machinery financing solutions.
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
                <Cog className="w-6 h-6" />
                <h3 className="text-2xl font-bold">Loan Highlights</h3>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-center pb-3 border-b border-white/20">
                  <span className="opacity-90">Loan Amount</span>
                  <span className="font-bold">₹5 Lakhs - ₹1 Crore</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-white/20">
                  <span className="opacity-90">Interest Rate</span>
                  <span className="font-bold">9.5% p.a. onwards</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-white/20">
                  <span className="opacity-90">Tenure</span>
                  <span className="font-bold">Up to 7 years</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="opacity-90">Financing</span>
                  <span className="font-bold">Up to 90%</span>
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
            { label: "Tenure", value: "Up to 7 years" },
            { label: "Financing", value: "Up to 90%" }
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
          Why Choose Our Machinery Loan?
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

      {/* Machinery Types */}
      <div className="py-16" style={{ background: 'linear-gradient(to right, rgba(0, 44, 96, 0.05), rgba(0, 64, 128, 0.05))' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4" style={{ color: '#002c60' }}>
            Types of Machinery We Finance
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            From heavy industrial equipment to specialized machinery
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {machineryTypes.map((type, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all text-center">
                <div className="text-4xl mb-3">{type.icon}</div>
                <h3 className="text-lg font-bold mb-2" style={{ color: '#ff6900' }}>{type.title}</h3>
                <p className="text-gray-600 text-sm">{type.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Loan Purposes */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12" style={{ color: '#002c60' }}>
          What Can You Finance?
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {loanPurposes.map((purpose, idx) => (
            <div key={idx} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all flex items-start gap-3">
              <CheckCircle className="w-6 h-6 flex-shrink-0 mt-1" style={{ color: '#ff6900' }} />
              <span className="text-gray-700">{purpose}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Industries Served */}
      <div className="py-16" style={{ background: 'linear-gradient(to right, rgba(0, 44, 96, 0.05), rgba(0, 64, 128, 0.05))' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12" style={{ color: '#002c60' }}>
            Industries We Serve
          </h2>
          <div className="grid md:grid-cols-4 lg:grid-cols-6 gap-4">
            {industriesServed.map((industry, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all text-center border-2" style={{ borderColor: 'rgba(0, 44, 96, 0.1)' }}>
                <Factory className="w-8 h-8 mx-auto mb-3" style={{ color: '#002c60' }} />
                <p className="font-semibold text-sm" style={{ color: '#ff6900' }}>{industry}</p>
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
              <CheckCircle className="w-5 h-5 flex-shrink-0 mt-1" style={{ color: '#ff6900' }} />
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

      {/* Application Process */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-center mb-12" style={{ color: '#002c60' }}>Simple Application Process</h2>
        <div className="grid md:grid-cols-4 gap-6">
          {[
            { step: "1", title: "Choose Machinery", desc: "Select required equipment" },
            { step: "2", title: "Apply Online", desc: "Submit loan application" },
            { step: "3", title: "Get Approved", desc: "Approval within 3-5 days" },
            { step: "4", title: "Purchase & Install", desc: "Buy and install machinery" }
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#ff6900]">Ready to Upgrade Your Machinery?</h2>
          <p className="text-lg md:text-xl mb-8 opacity-90">
            Apply now and take your business to the next level with modern equipment
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

export default MachineryLoanPage;