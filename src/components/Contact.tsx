import React, { useState } from 'react';
import { 
  MessageCircle, 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  Sparkles,
  CheckCircle2
} from 'lucide-react';
import { 
  DISPLAY_PHONE_NUMBER, 
  WHATSAPP_PHONE_NUMBER, 
  createWhatsAppUrl 
} from '../utils/whatsapp';

export const Contact: React.FC = () => {
  const [inquiryType, setInquiryType] = useState('Product Purchase');
  const [customerName, setCustomerName] = useState('');
  const [customerCity, setCustomerCity] = useState('');
  const [message, setMessage] = useState('');

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    let text = `Hello CraftEx Salt, I have an inquiry from your website.`;
    if (customerName.trim()) text += `\nName: ${customerName.trim()}`;
    if (customerCity.trim()) text += `\nCity / Location: ${customerCity.trim()}`;
    text += `\nInquiry Type: ${inquiryType}`;
    if (message.trim()) {
      text += `\nMessage: ${message.trim()}`;
    } else {
      text += `\nPlease share price details and available stock.`;
    }
    const url = createWhatsAppUrl(text);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-white border-t border-[#EDE4DC] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FDF5F3] border border-[#EADBCC] text-xs font-semibold text-[#A04E3E]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Direct Ordering & Support</span>
          </div>

          <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2B231F] tracking-tight">
            Connect With CraftEx Salt
          </h2>

          <p className="font-sans-body text-base sm:text-lg text-[#66554D] leading-relaxed">
            Have questions about product grades, bulk quotes, or custom salt carvings? Our sales team is just a tap away on WhatsApp.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
          
          {/* Left Column: Direct Info & Big WhatsApp Button */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Direct WhatsApp Action Card */}
            <div className="bg-[#FDF5F3] rounded-2xl p-6 sm:p-8 border border-[#EADBCC] space-y-4 shadow-xs">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-[#25D366] flex items-center justify-center text-white shadow-sm">
                  <MessageCircle className="w-6 h-6 fill-white text-transparent" />
                </div>
                <div>
                  <h3 className="font-serif-display text-xl font-bold text-[#2B231F]">
                    Fast WhatsApp Ordering
                  </h3>
                  <p className="text-xs text-[#7A6B63]">
                    Instant response for orders & price requests
                  </p>
                </div>
              </div>

              <p className="text-sm text-[#5C4D44] leading-relaxed">
                Connect directly with our dedicated customer support desk on WhatsApp. We provide instant product guidance, live video previews of lamps and slabs, and customized shipping quotes.
              </p>

              <div className="pt-2">
                <a
                  id="contact-main-whatsapp-cta"
                  href={`https://wa.me/${WHATSAPP_PHONE_NUMBER}?text=Hello%20CraftEx%20Salt%2C%20I%20would%20like%20to%20place%20an%20order%20or%20inquire%20about%20your%20Himalayan%20salt%20products.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl bg-[#25D366] hover:bg-[#1EBE5D] text-white font-bold text-base shadow-sm hover:shadow transition-all active:scale-[0.99]"
                >
                  <MessageCircle className="w-5 h-5 fill-white text-transparent" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>

              <div className="flex items-center justify-center gap-2 text-xs font-medium text-[#7A6B63]">
                <Clock className="w-3.5 h-3.5 text-[#A04E3E]" />
                <span>Available Daily for Fast Assistance</span>
              </div>
            </div>

            {/* Business Contact Details */}
            <div className="bg-[#FAF7F4] rounded-2xl p-6 border border-[#EDE4DC] space-y-4">
              <h4 className="font-serif-display text-base font-bold text-[#2B231F]">
                Business Information
              </h4>

              <div className="space-y-3 text-sm text-[#5C4D44]">
                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-[#A04E3E] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-medium block text-xs text-[#8C7A70]">WhatsApp & Direct Line</span>
                    <a 
                      href={`tel:${DISPLAY_PHONE_NUMBER.replace(/\s+/g, '')}`}
                      className="font-semibold text-[#2B231F] hover:text-[#A04E3E] transition-colors"
                    >
                      {DISPLAY_PHONE_NUMBER}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#A04E3E] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-medium block text-xs text-[#8C7A70]">Extraction & Packing Origin</span>
                    <span>Khewra Salt Mines Corridor, Punjab, Pakistan</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-[#A04E3E] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-medium block text-xs text-[#8C7A70]">Email Inquiries</span>
                    <span>orders@craftexsalt.com</span>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive WhatsApp Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="bg-[#FAF7F4] rounded-2xl p-6 sm:p-8 border border-[#EDE4DC] shadow-xs">
              <div className="mb-6 space-y-1">
                <h3 className="font-serif-display text-2xl font-bold text-[#2B231F]">
                  Send an Inquiry
                </h3>
                <p className="text-xs sm:text-sm text-[#7A6B63]">
                  Fill out your details below and tap "Send via WhatsApp" to instantly launch WhatsApp with your pre-formatted order request.
                </p>
              </div>

              <form onSubmit={handleSendMessage} className="space-y-4">
                {/* Inquiry Type Selection */}
                <div>
                  <label className="block text-xs font-semibold text-[#5C4D44] mb-2">
                    Inquiry Subject
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {[
                      'Product Purchase',
                      'Bulk / Wholesale',
                      'Artisan Lamps',
                      'Cooking Slabs',
                      'Livestock Lick Salt',
                      'Export Order'
                    ].map((type) => (
                      <button
                        key={type}
                        type="button"
                        onClick={() => setInquiryType(type)}
                        className={`text-xs py-2 px-3 rounded-lg border text-center transition-colors cursor-pointer ${
                          inquiryType === type
                            ? 'bg-[#2B231F] text-white border-[#2B231F] font-semibold'
                            : 'bg-white text-[#5C4D44] border-[#EDE4DC] hover:bg-[#F4EFEB]'
                        }`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Name & City fields */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label 
                      htmlFor="contact-name"
                      className="block text-xs font-semibold text-[#5C4D44] mb-1.5"
                    >
                      Your Name
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      placeholder="e.g. Tariq Mahmood"
                      className="w-full text-sm px-3.5 py-2.5 rounded-xl border border-[#EDE4DC] bg-white focus:outline-none focus:border-[#A04E3E] text-[#2B231F]"
                    />
                  </div>

                  <div>
                    <label 
                      htmlFor="contact-city"
                      className="block text-xs font-semibold text-[#5C4D44] mb-1.5"
                    >
                      Your City / Region
                    </label>
                    <input
                      id="contact-city"
                      type="text"
                      value={customerCity}
                      onChange={(e) => setCustomerCity(e.target.value)}
                      placeholder="e.g. Lahore, Karachi, or Dubai"
                      className="w-full text-sm px-3.5 py-2.5 rounded-xl border border-[#EDE4DC] bg-white focus:outline-none focus:border-[#A04E3E] text-[#2B231F]"
                    />
                  </div>
                </div>

                {/* Message Field */}
                <div>
                  <label 
                    htmlFor="contact-message"
                    className="block text-xs font-semibold text-[#5C4D44] mb-1.5"
                  >
                    Your Requirements / Quantity Notes
                  </label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tell us what you are looking for (e.g. 5x Salt Lamps, 50kg edible grain, sample request, or delivery timing)..."
                    className="w-full text-sm px-3.5 py-2.5 rounded-xl border border-[#EDE4DC] bg-white focus:outline-none focus:border-[#A04E3E] text-[#2B231F] resize-none"
                  />
                </div>

                {/* Submit button */}
                <button
                  id="contact-submit-whatsapp-btn"
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#1EBE5D] text-white font-bold text-sm tracking-wide shadow-sm hover:shadow transition-all active:scale-[0.99] cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Inquiry via WhatsApp</span>
                </button>

                <p className="text-center text-[11px] text-[#8C7A70]">
                  Clicking will open WhatsApp with your pre-filled inquiry. No credit card required.
                </p>
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
