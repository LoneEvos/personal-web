'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export function CursorGlow() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const isTouchDevice = window.matchMedia('(pointer: coarse)').matches;
    if (isTouchDevice) return;

    const handleMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!visible) setVisible(true);
    };

    const handleLeave = () => setVisible(false);
    const handleEnter = () => setVisible(true);

    window.addEventListener('mousemove', handleMove, { passive: true });
    document.body.addEventListener('mouseleave', handleLeave);
    document.body.addEventListener('mouseenter', handleEnter);

    return () => {
      window.removeEventListener('mousemove', handleMove);
      document.body.removeEventListener('mouseleave', handleLeave);
      document.body.removeEventListener('mouseenter', handleEnter);
    };
  }, [visible]);

  if (!visible) return null;

  return (
    <motion.div
      className="pointer-events-none fixed z-[5] hidden md:block"
      animate={{ x: position.x - 200, y: position.y - 200 }}
      transition={{ type: 'spring', stiffness: 150, damping: 25, mass: 0.5 }}
      aria-hidden="true"
    >
      <div
        className="h-[400px] w-[400px] rounded-full opacity-30"
        style={{
          background:
            'radial-gradient(circle, rgba(243, 239, 228, 0.16) 0%, transparent 70%)',
        }}
      />
    </motion.div>
  );
}
