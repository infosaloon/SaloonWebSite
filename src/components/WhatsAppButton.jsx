import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';

const WhatsAppButton = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  const handleWhatsAppClick = () => {
    // You can customize the message here
    const message = "Hi! I'm interested in SaloonMate. Can you tell me more?";
    const phoneNumber = "919993023243";
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, '_blank');
  };

  return (
    <>
      {/* WhatsApp Button */}
      <div className="fixed bottom-20 right-6 z-40">
        <div className="relative">
          {/* Expanded Info Card */}
          {isExpanded && (
            <div className="absolute bottom-16 right-0 mb-2 w-64 bg-white rounded-lg shadow-xl border border-gray-200 p-4 transform transition-all duration-300 animate-fade-in">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-semibold text-gray-900 text-sm">Chat with us!</h3>
                <button 
                  onClick={toggleExpanded}
                  className="text-gray-400 hover:text-gray-600 p-1"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
              <p className="text-xs text-gray-600 mb-3">
                Hi! 👋 Need help with SaloonMate? We're here to assist you with your salon management needs.
              </p>
              <button
                onClick={handleWhatsAppClick}
                className="w-full bg-green-500 hover:bg-green-600 text-white text-xs font-medium py-2 px-3 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                <MessageCircle className="h-4 w-4" />
                <span>Start Chat</span>
              </button>
            </div>
          )}

          {/* Main WhatsApp Button */}
          <div className="flex items-center space-x-2">
            {/* Main button */}
            <button
              onClick={toggleExpanded}
              className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-110 relative group pulse-glow"
              style={{
                background: 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)'
              }}
            >
              <MessageCircle className="h-6 w-6" />
              
              {/* Notification dot */}
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
              
              {/* Ripple effect */}
              <div className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-20"></div>
            </button>
          </div>
        </div>
      </div>



      {/* Add custom styles for animations */}
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }
      `}</style>
    </>
  );
};

export default WhatsAppButton;