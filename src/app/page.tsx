import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Reviews from '@/components/Reviews';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Description from '@/components/Description';
import Doodles from '@/components/Doodles';

export default function Home() {
  return (
    <main className="relative">
      <section className="relative">
        <Navbar />
      </section>
      
      <section className="relative">
        <Hero />
      </section>
      
      <section className="relative">
        <Doodles />
        <Description />
      </section>
      
      <section className="relative">
        <Features />
      </section>
      
      <section className="relative">
        <Doodles />
        <Reviews />
      </section>
      
      <section className="relative">
        <Contact />
      </section>
      
      <section className="relative">
        <Doodles />
        <Footer />
      </section>
    </main>
  );
}
