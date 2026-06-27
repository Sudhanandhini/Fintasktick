import { useState, useEffect, useRef } from 'react';
import {
  Users, Home, Building2, Briefcase, Car, Coins,
  TrendingUp, GraduationCap, Cog, DollarSign, ChevronRight,
  CreditCard, ShieldCheck, Phone, ArrowRight
} from 'lucide-react';
import heroBg from '../assets/5.jpg';
import { Link, useNavigate } from 'react-router-dom';

/* ───────────────────────── CSS ANIMATIONS ───────────────────────── */
const animationStyles = `
  @font-face {
    font-family: 'Tangerine';
    src: url('/src/assets/fonts/Tangerine-Regular.ttf') format('truetype');
    font-weight: 400;
    font-style: normal;
      color:#039EDE !important;
  }
  @font-face {
    font-family: 'Tangerine';
    src: url('/src/assets/fonts/Tangerine-Bold.ttf') format('truetype');
    font-weight: 700;
    font-style: normal;
      color:#039EDE !important;
  }
  .tangerine-heading {
    font-family: 'Tangerine', cursive !important;
    font-weight: 700;
    font-size: 3.5rem !important;
    line-height: 1.1;
      color:#039EDE !important;
  }
  @media (min-width: 768px) {
    .tangerine-heading { font-size: 4.5rem !important; }
  }

  :root {
    --orange-500: #f97316;
    --orange-600: #ea580c;
    --blue-900: #004080;
    --blue-950: #003a77;
  }

  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(50px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes scaleIn {
    from { opacity: 0; transform: scale(0.85); }
    to   { opacity: 1; transform: scale(1); }
  }
  @keyframes float {
    0%, 100% { transform: translateY(0px); }
    50%      { transform: translateY(-12px); }
  }
  @keyframes floatSlow {
    0%, 100% { transform: translateY(0px) rotate(0deg); }
    50%      { transform: translateY(-20px) rotate(2deg); }
  }
  @keyframes pulse {
    0%, 100% { opacity: 0.4; transform: scale(1); }
    50%      { opacity: 0.8; transform: scale(1.05); }
  }
  @keyframes spin {
    from { transform: rotate(0deg); }
    to   { transform: rotate(360deg); }
  }
  @keyframes drawLine {
    from { width: 0; }
    to   { width: 64px; }
  }
  @keyframes shimmer {
    0%   { background-position: -200% center; }
    100% { background-position: 200% center; }
  }
  @keyframes slideInLeft {
    from { opacity: 0; transform: translateX(-100px) skewX(5deg); }
    to   { opacity: 1; transform: translateX(0) skewX(0deg); }
  }
  @keyframes slideInRight {
    from { opacity: 0; transform: translateX(100px) skewX(-5deg); }
    to   { opacity: 1; transform: translateX(0) skewX(0deg); }
  }

  .reveal        { opacity: 0; }
  .reveal.active { animation: fadeUp 0.8s cubic-bezier(.22,1,.36,1) forwards; }
  .reveal-left   { opacity: 0; }
  .reveal-left.active { animation: slideInLeft 0.8s cubic-bezier(.22,1,.36,1) forwards; }
  .reveal-right  { opacity: 0; }
  .reveal-right.active { animation: slideInRight 0.8s cubic-bezier(.22,1,.36,1) forwards; }
  .reveal-scale  { opacity: 0; }
  .reveal-scale.active { animation: scaleIn 0.7s cubic-bezier(.22,1,.36,1) forwards; }

  .stagger-1  { animation-delay: 0.06s !important; }
  .stagger-2  { animation-delay: 0.12s !important; }
  .stagger-3  { animation-delay: 0.18s !important; }
  .stagger-4  { animation-delay: 0.24s !important; }
  .stagger-5  { animation-delay: 0.30s !important; }
  .stagger-6  { animation-delay: 0.36s !important; }
  .stagger-7  { animation-delay: 0.42s !important; }
  .stagger-8  { animation-delay: 0.48s !important; }
  .stagger-9  { animation-delay: 0.54s !important; }
  .stagger-10 { animation-delay: 0.60s !important; }
  .stagger-11 { animation-delay: 0.66s !important; }
  .stagger-12 { animation-delay: 0.72s !important; }

  .float-anim       { animation: float 4s ease-in-out infinite; }
  .float-anim-slow  { animation: floatSlow 6s ease-in-out infinite; }
  .float-anim-delay { animation: float 5s ease-in-out 1s infinite; }
  .pulse-anim       { animation: pulse 3s ease-in-out infinite; }

  .section-line {
    height: 3px;
    background: linear-gradient(90deg, transparent, var(--orange-500), transparent);
    border-radius: 2px;
  }
  .section-line.active {
    animation: drawLine 0.8s cubic-bezier(.22,1,.36,1) 0.2s forwards;
    width: 0;
  }

  .cta-btn {
    background-size: 200% auto;
    background-image: linear-gradient(90deg, var(--orange-500) 0%, #fb923c 25%, var(--orange-600) 50%, #fb923c 75%, var(--orange-500) 100%);
    transition: transform 0.35s ease, box-shadow 0.35s ease;
    position: relative;
    overflow: hidden;
  }
  .cta-btn::before {
    content: '';
    position: absolute;
    top: 50%; left: 50%;
    width: 0; height: 0;
    background: rgba(255,255,255,0.15);
    border-radius: 50%;
    transform: translate(-50%, -50%);
    transition: width 0.6s ease, height 0.6s ease;
  }
  .cta-btn:hover::before { width: 300px; height: 300px; }
  .cta-btn:hover {
    animation: shimmer 2s linear infinite;
    transform: translateY(-3px);
    box-shadow: 0 12px 30px rgba(249,115,22,0.4);
  }

  .product-card {
    transition: transform 0.4s cubic-bezier(.22,1,.36,1), box-shadow 0.4s ease;
    position: relative;
    overflow: hidden;
  }
  .product-card::after {
    content: '';
    position: absolute;
    top: 0; left: -100%;
    width: 100%; height: 100%;
    background: linear-gradient(90deg, transparent, rgba(249,115,22,0.04), transparent);
    transition: left 0.6s ease;
  }
  .product-card:hover::after { left: 100%; }
  .product-card:hover {
    transform: translateY(-8px);
    box-shadow: 0 25px 50px rgba(30,58,95,0.12), 0 4px 16px rgba(249,115,22,0.08);
  }
  .product-card .card-icon {
    transition: transform 0.5s cubic-bezier(.22,1,.36,1), background-color 0.4s ease, color 0.3s ease;
  }
  .product-card:hover .card-icon {
    transform: scale(1.1) rotate(-5deg);
    background-color: var(--orange-500) !important;
    color: white !important;
  }
  .product-card .card-arrow {
    transition: transform 0.35s ease, opacity 0.35s ease;
    opacity: 0.6;
  }
  .product-card:hover .card-arrow {
    transform: translateX(6px);
    opacity: 1;
  }

  .step-card {
    transition: transform 0.4s ease, box-shadow 0.4s ease;
  }
  .step-card:hover {
    transform: translateY(-6px);
    box-shadow: 0 16px 40px rgba(30,58,95,0.10);
  }
  .step-card:hover .step-number {
    background-color: var(--orange-600) !important;
    transform: scale(1.08);
  }

  .noise-overlay::after {
    content: '';
    position: absolute;
    inset: 0;
    opacity: 0.025;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
    pointer-events: none;
  }
`;

