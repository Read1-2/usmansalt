import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, MessageCircle, Sparkles } from 'lucide-react';
import { DISPLAY_PHONE_NUMBER, getGeneralInquiryWhatsAppUrl } from '../utils/whatsapp';

interface HeaderProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ activeSection, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'products', label: 'Products' },
    { id: 'about', label: 'About' },
    { id: 'why-craftex', label: 'Why CraftEx' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleLinkClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header 
      id="main-header"
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#FAF7F4]/95 backdrop-blur-md shadow-sm border-b border-[#EDE4DC] py-3' 
          : 'bg-[#FAF7F4] border-b border-[#F0E8E1] py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Brand Name */}
          <button 
            id="header-brand-logo"
            onClick={() => handleLinkClick('home')}
            className="flex items-center gap-2.5 text-left group focus:outline-none"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#E8A598] via-[#C97D70] to-[#A04E3E] flex items-center justify-center text-white shadow-sm transition-transform duration-300 group-hover:scale-105">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <span className="font-serif-display text-xl sm:text-2xl font-bold tracking-tight text-[#2B231F] group-hover:text-[#A04E3E] transition-colors">
                CraftEx<span className="text-[#A04E3E]">.</span>
              </span>
              <span className="block text-[10px] tracking-[0.2em] uppercase font-semibold text-[#8C7A70]">
                Pure Himalayan Salt
              </span>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  id={`nav-link-${link.id}`}
                  onClick={() => handleLinkClick(link.id)}
                  className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? 'text-[#A04E3E] bg-[#F4EFEB] font-semibold'
                      : 'text-[#5C4D44] hover:text-[#2B231F] hover:bg-[#F4EFEB]/60'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>

          {/* Header Action / WhatsApp CTA */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              id="header-whatsapp-btn"
              href={getGeneralInquiryWhatsAppUrl('Website Header Inquiry')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#25D366] hover:bg-[#1EBE5D] text-white text-sm font-semibold shadow-sm transition-all duration-200 hover:shadow hover:-translate-y-0.5 active:translate-y-0"
            >
              <MessageCircle className="w-4 h-4 fill-white text-transparent" />
              <span>Order on WhatsApp</span>
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex sm:hidden items-center gap-2">
            <a
              id="mobile-quick-wa-btn"
              href={getGeneralInquiryWhatsAppUrl('Mobile Header Quick CTA')}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Order on WhatsApp"
              className="p-2.5 rounded-lg bg-[#25D366] text-white transition-colors"
            >
              <MessageCircle className="w-4 h-4 fill-white text-transparent" />
            </a>
            <button
              id="mobile-menu-toggle"
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-lg text-[#5C4D44] hover:text-[#2B231F] hover:bg-[#F4EFEB] focus:outline-none focus:ring-2 focus:ring-[#A04E3E]/30"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div 
          id="mobile-nav-drawer"
          className="sm:hidden bg-[#FAF7F4] border-b border-[#EDE4DC] px-4 pt-3 pb-6 space-y-3 shadow-lg animate-in slide-in-from-top-2 duration-200"
        >
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  id={`mobile-nav-link-${link.id}`}
                  onClick={() => handleLinkClick(link.id)}
                  className={`text-left px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                    isActive
                      ? 'text-[#A04E3E] bg-[#F4EFEB] font-semibold'
                      : 'text-[#5C4D44] hover:bg-[#F4EFEB] hover:text-[#2B231F]'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </div>

          <div className="pt-3 border-t border-[#EDE4DC]/80 space-y-2">
            <a
              id="mobile-drawer-whatsapp-btn"
              href={getGeneralInquiryWhatsAppUrl('Mobile Drawer Menu')}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-[#25D366] text-white font-semibold text-base shadow-sm"
            >
              <MessageCircle className="w-5 h-5 fill-white text-transparent" />
              <span>Order on WhatsApp</span>
            </a>

            <div className="flex items-center justify-center gap-1.5 text-xs text-[#7A6B63] pt-1">
              <Phone className="w-3.5 h-3.5" />
              <span>Direct Sales: {DISPLAY_PHONE_NUMBER}</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
