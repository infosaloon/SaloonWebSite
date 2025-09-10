import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';
import WhatsAppButton from './components/WhatsAppButton';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-blue-50">
      <Header />
      <Hero />
      <Features />
      <Services />
      <About />
      <Contact />
      <WhatsAppButton />
      <Footer />
    </div>
  );
}

export default App;