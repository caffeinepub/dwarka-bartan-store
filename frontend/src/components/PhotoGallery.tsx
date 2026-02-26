import { useRef, useEffect, useState } from 'react';
import { Camera, MessageCircle } from 'lucide-react';

const galleryItems = [
  {
    id: 1,
    src: '/assets/IMG-20260226-WA0019.jpg',
    alt: 'Dwarka Bartan Store - Kitchen utensils and cookware display',
    caption: 'Our Store Collection',
  },
  {
    id: 2,
    src: '/assets/IMG-20260226-WA0020.jpg',
    alt: 'Dwarka Bartan Store - Premium stainless steel products',
    caption: 'Stainless Steel Range',
  },
  {
    id: 3,
    src: '/assets/IMG-20260226-WA0021.jpg',
    alt: 'Dwarka Bartan Store - Cookware and kitchen tools',
    caption: 'Cookware & Tools',
  },
  {
    id: 4,
    src: '/assets/IMG-20260226-WA0022.jpg',
    alt: 'Dwarka Bartan Store - Household products and essentials',
    caption: 'Household Essentials',
  },
  {
    id: 5,
    src: '/assets/IMG-20260226-WA0026.jpg',
    alt: 'Dwarka Bartan Store - Gift sets and festive items',
    caption: 'Gift Sets & Festive Items',
  },
  {
    id: 6,
    src: '/assets/IMG-20260226-WA0027.jpg',
    alt: 'Dwarka Bartan Store - Pressure cookers and casseroles',
    caption: 'Pressure Cookers & Casseroles',
  },
  {
    id: 7,
    src: '/assets/generated/gallery-store-interior.dim_800x600.png',
    alt: 'Dwarka Bartan Store interior - wide range of kitchen products',
    caption: 'Store Interior',
  },
  {
    id: 8,
    src: '/assets/generated/gallery-cookware-display.dim_800x600.png',
    alt: 'Cookware display at Dwarka Bartan Store Akhnoor',
    caption: 'Cookware Display',
  },
  {
    id: 9,
    src: '/assets/generated/gallery-pressure-cookers.dim_800x600.png',
    alt: 'Pressure cookers collection at Dwarka Bartan Store',
    caption: 'Pressure Cookers',
  },
  {
    id: 10,
    src: '/assets/generated/gallery-gift-sets.dim_800x600.png',
    alt: 'Gift hampers and kitchen gift sets at Dwarka Bartan Store',
    caption: 'Gift Hampers',
  },
  {
    id: 11,
    src: '/assets/generated/gallery-plastic-items.dim_800x600.png',
    alt: 'Plastic household items at Dwarka Bartan Store Akhnoor',
    caption: 'Plastic Household Items',
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

function GalleryItem({ item, index }: { item: typeof galleryItems[0]; index: number }) {
  const { ref, isVisible } = useIntersectionObserver(0.05);
  const [imgError, setImgError] = useState(false);

  return (
    <div
      ref={ref}
      className="group relative overflow-hidden rounded-2xl bg-muted shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 cursor-pointer"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
        transition: `opacity 0.5s ease ${index * 0.07}s, transform 0.5s ease ${index * 0.07}s, box-shadow 0.3s ease`,
      }}
    >
      <div className="aspect-[4/3] overflow-hidden">
        {!imgError ? (
          <img
            src={item.src}
            alt={item.alt}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            loading="lazy"
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-muted">
            <Camera className="w-10 h-10 text-muted-foreground/40" />
          </div>
        )}
      </div>
      {/* Caption overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-steel-dark/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
        <p className="text-white font-semibold text-sm font-body px-4 pb-4">{item.caption}</p>
      </div>
      {/* Always-visible caption on mobile */}
      <div className="sm:hidden bg-steel-dark/70 px-3 py-2">
        <p className="text-white text-xs font-body font-medium">{item.caption}</p>
      </div>
    </div>
  );
}

export function PhotoGallery() {
  const { ref: sectionRef, isVisible: sectionVisible } = useIntersectionObserver(0.05);

  return (
    <section id="gallery" className="py-20 bg-background">
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
            Photo Gallery
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
            See Our Products & Store
          </h2>
          <p className="text-muted-foreground font-body max-w-xl mx-auto text-base">
            Take a look at our wide collection of kitchen utensils, cookware, and household essentials available at Dwarka Bartan Store, Akhnoor.
          </p>
          <div className="mt-4 mx-auto w-20 h-1 rounded-full bg-gold-400" />
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
          {galleryItems.map((item, index) => (
            <GalleryItem key={item.id} item={item} index={index} />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground font-body mb-4 text-sm">
            Want to see more? Visit our store or contact us on WhatsApp!
          </p>
          <a
            href="https://wa.me/919419100159?text=Hi!%20I%20saw%20your%20gallery%20and%20would%20like%20to%20know%20more%20about%20your%20products%20at%20Dwarka%20Bartan%20Store%2C%20Akhnoor."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-8 py-3 rounded-full transition-all duration-200 font-body"
          >
            <MessageCircle className="w-5 h-5" />
            Chat With Us on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
