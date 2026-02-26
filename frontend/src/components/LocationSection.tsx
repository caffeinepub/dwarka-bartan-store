import { useRef, useEffect, useState } from 'react';
import { Phone, MapPin, Clock, Navigation, Info } from 'lucide-react';

const businessHours = [
  { day: 'Monday – Saturday', hours: '9:00 AM – 8:00 PM', open: true },
  { day: 'Sunday', hours: '9:00 AM – 8:00 PM', open: true, note: 'Closed on the last Sunday of every month' },
];

export function LocationSection() {
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
      { threshold: 0.05 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="location" className="py-20 section-alt">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block text-gold font-semibold text-sm uppercase tracking-widest font-body mb-3">
            Find Us
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Visit Our Store
          </h2>
          <p className="text-muted-foreground font-body max-w-xl mx-auto">
            Located at Akhnoor Palace, Jammu. Easy to find, easy to reach.
          </p>
        </div>

        <div
          ref={ref}
          className="grid lg:grid-cols-2 gap-8 items-start"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'opacity 0.6s ease, transform 0.6s ease',
          }}
        >
          {/* Map */}
          <div className="rounded-2xl overflow-hidden shadow-card h-80 lg:h-96 bg-muted">
            <iframe
              title="Dwarka Bartan Store Location"
              src="https://maps.google.com/maps?q=32.8963,74.7407&t=&z=17&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          {/* Info */}
          <div className="flex flex-col gap-5">
            {/* Address */}
            <div className="bg-card rounded-2xl p-5 shadow-card flex gap-4">
              <div className="w-11 h-11 rounded-xl bg-gold/10 flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5 text-gold" />
              </div>
              <div>
                <h3 className="font-display font-bold text-foreground mb-1">Our Address</h3>
                <p className="text-muted-foreground font-body text-sm leading-relaxed">
                  Dwarka Bartan Store<br />
                  Akhnoor Palace<br />
                  Jammu, Jammu & Kashmir, India
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="bg-card rounded-2xl p-5 shadow-card flex gap-4">
              <div className="w-11 h-11 rounded-xl bg-gold/10 flex items-center justify-center shrink-0">
                <Phone className="w-5 h-5 text-gold" />
              </div>
              <div>
                <h3 className="font-display font-bold text-foreground mb-1">Phone</h3>
                <a
                  href="tel:+919419100159"
                  className="text-gold font-semibold font-body text-base hover:text-gold-dark transition-colors"
                >
                  +91 9419100159
                </a>
                <p className="text-muted-foreground text-xs font-body mt-0.5">Tap to call directly</p>
              </div>
            </div>

            {/* Business Hours */}
            <div className="bg-card rounded-2xl p-5 shadow-card flex gap-4">
              <div className="w-11 h-11 rounded-xl bg-gold/10 flex items-center justify-center shrink-0">
                <Clock className="w-5 h-5 text-gold" />
              </div>
              <div className="flex-1">
                <h3 className="font-display font-bold text-foreground mb-3">Business Hours</h3>
                <div className="space-y-2">
                  {businessHours.map((item) => (
                    <div key={item.day}>
                      <div className="flex items-center justify-between gap-4">
                        <span className="text-foreground text-sm font-body font-medium">{item.day}</span>
                        <span className="text-muted-foreground text-sm font-body">{item.hours}</span>
                      </div>
                      {item.note && (
                        <div className="flex items-center gap-1.5 mt-1.5 bg-gold/8 rounded-lg px-2.5 py-1.5">
                          <Info className="w-3.5 h-3.5 text-gold shrink-0" />
                          <span className="text-gold text-xs font-body font-medium">{item.note}</span>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Directions Button */}
            <a
              href="https://maps.app.goo.gl/oxEd9nPJ4Ty4pYQL7"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2.5 bg-steel-dark hover:bg-steel text-white font-bold py-4 rounded-full transition-all duration-200 font-body"
            >
              <Navigation className="w-5 h-5" />
              Get Directions to Our Store
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
