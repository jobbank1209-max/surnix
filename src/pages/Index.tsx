import { Header } from '@/components/layout/Header';
import { Hero } from '@/components/sections/Hero';
import { Services } from '@/components/sections/Services';
import { Marquee } from '@/components/sections/Marquee';
import { CaseStudies } from '@/components/sections/CaseStudies';
import { Testimonials } from '@/components/sections/Testimonials';
import { GlobalReach } from '@/components/sections/GlobalReach';
import { FAQ } from '@/components/sections/FAQ';
import { Footer } from '@/components/layout/Footer';

const Index = () => {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <Marquee />
      <CaseStudies />
      <Testimonials />
      <GlobalReach />
      <FAQ />
      <Footer />
    </main>
  );
};

export default Index;
