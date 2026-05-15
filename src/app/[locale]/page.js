// app/[locale]/page.js

import { Hero } from '../../components/Hero.js'; 
import Menu from '../../components/Menu.js'; 
import Footer from '../../components/Footer.js';
import Navbar from '../../components/Navbar.js';
import { PageAnimator } from '../../components/PageAnimator.js';
import { AnimatedSection } from '../../components/AnimatedSection.js';

// This page is a pure Server Component.
// PageAnimator is rendered as a standalone overlay — it does NOT wrap children,
// which prevents Server Components from being downgraded to Client Components.
export default async function Home({ params: { locale } }) {
  return (
    <>
      {/* Splash screen overlay — client-side only, does not wrap other content */}
      <PageAnimator />

      {/* Server Components render independently — images resolve from root "/" correctly */}
      <Navbar />
      <Hero locale={locale} />

      <AnimatedSection>
        <Menu locale={locale} />
      </AnimatedSection>

      <Footer />
    </>
  );
}