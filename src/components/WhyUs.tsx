import React from 'react';
import { 
  Sparkles, 
  ShieldCheck, 
  MessageSquare, 
  Clock, 
  PackageCheck, 
  HeartHandshake,
  Check
} from 'lucide-react';
import { WHY_CHOOSE_ITEMS } from '../data/products';

export const WhyUs: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-[#A04E3E]" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-[#A04E3E]" />;
      case 'MessageSquare':
        return <MessageSquare className="w-6 h-6 text-[#25D366]" />;
      case 'Clock':
        return <Clock className="w-6 h-6 text-[#A04E3E]" />;
      case 'PackageCheck':
        return <PackageCheck className="w-6 h-6 text-[#A04E3E]" />;
      case 'HeartHandshake':
        return <HeartHandshake className="w-6 h-6 text-[#A04E3E]" />;
      default:
        return <Check className="w-6 h-6 text-[#A04E3E]" />;
    }
  };

  return (
    <section id="why-craftex" className="py-16 md:py-24 bg-[#FAF7F4] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F4EFEB] border border-[#EDE4DC] text-xs font-semibold text-[#A04E3E]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>The CraftEx Advantage</span>
          </div>

          <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2B231F] tracking-tight">
            Why Choose CraftEx Salt?
          </h2>

          <p className="font-sans-body text-base sm:text-lg text-[#66554D] leading-relaxed">
            We bridge the gap between pristine natural mining reserves and discerning buyers, pairing artisan-grade mineral salt with instant WhatsApp ordering and responsive customer care.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {WHY_CHOOSE_ITEMS.map((item) => (
            <div 
              key={item.id}
              id={`why-card-${item.id}`}
              className="bg-white rounded-2xl p-6 sm:p-7 border border-[#EDE4DC] shadow-xs hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
            >
              {/* Icon Holder */}
              <div className="w-12 h-12 rounded-xl bg-[#FDF5F3] border border-[#F0E2DE] flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                {getIcon(item.iconName)}
              </div>

              {/* Title */}
              <h3 className="font-serif-display text-lg sm:text-xl font-bold text-[#2B231F] mb-2 group-hover:text-[#A04E3E] transition-colors">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-[#66554D] leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Trace Mineral Banner */}
        <div className="mt-14 bg-[#F4EFEB] rounded-2xl p-6 sm:p-8 border border-[#E3D7CE] flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="font-serif-display text-lg sm:text-xl font-bold text-[#2B231F]">
              Naturally Enriched With 84+ Trace Minerals
            </h4>
            <p className="text-sm text-[#66554D]">
              Containing iron, magnesium, potassium, and calcium essential for optimum electrolyte balance and deep culinary umami.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <span className="px-3.5 py-1.5 rounded-lg bg-white border border-[#EDE4DC] text-xs font-semibold text-[#2B231F]">
              Unrefined
            </span>
            <span className="px-3.5 py-1.5 rounded-lg bg-white border border-[#EDE4DC] text-xs font-semibold text-[#2B231F]">
              Non-Iodized
            </span>
            <span className="px-3.5 py-1.5 rounded-lg bg-white border border-[#EDE4DC] text-xs font-semibold text-[#2B231F]">
              100% Raw
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};
