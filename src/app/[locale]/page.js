// app/[locale]/page.js

// Componentes de la página
import { Hero } from '../../components/Hero.js'; 
import MenuOne from '../../components/MenuOne.js'; 
import MenuTwo from '../../components/menuTwo.js'; 
import Footer from '../../components/Footer.js';
import Navbar from '../../components/Navbar.js'; // Asumo que también tienes un Navbar

// Componentes para la animación
import { PageAnimator } from '../../components/PageAnimator.js';
import { AnimatedSection } from '../../components/AnimatedSection.js';

// Tu página se mantiene como un Componente de Servidor (async)
export default async function Home({ params: { locale } }) {
  
  return (
    // 1. Usamos PageAnimator para envolver toda la página.
    //    Este se encargará de mostrar el Splash y luego el contenido.
    <PageAnimator>
      <Hero locale={locale} />
      
      {/* Añadimos un id="menu" para que el botón del Hero pueda hacer scroll hacia aquí */}
      <div id="menu">
        {/* 2. Envolvemos cada sección del menú con AnimatedSection
               para que aparezcan con una animación al hacer scroll. */}
        <AnimatedSection>
          <MenuOne />
        </AnimatedSection>

        <AnimatedSection>
          <MenuTwo />
        </AnimatedSection>
      </div>
      
      <Footer />
    </PageAnimator>
  );
}