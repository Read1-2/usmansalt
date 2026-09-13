import React from 'react';
import { MessageCircle, ArrowRight, Sparkles, CheckCircle2, Shield } from 'lucide-react';
import { getGeneralInquiryWhatsAppUrl } from '../utils/whatsapp';
import { BRAND_STATS } from '../data/products';

interface HeroProps {
  onShopNowClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onShopNowClick }) => {
  return (
    <section 
      id="home"
      className="relative overflow-hidden bg-gradient-to-b from-[#FAF7F4] via-[#FDF5F3] to-[#FAF7F4] pt-8 pb-16 md:pt-14 md:pb-24 border-b border-[#EDE4DC]"
    >
      {/* Decorative ambient background glows */}
      <div 
        className="absolute top-0 right-0 -mr-24 -mt-24 w-96 h-96 rounded-full bg-[#E8A598]/15 blur-3xl pointer-events-none"
        aria-hidden="true" 
      />
      <div 
        className="absolute bottom-0 left-0 -ml-24 -mb-24 w-96 h-96 rounded-full bg-[#D4A373]/10 blur-3xl pointer-events-none"
        aria-hidden="true" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Copy & CTAs */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-center lg:text-left">
            {/* Origin Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F4EFEB] border border-[#E3D7CE] text-xs font-semibold text-[#8E4135] shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-[#A04E3E]" />
              <span>Authentic Khewra Mineral Heritage • Pakistan</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#2B231F] leading-[1.15] tracking-tight">
              Pure Himalayan Salt, <br className="hidden sm:inline" />
              <span className="text-[#A04E3E] italic">Crafted for Excellence</span>
            </h1>

            {/* Description */}
            <p className="font-sans-body text-base sm:text-lg text-[#5C4D44] max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Experience the unmatched mineral richness and pristine clarity of authentic Himalayan salt. Directly extracted from ancient Pakistani rock deposits, hand-selected, and crafted for gourmet cooking, artisan living, wellness, and livestock vitality.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-2">
              {/* Primary CTA: Shop Now */}
              <button
                id="hero-shop-now-btn"
                onClick={onShopNowClick}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-[#2B231F] hover:bg-[#1C1714] text-white font-semibold text-base transition-all duration-200 shadow-sm hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                <span>Shop Now</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              {/* Secondary CTA: Order on WhatsApp */}
              <a
                id="hero-whatsapp-btn"
                href={getGeneralInquiryWhatsAppUrl('Hero Section Quick Order')}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#1EBE5D] text-white font-semibold text-base transition-all duration-200 shadow-sm hover:shadow-md hover:-translate-y-0.5 active:translate-y-0"
              >
                <MessageCircle className="w-5 h-5 fill-white text-transparent" />
                <span>Order on WhatsApp</span>
              </a>
            </div>

            {/* Trust Highlights */}
            <div className="pt-4 border-t border-[#EDE4DC]/80 grid grid-cols-2 sm:grid-cols-4 gap-4 text-left">
              {BRAND_STATS.map((stat, idx) => (
                <div key={idx} className="bg-white/70 p-3 rounded-xl border border-[#EDE4DC] shadow-2xs">
                  <div className="font-serif-display text-xl sm:text-2xl font-bold text-[#A04E3E]">
                    {stat.value}
                  </div>
                  <div className="text-xs font-medium text-[#7A6B63]">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* Right Column: Hero Visual Feature */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Decorative Frame with Salt Hue */}
              <div className="relative rounded-2xl overflow-hidden shadow-xl border-4 border-white bg-white group">
                <img
                  id="hero-main-image"
                  src="/images/hero-salt.jpg"
                  alt="CraftEx Premium Himalayan Pink Salt Crystals and Wooden Spoon"
                  className="w-full h-80 sm:h-96 lg:h-[440px] object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                  loading="eager"
                />

                {/* Gradient overlay on bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#2B231F]/70 via-transparent to-transparent opacity-80" />

                {/* Floating Card inside visual */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-white/95 backdrop-blur-md border border-[#EDE4DC] shadow-md flex items-center justify-between">
                  <div className="space-y-0.5">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#A04E3E]">
                      Direct From Khewra Mines
                    </span>
                    <h3 className="text-sm font-semibold text-[#2B231F]">
                      Natural Himalayan Pink Salt
                    </h3>
                  </div>
                  <div className="flex items-center gap-1 text-xs font-medium text-[#2E7D32] bg-[#E8F5E9] px-2.5 py-1 rounded-full">
                    <Shield className="w-3.5 h-3.5" />
                    <span>Pure & Tested</span>
                  </div>
                </div>
              </div>

              {/* Floating Quality Tag */}
              <div className="hidden sm:flex absolute -top-4 -left-4 items-center gap-2 bg-white px-4 py-2.5 rounded-xl border border-[#EDE4DC] shadow-md">
                <CheckCircle2 className="w-5 h-5 text-[#25D366]" />
                <div className="text-xs">
                  <p className="font-semibold text-[#2B231F]">Export Grade Quality</p>
                  <p className="text-[#8C7A70]">Retail & Bulk Supply</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
