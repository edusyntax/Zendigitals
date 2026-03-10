import React, { useRef, useState, useMemo, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { motion, useScroll, useTransform, useMotionValueEvent } from 'framer-motion';
import GlobeScene from './GlobeScene';
import MilestoneCard from './MilestoneCard';
import { themes, milestones, ThemeConfig } from './types';

const SECTION_HEIGHT_VH = 120;

const ThemeSelector = ({ current, onChange }: { current: string; onChange: (k: string) => void }) => (
  <div className="absolute top-6 right-6 z-20 flex gap-2">
    {Object.entries(themes).map(([key, t]) => (
      <button
        key={key}
        onClick={() => onChange(key)}
        className="w-5 h-5 rounded-full border-2 transition-all duration-300"
        style={{
          backgroundColor: t.primary,
          borderColor: current === key ? 'white' : 'transparent',
          transform: current === key ? 'scale(1.25)' : 'scale(1)',
        }}
        aria-label={`${t.name} theme`}
      />
    ))}
  </div>
);

const CinematicMilestoneGlobe: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [themeKey, setThemeKey] = useState('rose');
  const [activeIndex, setActiveIndex] = useState(0);
  const [smoothProgress, setSmoothProgress] = useState(0);

  const theme: ThemeConfig = themes[themeKey];
  const totalHeight = milestones.length * SECTION_HEIGHT_VH;

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  });

  const progress = useTransform(scrollYProgress, [0, 1], [0, 1]);

  useMotionValueEvent(progress, 'change', (v) => {
    setSmoothProgress(v);
    const idx = Math.min(milestones.length - 1, Math.floor(v * milestones.length));
    setActiveIndex(idx);
  });

  const activeMilestone = milestones[activeIndex];

  return (
    <section
      ref={sectionRef}
      className="relative w-full"
      style={{ height: `${totalHeight}vh` }}
    >
      {/* Sticky viewport */}
      <div className="sticky top-0 left-0 w-full h-screen overflow-hidden">
        {/* Cinematic background */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#050510] via-[#0a0a1a] to-[#050510]" />

        {/* Vignette */}
        <div className="absolute inset-0 pointer-events-none" style={{
          background: 'radial-gradient(ellipse at center, transparent 50%, rgba(0,0,0,0.6) 100%)',
        }} />

        <ThemeSelector current={themeKey} onChange={setThemeKey} />

        {/* Section header */}
        <div className="absolute top-8 left-8 z-10">
          <motion.p
            className="text-[10px] uppercase tracking-[0.3em] mb-2"
            style={{ color: theme.primary }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.7 }}
            transition={{ delay: 0.3 }}
          >
            Our Journey
          </motion.p>
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-white/90 tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Milestones
          </motion.h2>
        </div>

        {/* Layout: Globe + Card */}
        <div className="relative w-full h-full flex items-center">
          {/* Globe canvas */}
          <div className="flex-1 h-full">
            <Suspense fallback={null}>
              <Canvas
                dpr={[1, 1.5]}
                camera={{ position: [0, 0, 7], fov: 45 }}
                gl={{ antialias: true, alpha: true }}
                style={{ background: 'transparent' }}
              >
                <GlobeScene
                  progress={smoothProgress}
                  activeIndex={activeIndex}
                  theme={theme}
                />
              </Canvas>
            </Suspense>
          </div>

          {/* Content card (desktop) */}
          <div className="hidden md:flex items-center pr-8 lg:pr-16 w-[380px] lg:w-[420px] shrink-0">
            <MilestoneCard
              milestone={activeMilestone}
              theme={theme}
              total={milestones.length}
              activeIndex={activeIndex}
            />
          </div>
        </div>

        {/* Mobile card (bottom overlay) */}
        <div className="md:hidden absolute bottom-6 left-4 right-4 z-10">
          <MilestoneCard
            milestone={activeMilestone}
            theme={theme}
            total={milestones.length}
            activeIndex={activeIndex}
          />
        </div>

        {/* Scroll hint */}
        <motion.div
          className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1"
          animate={{ opacity: smoothProgress > 0.05 ? 0 : 0.5 }}
        >
          <span className="text-[9px] uppercase tracking-[0.25em] text-white/30">Scroll</span>
          <motion.div
            className="w-px h-6"
            style={{ backgroundColor: theme.primary }}
            animate={{ scaleY: [0.4, 1, 0.4] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default CinematicMilestoneGlobe;
