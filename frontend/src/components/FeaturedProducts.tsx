import { MessageCircle } from 'lucide-react';
import { useRef, useEffect, useState } from 'react';

const WHATSAPP_NUMBER = '919419100159';

const featuredProducts = [
  {
    id: 1,
    name: 'Steel Tiffin Box',
    description: 'Durable stainless steel tiffin box with leak-proof lid, perfect for school and office. Keeps food fresh and hygienic all day.',
    image: '/assets/generated/product-steel-tiffin-box.dim_600x600.png',
    whatsappMsg: 'Hi! I am interested in the Steel Tiffin Box. Please share more details.',
    badge: 'Best Seller',
  },
  {
    id: 2,
    name: 'Pressure Cooker 5L',
    description: 'Heavy-duty 5-litre pressure cooker with safety valve and ergonomic handles. Ideal for large families and bulk cooking.',
    image: '/assets/generated/product-pressure-cooker-5l.dim_600x600.png',
    whatsappMsg: 'Hi! I am interested in the Pressure Cooker 5L. Please share more details.',
    badge: 'Top Pick',
  },
  {
    id: 3,
    name: 'Non-Stick Kadai',
    description: 'Premium non-stick kadai with heat-resistant handles and even heat distribution. Perfect for frying, sautéing, and everyday cooking.',
    image: '/assets/generated/product-non-stick-kadai.dim_600x600.png',
    whatsappMsg: 'Hi! I am interested in the Non-Stick Kadai. Please share more details.',
    badge: 'Popular',
  },
  {
    id: 4,
    name: 'Steel Glass Set',
    description: 'Elegant set of 6 stainless steel glasses with a mirror finish. Rust-free, unbreakable, and perfect for daily use or gifting.',
    image: '/assets/generated/product-glass-set.dim_400x400.png',
    whatsappMsg: 'Hi! I am interested in the Steel Glass Set. Please share more details.',
    badge: 'Gift Ready',
  },
  {
    id: 5,
    name: 'Casserole Set',
    description: 'Insulated casserole set in 3 sizes — keeps food hot for hours. Stylish design makes it perfect for dining tables and festive occasions.',
    image: '/assets/generated/product-casserole-set.dim_400x400.png',
    whatsappMsg: 'Hi! I am interested in the Casserole Set. Please share more details.',
    badge: 'Festive Special',
  },
  {
    id: 6,
    name: 'Mixing Bowls Set',
    description: 'Set of 5 stainless steel mixing bowls in graduated sizes. Ideal for baking, salads, and food prep — stackable for easy storage.',
    image: '/assets/generated/product-mixing-bowls.dim_400x400.png',
    whatsappMsg: 'Hi! I am interested in the Mixing Bowls Set. Please share more details.',
    badge: 'Kitchen Must-Have',
  },
  {
    id: 7,
    name: 'Vegetable Chopper',
    description: 'Multi-function vegetable chopper with stainless steel blades. Chop, dice, and slice vegetables in seconds — saves time and effort.',
    image: '/assets/generated/product-chopper.dim_400x400.png',
    whatsappMsg: 'Hi! I am interested in the Vegetable Chopper. Please share more details.',
    badge: 'Time Saver',
  },
  {
    id: 8,
    name: 'Stainless Steel Thali',
    description: 'Traditional stainless steel thali with a deep rim and polished finish. Perfect for serving full meals — durable and easy to clean.',
    image: '/assets/generated/product-thali.dim_400x400.png',
    whatsappMsg: 'Hi! I am interested in the Stainless Steel Thali. Please share more details.',
    badge: 'Classic Choice',
  },
];

function useIntersectionObserver(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, isVisible };
}

function FeaturedProductCard({ product, index }: { product: typeof featuredProducts[0]; index: number }) {
  const { ref, isVisible } = useIntersectionObserver(0.1);

  return (
    <div
      ref={ref}
      className="group bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 flex flex-col"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
        transition: `opacity 0.5s ease ${index * 0.08}s, transform 0.5s ease ${index * 0.08}s, box-shadow 0.3s ease`,
      }}
    >
      {/* Image */}
      <div className="relative overflow-hidden aspect-square bg-muted">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        {/* Badge */}
        <span className="absolute top-3 left-3 bg-gold text-steel-dark text-xs font-bold px-2.5 py-1 rounded-full font-body">
          {product.badge}
        </span>
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col flex-1">
        <h3 className="font-display font-bold text-foreground text-base mb-1.5 leading-snug">
          {product.name}
        </h3>
        <p className="text-muted-foreground text-xs leading-relaxed flex-1 mb-4">
          {product.description}
        </p>
        <a
          href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(product.whatsappMsg)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-1.5 w-full py-2 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs transition-colors duration-200"
        >
          <MessageCircle className="w-3.5 h-3.5" />
          Enquire on WhatsApp
        </a>
      </div>
    </div>
  );
}

export function FeaturedProducts() {
  const { ref: sectionRef, isVisible: sectionVisible } = useIntersectionObserver(0.05);

  return (
    <section id="featured-products" className="py-20 bg-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          ref={sectionRef}
          className="text-center mb-12"
          style={{
            opacity: sectionVisible ? 1 : 0,
            transform: sectionVisible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 0.6s ease, transform 0.6s ease',
          }}
        >
          <span className="inline-block text-gold font-semibold text-sm uppercase tracking-widest font-body mb-3">
            Featured Products
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Our Most Popular Items
          </h2>
          <p className="text-muted-foreground font-body max-w-xl mx-auto text-base">
            Hand-picked bestsellers from our store — quality kitchen essentials loved by thousands of families across Jammu & Kashmir.
          </p>
          <div className="mt-4 mx-auto w-20 h-1 rounded-full bg-gold-400" />
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {featuredProducts.map((product, index) => (
            <FeaturedProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
