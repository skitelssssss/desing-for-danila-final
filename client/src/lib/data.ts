// ============================================================
// LUXE BEAUTY — Shared Data Constants
// ============================================================

export interface Product {
  id: string;
  name: string;
  category: string;
  skinType: string[];
  price: number;
  originalPrice?: number;
  description: string;
  shortDescription: string;
  image: string;
  badge?: string;
  rating: number;
  reviews: number;
  ingredients: string;
  howToUse: string;
}

export interface Service {
  id: string;
  name: string;
  icon: string;
  duration: string;
  price: number;
  description: string;
  longDescription: string;
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  date: string;
  text: string;
  verified: boolean;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
}

// Product images — using Unsplash for product cards
const PRODUCT_IMAGES = [
  'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=600&q=80',
  'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=600&q=80',
  'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=600&q=80',
  'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=600&q=80',
  'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=600&q=80',
  'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=600&q=80',
  'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=600&q=80',
  'https://images.unsplash.com/photo-1612817288484-6f916006741a?w=600&q=80',
];

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Golden Elixir Serum',
    category: 'Serums',
    skinType: ['All', 'Dry', 'Normal'],
    price: 285,
    originalPrice: 320,
    description: 'A transformative 24K gold-infused serum that visibly firms, brightens, and rejuvenates the complexion. Formulated with rare botanical extracts and nano-gold particles that penetrate deep into the dermis.',
    shortDescription: '24K gold-infused anti-aging serum',
    image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663629565245/cKdWGd7QzMhdUfJyAzyKXk/product-serum-CoHqKA58tVQHUXn7kBzdG5.webp',
    badge: 'Bestseller',
    rating: 4.9,
    reviews: 247,
    ingredients: 'Aqua, Glycerin, Niacinamide, 24K Gold Particles, Hyaluronic Acid, Retinol 0.3%, Rosa Damascena Extract, Vitamin C (Ascorbyl Glucoside), Peptide Complex, Squalane.',
    howToUse: 'Apply 3-4 drops to cleansed skin morning and evening. Gently press into skin using upward motions. Follow with moisturizer and SPF in the morning.',
  },
  {
    id: '2',
    name: 'Caviar Moisture Cream',
    category: 'Moisturizers',
    skinType: ['Dry', 'Mature'],
    price: 195,
    description: 'Ultra-rich caviar extract cream delivering intense hydration and visible plumping. A luxurious ritual for skin that demands the finest.',
    shortDescription: 'Caviar extract deep moisturizer',
    image: PRODUCT_IMAGES[0],
    badge: 'New',
    rating: 4.8,
    reviews: 183,
    ingredients: 'Aqua, Caviar Extract, Shea Butter, Ceramide Complex, Hyaluronic Acid, Peptides, Vitamin E.',
    howToUse: 'Apply a small amount to face and neck morning and evening after serum. Massage gently until absorbed.',
  },
  {
    id: '3',
    name: 'Rose Micellar Cleanser',
    category: 'Cleansers',
    skinType: ['All', 'Sensitive'],
    price: 89,
    description: 'A gentle yet thorough micellar cleansing water infused with Bulgarian rose water. Removes makeup and impurities while maintaining the skin\'s natural balance.',
    shortDescription: 'Bulgarian rose water micellar cleanser',
    image: PRODUCT_IMAGES[1],
    rating: 4.7,
    reviews: 312,
    ingredients: 'Aqua, Rosa Damascena Flower Water, Micellar Complex, Glycerin, Aloe Vera Extract, Chamomile Extract.',
    howToUse: 'Saturate a cotton pad and gently sweep across face. No rinsing required. Use morning and evening.',
  },
  {
    id: '4',
    name: 'Platinum Eye Complex',
    category: 'Eye Care',
    skinType: ['All', 'Mature'],
    price: 165,
    description: 'Targeted platinum peptide eye treatment that visibly reduces dark circles, puffiness, and fine lines. The delicate eye area deserves exceptional care.',
    shortDescription: 'Platinum peptide anti-aging eye cream',
    image: PRODUCT_IMAGES[2],
    badge: 'Award Winner',
    rating: 4.9,
    reviews: 156,
    ingredients: 'Aqua, Platinum Peptides, Caffeine, Retinol 0.1%, Vitamin K, Hyaluronic Acid, Collagen.',
    howToUse: 'Gently tap a small amount around the eye area morning and evening. Avoid direct contact with eyes.',
  },
  {
    id: '5',
    name: 'Velvet Exfoliating Mask',
    category: 'Masks',
    skinType: ['Normal', 'Oily', 'Combination'],
    price: 125,
    description: 'A luxurious resurfacing mask combining AHAs, BHAs, and kaolin clay to reveal luminous, refined skin. Weekly ritual for a flawless complexion.',
    shortDescription: 'AHA/BHA resurfacing clay mask',
    image: PRODUCT_IMAGES[3],
    rating: 4.6,
    reviews: 98,
    ingredients: 'Kaolin Clay, Glycolic Acid 8%, Salicylic Acid 1%, Niacinamide, Rose Hip Oil, Vitamin C.',
    howToUse: 'Apply a thin layer to cleansed skin. Leave for 10-15 minutes. Rinse thoroughly. Use 1-2 times per week.',
  },
  {
    id: '6',
    name: 'Satin Body Oil',
    category: 'Body',
    skinType: ['All', 'Dry'],
    price: 98,
    description: 'A silky blend of precious oils — argan, rosehip, and marula — that transforms the skin into a luminous, satin canvas.',
    shortDescription: 'Precious multi-oil body treatment',
    image: PRODUCT_IMAGES[4],
    rating: 4.8,
    reviews: 201,
    ingredients: 'Argan Oil, Rosehip Seed Oil, Marula Oil, Jojoba Oil, Vitamin E, Jasmine Essential Oil.',
    howToUse: 'Apply to damp skin after bathing. Massage in circular motions until absorbed. Use daily for best results.',
  },
  {
    id: '7',
    name: 'Noir Perfecting Toner',
    category: 'Toners',
    skinType: ['All', 'Oily', 'Combination'],
    price: 75,
    description: 'A balancing essence toner that preps skin for optimal absorption of subsequent treatments. Formulated with fermented extracts and hyaluronic acid.',
    shortDescription: 'Fermented essence balancing toner',
    image: PRODUCT_IMAGES[5],
    rating: 4.7,
    reviews: 134,
    ingredients: 'Fermented Galactomyces, Hyaluronic Acid, Niacinamide, Witch Hazel, Centella Asiatica.',
    howToUse: 'After cleansing, apply to face using a cotton pad or hands. Pat gently until absorbed.',
  },
  {
    id: '8',
    name: 'Lumière SPF 50 Shield',
    category: 'Sun Protection',
    skinType: ['All'],
    price: 115,
    description: 'Invisible broad-spectrum protection with a luminous finish. Enriched with antioxidants that defend against UV damage and environmental aggressors.',
    shortDescription: 'Invisible broad-spectrum SPF 50',
    image: PRODUCT_IMAGES[6],
    badge: 'Essential',
    rating: 4.8,
    reviews: 289,
    ingredients: 'Zinc Oxide 10%, Titanium Dioxide 5%, Vitamin C, Vitamin E, Niacinamide, Hyaluronic Acid.',
    howToUse: 'Apply generously as the last step of your morning routine. Reapply every 2 hours when exposed to sun.',
  },
];

