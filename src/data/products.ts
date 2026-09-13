import { Product } from '../types';

/**
 * CraftEx Salt Product Catalog
 * 
 * Easy-to-edit data structure:
 * To add or edit a product, simply update the fields below.
 * You can replace images with your own files in /public/images/ or direct image URLs.
 */
export const PRODUCTS: Product[] = [
  {
    id: 'pink-coarse-salt',
    name: 'Premium Pink Himalayan Salt (Coarse Crystals)',
    category: 'edible',
    categoryLabel: 'Edible Salt',
    tagline: '100% Raw, Unrefined Food Grade Khewra Salt',
    description: 'Pure, sun-dried natural pink salt crystals mined directly from ancient Khewra deposits. Naturally enriched with 84+ trace minerals including potassium, magnesium, and calcium for pure culinary flavor.',
    priceDisplay: 'PKR 450',
    priceNote: 'Per 1kg pack • Bulk discounts available',
    specifications: [
      'Food Grade Purity Certified',
      'Grain: 2-5mm Coarse Crystals',
      'Rich in 84+ Trace Minerals',
      'Zero additives, anti-caking agents, or bleach'
    ],
    image: '/images/pink-coarse-salt.jpg',
    badge: 'Bestseller',
    origin: 'Khewra Salt Mine, Punjab, Pakistan'
  },
  {
    id: 'handcrafted-salt-lamp',
    name: 'Artisan Handcrafted Himalayan Salt Lamp',
    category: 'wellness',
    categoryLabel: 'Wellness & Home',
    tagline: 'Natural Amber Glow with Carved Rosewood Base',
    description: 'Hand-sculpted from authentic pink crystal rock salt. Emits a soothing amber glow that creates a tranquil ambience, naturally releases negative ions, and elevates any interior space.',
    priceDisplay: 'PKR 2,400',
    priceNote: 'Complete with certified cord, bulb & wood base',
    specifications: [
      'Weight: 3-5 kg Natural Cut',
      'Hand-carved premium wooden base',
      'UL-listed dimmer power cord included',
      'Natural hygroscopic air freshener'
    ],
    image: '/images/salt-lamp.jpg',
    badge: 'Artisan Grade',
    origin: 'Handcrafted in Pakistan'
  },
  {
    id: 'cooking-searing-slabs',
    name: 'Himalayan Salt Cooking & Searing Slabs',
    category: 'gourmet',
    categoryLabel: 'Gourmet Cooking',
    tagline: 'For BBQ, Stovetop Searing, & Gourmet Serving',
    description: 'Dense, natural salt blocks cut directly from ancient mineral veins. Heat them on your grill or stove to sear meats, seafood, and vegetables with subtle mineral flavor, or chill for sashimi & cheese platters.',
    priceDisplay: 'PKR 1,850',
    priceNote: 'Standard 8x8x2 inch gourmet slab',
    specifications: [
      'Dimensions: 8" x 8" x 1.5" or 8" x 12" x 2"',
      'High thermal resistance up to 500°F (260°C)',
      'Natural antimicrobial surface',
      'Reusable for dozens of cooks'
    ],
    image: '/images/cooking-salt-tile.jpg',
    badge: "Chef's Choice",
    origin: 'Khewra Salt Range, Pakistan'
  },
  {
    id: 'animal-lick-salt',
    name: 'Natural Himalayan Animal Lick Salt with Rope',
    category: 'livestock',
    categoryLabel: 'Livestock & Agriculture',
    tagline: 'Essential Mineral Block for Horses, Cattle & Livestock',
    description: 'Rock-hard, weather-resistant natural salt blocks with a heavy-duty natural hanging rope. Provides essential sodium and vital trace minerals required by horses, dairy cows, sheep, and goats.',
    priceDisplay: 'PKR 850',
    priceNote: '3-4 kg hanging block with durable jute rope',
    specifications: [
      'Weight: 3.5 - 5 kg block with center hole',
      'Weather-resistant, won’t dissolve rapidly in rain',
      'Zero chemical additives or synthetic binders',
      'Improves coat, digestion, and livestock vitality'
    ],
    image: '/images/animal-lick-salt.jpg',
    badge: 'High Mineral',
    origin: 'Punjab Salt Range, Pakistan'
  },
  {
    id: 'white-himalayan-salt',
    name: 'Pure White Himalayan Mineral Crystal Salt',
    category: 'edible',
    categoryLabel: 'Edible Salt',
    tagline: 'Ultra-Pure White Vein Khewra Salt',
    description: 'Selected from the rarest pristine white veins of the Khewra Salt Mine. Offers a crisp, clean salinity without iron coloration—ideal for gourmet baking, curing, and everyday refined table seasoning.',
    priceDisplay: 'PKR 550',
    priceNote: 'Per 1kg bag • Available in Fine & Medium Grain',
    specifications: [
      'Rarest Khewra white mineral vein',
      '99%+ Pure natural sodium chloride',
      'Micro-filtered & hygienically packed',
      'Naturally gluten-free & non-GMO'
    ],
    image: '/images/white-himalayan-salt.jpg',
    badge: 'Rare Selection',
    origin: 'Khewra Salt Mine, Pakistan'
  },
  {
    id: 'bath-spa-salt',
    name: 'Therapeutic Himalayan Mineral Bath & Spa Salt',
    category: 'bath',
    categoryLabel: 'Bath & Spa',
    tagline: 'Detoxifying Mineral Crystals for Soaking & Exfoliation',
    description: 'Fine and medium natural pink mineral crystals formulated for restorative bath soaks, foot soaks, and DIY exfoliating scrubs. Helps soothe tired muscles, hydrate skin, and melt away daily tension.',
    priceDisplay: 'PKR 950',
    priceNote: '1kg luxury spa pouch / sealed jar',
    specifications: [
      '100% Pure unrefined Himalayan crystals',
      'Perfect for bathtubs, jacuzzi, and foot basins',
      'Helps ease muscle fatigue and joint stiffness',
      'Naturally soft pink hue with zero added dyes'
    ],
    image: '/images/bath-spa-salt.jpg',
    badge: 'Spa & Wellness',
    origin: 'Pakistan Salt Corridor'
  }
];

