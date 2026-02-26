import { FestiveOfferBanner } from './components/FestiveOfferBanner';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { ProductCategories } from './components/ProductCategories';
import { FeaturedProducts } from './components/FeaturedProducts';
import { KitchenUtensils } from './components/KitchenUtensils';
import { HouseholdProducts } from './components/HouseholdProducts';
import { PhotoGallery } from './components/PhotoGallery';
import { WhyChooseUs } from './components/WhyChooseUs';
import { CustomerReviews } from './components/CustomerReviews';
import { LocationSection } from './components/LocationSection';
import { ContactForm } from './components/ContactForm';
import { Footer } from './components/Footer';
import { FloatingWhatsAppButton } from './components/FloatingWhatsAppButton';
import { MobileCallBar } from './components/MobileCallBar';
import { ExitIntentPopup } from './components/ExitIntentPopup';

export default function App() {
  return (
    <div className="min-h-screen bg-background font-body">
      <FestiveOfferBanner />
      <Header />
      <main>
        <HeroSection />
        <ProductCategories />
        <FeaturedProducts />
        <KitchenUtensils />
        <HouseholdProducts />
        <PhotoGallery />
        <WhyChooseUs />
        <CustomerReviews />
        <LocationSection />
        <ContactForm />
      </main>
      <Footer />
      <FloatingWhatsAppButton />
      <MobileCallBar />
      <ExitIntentPopup />
    </div>
  );
}
