import { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

/* ===========================
   THEME
=========================== */

const theme = {
  string: "#c8a165",
  polaroidBg: "#fffaf0",
  text: "#fff5e1",
  pin: "#b23a48",
  pinGlow: "rgba(178,58,72,0.6)",
  tape: "#f3d19c",
  overlay: "rgba(0,0,0,0.85)",
};

/* ===========================
   DATA
=========================== */

const milestones = [
  {
    image: "https://picsum.photos/500/600?1",
    title: "Discover",
    caption: "Clarity before execution.",
    flipText: "We audited acquisition channels and infrastructure.",
  },
  {
    image: "https://picsum.photos/500/600?2",
    title: "Architect",
    caption: "System blueprint defined.",
    flipText: "Defined leverage layers and automation structure.",
  },
  {
    image: "https://picsum.photos/500/600?3",
    title: "Design",
    caption: "Authority engineered.",
    flipText: "Psychology-driven interface systems deployed.",
  },
  {
    image: "https://picsum.photos/500/600?4",
    title: "Build",
    caption: "Infrastructure scaled.",
    flipText: "Secure, high-performance architecture.",
  },
];

/* ===========================
   COMPONENT
=========================== */

const PolaroidTimeline = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const pinRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [ropePath, setRopePath] = useState("");
  const [flipped, setFlipped] = useState<number | null>(null);
  const [lightbox, setLightbox] = useState<number | null>(null);

  /* ===========================
     Generate Dynamic Rope Path
  =========================== */

  const generatePath = () => {
    if (!sectionRef.current) return;

    const containerRect = sectionRef.current.getBoundingClientRect();

    const points = pinRefs.current
      .map((pin) => {
        if (!pin) return null;
        const rect = pin.getBoundingClientRect();
        return {
          x: rect.left + rect.width / 2 - containerRect.left,
          y: rect.top + rect.height / 2 - containerRect.top,
        };
      })
      .filter(Boolean) as { x: number; y: number }[];

    if (points.length < 2) return;

    let d = `M ${points[0].x} ${points[0].y}`;

    for (let i = 1; i < points.length; i++) {
      const prev = points[i - 1];
      const curr = points[i];

      const midX = (prev.x + curr.x) / 2;
      const midY = Math.min(prev.y, curr.y) - 40; // sag effect

      d += ` Q ${midX} ${midY}, ${curr.x} ${curr.y}`;
    }

    setRopePath(d);
  };

  /* ===========================
     Recalculate On Mount & Resize
  =========================== */

  useEffect(() => {
    generatePath();
    window.addEventListener("resize", generatePath);
    return () => window.removeEventListener("resize", generatePath);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-12 md:py-12 overflow-hidden"
    >
      <div className="site-container">
        <p className="text-accent text-xs uppercase tracking-[0.25em] mb-3">
          Operational{" "}
          <span className="bg-[#FF6A3D] text-white px-2 py-1 rounded-md">
            Framework
          </span>
        </p>

        <h2 className="text-[clamp(2.2rem,4vw,3.8rem)] font-semibold text-foreground max-w-3xl">
          The system behind{" "}
          <span className="font-serif italic text-gradient-accent">every</span>{" "}
          result
        </h2>
      </div>
      {/* ROPE SVG */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ zIndex: -3 }}
      >
        <motion.path
          d={ropePath}
          stroke={theme.string}
          strokeWidth="3"
          strokeDasharray="5 20"
          strokeLinecap="round"
          fill="none"
          animate={{ strokeDashoffset: [10, -120] }}
          transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
        />
      </svg>

      {/* POLAROIDS */}
      <div className="relative z-10 site-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 mt-16 md:mt-20">
        {milestones.map((item, i) => {
          const tilt = (i % 2 === 0 ? -1 : 1) * (8 + i * 2);

          return (
            <motion.div
              key={i}
              initial={{ y: 60, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: i * 0.15 }}
              className="relative"
            >
              {/* Tape */}
              <div
                className="absolute -top-4 left-1/2 -translate-x-1/2 w-16 h-6 rotate-[-8deg] opacity-80"
                style={{ background: theme.tape }}
              />

              {/* Pin */}
              <div
                ref={(el) => (pinRefs.current[i] = el)}
                onClick={() => setLightbox(i)}
                className="absolute -top-8 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full cursor-pointer"
                style={{
                  background: theme.pin,
                  boxShadow:
                    flipped === i
                      ? `0 0 20px ${theme.pinGlow}`
                      : "none",
                }}
              />

              {/* Polaroid */}
              <motion.div
                onClick={() =>
                  setFlipped(flipped === i ? null : i)
                }
                className="w-full max-w-[16rem] h-72 rounded-md shadow-2xl cursor-pointer relative mx-auto"
                style={{
                  background: "rgba(255,255,255,0.15)",
                  rotate: tilt,
                  transformStyle: "preserve-3d",
                }}
                animate={{
                  rotateY: flipped === i ? 180 : 0,
                }}
                transition={{ duration: 0.8 }}
              >
                {/* FRONT */}
                <div
                  className="absolute inset-0 p-4"
                  style={{ backfaceVisibility: "hidden" }}
                >
                  <img
                    src={item.image}
                    className="w-full h-48 object-cover"
                  />
                  <h3
                    className="mt-4 font-bold"
                    style={{ color: theme.text }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-sm opacity-60">
                    {item.caption}
                  </p>
                </div>

                {/* BACK */}
                <div
                  className="absolute inset-0 p-6 flex items-center justify-center text-center"
                  style={{
                    transform: "rotateY(180deg)",
                    backfaceVisibility: "hidden",
                    color: theme.text,
                  }}
                >
                  {item.flipText}
                </div>
              </motion.div>
            </motion.div>
          );
        })}
      </div>

      {/* LIGHTBOX */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center z-50"
            style={{ background: theme.overlay }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="relative">
              <img
                src={milestones[lightbox].image}
                className="max-w-4xl max-h-[80vh]"
              />
              <button
                onClick={() => setLightbox(null)}
                className="absolute top-4 right-4 text-white text-3xl"
              >
                ✕
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default PolaroidTimeline;