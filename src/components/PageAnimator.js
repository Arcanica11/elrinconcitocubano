// components/PageAnimator.js
'use client';

import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { SplashAnimation } from './SplashAnimation';
import React from 'react'; // 👈 Importa React

export const PageAnimator = ({ children }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      document.body.style.overflow = 'auto';
    }, 2500);

    document.body.style.overflow = 'hidden';
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>
        {loading && <SplashAnimation />}
      </AnimatePresence>

      {/* Cuando no esté cargando, mostramos los hijos */}
      {!loading && children}
    </>
  );
};