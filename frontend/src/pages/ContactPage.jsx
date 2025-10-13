import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, AlertCircle } from 'lucide-react';
import heroBg2 from '../assets/4.png';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    loanType: '',
    amount: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(false);

    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitted(true);
        setFormData({
          name: '',
          email: '',
          phone: '',
          loanType: '',
          amount: '',
          message: ''
        });

        setTimeout(() => {
          setSubmitted(false);
        }, 5000);
      } else {
        setError(true);
        setTimeout(() => setError(false), 5000);
      }
    } catch (error) {
      console.error('Error:', error);
      setError(true);
      setTimeout(() => setError(false), 5000);
    } finally {
      setLoading(false);
    }
  };

  // Rest of your component stays the same...
  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Phone',
      details: ['+91 9164366690'],
      color: 'orange'
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email',
      details: ['fintasktick@gmail.com'],
      color: 'blue'
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Address',
      details: ['#99/A, 16th Main, 5th Cross', 'Sri Rama Arcade', 'Opposite to Maggi Adda', 'Vijayanagar, Bangalore 560040'],
      color: 'green'
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'Business Hours',
      details: ['Mon - Fri: 10:00 AM - 6:30 PM', 'Sat: 10:00 AM - 5:00 PM'],
      color: 'purple'
    }
  ];

  const loanTypes = [
    'Personal Loan',
    'Home Loan',
    'Business Loan',
    'Car Loan',
    'Gold Loan',
    'Education Loan',
    'Mortgage Loan',
    'Working Capital',
    'Other'
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative text-white py-20 px-4 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroBg2})` }}
        ></div>
        <div className="absolute inset-0 bg-opacity-70"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Get In Touch
            </h1>
            <p className="text-xl mb-8 text-blue-100">
              Have questions? We're here to help you find the perfect financial solution
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow text-center"
              >
                <div className="w-14 h-14 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="text-orange-600">{info.icon}</div>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{info.title}</h3>
                {info.details.map((detail, idx) => (
                  <p key={idx} className="text-gray-600 text-sm">
                    {detail}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>



      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-12">

            {/* Contact Form */}
            <div className="bg-white p-6 sm:p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
                Send Us a Message
              </h2>
              <p className="text-gray-600 mb-6 text-sm sm:text-base">
                Fill out the form below and our team will get back to you within 24 hours.
              </p>

              {submitted && (
                <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6 flex items-center gap-3">
                  <CheckCircle className="text-green-600" />
                  <p className="text-green-800 font-semibold text-sm sm:text-base">
                    Thank you! Your message has been sent successfully.
                  </p>
                </div>
              )}

              {error && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6 flex items-center gap-3">
                  <AlertCircle className="text-red-600" />
                  <p className="text-red-800 font-semibold text-sm sm:text-base">
                    Failed to send message. Please try again.
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent text-sm sm:text-base"
                    placeholder="Enter your full name"
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent text-sm sm:text-base"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent text-sm sm:text-base"
                      placeholder="+91 1234567890"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      Loan Type *
                    </label>
                    <select
                      name="loanType"
                      value={formData.loanType}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent text-sm sm:text-base"
                    >
                      <option value="">Select loan type</option>
                      {loanTypes.map((type, index) => (
                        <option key={index} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">
                      Loan Amount
                    </label>
                    <input
                      type="text"
                      name="amount"
                      value={formData.amount}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent text-sm sm:text-base"
                      placeholder="₹ 5,00,000"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent text-sm sm:text-base"
                    placeholder="Tell us more about your requirements..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-lg transition-colors flex items-center justify-center gap-2 disabled:bg-gray-400"
                >
                  {loading ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Map & Info */}
            <div className="space-y-6">
              <div className="bg-gray-200 rounded-lg overflow-hidden h-64 sm:h-80 lg:h-96">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4829.672221710474!2d77.53805349999999!3d12.969412000000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3d005212915b%3A0x679c647205a2e952!2sFintasktick%20Business%20Solutions!5e1!3m2!1sen!2sin!4v1760166629705!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  title="Office Location"
                ></iframe>
              </div>

              <div className="bg-gradient-to-br from-orange-50 to-blue-50 p-6 sm:p-8 rounded-lg">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
                  Why Contact Us?
                </h3>
                <ul className="space-y-3 text-sm sm:text-base">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-orange-500 flex-shrink-0 mt-1" size={20} />
                    <span className="text-gray-700">Get expert financial advice</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-orange-500 flex-shrink-0 mt-1" size={20} />
                    <span className="text-gray-700">Compare multiple loan offers</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-orange-500 flex-shrink-0 mt-1" size={20} />
                    <span className="text-gray-700">Quick 24-hour response time</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="text-orange-500 flex-shrink-0 mt-1" size={20} />
                    <span className="text-gray-700">Personalized solutions</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* FAQ Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                How long does the loan approval process take?
              </h3>
              <p className="text-gray-600">
                Typically, loan approval takes 24-48 hours after submitting all required documents.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                What documents do I need to apply?
              </h3>
              <p className="text-gray-600">
                Generally, you'll need ID proof, address proof, income proof, and bank statements.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                Do you charge any fees for consultation?
              </h3>
              <p className="text-gray-600">
                No, our initial consultation is completely free.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;