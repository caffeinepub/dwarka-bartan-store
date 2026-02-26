import { Phone, MapPin, MessageCircle, ChefHat, Heart } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Products', href: '#products' },
  { label: 'Why Choose Us', href: '#why-us' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Contact', href: '#contact' },
];

const categories = [
  'Stainless Steel Utensils',
  'Pressure Cookers',
  'Cookware Sets',
  'Kitchen Tools',
  'Plastic Household Items',
  'Gift Items',
];

export function Footer() {
  const year = new Date().getFullYear();
  const appId = encodeURIComponent(typeof window !== 'undefined' ? window.location.hostname : 'dwarka-bartan-store');

  const handleNavClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-steel-dark text-white">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 py-14">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-full bg-gold flex items-center justify-center">
                <ChefHat className="w-5 h-5 text-steel-dark" />
              </div>
              <div>
                <div className="font-display font-bold text-white text-base leading-tight">Dwarka Bartan Store</div>
                <div className="text-gold text-xs font-body">Quality Utensils for Every Home</div>
              </div>
            </div>
            <p className="text-white/60 text-sm font-body leading-relaxed mb-5">
              Jammu's most trusted kitchen utensil and household store. Serving families with quality products for 50+ years.
            </p>
            <div className="flex flex-col gap-2">
              <a href="tel:+919419100159" className="flex items-center gap-2 text-gold hover:text-gold-light transition-colors text-sm font-body">
                <Phone className="w-4 h-4" />
                +91 9419100159
              </a>
              <div className="flex items-start gap-2 text-white/60 text-sm font-body">
                <MapPin className="w-4 h-4 shrink-0 mt-0.5" />
                Akhnoor Palace, Jammu, J&K
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="text-white/60 hover:text-gold transition-colors text-sm font-body"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-display font-bold text-white mb-4">Our Products</h4>
            <ul className="space-y-2">
              {categories.map((cat) => (
                <li key={cat}>
                  <button
                    onClick={() => handleNavClick('#products')}
                    className="text-white/60 hover:text-gold transition-colors text-sm font-body text-left"
                  >
                    {cat}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div>
            <h4 className="font-display font-bold text-white mb-4">Get In Touch</h4>
            <p className="text-white/60 text-sm font-body mb-4">
              Call or WhatsApp us for enquiries, bulk orders, and best deals.
            </p>
            <div className="flex flex-col gap-3">
              <a
                href="tel:+919419100159"
                className="flex items-center justify-center gap-2 bg-gold hover:bg-gold-dark text-steel-dark font-bold py-2.5 rounded-full text-sm transition-all font-body"
              >
                <Phone className="w-4 h-4" />
                Call Now
              </a>
              <a
                href="https://wa.me/919419100159"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold py-2.5 rounded-full text-sm transition-all font-body"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-center">
          <p className="text-white/50 text-xs font-body">
            © {year} Dwarka Bartan Store, Akhnoor Palace, Jammu. All rights reserved.
          </p>
          <p className="text-white/40 text-xs font-body flex items-center gap-1">
            Built with <Heart className="w-3 h-3 text-gold fill-gold" /> using{' '}
            <a
              href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold hover:text-gold-light transition-colors"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
