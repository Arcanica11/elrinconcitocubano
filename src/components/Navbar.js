/* eslint-disable react-hooks/rules-of-hooks */
import Link from 'next/link';
import { useTranslation } from '../app/i18n';
import { LanguageSwitcher } from './LanguageSwitcher';
import { MobileMenu } from './MobileMenu.js'; 
import Image from 'next/image'; 
import logo from "../../public/logo.png"


 const Navbar = async ({ locale }) => {
  const { t } = await useTranslation(locale, 'common');

  // Creamos un array con los enlaces para no repetir código y corregimos las rutas
  const navLinks = [
    { href: `/${locale}`, label: t('navbar.home') },
    { href: `/${locale}#menu`, label:"Menu" },
    // { href: `/${locale}/about`, label: t('navbar.aboutUs') },
    { href: `/${locale}#contact`, label: t('navbar.contactUs') },
  ];

  return (
      <nav className="bg-stone-900/70 shadow-lg sticky top-0 z-40 backdrop-blur-sm">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center"> {/* Ajusté el padding vertical a py-3 para que no sea tan alto */}
        
        {/* --- SECCIÓN MODIFICADA --- */}
        {/* Logo y Nombre de la Empresa */}
        <Link href={`/${locale}`} className="flex items-center text-xl font-bold text-white hover:opacity-80 transition-opacity">
          {/* 2. Añade el componente Image aquí */}
          <Image
            src={logo}
            alt="Logo de El Rinconcito Cubano"
            width={45}  // Ajusta el tamaño según tu logo
            height={45} // Ajusta el tamaño según tu logo
            className="mr-3" // Margen a la derecha para separar del texto
          />
          <span>
            El Rinconcito Cubano
          </span>
        </Link>
        {/* --- FIN DE LA SECCIÓN MODIFICADA --- */}

        {/* Enlaces de Navegación para Escritorio */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="text-white hover:text-blue-500 transition-colors">
              {link.label}
            </Link>
          ))}
        </div>

        {/* Cambiador de Idioma para Escritorio */}
        <div className="hidden md:block">
          <LanguageSwitcher />
        </div>

        {/* Menú Móvil */}
        <div className="md:hidden"> {/* Solo muestra el botón en móvil */}
           <MobileMenu locale={locale} navLinks={navLinks} />
        </div>

      </div>
    </nav>
  );
};

export default Navbar;