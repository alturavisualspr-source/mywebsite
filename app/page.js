import { LanguageProvider } from '@/app/components/LanguageContext';
import Navbar from '@/app/components/Navbar';
import Hero from '@/app/components/Hero';
import Services from '@/app/components/Services';
import Portfolio from '@/app/components/Portfolio';
import Pricing from '@/app/components/Pricing';
import BookingForm from '@/app/components/BookingForm';
import FAQ from '@/app/components/FAQ';
import Footer from '@/app/components/Footer';
import WhatsAppButton from '@/app/components/WhatsAppButton';

export default function Page() {
  return (
    <LanguageProvider>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Pricing />
        <Portfolio />
        <BookingForm />
        <FAQ />
        <Footer />
      </main>
      <WhatsAppButton />
    </LanguageProvider>
  );
}
