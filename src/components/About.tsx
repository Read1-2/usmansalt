import React from 'react';
import { Mountain, CheckCircle2, ShieldCheck, HeartHandshake, Sparkles, MessageCircle } from 'lucide-react';
import { getGeneralInquiryWhatsAppUrl } from '../utils/whatsapp';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-white border-y border-[#EDE4DC] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Visual Storytelling */}
          <div className="lg:col-span-5 space-y-6">
            <div className="relative rounded-2xl overflow-hidden shadow-lg border border-[#EDE4DC] bg-[#FAF7F4]">
              <img
                src="/images/white-himalayan-salt.jpg"
                alt="Pure Natural Himalayan Salt Minerals by CraftEx Salt"
                className="w-full h-80 sm:h-96 object-cover"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2B231F]/80 via-transparent to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
                <span className="text-xs font-bold uppercase tracking-widest text-[#E8A598]">
                  Pakistani Heritage
                </span>
                <p className="font-serif-display text-xl font-bold">
                  Sourced from the Historic Khewra Salt Range
                </p>
                <p className="text-xs text-[#D4C3B8]">
                  Naturally preserved deep within the Earth for millions of years.
                </p>
              </div>
            </div>

            {/* Quick Core Pillars */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-[#FAF7F4] p-4 rounded-xl border border-[#EDE4DC]">
                <Mountain className="w-5 h-5 text-[#A04E3E] mb-2" />
                <h4 className="font-semibold text-sm text-[#2B231F]">100% Raw Mineral</h4>
                <p className="text-xs text-[#7A6B63] mt-1">Free from anti-caking agents, micro-plastics, and bleaches.</p>
              </div>

              <div className="bg-[#FAF7F4] p-4 rounded-xl border border-[#EDE4DC]">
                <ShieldCheck className="w-5 h-5 text-[#A04E3E] mb-2" />
                <h4 className="font-semibold text-sm text-[#2B231F]">Hygienically Sorted</h4>
                <p className="text-xs text-[#7A6B63] mt-1">Carefully graded for culinary, therapeutic, and artisan use.</p>
              </div>
            </div>
          </div>

          {/* Right Column: About Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#FDF5F3] border border-[#EADBCC] text-xs font-semibold text-[#A04E3E]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>About CraftEx Salt</span>
            </div>

            <h2 className="font-serif-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2B231F] leading-tight">
              Rooted in Nature, <br />
              <span className="text-[#A04E3E] italic">Dedicated to Purity</span>
            </h2>

            <p className="font-sans-body text-base text-[#5C4D44] leading-relaxed">
              At <strong>CraftEx Salt</strong>, we are passionate about bringing the purest gifts of Pakistan’s famed Himalayan salt deposits directly to your household, kitchen, and enterprise. 
            </p>

            <p className="font-sans-body text-base text-[#5C4D44] leading-relaxed">
              Formed hundreds of millions of years ago in the subterranean deposits of the Khewra Salt Range, our salt is shielded from contemporary industrial pollution. It retains an extraordinary spectrum of 84+ essential trace elements—including magnesium, potassium, calcium, and iron—which give our crystals their distinctive natural rose and amber hues.
            </p>

            {/* Commitments Checklist */}
            <div className="pt-2 space-y-3">
              {[
                {
                  title: 'Genuine Natural Extraction',
                  desc: 'Mined according to traditional ethical extraction practices, maintaining the natural crystalline matrix.'
                },
                {
                  title: 'Quality-Focused Processing',
                  desc: 'Every batch is inspected for purity, graded by mesh size, and packaged in food-grade hygienic containers.'
                },
                {
                  title: 'Customer Satisfaction First',
                  desc: 'We pride ourselves on transparent communication, direct price quotes, and dedicated post-purchase assistance.'
                },
                {
                  title: 'Reliable WhatsApp Ordering & Delivery',
                  desc: 'Order effortlessly through direct WhatsApp chat with immediate order confirmation and shipping updates.'
                }
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#25D366] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-bold text-[#2B231F]">{item.title}</h4>
                    <p className="text-xs sm:text-sm text-[#7A6B63]">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Direct WhatsApp Callout */}
            <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
              <a
                id="about-talk-to-us-btn"
                href={getGeneralInquiryWhatsAppUrl('About Us Consultation')}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#25D366] hover:bg-[#1EBE5D] text-white font-semibold text-sm transition-all shadow-sm hover:shadow"
              >
                <MessageCircle className="w-4 h-4 fill-white text-transparent" />
                <span>Speak with our Salt Specialists</span>
              </a>

              <div className="flex items-center gap-2 text-xs text-[#7A6B63]">
                <HeartHandshake className="w-4 h-4 text-[#A04E3E]" />
                <span>Proudly serving Pakistan & International clients</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
