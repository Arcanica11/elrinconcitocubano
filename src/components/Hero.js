/* eslint-disable react-hooks/rules-of-hooks */
// components/Hero.js

import { useTranslation } from '../app/i18n';
import Link from 'next/link';
import Image from 'next/image';
import { FaMapMarkerAlt, FaPhoneAlt, FaWhatsapp } from 'react-icons/fa';

export const Hero = async ({ locale }) => {
  const { t } = await useTranslation(locale, 'common');

  const businessInfo = {
    address: '907 Kramer Ln, Austin TX 78758',
    phone: '(737) 837-0735',
    whatsappNumber: '17378370735',
  };

  return (
    <div className="relative flex min-h-[600px] md:min-h-[700px] items-center justify-center bg-stone-950 text-white overflow-hidden">
      
      {/* Ambient fire glow background — no external image needed */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-red-700/40 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-orange-600/30 rounded-full blur-[100px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-yellow-900/20 rounded-full blur-[150px]" />
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-stone-900 to-transparent z-10" />

      {/* Content */}
      <div className="relative z-20 flex flex-col items-center px-6 text-center py-20">
        
        {/* Logo */}
        <div className="mb-8 relative w-36 h-36 md:w-48 md:h-48 drop-shadow-2xl">
          <Image
            src="/logo.png"
            alt="El Rinconcito Cubano Logo"
            fill
            style={{ objectFit: 'contain' }}
            priority
          />
        </div>

        <h1 className="text-5xl font-extrabold tracking-tight drop-shadow-lg md:text-7xl uppercase bg-clip-text text-transparent bg-gradient-to-r from-orange-300 via-red-400 to-red-600">
          {t('hero.title', 'El Rinconcito Cubano')}
        </h1>
        <p className="mt-4 max-w-3xl text-lg text-gray-300 drop-shadow-md md:text-xl">
          {t('hero.subtitle', 'Auténtica cocina que celebra la herencia y la pasión.')}
        </p>

        {/* Contact info */}
        <div className="mt-8 flex flex-col items-center gap-4 text-lg md:flex-row md:gap-6">
          <div className="flex items-center gap-2">
            <FaMapMarkerAlt className="text-yellow-400" />
            <span>{businessInfo.address}</span>
          </div>
          <div className="flex items-center gap-2">
            <FaPhoneAlt className="text-yellow-400" />
            <span>{businessInfo.phone}</span>
          </div>
        </div>

        {/* CTA buttons */}
        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:gap-6">
          <Link
            href="#menu"
            className="transform rounded-full bg-red-600 px-10 py-4 font-bold text-white shadow-lg transition-transform hover:scale-105 hover:bg-red-500"
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