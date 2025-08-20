import Image from 'next/image';
// ¡Esta forma de importar la imagen es excelente! 
// Next.js la optimiza automáticamente.
import Menu from "../../public/Menu-1.png";

const MenuOne = () => {
  return (
    // 👇 HEMOS MODIFICADO ESTA LÍNEA
    <section className="container mx-auto max-w-5xl px-6 py-12">
      <Image
        src={Menu} 
        alt="Primera página del menú - Aperitivos y Platos Fuertes"
        
        // 'layout' y 'priority' son suficientes gracias a la importación estática.
        layout="responsive"
        priority
        
        // Opcional: un poco de estilo extra para que resalte
        className="rounded-xl shadow-2xl" 
      />
    </section>
  );
};

export default MenuOne;