export const SERVICES: Service[] = [
  {
    id: 'facial',
    name: 'Signature Facial',
    icon: '✦',
    duration: '90 min',
    price: 380,
    description: 'Our flagship treatment tailored to your unique skin profile.',
    longDescription: 'A bespoke facial experience that begins with a comprehensive skin analysis. Using our proprietary protocol and the finest active ingredients, this treatment deeply cleanses, exfoliates, and nourishes your skin. Results are visible from the first session.',
  },
  {
    id: 'analysis',
    name: 'Skin Analysis',
    icon: '◈',
    duration: '45 min',
    price: 150,
    description: 'Advanced diagnostic consultation with our skin specialists.',
    longDescription: 'Utilizing cutting-edge skin analysis technology, our specialists assess your skin\'s hydration levels, elasticity, pigmentation, and pore structure. Receive a personalized skincare protocol and product recommendations.',
  },
  {
    id: 'body',
    name: 'Body Ritual',
    icon: '◇',
    duration: '120 min',
    price: 450,
    description: 'Full-body treatment with precious oils and exfoliation.',
    longDescription: 'An immersive body experience combining dry brushing, a mineral-rich scrub, and a full-body massage with our signature precious oil blend. Skin is left silky, luminous, and deeply nourished.',
  },
  {
    id: 'consultation',
    name: 'Expert Consultation',
    icon: '◉',
    duration: '60 min',
    price: 200,
    description: 'One-on-one session with our lead aesthetician.',
    longDescription: 'A focused consultation with our lead aesthetician to address specific skin concerns, review your current routine, and develop a long-term skincare strategy. Includes sample products to trial.',
  },
  {
    id: 'peeling',
    name: 'Chemical Peeling',
    icon: '◈',
    duration: '60 min',
    price: 320,
    description: 'Professional-grade resurfacing for luminous skin renewal.',
    longDescription: 'Medical-grade chemical peeling using a blend of AHAs, BHAs, and PHAs customized to your skin type and concern. Addresses hyperpigmentation, fine lines, and uneven texture with minimal downtime.',
  },
  {
    id: 'massage',
    name: 'Facial Massage',
    icon: '◇',
    duration: '60 min',
    price: 250,
    description: 'Sculpting lymphatic drainage and contouring massage.',
    longDescription: 'A specialized facial massage combining Kobido lifting techniques with lymphatic drainage. Reduces puffiness, defines facial contours, and promotes circulation for a naturally lifted appearance.',
  },
];

