import React from 'react';
import { Sparkles, MessageCircle, Phone, Mail, MapPin, ArrowUp } from 'lucide-react';
import { DISPLAY_PHONE_NUMBER, getGeneralInquiryWhatsAppUrl } from '../utils/whatsapp';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="main-footer" className="bg-[#2B231F] text-[#EADBCC] pt-16 pb-12 border-t border-[#3E322B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-[#423630]">
          
          {/* Brand Info */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#E8A598] via-[#C97D70] to-[#A04E3E] flex items-center justify-center text-white shadow-xs">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <span className="font-serif-display text-2xl font-bold tracking-tight text-white">
                  CraftEx<span className="text-[#E8A598]">.</span>
                </span>
                <span className="block text-[10px] tracking-[0.2em] uppercase font-semibold text-[#B39F94]">
                  Pure Himalayan Salt
                </span>
              </div>
            </div>

            <p className="text-sm text-[#B39F94] leading-relaxed font-normal">
              Pakistan’s premier source for authentic Khewra Himalayan salt products. Delivering premium edible granules, artisan hand-carved salt lamps, gourmet cooking slabs, agricultural animal licks, and therapeutic spa minerals worldwide.
            </p>

            <div className="pt-2">
              <a
                id="footer-whatsapp-button"
                href={getGeneralInquiryWhatsAppUrl('Footer Inquiry')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#25D366] hover:bg-[#1EBE5D] text-white text-xs sm:text-sm font-semibold shadow-xs transition-colors"
              >
                <MessageCircle className="w-4 h-4 fill-white text-transparent" />
                <span>Chat on WhatsApp ({DISPLAY_PHONE_NUMBER})</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-serif-display text-base font-bold text-white tracking-wide">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm text-[#B39F94]">
              {[
                { id: 'home', label: 'Home' },
                { id: 'products', label: 'All Products' },
                { id: 'about', label: 'About CraftEx' },
                { id: 'why-craftex', label: 'Why Choose Us' },
                { id: 'contact', label: 'Contact & Orders' },
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => onNavigate(link.id)}
                    className="hover:text-white transition-colors cursor-pointer text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Product Categories */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif-display text-base font-bold text-white tracking-wide">
              Salt Categories
            </h4>
            <ul className="space-y-2 text-sm text-[#B39F94]">
              <li>Pink Himalayan Edible Salt</li>
              <li>Handcrafted Ambient Salt Lamps</li>
              <li>BBQ & Gourmet Searing Slabs</li>
              <li>Livestock Animal Lick Salt with Rope</li>
              <li>Rare White Khewra Mineral Salt</li>
              <li>Therapeutic Bath & Spa Soaks</li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif-display text-base font-bold text-white tracking-wide">
              Direct Sales
            </h4>
            <div className="space-y-2.5 text-sm text-[#B39F94]">
              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-[#E8A598] shrink-0 mt-0.5" />
                <span>WhatsApp: {DISPLAY_PHONE_NUMBER}</span>
              </div>
              <div className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-[#E8A598] shrink-0 mt-0.5" />
                <span>orders@craftexsalt.com</span>
              </div>
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#E8A598] shrink-0 mt-0.5" />
                <span>Khewra Salt Mines, Punjab, Pakistan</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8E7C72]">
          <p>© {new Date().getFullYear()} CraftEx Salt. All rights reserved. Premium Himalayan Salt.</p>
          
          <div className="flex items-center gap-4">
            <span>Natural • Unrefined • Khewra Origin</span>
            <button
              id="back-to-top-btn"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1 text-[#B39F94] hover:text-white transition-colors cursor-pointer"
              aria-label="Scroll back to top"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
