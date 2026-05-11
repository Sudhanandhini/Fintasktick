import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight, Shield, Clock, Users, TrendingUp, Home, Car,
  GraduationCap, Building2, Briefcase, Coins, ChevronLeft,
  DollarSign, Cog, ChevronRight, CreditCard, X, Phone
} from 'lucide-react';
import heroBg1 from '../assets/fin-banner1.webp';
import heroBg2 from '../assets/banner2.webp';
import heroBg3 from '../assets/banner3.webp';
import heroBg31 from '../assets/cta1.jpg';

/* ───────────────────────── CSS ANIMATIONS ───────────────────────── */
const animationStyles = `
  :root {
    --orange-500: #f97316;
    --orange-600: #ea580c;
    --blue-900: #004080;
    --blue-800: #1e4d8a;
    --blue-950: #003a77;
  }

  /* ── KEYFRAMES ── */
  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(50px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes fadeDown {
    from { opacity: 0; transform: translateY(-40px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes fadeIn {
    from { opacity: 0; }
    to   { opacity: 1; }
  }
  @keyframes fadeLeft {
    from { opacity: 0; transform: translateX(-60px); }
    to   { opacity: 1; transform: translateX(0); }
  }
  @keyframes fadeRight {
    from { opacity: 0; transform: translateX(60px); }
    to   { opacity: 1; transform: translateX(0); }
  }
  @keyframes scaleIn {
    from { opacity: 0; transform: scale(0.85); }
    to   { opacity: 1; transform: scale(1); }
  }
  @keyframes slideUp {
    from { opacity: 0; transform: translateY(80px) rotate(1deg); }
    to   { opacity: 1; transform: translateY(0) rotate(0deg); }
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
  @keyframes shimmer {
    0%   { background-position: -200% center; }
    100% { background-position: 200% center; }
  }
  @keyframes drawLine {
    from { width: 0; }
    to   { width: 64px; }
  }
  @keyframes spin {
    from { transform: rotate(0deg); }
    to   { transform: rotate(360deg); }
  }
  @keyframes slideInLeft {
    from { opacity: 0; transform: translateX(-100px) skewX(5deg); }
    to   { opacity: 1; transform: translateX(0) skewX(0deg); }
  }
  @keyframes slideInRight {
    from { opacity: 0; transform: translateX(100px) skewX(-5deg); }
    to   { opacity: 1; transform: translateX(0) skewX(0deg); }
  }
  @keyframes bounceIn {
    0%   { opacity: 0; transform: scale(0.3); }
    50%  { transform: scale(1.05); }
    70%  { transform: scale(0.95); }
    100% { opacity: 1; transform: scale(1); }
  }
  @keyframes counterPop {
    0%   { transform: scale(1); }
    50%  { transform: scale(1.12); }
    100% { transform: scale(1); }
  }
  @keyframes blink {
    0%, 100% { opacity: 1; }
    50%      { opacity: 0; }
  }
  @keyframes gradientMove {
    0%   { background-position: 0% 50%; }
    50%  { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }
  @keyframes popupOverlay {
    from { opacity: 0; }
    to   { opacity: 1; }
  }
  @keyframes popupSlide {
    from { opacity: 0; transform: translateY(40px) scale(0.95); }
    to   { opacity: 1; transform: translateY(0) scale(1); }
  }
  @keyframes marquee {
    0%   { transform: translateX(0); }
    100% { transform: translateX(-50%); }
  }

  /* ── REVEAL CLASSES ── */
  .reveal        { opacity: 0; }
  .reveal.active { animation: fadeUp 0.8s cubic-bezier(.22,1,.36,1) forwards; }
  .reveal-down   { opacity: 0; }
  .reveal-down.active { animation: fadeDown 0.7s cubic-bezier(.22,1,.36,1) forwards; }
  .reveal-left   { opacity: 0; }
  .reveal-left.active { animation: slideInLeft 0.8s cubic-bezier(.22,1,.36,1) forwards; }
  .reveal-right  { opacity: 0; }
  .reveal-right.active { animation: slideInRight 0.8s cubic-bezier(.22,1,.36,1) forwards; }
  .reveal-scale  { opacity: 0; }
  .reveal-scale.active { animation: scaleIn 0.7s cubic-bezier(.22,1,.36,1) forwards; }
  .reveal-bounce { opacity: 0; }
  .reveal-bounce.active { animation: bounceIn 0.8s cubic-bezier(.22,1,.36,1) forwards; }

  /* ── STAGGER DELAYS ── */
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

  /* ── FLOATING ELEMENTS ── */
  .float-anim       { animation: float 4s ease-in-out infinite; }
  .float-anim-slow  { animation: floatSlow 6s ease-in-out infinite; }
  .float-anim-delay { animation: float 5s ease-in-out 1s infinite; }
  .pulse-anim       { animation: pulse 3s ease-in-out infinite; }

  /* ── PRODUCT CARD ── */
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

  /* ── WHY CARD ── */
  .why-card {
    transition: transform 0.45s cubic-bezier(.22,1,.36,1), box-shadow 0.45s ease;
    position: relative;
    overflow: hidden;
  }
  .why-card::before {
    content: '';
    position: absolute;
    bottom: 0; left: 0; right: 0;
    height: 3px;
    background: linear-gradient(90deg, var(--orange-500), var(--blue-900));
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.5s cubic-bezier(.22,1,.36,1);
  }
  .why-card::after {
    content: '';
    position: absolute;
    top: -50%; right: -50%;
    width: 100%; height: 100%;
    background: radial-gradient(circle, rgba(249,115,22,0.05) 0%, transparent 70%);
    opacity: 0;
    transition: opacity 0.4s ease;
  }
  .why-card:hover::before { transform: scaleX(1); }
  .why-card:hover::after  { opacity: 1; }
  .why-card:hover {
    transform: translateY(-6px);
    box-shadow: 0 20px 50px rgba(30,58,95,0.12);
  }
  .why-card .icon-wrap {
    transition: all 0.4s cubic-bezier(.22,1,.36,1);
  }
  .why-card:hover .icon-wrap {
    background-color: var(--orange-500) !important;
    transform: scale(1.08) rotate(-3deg);
    box-shadow: 0 8px 20px rgba(249,115,22,0.3);
  }
  .why-card:hover .icon-wrap svg { color: #fff !important; }

  /* ── SERVICE CARD ── */
  .service-card {
    transition: transform 0.4s ease, box-shadow 0.4s ease;
    overflow: hidden;
  }
  .service-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 16px 40px rgba(30,58,95,0.10);
  }
  .service-card li {
    transition: transform 0.3s ease, color 0.3s ease;
  }
  .service-card:hover li { transform: translateX(4px); }

  /* ── DOT NAV ── */
  .dot-btn {
    transition: width 0.4s cubic-bezier(.22,1,.36,1), background-color 0.3s ease;
  }

  /* ── CTA BUTTON ── */
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

  /* ── COUNTER ── */
  .counter-done { animation: counterPop 0.5s cubic-bezier(.22,1,.36,1); }

  /* ── SECTION DIVIDER ── */
  .section-line {
    height: 3px;
    background: linear-gradient(90deg, transparent, var(--orange-500), transparent);
    border-radius: 2px;
  }
  .section-line.active {
    animation: drawLine 0.8s cubic-bezier(.22,1,.36,1) 0.2s forwards;
    width: 0;
  }

  /* ── POPUP ── */
  .popup-overlay  { animation: popupOverlay 0.35s ease; }
  .popup-card     { animation: popupSlide 0.5s cubic-bezier(.22,1,.36,1) 0.15s both; }

  /* ── MARQUEE ── */
  .marquee-track {
    animation: marquee 30s linear infinite;
  }
  .marquee-track:hover { animation-play-state: paused; }

  /* ── GRADIENT ANIMATED BG ── */
  .gradient-animated {
    background-size: 200% 200%;
    animation: gradientMove 8s ease infinite;
  }

  /* ── FOCUS ── */
  input:focus, select:focus, textarea:focus {
    outline: none;
    border-color: var(--orange-500) !important;
    box-shadow: 0 0 0 3px rgba(249,115,22,0.12);
    transform: translateY(-1px);
    transition: all 0.3s ease;
  }

  /* ── NOISE ── */
  .noise-overlay::after {
    content: '';
    position: absolute;
    inset: 0;
    opacity: 0.025;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
    pointer-events: none;
  }

  html { scroll-behavior: smooth; }
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

/* ───────────────────────── TYPING EFFECT HOOK ───────────────────────── */
const useTypingEffect = (texts, speed = 80, pause = 2000) => {
  const [displayText, setDisplayText] = useState('');
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = texts[textIndex];
    let timeout;

    if (!isDeleting && charIndex < currentText.length) {
      timeout = setTimeout(() => {
        setDisplayText(currentText.slice(0, charIndex + 1));
        setCharIndex(c => c + 1);
      }, speed);
    } else if (!isDeleting && charIndex === currentText.length) {
      timeout = setTimeout(() => setIsDeleting(true), pause);
    } else if (isDeleting && charIndex > 0) {
      timeout = setTimeout(() => {
        setDisplayText(currentText.slice(0, charIndex - 1));
        setCharIndex(c => c - 1);
      }, speed / 2);
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setTextIndex((t) => (t + 1) % texts.length);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, textIndex, texts, speed, pause]);

  return displayText;
};

/* ───────────────────────── COUNTER COMPONENT ───────────────────────── */
const Counter = ({ end, suffix, label, inView, duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (!inView) return;
    let start;
    let raf;
    const step = (ts) => {
      if (!start) start = ts;
      const p = Math.min((ts - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setCount(Math.floor(end * eased));
      if (p < 1) { raf = requestAnimationFrame(step); }
      else { setCount(end); setDone(true); }
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [inView, end, duration]);

  return (
    <div className="text-center group cursor-default">
      <div className={`text-3xl md:text-4xl font-bold text-orange-400 mb-1 tracking-tight transition-transform duration-300 group-hover:scale-110 ${done ? 'counter-done' : ''}`}>
        {count.toLocaleString()}{suffix}
      </div>
      <div className="text-sm md:text-base text-blue-200 transition-colors duration-300 group-hover:text-white">{label}</div>
    </div>
  );
};

/* ═══════════════════════ MAIN COMPONENT ═══════════════════════ */
const HomePage = () => {
  /* ── Slider ── */
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const slides = [
    {
      image: heroBg1,
      title: (
  <>
    Welcome to{" "}
    <span className="text-[#e37f10] font-bold">
      Fintasktick
    </span>{" "}
    — Your Trusted Loan Partners!
  </>
),
      // title: 'Welcome to Fintasktick — Your Trusted Loan Partners!',
      description: 'Fintasktick is your trusted partner in helping you find the best financial products that meet your specific requirements.',
      primaryBtn: { text: 'Explore Products', link: '/products' },
      secondaryBtn: { text: 'Contact Us', link: '/contact' }
    },
    {
      image: heroBg2,
      title: (
        <>
          Get the{' '}
          <span style={{ color: '#60a5fa' }}>Best Loan</span>
          {' '}Deals
        </>
      ),
      description: 'Compare multiple lenders and find the perfect loan solution tailored to your needs with competitive rates.',
      primaryBtn: { text: 'Apply Now', link: '/contact' },
      secondaryBtn: { text: 'Learn More', link: '/about' }
    },
    {
      image: heroBg3,
      title: (
        <>
          <span style={{ color: '#60a5fa' }}>Expert Financial</span>
          {' '}Guidance
        </>
      ),
      description: 'Over 20 years of experience helping customers achieve their financial goals with personalized solutions.',
      primaryBtn: { text: 'View Services', link: '/services' },
      secondaryBtn: { text: 'Contact Us', link: '/contact' }
    }
  ];

  useEffect(() => {
    if (isPaused) return;
    const id = setInterval(() => setCurrentSlide(p => (p + 1) % slides.length), 35000);
    return () => clearInterval(id);
  }, [isPaused, slides.length]);

  const nextSlide = () => setCurrentSlide(p => (p + 1) % slides.length);
  const prevSlide = () => setCurrentSlide(p => (p - 1 + slides.length) % slides.length);

  /* ── Stats ── */
  const [statsRef, statsVisible] = useScrollReveal(0.2);
  const stats = [
    { end: 22, suffix: '+', label: 'Years in Business' },
    { end: 100, suffix: '+ Cr', label: 'Unsecured Loans Disbursed' },
    { end: 500, suffix: '+ Cr', label: 'Secured Loans Disbursed' },
    { end: 2, suffix: '+ Cr', label: 'Insurance' },
    { end: 3000, suffix: '+', label: 'Clients Serviced' }
  ];

  /* ── Section reveals ── */
  const [whyRef, whyVis] = useScrollReveal();
  const [prodRef, prodVis] = useScrollReveal(0.1);
  const [visionRef, visionVis] = useScrollReveal();
  const [svcRef, svcVis] = useScrollReveal();
  const [ctaRef, ctaVis] = useScrollReveal(0.2);
  const [marqueeRef, marqueeVis] = useScrollReveal(0.1);

  /* ── Typing effect ── */
  const typingText = useTypingEffect(['Home Loans', 'Mortgage Loans', 'Personal Loans', 'Business Loans', 'Car Loan'], 100, 1800);

  /* ── Why choose ── */
  const whyChooseUs = [
    { icon: <Shield className="w-7 h-7 text-orange-500" />, title: 'Experience You Can Rely On', description: 'Our team brings over 20 years of collective experience, comprising former bankers with in-depth understanding of the financial landscape.' },
    { icon: <Users className="w-7 h-7 text-orange-500" />, title: 'Your Loan, Your Way', description: 'We understand that each individual has unique financial goals. We tailor our services to align with your specific needs and aspirations.' },
    { icon: <Clock className="w-7 h-7 text-orange-500" />, title: 'Simple and Hassle-Free', description: 'Our user-friendly platform streamlines the loan application process, making it simple to compare offers from multiple lenders.' }
  ];

  /* ── Products ── */
  const products = [
    { icon: <Home className="w-7 h-7" />, title: 'Home Loan', description: 'Competitive interest rates and affordable EMIs for your dream home.', path: '/homeloan' },
    { icon: <Building2 className="w-7 h-7" />, title: 'Mortgage Loan', description: 'Leverage your property value to meet diverse financial needs.', path: '/mortgageloan' },
    { icon: <Users className="w-7 h-7" />, title: 'Personal Loan', description: 'Quick funds for any purpose without collateral or extensive documentation.', path: '/personalloan' },
    { icon: <Briefcase className="w-7 h-7" />, title: 'Business Loan', description: 'Fuel your business growth with comprehensive loan solutions.', path: '/businessloan' },
    { icon: <Car className="w-7 h-7" />, title: 'Car Loan', description: 'Turn your dream car into reality with attractive rates.', path: '/carloan' },
    { icon: <GraduationCap className="w-7 h-7" />, title: 'Education Loan', description: 'Invest in your future with education loan benefits.', path: '/educationloan' },
    { icon: <DollarSign className="w-7 h-7" />, title: 'OD Loan', description: 'Ensures financial flexibility in emergencies.', path: '/odloan' },
    { icon: <Cog className="w-7 h-7" />, title: 'Machinery Loan', description: 'Enhance productivity with our Machinery Loan options.', path: '/machineryloan' },
    { icon: <TrendingUp className="w-7 h-7" />, title: 'Working Capital', description: 'Meet recurring expenses and ensure smooth business operations.', path: '/workingcapitalloan' },
    { icon: <Coins className="w-7 h-7" />, title: 'Gold Loan', description: 'Unlock the power of your gold with hassle-free loans.', path: '/goldloan' },
    { icon: <TrendingUp className="w-7 h-7" />, title: 'Insurance', description: 'Protect your life, health, and assets with comprehensive coverage.', path: '/insuranceloan' },
    // { icon: <CreditCard className="w-7 h-7" />, title: 'Credit Card', description: 'Turn your credit card limit into instant cash with a Credit Card Loan.', path: '/creditcardloan' },
  ];

  /* ── Partner marquee ── */
  const partners = [ 'HDFC', 'ICICI', 'Axis', 'Bandhan', 'PNB', 'Yes Bank','Bank of Baroda', 'RBL', 'South Indian Bank', 'Central Bank of India', 'L & T', 'Aditya Birla', 'Piramal', 'Bajaj Finserv', 'Tata Capital',    'JANA', 'Aavas', 'Vastu', 'Ujjivan', 'Samman Captical' ];

  /* ── Popup form ── */
  const [showPopup, setShowPopup] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', loanType: '', amount: '', message: '' });
  const [formSubmitting, setFormSubmitting] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setShowPopup(true), 2500);
    return () => clearTimeout(t);
  }, []);

  const handleChange = (e) => setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormSubmitting(true);
    try {
      const res = await fetch('http://localhost:5000/api/popup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      const data = await res.json();
      if (data.success) {
        alert('Message sent successfully!');
        setShowPopup(false);
        setFormData({ name: '', email: '', phone: '', loanType: '', amount: '', message: '' });
      } else { alert('Failed to send message.'); }
    } catch { alert('Something went wrong!'); }
    setFormSubmitting(false);
  };

  /* ═══════════════════════ RENDER ═══════════════════════ */
  return (
    <div className="w-full">
      <style>{animationStyles}</style>

      {/* ════════ HERO SLIDER ════════ */}
      <section
        className="relative text-white overflow-hidden"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="relative h-[180px] sm:h-[400px] md:h-[700px] lg:h-[700px]">
          {slides.map((slide, i) => (
            <div
              key={i}
              className={`absolute inset-0 transition-all duration-[1200ms] ease-in-out ${i === currentSlide ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
            >
              {/* Ken Burns zoom */}
              <div
                className="absolute inset-0 bg-contain bg-center bg-no-repeat"
                style={{
                  backgroundImage: `url(${slide.image})`,
                  transform: i === currentSlide ? 'scale(1.08)' : 'scale(1)',
                  transition: 'transform 8s ease-out'
                }}
              />
              {/* Gradient overlays 
              <div className="absolute inset-0 bg-gradient-to-r from-[#003a77]/80 via-[#003a77]/50 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#003a77]/40 via-transparent to-transparent" />

              {/* Floating decorative elements */}
              {i === currentSlide && (
                <>
                  <div className="absolute top-[15%] right-[10%] w-32 h-32 md:w-48 md:h-48 border border-white/10 rounded-full float-anim-slow hidden md:block" />
                  <div className="absolute bottom-[20%] right-[25%] w-20 h-20 md:w-28 md:h-28 border border-orange-500/20 rounded-full float-anim-delay hidden md:block" />
                  <div className="absolute top-[40%] right-[5%] w-3 h-3 bg-orange-500/40 rounded-full pulse-anim hidden md:block" />
                  <div className="absolute top-[25%] right-[30%] w-2 h-2 bg-white/30 rounded-full pulse-anim hidden md:block" style={{ animationDelay: '1.5s' }} />
                </>
              )}

              {/* Slide Content */}
              {i === currentSlide && (
                <div className="absolute inset-0 flex items-center z-10">
                  <div className="max-w-7xl mx-auto px-6 md:px-10 w-full">
                    <div className="max-w-2xl">
                      <h1
                        className="text-2xl sm:text-3xl md:text-5xl font-bold text-white mb-4 leading-tight"
                        style={{ animation: 'slideInLeft 0.8s cubic-bezier(.22,1,.36,1) forwards' }}
                      >
                        {slide.title}
                      </h1>
                      <p
                        className="text-sm sm:text-base md:text-xl text-white/85 mb-6 md:mb-8 leading-relaxed hidden sm:block"
                        style={{ animation: 'slideInLeft 0.8s cubic-bezier(.22,1,.36,1) 0.15s both' }}
                      >
                        {slide.description}
                      </p>
                      <div
                        className="flex flex-wrap gap-3 hidden sm:flex"
                        style={{ animation: 'slideInLeft 0.8s cubic-bezier(.22,1,.36,1) 0.3s both' }}
                      >
                        <Link
                          to={slide.primaryBtn.link}
                          className="cta-btn text-white px-7 py-3 rounded-lg font-semibold text-sm relative z-10"
                        >
                          {slide.primaryBtn.text}
                        </Link>
                        <Link
                          to={slide.secondaryBtn.link}
                          className="bg-black/50 backdrop-blur-sm border border-white/30 hover:bg-white/20 text-white px-7 py-3 rounded-lg font-semibold text-sm transition-all duration-300"
                        >
                          {slide.secondaryBtn.text}
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}

          {/* Typing badge */}
          <div className="absolute bottom-16 md:bottom-20 left-6 md:left-10 z-10 hidden sm:block">
            <div className="bg-white/10 backdrop-blur-md border border-white/15 rounded-xl px-5 py-3">
              <span className="text-black text-sm">We specialize in </span>
              <span className="text-orange-400 font-semibold text-sm">
                {typingText}
                <span className="inline-block w-[2px] h-4 bg-orange-400 ml-0.5 align-middle" style={{ animation: 'blink 1s step-end infinite' }} />
              </span>
            </div>
          </div>
        </div>

        {/* Navigation arrows with hover scale */}
        <button onClick={prevSlide} className="absolute left-3 md:left-5 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/25 hover:scale-110 text-white p-2.5 md:p-3 rounded-full transition-all duration-300 z-20 group" aria-label="Previous">
          <ChevronLeft size={22} className="transition-transform duration-300 group-hover:-translate-x-0.5" />
        </button>
        <button onClick={nextSlide} className="absolute right-3 md:right-5 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/25 hover:scale-110 text-white p-2.5 md:p-3 rounded-full transition-all duration-300 z-20 group" aria-label="Next">
          <ChevronRight size={22} className="transition-transform duration-300 group-hover:translate-x-0.5" />
        </button>

        {/* Dots */}
        <div className="absolute bottom-5 md:bottom-8 left-1/2 -translate-x-1/2 flex gap-2.5 z-20">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              className={`dot-btn h-2.5 rounded-full ${currentSlide === i ? 'bg-orange-500 w-8' : 'bg-white/30 w-2.5 hover:bg-white/50'}`}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>
      </section>

      {/* ════════ PARTNER MARQUEE ════════ */}
      <section ref={marqueeRef} className="py-5 bg-white border-b border-gray-100 overflow-hidden">
        <div className={`reveal ${marqueeVis ? 'active' : ''}`}>
          <div className="flex items-center">
            <div className="flex marquee-track whitespace-nowrap">
              {[...partners, ...partners].map((name, i) => (
                <div key={i} className="inline-flex items-center mx-8 md:mx-12">
                  <span className="text-[#cb5b00] font-semibold text-sm md:text-base tracking-wider uppercase hover:text-orange-500 transition-colors duration-300 cursor-default">
                    {name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ════════ WHY CHOOSE US ════════ */}
      <section ref={whyRef} className="py-20 px-4 bg-white relative noise-overlay overflow-hidden">
        {/* Floating bg shapes */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-orange-50 rounded-full opacity-50 blur-3xl float-anim-slow" />
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-blue-50 rounded-full opacity-50 blur-3xl float-anim" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className={`text-center mb-14 reveal ${whyVis ? 'active' : ''}`}>
            <span className="inline-block text-orange-500 font-semibold text-sm uppercase tracking-widest mb-3">Why Choose Us</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#003a77] mb-4">Why Fintasktick?</h2>
            <p className="text-gray-500 max-w-xl mx-auto">We leverage our expertise to provide personalized guidance for informed decisions</p>
            <div className={`section-line mx-auto mt-5 ${whyVis ? 'active' : ''}`} style={{ animationDelay: '0.4s' }} />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {whyChooseUs.map((item, i) => (
              <div key={i} className={`why-card bg-white p-8 rounded-xl shadow-sm border border-gray-100 reveal ${whyVis ? 'active' : ''} stagger-${i + 1}`}>
                <div className="icon-wrap w-14 h-14 rounded-xl bg-orange-50 flex items-center justify-center mb-5">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-[#003a77] mb-3">{item.title}</h3>
                <p className="text-gray-500 leading-relaxed text-[15px]">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════ PORTFOLIO STATS ════════ */}
      <section ref={statsRef} className="relative py-20 px-4 overflow-hidden" style={{ background: 'linear-gradient(135deg, #003a77 0%, #004080 50%, #1e4d8a 100%)' }}>
        {/* Animated decorative rings */}
        <div className="absolute top-0 right-0 w-72 h-72 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 pulse-anim" />
        <div className="absolute bottom-0 left-0 w-56 h-56 bg-orange-500/10 rounded-full translate-y-1/3 -translate-x-1/3 float-anim-slow" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border border-white/5 rounded-full" style={{ animation: 'spin 60s linear infinite' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] border border-white/5 rounded-full" style={{ animation: 'spin 40s linear infinite reverse' }} />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className={`text-center mb-14 reveal ${statsVisible ? 'active' : ''}`}>
            <span className="inline-block text-orange-400 font-semibold text-sm uppercase tracking-widest mb-3">Our Track Record</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">Our Portfolio</h2>
            <div className={`section-line mx-auto mt-4 ${statsVisible ? 'active' : ''}`} />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-6">
            {stats.map((s, i) => (
              <div key={i} className={`reveal ${statsVisible ? 'active' : ''} stagger-${i + 1}`}>
                <Counter end={s.end} suffix={s.suffix} label={s.label} inView={statsVisible} duration={2200} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════ VISION & MISSION ════════ */}
      <section ref={visionRef} className="py-20 px-4 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className={`text-center mb-14 reveal ${visionVis ? 'active' : ''}`}>
            <span className="inline-block text-orange-500 font-semibold text-sm uppercase tracking-widest mb-3">Our Purpose</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#003a77] mb-4">Vision & Mission</h2>
            <div className={`section-line mx-auto mt-4 ${visionVis ? 'active' : ''}`} />
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className={`reveal-left ${visionVis ? 'active' : ''} relative bg-white p-10 rounded-xl shadow-sm border border-gray-100 overflow-hidden group hover:shadow-lg transition-shadow duration-500`}>
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-orange-500 to-orange-300 rounded-r transition-all duration-500 group-hover:w-1.5" />
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-orange-500/5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <span className="inline-block text-orange-500 font-semibold text-sm uppercase tracking-widest mb-2">Vision</span>
              <h3 className="text-2xl font-bold text-[#003a77] mb-4">Our Vision</h3>
              <p className="text-gray-500 leading-relaxed">Empowering Individuals, Creating Opportunities. We are committed to providing financial solutions that empower individuals and businesses to realize their dreams and aspirations.</p>
            </div>

            <div className={`reveal-right ${visionVis ? 'active' : ''} relative bg-white p-10 rounded-xl shadow-sm border border-gray-100 overflow-hidden group hover:shadow-lg transition-shadow duration-500`} style={{ animationDelay: '0.2s' }}>
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-[#004080] to-[#1e4d8a] rounded-r transition-all duration-500 group-hover:w-1.5" />
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-blue-500/5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <span className="inline-block text-[#004080] font-semibold text-sm uppercase tracking-widest mb-2">Mission</span>
              <h3 className="text-2xl font-bold text-[#003a77] mb-4">Our Mission</h3>
              <p className="text-gray-500 leading-relaxed">Empowering Financial Growth — Disbursing INR 5000 Crore in Loans within the Next 10 Years. We are driven by a bold and ambitious mission to transform lives.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ════════ PRODUCTS ════════ */}
      <section ref={prodRef} className="py-20 px-4 bg-white relative noise-overlay overflow-hidden">
        <div className="absolute top-40 right-0 w-80 h-80 bg-orange-50 rounded-full opacity-40 blur-3xl float-anim" />
        <div className="absolute bottom-20 left-0 w-60 h-60 bg-blue-50 rounded-full opacity-40 blur-3xl float-anim-delay" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className={`text-center mb-14 reveal ${prodVis ? 'active' : ''}`}>
            <span className="inline-block text-orange-500 font-semibold text-sm uppercase tracking-widest mb-3">What We Offer</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#003a77] mb-4">Our Products</h2>
            <p className="text-gray-500 max-w-xl mx-auto">Comprehensive financial solutions tailored to your needs</p>
            <div className={`section-line mx-auto mt-5 ${prodVis ? 'active' : ''}`} />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {products.map((p, i) => (
              <Link key={i} to={p.path} className={`product-card bg-white p-6 rounded-xl border border-gray-100 shadow-sm group reveal ${prodVis ? 'active' : ''} stagger-${i + 1}`}>
                <div className="card-icon w-12 h-12 rounded-lg bg-orange-50 text-orange-500 flex items-center justify-center mb-4">
                  {p.icon}
                </div>
                <h3 className="text-lg font-bold text-[#003a77] mb-2">{p.title}</h3>
                <p className="text-gray-500 text-sm mb-4 leading-relaxed">{p.description}</p>
                <span className="card-arrow text-orange-500 font-medium text-sm inline-flex items-center gap-1">
                  Learn More <ArrowRight size={15} />
                </span>
              </Link>
            ))}
          </div>

          <div className={`text-center mt-12 reveal ${prodVis ? 'active' : ''}`} style={{ animationDelay: '0.5s' }}>
            <Link to="/products" className="cta-btn inline-block text-white px-8 py-3.5 rounded-lg font-semibold text-sm relative z-10">
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* ════════ OTHER SERVICES ════════ */}
      <section ref={svcRef} className="py-20 px-4 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className={`text-center mb-14 reveal ${svcVis ? 'active' : ''}`}>
            <span className="inline-block text-orange-500 font-semibold text-sm uppercase tracking-widest mb-3">More Solutions</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#003a77] mb-4">Other Services</h2>
            <div className={`section-line mx-auto mt-5 ${svcVis ? 'active' : ''}`} />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Accounting & Taxation', borderCls: 'border-orange-500', dotCls: 'bg-orange-500', items: ['Company registration', 'GST registration', 'Income tax filing', 'Financial preparation', 'MSME registration'] },
              { title: 'Legal Services', borderCls: 'border-[#004080]', dotCls: 'bg-[#004080]', items: ['Property Registration', 'Encumbrance Certificate', 'Tax paid receipt', 'Khata certificate', 'Sale agreement'] },
              { title: 'Real Estate & Others', borderCls: 'border-emerald-600', dotCls: 'bg-emerald-600', items: ['Buying and Selling', 'Residential properties', 'Commercial properties', 'Plan & Estimation', 'Insurance services'] }
            ].map((svc, i) => (
              <div key={i} className={`service-card bg-white p-7 rounded-xl shadow-sm border border-gray-100 border-t-4 ${svc.borderCls} reveal ${svcVis ? 'active' : ''} stagger-${i + 1}`}>
                <h3 className="text-xl font-bold text-[#003a77] mb-5">{svc.title}</h3>
                <ul className="space-y-3">
                  {svc.items.map((item, j) => (
                    <li key={j} className="flex items-center gap-3 text-gray-500 text-[15px] transition-all duration-300 hover:text-gray-700 hover:translate-x-1 cursor-default">
                      <span className={`w-2 h-2 rounded-full ${svc.dotCls} flex-shrink-0`} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className={`text-center mt-12 reveal ${svcVis ? 'active' : ''}`} style={{ animationDelay: '0.35s' }}>
            <Link to="/services" className="cta-btn inline-block text-white px-8 py-3.5 rounded-lg font-semibold text-sm relative z-10">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* ════════ CTA ════════ */}
      <section ref={ctaRef} className="relative text-white py-28 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed" style={{ backgroundImage: `url(${heroBg31})` }} />
        <div className="absolute inset-0 gradient-animated" style={{ background: 'linear-gradient(135deg, rgba(15,36,57,0.92) 0%, rgba(30,58,95,0.85) 50%, rgba(15,36,57,0.92) 100%)', backgroundSize: '200% 200%' }} />

        {/* Floating shapes */}
        <div className="absolute top-10 left-10 w-24 h-24 border border-white/10 rounded-full float-anim hidden md:block" />
        <div className="absolute bottom-10 right-10 w-32 h-32 border border-orange-500/15 rounded-full float-anim-delay hidden md:block" />
        <div className="absolute top-1/2 right-1/4 w-3 h-3 bg-orange-400/40 rounded-full pulse-anim hidden md:block" />

        <div className={`max-w-3xl mx-auto relative z-10 text-center reveal-scale ${ctaVis ? 'active' : ''}`}>
          <span className="inline-block text-orange-400 font-semibold text-sm uppercase tracking-widest mb-4">Get Started Today</span>
          <h2 className="text-3xl md:text-5xl font-bold mb-5 leading-tight">Ready to Get Started?</h2>
          <p className="text-lg md:text-xl mb-10 text-white/75 max-w-xl mx-auto">Let us help you find the perfect financial solution for your needs</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="cta-btn inline-flex items-center justify-center gap-2 text-white px-9 py-4 rounded-lg font-semibold text-base relative z-10">
              Apply Now <ArrowRight size={20} />
            </Link>
            <a href="tel:+919876543210" className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 text-white px-9 py-4 rounded-lg font-semibold text-base transition-all duration-300 hover:scale-105">
              <Phone size={18} /> Call Us
            </a>
          </div>
        </div>
      </section>

      {/* ════════ POPUP FORM ════════ */}
      {/* {showPopup && (
        <div className="popup-overlay fixed inset-0 flex items-center justify-center bg-black/60 backdrop-blur-sm z-50 px-4 overflow-y-auto"
          onClick={(e) => { if (e.target === e.currentTarget) setShowPopup(false); }}>
          <div className="popup-card bg-white rounded-2xl shadow-2xl w-full max-w-2xl p-8 md:p-10 relative my-10 border border-gray-100">
         

            <button onClick={() => setShowPopup(false)}
              className="absolute top-4 right-4 w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200 hover:rotate-90 flex items-center justify-center text-gray-500 hover:text-gray-800 transition-all duration-300">
              <X size={18} />
            </button>

            <div className="mb-6">
              <span className="inline-block text-orange-500 font-semibold text-sm uppercase tracking-widest mb-2">Quick Inquiry</span>
              <h2 className="text-2xl md:text-3xl font-bold text-[#003a77]">Send Us a Message</h2>
              <p className="text-gray-500 mt-2 text-[15px]">Fill out the form below and our team will get back to you within 24 hours.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-[#003a77] font-semibold text-sm mb-1.5">Full Name *</label>
                <input type="text" name="name" value={formData.name} onChange={handleChange} required placeholder="Enter your full name"
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg text-gray-800 text-sm bg-gray-50/50 transition-all duration-300" />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[#003a77] font-semibold text-sm mb-1.5">Email Address *</label>
                  <input type="email" name="email" value={formData.email} onChange={handleChange} required placeholder="your@email.com"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg text-gray-800 text-sm bg-gray-50/50 transition-all duration-300" />
                </div>
                <div>
                  <label className="block text-[#003a77] font-semibold text-sm mb-1.5">Phone Number *</label>
                  <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required placeholder="+91 1234567890"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg text-gray-800 text-sm bg-gray-50/50 transition-all duration-300" />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[#003a77] font-semibold text-sm mb-1.5">Loan Type *</label>
                  <select name="loanType" value={formData.loanType} onChange={handleChange} required
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg text-gray-800 text-sm bg-gray-50/50 transition-all duration-300">
                    <option value="">Select loan type</option>
                    <option value="Personal Loan">Personal Loan</option>
                    <option value="Home Loan">Home Loan</option>
                    <option value="Business Loan">Business Loan</option>
                    <option value="Car Loan">Car Loan</option>
                    <option value="Gold Loan">Gold Loan</option>
                    <option value="Education Loan">Education Loan</option>
                    <option value="Mortgage Loan">Mortgage Loan</option>
                    <option value="Working Capital">Working Capital</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[#003a77] font-semibold text-sm mb-1.5">Loan Amount</label>
                  <input type="text" name="amount" value={formData.amount} onChange={handleChange} placeholder="₹ 5,00,000"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg text-gray-800 text-sm bg-gray-50/50 transition-all duration-300" />
                </div>
              </div>

              <div>
                <label className="block text-[#003a77] font-semibold text-sm mb-1.5">Message</label>
                <textarea name="message" value={formData.message} onChange={handleChange} rows="3" placeholder="Tell us more about your requirements..."
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg text-gray-800 text-sm bg-gray-50/50 resize-none transition-all duration-300" />
              </div>

              <button type="submit" disabled={formSubmitting}
                className="cta-btn w-full text-white font-bold py-3.5 px-6 rounded-lg text-sm relative z-10 disabled:opacity-60 disabled:cursor-not-allowed">
                {formSubmitting ? (
                  <span className="inline-flex items-center gap-2">
                    <svg className="w-4 h-4" style={{ animation: 'spin 1s linear infinite' }} viewBox="0 0 24 24">
                      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" fill="none" strokeDasharray="31" strokeLinecap="round" />
                    </svg>
                    Sending...
                  </span>
                ) : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      )} */}
    </div>
  );
};

export default HomePage;

