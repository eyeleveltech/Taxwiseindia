'use client';

import Hero from '@/components/sections/Hero';
import TrustMarquee from '@/components/sections/TrustMarquee';
import Promise from '@/components/sections/Promise';
import Services from '@/components/sections/Services';
import HowItWorks from '@/components/sections/HowItWorks';
import WhySection from '@/components/sections/WhySection';
import StopChasing from '@/components/sections/StopChasing';
import BusinessOwners from '@/components/sections/BusinessOwners';
import Testimonials from '@/components/sections/Testimonials';
import FinalCTA from '@/components/sections/FinalCTA';

export default function Home() {
  return (
    <main id="main">
      <Hero />
      <TrustMarquee />
      <Promise />
      <Services />
      <HowItWorks />
      <WhySection />
      <StopChasing />
      <BusinessOwners />
      <Testimonials />
      <FinalCTA />
    </main>
  );
}
