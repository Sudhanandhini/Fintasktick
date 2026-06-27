import { useState, useEffect, useRef } from 'react';
import {
  FileText, Scale, Building, Shield, Calculator, BookOpen,
  ClipboardCheck, Briefcase, CheckCircle, ChevronLeft, ChevronRight,
  ArrowRight, Phone
} from 'lucide-react';
import { Link } from 'react-router-dom';
import heroBg1 from '../assets/7.jpg';

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

  .service-card {
    transition: transform 0.4s cubic-bezier(.22,1,.36,1), box-shadow 0.4s ease;
    position: relative;
    overflow: hidden;
  }
  .service-card::before {
    content: '';
    position: absolute;
    bottom: 0; left: 0; right: 0;
    height: 3px;
    background: linear-gradient(90deg, var(--orange-500), var(--blue-900));
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.5s cubic-bezier(.22,1,.36,1);
  }
  .service-card:hover::before { transform: scaleX(1); }
  .service-card:hover {
    transform: translateY(-8px);
    box-shadow: 0 25px 50px rgba(30,58,95,0.12);
  }
  .service-card .icon-wrap {
    transition: all 0.4s cubic-bezier(.22,1,.36,1);
  }
  .service-card:hover .icon-wrap {
    background-color: var(--orange-500) !important;
    transform: scale(1.08) rotate(-3deg);
    box-shadow: 0 8px 20px rgba(249,115,22,0.3);
  }
  .service-card:hover .icon-wrap svg { color: #fff !important; }
  .service-card li {
    transition: transform 0.3s ease, color 0.3s ease;
  }
  .service-card:hover li { transform: translateX(4px); }

  .benefit-card {
    transition: transform 0.4s ease, box-shadow 0.4s ease;
    position: relative;
    overflow: hidden;
  }
  .benefit-card::after {
    content: '';
    position: absolute;
    top: -50%; right: -50%;
    width: 100%; height: 100%;
    background: radial-gradient(circle, rgba(249,115,22,0.05) 0%, transparent 70%);
    opacity: 0;
    transition: opacity 0.4s ease;
  }
  .benefit-card:hover::after { opacity: 1; }
  .benefit-card:hover {
    transform: translateY(-6px);
    box-shadow: 0 20px 50px rgba(30,58,95,0.12);
  }

  .step-card:hover .step-number {
    background-color: var(--orange-600) !important;
    transform: scale(1.08);
  }

  .industry-card {
    transition: transform 0.4s ease, box-shadow 0.4s ease;
  }
  .industry-card:hover {
    transform: translateY(-6px);
    box-shadow: 0 16px 40px rgba(30,58,95,0.10);
  }

  .dot-btn {
    transition: width 0.4s cubic-bezier(.22,1,.36,1), background-color 0.3s ease;
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
const ServicesPage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const [heroRef, heroVis] = useScrollReveal(0.1);
  const [sliderRef, sliderVis] = useScrollReveal(0.1);
  const [benefitRef, benefitVis] = useScrollReveal(0.1);
  const [processRef, processVis] = useScrollReveal(0.1);
  const [industryRef, industryVis] = useScrollReveal(0.1);
  const [ctaRef, ctaVis] = useScrollReveal(0.2);

  const mainServices = [

     {
      icon: <Scale className="w-8 h-8 text-[#004080]" />,
      title: 'Legal Services',
      description: 'Professional legal assistance for property and documentation',
      services: ['Property Registration', 'Encumbrance Certificate (EC)', 'Tax paid receipt', 'Khata extract/certificate', 'Sale agreement', 'Legal documentation', 'Property verification', 'Title search services']
    },
    {
      icon: <Calculator className="w-8 h-8 text-orange-500" />,
      title: 'Accounting & Taxation Consultancy',
      description: 'Comprehensive accounting and tax solutions for individuals and businesses',
      services: ['Company registration', 'Partnership registration', 'Proprietorship registration', 'MSME registration', 'Labour registration', 'GST registration', 'Income tax filing', 'Preparation of financials', 'Project report - financial', 'Provisional financials', 'Form – 16']
    },
      {
      icon: <FileText className="w-8 h-8 text-orange-500" />,
      title: 'Plan & Estimation',
      description: 'Professional architectural planning and cost estimation services',
      services: ['Architectural planning', 'Construction estimates', 'Material costing', 'Project feasibility', 'Budget planning', 'Design consultation', 'Renovation planning']
    },
    {
      icon: <Building className="w-8 h-8 text-emerald-600" />,
      title: 'Real Estate Services',
      description: 'Complete real estate solutions for buying and selling properties',
      services: ['Residential properties', 'Industrial properties', 'Commercial properties', 'Property buying assistance', 'Property selling support', 'Market analysis', 'Property valuation', 'Documentation support']
    },
 
    // {
    //   icon: <Shield className="w-8 h-8 text-[#004080]" />,
    //   title: 'Insurance Services',
    //   description: 'Comprehensive insurance solutions for life, health, and assets',
    //   services: ['Life insurance', 'Health insurance', 'Vehicle insurance', 'Property insurance']
    // }
  ];

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % mainServices.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isPaused, mainServices.length]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % mainServices.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + mainServices.length) % mainServices.length);

  const benefits = [
    { icon: <CheckCircle className="w-7 h-7 text-orange-500" />, title: 'Expert Guidance', description: 'Professional advice from experienced consultants' },
    { icon: <ClipboardCheck className="w-7 h-7 text-orange-500" />, title: 'End-to-End Support', description: 'Complete assistance from start to finish' },
    { icon: <BookOpen className="w-7 h-7 text-orange-500" />, title: 'Transparent Process', description: 'Clear communication and documentation' },
    { icon: <Briefcase className="w-7 h-7 text-orange-500" />, title: 'One-Stop Solution', description: 'All services under one roof' }
  ];

  const steps = [
    { num: '1', title: 'Consultation', desc: 'Initial discussion to understand your needs' },
    { num: '2', title: 'Assessment', desc: 'Detailed evaluation and planning' },
    { num: '3', title: 'Documentation', desc: 'Gathering required documents' },
    { num: '4', title: 'Processing', desc: 'Complete service execution' },
    { num: '5', title: 'Delivery', desc: 'Final service delivery and support' },
  ];

  const industries = ['Manufacturing', 'Traders', 'Service providers', 'IT Services', 'Real Estate', 'Retail', 'Education'];

  return (
    <div className="w-full">
      <style>{animationStyles}</style>

      {/* ════════ HERO ════════ */}
      <section className="relative text-white overflow-hidden">
        <div className="relative h-[220px] sm:h-[350px] md:h-[450px]">
          <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${heroBg1})` }} />
          <div className="absolute inset-0 bg-gradient-to-r from-[#003a77]/85 via-[#003a77]/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#003a77]/50 via-transparent to-transparent" />

          <div className="absolute top-[15%] right-[10%] w-32 h-32 md:w-48 md:h-48 border border-white/10 rounded-full float-anim-slow hidden md:block" />
          <div className="absolute bottom-[20%] right-[25%] w-20 h-20 border border-orange-500/20 rounded-full float-anim-delay hidden md:block" />

          <div ref={heroRef} className="absolute inset-0 flex items-center">
            <div className="max-w-7xl mx-auto px-4 md:px-8 w-full">
              <div className={`max-w-3xl reveal ${heroVis ? 'active' : ''}`}>
                <span className="inline-block text-orange-400 font-semibold text-sm uppercase tracking-widest mb-3">Services</span>
                <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">Other Services</h1>
                <p className="text-lg md:text-xl text-white/80 max-w-xl">Comprehensive business and financial services beyond lending</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════ SERVICES SLIDER ════════ */}
      <section ref={sliderRef} className="py-20 px-4 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className={`text-center mb-14 reveal ${sliderVis ? 'active' : ''}`}>
            <span className="inline-block text-orange-500 font-semibold text-sm uppercase tracking-widest mb-3">What We Offer</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-[#003a77] mb-4">Other Service Categories</h2>
            <p className="text-gray-500 max-w-xl mx-auto">Professional services to support your business and personal needs</p>
            <div className={`section-line mx-auto mt-5 ${sliderVis ? 'active' : ''}`} />
          </div>

          <div
            className={`relative reveal ${sliderVis ? 'active' : ''}`}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div className="overflow-hidden rounded-2xl">
              <div
                className="flex transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {mainServices.map((service, index) => (
                  <div key={index} className="w-full flex-shrink-0">
                    <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 mx-1">
                      <div className="flex flex-col md:flex-row">
                        <div className="md:w-1/3 p-8 md:p-10 flex flex-col justify-center items-center text-center" style={{ background: 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)' }}>
                          <div className="w-16 h-16 rounded-xl bg-white shadow-sm flex items-center justify-center mb-5">
                            {service.icon}
                          </div>
                          <h3 className="font-display text-2xl font-bold text-[#003a77] mb-3">{service.title}</h3>
                          <p className="text-gray-500 text-[15px]">{service.description}</p>
                        </div>

                        <div className="md:w-2/3 p-8 md:p-10">
                          <h4 className="font-display text-lg font-semibold text-[#003a77] mb-5">Services Include:</h4>
                          <div className="grid md:grid-cols-2 gap-3">
                            {service.services.map((item, idx) => (
                              <div key={idx} className="flex items-start gap-2.5 text-gray-500 text-[15px] transition-all duration-300 hover:text-gray-700 hover:translate-x-1">
                                <CheckCircle size={16} className="text-orange-500 mt-0.5 flex-shrink-0" />
                                <span>{item}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation arrows */}
            <button onClick={prevSlide} className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-3 bg-white/90 backdrop-blur-sm border border-gray-200 hover:bg-white hover:scale-110 text-[#003a77] p-2.5 md:p-3 rounded-full shadow-lg transition-all duration-300 z-20 group">
              <ChevronLeft size={22} className="transition-transform duration-300 group-hover:-translate-x-0.5" />
            </button>
            <button onClick={nextSlide} className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-3 bg-white/90 backdrop-blur-sm border border-gray-200 hover:bg-white hover:scale-110 text-[#003a77] p-2.5 md:p-3 rounded-full shadow-lg transition-all duration-300 z-20 group">
              <ChevronRight size={22} className="transition-transform duration-300 group-hover:translate-x-0.5" />
            </button>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2.5 mt-8">
            {mainServices.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`dot-btn h-2.5 rounded-full ${currentSlide === index ? 'bg-orange-500 w-8' : 'bg-gray-300 w-2.5 hover:bg-gray-400'}`}
                aria-label={`Slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ════════ WHY CHOOSE OUR SERVICES ════════ */}
      <section ref={benefitRef} className="py-20 px-4 bg-white relative noise-overlay overflow-hidden">
        <div className="absolute top-20 left-10 w-64 h-64 bg-orange-50 rounded-full opacity-50 blur-3xl float-anim-slow" />
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-blue-50 rounded-full opacity-50 blur-3xl float-anim" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className={`text-center mb-14 reveal ${benefitVis ? 'active' : ''}`}>
            <span className="inline-block text-orange-500 font-semibold text-sm uppercase tracking-widest mb-3">Our Advantages</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-[#003a77] mb-4">Why Choose Our Services?</h2>
            <p className="text-gray-500 max-w-xl mx-auto">We provide comprehensive solutions with professional expertise</p>
            <div className={`section-line mx-auto mt-5 ${benefitVis ? 'active' : ''}`} />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((b, i) => (
              <div key={i} className={`benefit-card bg-white p-8 rounded-xl shadow-sm border border-gray-100 text-center reveal ${benefitVis ? 'active' : ''} stagger-${i + 1}`}>
                <div className="icon-wrap w-14 h-14 rounded-xl bg-orange-50 flex items-center justify-center mx-auto mb-5">
                  {b.icon}
                </div>
                <h3 className="font-display text-xl font-bold text-[#003a77] mb-2">{b.title}</h3>
                <p className="text-gray-500 text-[15px]">{b.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════ HOW WE WORK ════════ */}
      <section ref={processRef} className="relative py-20 px-4 overflow-hidden" style={{ background: 'linear-gradient(135deg, #003a77 0%, #004080 50%, #1e4d8a 100%)' }}>
        <div className="absolute top-0 right-0 w-72 h-72 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 pulse-anim" />
        <div className="absolute bottom-0 left-0 w-56 h-56 bg-orange-500/10 rounded-full translate-y-1/3 -translate-x-1/3 float-anim-slow" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border border-white/5 rounded-full" style={{ animation: 'spin 60s linear infinite' }} />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className={`text-center mb-14 reveal ${processVis ? 'active' : ''}`}>
            <span className="inline-block text-orange-400 font-semibold text-sm uppercase tracking-widest mb-3">Our Process</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">How We Work</h2>
            <p className="text-blue-200 max-w-xl mx-auto">Our streamlined process ensures efficient service delivery</p>
            <div className={`section-line mx-auto mt-5 ${processVis ? 'active' : ''}`} />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-8">
            {steps.map((step, i) => (
              <div key={i} className={`step-card text-center reveal ${processVis ? 'active' : ''} stagger-${i + 1}`}>
                <div className="step-number w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-5 shadow-lg shadow-orange-500/30 transition-all duration-300">
                  {step.num}
                </div>
                <h3 className="font-display font-bold text-white mb-2">{step.title}</h3>
                <p className="text-blue-200 text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════ INDUSTRIES WE SERVE ════════ */}
      <section ref={industryRef} className="py-20 px-4 bg-white relative noise-overlay overflow-hidden">
        <div className="absolute top-40 right-0 w-80 h-80 bg-orange-50 rounded-full opacity-40 blur-3xl float-anim" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className={`text-center mb-14 reveal ${industryVis ? 'active' : ''}`}>
            <span className="inline-block text-orange-500 font-semibold text-sm uppercase tracking-widest mb-3">Our Reach</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-[#003a77] mb-4">Industries We Serve</h2>
            <div className={`section-line mx-auto mt-4 ${industryVis ? 'active' : ''}`} />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {industries.map((industry, i) => (
              <div key={i} className={`industry-card bg-gradient-to-br from-orange-50 to-blue-50 p-7 rounded-xl text-center border border-gray-100 reveal ${industryVis ? 'active' : ''} stagger-${i + 1}`}>
                <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center mx-auto mb-4">
                  <Building className="w-6 h-6 text-orange-500" />
                </div>
                <h3 className="font-display font-semibold text-[#003a77]">{industry}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════ CTA ════════ */}
      <section ref={ctaRef} className="relative text-white py-28 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed" style={{ backgroundImage: `url(${heroBg1})` }} />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(15,36,57,0.92) 0%, rgba(30,58,95,0.85) 50%, rgba(15,36,57,0.92) 100%)' }} />

        <div className="absolute top-10 left-10 w-24 h-24 border border-white/10 rounded-full float-anim hidden md:block" />
        <div className="absolute bottom-10 right-10 w-32 h-32 border border-orange-500/15 rounded-full float-anim-delay hidden md:block" />

        <div className={`max-w-3xl mx-auto relative z-10 text-center reveal-scale ${ctaVis ? 'active' : ''}`}>
          <span className="inline-block text-orange-400 font-semibold text-sm uppercase tracking-widest mb-4">Get Started</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-5 leading-tight">Need Professional Services?</h2>
          <p className="text-lg md:text-xl mb-10 text-white/75 max-w-xl mx-auto">Let our expert team handle your accounting, legal, and real estate needs</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="cta-btn inline-flex items-center justify-center gap-2 text-white px-9 py-4 rounded-lg font-semibold text-base relative z-10">
              Get In Touch <ArrowRight size={20} />
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

export default ServicesPage;

