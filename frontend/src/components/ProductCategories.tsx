import { useRef, useEffect, useState } from 'react';
import { MessageCircle } from 'lucide-react';

interface ProductCard {
  title: string;
  description: string;
  image: string;
  waMessage: string;
  alt: string;
}

const products: ProductCard[] = [
  {
    title: 'Stainless Steel Utensils',
    description: 'Premium grade stainless steel bowls, plates, glasses, and serving sets. Durable, hygienic, and rust-free for everyday use.',
    image: '/assets/generated/category-stainless-steel-utensils.dim_600x400.png',
    waMessage: 'Hi! I am interested in Stainless Steel Utensils at Dwarka Bartan Store, Akhnoor. Please share details and pricing.',
    alt: 'Stainless steel utensils shop Akhnoor - bowls, plates, glasses',
  },
  {
    title: 'Pressure Cookers',
    description: 'Top-brand pressure cookers for fast, safe, and energy-efficient cooking. Available in all sizes for every family.',
    image: '/assets/generated/category-pressure-cookers.dim_600x400.png',
    waMessage: 'Hi! I am looking for Pressure Cookers at Dwarka Bartan Store, Akhnoor. Please share available sizes and prices.',
    alt: 'Pressure cooker shop in Akhnoor - all sizes available',
  },
  {
    title: 'Cookware Sets',
    description: 'Complete non-stick and stainless cookware sets for modern kitchens. Perfect for gifting and home use.',
    image: '/assets/generated/category-cookware-sets.dim_600x400.png',
    waMessage: 'Hi! I want to enquire about Cookware Sets at Dwarka Bartan Store, Akhnoor. Please share options and prices.',
    alt: 'Cookware sets kitchen utensils shop Akhnoor',
  },
  {
    title: 'Kitchen Tools',
    description: 'Spatulas, ladles, whisks, peelers, and more. Everything you need to make cooking easier and more enjoyable.',
    image: '/assets/generated/category-kitchen-tools.dim_600x400.png',
    waMessage: 'Hi! I need Kitchen Tools from Dwarka Bartan Store, Akhnoor. Please share what is available.',
    alt: 'Kitchen tools and accessories shop Akhnoor',
  },
  {
    title: 'Plastic Household Items',
    description: 'Colorful, durable plastic storage containers, buckets, and household essentials at the best prices in Akhnoor.',
    image: '/assets/generated/category-plastic-household.dim_600x400.png',
    waMessage: 'Hi! I am interested in Plastic Household Items at Dwarka Bartan Store, Akhnoor. Please share details.',
    alt: 'Plastic household items store Akhnoor',
  },
  {
    title: 'Gift Items',
    description: 'Beautifully packaged kitchen gift sets for weddings, festivals, and special occasions. Impress your loved ones.',
    image: '/assets/generated/category-gift-items.dim_600x400.png',
    waMessage: 'Hi! I am looking for Gift Items / Kitchen Gift Sets at Dwarka Bartan Store, Akhnoor. Please share options.',
    alt: 'Kitchen gift sets and gift items Akhnoor',
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

function ProductCard({ product, index }: { product: ProductCard; index: number }) {
  const { ref, isVisible } = useIntersectionObserver(0.1);

  return (
    <div
      ref={ref}
      className="product-card group bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
        transition: `opacity 0.5s ease ${index * 0.1}s, transform 0.5s ease ${index * 0.1}s, box-shadow 0.3s ease, translate 0.3s ease`,
      }}
    >
      {/* Image */}
      <div className="overflow-hidden h-48 sm:h-52 bg-muted">
        <img
          src={product.image}
          alt={product.alt}
          className="product-img w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="font-display font-bold text-foreground text-lg mb-2">{product.title}</h3>
        <p className="text-muted-foreground text-sm font-body leading-relaxed mb-4">{product.description}</p>
        <a
          href={`https://wa.me/919419100159?text=${encodeURIComponent(product.waMessage)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 w-full bg-gold hover:bg-gold-dark text-steel-dark font-semibold text-sm py-2.5 rounded-full transition-all duration-200 font-body"
        >
          <MessageCircle className="w-4 h-4" />
          Enquire Now
        </a>
      </div>
    </div>
  );
}

export function ProductCategories() {
  const { ref: sectionRef, isVisible: sectionVisible } = useIntersectionObserver(0.05);

  return (
    <section id="products" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div
          ref={sectionRef}
          className="text-center mb-14"
          style={{
            opacity: sectionVisible ? 1 : 0,
            transform: sectionVisible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 0.6s ease, transform 0.6s ease',
          }}
        >
          <span className="inline-block text-gold font-semibold text-sm uppercase tracking-widest font-body mb-3">
            Our Products
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Shop by Category
          </h2>
          <p className="text-muted-foreground font-body max-w-xl mx-auto text-base">
            Explore our wide range of kitchen utensils, cookware, and household essentials — all available at Dwarka Bartan Store, Main Market, Akhnoor.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {products.map((product, index) => (
            <ProductCard key={product.title} product={product} index={index} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground font-body mb-4">
            Looking for something specific? We have 500+ products in store!
          </p>
          <a
            href="https://wa.me/919419100159?text=Hi!%20I%20want%20to%20know%20about%20your%20complete%20product%20range%20at%20Dwarka%20Bartan%20Store%2C%20Akhnoor."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-steel-dark hover:bg-steel text-white font-semibold px-8 py-3 rounded-full transition-all duration-200 font-body"
          >
            <MessageCircle className="w-5 h-5" />
            Ask About More Products
          </a>
        </div>
      </div>
    </section>
  );
}
