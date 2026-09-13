import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { getGeneralInquiryWhatsAppUrl, DISPLAY_PHONE_NUMBER } from '../utils/whatsapp';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div 
      id="floating-whatsapp-container"
      className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2"
    >
      {/* Friendly Tooltip Bubble */}
      {showTooltip && (
        <div 
          id="floating-whatsapp-tooltip"
          className="relative bg-white text-[#2B231F] text-xs font-semibold px-3.5 py-2 rounded-xl shadow-lg border border-[#EDE4DC] flex items-center gap-2 animate-in fade-in slide-in-from-bottom-2 duration-300 max-w-[200px]"
        >
          <span>Need help or want to order? Tap to chat!</span>
          <button
            type="button"
            onClick={() => setShowTooltip(false)}
            className="text-[#8C7A70] hover:text-[#2B231F] p-0.5"
            aria-label="Dismiss tooltip"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* WhatsApp Floating Circle Button */}
      <a
        id="floating-whatsapp-btn"
        href={getGeneralInquiryWhatsAppUrl('Floating WhatsApp Button')}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Chat with CraftEx Salt on WhatsApp: ${DISPLAY_PHONE_NUMBER}`}
        className="relative group w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#1EBE5D] text-white flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 active:scale-95"
      >
        {/* Pulse radar wave */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-30 animate-ping pointer-events-none" />

        <MessageCircle className="w-7 h-7 fill-white text-transparent relative z-10" />

        {/* Small Active Badge Dot */}
        <span className="absolute top-0 right-0 w-3.5 h-3.5 bg-[#4CAF50] border-2 border-white rounded-full z-20" />
      </a>
    </div>
  );
};
