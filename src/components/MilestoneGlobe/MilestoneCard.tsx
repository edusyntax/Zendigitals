import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Milestone, ThemeConfig } from './types';

interface MilestoneCardProps {
  milestone: Milestone;
  theme: ThemeConfig;
  total: number;
  activeIndex: number;
}

const MilestoneCard: React.FC<MilestoneCardProps> = ({ milestone, theme, total, activeIndex }) => (
  <div className="relative w-full max-w-sm">
    {/* Glow border */}
    <div
      className="absolute -inset-px rounded-2xl opacity-40 blur-sm"
      style={{ background: `linear-gradient(135deg, ${theme.glow}44, transparent 60%)` }}
    />

    <div className="relative rounded-2xl border border-foreground/[0.08] bg-foreground/[0.04] backdrop-blur-2xl p-8 overflow-hidden">
      {/* Inner reflection */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{ background: 'linear-gradient(135deg, hsl(var(--foreground)) 0%, transparent 50%)' }}
      />

      {/* Progress indicator */}
      <div className="flex items-center gap-1.5 mb-6">
        {Array.from({ length: total }).map((_, i) => (
          <div
            key={i}
            className="h-0.5 rounded-full transition-all duration-500"
            style={{
              width: i === activeIndex ? 24 : 8,
              backgroundColor: i === activeIndex ? theme.primary : 'hsl(var(--foreground) / 0.15)',
            }}
          />
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={milestone.id}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Category + Year */}
          <div className="flex items-center gap-3 mb-4">
            <span
              className="text-[10px] font-medium uppercase tracking-[0.2em] px-2.5 py-1 rounded-full border"
              style={{
                color: theme.primary,
                borderColor: `${theme.primary}33`,
                backgroundColor: `${theme.primary}0d`,
              }}
            >
              {milestone.category}
            </span>
            <span className="text-[11px] text-muted-foreground font-mono">{milestone.year}</span>
          </div>

          {/* Title */}
          <h3 className="text-xl font-semibold text-foreground/90 mb-3 leading-tight tracking-tight">
            {milestone.title}
          </h3>

          {/* Description */}
          <p className="text-sm text-muted-foreground leading-relaxed">{milestone.description}</p>

          {/* Connector dot */}
          <div className="mt-6 flex items-center gap-2">
            <div
              className="w-1.5 h-1.5 rounded-full animate-pulse"
              style={{ backgroundColor: theme.glow }}
            />
            <div className="h-px flex-1" style={{ background: `linear-gradient(90deg, ${theme.glow}40, transparent)` }} />
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  </div>
);

export default MilestoneCard;
