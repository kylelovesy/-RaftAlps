import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Gallery from '@/components/Gallery';
import EmailSignup from '@/components/EmailSignup';
import Footer from '@/components/Footer';

export default function Page() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Features />
      <Gallery />
      <EmailSignup />
      <Footer />
    </main>
  );
}
