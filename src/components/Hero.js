// components/Hero.js

// Importamos el hook para las traducciones en el servidor
import { useTranslation } from '../app/i18n';
import Link from 'next/link';

// Este es un Componente de Servidor, como el original. Es más simple y robusto.
export const Hero = async ({ locale }) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { t } = await useTranslation(locale, 'common');

  return (
    // Contenedor principal con una altura fija y una imagen de fondo
    <div 
      className="relative flex h-[500px] items-center justify-center bg-cover bg-center text-white md:h-[600px]" 
      style={{ backgroundImage: "url('/images/cuban-dish.jpg')" }}
    >
      {/* Capa oscura para mejorar la legibilidad del texto */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Contenido centrado y estático */}
      <div className="relative z-10 flex flex-col items-center text-center px-6">
        <h1 className="text-4xl font-extrabold tracking-tight md:text-6xl">
          {t('hero.title', 'El Rinconcito Cubano')}
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-gray-200 md:text-xl">
          {t('hero.subtitle', 'Auténtica cocina que celebra la herencia y la pasión.')}
        </p>
        <Link
          href="#menu"
          className="mt-8 rounded-full bg-[#CE1126] px-8 py-3 font-bold text-white transition hover:bg-opacity-80"
        >
          {t('hero.button', 'Ver Menú')}
        </Link>
      </div>
    </div>
  );
};