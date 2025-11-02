import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function ParallaxLayers() {
  const { scrollYProgress } = useScroll();
  const yClouds = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const yMountains = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const yEmbers = useTransform(scrollYProgress, [0, 1], [0, -200]);

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Distant fog */}
      <motion.div
        style={{ y: yClouds }}
        className="absolute inset-0 bg-gradient-to-b from-indigo-950/60 via-purple-900/30 to-transparent"
      />

      {/* Mountains silhouette */}
      <motion.div
        style={{ y: yMountains }}
        className="absolute bottom-0 left-0 right-0 h-[45%]"
      >
        <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 40">
          <path d="M0,35 L12,22 L22,28 L34,18 L46,26 L60,14 L72,24 L86,16 L100,24 L100,40 L0,40 Z" fill="url(#mgrad)" />
          <defs>
            <linearGradient id="mgrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#0B1020" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#0B0B12" stopOpacity="0.2" />
            </linearGradient>
          </defs>
        </svg>
      </motion.div>

      {/* Embers */}
      <motion.div style={{ y: yEmbers }} className="absolute inset-0">
        {[...Array(80)].map((_, i) => (
          <span
            key={i}
            className="absolute w-0.5 h-0.5 rounded-full"
            style={{
              left: `${(i * 73) % 100}%`,
              top: `${(i * 29) % 100}%`,
              background: 'radial-gradient(circle, rgba(251,191,36,0.9) 0%, rgba(251,191,36,0.0) 70%)',
              filter: 'blur(0.4px)'
            }}
          />
        ))}
      </motion.div>

      {/* Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,rgba(0,0,0,0.5)_70%,rgba(0,0,0,0.9)_100%)]" />
    </div>
  );
}
