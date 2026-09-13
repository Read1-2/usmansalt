import React, { useState } from 'react';
import { X, MessageCircle, Check, MapPin, Sparkles, Package } from 'lucide-react';
import { Product } from '../types';
import { getProductWhatsAppUrl } from '../utils/whatsapp';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({ product, onClose }) => {
  const [quantityNote, setQuantityNote] = useState('1 Pack / Piece');
  const [cityNote, setCityNote] = useState('');

  if (!product) return null;

  const handleCustomOrder = () => {
    let customDetails = `Quantity required: ${quantityNote}`;
    if (cityNote.trim()) {
      customDetails += ` • Delivery Destination: ${cityNote.trim()}`;
    }
    const url = getProductWhatsAppUrl(product.name, customDetails);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div 
      id="product-modal-backdrop"
      className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        id="product-modal-content"
        className="relative bg-white w-full max-w-2xl rounded-2xl shadow-2xl border border-[#EDE4DC] overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          id="close-product-modal-btn"
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-white/90 text-[#5C4D44] hover:text-[#2B231F] hover:bg-white shadow-sm transition-colors cursor-pointer"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Product Image Stage */}
          <div className="bg-[#FAF7F4] p-6 flex flex-col items-center justify-center border-b md:border-b-0 md:border-r border-[#EDE4DC]">
            <div className="relative w-full h-64 sm:h-72 flex items-center justify-center">
              <img
                src={product.image}
                alt={product.name}
                className="max-h-full max-w-full object-contain drop-shadow-md"
                referrerPolicy="no-referrer"
              />
            </div>
            {product.origin && (
              <div className="mt-3 inline-flex items-center gap-1.5 text-xs text-[#7A6B63] bg-white px-3 py-1 rounded-full border border-[#EDE4DC]">
                <MapPin className="w-3.5 h-3.5 text-[#A04E3E]" />
                <span>{product.origin}</span>
              </div>
            )}
          </div>

          {/* Product Details & WhatsApp customization */}
          <div className="p-6 flex flex-col justify-between space-y-5">
            <div className="space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-[#A04E3E] inline-flex items-center gap-1">
                <Sparkles className="w-3 h-3" />
                {product.categoryLabel}
              </span>

              <h2 className="font-serif-display text-xl sm:text-2xl font-bold text-[#2B231F] leading-tight">
                {product.name}
              </h2>

              <p className="text-sm text-[#5C4D44] leading-relaxed">
                {product.description}
              </p>

              {/* Price */}
              <div className="bg-[#FAF7F4] p-3 rounded-xl border border-[#EDE4DC] flex items-baseline justify-between">
                <span className="text-xs font-medium text-[#7A6B63]">Direct Price</span>
                <div className="text-right">
                  <span className="font-serif-display text-xl font-bold text-[#2B231F]">
                    {product.priceDisplay}
                  </span>
                  {product.priceNote && (
                    <span className="block text-[11px] text-[#8C7A70]">
                      {product.priceNote}
                    </span>
                  )}
                </div>
              </div>

              {/* Specifications List */}
              <div className="space-y-1.5 pt-1">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#7A6B63]">
                  Product Highlights
                </h4>
                <ul className="space-y-1 text-xs text-[#5C4D44]">
                  {product.specifications.map((spec, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-[#25D366] shrink-0 mt-0.5" />
                      <span>{spec}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Quick Inquiry Options */}
              <div className="pt-2 space-y-2">
                <label className="block text-xs font-semibold text-[#5C4D44]">
                  Estimated Order / Quantity
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {['1-5 Units', 'Bulk / Wholesale', 'Container / Pallet'].map((opt) => (
                    <button
                      key={opt}
                      type="button"
                      onClick={() => setQuantityNote(opt)}
                      className={`text-[11px] py-1.5 px-2 rounded-lg border text-center transition-colors cursor-pointer ${
                        quantityNote === opt
                          ? 'border-[#A04E3E] bg-[#FDF5F3] text-[#A04E3E] font-semibold'
                          : 'border-[#EDE4DC] text-[#7A6B63] hover:bg-[#FAF7F4]'
                      }`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>

                <input
                  type="text"
                  placeholder="Delivery City (e.g. Lahore, Karachi, or Overseas)"
                  value={cityNote}
                  onChange={(e) => setCityNote(e.target.value)}
                  className="w-full text-xs px-3 py-2 rounded-lg border border-[#EDE4DC] focus:outline-none focus:border-[#A04E3E] bg-white text-[#2B231F]"
                />
              </div>
            </div>

            {/* Direct WhatsApp CTA */}
            <div className="pt-2">
              <button
                id="modal-order-whatsapp-btn"
                type="button"
                onClick={handleCustomOrder}
                className="w-full flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#1EBE5D] text-white font-bold text-sm tracking-wide shadow-md transition-all active:scale-[0.99] cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 fill-white text-transparent" />
                <span>BUY NOW VIA WHATSAPP</span>
              </button>
              <p className="text-center text-[11px] text-[#8C7A70] mt-1.5">
                Instant connection with CraftEx sales desk (+92 301 5792132)
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
