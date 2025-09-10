import React from 'react';
import { Check, ArrowRight } from 'lucide-react';

const About = () => {
  const targetBusinesses = [
    "Boutique Salons",
    "Spas & Wellness Clinics", 
    "Unisex Beauty Studios",
    "Barbershops",
    "Franchise Chains",
    "Multi-Location Businesses"
  ];

  const trustReasons = [
    "Reduce No-Shows & Manual Work",
    "Boost Revenue & Staff Efficiency",
    "Re-Engage Clients Automatically", 
    "Make Informed Business Decisions",
    "Save Time — Operate like a CEO"
  ];

  const mainBenefits = [
    "Turn more bookings into repeat clients",
    "Reduce no-shows with smart WhatsApp reminders",
    "Auto-track staff commissions & productivity",
    "Sell more services with AI-backed upsell insights",
    "Keep your shelves stocked & your revenue flowing"
  ];

  return (
    <section id="about" className="py-12 md:py-16 lg:py-20 bg-gradient-to-br from-blue-50 to-indigo-100 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{backgroundImage: 'radial-gradient(circle at 20% 80%, #3b82f6 0%, transparent 50%), radial-gradient(circle at 80% 20%, #6366f1 0%, transparent 50%), radial-gradient(circle at 40% 40%, #8b5cf6 0%, transparent 50%)'}}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="inline-flex items-center bg-gradient-to-r from-blue-500 to-blue-600 px-6 py-3 rounded-full text-sm font-medium text-white mb-6 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
          <Check className="h-4 w-4 mr-2" />
          Smart Features That Work for You
        </div>
        <div className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-8 w-fit">
          Why SaloonMate
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <h2 className="text-4xl font-extrabold text-gray-900 mb-6 animate-fade-in font-['Poppins']">
              SaloonMate: Your Salon's Money-Making Machine
            </h2>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed font-semibold">
              Running a salon is no small task — managing staff, handling bookings, tracking 
              payments, and keeping clients happy. SaloonMate isn't just software — it's your 
              silent partner, business booster, and money-making machine.
            </p>

            <ul className="space-y-4 mb-10">
              {mainBenefits.map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <Check className="h-6 w-6 text-blue-500 mr-4 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-lg">{benefit}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-4">
              <button onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })} className="bg-blue-500 text-white px-8 py-4 rounded-lg hover:bg-blue-500 transition-all duration-300 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 hover:scale-105 focus:ring-4 focus:ring-blue-300 focus:outline-none flex items-center justify-center animate-pulse">
                Book FREE Demo
                <ArrowRight className="ml-2 h-5 w-5 animate-bounce" />
              </button>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Who Is SaloonMate For */}
            <div className="bg-white rounded-xl p-4 md:p-6 shadow-lg border border-gray-100 hover:border-blue-500 transition-all duration-300">
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-4">
                Who Is SaloonMate For?
              </h3>
              <ul className="space-y-3">
                {targetBusinesses.map((business, index) => (
                  <li key={index} className="flex items-center">
                    <Check className="h-4 w-4 text-blue-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{business}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Why Salon Owners Trust Us */}
            <div className="bg-white rounded-xl p-4 md:p-6 shadow-lg border border-gray-100 hover:border-blue-500 transition-all duration-300">
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-4">
                Why Salon Owners Trust Us
              </h3>
              <ul className="space-y-3">
                {trustReasons.map((reason, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="h-4 w-4 text-blue-500 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{reason}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;