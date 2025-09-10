import React from 'react';
import { Users, Calendar, Settings, CreditCard, Bot, MessageCircle, Check } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Users,
      title: "STAFF & COMMISSION",
      description: "Automated staff management & transparent commissions with real-time performance tracking.",
      benefits: [
        "AI productivity tracking",
        "Auto commission calculations", 
        "Reduce manual errors"
      ]
    },
    {
      icon: Calendar,
      title: "SMART BOOKING",
      description: "24/7 AI-powered appointment scheduling across devices with live staff availability.",
      benefits: [
        "No missed bookings",
        "AI-optimized time slots",
        "Real-time sync"
      ]
    },
    {
      icon: Settings,
      title: "SERVICE CONTROL",
      description: "Total control over service & pricing with top-performers and quick updates.",
      benefits: [
        "AI suggestions from trends",
        "Track service performance",
        "Instant updates"
      ]
    },
    {
      icon: CreditCard,
      title: "PAYMENTS DASHBOARD",
      description: "Instant visibility into revenue, tips, commissions, and taxes — all in one place.",
      benefits: [
        "AI sales analytics",
        "Improve profitability",
        "Clarity & control"
      ]
    },
    {
      icon: Bot,
      title: "AI INTEGRATION",
      description: "Let AI handle repetitive tasks from scheduling to reporting.",
      benefits: [
        "Save time",
        "Reduce errors",
        "Scale smarter"
      ]
    },
    {
      icon: MessageCircle,
      title: "WHATSAPP READY",
      description: "Automated reminders, updates, and re-engagement — replies handled by AI.",
      benefits: [
        "Auto follow-ups",
        "Reminders & confirmations",
        "Happier clients"
      ]
    }
  ];

  return (
    <section id="features" className="py-12 md:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 md:mb-6">
            Powerful Features for Modern Salons
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Everything you need to run your salon efficiently and profitably
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <div key={index} className="group bg-white rounded-xl md:rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 p-6 md:p-8 border border-gray-100 hover:border-blue-500 transform hover:-translate-y-2">
              <div className="flex items-center mb-4 md:mb-6">
                <div className="bg-gradient-to-r from-blue-100 to-blue-200 p-3 md:p-4 rounded-xl group-hover:from-blue-500 group-hover:to-blue-500 transition-all duration-300 shadow-sm group-hover:shadow-lg transform group-hover:scale-110">
                  <feature.icon className="h-5 w-5 md:h-6 md:w-6 text-blue-500 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-base md:text-lg font-bold text-gray-900 ml-3 md:ml-4">{feature.title}</h3>
              </div>
              
              <p className="text-gray-600 mb-4 md:mb-6 leading-relaxed text-sm md:text-base">
                {feature.description}
              </p>

              <ul className="space-y-2 md:space-y-3">
                {feature.benefits.map((benefit, benefitIndex) => (
                  <li key={benefitIndex} className="flex items-center text-sm md:text-base text-gray-700">
                    <div className="bg-blue-100 rounded-full p-1 mr-3 flex-shrink-0">
                      <Check className="h-3 w-3 md:h-4 md:w-4 text-blue-500" />
                    </div>
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;