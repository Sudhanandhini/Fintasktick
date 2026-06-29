import { useState, useEffect, useRef } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, AlertCircle } from 'lucide-react';
import heroBg2 from '../assets/4.jpg';

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
  @keyframes bounceIn {
    0%   { opacity: 0; transform: scale(0.3); }
    50%  { transform: scale(1.05); }
    70%  { transform: scale(0.95); }
    100% { opacity: 1; transform: scale(1); }
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

  .contact-card {
    transition: transform 0.4s cubic-bezier(.22,1,.36,1), box-shadow 0.4s ease;
    position: relative;
    overflow: hidden;
  }
  .contact-card::before {
    content: '';
    position: absolute;
    bottom: 0; left: 0; right: 0;
    height: 3px;
    background: linear-gradient(90deg, var(--orange-500), var(--blue-900));
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.5s cubic-bezier(.22,1,.36,1);
  }
  .contact-card:hover::before { transform: scaleX(1); }
  .contact-card:hover {
    transform: translateY(-6px);
    box-shadow: 0 20px 50px rgba(30,58,95,0.12);
  }
  .contact-card .icon-wrap {
    transition: all 0.4s cubic-bezier(.22,1,.36,1);
  }
  .contact-card:hover .icon-wrap {
    background-color: var(--orange-500) !important;
    transform: scale(1.08) rotate(-3deg);
    box-shadow: 0 8px 20px rgba(249,115,22,0.3);
  }
  .contact-card:hover .icon-wrap svg { color: #fff !important; }

  .faq-card {
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  .faq-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 16px 40px rgba(30,58,95,0.10);
  }

  .noise-overlay::after {
    content: '';
    position: absolute;
    inset: 0;
    opacity: 0.025;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
    pointer-events: none;
  }

  input:focus, select:focus, textarea:focus {
    outline: none;
    border-color: var(--orange-500) !important;
    box-shadow: 0 0 0 3px rgba(249,115,22,0.12);
    transform: translateY(-1px);
    transition: all 0.3s ease;
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
const ContactPage = () => {
  const [heroRef, heroVis] = useScrollReveal(0.1);
  const [cardsRef, cardsVis] = useScrollReveal(0.1);
  const [formRef, formVis] = useScrollReveal(0.1);
  const [faqRef, faqVis] = useScrollReveal(0.1);

  const [formData, setFormData] = useState({ name: '', email: '', phone: '', loanType: '', amount: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (e) => setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(false);
    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const result = await response.json();
      if (result.success) {
        setSubmitted(true);
        setFormData({ name: '', email: '', phone: '', loanType: '', amount: '', message: '' });
        setTimeout(() => setSubmitted(false), 5000);
      } else {
        setError(true);
        setTimeout(() => setError(false), 5000);
      }
    } catch {
      setError(true);
      setTimeout(() => setError(false), 5000);
    } finally {
      setLoading(false);
    }
  };

  const contactInfo = [
    { icon: <Phone className="w-6 h-6 text-orange-500" />, title: 'Phone', details: ['+91 9164366690'] },
    { icon: <Mail className="w-6 h-6 text-orange-500" />, title: 'Email', details: [ 'connect@fintasktick.com', 'fintasktick@gmail.com' ] },
    { icon: <MapPin className="w-6 h-6 text-orange-500" />, title: 'Address', details: ['#99/A, 16th Main, 5th Cross', 'Sri Rama Arcade', 'Opposite to Maggi Adda', 'Vijayanagar, Bangalore 560040'] },
    { icon: <Clock className="w-6 h-6 text-orange-500" />, title: 'Business Hours', details: ['Mon - Fri: 10:00 AM - 6:30 PM', 'Sat: 10:00 AM - 5:30 PM', 'May vary depending on work'] }
  ];

  const loanTypes = ['Personal Loan', 'Home Loan', 'Business Loan', 'Car Loan', 'Gold Loan', 'Education Loan', 'Mortgage Loan', 'Working Capital', 'Other'];

  return (
    <div className="w-full">
      <style>{animationStyles}</style>

      {/* ════════ HERO ════════ */}
      <section className="relative text-white overflow-hidden">
        <div className="relative h-[220px] sm:h-[350px] md:h-[450px]">
          <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${heroBg2})` }} />
          <div className="absolute inset-0 bg-gradient-to-r from-[#003a77]/85 via-[#003a77]/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#003a77]/50 via-transparent to-transparent" />

          <div className="absolute top-[15%] right-[10%] w-32 h-32 md:w-48 md:h-48 border border-white/10 rounded-full float-anim-slow hidden md:block" />
          <div className="absolute bottom-[20%] right-[25%] w-20 h-20 border border-orange-500/20 rounded-full float-anim-delay hidden md:block" />

          <div ref={heroRef} className="absolute inset-0 flex items-center">
            <div className="max-w-7xl mx-auto px-4 md:px-8 w-full">
              <div className={`max-w-3xl reveal ${heroVis ? 'active' : ''}`}>
                <span className="inline-block text-orange-400 font-semibold text-sm uppercase tracking-widest mb-3">Contact Us</span>
                <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">Get In Touch</h1>
                <p className="text-lg md:text-xl text-white/80 max-w-xl">Have questions? We're here to help you find the perfect financial solution</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════ CONTACT INFO CARDS ════════ */}
      <section ref={cardsRef} className="py-20 px-4 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className={`text-center mb-14 reveal ${cardsVis ? 'active' : ''}`}>
            <span className="inline-block text-orange-500 font-semibold text-sm uppercase tracking-widest mb-3">Reach Out</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-[#003a77] mb-4">Contact Information</h2>
            <div className={`section-line mx-auto mt-4 ${cardsVis ? 'active' : ''}`} />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, i) => (
              <div key={i} className={`contact-card bg-white p-7 rounded-xl shadow-sm border border-gray-100 text-center reveal ${cardsVis ? 'active' : ''} stagger-${i + 1}`}>
                <div className="icon-wrap w-14 h-14 rounded-xl bg-orange-50 flex items-center justify-center mx-auto mb-4">
                  {info.icon}
                </div>
                <h3 className="font-display text-lg font-bold text-[#003a77] mb-3">{info.title}</h3>
                {info.details.map((detail, idx) => (
                  <p key={idx} className="text-gray-500 text-sm">{detail}</p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ════════ FORM + MAP ════════ */}
      <section ref={formRef} className="py-20 px-4 bg-white relative noise-overlay overflow-hidden">
        <div className="absolute top-20 left-10 w-64 h-64 bg-orange-50 rounded-full opacity-50 blur-3xl float-anim-slow" />
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-blue-50 rounded-full opacity-50 blur-3xl float-anim" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-12">
            {/* Contact Form */}
            <div className={`reveal-left ${formVis ? 'active' : ''}`}>
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 via-orange-400 to-[#004080] rounded-t-2xl" />

                <span className="inline-block text-orange-500 font-semibold text-sm uppercase tracking-widest mb-2">Quick Inquiry</span>
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#003a77] mb-2">Send Us a Message</h2>
                <p className="text-gray-500 mb-6 text-[15px]">Fill out the form below and our team will get back to you within 24 hours.</p>

                {submitted && (
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6 flex items-center gap-3">
                    <CheckCircle className="text-green-600 flex-shrink-0" size={20} />
                    <p className="text-green-800 font-semibold text-sm">Thank you! Your message has been sent successfully.</p>
                  </div>
                )}

                {error && (
                  <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6 flex items-center gap-3">
                    <AlertCircle className="text-red-600 flex-shrink-0" size={20} />
                    <p className="text-red-800 font-semibold text-sm">Failed to send message. Please try again.</p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-[#003a77] font-semibold text-sm mb-1.5">Full Name *</label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} required placeholder="Enter your full name"
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg text-gray-800 text-sm bg-gray-50/50 transition-all duration-300" />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
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

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[#003a77] font-semibold text-sm mb-1.5">Loan Type *</label>
                      <select name="loanType" value={formData.loanType} onChange={handleChange} required
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg text-gray-800 text-sm bg-gray-50/50 transition-all duration-300">
                        <option value="">Select loan type</option>
                        {loanTypes.map((type, i) => (
                          <option key={i} value={type}>{type}</option>
                        ))}
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

                  <button type="submit" disabled={loading}
                    className="cta-btn w-full text-white font-bold py-3.5 px-6 rounded-lg text-sm relative z-10 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2">
                    {loading ? (
                      <span className="inline-flex items-center gap-2">
                        <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24">
                          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" fill="none" strokeDasharray="31" strokeLinecap="round" />
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      <>
                        <Send size={18} /> Send Message
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>

            {/* Map & Info */}
            <div className={`space-y-6 reveal-right ${formVis ? 'active' : ''}`}>
              <div className="rounded-2xl overflow-hidden shadow-lg border border-gray-100 h-64 sm:h-80 lg:h-96">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4829.672221710474!2d77.53805349999999!3d12.969412000000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3d005212915b%3A0x679c647205a2e952!2sFintasktick%20Business%20Solutions!5e1!3m2!1sen!2sin!4v1760166629705!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  title="Office Location"
                />
              </div>

              <div className="relative bg-white p-8 rounded-2xl shadow-sm border border-gray-100 overflow-hidden group hover:shadow-lg transition-shadow duration-500">
                <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-orange-500 to-orange-300 rounded-r transition-all duration-500 group-hover:w-1.5" />
                <h3 className="font-display text-xl sm:text-2xl font-bold text-[#003a77] mb-4">Why Contact Us?</h3>
                <ul className="space-y-3">
                  {['Get expert financial advice', 'Compare multiple loan offers', 'Quick 24-hour response time', 'Personalized solutions'].map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-500 text-[15px] transition-all duration-300 hover:text-gray-700 hover:translate-x-1">
                      <CheckCircle className="text-orange-500 flex-shrink-0 mt-0.5" size={18} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ════════ FAQ ════════ */}
      <section ref={faqRef} className="py-20 px-4 bg-gray-50 overflow-hidden">
        <div className="max-w-4xl mx-auto">
          <div className={`text-center mb-14 reveal ${faqVis ? 'active' : ''}`}>
            <span className="inline-block text-orange-500 font-semibold text-sm uppercase tracking-widest mb-3">FAQ</span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-[#003a77] mb-4">Frequently Asked Questions</h2>
            <div className={`section-line mx-auto mt-4 ${faqVis ? 'active' : ''}`} />
          </div>

          <div className="space-y-4">
            {[
              { q: 'How long does the loan approval process take?', a: 'Typically, loan approval takes 3-4 days for personal loan and 7-15 days for home loan after submitting all required documents.' },
              { q: 'What documents do I need to apply?', a: "Generally, you'll need ID proof, Address-proof, Income-proof, Bank-statements, and Other documents." },
              { q: 'Do you charge any fees for consultation?', a: 'No, our initial consultation is completely free.' }
            ].map((faq, i) => (
              <div key={i} className={`faq-card bg-white p-7 rounded-xl shadow-sm border border-gray-100 reveal ${faqVis ? 'active' : ''} stagger-${i + 1}`}>
                <h3 className="font-display text-lg font-bold text-[#003a77] mb-2">{faq.q}</h3>
                <p className="text-gray-500 leading-relaxed text-[15px]">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;

