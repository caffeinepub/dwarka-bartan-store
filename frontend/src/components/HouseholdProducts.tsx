import { MessageCircle } from 'lucide-react';

const WHATSAPP_NUMBER = '919419100159';

const householdProducts = [
  {
    id: 1,
    name: 'Colorful Plastic Dustbins with Swing-Top Lid',
    description:
      'These sturdy plastic dustbins come in four vibrant colours — red, blue, yellow, and black — with a convenient swing-top lid for easy, hands-free disposal. Built from high-quality, durable plastic, they are perfect for kitchens, offices, and living spaces to keep your home clean and organised.',
    image: '/assets/generated/colorful-plastic-dustbins.dim_600x600.png',
    whatsappMsg:
      'Hi! I am interested in the Colorful Plastic Dustbins with Swing-Top Lid. Please share more details.',
  },
];

export function HouseholdProducts() {
  return (
    <section id="household-products" className="py-16 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block text-sm font-semibold tracking-widest uppercase text-gold-500 mb-3">
            Home Essentials
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Household Products
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-base sm:text-lg">
            Keep your home neat and tidy with our range of durable household products built for
            everyday use.
          </p>
          <div className="mt-4 mx-auto w-20 h-1 rounded-full bg-gold-400" />
        </div>

        {/* Product Grid — centred single card */}
        <div className="flex justify-center">
          <div className="w-full max-w-sm">
            {householdProducts.map((product) => (
              <div
                key={product.id}
                className="group bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col"
              >
                {/* Image */}
                <div className="overflow-hidden aspect-square bg-muted">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>

                {/* Content */}
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="font-display text-lg font-semibold text-foreground mb-2 leading-snug">
                    {product.name}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed flex-1">
                    {product.description}
                  </p>

                  {/* WhatsApp Button */}
                  <a
                    href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(product.whatsappMsg)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm transition-colors duration-200"
                  >
                    <MessageCircle className="w-4 h-4" />
                    Enquire on WhatsApp
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
