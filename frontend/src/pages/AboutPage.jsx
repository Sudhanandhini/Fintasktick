import React, { useState, useEffect, useRef } from 'react';
import { Target, Eye, Award, Users, TrendingUp, CheckCircle, ArrowRight, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import heroBg3 from '../assets/6.jpg';
import heroBg4 from '../assets/about-2.jpg';
import heroBg41 from '../assets/cta1.jpg';

/* ───────────────────────── CSS ANIMATIONS ───────────────────────── */
const animationStyles = `
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
  @keyframes fadeDown {
    from { opacity: 0; transform: translateY(-40px); }
    to   { opacity: 1; transform: translateY(0); }
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
  .reveal-bounce { opacity: 0; }
  .reveal-bounce.active { animation: bounceIn 0.8s cubic-bezier(.22,1,.36,1) forwards; }

  .stagger-1  { animation-delay: 0.06s !important; }
  .stagger-2  { animation-delay: 0.12s !important; }
  .stagger-3  { animation-delay: 0.18s !important; }
  .stagger-4  { animation-delay: 0.24s !important; }

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

  .counter-done { animation: counterPop 0.5s cubic-bezier(.22,1,.36,1); }

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

  .value-card {
    transition: transform 0.4s cubic-bezier(.22,1,.36,1), box-shadow 0.4s ease;
    position: relative;
    overflow: hidden;
  }
  .value-card::before {
    content: '';
    position: absolute;
    bottom: 0; left: 0; right: 0;
    height: 3px;
    background: linear-gradient(90deg, var(--orange-500), var(--blue-900));
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.5s cubic-bezier(.22,1,.36,1);
  }
  .value-card:hover::before { transform: scaleX(1); }
  .value-card:hover {
    transform: translateY(-6px);
    box-shadow: 0 20px 50px rgba(30,58,95,0.12);
  }
  .value-card .icon-wrap {
    transition: all 0.4s cubic-bezier(.22,1,.36,1);
  }
  .value-card:hover .icon-wrap {
    background-color: var(--orange-500) !important;
    transform: scale(1.08) rotate(-3deg);
    box-shadow: 0 8px 20px rgba(249,115,22,0.3);
  }
  .value-card:hover .icon-wrap svg { color: #fff !important; }

  .team-card {
    transition: transform 0.4s ease, box-shadow 0.4s ease;
    overflow: hidden;
  }
  .team-card:hover {
    transform: translateY(-8px);
    box-shadow: 0 25px 50px rgba(30,58,95,0.12);
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

/* ───────────────────────── COUNTER COMPONENT ───────────────────────── */
const Counter = ({ end, suffix, label, description, inView, duration = 2000 }) => {
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
      <div className={`text-4xl md:text-5xl font-bold text-orange-400 mb-2 tracking-tight transition-transform duration-300 group-hover:scale-110 ${done ? 'counter-done' : ''}`}>
        {count.toLocaleString()}{suffix}
      </div>
      <h3 className="text-lg font-semibold text-white mb-1">{label}</h3>
      <p className="text-blue-200 text-sm transition-colors duration-300 group-hover:text-white">{description}</p>
    </div>
  );
};

/* ═══════════════════════ MAIN COMPONENT ═══════════════════════ */
const AboutPage = () => {
  const [heroRef, heroVis] = useScrollReveal(0.1);
  const [overviewRef, overviewVis] = useScrollReveal();
  const [visionRef, visionVis] = useScrollReveal();
  const [valuesRef, valuesVis] = useScrollReveal(0.1);
  const [statsRef, statsVis] = useScrollReveal(0.2);
  const [teamRef, teamVis] = useScrollReveal(0.1);
  const [ctaRef, ctaVis] = useScrollReveal(0.2);

  const stats = [
    { end: 20, suffix: '+', label: 'Years of Experience', description: 'Combined expertise from former banking professionals' },
    { end: 5000, suffix: '+', label: 'Satisfied Clients', description: 'Successfully served thousands of customers' },
    { end: 100, suffix: '%', label: 'Personalized Service', description: 'Tailored solutions for your unique needs' }
  ];

  const values = [
    { icon: <Award className="w-7 h-7 text-orange-500" />, title: 'Excellence', description: 'We strive for excellence in every service we provide, ensuring the highest quality standards.' },
    { icon: <Users className="w-7 h-7 text-orange-500" />, title: 'Customer First', description: 'Our customers are at the heart of everything we do. Your satisfaction is our priority.' },
    { icon: <CheckCircle className="w-7 h-7 text-orange-500" />, title: 'Integrity', description: 'We maintain the highest standards of integrity in all our actions and relationships.' },
    { icon: <TrendingUp className="w-7 h-7 text-orange-500" />, title: 'Innovation', description: 'We continuously innovate to provide better financial solutions for our clients.' }
  ];

  const teamMembers = [
    { name: 'Former Banking Professionals', role: 'Financial Advisors', description: 'Our team comprises experienced bankers with deep industry knowledge.' },
    { name: 'Loan Specialists', role: 'Product Experts', description: 'Specialized in various loan products to meet diverse customer needs.' },
    { name: 'Customer Support', role: 'Service Excellence', description: 'Dedicated team ensuring smooth loan processing and customer satisfaction.' }
  ];

  return (
    <div className="w-full">
      <style>{animationStyles}</style>

      {/* ════════ HERO ════════ */}
      <section className="relative text-white overflow-hidden">
        <div className="relative h-[220px] sm:h-[350px] md:h-[450px]">
          <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${heroBg3})` }} />
          <div className="absolute inset-0 bg-gradient-to-r from-[#003a77]/85 via-[#003a77]/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#003a77]/50 via-transparent to-transparent" />

          <div className="absolute top-[15%] right-[10%] w-32 h-32 md:w-48 md:h-48 border border-white/10 rounded-full float-anim-slow hidden md:block" />
          <div className="absolute bottom-[20%] right-[25%] w-20 h-20 border border-orange-500/20 rounded-full float-anim-delay hidden md:block" />

          <div ref={heroRef} className="absolute inset-0 flex items-center">
            <div className="max-w-7xl mx-auto px-4 md:px-8 w-full">
              <div className={`max-w-3xl reveal ${heroVis ? 'active' : ''}`}>
                <span className="inline-block text-orange-400 font-semibold text-sm uppercase tracking-widest mb-3">About Us</span>
                <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">About Fintasktick</h1>
                <p className="text-lg md:text-xl text-white/80 max-w-xl">Your trusted partner in financial solutions with over 20 years of combined experience</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════ COMPANY OVERVIEW ════════ */}
      <section ref={overviewRef} className="py-20 px-4 bg-white relative noise-overlay overflow-hidden">
        <div className="absolute top-20 left-10 w-64 h-64 bg-orange-50 rounded-full opacity-50 blur-3xl float-anim-slow" />
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-blue-50 rounded-full opacity-50 blur-3xl float-anim" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className={`reveal-left ${overviewVis ? 'active' : ''}`}>
              <span className="inline-block text-orange-500 font-semibold text-sm uppercase tracking-widest mb-3">Who We Are</span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-[#003a77] mb-6">Our Story</h2>
              <div className={`section-line mb-6 ${overviewVis ? 'active' : ''}`} />
              <p className="text-gray-500 mb-4 leading-relaxed">
                At Fintasktick, our journey is driven by a deep commitment to simplifying financial access for everyone. We understand that navigating the world of loans and financial products can often feel overwhelming, especially with constantly changing interest rates, eligibility criteria, and documentation requirements. That’s why we focus on making the process straightforward, transparent, and stress-free for our customers.
              </p>
              <p className="text-gray-500 mb-4 leading-relaxed">
                Over the years, we have built strong relationships with leading banks and financial institutions, enabling us to offer reliable solutions backed by trust and credibility. Our approach is rooted in understanding each client’s unique situation, ensuring that every recommendation is practical, affordable, and aligned with their long-term financial goals.
              </p>
              <p className="text-gray-500 mb-4 leading-relaxed">
                We continuously adapt to the evolving financial landscape by staying updated with market trends and lender policies. This allows us to provide accurate guidance and faster turnaround times, helping our customers make confident financial decisions without unnecessary delays.
              </p>
              <p className="text-gray-500 mb-4 leading-relaxed">
                At the heart of everything we do is a simple belief — financial support should be accessible, honest, and tailored to individual needs. Whether it’s your first loan or a step towards growing your business, we are dedicated to being a dependable partner you can rely on at every stage.
              </p>
            
                  {/* <p className="text-gray-500 mb-4 leading-relaxed">
                    What sets us apart is our team's collective experience of over 20 years, comprising former bankers who have an in-depth understanding of the financial landscape. We leverage our expertise to carefully analyze your requirements and provide personalized guidance.
                  </p>
                  <p className="text-gray-500 leading-relaxed">
                    We believe that every customer is unique, and we strive to tailor our services to fit your exact needs. Whether you are planning to expand your business, fulfill personal aspirations, or purchase your dream home, we are here to guide you.
                  </p> */}
            </div>
            <div className={`reveal-right ${overviewVis ? 'active' : ''}`}>
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-br from-orange-500/20 to-[#004080]/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative bg-gradient-to-br from-orange-50 to-blue-50 p-4 rounded-2xl border border-gray-100">
                  <img src={heroBg4} alt="about" className="rounded-xl shadow-lg w-full transition-transform duration-500 group-hover:scale-[1.02]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════ VISION & MISSION ════════ */}
      <section ref={visionRef} className="py-20 px-4 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className={`text-center mb-14 reveal ${visionVis ? 'active' : ''}`}>
            <span className="inline-block text-orange-500 font-semibold text-sm uppercase tracking-widest mb-3">Our Purpose</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-[#003a77] mb-4">Vision & Mission</h2>
            <div className={`section-line mx-auto mt-4 ${visionVis ? 'active' : ''}`} />
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className={`reveal-left ${visionVis ? 'active' : ''} relative bg-white p-10 rounded-xl shadow-sm border border-gray-100 overflow-hidden group hover:shadow-lg transition-shadow duration-500`}>
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-orange-500 to-orange-300 rounded-r transition-all duration-500 group-hover:w-1.5" />
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-orange-500/5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="flex items-center gap-4 mb-5">
                <div className="w-14 h-14 rounded-xl bg-orange-50 flex items-center justify-center">
                  <Eye className="w-7 h-7 text-orange-500" />
                </div>
                <h3 className="font-display text-2xl font-bold text-[#003a77]">Our Vision</h3>
              </div>
              <p className="text-gray-500 leading-relaxed">Empowering Individuals, Creating Opportunities. We are committed to providing financial solutions that empower individuals and businesses to realize their dreams and aspirations. Through our dedicated efforts, we strive to grow our presence across the entire region.</p>
            </div>

            <div className={`reveal-right ${visionVis ? 'active' : ''} relative bg-white p-10 rounded-xl shadow-sm border border-gray-100 overflow-hidden group hover:shadow-lg transition-shadow duration-500`} style={{ animationDelay: '0.2s' }}>
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-[#004080] to-[#1e4d8a] rounded-r transition-all duration-500 group-hover:w-1.5" />
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-blue-500/5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="flex items-center gap-4 mb-5">
                <div className="w-14 h-14 rounded-xl bg-blue-50 flex items-center justify-center">
                  <Target className="w-7 h-7 text-[#004080]" />
                </div>
                <h3 className="font-display text-2xl font-bold text-[#003a77]">Our Mission</h3>
              </div>
              <p className="text-gray-500 leading-relaxed">Empowering Financial Growth — Disbursing INR 5000 Crore in Loans within the Next 5 Years. We are driven by a bold and ambitious mission to transform lives through accessible and efficient financial solutions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ════════ CORE VALUES ════════ */}
      <section ref={valuesRef} className="py-20 px-4 bg-white relative noise-overlay overflow-hidden">
        <div className="absolute top-40 right-0 w-80 h-80 bg-orange-50 rounded-full opacity-40 blur-3xl float-anim" />
        <div className="absolute bottom-20 left-0 w-60 h-60 bg-blue-50 rounded-full opacity-40 blur-3xl float-anim-delay" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className={`text-center mb-14 reveal ${valuesVis ? 'active' : ''}`}>
            <span className="inline-block text-orange-500 font-semibold text-sm uppercase tracking-widest mb-3">What We Stand For</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-[#003a77] mb-4">Our Core Values</h2>
            <p className="text-gray-500 max-w-xl mx-auto">The principles that guide us in delivering exceptional financial services</p>
            <div className={`section-line mx-auto mt-5 ${valuesVis ? 'active' : ''}`} />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, i) => (
              <div key={i} className={`value-card bg-white p-8 rounded-xl shadow-sm border border-gray-100 text-center reveal ${valuesVis ? 'active' : ''} stagger-${i + 1}`}>
                <div className="icon-wrap w-14 h-14 rounded-xl bg-orange-50 flex items-center justify-center mx-auto mb-5">
                  {value.icon}
                </div>
                <h3 className="font-display text-xl font-bold text-[#003a77] mb-3">{value.title}</h3>
                <p className="text-gray-500 text-[15px] leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════ STATS ════════ */}
      <section ref={statsRef} className="relative py-20 px-4 overflow-hidden" style={{ background: 'linear-gradient(135deg, #003a77 0%, #004080 50%, #1e4d8a 100%)' }}>
        <div className="absolute top-0 right-0 w-72 h-72 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 pulse-anim" />
        <div className="absolute bottom-0 left-0 w-56 h-56 bg-orange-500/10 rounded-full translate-y-1/3 -translate-x-1/3 float-anim-slow" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border border-white/5 rounded-full" style={{ animation: 'spin 60s linear infinite' }} />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className={`text-center mb-14 reveal ${statsVis ? 'active' : ''}`}>
            <span className="inline-block text-orange-400 font-semibold text-sm uppercase tracking-widest mb-3">Our Impact</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-2">Why Choose Fintasktick?</h2>
            <div className={`section-line mx-auto mt-4 ${statsVis ? 'active' : ''}`} />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {stats.map((s, i) => (
              <div key={i} className={`reveal ${statsVis ? 'active' : ''} stagger-${i + 1}`}>
                <Counter end={s.end} suffix={s.suffix} label={s.label} description={s.description} inView={statsVis} duration={2200} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════ TEAM ════════ */}
      <section ref={teamRef} className="py-20 px-4 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className={`text-center mb-14 reveal ${teamVis ? 'active' : ''}`}>
            <span className="inline-block text-orange-500 font-semibold text-sm uppercase tracking-widest mb-3">Our People</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-[#003a77] mb-4">Our Expert Team</h2>
            <p className="text-gray-500 max-w-xl mx-auto">Experienced professionals dedicated to your financial success</p>
            <div className={`section-line mx-auto mt-5 ${teamVis ? 'active' : ''}`} />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, i) => (
              <div key={i} className={`team-card bg-white p-8 rounded-xl shadow-sm border border-gray-100 text-center reveal ${teamVis ? 'active' : ''} stagger-${i + 1}`}>
                <div className="w-20 h-20 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full mx-auto mb-5 flex items-center justify-center shadow-lg shadow-orange-500/20">
                  <Users className="w-10 h-10 text-white" />
                </div>
                <h3 className="font-display text-xl font-bold text-[#003a77] mb-2">{member.name}</h3>
                <p className="text-orange-500 font-semibold text-sm mb-3">{member.role}</p>
                <p className="text-gray-500 text-[15px] leading-relaxed">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════ CTA ════════ */}
      <section ref={ctaRef} className="relative text-white py-28 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed" style={{ backgroundImage: `url(${heroBg41})` }} />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(15,36,57,0.92) 0%, rgba(30,58,95,0.85) 50%, rgba(15,36,57,0.92) 100%)' }} />

        <div className="absolute top-10 left-10 w-24 h-24 border border-white/10 rounded-full float-anim hidden md:block" />
        <div className="absolute bottom-10 right-10 w-32 h-32 border border-orange-500/15 rounded-full float-anim-delay hidden md:block" />

        <div className={`max-w-3xl mx-auto relative z-10 text-center reveal-scale ${ctaVis ? 'active' : ''}`}>
          <span className="inline-block text-orange-400 font-semibold text-sm uppercase tracking-widest mb-4">Get Started Today</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-5 leading-tight">Let's Build Your Financial Future Together</h2>
          <p className="text-lg md:text-xl mb-10 text-white/75 max-w-xl mx-auto">Partner with us for personalized financial guidance and solutions</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="cta-btn inline-flex items-center justify-center gap-2 text-white px-9 py-4 rounded-lg font-semibold text-base relative z-10">
              Contact Us <ArrowRight size={20} />
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

export default AboutPage;

