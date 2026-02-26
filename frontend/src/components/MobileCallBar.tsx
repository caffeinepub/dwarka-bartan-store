import { Phone } from 'lucide-react';

export function MobileCallBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden">
      <a
        href="tel:+919419100159"
        className="flex items-center justify-center gap-3 bg-gold text-steel-dark font-bold py-4 w-full font-body text-base shadow-lg"
      >
        <Phone className="w-5 h-5" />
        📞 Call Now — +91 9419100159
      </a>
    </div>
  );
}
