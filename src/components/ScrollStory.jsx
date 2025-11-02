import React from 'react';
import { motion } from 'framer-motion';
import { CalendarDays, Shield, Users, Sword, Coins, Network, Rocket } from 'lucide-react';
import Spline from '@splinetool/react-spline';
import SceneSection from './SceneSection';
import ParallaxLayers from './ParallaxLayers';

function Rune({ delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.7 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.9, delay }}
      className="mx-auto h-40 w-40 rounded-full bg-gradient-to-br from-amber-500/30 to-fuchsia-500/30 border border-amber-400/40 shadow-[0_0_80px_rgba(217,119,6,0.25)]"
    />
  );
}

function StatPill({ icon: Icon, label }) {
  return (
    <div className="flex items-center gap-2 rounded-full border border-slate-700/60 bg-slate-900/60 px-3 py-1 text-sm text-slate-200">
      <Icon size={16} className="text-amber-300" />
      <span>{label}</span>
    </div>
  );
}

export default function ScrollStory() {
  return (
    <main className="relative w-full overflow-x-hidden">
      {/* Hero / Scene 1: Lonely Adventurers */}
      <div className="relative min-h-[120vh]">
        <ParallaxLayers />
        <SceneSection
          id="scene-1"
          overline="Prologue"
          title="The Lonely Adventurers"
          subtitle="Without a guild, even the strongest fall alone."
          bg={
            <div className="absolute inset-0">
              {/* Stormy sky */}
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(14,20,32,1)_0%,rgba(10,12,18,1)_45%,rgba(0,0,0,1)_100%)]" />
              {/* Lightning flickers */}
              <motion.div
                initial={{ opacity: 0.15 }}
                animate={{ opacity: [0.15, 0.6, 0.15] }}
                transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
                className="absolute inset-0 mix-blend-screen"
                style={{
                  background:
                    'radial-gradient(circle at 30% 20%, rgba(147,197,253,0.25), transparent 35%), radial-gradient(circle at 70% 10%, rgba(165,180,252,0.22), transparent 40%)',
                }}
              />
            </div>
          }
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {['Warrior', 'Mage', 'Ranger'].map((c, i) => (
              <motion.div
                key={c}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ delay: i * 0.15 }}
                className="relative rounded-2xl border border-slate-800 bg-slate-900/50 p-6 backdrop-blur-md"
              >
                <div className="absolute -top-6 left-6 h-12 w-12 rounded-full bg-gradient-to-br from-slate-700 to-slate-800 border border-slate-600 shadow" />
                <p className="mt-6 text-slate-300">
                  {c} drifts through a battle-torn field, footing unsure, banners torn.
                </p>
                <motion.div
                  className="mt-6 h-2 w-full bg-slate-800/80 rounded"
                  initial={{ scaleX: 1 }}
                  whileInView={{ scaleX: 0.6 }}
                  viewport={{ once: true }}
                  transition={{ duration: 2, ease: 'easeOut' }}
                  style={{ originX: 0 }}
                />
              </motion.div>
            ))}
          </div>
        </SceneSection>
      </div>

      {/* Scene 2: The Guild is Born */}
      <SceneSection
        id="scene-2"
        overline="Chapter I"
        title="The Guild is Born"
        subtitle="United under one banner — a guild is born."
        bg={
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-b from-indigo-950 via-purple-950/70 to-slate-950" />
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(251,191,36,0.15),transparent_60%)]" />
          </div>
        }
      >
        <div className="flex flex-col items-center gap-6">
          <div className="relative h-48 w-48">
            <Rune />
            <motion.div
              className="absolute inset-1 rounded-full border border-amber-300/30"
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 20, ease: 'linear' }}
            />
            <motion.div
              className="absolute -left-6 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-amber-400/30 border border-amber-300/40"
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 3 }}
            />
            <motion.div
              className="absolute -right-6 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-fuchsia-400/30 border border-fuchsia-300/40"
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 2.6 }}
            />
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            <StatPill icon={Shield} label="Roles & Permissions" />
            <StatPill icon={Users} label="Leaders • Officers • Members" />
          </div>
        </div>
      </SceneSection>

      {/* Scene 3: Raid Planning */}
      <SceneSection
        id="scene-3"
        overline="Chapter II"
        title="Raid Planning"
        subtitle="Events form like constellations—maps glow, teams align."
        bg={
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950" />
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.12),transparent_55%)]" />
          </div>
        }
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-slate-700/60 bg-slate-900/60 p-6"
          >
            <div className="flex items-center gap-3 text-slate-200">
              <CalendarDays className="text-amber-300" />
              <span className="font-medium">Event Calendar</span>
            </div>
            <motion.div
              className="mt-4 h-40 rounded-xl border border-slate-700/50 bg-gradient-to-br from-slate-800 to-slate-900"
              initial={{ backgroundPosition: '0% 0%' }}
              whileInView={{ backgroundPosition: ['0% 0%', '100% 100%'] }}
              viewport={{ once: true }}
              transition={{ duration: 6, ease: 'linear' }}
              style={{ backgroundSize: '200% 200%' }}
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-slate-700/60 bg-slate-900/60 p-6"
          >
            <div className="flex items-center gap-3 text-slate-200">
              <Users className="text-amber-300" />
              <span className="font-medium">Party Management</span>
            </div>
            <div className="mt-4 grid grid-cols-3 gap-2">
              {[...Array(9)].map((_, i) => (
                <motion.div
                  key={i}
                  className="h-12 rounded-md border border-slate-700/60 bg-slate-800/70"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.03 * i }}
                />
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-slate-700/60 bg-slate-900/60 p-6"
          >
            <div className="flex items-center gap-3 text-slate-200">
              <Shield className="text-amber-300" />
              <span className="font-medium">Assignments</span>
            </div>
            <div className="mt-4 space-y-2">
              {['Tank A', 'Healer A', 'DPS Squad'].map((r, i) => (
                <motion.div
                  key={r}
                  className="flex items-center justify-between rounded-lg border border-slate-700/60 bg-slate-800/70 px-3 py-2"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <span>{r}</span>
                  <span className="text-amber-300/90">Ready</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </SceneSection>

      {/* Scene 4: Dragon Battle */}
      <SceneSection
        id="scene-4"
        overline="Chapter III"
        title="The Dragon Battle"
        subtitle="Six heroes, one mind — precision and courage."
        bg={
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-b from-[#120C0C] via-[#1A0E0E] to-[#0B0908]" />
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(244,63,94,0.08),transparent_60%)]" />
          </div>
        }
      >
        <div className="grid grid-cols-1 md:grid-cols-6 gap-3">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="rounded-xl border border-slate-800 bg-slate-900/60 p-3"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
            >
              <div className="flex items-center justify-between text-sm">
                <span className="text-slate-300">Player {i + 1}</span>
                <span className="text-amber-300">DKP {Math.floor(90 - i * 7)}</span>
              </div>
              <motion.div
                className="mt-2 h-2 w-full rounded bg-slate-800"
                initial={{ scaleX: 1 }}
                whileInView={{ scaleX: 0.4 + 0.1 * i }}
                viewport={{ once: true }}
                transition={{ duration: 2, ease: 'easeOut' }}
                style={{ originX: 0 }}
              />
            </motion.div>
          ))}
        </div>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <StatPill icon={Sword} label="Raid Coordination" />
          <StatPill icon={Coins} label="DKP Tracking" />
        </div>
      </SceneSection>

      {/* Scene 5: Loot & Fairness */}
      <SceneSection
        id="scene-5"
        overline="Chapter IV"
        title="Loot & Fairness"
        subtitle="Fair. Transparent. Shared."
        bg={
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-indigo-950 to-slate-950" />
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(251,191,36,0.10),transparent_60%)]" />
          </div>
        }
      >
        <div className="relative mx-auto grid max-w-4xl grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="aspect-square rounded-xl border border-amber-400/30 bg-gradient-to-br from-amber-300/10 to-fuchsia-300/10 shadow-[0_0_24px_rgba(251,191,36,0.12)]"
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.03 * i, duration: 0.5 }}
            />
          ))}
        </div>
      </SceneSection>

      {/* Scene 6: Network of Guilds */}
      <SceneSection
        id="scene-6"
        overline="Chapter V"
        title="The Network of Guilds"
        subtitle="Guild halls blaze across the world, lines of light connecting them."
        bg={
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-b from-[#090D1A] via-[#0B1325] to-[#060913]" />
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(147,197,253,0.12),transparent_60%)]" />
          </div>
        }
      >
        <div className="relative mx-auto max-w-4xl">
          <div className="relative h-72 w-full rounded-2xl border border-slate-700/60 bg-slate-900/60">
            {/* Simulated network map */}
            <svg viewBox="0 0 400 220" className="absolute inset-0 h-full w-full">
              <defs>
                <radialGradient id="node" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#FBBF24" stopOpacity="0.9" />
                  <stop offset="100%" stopColor="#FBBF24" stopOpacity="0" />
                </radialGradient>
              </defs>
              {[
                [40, 50],
                [120, 30],
                [210, 80],
                [300, 40],
                [360, 110],
                [250, 170],
                [130, 160],
                [60, 120],
              ].map(([x, y], i) => (
                <g key={i}>
                  <motion.circle cx={x} cy={y} r="6" fill="#FBBF24" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.05 * i }} />
                  <motion.circle cx={x} cy={y} r="18" fill="url(#node)" initial={{ opacity: 0 }} whileInView={{ opacity: 0.5 }} viewport={{ once: true }} transition={{ delay: 0.05 * i }} />
                </g>
              ))}
              {[
                [40, 50, 120, 30],
                [120, 30, 210, 80],
                [210, 80, 300, 40],
                [210, 80, 360, 110],
                [210, 80, 250, 170],
                [250, 170, 130, 160],
                [130, 160, 60, 120],
              ].map(([x1, y1, x2, y2], i) => (
                <motion.line
                  key={i}
                  x1={x1}
                  y1={y1}
                  x2={x2}
                  y2={y2}
                  stroke="#60A5FA"
                  strokeWidth="2"
                  initial={{ pathLength: 0, opacity: 0.7 }}
                  whileInView={{ pathLength: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, delay: 0.08 * i }}
                />
              ))}
            </svg>
            <div className="absolute bottom-3 left-3 flex flex-wrap gap-2">
              <StatPill icon={Network} label="Community Network" />
              <StatPill icon={Users} label="Discord Integration" />
            </div>
          </div>
        </div>
      </SceneSection>

      {/* Scene 7: Call to Adventure with Spline */}
      <section id="scene-7" className="relative min-h-[120vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-[#0B0F1A] via-[#0A0E19] to-black" />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(251,191,36,0.10),transparent_60%)]" />
        </div>
        <div className="relative z-10 container mx-auto px-6 py-24 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-serif text-4xl md:text-6xl text-amber-200 drop-shadow-[0_0_40px_rgba(251,191,36,0.25)]"
          >
            Lead. Plan. Share. Build your Guild with Guildify.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-slate-300 text-lg"
          >
            The call to adventure awaits.
          </motion.p>
          <motion.a
            href="#"
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.35 }}
            className="mt-8 inline-flex items-center gap-2 rounded-full border border-amber-400/40 bg-amber-400/10 px-6 py-3 text-amber-200 hover:bg-amber-400/20"
          >
            <Rocket size={18} />
            Start Your Journey
          </motion.a>
        </div>
        <div className="absolute inset-0">
          <Spline
            scene="https://prod.spline.design/zlpY8mXqZyZgq6cF/scene.splinecode"
            style={{ width: '100%', height: '100%' }}
          />
        </div>
      </section>
    </main>
  );
}
