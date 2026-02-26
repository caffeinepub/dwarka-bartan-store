import { useRef, useEffect, useState } from 'react';
import { ShieldCheck, BadgeIndianRupee, LayoutGrid, Smile, Users } from 'lucide-react';

const reasons = [
  {
    icon: ShieldCheck,
    title: 'Genuine & Durable Products',
    description: 'We stock only authentic, high-quality brands. Every product is tested for durability and safety before it reaches your kitchen.',
  },
  {
    icon: BadgeIndianRupee,
    title: 'Best Prices in Akhnoor',
    description: 'Competitive pricing on all kitchen utensils and cookware. We match or beat any local price — guaranteed value for your money.',
  },
  {
    icon: LayoutGrid,
    title: 'Wide Variety Available',
    description: 'From basic kitchen tools to premium cookware sets, we carry 500+ products across all categories under one roof.',
  },
  {
    icon: Smile,
    title: 'Friendly Customer Service',
    description: 'Our knowledgeable staff helps you find exactly what you need. We take pride in making every customer feel welcome.',
  },
  {
    icon: Users,
    title: 'Trusted by 1000+ Families',
    description: 'Over a thousand families in Akhnoor and surrounding areas trust Dwarka Bartan Store for their kitchen needs.',
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

export function WhyChooseUs() {
  const { ref: headerRef, isVisible: headerVisible } = useIntersectionObserver(0.1);

  return (
    <section id="why-us" className="py-20 section-alt">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div
          ref={headerRef}
          className="text-center mb-14"
          style={{
            opacity: headerVisible ? 1 : 0,
            transform: headerVisible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 0.6s ease, transform 0.6s ease',
          }}
        >
          <span className="inline-block text-gold font-semibold text-sm uppercase tracking-widest font-body mb-3">
            Why Choose Us
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Why Choose Dwarka Bartan Store?
          </h2>
          <p className="text-muted-foreground font-body max-w-xl mx-auto">
            Akhnoor's most trusted kitchen utensil store — delivering quality, value, and service since years.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <ReasonCard key={reason.title} reason={reason} Icon={Icon} index={index} />
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="mt-14 rounded-2xl gold-gradient p-8 text-center text-steel-dark">
          <h3 className="font-display text-2xl font-bold mb-2">
            Call Now for Today's Best Deals!
          </h3>
          <p className="font-body mb-5 opacity-80">
            Get exclusive prices on bulk orders and festive purchases.
          </p>
          <a
            href="tel:+919419100159"
            className="inline-flex items-center gap-2 bg-steel-dark text-white font-bold px-8 py-3 rounded-full hover:bg-steel transition-colors font-body"
          >
            📞 +91 9419100159
          </a>
        </div>
      </div>
    </section>
  );
}

function ReasonCard({
  reason,
  Icon,
  index,
}: {
  reason: { title: string; description: string };
  Icon: React.ElementType;
  index: number;
}) {
  const { ref, isVisible } = useIntersectionObserver(0.1);

  return (
    <div
      ref={ref}
      className="bg-card rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 flex gap-4"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
        transition: `opacity 0.5s ease ${index * 0.1}s, transform 0.5s ease ${index * 0.1}s, box-shadow 0.3s ease`,
      }}
    >
      <div className="shrink-0 w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center">
        <Icon className="w-6 h-6 text-gold" />
      </div>
      <div>
        <h3 className="font-display font-bold text-foreground text-base mb-1.5">{reason.title}</h3>
        <p className="text-muted-foreground text-sm font-body leading-relaxed">{reason.description}</p>
      </div>
    </div>
  );
}
