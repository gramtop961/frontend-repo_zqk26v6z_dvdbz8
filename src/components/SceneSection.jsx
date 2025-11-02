import React from 'react';
import { motion } from 'framer-motion';

export default function SceneSection({ id, overline, title, subtitle, children, bg }) {
  return (
    <section id={id} className="relative min-h-[110vh] flex items-center justify-center">
      {/* Background layer */}
      <div className="absolute inset-0" aria-hidden>
        {bg}
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="max-w-4xl mx-auto text-center"
        >
          {overline && (
            <div className="mb-4 inline-block rounded-full border border-amber-400/40 bg-amber-400/10 px-4 py-1 text-amber-200 tracking-widest uppercase text-xs">
              {overline}
            </div>
          )}
          <h2 className="text-3xl md:text-5xl font-serif tracking-tight text-slate-100 drop-shadow-[0_0_24px_rgba(234,179,8,0.15)]">
            {title}
          </h2>
          {subtitle && (
            <p className="mt-4 text-slate-300/90 text-lg md:text-xl">
              {subtitle}
            </p>
          )}
        </motion.div>

        {children && (
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.1 }}
            className="mt-10"
          >
            {children}
          </motion.div>
        )}
      </div>
    </section>
  );
}
