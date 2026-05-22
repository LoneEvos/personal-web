'use client';

import { motion } from 'framer-motion';

export function BeamsBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden bg-deep" aria-hidden="true">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-10%,rgba(185,199,255,0.18),transparent_34%),radial-gradient(circle_at_15%_20%,rgba(215,168,79,0.1),transparent_28%),linear-gradient(180deg,rgba(8,9,12,0.15),rgba(8,9,12,0.96)_76%)]" />
      <div className="absolute inset-0 opacity-[0.06] [background-image:linear-gradient(rgba(243,239,228,0.18)_1px,transparent_1px),linear-gradient(90deg,rgba(243,239,228,0.14)_1px,transparent_1px)] [background-size:72px_72px]" />

      <motion.div
        className="absolute left-[-12%] top-[-22%] h-[92vh] w-[30vw] origin-top rotate-[18deg] bg-[linear-gradient(90deg,transparent,rgba(185,199,255,0.18),rgba(215,168,79,0.16),transparent)] blur-2xl"
        animate={{ x: ['-8%', '18%', '-8%'], opacity: [0.45, 0.85, 0.45] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute right-[4%] top-[-18%] h-[105vh] w-[24vw] origin-top -rotate-[20deg] bg-[linear-gradient(90deg,transparent,rgba(143,163,134,0.15),rgba(185,199,255,0.2),transparent)] blur-2xl"
        animate={{ x: ['10%', '-12%', '10%'], opacity: [0.35, 0.72, 0.35] }}
        transition={{ duration: 17, repeat: Infinity, ease: 'easeInOut', delay: 1.2 }}
      />
      <motion.div
        className="absolute left-[38%] top-[-35%] h-[120vh] w-[12vw] origin-top rotate-[7deg] bg-[linear-gradient(90deg,transparent,rgba(243,239,228,0.08),rgba(215,168,79,0.14),transparent)] blur-xl"
        animate={{ y: ['-6%', '8%', '-6%'], opacity: [0.25, 0.55, 0.25] }}
        transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
      />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(8,9,12,0.42)_64%,rgba(8,9,12,0.88)_100%)]" />
      <div className="noise-overlay opacity-[0.045]" />
    </div>
  );
}
