'use client';

import { usePathname, useRouter } from 'next/navigation';
// Ya no necesitamos 'useTranslation' aquí, lo que simplifica todo.
// import { useTranslation } from 'react-i18next';

export const LanguageSwitcher = () => {
  const router = useRouter();
  const pathname = usePathname();
  
  // --- LÓGICA CORREGIDA ---
  // Obtenemos el idioma actual directamente de la URL.
  // Ej: si pathname es '/es/servicios', currentLanguage será 'es'.
  const currentLanguage = pathname.split('/')[1];

  const toggleLanguage = () => {
    if (!pathname) return;

    // Determina el idioma al que se va a cambiar
    const newLanguage = currentLanguage === 'es' ? 'en' : 'es';
    
    // Divide la ruta y reemplaza el segmento del idioma
    const pathParts = pathname.split('/');
    pathParts[1] = newLanguage;
    const newPath = pathParts.join('/');
    
    router.push(newPath);
  };

  return (
    <button
      onClick={toggleLanguage}
      aria-label="Change language"
      className="relative flex items-center h-8 w-16 rounded-full bg-stone-700 cursor-pointer p-1"
    >
      <div
        className={`absolute h-6 w-6 rounded-full bg-white shadow-md transform transition-transform duration-300 ease-in-out ${
          currentLanguage === 'es' ? 'translate-x-0' : 'translate-x-8'
        }`}
      />
      <div className="flex justify-between w-full px-2">
        <span className={`text-sm font-bold ${currentLanguage === 'es' ? 'text-stone-900' : 'text-white'}`}>
          ES
        </span>
        <span className={`text-sm font-bold ${currentLanguage === 'en' ? 'text-stone-900' : 'text-white'}`}>
          EN
        </span>
      </div>
    </button>
  );
};