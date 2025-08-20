// components/SplashAnimation.js
'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import logo from "../../public/logo.png"


export const SplashAnimation = () => (
  <motion.div
    initial={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.8, ease: 'easeInOut' }}
    className="fixed inset-0 bg-black z-50 flex justify-center items-center"
  >
    <motion.div
      initial={{ scale: 1.5, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      // 👇 CORRECCIÓN AQUÍ
      transition={{ duration: 1, ease: "circOut" }}
    >
      <Image src={logo} alt="Logo El Rinconcito Cubano" width={150} height={150} />
    </motion.div>
  </motion.div>
);