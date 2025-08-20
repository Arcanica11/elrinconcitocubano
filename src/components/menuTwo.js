import Image from 'next/image';
import Menu from "../../public/Menu-2.png"


const MenuTwo = () => {
  return (
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

export default MenuTwo;