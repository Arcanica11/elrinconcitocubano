import React from 'react';

export default function ClosedNotice() {
  return (
    <div className="bg-red-600 text-white text-center py-3 px-4 shadow-md z-50 relative">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center gap-2">
        <span className="text-2xl">⚠️</span>
        <p className="font-bold text-sm md:text-base uppercase tracking-wide">
          Aviso Importante: Estaremos cerrados hoy y mañana 2 de Enero.
        </p>
      </div>
    </div>
  );
}