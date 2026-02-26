import { MessageCircle } from 'lucide-react';

const WHATSAPP_NUMBER = '919419100159';

const kitchenProducts = [
  {
    id: 1,
    name: 'Milton Insignia Casserole',
    description:
      'The Milton Insignia Casserole is a premium thermoware serving dish with a stunning designer exterior, gold-finish handles, and a stainless steel interior that keeps food hot for hours. BPA-free and food-grade certified, it is the perfect centrepiece for family meals and festive occasions.',
    image: '/assets/generated/milton-insignia-casserole.dim_600x400.jpg',
    whatsappMsg: 'Hi! I am interested in the Milton Insignia Casserole. Please share more details.',
  },
  {
    id: 2,
    name: 'Crystal Wooden Serving Trays',
    description:
      'These elegant Crystal wooden serving trays are crafted from premium solid wood with a rich natural finish and sturdy side handles for easy carrying. Available in multiple sizes, they are ideal for serving breakfast in bed, hosting guests, or adding a rustic touch to your dining table.',
    image: '/assets/generated/crystal-wooden-serving-trays.dim_600x400.jpg',
    whatsappMsg: 'Hi! I am interested in the Crystal Wooden Serving Trays. Please share more details.',
  },
  {
    id: 3,
    name: 'Milton Pearl Thermoware Insulated Casserole',
    description:
      'The Milton Pearl Thermoware Insulated Casserole features PU insulation technology that keeps food hot or cold for extended periods, making it perfect for everyday dining and special gatherings. Its sleek design with a gold accent band and food-grade, BPA-free construction ensures both style and safety at your table.',
    image: '/assets/generated/milton-pearl-casserole.dim_600x400.jpg',
    whatsappMsg: 'Hi! I am interested in the Milton Pearl Thermoware Insulated Casserole. Please share more details.',
  },
  {
    id: 4,
    name: 'Senso Finger Chipser',
    description:
      'The Senso Finger Chipser is a smart, push-action kitchen tool that lets you cut perfect finger chips, fries, and vegetable sticks in seconds — no knife skills required. Made from food-safe materials with a stainless steel blade grid, it is easy to use, quick to clean, and a must-have for every modern kitchen.',
    image: '/assets/generated/senso-finger-chipser.dim_600x400.jpg',
    whatsappMsg: 'Hi! I am interested in the Senso Finger Chipser. Please share more details.',
  },
  {
    id: 5,
    name: 'Cello Puro Kids & Junior Water Bottles',
    description:
      'Cello Puro water bottles for kids come in vibrant colours with a convenient shoulder strap, making them perfect for school, sports, and outdoor activities. Available in Kids and Junior variants with capacities from 400 ml to 900 ml, they are made from BPA-free, food-grade plastic that is safe and durable for everyday use.',
    image: '/assets/generated/cello-puro-water-bottles.dim_600x400.jpg',
    whatsappMsg: 'Hi! I am interested in the Cello Puro Kids & Junior Water Bottles. Please share more details.',
  },
];

export function KitchenUtensils() {
  return (
    <section id="kitchen-utensils" className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block text-sm font-semibold tracking-widest uppercase text-gold-500 mb-3">
            Our Collection
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Kitchen Utensils
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-base sm:text-lg">
            Discover our handpicked range of premium kitchen essentials — from elegant casseroles to
            smart cooking tools — designed to make every meal a pleasure.
          </p>
          <div className="mt-4 mx-auto w-20 h-1 rounded-full bg-gold-400" />
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {kitchenProducts.map((product) => (
            <div
              key={product.id}
              className="group bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col"
            >
              {/* Image */}
              <div className="overflow-hidden aspect-[4/3] bg-muted">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
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
    </section>
  );
}
