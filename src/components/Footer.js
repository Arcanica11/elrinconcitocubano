// components/Footer.js

const Footer = () => {
  // Obtenemos el año actual dinámicamente para que no tengas que actualizarlo
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-stone-900 text-gray-400 py-4">
        <div className="container mx-auto px-4 text-sm flex flex-col md:flex-row md:justify-center md:gap-6">
        
        {/* Línea de Derechos Reservados */}
        <p className="mb-2">
          &copy; {currentYear} | El Rinconcito Cubano.
        </p>
        

        <p>
          Created by{" "}
          <a 
            href="https://ruedalarolamedia.com/" // Puedes cambiar este enlace a tu portafolio o web
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-purple-700 hover:text-blue-500 font-semibold transition-colors"
          >
            Rueda la Rola Media
          </a>
        </p>

      </div>
    </footer>
  );
};

export default Footer;