import { Routes, Route } from 'react-router-dom';
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


function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
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

          </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;