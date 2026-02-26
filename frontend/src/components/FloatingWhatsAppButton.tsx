import { MessageCircle } from 'lucide-react';

export function FloatingWhatsAppButton() {
  return (
    <a
      href="https://wa.me/919419100159?text=Hi!%20I%20want%20to%20enquire%20about%20products%20at%20Dwarka%20Bartan%20Store%2C%20Akhnoor."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-24 right-4 md:bottom-8 md:right-6 z-50 w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-110 animate-bounce-gentle"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-7 h-7" />
      {/* Pulse ring */}
      <span className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-30" />
    </a>
  );
}
