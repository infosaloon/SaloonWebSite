import React, { useState } from 'react';
import { Mail, Phone, MessageCircle, Globe, Users, Send, MapPin, Clock } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (submitting) return;
    setSubmitting(true);

    console.log('Form submission started. Form data:', formData);

    try {
      // Generate sequential Sl no using in-memory storage
      const contactSubmissions = JSON.parse(sessionStorage.getItem('contactSubmissions') || '[]');
      const nextSlNo = contactSubmissions.length + 1;
      const formattedSlNo = 'SL-' + String(nextSlNo).padStart(3, '0');

      // Format current date as DD/MM/YYYY
      const currentDate = new Date();
      const formattedDate = currentDate.getDate().toString().padStart(2, '0') + '/' + 
                           (currentDate.getMonth() + 1).toString().padStart(2, '0') + '/' + 
                           currentDate.getFullYear();

      const endpoint = 'https://script.google.com/macros/s/AKfycbxpMxkSTxgvynzVmTsKGdSB8N4soIudI81_53UwZU83iO5PkWpbN12VIlcLO-KtmnQ/exec';
      const data = new FormData();
      data.append('action', 'insert');
      data.append('sheetName', 'Sheet1');
      
      // Row data format:
      // Column A: Timestamp (DD/MM/YYYY)
      // Column B: Sl No (SL-001, SL-002, etc.)
      // Column C: Name
      // Column D: Email
      // Column E: Phone
      // Column F: Message
      data.append('rowData', JSON.stringify([
        formattedDate,          // Column A - Timestamp in DD/MM/YYYY format
        formattedSlNo,          // Column B - Sl No in SL-001 format
        formData.name.trim(),   // Column C - Name
        formData.email.trim(),  // Column D - Email
        formData.phone.trim(),  // Column E - Phone
        formData.message.trim() // Column F - Message
      ]));

      console.log('Sending POST request to:', endpoint);
      console.log('Row data being sent:', [
        formattedDate,
        formattedSlNo,
        formData.name.trim(),
        formData.email.trim(),
        formData.phone.trim(),
        formData.message.trim()
      ]);

      const res = await fetch(endpoint, {
        method: 'POST',
        body: data,
      });

      console.log('Fetch response received:', res);

      if (!res || (res.type !== 'opaque' && !res.ok)) {
        throw new Error('Submission failed');
      }

      // Store submission in session storage with proper formatting
      contactSubmissions.push({
        id: formattedSlNo,
        timestamp: formattedDate,
        ...formData
      });
      sessionStorage.setItem('contactSubmissions', JSON.stringify(contactSubmissions));

      console.log('Form submitted successfully!');
      alert('Thank you for your message! We\'ll get back to you soon.');
      setFormData({ name: '', email: '', phone: '', message: '' });
    } catch (err) {
      console.error('Error submitting contact form:', err);
      alert('Sorry, there was a problem submitting your message. Please try again later.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-8 md:py-12 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-blue-200/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-purple-200/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mb-3">
            <MessageCircle className="w-6 h-6 text-blue-600" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-3">
            Get in Touch
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            Book your <span className="font-semibold text-blue-600">FREE Demo</span> & Business Walkthrough. 
            Work less and earn more — on autopilot.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-6 max-w-6xl mx-auto mb-0">
          {/* Contact Form */}
          <div className="lg:col-span-3">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white/50 p-6 md:p-8 hover:shadow-2xl transition-all duration-500">
              <div className="mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-1">Send us a message</h3>
                <p className="text-sm text-gray-600">Fill out the form below and we'll get back to you within 24 hours.</p>
              </div>
              
              <div className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="group">
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-3 bg-gray-50 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-100 focus:border-blue-500 transition-all duration-300 placeholder:text-gray-400 group-hover:border-gray-300 text-sm"
                      placeholder="Enter your full name"
                    />
                  </div>
                  
                  <div className="group">
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full pl-9 pr-3 py-3 bg-gray-50 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-100 focus:border-blue-500 transition-all duration-300 placeholder:text-gray-400 group-hover:border-gray-300 text-sm"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>
                </div>
                
                <div className="group">
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full pl-9 pr-3 py-3 bg-gray-50 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-100 focus:border-blue-500 transition-all duration-300 placeholder:text-gray-400 group-hover:border-gray-300 text-sm"
                      placeholder="Your phone number"
                    />
                  </div>
                </div>
                
                <div className="group">
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-3 bg-gray-50 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-100 focus:border-blue-500 transition-all duration-300 resize-none placeholder:text-gray-400 group-hover:border-gray-300 text-sm"
                    placeholder="Tell us about your salon and how we can help..."
                  />
                </div>
                
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={submitting}
                    onClick={handleSubmit}
                    className={`w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center text-sm ${submitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                  >
                    {submitting ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="ml-2 h-4 w-4" />
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="lg:col-span-2 space-y-4">
            {/* Contact Details Card */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white/50 p-6 hover:shadow-2xl transition-all duration-500">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Contact Information</h3>
              
              <div className="space-y-3">
                <div className="flex items-start space-x-3 p-3 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors duration-300">
                  <Mail className="h-5 w-5 text-blue-600 mt-0.5" />
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">Email</p>
                    <a 
                      href="mailto:info@saloonmate.com" 
                      className="text-gray-600 text-sm hover:text-blue-600 transition-colors duration-300 cursor-pointer"
                    >
                      info@saloonmate.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3 p-3 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors duration-300">
                  <Globe className="h-5 w-5 text-purple-600 mt-0.5" />
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">Website</p>
                    <p className="text-gray-600 text-sm">www.saloonmate.com</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3 p-3 bg-indigo-50 rounded-lg hover:bg-indigo-100 transition-colors duration-300">
                  <Users className="h-5 w-5 text-indigo-600 mt-0.5" />
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">Service Area</p>
                    <p className="text-gray-600 text-sm">Serving worldwide</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Info Card */}
            <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl shadow-xl p-6 text-white">
              <h3 className="text-lg font-bold mb-3">Why Choose SaloonMate?</h3>
              <ul className="space-y-2 text-blue-100">
                <li className="flex items-center space-x-2 text-sm">
                  <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                  <span>24/7 Customer Support</span>
                </li>
                <li className="flex items-center space-x-2 text-sm">
                  <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                  <span>Free Demo & Setup</span>
                </li>
                <li className="flex items-center space-x-2 text-sm">
                  <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                  <span>Automated Business Operations</span>
                </li>
                <li className="flex items-center space-x-2 text-sm">
                  <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                  <span>Increase Revenue by 40%</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;