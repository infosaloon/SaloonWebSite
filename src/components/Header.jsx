import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-blue-100 shadow-sm border-b border-gray-100 sticky top-0 z-50 glow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="flex justify-between items-center h-14 md:h-16">
          <div className="flex items-center space-x-2 group cursor-pointer">
            <div className="bg-white p-1.5 md:p-2 rounded-lg shadow-sm overflow-hidden transition-all duration-300 group-hover:shadow-lg group-hover:scale-105">
              <img
                src="/3.png"
                alt="SaloonMate logo"
                className="h-8 w-8 md:h-10 md:w-10 object-contain transition-transform duration-300 group-hover:scale-110"
                loading="eager"
                decoding="async"
              />
            </div>
            <span className="text-xl md:text-2xl font-bold text-gray-900 transition-all duration-300 group-hover:text-blue-600">SaloonMate</span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
            <a href="#features" className="group relative px-3 py-2 text-gray-700 hover:text-blue-600 transition-all duration-300 font-medium text-sm lg:text-base rounded-lg hover:bg-blue-50/50 transform hover:scale-105">
              <span className="relative z-10">Features</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/10 to-blue-500/0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
            <a href="#services" className="group relative px-3 py-2 text-gray-700 hover:text-blue-600 transition-all duration-300 font-medium text-sm lg:text-base rounded-lg hover:bg-blue-50/50 transform hover:scale-105">
              <span className="relative z-10">Services</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/10 to-blue-500/0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
            <a href="#about" className="group relative px-3 py-2 text-gray-700 hover:text-blue-600 transition-all duration-300 font-medium text-sm lg:text-base rounded-lg hover:bg-blue-50/50 transform hover:scale-105">
              <span className="relative z-10">About</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/10 to-blue-500/0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
            <a href="#contact" className="group relative px-3 py-2 text-gray-700 hover:text-blue-600 transition-all duration-300 font-medium text-sm lg:text-base rounded-lg hover:bg-blue-50/50 transform hover:scale-105">
              <span className="relative z-10">Contact</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/10 to-blue-500/0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
          </nav>

          <button 
            className="md:hidden p-3 rounded-xl hover:bg-blue-50 transition-all duration-300 transform hover:scale-110 hover:shadow-lg border border-transparent hover:border-blue-200 group"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="relative">
              {isMenuOpen ? (
                <X className="h-6 w-6 text-gray-700 transition-transform duration-300 rotate-90 group-hover:text-blue-600" />
              ) : (
                <Menu className="h-6 w-6 text-gray-700 transition-transform duration-300 group-hover:text-blue-600" />
              )}
              <div className="absolute inset-0 bg-blue-500/10 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300"></div>
            </div>
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200 bg-gradient-to-b from-white via-blue-50/30 to-white backdrop-blur-xl shadow-xl">
            <div className="max-w-7xl mx-auto px-4 py-6">
              <div className="flex flex-col space-y-1">
                <a 
                  href="#features" 
                  className="group relative px-4 py-3 text-gray-800 hover:text-blue-600 transition-all duration-300 font-medium text-base rounded-lg hover:bg-blue-50/50 transform hover:translate-x-1" 
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span className="relative z-10">Features</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/5 to-blue-500/0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </a>
                <a 
                  href="#services" 
                  className="group relative px-4 py-3 text-gray-800 hover:text-blue-600 transition-all duration-300 font-medium text-base rounded-lg hover:bg-blue-50/50 transform hover:translate-x-1" 
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span className="relative z-10">Services</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/5 to-blue-500/0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </a>
                <a 
                  href="#about" 
                  className="group relative px-4 py-3 text-gray-800 hover:text-blue-600 transition-all duration-300 font-medium text-base rounded-lg hover:bg-blue-50/50 transform hover:translate-x-1" 
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span className="relative z-10">About</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/5 to-blue-500/0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </a>
                <a 
                  href="#contact" 
                  className="group relative px-4 py-3 text-gray-800 hover:text-blue-600 transition-all duration-300 font-medium text-base rounded-lg hover:bg-blue-50/50 transform hover:translate-x-1" 
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span className="relative z-10">Contact</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/5 to-blue-500/0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;