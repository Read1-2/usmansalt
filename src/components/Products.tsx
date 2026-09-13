import React, { useState, useMemo } from 'react';
import { Search, Sparkles, MessageCircle, PackageCheck, SlidersHorizontal } from 'lucide-react';
import { PRODUCTS, CATEGORIES } from '../data/products';
import { Product, ProductCategory } from '../types';
import { ProductCard } from './ProductCard';
import { ProductModal } from './ProductModal';
import { getBulkOrderWhatsAppUrl } from '../utils/whatsapp';

export const Products: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeModalProduct, setActiveModalProduct] = useState<Product | null>(null);

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
      const matchesSearch = 
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.tagline.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <section id="products" className="py-16 md:py-24 bg-[#FAF7F4] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F4EFEB] border border-[#EDE4DC] text-xs font-semibold text-[#A04E3E]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Curated Khewra Salt Collection</span>
          </div>

          <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2B231F] tracking-tight">
            Premium Himalayan Salt Products
          </h2>

          <p className="font-sans-body text-base sm:text-lg text-[#66554D] leading-relaxed">
            Every product is naturally harvested, hand-selected, and packed with care. Click <strong className="text-[#2B231F]">BUY NOW</strong> on any item to order immediately via WhatsApp with automated order details.
          </p>
        </div>

        {/* Filter Controls Bar */}
        <div className="mb-10 space-y-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            
            {/* Category Tabs */}
            <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
              {CATEGORIES.map((cat) => {
                const isSelected = selectedCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    id={`category-filter-${cat.id}`}
                    onClick={() => setSelectedCategory(cat.id as ProductCategory)}
                    className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium whitespace-nowrap transition-all duration-200 cursor-pointer ${
                      isSelected
                        ? 'bg-[#2B231F] text-white shadow-sm font-semibold'
                        : 'bg-white text-[#5C4D44] border border-[#EDE4DC] hover:bg-[#F4EFEB] hover:text-[#2B231F]'
                    }`}
                  >
                    {cat.label}
                  </button>
                );
              })}
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-72">
              <Search className="w-4 h-4 text-[#8C7A70] absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                id="products-search-input"
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search salt products..."
                className="w-full pl-10 pr-4 py-2 rounded-xl bg-white border border-[#EDE4DC] text-sm text-[#2B231F] placeholder-[#8C7A70] focus:outline-none focus:border-[#A04E3E] transition-colors shadow-2xs"
              />
              {searchQuery && (
                <button 
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#8C7A70] hover:text-[#2B231F]"
                >
                  Clear
                </button>
              )}
            </div>

          </div>
        </div>

        {/* Product Grid */}
        {filteredProducts.length > 0 ? (
          <div 
            id="products-grid"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          >
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onOpenDetails={(p) => setActiveModalProduct(p)}
              />
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-2xl border border-[#EDE4DC] p-12 text-center max-w-md mx-auto space-y-3">
            <SlidersHorizontal className="w-10 h-10 text-[#A04E3E] mx-auto opacity-70" />
            <h3 className="font-serif-display text-lg font-bold text-[#2B231F]">
              No products found
            </h3>
            <p className="text-sm text-[#7A6B63]">
              No results matching "{searchQuery}". Try selecting another category or resetting the search.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSearchQuery('');
              }}
              className="inline-flex items-center justify-center px-4 py-2 rounded-lg bg-[#2B231F] text-white text-xs font-semibold cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Wholesale / Bulk Supply Banner */}
        <div className="mt-16 bg-gradient-to-r from-[#2B231F] via-[#3E322B] to-[#2B231F] rounded-2xl p-8 sm:p-10 text-white shadow-xl relative overflow-hidden">
          {/* Soft background glow */}
          <div className="absolute right-0 top-0 w-80 h-80 bg-[#C97D70]/15 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center lg:text-left max-w-2xl">
              <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#E8A598]">
                <PackageCheck className="w-4 h-4" />
                <span>Commercial, Wholesale & Export</span>
              </div>
              <h3 className="font-serif-display text-2xl sm:text-3xl font-bold">
                Need Bulk Salt Supplies or Custom Packaging?
              </h3>
              <p className="text-sm sm:text-base text-[#D4C3B8] font-normal leading-relaxed">
                CraftEx Salt supplies commercial retailers, restaurants, spa resorts, and livestock farms across Pakistan and international markets with bulk 25kg bags, pallets, or container orders.
              </p>
            </div>

            <div className="shrink-0 w-full sm:w-auto">
              <a
                id="wholesale-whatsapp-cta"
                href={getBulkOrderWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#1EBE5D] text-white font-bold text-sm tracking-wide shadow-md hover:shadow-lg transition-all"
              >
                <MessageCircle className="w-5 h-5 fill-white text-transparent" />
                <span>Request Wholesale Quote</span>
              </a>
            </div>
          </div>
        </div>

      </div>

      {/* Product Detail Modal */}
      <ProductModal
        product={activeModalProduct}
        onClose={() => setActiveModalProduct(null)}
      />
    </section>
  );
};
