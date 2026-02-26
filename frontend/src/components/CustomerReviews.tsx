import { useRef, useEffect, useState } from 'react';
import { Star, Quote } from 'lucide-react';

const reviews = [
  {
    name: 'Rajesh K.',
    location: 'Akhnoor',
    review: 'Best utensil shop in Akhnoor with reasonable prices. I have been buying from Dwarka Bartan Store for years and never disappointed!',
    rating: 5,
    initials: 'RK',
  },
  {
    name: 'Sunita D.',
    location: 'Akhnoor',
    review: 'Amazing quality stainless steel products. The pressure cooker I bought here is still working perfectly after 3 years. Highly recommended!',
    rating: 5,
    initials: 'SD',
  },
  {
    name: 'Mohd. Arif',
    location: 'Akhnoor',
    review: 'Very polite owner and great service. They helped me choose the right cookware set for my family. Will definitely come back!',
    rating: 5,
    initials: 'MA',
  },
  {
    name: 'Priya S.',
    location: 'Akhnoor',
    review: 'My go-to kitchen store for everything. From basic utensils to premium cookware, they have it all at the best prices in Akhnoor.',
    rating: 5,
    initials: 'PS',
  },
  {
    name: 'Anil V.',
    location: 'Akhnoor',
    review: 'Great variety and fast service! Bought a complete kitchen set for my new home. The quality is excellent and prices are very fair.',
    rating: 5,
    initials: 'AV',
  },
];

function StarRating({ rating, animate }: { rating: number; animate: boolean }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${i < rating ? 'fill-gold text-gold' : 'text-muted'}`}
          style={
            animate
              ? {
                  animation: `starFill 0.4s ease-out ${i * 0.08}s both`,
                }
              : {}
          }
        />
      ))}
    </div>
  );
}

function ReviewCard({ review, index }: { review: (typeof reviews)[0]; index: number }) {
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
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="bg-card rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col gap-4"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
        transition: `opacity 0.5s ease ${index * 0.1}s, transform 0.5s ease ${index * 0.1}s, box-shadow 0.3s ease`,
      }}
    >
      {/* Quote icon */}
      <div className="w-8 h-8 rounded-full bg-gold/10 flex items-center justify-center">
        <Quote className="w-4 h-4 text-gold" />
      </div>

      {/* Stars */}
      <StarRating rating={review.rating} animate={isVisible} />

      {/* Review text */}
      <p className="text-foreground font-body text-sm leading-relaxed flex-1">
        "{review.review}"
      </p>

      {/* Reviewer */}
      <div className="flex items-center gap-3 pt-2 border-t border-border">
        <div className="w-9 h-9 rounded-full bg-gold flex items-center justify-center text-steel-dark font-bold text-xs font-body">
          {review.initials}
        </div>
        <div>
          <div className="font-semibold text-foreground text-sm font-body">{review.name}</div>
          <div className="text-muted-foreground text-xs font-body">{review.location}</div>
        </div>
      </div>
    </div>
  );
}

export function CustomerReviews() {
  const headerRef = useRef<HTMLDivElement>(null);
  const [headerVisible, setHeaderVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHeaderVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (headerRef.current) observer.observe(headerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="reviews" className="py-20 bg-background">
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
            Customer Reviews
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
            What Our Customers Say
          </h2>
          <p className="text-muted-foreground font-body max-w-xl mx-auto">
            Trusted by over 1000 families in Akhnoor and Jammu & Kashmir. Here's what they say about us.
          </p>
          {/* Overall rating */}
          <div className="flex items-center justify-center gap-2 mt-4">
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-gold text-gold" />
              ))}
            </div>
            <span className="font-bold text-foreground font-body">5.0</span>
            <span className="text-muted-foreground text-sm font-body">· 1000+ happy customers</span>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <ReviewCard key={review.name} review={review} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
