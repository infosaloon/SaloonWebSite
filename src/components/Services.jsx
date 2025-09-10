import React from 'react';
import { 
  RotateCcw, 
  Calendar as CalendarIcon, 
  Check, 
  Bot, 
  BarChart3, 
  MessageSquare, 
  CreditCard, 
  Users, 
  Clock,
  Target,
  TrendingUp,
  Shield
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: RotateCcw,
      title: "AI CLIENT RE-ENGAGEMENT",
      description: "Automatically re-engage silent clients with personalized offers and smart targeting.",
      benefits: [
        "30% more repeat bookings",
        "AI-powered targeting", 
        "Hands-off retention system"
      ],
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: CalendarIcon,
      title: "SMART APPOINTMENT SYSTEM",
      description: "AI-powered scheduling that matches the right staff, time, and service every time.",
      benefits: [
        "Zero booking conflicts",
        "Optimized staff allocation",
        "Seamless client experience"
      ],
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Bot,
      title: "AI BUSINESS ASSISTANT",
      description: "Your virtual business manager that handles routine tasks and provides insights.",
      benefits: [
        "24/7 automated responses",
        "Smart task automation",
        "Predictive analytics"
      ],
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: BarChart3,
      title: "REVENUE OPTIMIZATION",
      description: "AI analyzes your data to identify revenue opportunities and growth patterns.",
      benefits: [
        "Revenue growth insights",
        "Performance tracking",
        "Profit margin analysis"
      ],
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: MessageSquare,
      title: "AUTOMATED COMMUNICATIONS",
      description: "Smart messaging system that handles confirmations, reminders, and follow-ups.",
      benefits: [
        "Reduce no-shows by 60%",
        "Automated WhatsApp integration",
        "Personalized messaging"
      ],
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: CreditCard,
      title: "SMART PAYMENT INSIGHTS",
      description: "Advanced payment analytics with commission tracking and financial forecasting.",
      benefits: [
        "Real-time payment tracking",
        "Commission automation",
        "Financial forecasting"
      ],
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Target,
      title: "MARKETING AUTOMATION",
      description: "Targeted marketing campaigns powered by AI to attract and retain customers.",
      benefits: [
        "Automated campaigns",
        "Customer segmentation",
        "ROI optimization"
      ],
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: TrendingUp,
      title: "GROWTH ANALYTICS",
      description: "Comprehensive business intelligence with predictive growth modeling.",
      benefits: [
        "Growth predictions",
        "Market trend analysis",
        "Strategic insights"
      ],
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Shield,
      title: "SECURITY & COMPLIANCE",
      description: "Enterprise-grade security with automated compliance monitoring and data protection.",
      benefits: [
        "Data encryption",
        "Compliance automation",
        "Security monitoring"
      ],
      color: "from-blue-500 to-blue-600"
    }
  ];

  return (
    <section id="services" className="py-16 md:py-20 lg:py-24 bg-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center bg-blue-100 text-blue-500 px-6 py-3 rounded-full text-sm font-semibold mb-6">
            <Bot className="h-4 w-4 mr-2" />
            AI-Powered Services
          </div>
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Advanced AI Services for Modern Salons
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Let artificial intelligence handle the complex tasks while you focus on what matters most — 
            growing your business and delighting your clients with exceptional service.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 p-8 border border-gray-100 hover:border-blue-500 transform hover:-translate-y-2"
            >
              <div className="flex items-center mb-6">
                <div className={`bg-gradient-to-r ${service.color} p-4 rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="h-7 w-7 text-white" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-500 transition-colors duration-300">
                    {service.title}
                  </h3>
                </div>
              </div>
              
              <p className="text-gray-600 mb-8 text-base leading-relaxed">
                {service.description}
              </p>

              <ul className="space-y-4">
                {service.benefits.map((benefit, benefitIndex) => (
                  <li key={benefitIndex} className="flex items-center text-gray-700">
                    <div className="bg-blue-100 rounded-full p-1 mr-4">
                      <Check className="h-4 w-4 text-blue-500" />
                    </div>
                    <span className="font-medium text-sm">{benefit}</span>
                  </li>
                ))}
              </ul>

            </div>
          ))}
        </div>

        {/* Call to Action Section */}
        <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-3xl p-12 text-center text-white shadow-2xl">
          <h3 className="text-3xl font-bold mb-4">
            Ready to Transform Your Salon Business?
          </h3>
          <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto">
            Join thousands of salon owners who have revolutionized their business with our AI-powered platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })} className="bg-white text-blue-500 px-8 py-4 rounded-lg hover:bg-gray-100 transition-all duration-300 font-bold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              Start Free Trial
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;