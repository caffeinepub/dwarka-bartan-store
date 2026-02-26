import { useState } from 'react';
import { X, Tag } from 'lucide-react';

export function FestiveOfferBanner() {
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) return null;

  return (
    <div className="bg-gold text-steel-dark relative z-50">
      <div className="max-w-7xl mx-auto px-4 py-2.5 flex items-center justify-between gap-4">
        <div className="flex items-center gap-2 flex-1 justify-center">
          <Tag className="w-4 h-4 shrink-0" />
          <p className="text-sm font-semibold text-center font-body">
            🎉 Limited Time Festive Offer — Call Now for Best Deals!{' '}
            <a
              href="tel:+919419100159"
              className="underline font-bold hover:opacity-80 transition-opacity"
            >
              +91 9419100159
            </a>
          </p>
        </div>
        <button
          onClick={() => setDismissed(true)}
          className="shrink-0 p-1 rounded hover:bg-gold-dark/20 transition-colors"
          aria-label="Dismiss banner"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
