import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Products } from './components/Products';
import { About } from './components/About';
import { WhyUs } from './components/WhyUs';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');

  // Smooth scroll handler
  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'products', 'about', 'why-craftex', 'contact'];
      const scrollPosition = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF7F4] text-[#2B231F] font-sans-body selection:bg-[#E8A598]/30 selection:text-[#A04E3E]">
      {/* Sticky Header with WhatsApp CTA and Mobile Drawer */}
      <Header 
        activeSection={activeSection} 
        onNavigate={handleNavigate} 
      />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero 
          onShopNowClick={() => handleNavigate('products')} 
        />

        {/* Products Section with BUY NOW WhatsApp Buttons */}
        <Products />

        {/* About CraftEx Salt Section */}
        <About />

        {/* Why Choose CraftEx Feature Cards */}
        <WhyUs />

        {/* Contact & WhatsApp Ordering Section */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer 
        onNavigate={handleNavigate} 
      />

      {/* Floating WhatsApp Action Button */}
      <FloatingWhatsApp />
    </div>
  );
}