/* ───────────────────────── SCROLL REVEAL HOOK ───────────────────────── */
const useScrollReveal = (threshold = 0.15) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setIsVisible(true); },
      { threshold, rootMargin: '0px 0px -50px 0px' }
    );
    obs.observe(el);
    return () => obs.unobserve(el);
  }, [threshold]);

  return [ref, isVisible];
};

/* ═══════════════════════ MAIN COMPONENT ═══════════════════════ */
const numberToWords = (n) => {
  const words = ['', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Eleven', 'Twelve'];
  return words[n] ?? n;
};

const productNames = [
  'Home Loan', 'Mortgage Loan', 'Personal Loan', 'Business Loan',
  'Car Loan', 'Education Loan', 'OD Loan', 'Machinery Loan',
  'Working Capital', 'Gold Loan', 'Insurance'
];

const ProductsPage = () => {
  const navigate = useNavigate();
  const [heroRef, heroVis] = useScrollReveal(0.1);
  const [prodRef, prodVis] = useScrollReveal(0.05);
  const [processRef, processVis] = useScrollReveal(0.1);
  const [ctaRef, ctaVis] = useScrollReveal(0.2);

  const [selectedProducts, setSelectedProducts] = useState([]);
  const [enquiryForm, setEnquiryForm] = useState({ name: '', phone: '', email: '', subject: '' });
  const [enquirySubmitting, setEnquirySubmitting] = useState(false);
  const [enquirySuccess, setEnquirySuccess] = useState(false);

  const toggleProduct = (name) => {
    setSelectedProducts(prev =>
      prev.includes(name) ? prev.filter(p => p !== name) : [...prev, name]
    );
    setEnquirySuccess(false);
  };

  const handleEnquiryChange = (e) =>
    setEnquiryForm(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const handleEnquirySubmit = async (e) => {
    e.preventDefault();
    setEnquirySubmitting(true);
    try {
      const res = await fetch('http://localhost:5000/api/product-enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...enquiryForm, selectedProducts })
      });
      const data = await res.json();
      if (data.success) {
        setEnquirySuccess(true);
        setSelectedProducts([]);
        setEnquiryForm({ name: '', phone: '', email: '', subject: '' });
      } else { alert('Failed to send enquiry. Please try again.'); }
    } catch { alert('Something went wrong. Please try again.'); }
    setEnquirySubmitting(false);
  };

  const products = [
    { id: 1, icon: <Home className="w-7 h-7" />, title: 'Home Loan', shortDesc: 'Make your dream home a reality', features: ['Competitive interest rates', 'Long repayment tenure', 'Affordable EMIs'], description: 'Find your dream home easily. We offer Home Loans with low interest, long tenure, and flexible repayment options through our partner banks.', path: '/homeloan' },
    { id: 2, icon: <Building2 className="w-7 h-7" />, title: 'Mortgage Loan', shortDesc: 'Leverage your property value', features: ['Lowest interest rates', 'Flexible tenures', 'High loan amounts'], description: 'Leverage your property for financial support. Loan Against Property (LAP) helps fund education, renovations, or business growth.', path: '/mortgageloan' },
    { id: 3, icon: <Users className="w-7 h-7" />, title: 'Personal Loan', shortDesc: 'Quick funds without collateral', features: ['No collateral required', 'Minimal documentation', 'Quick approval process'], description: 'Need quick funds for any purpose? Get a Personal Loan without collateral or heavy paperwork. Perfect for weddings, vacations, or emergencies.', path: '/personalloan' },
    { id: 4, icon: <Briefcase className="w-7 h-7" />, title: 'Business Loan', shortDesc: 'Fuel your business growth', features: ['No collateral for small amounts', 'Quick disbursement', 'Flexible repayment'], description: 'Boost your business with our customized Business Loan options — quick disbursal, flexible repayment, and easy processing.', path: '/businessloan' },
    { id: 5, icon: <Car className="w-7 h-7" />, title: 'Car Loan', shortDesc: 'Drive your dream car home', features: ['Attractive interest rates', 'Up to 100% financing', 'Flexible EMI options'], description: 'Own your dream car easily with flexible EMIs and low interest rates on our Car Loan options.', path: '/carloan' },
    { id: 6, icon: <GraduationCap className="w-7 h-7" />, title: 'Education Loan', shortDesc: 'Invest in your future', features: ['Cover tuition fees', 'Moratorium period', 'Tax benefits'], description: 'Secure your future with our Education Loan options, designed to make higher education affordable and accessible.', path: '/educationloan' },
    { id: 7, icon: <DollarSign className="w-7 h-7" />, title: 'OD Loan', shortDesc: 'Overdraft facility for emergencies', features: ['Pay interest only on used amount', 'Flexible withdrawal', 'No prepayment charges'], description: 'Our Overdraft (OD) Loan ensures financial flexibility in emergencies — borrow only what you use.', path: '/odloan' },
    { id: 8, icon: <Cog className="w-7 h-7" />, title: 'Machinery Loan', shortDesc: 'Upgrade your business equipment', features: ['New machinery purchase', 'Equipment upgrade', 'Quick processing'], description: 'Enhance productivity with our Machinery Loan — finance new equipment or upgrades with ease.', path: '/machineryloan' },
    { id: 9, icon: <TrendingUp className="w-7 h-7" />, title: 'Working Capital', shortDesc: 'Support daily operations', features: ['Cover operational expenses', 'Inventory management', 'Flexible repayment'], description: 'Keep your business running smoothly with our Working Capital Loan — perfect for managing daily expenses and cash flow.', path: '/workingcapitalloan' },
    { id: 10, icon: <Coins className="w-7 h-7" />, title: 'Gold Loan', shortDesc: 'Unlock the power of your gold', features: ['Competitive interest rates', 'Minimal documentation', 'Quick disbursement'], description: 'Get instant funds by pledging your gold. Safe, fast, and hassle-free with competitive rates.', path: '/goldloan' },
    { id: 11, icon: <ShieldCheck className="w-7 h-7" />, title: 'Insurance', shortDesc: 'Protect your life & assets', features: ['Life, health & vehicle coverage', 'Flexible premiums', 'Hassle-free claims'], description: 'Ensure financial protection with our comprehensive insurance plans covering health, life, vehicle, and more.', path: '/insuranceloan' },
    // { id: 12, icon: <CreditCard className="w-7 h-7" />, title: 'Credit Card Loan', shortDesc: 'Instant funds via credit card', features: ['No collateral required', 'Instant disbursement', 'Competitive rates'], description: 'Turn your credit card limit into instant cash with a Credit Card Loan. Quick, convenient, and secure.', path: '/creditcardloan' },
  ];

  const steps = [
    { num: '1', title: 'Choose Product', desc: 'Select the loan product that suits your needs' },
    { num: '2', title: 'Submit Details', desc: 'Fill out the application with required documents' },
    { num: '3', title: 'Get Approved', desc: 'Quick verification and approval process' },
    { num: '4', title: 'Receive Funds', desc: 'Get the loan amount disbursed to your account' },
  ];

  return (
    <div className="w-full">
      <style>{animationStyles}</style>

      {/* ════════ HERO ════════ */}
      <section className="relative text-white overflow-hidden">
        <div className="relative h-[220px] sm:h-[350px] md:h-[450px]">
          <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${heroBg})` }} />
          <div className="absolute inset-0 bg-gradient-to-r from-[#003a77]/85 via-[#003a77]/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#003a77]/50 via-transparent to-transparent" />

          <div className="absolute top-[15%] right-[10%] w-32 h-32 md:w-48 md:h-48 border border-white/10 rounded-full float-anim-slow hidden md:block" />
          <div className="absolute bottom-[20%] right-[25%] w-20 h-20 border border-orange-500/20 rounded-full float-anim-delay hidden md:block" />
          <div className="absolute top-[40%] right-[5%] w-3 h-3 bg-orange-500/40 rounded-full pulse-anim hidden md:block" />

          <div ref={heroRef} className="absolute inset-0 flex items-center">
            <div className="max-w-7xl mx-auto px-4 md:px-8 w-full">
              <div className={`max-w-3xl reveal ${heroVis ? 'active' : ''}`}>
                <span className="inline-block text-orange-400 font-semibold text-sm uppercase tracking-widest mb-3">Our Products</span>
                <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">Our Loan Products</h1>
                <p className="text-lg md:text-xl text-white/80 max-w-xl">Comprehensive financial solutions tailored to meet your diverse needs</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════ PRODUCTS GRID ════════ */}
      <section ref={prodRef} className="py-20 px-4 bg-white relative noise-overlay overflow-hidden">
        <div className="absolute top-40 right-0 w-80 h-80 bg-orange-50 rounded-full opacity-40 blur-3xl float-anim" />
        <div className="absolute bottom-20 left-0 w-60 h-60 bg-blue-50 rounded-full opacity-40 blur-3xl float-anim-delay" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className={`text-center mb-14 reveal ${prodVis ? 'active' : ''}`}>
            <span className="inline-block text-orange-500 font-semibold text-sm uppercase tracking-widest mb-3">What We Offer</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-[#003a77] mb-4">Explore Our Solutions</h2>
            <p className="text-gray-500 max-w-xl mx-auto">Find the perfect financial product for your needs</p>
            <div className={`section-line mx-auto mt-5 ${prodVis ? 'active' : ''}`} />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((p, i) => (
              <div key={p.id} className={`product-card bg-white rounded-xl border border-gray-100 shadow-sm group reveal ${prodVis ? 'active' : ''} stagger-${i + 1}`}>
                {/* Card header */}
                <div className="p-6 pb-0">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="card-icon w-12 h-12 rounded-lg bg-orange-50 text-orange-500 flex items-center justify-center flex-shrink-0">
                      {p.icon}
                    </div>
                    <div>
                      <h3 className="font-display text-xl font-bold text-[#003a77]">{p.title}</h3>
                      <p className="text-orange-500 text-sm font-medium">{p.shortDesc}</p>
                    </div>
                  </div>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4">{p.description.substring(0, 120)}...</p>
                </div>

                {/* Features */}
                <div className="px-6 pb-4">
                  <ul className="space-y-2">
                    {p.features.map((f, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-gray-500">
                        <ChevronRight size={14} className="text-orange-500 mt-1 flex-shrink-0" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action */}
                <div className="px-6 pb-6">
                  <button
                    onClick={() => navigate(p.path)}
                    className="w-full py-3 rounded-lg font-semibold text-sm transition-all duration-300 flex items-center justify-center gap-2 text-white"
                    style={{ background: 'linear-gradient(135deg, #003a77 0%, #004080 100%)' }}
                  >
                    Read More <ChevronRight size={16} className="card-arrow" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════ PRODUCT SELECTION ENQUIRY ════════ */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block text-orange-500 font-semibold text-sm uppercase tracking-widest mb-3">Quick Apply</span>
            <h2 className="tangerine-heading text-[#003a77] mb-3">Mark Your Needs</h2>
            <p className="text-gray-500 max-w-xl mx-auto">Select the products you're interested in and our team will contact you shortly</p>
          </div>

          {/* Product checkboxes */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 mb-8">
            <p className="font-semibold text-[#003a77] mb-5 text-lg">Select Products <span className="text-orange-500 text-sm font-normal">(choose one or more)</span></p>
            <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {productNames.map((name) => {
                const checked = selectedProducts.includes(name);
                return (
                  <label
                    key={name}
                    onClick={() => toggleProduct(name)}
                    className={`flex items-center gap-3 p-3 rounded-xl border-2 cursor-pointer transition-all duration-200 select-none ${
                      checked
                        ? 'border-orange-500 bg-orange-50'
                        : 'border-gray-200 bg-white hover:border-orange-300 hover:bg-orange-50/40'
                    }`}
                  >
                    <div className={`w-5 h-5 rounded flex items-center justify-center flex-shrink-0 border-2 transition-all duration-200 ${
                      checked ? 'bg-orange-500 border-orange-500' : 'border-gray-300'
                    }`}>
                      {checked && (
                        <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      )}
                    </div>
                    <span className={`text-sm font-medium leading-tight ${checked ? 'text-orange-600' : 'text-gray-700'}`}>{name}</span>
                  </label>
                );
              })}
            </div>
          </div>

          {/* Form — appears when at least one product selected */}
          {selectedProducts.length > 0 && (
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
              <div className="flex flex-wrap gap-2 mb-6">
                {selectedProducts.map(p => (
                  <span key={p} className="inline-flex items-center gap-1.5 bg-orange-100 text-orange-700 text-xs font-semibold px-3 py-1 rounded-full">
                    {p}
                    <button onClick={() => toggleProduct(p)} className="hover:text-orange-900 transition-colors">×</button>
                  </span>
                ))}
              </div>

              {enquirySuccess ? (
                <div className="text-center py-10">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-[#003a77] mb-2">Enquiry Sent!</h3>
                  <p className="text-gray-500">Our team will reach out to you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleEnquirySubmit} className="space-y-5">
                  <h3 className="font-bold text-[#003a77] text-lg mb-4">Your Contact Details</h3>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-[#003a77] font-semibold text-sm mb-1.5">Full Name *</label>
                      <input
                        type="text" name="name" value={enquiryForm.name}
                        onChange={handleEnquiryChange} required placeholder="Enter your full name"
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg text-gray-800 text-sm bg-gray-50/50 focus:outline-none focus:border-orange-500 transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-[#003a77] font-semibold text-sm mb-1.5">Phone Number *</label>
                      <input
                        type="tel" name="phone" value={enquiryForm.phone}
                        onChange={handleEnquiryChange} required placeholder="+91 9876543210"
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg text-gray-800 text-sm bg-gray-50/50 focus:outline-none focus:border-orange-500 transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-[#003a77] font-semibold text-sm mb-1.5">Email Address *</label>
                      <input
                        type="email" name="email" value={enquiryForm.email}
                        onChange={handleEnquiryChange} required placeholder="your@email.com"
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg text-gray-800 text-sm bg-gray-50/50 focus:outline-none focus:border-orange-500 transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-[#003a77] font-semibold text-sm mb-1.5">Subject *</label>
                      <input
                        type="text" name="subject" value={enquiryForm.subject}
                        onChange={handleEnquiryChange} required placeholder="e.g. Need Home Loan guidance"
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg text-gray-800 text-sm bg-gray-50/50 focus:outline-none focus:border-orange-500 transition-all"
                      />
                    </div>
                  </div>
                  <button
                    type="submit" disabled={enquirySubmitting}
                    className="cta-btn w-full text-white font-bold py-3.5 px-6 rounded-lg text-sm relative z-10 disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {enquirySubmitting ? 'Sending...' : `Submit Enquiry for ${numberToWords(selectedProducts.length)} Product${selectedProducts.length > 1 ? 's' : ''}`}
                  </button>
                </form>
              )}
            </div>
          )}
        </div>
      </section>

      {/* ════════ LOAN PROCESS ════════ */}
      <section ref={processRef} className="relative py-20 px-4 overflow-hidden" style={{ background: 'linear-gradient(135deg, #003a77 0%, #004080 50%, #1e4d8a 100%)' }}>
        <div className="absolute top-0 right-0 w-72 h-72 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 pulse-anim" />
        <div className="absolute bottom-0 left-0 w-56 h-56 bg-orange-500/10 rounded-full translate-y-1/3 -translate-x-1/3 float-anim-slow" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border border-white/5 rounded-full" style={{ animation: 'spin 60s linear infinite' }} />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className={`text-center mb-14 reveal ${processVis ? 'active' : ''}`}>
            <span className="inline-block text-orange-400 font-semibold text-sm uppercase tracking-widest mb-3">How It Works</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">Simple Loan Process</h2>
            <p className="text-blue-200 max-w-xl mx-auto">Get your loan approved in just 4 easy steps</p>
            <div className={`section-line mx-auto mt-5 ${processVis ? 'active' : ''}`} />
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <div key={i} className={`step-card text-center reveal ${processVis ? 'active' : ''} stagger-${i + 1}`}>
                <div className="step-number w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-5 shadow-lg shadow-orange-500/30 transition-all duration-300">
                  {step.num}
                </div>
                <h3 className="font-display text-xl font-bold text-white mb-2">{step.title}</h3>
                <p className="text-blue-200 text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════ CTA ════════ */}
      <section ref={ctaRef} className="relative text-white py-28 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed" style={{ backgroundImage: `url(${heroBg})` }} />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(15,36,57,0.92) 0%, rgba(30,58,95,0.85) 50%, rgba(15,36,57,0.92) 100%)' }} />

        <div className="absolute top-10 left-10 w-24 h-24 border border-white/10 rounded-full float-anim hidden md:block" />
        <div className="absolute bottom-10 right-10 w-32 h-32 border border-orange-500/15 rounded-full float-anim-delay hidden md:block" />

        <div className={`max-w-3xl mx-auto relative z-10 text-center reveal-scale ${ctaVis ? 'active' : ''}`}>
          <span className="inline-block text-orange-400 font-semibold text-sm uppercase tracking-widest mb-4">Need Guidance?</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-5 leading-tight">Need Help Choosing the Right Product?</h2>
          <p className="text-lg md:text-xl mb-10 text-white/75 max-w-xl mx-auto">Our experts are here to guide you through the selection process</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="cta-btn inline-flex items-center justify-center gap-2 text-white px-9 py-4 rounded-lg font-semibold text-base relative z-10">
              Contact Our Team <ArrowRight size={20} />
            </Link>
            <a href="tel:+919164366690" className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 text-white px-9 py-4 rounded-lg font-semibold text-base transition-all duration-300 hover:scale-105">
              <Phone size={18} /> Call Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductsPage;