export const CATEGORIES = [
  { id: 'all', label: 'All Products' },
  { id: 'edible', label: 'Edible Salt' },
  { id: 'gourmet', label: 'Cooking Slabs' },
  { id: 'wellness', label: 'Salt Lamps' },
  { id: 'livestock', label: 'Animal Licks' },
  { id: 'bath', label: 'Bath & Spa' }
];

export const WHY_CHOOSE_ITEMS = [
  {
    id: '1',
    title: '100% Natural Himalayan Salt',
    description: 'Sourced straight from ancient unpolluted sea deposits in Pakistan’s Khewra Salt Range, free from modern environmental contaminants.',
    iconName: 'Sparkles'
  },
  {
    id: '2',
    title: 'Carefully Selected Quality',
    description: 'Every batch of edible granules, cooking tiles, and artisan lamps undergoes meticulous hand-sorting and hygienic processing.',
    iconName: 'ShieldCheck'
  },
  {
    id: '3',
    title: 'Direct WhatsApp Ordering',
    description: 'No complicated carts or slow checkouts. Click Buy Now to connect directly with our sales team for rapid order fulfillment.',
    iconName: 'MessageSquare'
  },
  {
    id: '4',
    title: 'Fast Order Assistance',
    description: 'Prompt personal assistance for retail buyers, bulk wholesalers, and export inquiries with direct shipment tracking.',
    iconName: 'Clock'
  },
  {
    id: '5',
    title: 'Retail & Bulk Supply',
    description: 'From single jars for home kitchens to commercial containers and wholesale pallets for retailers, we cater to all order volumes.',
    iconName: 'PackageCheck'
  },
  {
    id: '6',
    title: 'Reliable Customer Service',
    description: 'Dedicated Pakistani brand committed to transparent pricing, honest mineral authenticity, and customer delight.',
    iconName: 'HeartHandshake'
  }
];

export const BRAND_STATS = [
  { value: '100%', label: 'Natural & Pure' },
  { value: '84+', label: 'Trace Minerals' },
  { value: 'Direct', label: 'Khewra Origin' },
  { value: '24/7', label: 'WhatsApp Support' }
];
