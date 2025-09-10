import React from 'react';
import { Shield, Zap, BarChart3, Sparkles } from 'lucide-react';

const Hero = () => {
  const topFeatures = [
    { icon: Shield, text: "Secure & Cloud-based" },
    { icon: Zap, text: "AI-Optimized Workflows" },
    { icon: BarChart3, text: "Real-time Analytics" },
    { icon: Sparkles, text: "Premium Experience" }
  ];

  return (
    <section className="bg-blue-50 py-12 md:py-16 lg:py-20">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        
        {/* Top Features Bar */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-8 mb-12 md:mb-16">
          {topFeatures.map((feature, index) => (
            <div
              key={index}
              className="flex items-center space-x-2 bg-blue-100 px-4 py-2 rounded-full shadow-sm hover:bg-blue-200 hover:scale-105 transition-all duration-300"
            >
              <feature.icon className="h-4 w-4 md:h-5 md:w-5 text-blue-500" />
              <span className="font-medium text-sm md:text-base text-gray-700">
                {feature.text}
              </span>
            </div>
          ))}
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-32 items-center">
          {/* Left Side: Text + Cards */}
          <div>
            {/* Text */}
            <div className="mb-8">
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight text-left">
                Everything you need to grow —{' '}
                <span className="text-[#5271FF]">on autopilot</span>
              </h1>

              <p className="text-lg text-gray-600 leading-relaxed text-left mb-6">
                We automate the boring stuff so you can focus on what matters
                most — growing your brand and delighting your clients.
              </p>

              <div className="inline-flex items-center bg-blue-500 px-4 py-2 rounded-full text-sm font-medium text-white">
                <Sparkles className="h-4 w-4 mr-2" />
                Smart Features That Work for You
              </div>
            </div>

            {/* Blue Feature Cards */}
            <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl shadow-2xl p-6 md:p-8 text-white">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                  <h3 className="font-semibold text-lg mb-2">Staff Management</h3>
                  <p className="text-blue-100 text-sm">
                    Automated scheduling & tracking
                  </p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                  <h3 className="font-semibold text-lg mb-2">Smart Booking</h3>
                  <p className="text-blue-100 text-sm">AI-powered appointments</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
                  <h3 className="font-semibold text-lg mb-2">Analytics</h3>
                  <p className="text-blue-100 text-sm">Real-time insights</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Image */}
          <div className="flex justify-end">
            <img
              src="/4995715d7020055a29c97c9860ef9174.jpg"
              alt="Salon Interior"
              className="rounded-2xl shadow-2xl w-full h-[400px] md:h-[500px] object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
