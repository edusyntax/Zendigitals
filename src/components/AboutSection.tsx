import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
import holographicFluid from "@/assets/aboutus.png";
import { useIsMobile } from "@/hooks/use-mobile";

const callouts = [
  {
    id: "leverage",
    label: "Digital Leverage",
    description:
      "We engineer compounding digital systems — not campaigns. Every asset we create multiplies in value over time.",
  },
  {
    id: "architecture",
    label: "Brand Architecture",
    description:
      "Strategic positioning that turns attention into authority. We don't decorate — we construct perception.",
  },
  {
    id: "dominance",
    label: "Market Dominance",
    description:
      "Every engagement is designed as a scalable command center — built to capture, convert, and control your category.",
  },
];

/* ── curved arrow paths (desktop only) ── */
const arrowPaths = [
  "M 0,0 C 40,-30 80,-20 120,10",
  "M 0,0 C 50,20 100,30 140,5",
  "M 0,0 C 30,40 90,50 130,20",
];

const AboutSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const isMobile = useIsMobile();
  const autoTriggered = useRef(false);

  const words =
    "We design digital leverage. We don't follow trends — we architect systems that set them. Every brand we touch becomes undeniable.".split(
      " "
    );

  /* auto-trigger first callout on viewport entry */
  useEffect(() => {
    if (isInView && !autoTriggered.current) {
      autoTriggered.current = true;
      const timer = setTimeout(() => setActiveIndex(0), 600);
      return () => clearTimeout(timer);
    }
  }, [isInView]);

  const handleActivate = useCallback(
    (i: number) => setActiveIndex((prev) => (prev === i ? null : i)),
    []
  );

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-16 md:py-24 overflow-hidden"
    >
      {/* Background Accent Glow */}
      <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-accent/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative site-container max-w-6xl">
        {/* Section Label */}
        <ScrollReveal>
          <p className="text-xs tracking-[0.4em] uppercase text-accent mb-10">
            About <span className="bg-[#FF6A3D] text-white px-2 py-2 rounded-md">Zendigitalz</span> 
          </p>
        </ScrollReveal>

        <div className="grid lg:grid-cols-12 gap-16 items-center">
          {/* LEFT — Editorial Authority */}
          <div className="lg:col-span-6">
              <h2 className="text-[clamp(2.4rem,3.4vw,3.2rem)] leading-tight font-light tracking-tight text-foreground max-w-2xl">
                We don’t build campaigns. We engineer{" "}
                <span className="font-medium text-accent">systems.</span>
              </h2>

              <p className="text-muted-foreground/80 text-base leading-relaxed max-w-md mt-4">
                Every engagement becomes a structured digital command center —
                built to scale authority, narrative, and conversion.
              </p>


            {/* ── CALLOUTS — Desktop / Tablet (inline below manifesto) ── */}
            <div className="hidden md:flex flex-col gap-4 mt-10 relative">
              {callouts.map((c, i) => {
                const isActive = activeIndex === i;
                return (
                  <div key={c.id} className="relative flex items-start gap-4">
                    {/* SVG arrow (desktop only, lg+) */}
                    <svg
                      className="hidden lg:block absolute -right-[160px] top-2 w-[150px] h-[60px] pointer-events-none"
                      viewBox="-5 -40 155 100"
                      fill="none"
                    >
                      <motion.path
                        d={arrowPaths[i]}
                        stroke="hsl(var(--accent))"
                        strokeWidth={1.5}
                        strokeLinecap="round"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={
                          isActive
                            ? { pathLength: 1, opacity: 0.7 }
                            : { pathLength: 0, opacity: 0 }
                        }
                        transition={{ duration: 0.6, ease: "easeOut" }}
                      />
                      {/* arrowhead dot */}
                      <motion.circle
                        cx={i === 0 ? 120 : i === 1 ? 140 : 130}
                        cy={i === 0 ? 10 : i === 1 ? 5 : 20}
                        r={3}
                        fill="hsl(var(--accent))"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={
                          isActive
                            ? { opacity: 0.8, scale: 1 }
                            : { opacity: 0, scale: 0 }
                        }
                        transition={{ duration: 0.3, delay: 0.5 }}
                      />
                    </svg>

                    {/* Callout card */}
                    <motion.button
                      onMouseEnter={() => !isMobile && setActiveIndex(i)}
                      onClick={() => handleActivate(i)}
                      className={`w-full text-left rounded-2xl border border-red-500 px-5 py-4 transition-all duration-300 cursor-pointer ${
                        isActive
                          ? "border-accent/30 bg-accent/[0.06] shadow-[0_0_30px_-10px_hsl(var(--accent)/0.15)]"
                          : "border-white/[0.08] bg-white/[0.02] hover:border-white/[0.15]"
                      }`}
                      layout
                    >
                      <div className="flex items-center gap-3">
                        <motion.div
                          className={`w-2 h-2 rounded-full border border-red-500 shrink-0 ${
                            isActive ? "bg-accent" : "bg-muted-foreground/30"
                          }`}
                          animate={isActive ? { scale: [1, 1.4, 1] } : {}}
                          transition={{ duration: 0.5 }}
                        />
                        <span
                          className={`text-lg font-extrabold tracking-wide ${
                            isActive ? "text-accent" : "text-muted-foreground"
                          }`}
                        >
                          {c.label}
                        </span>
                      </div>

                      <AnimatePresence>
                        {isActive && (
                          <motion.p
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                            className=" text-md leading-relaxed mt-3 ml-5 overflow-hidden"
                          >
                            {c.description}
                          </motion.p>
                        )}
                      </AnimatePresence>
                    </motion.button>
                  </div>
                );
              })}
            </div>
          </div>

          {/* RIGHT — Luxury Tech Object */}
          <div className="lg:col-span-5 lg:col-start-8 relative">
            <motion.div
              whileHover={{ y: -6 }}
              transition={{ duration: 0.4 }}
              className="relative rounded-3xl overflow-hidden border border-white/10 bg-background-secondary/20 backdrop-blur-xl shadow-[0_40px_140px_-30px_rgba(0,0,0,0.5)]"
            >
              {/* Subtle inner glow */}
              <div className="absolute -inset-1 bg-gradient-to-tr from-accent/10 via-transparent to-transparent opacity-70 blur-2xl pointer-events-none" />

              <div className="relative aspect-[4/5] overflow-hidden">
                <motion.img
                  src={holographicFluid}
                  alt=""
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  loading="lazy"
                />

                {/* Active callout label overlay on image */}
                <AnimatePresence>
                  {activeIndex !== null && (
                    <motion.div
                      key={activeIndex}
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.35 }}
                      className="absolute bottom-6 left-6 right-6 bg-background/70 backdrop-blur-md rounded-xl border border-white/[0.1] px-5 py-4"
                    >
                      <p className="text-accent text-xs tracking-[0.2em] uppercase mb-1">
                        {callouts[activeIndex].label}
                      </p>
                      <p className="text-foreground/80 text-sm leading-relaxed">
                        {callouts[activeIndex].description}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Depth overlays */}
                <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-transparent to-background/60" />
                <div className="absolute inset-0 bg-gradient-to-tr from-white/[0.05] via-transparent to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>

        {/* ── CALLOUTS — Mobile (stacked accordion) ── */}
        <div className="md:hidden mt-10 flex flex-col gap-3">
          {callouts.map((c, i) => {
            const isActive = activeIndex === i;
            return (
              <motion.button
                key={c.id}
                onClick={() => handleActivate(i)}
                className={`w-full text-left rounded-xl border px-4 py-3.5 transition-all duration-300 ${
                  isActive
                    ? "border-accent/30 bg-accent/[0.06]"
                    : "border-white/[0.08] bg-white/[0.02]"
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div
                      className={`w-1.5 h-1.5 rounded-full ${
                        isActive ? "bg-accent" : "bg-muted-foreground/30"
                      }`}
                    />
                    <span
                      className={`text-sm font-medium ${
                        isActive ? "text-accent" : "text-muted-foreground"
                      }`}
                    >
                      {c.label}
                    </span>
                  </div>
                  <motion.span
                    animate={{ rotate: isActive ? 180 : 0 }}
                    transition={{ duration: 0.25 }}
                    className="text-muted-foreground text-xs"
                  >
                    ▾
                  </motion.span>
                </div>

                <AnimatePresence>
                  {isActive && (
                    <motion.p
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      className="text-muted-foreground text-sm leading-relaxed mt-2.5 overflow-hidden"
                    >
                      {c.description}
                    </motion.p>
                  )}
                </AnimatePresence>
              </motion.button>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;