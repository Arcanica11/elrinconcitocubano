// components/PageAnimator.js
'use client';

import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { SplashAnimation } from './SplashAnimation';

// PageAnimator only controls the splash overlay.
// It does NOT wrap children — children are always rendered by the Server Component.
// The splash is an overlay that hides the page briefly, then fades away.
export const PageAnimator = () => {
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
    <AnimatePresence>
      {loading && <SplashAnimation />}
    </AnimatePresence>
  );
};