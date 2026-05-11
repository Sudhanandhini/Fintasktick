// src/pages/products/DropLineODPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight, CheckCircle, FileText, Phone,
  TrendingDown, DollarSign, Zap, Shield,
  Home, Briefcase, BarChart2, RefreshCw, UserCheck
} from 'lucide-react';

const ODLoanPage = () => {

  const features = [
    {
      icon: <TrendingDown className="w-6 h-6" />,
      title: "Reducing Credit Limit",
      desc: "Limit drops periodically — builds repayment discipline automatically"
    },
    {
      icon: <DollarSign className="w-6 h-6" />,
      title: "Interest on Usage Only",
      desc: "Pay interest solely on the amount drawn, not the full sanctioned limit"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Doorstep Service",
      desc: "Our team visits you — zero need to travel to a branch"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "No Fixed EMI Pressure",
      desc: "Withdraw and repay freely within your available limit"
    }
  ];

  const howItWorks = [
    {
      step: "1",
      title: "Sanction",
      desc: "A credit limit is approved based on your property value or business profile"
    },
    {
      step: "2",
      title: "Draw Funds",
      desc: "Withdraw up to the current available limit anytime through net banking or cheque"
    },
    {
      step: "3",
      title: "Limit Reduces",
      desc: "The sanctioned limit drops by a fixed amount each month / quarter automatically"
    },
    {
      step: "4",
      title: "Pay & Reuse",
      desc: "Repay to free up space within current limit and reuse until the facility ends"
    }
  ];

  const odVsDropline = [
    { feature: "Credit Limit", regular: "Fixed throughout tenure", dropline: "Reduces periodically" },
    { feature: "Repayment Style", regular: "Fully flexible", dropline: "Flexible within dropping limit" },
    { feature: "Tenure", regular: "Renewed yearly", dropline: "Defined tenure (3–15 yrs)" },
    { feature: "Principal Repayment", regular: "At borrower's discretion", dropline: "Built-in via limit drop" },
    { feature: "Interest Charged", regular: "Only on utilized amount", dropline: "Only on utilized amount" },
    { feature: "Best For", regular: "Short-term cash gaps", dropline: "Medium-to-long-term needs" }
  ];

  const useCases = [
    { icon: "🏗️", title: "Property-backed Finance", desc: "Leverage your property to fund large requirements" },
    { icon: "📦", title: "Working Capital", desc: "Manage inventory, procurement and operations smoothly" },
    { icon: "👥", title: "Payroll & HR Costs", desc: "Ensure timely salaries even in lean months" },
    { icon: "📈", title: "Business Expansion", desc: "Fund growth without locking into rigid EMIs" },
    { icon: "🔧", title: "Asset & Equipment", desc: "Purchase or repair machinery when required" },
    { icon: "⚡", title: "Emergency Liquidity", desc: "Instant draw when cash is urgently needed" }
  ];

  const eligibility = [
    "Age: 23–65 years at loan maturity",
    "Salaried: Minimum income ₹25,000/month",
    "Self-employed: Annual turnover ₹15 lakhs+",
    "Property ownership (for LAP-based Drop Line OD)",
    "CIBIL / Credit score: 700+ preferred",
    "Minimum 3 years of business vintage (self-employed)"
  ];

  const documents = [
    "Identity Proof – Aadhaar / PAN / Passport",
    "Address Proof – Utility bill / Aadhaar",
    "Income Proof – Salary slips (3 months) / ITR (2 years)",
    "Bank Statements – Last 12 months",
    "Property Documents – Title deed, EC, property tax receipts",
    "Business Proof – GST certificate / trade licence (self-employed)"
  ];

  const benefits = [
    "Interest only on amount actually withdrawn",
    "Structured repayment via automatic limit reduction",
    "No foreclosure / prepayment penalty",
    "Doorstep document collection & processing",
    "Longer tenure up to 15 years",
    "Loan Against Property (LAP) backed security",
    "Available for salaried and self-employed",
    "Builds a stronger credit profile over time"
  ];

  const lenderRates = [
    { type: "Banks (LAP-based)", from: "10.50%", to: "12.50%" },
    { type: "NBFCs", from: "12.00%", to: "15.00%" },
    { type: "HFCs", from: "11.00%", to: "14.00%" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">

      {/* ── Hero ── */}
      <div
        className="text-white py-20"
        style={{ background: 'linear-gradient(135deg, #003a77 0%, #004080 100%)' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm mb-4">
                📉 Structured Revolving Credit
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Drop Line Overdraft (OD) Facility
              </h1>
              <p className="text-lg md:text-xl mb-8 opacity-90">
                The smart blend of a term loan and an overdraft — enjoy flexible withdrawals
                while your credit limit reduces automatically, ensuring disciplined repayment
                without fixed EMI stress.
              </p>

              {/* Doorstep badge */}
              {/* <div className="inline-flex items-center gap-2 bg-[#f97316]/20 border border-[#f97316]/40 px-4 py-2 rounded-full text-sm mb-8">
                <Home className="w-4 h-4 text-[#f97316]" />
                <span className="text-[#f97316] font-semibold">Doorstep Service Available — We Come to You!</span>
              </div> */}

              {/* <div className="flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="bg-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                  style={{ color: '#003a77' }}
                >
                  Apply Now
                </Link>
                <a
                  href="tel:+919999999999"
                  className="border-2 border-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all inline-flex items-center gap-2"
                >
                  <Phone className="w-5 h-5" /> Call Us
                </a>
              </div> */}
            </div>

            {/* Hero info card */}
            {/* <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-2xl border border-white/20">
              <div className="flex items-center gap-2 mb-6">
                <TrendingDown className="w-6 h-6 text-[#f97316]" />
                <h3 className="text-xl font-bold">Quick Snapshot</h3>
              </div>
              <div className="space-y-4 text-sm">
                {[
                  { label: "Interest Rate (Banks)", value: "10.50% p.a. onwards" },
                  { label: "Max Credit Limit", value: "Up to ₹5 Crore" },
                  { label: "Tenure", value: "3 to 15 Years" },
                  { label: "Limit Reduces", value: "Monthly / Quarterly" },
                  { label: "Interest Charged On", value: "Utilized Amount Only" },
                  { label: "Doorstep Service", value: "✔ Available Pan-India" }
                ].map((row, i) => (
                  <div
                    key={i}
                    className="flex justify-between items-center pb-3 border-b border-white/20 last:border-0 last:pb-0"
                  >
                    <span className="opacity-80">{row.label}</span>
                    <span className="font-bold text-right">{row.value}</span>
                  </div>
                ))}
              </div>
            </div> */}
          </div>
        </div>
      </div>

      {/* ── Key Stats ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {[
            { label: "Interest Rate Starts from ", value: "10.50%" },
            { label: "Max Credit Limit", value: "₹5 Cr" },
            { label: "Max Tenure", value: "15 Yrs" },
          
          ].map((stat, idx) => (
            <div key={idx} className="bg-white p-6 rounded-xl shadow-lg text-center">
              <p className="text-3xl font-bold mb-2" style={{ color: '#003a77' }}>{stat.value}</p>
              <p className="text-gray-600 text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ROI Disclaimer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-3 mb-2">
        <p className="text-sm text-gray-500 italic text-center">
          *ROI is indicative. Final rate depends on the customer's credit profile, property valuation, and lender's decision.
        </p>
      </div>

      {/* ── Current Market Rates ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4" style={{ color: '#003a77' }}>
          Current Interest Rates (India, 2025)
        </h2>
        <p className="text-center text-gray-500 text-sm mb-8">
          Rates updated as per prevailing RBI repo rate of <strong>6.25%</strong> (effective Feb 2025)
        </p>
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {lenderRates.map((lr, idx) => (
            <div key={idx} className="bg-white rounded-2xl shadow-xl p-6 text-center border-t-4" style={{ borderColor: '#f97316' }}>
              <p className="text-gray-600 font-medium mb-3">{lr.type}</p>
              <p className="text-3xl font-bold mb-1" style={{ color: '#003a77' }}>{lr.from}</p>
              <p className="text-sm text-gray-400 mb-1">to</p>
              <p className="text-xl font-semibold text-gray-700">{lr.to}</p>
              <p className="text-xs text-gray-400 mt-2">per annum</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── What is Drop Line OD ── */}
      <div
        className="py-16"
        style={{ background: 'linear-gradient(to right, rgba(0,44,96,0.05), rgba(0,64,128,0.05))' }}
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: '#003a77' }}>
            What is a Drop Line Overdraft?
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            A <strong>Drop Line OD</strong> (Dropline Overdraft) is a hybrid credit product that combines the
            flexibility of an overdraft with the structured repayment of a term loan.
            Your sanctioned credit limit <em>reduces</em> (drops) by a fixed amount each
            month or quarter — acting as your principal repayment — while you continue
            to enjoy the freedom to draw and repay within the current available limit.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed">
            Unlike a plain overdraft that stays the same until renewal, a Drop Line OD
            has a defined end date. This makes it ideal for medium-to-long-term funding
            needs such as business expansion, working capital, or property-backed finance.
          </p>
        </div>
      </div>

      {/* ── Features ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12" style={{ color: '#003a77' }}>
          Why Choose Drop Line OD?
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 duration-300"
            >
              <div
                className="w-14 h-14 rounded-lg flex items-center justify-center mb-4 text-white"
                style={{ background: '#f97316' }}
              >
                {feature.icon}
              </div>
              <h3 className="text-lg font-bold mb-2" style={{ color: '#003a77' }}>{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── Doorstep Service Highlight ── */}
      {/* <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
        <div
          className="rounded-2xl p-8 md:p-10 flex flex-col md:flex-row items-center gap-8"
          style={{ background: 'linear-gradient(135deg, #f97316 0%, #ea6c0b 100%)' }}
        >
          <div className="flex-shrink-0">
            <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center">
              <Home className="w-10 h-10 text-white" />
            </div>
          </div>
          <div className="text-white text-center md:text-left">
            <h3 className="text-2xl md:text-3xl font-bold mb-2">Doorstep Service — We Come to You</h3>
            <p className="text-white/90 text-lg">
              No branch visits needed. Our loan advisors will visit your home or office for
              document collection, verification, and guidance — making your Drop Line OD
              journey completely hassle-free.
            </p>
          </div>
          <div className="flex-shrink-0">
            <Link
              to="/contact"
              className="bg-white px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-all shadow-lg whitespace-nowrap"
              style={{ color: '#003a77' }}
            >
              Book Doorstep Visit
            </Link>
          </div>
        </div>
      </div> */}

      {/* ── How It Works ── */}
      <div
        className="py-16"
        style={{ background: 'linear-gradient(to right, rgba(0,44,96,0.05), rgba(0,64,128,0.05))' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12" style={{ color: '#003a77' }}>
            How Does Drop Line OD Work?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {howItWorks.map((item, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl shadow-lg text-center">
                <div
                  className="text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4"
                  style={{ background: '#f97316' }}
                >
                  {item.step}
                </div>
                <h3 className="text-lg font-bold mb-2" style={{ color: '#003a77' }}>{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Visual drop illustration */}
          {/* <div className="mt-12 bg-white rounded-2xl shadow-xl p-8 max-w-4xl mx-auto">
            <h4 className="text-lg font-bold text-center mb-6" style={{ color: '#003a77' }}>
              Illustration: How Your Limit Drops Over Time
            </h4>
            <div className="flex items-end justify-between gap-2 h-40">
              {[100, 88, 76, 64, 52, 40, 28, 16].map((pct, i) => (
                <div key={i} className="flex-1 flex flex-col items-center gap-1">
                  <span className="text-xs font-semibold" style={{ color: '#003a77' }}>₹{pct}L</span>
                  <div
                    className="w-full rounded-t-lg transition-all"
                    style={{
                      height: `${pct}%`,
                      background: i === 0
                        ? '#003a77'
                        : `rgba(0, 58, 119, ${1 - i * 0.1})`
                    }}
                  />
                  <span className="text-xs text-gray-500">M{i + 1}</span>
                </div>
              ))}
            </div>
            <p className="text-center text-xs text-gray-400 mt-4">
              *Illustrative example. Actual drop schedule depends on lender terms and tenure.
            </p>
          </div> */}
        </div>
      </div>

      {/* ── Use Cases ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4" style={{ color: '#003a77' }}>
          Who Should Opt for Drop Line OD?
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Ideal for individuals and businesses that need flexible access to funds over a longer period
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          {useCases.map((useCase, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all text-center"
            >
              <div className="text-4xl mb-3">{useCase.icon}</div>
              <h3 className="text-lg font-bold mb-2" style={{ color: '#f97316' }}>{useCase.title}</h3>
              <p className="text-gray-600 text-sm">{useCase.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── Benefits ── */}
      <div
        className="py-16"
        style={{ background: 'linear-gradient(to right, rgba(0,44,96,0.05), rgba(0,64,128,0.05))' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12" style={{ color: '#003a77' }}>
            Key Benefits
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all flex items-start gap-3"
              >
                <CheckCircle className="w-5 h-5 flex-shrink-0 mt-1" style={{ color: '#f97316' }} />
                <span className="text-gray-700 text-sm">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Comparison Table ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-center mb-12" style={{ color: '#003a77' }}>
          Drop Line OD vs Regular OD
        </h2>
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr style={{ background: '#f97316' }}>
                  <th className="px-6 py-4 text-left text-white font-semibold">Feature</th>
                  <th className="px-6 py-4 text-left text-white font-semibold">Drop Line OD</th>
                  <th className="px-6 py-4 text-left text-white font-semibold">Regular OD</th>
                </tr>
              </thead>
              <tbody>
                {odVsDropline.map((row, idx) => (
                  <tr key={idx} className={`border-b ${idx % 2 === 1 ? 'bg-gray-50' : ''}`}>
                    <td className="px-6 py-4 font-semibold text-gray-800">{row.feature}</td>
                    <td className="px-6 py-4 text-gray-700">
                      <span className="inline-flex items-center gap-1">
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                        {row.dropline}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-gray-500">{row.regular}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* ── Eligibility & Documents ── */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            <div className="bg-white p-8 rounded-2xl shadow-xl">
              <div className="flex items-center gap-3 mb-6">
                <UserCheck className="w-8 h-8" style={{ color: '#f97316' }} />
                <h3 className="text-2xl md:text-3xl font-bold" style={{ color: '#003a77' }}>
                  Eligibility Criteria
                </h3>
              </div>
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
              <div className="flex items-center gap-3 mb-6">
                <FileText className="w-8 h-8" style={{ color: '#f97316' }} />
                <h3 className="text-2xl md:text-3xl font-bold" style={{ color: '#003a77' }}>
                  Required Documents
                </h3>
              </div>
              <ul className="space-y-4">
                {documents.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <FileText className="w-6 h-6 flex-shrink-0 mt-1" style={{ color: '#003a77' }} />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* ── CTA ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div
          className="rounded-3xl p-8 md:p-12 text-center text-white shadow-2xl"
          style={{ background: 'linear-gradient(135deg, #003a77 0%, #004080 100%)' }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#f97316]">
            Ready for Structured & Flexible Credit?
          </h2>
          <p className="text-lg md:text-xl mb-4 opacity-90">
            Apply for a Drop Line OD today — our team will visit your doorstep for a seamless experience
          </p>
          <p className="text-sm opacity-70 mb-8">
            ✔ Doorstep Document Collection &nbsp;|&nbsp; ✔ Quick Processing &nbsp;|&nbsp; ✔ Expert Guidance
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/contact"
              className="bg-white px-10 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-all shadow-lg inline-flex items-center justify-center gap-2"
              style={{ color: '#003a77' }}
            >
              Apply Now <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href="tel:+919999999999"
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

export default ODLoanPage;