import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'motion/react';

const ROLES = [
  'Desarrollador Full Stack',
  'Frontend Engineer',
  'Backend Developer',
  'Arquitecto de APIs',
];

export default function HeroRoles() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % ROLES.length);
    }, 2500);
    return () => clearInterval(timer);
  }, []);

  return (
    <span
      className="relative inline-block w-full"
      aria-live="polite"
      aria-label={ROLES[index]}
    >
      <AnimatePresence mode="wait">
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
  );
}
