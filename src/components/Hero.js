/* eslint-disable react-hooks/rules-of-hooks */
// components/Hero.js

// Importamos los componentes y hooks necesarios
import { useTranslation } from '../app/i18n';
import Link from 'next/link';
// Para los íconos, te recomiendo usar una librería como react-icons.
// Primero, instálala en tu proyecto con: npm install react-icons
// Luego, puedes importar los íconos que necesites.
import { FaMapMarkerAlt, FaPhoneAlt, FaWhatsapp } from 'react-icons/fa';

export const Hero = async ({ locale }) => {
  const { t } = await useTranslation(locale, 'common');

  // Extraemos la información del negocio para mantenerla organizada
  const businessInfo = {
    address: '907 Kramer Ln, Austin TX 78758',
    phone: '(737) 837-0735',
    // El número para WhatsApp debe estar en formato internacional sin símbolos
    whatsappNumber: '17378370735', 
  };

  return (
    // Contenedor principal con imagen de fondo y un degradado sutil
    <div 
      className="relative flex h-[600px] items-center justify-center bg-cover bg-center text-white md:h-[700px]" 
      style={{ backgroundImage: "url('/images/cuban-dish.jpg')" }}
    >
      {/* Capa de superposición más oscura para mejorar el contraste del texto */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/40"></div>

      {/* Contenido centrado con animación de entrada */}
      <div className="relative z-10 flex animate-fadeInUp flex-col items-center px-6 text-center">
        <h1 className="text-5xl font-extrabold tracking-tight drop-shadow-lg md:text-7xl">
          {t('hero.title', 'El Rinconcito Cubano')}
        </h1>
        <p className="mt-4 max-w-3xl text-lg text-gray-200 drop-shadow-md md:text-xl">
          {t('hero.subtitle', 'Auténtica cocina que celebra la herencia y la pasión.')}
        </p>

        {/* Sección de información de contacto con íconos */}
        <div className="mt-8 flex flex-col items-center gap-4 text-lg md:flex-row md:gap-6">
          <div className="flex items-center gap-2">
            <FaMapMarkerAlt className="text-[#FFD700]" />
            <span>{businessInfo.address}</span>
          </div>
          <div className="flex items-center gap-2">
            <FaPhoneAlt className="text-[#FFD700]" />
            <span>{businessInfo.phone}</span>
          </div>
        </div>
        
        {/* Contenedor de botones de acción */}
        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:gap-6">
          <Link
            href="#menu"
            className="transform rounded-full bg-[#CE1126] px-10 py-4 font-bold text-white shadow-lg transition-transform hover:scale-105"
          >
            {t('hero.button', 'Ver Menú')}
          </Link>
          <a
            href={`https://wa.me/${businessInfo.whatsappNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex transform items-center justify-center gap-3 rounded-full bg-[#25D366] px-10 py-4 font-bold text-white shadow-lg transition-transform hover:scale-105"
          >
            <FaWhatsapp size={24} />
            {t('hero.whatsapp_button', 'WhatsApp')}
          </a>
        </div>
      </div>
    </div>
  );
};