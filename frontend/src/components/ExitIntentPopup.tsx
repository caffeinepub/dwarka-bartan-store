import { useEffect, useState } from 'react';
import { MessageCircle, X, Gift } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';

export function ExitIntentPopup() {
  const [open, setOpen] = useState(false);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    if (shown) return;

    // Desktop: mouse leave viewport
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !shown) {
        setOpen(true);
        setShown(true);
      }
    };

    // Mobile: show after 30 seconds
    const mobileTimer = setTimeout(() => {
      if (!shown && window.innerWidth < 768) {
        setOpen(true);
        setShown(true);
      }
    }, 30000);

    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
      clearTimeout(mobileTimer);
    };
  }, [shown]);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="max-w-md mx-4 rounded-2xl border-0 p-0 overflow-hidden">
        {/* Gold header */}
        <div className="gold-gradient p-6 text-steel-dark relative">
          <button
            onClick={() => setOpen(false)}
            className="absolute top-4 right-4 p-1 rounded-full hover:bg-steel-dark/10 transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-full bg-steel-dark/10 flex items-center justify-center">
              <Gift className="w-5 h-5" />
            </div>
            <span className="font-body font-semibold text-sm uppercase tracking-wide">Special Offer</span>
          </div>
          <DialogHeader>
            <DialogTitle className="font-display text-2xl font-bold text-steel-dark text-left">
              Wait! Don't Miss Out!
            </DialogTitle>
            <DialogDescription className="text-steel-dark/80 font-body text-left mt-1">
              Get a special discount on bulk orders
            </DialogDescription>
          </DialogHeader>
        </div>

        {/* Content */}
        <div className="p-6 bg-card">
          <p className="text-foreground font-body text-base leading-relaxed mb-6">
            🎉 <strong>Bulk Order Discount Available!</strong> WhatsApp us now to get exclusive pricing on orders of 10+ items. Perfect for weddings, festivals, and gifting!
          </p>

          <div className="flex flex-col gap-3">
            <a
              href="https://wa.me/919419100159?text=Hi!%20I%20saw%20your%20bulk%20order%20discount%20offer.%20I%20am%20interested%20in%20placing%20a%20bulk%20order%20at%20Dwarka%20Bartan%20Store%2C%20Akhnoor."
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="flex items-center justify-center gap-2.5 bg-green-600 hover:bg-green-700 text-white font-bold py-3.5 rounded-full transition-all duration-200 font-body"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp Us for Bulk Discount
            </a>
            <a
              href="tel:+919419100159"
              onClick={() => setOpen(false)}
              className="flex items-center justify-center gap-2.5 bg-gold hover:bg-gold-dark text-steel-dark font-bold py-3.5 rounded-full transition-all duration-200 font-body"
            >
              📞 Call +91 9419100159
            </a>
            <button
              onClick={() => setOpen(false)}
              className="text-muted-foreground text-sm font-body hover:text-foreground transition-colors py-1"
            >
              No thanks, continue browsing
            </button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
