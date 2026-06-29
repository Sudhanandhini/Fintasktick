import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProductsPage from './pages/ProductsPage';
import ServicesPage from './pages/ServicesPage';
import ContactPage from './pages/ContactPage';
import GoldLoanPage from './pages/GoldLoanPage';
import HomeLoanPage from './pages/HomeLoanPage';
import PersonalLoanPage from './pages/PersonalLoanPage';
import MortgageLoanPage from './pages/MortgageLoanPage';
import BusinessLoanPage from './pages/BusinessLoanPage';
import CarLoanPage from './pages/CarLoanPage';
import MachineryLoanPage from './pages/MachineryLoanPage';
import EducationLoanPage from './pages/EducationLoanPage';
import ODLoanPage from './pages/ODLoanPage';
import InsuranceServicesPage from './pages/InsuranceServicesPage';
import CreditCardLoanPage from './pages/CreditCardLoanPage';
import WorkingCapitalLoanPage from './pages/WorkingCapitalLoanPage';
import GalleryPage from './pages/GalleryPage';

import ScrollToTop from './components/Scrolltotop';


const DisclaimerPopup = () => {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 1200);
    return () => clearTimeout(t);
  }, []);

  if (dismissed) return null;

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '100px',
        right: '24px',
        zIndex: 9998,
        width: '250px',
        background: '#fff',
        borderRadius: '14px',
        boxShadow: '0 8px 32px rgba(0,58,119,0.18)',
        border: '1.5px solid #e5e7eb',
        overflow: 'hidden',
        transform: visible ? 'translateY(0) scale(1)' : 'translateY(30px) scale(0.95)',
        opacity: visible ? 1 : 0,
        transition: 'transform 0.4s cubic-bezier(.22,1,.36,1), opacity 0.4s ease',
        pointerEvents: visible ? 'auto' : 'none',
      }}
    >
      {/* Header */}
      <div style={{ background: '#003a77', padding: '10px 16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <span style={{ color: '#fff', fontWeight: 700, fontSize: '13px', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
          ⚠ Disclaimer
        </span>
        <button
          onClick={() => setDismissed(true)}
          style={{ background: 'none', border: 'none', color: '#fff', cursor: 'pointer', fontSize: '18px', lineHeight: 1, padding: '0 2px' }}
          title="Close"
        >
          ×
        </button>
      </div>

      {/* Body */}
      <div style={{ padding: '14px 16px', maxHeight: '240px', overflowY: 'auto' }}>
        <ul style={{ margin: 0, padding: '0 0 0 16px', listStyleType: 'disc', color: '#374151', fontSize: '11.5px', lineHeight: '1.7' }}>
          <li>Fintasktick is a registered NBFC with RBI, Certified No : <strong style={{ color: '#003a77' }}>[Registration Number]</strong></li>
          <li>We are not a bank and do not accept public deposits. All loans are subject to credit appraisal, eligibility criteria, and company policies.</li>
          <li>Interest rates, fees, and charges are as per RBI guidelines and may change without prior notice. Past approval does not guarantee future loans.</li>
          <li>Borrow only what you can repay. Non-payment will affect your credit score with CIBIL.</li>
          <li>RBI does not guarantee repayment of loans or accuracy of information provided by NBFCs.</li>
        </ul>
      </div>

      {/* Accept button */}
      <div style={{ padding: '10px 16px', borderTop: '1px solid #f3f4f6' }}>
        <button
          onClick={() => setDismissed(true)}
          style={{
            width: '100%', padding: '8px', background: '#f97316', color: '#fff',
            border: 'none', borderRadius: '8px', fontWeight: 700, fontSize: '13px',
            cursor: 'pointer', transition: 'background 0.2s',
          }}
          onMouseEnter={e => e.currentTarget.style.background = '#ea580c'}
          onMouseLeave={e => e.currentTarget.style.background = '#f97316'}
        >
          I Understand
        </button>
      </div>
    </div>
  );
};

const WhatsAppButton = () => (
  <a
    href="https://wa.me/919164366690"
    target="_blank"
    rel="noopener noreferrer"
    title="Chat with us on WhatsApp"
    style={{
      position: 'fixed',
      bottom: '28px',
      right: '24px',
      zIndex: 9999,
      width: '56px',
      height: '56px',
      borderRadius: '50%',
      background: '#25D366',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: '0 4px 16px rgba(37,211,102,0.45)',
      transition: 'transform 0.2s ease, box-shadow 0.2s ease',
    }}
    onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.12)'; e.currentTarget.style.boxShadow = '0 8px 24px rgba(37,211,102,0.55)'; }}
    onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.boxShadow = '0 4px 16px rgba(37,211,102,0.45)'; }}
  >
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="30" height="30" fill="white">
      <path d="M16 2C8.268 2 2 8.268 2 16c0 2.492.666 4.83 1.83 6.847L2 30l7.38-1.8A13.94 13.94 0 0 0 16 30c7.732 0 14-6.268 14-14S23.732 2 16 2zm0 25.5a11.44 11.44 0 0 1-5.825-1.594l-.418-.247-4.38 1.068 1.1-4.267-.272-.437A11.468 11.468 0 0 1 4.5 16C4.5 9.649 9.649 4.5 16 4.5S27.5 9.649 27.5 16 22.351 27.5 16 27.5zm6.29-8.373c-.344-.172-2.037-1.004-2.352-1.118-.316-.115-.546-.172-.776.172-.23.344-.889 1.118-1.09 1.348-.2.23-.4.258-.744.086-.344-.172-1.452-.535-2.767-1.708-1.022-.913-1.713-2.04-1.913-2.384-.2-.344-.021-.53.15-.701.155-.154.344-.4.516-.602.172-.2.23-.344.344-.573.115-.23.058-.43-.029-.602-.086-.172-.776-1.87-1.063-2.562-.28-.673-.564-.582-.776-.593l-.66-.011c-.23 0-.602.086-.918.43-.316.344-1.204 1.176-1.204 2.867 0 1.69 1.233 3.325 1.405 3.554.172.23 2.427 3.706 5.88 5.196.822.355 1.463.567 1.963.726.824.263 1.575.226 2.168.137.661-.099 2.037-.832 2.324-1.635.287-.803.287-1.49.2-1.635-.086-.143-.316-.23-.66-.4z"/>
    </svg>
  </a>
);

function App() {
  return (
    <div className="min-h-screen flex flex-col">

  <ScrollToTop />

      <Header />
      <DisclaimerPopup />
      <WhatsAppButton />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path='/goldloan' element={<GoldLoanPage />} />
          <Route path='/homeloan' element={<HomeLoanPage />} />
          <Route path='/personalloan' element={<PersonalLoanPage />} />
           <Route path='/mortgageloan' element={<MortgageLoanPage />} />
           <Route path='/businessloan' element={<BusinessLoanPage />} />
           <Route path='/carloan' element={<CarLoanPage />} />
           <Route path='/machineryloan' element={<MachineryLoanPage />} />
           <Route path='/educationloan' element={<EducationLoanPage />} />
           <Route path='/odloan' element={<ODLoanPage />} />
           <Route path="/insuranceloan" element={<InsuranceServicesPage />} />
           <Route path='/creditcardloan' element={<CreditCardLoanPage />} />
           <Route path='/workingcapitalloan' element={<WorkingCapitalLoanPage />} />
           <Route path='/gallery' element={<GalleryPage />} />

          </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;