import { Phone, MessageCircle, MapPin, Shield, Package } from 'lucide-react';

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center hero-gradient pt-20">
      {/* Background overlay pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 py-16 lg:py-24 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <div className="text-white">
            {/* Badges */}
            <div className="flex flex-wrap gap-3 mb-6">
              <span className="inline-flex items-center gap-1.5 bg-gold/20 border border-gold/40 text-gold text-xs font-semibold px-3 py-1.5 rounded-full font-body">
                <Shield className="w-3.5 h-3.5" />
                Trusted from 50+ Years
              </span>
              <span className="inline-flex items-center gap-1.5 bg-white/10 border border-white/20 text-white text-xs font-semibold px-3 py-1.5 rounded-full font-body">
                <Package className="w-3.5 h-3.5" />
                Bulk Orders Available
              </span>
            </div>

            {/* Headline */}
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-4">
              Akhnoor's Most{' '}
              <span className="text-gold">Trusted</span>{' '}
              Utensil Store
            </h1>

            {/* Subheadline */}
            <p className="text-white/80 text-lg sm:text-xl font-body mb-8 leading-relaxed max-w-lg">
              Premium quality kitchen utensils and cookware at affordable prices.
              Visit us Opposite Punjab National Bank, Akhnoor — your one-stop kitchen store in Jammu & Kashmir.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 mb-10">
              <a
                href="tel:+919419100159"
                className="flex items-center justify-center gap-2.5 bg-gold hover:bg-gold-dark text-steel-dark font-bold text-base px-7 py-4 rounded-full transition-all duration-200 shadow-gold animate-pulse-gold font-body"
              >
                <Phone className="w-5 h-5" />
                📞 Call Now
              </a>
              <a
                href="https://wa.me/919419100159"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2.5 bg-green-600 hover:bg-green-700 text-white font-bold text-base px-7 py-4 rounded-full transition-all duration-200 font-body"
              >
                <MessageCircle className="w-5 h-5" />
                💬 WhatsApp Now
              </a>
              <a
                href="https://maps.google.com/?q=Opposite+Punjab+National+Bank+Akhnoor+Jammu+Kashmir+India"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2.5 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-bold text-base px-7 py-4 rounded-full transition-all duration-200 font-body"
              >
                <MapPin className="w-5 h-5" />
                📍 Get Directions
              </a>
            </div>

            {/* Trust stats */}
            <div className="flex flex-wrap gap-6">
              {[
                { value: '20,000+', label: 'Happy Families' },
                { value: '5,000+', label: 'Products' },
                { value: '50+', label: 'Years of Trust' },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="font-display text-2xl font-bold text-gold">{stat.value}</div>
                  <div className="text-white/60 text-xs font-body">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Hero Image */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-lg">
              {/* Decorative ring */}
              <div className="absolute -inset-4 rounded-3xl border-2 border-gold/20 hidden lg:block" />
              <div className="absolute -inset-8 rounded-3xl border border-gold/10 hidden lg:block" />

              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/assets/generated/hero-utensils.dim_1200x600.png"
                  alt="Premium stainless steel utensils, pressure cookers and cookware sets at Dwarka Bartan Store Akhnoor"
                  className="w-full h-auto object-cover"
                  loading="eager"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-steel-dark/40 to-transparent" />

                {/* Floating badge */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm rounded-xl p-3 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gold flex items-center justify-center shrink-0">
                    <Shield className="w-5 h-5 text-steel-dark" />
                  </div>
                  <div>
                    <div className="font-display font-bold text-steel-dark text-sm">Dwarka Bartan Store</div>
                    <div className="text-steel text-xs font-body">Opp. Punjab National Bank, Akhnoor, J&K</div>
                  </div>
                  <div className="ml-auto text-right">
                    <div className="text-gold font-bold text-sm font-body">⭐ 5.0</div>
                    <div className="text-steel text-xs font-body">Trusted Store</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 60L1440 60L1440 20C1200 60 960 0 720 20C480 40 240 0 0 20L0 60Z" fill="oklch(0.99 0 0)" />
        </svg>
      </div>
    </section>
  );
}
