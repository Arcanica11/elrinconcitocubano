'use client';

import { useState } from 'react';
import Link from 'next/link';
import { LanguageSwitcher } from './LanguageSwitcher';

export const MobileMenu = ({ locale, navLinks }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      {/* Botón Hamburguesa (solo visible en móviles) */}
      <div className="md:hidden">
        <button onClick={toggleMenu} aria-label="Open menu">
          <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>

      {/* Menú Overlay (aparece cuando isOpen es true) */}
      <div 
        className={`fixed inset-0 bg-stone-900 bg-opacity-95 z-50 transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out md:hidden`}
      >
        <div className="flex justify-end p-6">
          <button onClick={toggleMenu} aria-label="Close menu">
            <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <nav className="flex flex-col items-center space-y-8 mt-10">
          {navLinks.map((link) => (
            <Link 
              key={link.href}
              href={link.href} 
              className="text-2xl text-white hover:text-lime-500"
              onClick={toggleMenu} // Cierra el menú al hacer clic en un enlace
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-8">
            <LanguageSwitcher />
          </div>
        </nav>
      </div>
    </>
  );
};