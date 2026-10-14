import { useState, useEffect } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';

const ROLES = [
  'Desarrollador Full Stack',
  'Frontend Engineer',
  'Backend Developer',
  'Arquitecto de APIs',
];

export default function HeroRoles() {
  const [index, setIndex] = useState(0);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (reduceMotion) return;
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % ROLES.length);
    }, 2500);
    return () => clearInterval(timer);
  }, [reduceMotion]);

  return (
    <span className="relative inline-block w-full">
      {/* Nombre accesible estable: el lector de pantalla no se interrumpe con cada cambio. */}
      <span className="sr-only">{ROLES[0]}</span>
      <span aria-hidden="true">
        {/* initial={false}: el primer rol se pinta visible desde el HTML del servidor. */}
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={index}
            initial={{ opacity: 0, y: 18, filter: 'blur(6px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            exit={{ opacity: 0, y: -14, filter: 'blur(4px)' }}
            transition={{ duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="block"
          >
            {ROLES[index]}
          </motion.span>
        </AnimatePresence>
      </span>
    </span>
  );
}
