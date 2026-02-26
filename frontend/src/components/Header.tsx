import { useState, useEffect } from 'react';
import { Menu, Phone, X, ChefHat } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Products', href: '#products' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Contact', href: '#contact' },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-steel-dark shadow-lg py-2'
          : 'bg-steel-dark py-3'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between gap-4">
        {/* Logo */}
        <div className="flex items-center gap-2.5 shrink-0">
          <div className="w-9 h-9 rounded-full bg-gold flex items-center justify-center">
            <ChefHat className="w-5 h-5 text-steel-dark" />
          </div>
          <div>
            <div className="font-display font-bold text-white text-base leading-tight">
              Dwarka Bartan Store
            </div>
            <div className="text-gold text-xs font-body leading-tight hidden sm:block">
              Quality Utensils for Every Home
            </div>
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className="text-sm font-medium text-white/80 hover:text-gold transition-colors font-body"
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* CTA + Mobile Menu */}
        <div className="flex items-center gap-3">
          <a
            href="tel:+919419100159"
            className="hidden sm:flex items-center gap-2 bg-gold hover:bg-gold-dark text-steel-dark font-semibold text-sm px-4 py-2 rounded-full transition-all duration-200 shadow-gold font-body"
          >
            <Phone className="w-4 h-4" />
            Call Now
          </a>

          {/* Mobile hamburger */}
          <Sheet>
            <SheetTrigger asChild>
              <button className="lg:hidden p-2 text-white hover:text-gold transition-colors" aria-label="Open menu">
                <Menu className="w-6 h-6" />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-steel-dark border-steel w-72 p-0">
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between p-5 border-b border-steel">
                  <div className="font-display font-bold text-white text-lg">Menu</div>
                  <SheetClose asChild>
                    <button className="p-1 text-white/70 hover:text-gold transition-colors">
                      <X className="w-5 h-5" />
                    </button>
                  </SheetClose>
                </div>
                <nav className="flex flex-col p-5 gap-1">
                  {navLinks.map((link) => (
                    <SheetClose asChild key={link.href}>
                      <button
                        onClick={() => handleNavClick(link.href)}
                        className="text-left text-white/80 hover:text-gold hover:bg-steel/50 px-4 py-3 rounded-lg transition-colors font-body font-medium text-base"
                      >
                        {link.label}
                      </button>
                    </SheetClose>
                  ))}
                </nav>
                <div className="mt-auto p-5 border-t border-steel">
                  <a
                    href="tel:+919419100159"
                    className="flex items-center justify-center gap-2 bg-gold text-steel-dark font-bold py-3 rounded-full w-full font-body"
                  >
                    <Phone className="w-5 h-5" />
                    +91 9419100159
                  </a>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
