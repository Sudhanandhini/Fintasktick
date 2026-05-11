// src/pages/products/InsuranceServicesPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, FileText, Shield, Phone, ArrowLeft, Heart, Home, Car, Briefcase, Users, Umbrella } from 'lucide-react';

const sliderStyles = `
  @keyframes marquee {
    0%   { transform: translateX(0); }
    100% { transform: translateX(-50%); }
  }
  .logo-track {
    display: flex;
    width: max-content;
    animation: marquee 22s linear infinite;
  }
  .logo-track:hover {
    animation-play-state: paused;
  }
`;

const insurancePartners = [
  { name: 'ICICI Lombard', tagline: 'Nibhaye Vaade', color: '#c8102e', bg: '#fff0f2', products: 'Income Protect (Loan Protection)' },
  { name: 'Care Health', tagline: 'Health Insurance', color: '#00539c', bg: '#f0f6ff', products: 'Group 360 (Loan Protection)' },
  { name: 'Shriram Life', tagline: 'Life Insurance', color: '#1a237e', bg: '#f0f0ff', products: 'Savings Plans' },
  { name: 'digit', tagline: 'Insurance', color: '#222222', bg: '#f5f5f5', products: 'Group Total Protect · Flexi Griha Raksha' },
  { name: 'Bajaj General', tagline: 'General Insurance', color: '#003087', bg: '#f0f4ff', products: 'Group Guard Protect (Loan Protection)' },
  { name: 'Livlong', tagline: 'Insurance', color: '#00897b', bg: '#e8f5e9', products: 'Digit Life (Credit Life)' },
  { name: 'ICICI Prudential', tagline: 'Life Insurance', color: '#c8102e', bg: '#fff0f2', products: 'Loan Protection' },
  { name: 'HDFC ERGO', tagline: 'General Insurance', color: '#d32f2f', bg: '#fff3f3', products: 'Koti Suraksha (Accidental Insurance)' },
  { name: 'SBI General', tagline: 'General Insurance', color: '#003087', bg: '#f0f4ff', products: 'Total Protection (Loan Protection)' },
];

