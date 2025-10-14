// src/pages/products/EducationLoanPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, FileText, GraduationCap, Phone, ArrowLeft, Globe, BookOpen, Award, Clock } from 'lucide-react';

const EducationLoanPage = () => {
  const features = [
    { 
      icon: <Globe className="w-6 h-6" />, 
      title: "Study Anywhere", 
      desc: "For education in India and abroad" 
    },
    { 
      icon: <Clock className="w-6 h-6" />, 
      title: "Moratorium Period", 
      desc: "Start repaying after course completion" 
    },
    { 
      icon: <Award className="w-6 h-6" />, 
      title: "Tax Benefits", 
      desc: "Save on interest under Section 80E" 
    },
    { 
      icon: <BookOpen className="w-6 h-6" />, 
      title: "100% Financing", 
      desc: "Cover tuition, living, and travel costs" 
    }
  ];

  const coverageItems = [
    { icon: "📚", title: "Tuition Fees", desc: "Complete course fees" },
    { icon: "✈️", title: "Travel Expenses", desc: "Airfare and visa costs" },
    { icon: "🏠", title: "Accommodation", desc: "Hostel and living expenses" },
    { icon: "💻", title: "Equipment", desc: "Laptop, books, and supplies" },
    { icon: "🔬", title: "Lab Fees", desc: "Research and project costs" },
    { icon: "🎓", title: "Exam Fees", desc: "Application and examination fees" }
  ];

  const courses = [
    "Engineering & Technology",
    "Medicine & Healthcare",
    "Management (MBA/PGDM)",
    "Law",
    "Arts & Sciences",
    "Aviation",
    "Fashion & Design",
    "Hotel Management"
  ];

  const eligibility = [
    "Secured admission to a recognized institution",
    "Indian citizen with valid documents",
    "Co-applicant (parent/guardian) required",
    "Good academic record",
    "Age: Typically 18-35 years"
  ];

  const documents = [
    "Admission letter from institution",
    "Mark sheets of qualifying exams",
    "Fee structure from institution",
    "Identity & address proof of student and co-applicant",
    "Income proof of co-applicant",
    "Collateral documents (if applicable)"
  ];

  const loanTypes = [
    {
      title: "Education Loan for India",
      amount: "Up to ₹10 Lakhs",
      features: ["No collateral required", "Quick processing", "Flexible tenure"]
    },
    {
      title: "Education Loan for Abroad",
      amount: "Up to ₹50 Lakhs",
      features: ["Covers all expenses", "Study in any country", "Parent as co-borrower"]
    }
  ];

  const popularDestinations = [
    { country: "🇺🇸 USA", programs: "MS, MBA, PhD" },
    { country: "🇬🇧 UK", programs: "Masters, MBA" },
    { country: "🇨🇦 Canada", programs: "MS, MBA, Diploma" },
    { country: "🇦🇺 Australia", programs: "MS, MBA, Research" },
    { country: "🇩🇪 Germany", programs: "Engineering, MS" },
    { country: "🇸🇬 Singapore", programs: "MBA, Engineering" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-white to-blue-50">
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
                🎓 Invest in Your Future
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Education Loan</h1>
              <p className="text-lg md:text-xl mb-8 opacity-90">
                Invest in your future with comprehensive education loans. Study in India or abroad with flexible repayment and tax benefits.
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
                <GraduationCap className="w-6 h-6" />
                <h3 className="text-2xl font-bold">Loan Highlights</h3>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-center pb-3 border-b border-white/20">
                  <span className="opacity-90">Loan Amount</span>
                  <span className="font-bold">Up to ₹50 Lakhs</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-white/20">
                  <span className="opacity-90">Interest Rate</span>
                  <span className="font-bold">8.5% p.a. onwards</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-white/20">
                  <span className="opacity-90">Tenure</span>
                  <span className="font-bold">Up to 15 years</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="opacity-90">Moratorium</span>
                  <span className="font-bold">Course + 1 year</span>
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
            { label: "Interest Rate", value: "8.5% p.a." },
            { label: "Max Loan", value: "₹50 Lakhs" },
            { label: "Tenure", value: "Up to 15 years" },
            { label: "Coverage", value: "100%" }
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
          Why Choose Our Education Loan?
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
            Education Loan Options
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {loanTypes.map((type, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl shadow-xl">
                <h3 className="text-2xl font-bold mb-3" style={{ color: '#002c60' }}>{type.title}</h3>
                <p className="text-3xl font-bold mb-6" style={{ color: '#002c60' }}>{type.amount}</p>
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

      {/* What's Covered */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4" style={{ color: '#002c60' }}>
          What Does Education Loan Cover?
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Comprehensive coverage for all your educational expenses
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          {coverageItems.map((item, idx) => (
            <div key={idx} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all text-center">
              <div className="text-4xl mb-3">{item.icon}</div>
              <h3 className="text-lg font-bold mb-2" style={{ color: '#002c60' }}>{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Popular Destinations */}
      <div className="py-16" style={{ background: 'linear-gradient(to right, rgba(0, 44, 96, 0.05), rgba(0, 64, 128, 0.05))' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12" style={{ color: '#002c60' }}>
            Popular Study Destinations
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {popularDestinations.map((dest, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all text-center">
                <h3 className="text-2xl font-bold mb-2">{dest.country}</h3>
                <p className="text-gray-600">{dest.programs}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Eligible Courses */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12" style={{ color: '#002c60' }}>
          Eligible Courses
        </h2>
        <div className="grid md:grid-cols-4 gap-4">
          {courses.map((course, idx) => (
            <div key={idx} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all text-center border-2" style={{ borderColor: 'rgba(0, 44, 96, 0.1)' }}>
              <CheckCircle className="w-8 h-8 mx-auto mb-3" style={{ color: '#002c60' }} />
              <p className="font-semibold" style={{ color: '#002c60' }}>{course}</p>
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

      {/* Special Features */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12" style={{ color: '#002c60' }}>
          Special Features
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { title: "Tax Benefits", desc: "Interest paid is tax deductible under Section 80E" },
            { title: "Flexible Repayment", desc: "Start repaying after course completion + 1 year" },
            { title: "No Prepayment Penalty", desc: "Foreclose or prepay without any charges" },
            { title: "Simple Interest", desc: "During moratorium period" },
            { title: "Subsidy Available", desc: "For economically weaker sections" },
            { title: "Parent as Co-borrower", desc: "Parent/Guardian can be co-applicant" }
          ].map((feature, idx) => (
            <div key={idx} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all">
              <h3 className="text-lg font-bold mb-2" style={{ color: '#002c60' }}>{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Application Process */}
      <div className="py-16" style={{ background: 'linear-gradient(to right, rgba(0, 44, 96, 0.05), rgba(0, 64, 128, 0.05))' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12" style={{ color: '#002c60' }}>Simple Application Process</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: "1", title: "Get Admission", desc: "Secure admission in institution" },
              { step: "2", title: "Apply Online", desc: "Submit loan application" },
              { step: "3", title: "Get Approved", desc: "Approval within 5-7 days" },
              { step: "4", title: "Disbursal", desc: "Funds sent to institution" }
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Pursue Your Dreams?</h2>
          <p className="text-lg md:text-xl mb-8 opacity-90">
            Apply now and take the first step towards your educational journey
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

export default EducationLoanPage;