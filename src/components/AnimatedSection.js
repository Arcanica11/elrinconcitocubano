// components/AnimatedSection.js
'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export const AnimatedSection = ({ children }) => {
  const ref = useRef(null);
  // `once: true` asegura que la animación solo ocurra una vez
  // `amount: 0.2` activa la animación cuando el 20% del elemento es visible
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 }, // Empieza invisible y 50px más abajo
    visible: { opacity: 1, y: 0 },   // Termina totalmente visible y en su posición original
  };

  return (
    <motion.section
      ref={ref}
      variants={sectionVariants}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      {children}
    </motion.section>
  );
};