const InsuranceServicesPage = () => {
  const features = [
    { 
      icon: <Shield className="w-6 h-6" />, 
      title: "Comprehensive Coverage", 
      desc: "Wide range of insurance products" 
    },
    { 
      icon: <Users className="w-6 h-6" />, 
      title: "Expert Guidance", 
      desc: "Personalized insurance advice" 
    },
    { 
      icon: <CheckCircle className="w-6 h-6" />, 
      title: "Quick Processing", 
      desc: "Fast policy issuance" 
    },
    { 
      icon: <Umbrella className="w-6 h-6" />, 
      title: "Claims Support", 
      desc: "Assistance with claims process" 
    }
  ];

  const insuranceProducts = [
    { 
      icon: <Heart className="w-8 h-8" />, 
      title: "Life Insurance", 
      desc: "Secure your family's financial future",
      color: "#e74c3c",
      types: ["Term Life", "Whole Life", "Endowment Plans", "ULIP"]
    },
    { 
      icon: <Users className="w-8 h-8" />, 
      title: "Health Insurance", 
      desc: "Comprehensive medical coverage for you and family",
      color: "#3498db",
      types: ["Individual Health", "Family Floater", "Critical Illness", "Senior Citizen"]
    },
      { 
      icon: <Home className="w-8 h-8" />, 
      title: "Property Insurance", 
      desc: "Safeguard your home and assets",
      color: "#27ae60",
      types: ["Home Insurance", "Fire Insurance", "Natural Calamity", "Theft Coverage"]
    },
    { 
      icon: <Car className="w-8 h-8" />, 
      title: "Vehicle Insurance", 
      desc: "Complete protection for your vehicles",
      color: "#f39c12",
      types: ["Car Insurance", "Two-Wheeler", "Commercial Vehicle", "Third Party"]
    },
    { 
      icon: <Shield className="w-8 h-8" />, 
      title: "General Insurance", 
      desc: "Comprehensive protection solutions",
      color: "#16a085",
      types: ["Travel Insurance", "Personal Accident/ Accidental Insurance", "Cyber Insurance", "Marine Insurance"]
    },
  
    { 
      icon: <Briefcase className="w-8 h-8" />, 
      title: "Business Insurance", 
      desc: "Protect your business from risks",
      color: "#8e44ad",
      types: ["Shop Insurance", "Office Insurance", "Liability Cover", "Equipment Insurance"]
    },
    
  ];

  const whyInsurance = [
    "Financial security for your family",
    "Protection against unexpected expenses",
    "Tax benefits under Section 80C & 80D",
    "Peace of mind and stress reduction",
    "Asset protection",
    "Medical emergency coverage"
  ];

  const services = [
    "Policy comparison and selection",
    "Premium calculation",
    "Policy documentation",
    "Renewal reminders",
    "Claims assistance",
  
   
   
  ];

  const claimsProcess = [
    { step: "1", title: "Notify Us", desc: "Contact us immediately after incident" },
    { step: "2", title: "Submit Documents", desc: "Provide required claim documents" },
    { step: "3", title: "Verification", desc: "Insurance company verifies claim" },
    { step: "4", title: "Settlement", desc: "Claim amount processed to account" }
  ];

  const lifeInsuranceBenefits = [
    "Financial protection for family",
    "Loan repayment security",
    "Children's education fund",
    "Retirement planning",
    "Wealth creation",
    "Tax savings"
  ];

  const healthInsuranceBenefits = [
    "Cashless hospitalization",
    "Pre & post hospitalization coverage",
    "Daycare procedures covered",
    "No claim bonus",
    "Critical illness rider",
    "Ambulance charges"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <style>{sliderStyles}</style>
      {/* <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <Link to="/services" className="inline-flex items-center gap-2 font-medium hover:opacity-80 transition-opacity" style={{ color: '#003a77' }}>
          <ArrowLeft className="w-5 h-5" /> Back to Services
        </Link>
      </div> */}

      {/* Hero Section */}
      <div className="text-white py-20" style={{ background: 'linear-gradient(135deg, #003a77 0%, #004080 100%)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm mb-4">
                🛡️ Protect What Matters Most
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Insurance Services</h1>
              <p className="text-lg md:text-xl mb-8 opacity-90">
                Comprehensive insurance solutions to protect you, your family, and your assets. Expert guidance in choosing the right coverage at the best rates.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/contact" className="bg-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1" style={{ color: '#003a77' }}>
                  Get Quote
                </Link>
                {/* <button className="border-2 border-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all">
                  Compare Plans
                </button> */}
              </div>
            </div>
            
            {/* <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-2xl">
              <div className="flex items-center gap-2 mb-6">
                <Shield className="w-6 h-6" />
                <h3 className="text-2xl font-bold">Why Choose Insurance?</h3>
              </div>
              <ul className="space-y-3">
                {whyInsurance.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 flex-shrink-0" />
                    <span className="opacity-90">{item}</span>
                  </li>
                ))}
              </ul>
            </div> */}
          </div>
        </div>
      </div>

      {/* Key Stats */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10">
        <div className="grid grid-cols-2 md:grid-cols-2 gap-4">
          {[
            { label: "Insurance Partners", value: "9+" },
            { label: "Policies Issued", value: "200+" },
           
            // { label: "Happy Clients", value: "200+" }
          ].map((stat, idx) => (
            <div key={idx} className="bg-white p-6 rounded-xl shadow-lg text-center">
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

      {/* Insurance Partners Slider */}
      <div className="py-10 bg-white border-y border-gray-100 mt-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold" style={{ color: '#003a77' }}>Our Insurance Partners</h2>
          <p className="text-gray-500 text-sm mt-1">Trusted by India's leading insurance companies</p>
        </div>
        <div className="overflow-hidden">
          <div className="logo-track">
            {[...insurancePartners, ...insurancePartners].map((partner, idx) => (
              <div
                key={idx}
                className="mx-3 flex-shrink-0 w-52 rounded-xl p-4 shadow-md border border-gray-100 flex flex-col gap-1"
                style={{ background: partner.bg }}
              >
                <span className="text-lg font-extrabold leading-tight" style={{ color: partner.color }}>
                  {partner.name}
                </span>
                <span className="text-xs font-medium text-gray-500">{partner.tagline}</span>
                <div className="mt-2 border-t border-gray-200 pt-2">
                  <p className="text-xs text-gray-600 leading-snug">{partner.products}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12" style={{ color: '#003a77' }}>
          Why Choose Our Insurance Services?
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, idx) => (
            <div key={idx} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 duration-300">
              <div className="w-14 h-14 rounded-lg flex items-center justify-center mb-4 text-white" style={{ background: '#f97316' }}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-2" style={{ color: '#003a77' }}>{feature.title}</h3>
              <p className="text-gray-600">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Insurance Products */}
      <div className="py-16" style={{ background: 'linear-gradient(to right, rgba(0, 44, 96, 0.05), rgba(0, 64, 128, 0.05))' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4" style={{ color: '#003a77' }}>
            Our Insurance Products
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Comprehensive coverage options for all your protection needs
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {insuranceProducts.map((product, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all">
                <div className="p-6" style={{ background: `linear-gradient(135deg, ${product.color}15 0%, ${product.color}05 100%)` }}>
                  <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4" style={{ backgroundColor: `${product.color}20`, color: product.color }}>
                    {product.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-2" style={{ color: '#003a77' }}>{product.title}</h3>
                  <p className="text-gray-600 mb-4">{product.desc}</p>
                  <div className="space-y-2">
                    {product.types.map((type, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: product.color }}></div>
                        <span className="text-sm text-gray-700">{type}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="p-4 bg-gray-50">
                  <Link to="/contact" className="text-center block font-semibold hover:opacity-80 transition-opacity" style={{ color: product.color }}>
                    Get Quote →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Life & Health Insurance Benefits */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-2xl shadow-xl">
            <div className="flex items-center gap-3 mb-6">
              <Heart className="w-8 h-8" style={{ color: '#e74c3c' }} />
              <h3 className="text-2xl font-bold" style={{ color: '#003a77' }}>Life Insurance Benefits</h3>
            </div>
            <ul className="space-y-3">
              {lifeInsuranceBenefits.map((benefit, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 flex-shrink-0 mt-1" style={{ color: '#e74c3c' }} />
                  <span className="text-gray-700">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-xl">
            <div className="flex items-center gap-3 mb-6">
              <Users className="w-8 h-8" style={{ color: '#3498db' }} />
              <h3 className="text-2xl font-bold" style={{ color: '#003a77' }}>Health Insurance Benefits</h3>
            </div>
            <ul className="space-y-3">
              {healthInsuranceBenefits.map((benefit, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 flex-shrink-0 mt-1" style={{ color: '#3498db' }} />
                  <span className="text-gray-700">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Our Services */}
      <div className="py-16" style={{ background: 'linear-gradient(to right, rgba(0, 44, 96, 0.05), rgba(0, 64, 128, 0.05))' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12" style={{ color: '#003a77' }}>
            Our Services
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all flex items-start gap-3">
                <CheckCircle className="w-5 h-5 flex-shrink-0 mt-1" style={{ color: '#f97316' }} />
                <span className="text-gray-700">{service}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Claims Process */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-center mb-12" style={{ color: '#003a77' }}>Claims Process</h2>
        <div className="grid md:grid-cols-4 gap-6">
          {claimsProcess.map((item, idx) => (
            <div key={idx} className="text-center">
              <div className="text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4" style={{ background: '#f97316' }}>
                {item.step}
              </div>
              <h3 className="font-bold mb-2" style={{ color: '#003a77' }}>{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Tax Benefits */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12" style={{ color: '#003a77' }}>Tax Benefits</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold mb-4" style={{ color: '#003a77' }}>Section 80C</h3>
              <p className="text-gray-700 mb-4">Tax deduction on life insurance premiums</p>
              <p className="text-3xl font-bold" style={{ color: '#003a77' }}>Up to ₹1.5 Lakhs</p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold mb-4" style={{ color: '#003a77' }}>Section 80D</h3>
              <p className="text-gray-700 mb-4">Tax deduction on health insurance premiums</p>
              <p className="text-3xl font-bold" style={{ color: '#003a77' }}>Up to ₹1 Lakh</p>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-center mb-12" style={{ color: '#003a77' }}>Frequently Asked Questions</h2>
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {[
            { q: "Why do I need insurance?", a: "Insurance provides financial protection against unexpected events and helps secure your family's future." },
            { q: "How much coverage do I need?", a: "Coverage depends on your income, liabilities, and family needs. Our experts can help you determine the right amount." },
            { q: "Can I have multiple policies?", a: "Yes, you can have multiple insurance policies from different companies for comprehensive coverage." },
            { q: "How quickly are claims settled?", a: "Most claims are settled within 7-15 days after document verification, depending on the policy type." }
          ].map((faq, idx) => (
            <div key={idx} className="bg-white p-6 rounded-xl shadow-md">
              <h4 className="font-bold mb-2" style={{ color: '#f97316' }}>{faq.q}</h4>
              <p className="text-gray-600 text-sm">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="rounded-3xl p-8 md:p-12 text-center text-white shadow-2xl" style={{ background: 'linear-gradient(135deg, #003a77 0%, #004080 100%)' }}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#f97316]">Protect Your Future Today</h2>
          <p className="text-lg md:text-xl mb-8 opacity-90">
            Get expert advice and the best insurance plans tailored to your needs
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/contact" className="bg-white px-10 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-all shadow-lg inline-flex items-center justify-center gap-2" style={{ color: '#003a77' }}>
              Get A Quote <ArrowRight className="w-5 h-5" />
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

export default InsuranceServicesPage;

