import React, { useState } from 'react';
import { MessageCircle, Info, Sparkles, Check } from 'lucide-react';
import { Product } from '../types';
import { getProductWhatsAppUrl } from '../utils/whatsapp';

interface ProductCardProps {
  product: Product;
  onOpenDetails: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onOpenDetails }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const buyNowWhatsAppUrl = getProductWhatsAppUrl(product.name);

  return (
    <div 
      id={`product-card-${product.id}`}
      className="group bg-white rounded-2xl border border-[#EDE4DC] overflow-hidden flex flex-col transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-[#D6C4B8]"
    >
      {/* Product Image Area */}
      <div className="relative w-full h-64 sm:h-72 bg-[#FBF8F5] overflow-hidden p-3 flex items-center justify-center border-b border-[#F0E8E1]">
        {/* Badge */}
        {product.badge && (
          <div className="absolute top-3 left-3 z-10">
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold bg-white/95 text-[#A04E3E] border border-[#EADBCC] shadow-2xs">
              <Sparkles className="w-3 h-3 text-[#A04E3E]" />
              {product.badge}
            </span>
          </div>
        )}

        {/* Category Pill */}
        <div className="absolute top-3 right-3 z-10">
          <span className="text-[11px] font-medium text-[#7A6B63] bg-white/90 px-2.5 py-0.5 rounded-full border border-[#EDE4DC]">
            {product.categoryLabel}
          </span>
        </div>

        {/* Product Image with smooth hover zoom & object-fit contain */}
        <img
          id={`product-img-${product.id}`}
          src={product.image}
          alt={product.name}
          loading="lazy"
          referrerPolicy="no-referrer"
          onLoad={() => setImageLoaded(true)}
          className={`w-full h-full object-contain transition-transform duration-500 group-hover:scale-105 ${
            imageLoaded ? 'opacity-100' : 'opacity-0'
          }`}
        />

        {/* Quick Details Trigger Overlay Button */}
        <button
          type="button"
          onClick={() => onOpenDetails(product)}
          id={`product-quick-view-${product.id}`}
          className="absolute bottom-3 right-3 z-10 opacity-90 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-200 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/95 text-[#2B231F] text-xs font-medium border border-[#EDE4DC] shadow-sm hover:bg-white cursor-pointer"
        >
          <Info className="w-3.5 h-3.5 text-[#A04E3E]" />
          <span>View Specs</span>
        </button>
      </div>

      {/* Product Content */}
      <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
        <div className="space-y-2">
          {/* Tagline */}
          <p className="text-xs font-semibold uppercase tracking-wider text-[#A04E3E]">
            {product.tagline}
          </p>

          {/* Product Name */}
          <h3 className="font-serif-display text-lg sm:text-xl font-bold text-[#2B231F] leading-snug group-hover:text-[#A04E3E] transition-colors">
            {product.name}
          </h3>

          {/* Short Description */}
          <p className="text-sm text-[#66554D] line-clamp-2 leading-relaxed">
            {product.description}
          </p>

          {/* Quick Specifications bullet list */}
          <ul className="pt-2 space-y-1 text-xs text-[#7A6B63]">
            {product.specifications.slice(0, 2).map((spec, i) => (
              <li key={i} className="flex items-start gap-1.5">
                <Check className="w-3.5 h-3.5 text-[#25D366] shrink-0 mt-0.5" />
                <span>{spec}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Price & Buy Now Area */}
        <div className="pt-3 border-t border-[#F0E8E1] space-y-3">
          <div className="flex items-baseline justify-between">
            <div>
              <span className="text-xs text-[#8C7A70] font-medium block">Price / Estimate</span>
              <span className="text-xl font-bold text-[#2B231F] font-serif-display">
                {product.priceDisplay}
              </span>
            </div>
            {product.priceNote && (
              <span className="text-[11px] text-[#8C7A70] text-right max-w-[150px] leading-tight">
                {product.priceNote}
              </span>
            )}
          </div>

          {/* BUY NOW Button - Directly Underneath details */}
          <a
            id={`buy-now-btn-${product.id}`}
            href={buyNowWhatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#1EBE5D] text-white font-bold text-sm tracking-wide shadow-sm hover:shadow-md transition-all duration-200 group/btn active:scale-[0.99]"
            aria-label={`Buy Now: Order ${product.name} on WhatsApp`}
          >
            <MessageCircle className="w-4 h-4 fill-white text-transparent group-hover/btn:scale-110 transition-transform" />
            <span className="uppercase">BUY NOW</span>
          </a>
        </div>
      </div>
    </div>
  );
};