export const TESTIMONIALS = [
  {
    id: '1',
    author: 'Sophia L.',
    role: 'Regular Client',
    rating: 5,
    text: 'LUXE BEAUTY has completely transformed my skincare routine. The Golden Elixir Serum is unlike anything I\'ve tried — my skin has never looked more luminous. The entire experience, from the website to the packaging, feels truly premium.',
  },
  {
    id: '2',
    author: 'Isabelle M.',
    role: 'Beauty Editor',
    rating: 5,
    text: 'As someone who reviews beauty products professionally, I rarely find a brand that delivers on every promise. LUXE BEAUTY is the exception. The formulations are exceptional, and the Signature Facial is the best treatment I\'ve had in years.',
  },
  {
    id: '3',
    author: 'Charlotte R.',
    role: 'Loyal Customer',
    rating: 5,
    text: 'The attention to detail is extraordinary. From the moment you walk through the door to the follow-up consultation, every touchpoint reflects genuine expertise and care. My skin has never been in better condition.',
  },
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: '1',
    name: 'Dr. Élise Moreau',
    role: 'Founder & Chief Aesthetician',
    bio: 'With 20 years of expertise in dermatology and luxury skincare, Dr. Moreau founded LUXE BEAUTY with a singular vision: to merge scientific precision with the art of beauty.',
    image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&q=80',
  },
  {
    id: '2',
    name: 'Camille Dubois',
    role: 'Head of Product Development',
    bio: 'A cosmetic chemist with a passion for rare botanical ingredients, Camille leads our formulation team in creating treatments that deliver measurable, visible results.',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80',
  },
  {
    id: '3',
    name: 'Natasha Volkov',
    role: 'Senior Skin Specialist',
    bio: 'Trained in Paris and Tokyo, Natasha brings a global perspective to skincare. Her signature facial technique has earned her a devoted clientele across three continents.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80',
  },
];

export const BRAND_TIMELINE = [
  { year: '2008', event: 'Founded in Paris by Dr. Élise Moreau with a small atelier and a revolutionary serum formula.' },
  { year: '2012', event: 'Launched the first LUXE BEAUTY flagship boutique on Rue du Faubourg Saint-Honoré.' },
  { year: '2015', event: 'Introduced the Signature Facial protocol, now recognized as the gold standard in luxury skincare.' },
  { year: '2018', event: 'Expanded internationally with boutiques in London, Dubai, and New York.' },
  { year: '2021', event: 'Launched the digital experience, bringing LUXE BEAUTY\'s expertise to clients worldwide.' },
  { year: '2024', event: 'Introduced AI-powered skin analysis and personalized treatment protocols.' },
];

export const INSTAGRAM_IMAGES = [
  'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400&q=80',
  'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=400&q=80',
  'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=400&q=80',
  'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=400&q=80',
  'https://images.unsplash.com/photo-1519415510236-718bdfcd89c8?w=400&q=80',
  'https://images.unsplash.com/photo-1571290274554-6a2eaa771e5f?w=400&q=80',
];
