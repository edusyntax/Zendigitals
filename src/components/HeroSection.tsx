import { useState, useEffect, useRef, useCallback } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import MagneticButton from "./MagneticButton";
import { getLenis } from "./SmoothScroll";
import LeadCaptureModal from "./LeadCaptureModal";
import heroPoster from "@/assets/hero-object.jpg";

const TYPING_TEXTS = [
  "We Build High-Converting Websites",
  "We Drive Growth with SEO",
  "We Generate High-Quality Leads",
  "We Scale Brands with Social Media",
  "We Optimize Campaigns with PPC",
  "We Automate Marketing with AI",
];

const TYPING_SPEED = 60;
const DELETE_SPEED = 35;
const PAUSE_DURATION = 2000;

const HERO_VIDEO = "https://assets.mixkit.co/videos/4906/4906-720.mp4";

const HeroSection = () => {
  const [displayText, setDisplayText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>();
  const [modalOpen, setModalOpen] = useState(false);

  const { scrollY } = useScroll();
  const yOffset = useTransform(scrollY, [0, 400], [0, -60]);

  const tick = useCallback(() => {
    const fullText = TYPING_TEXTS[textIndex];

    if (!isDeleting) {
      const next = fullText.slice(0, displayText.length + 1);
      setDisplayText(next);
      if (next === fullText) {
        timeoutRef.current = setTimeout(() => setIsDeleting(true), PAUSE_DURATION);
        return;
      }
      timeoutRef.current = setTimeout(tick, TYPING_SPEED);
    } else {
      const next = fullText.slice(0, displayText.length - 1);
      setDisplayText(next);
      if (next === "") {
        setIsDeleting(false);
        setTextIndex((p) => (p + 1) % TYPING_TEXTS.length);
        return;
      }
      timeoutRef.current = setTimeout(tick, DELETE_SPEED);
    }
  }, [displayText, isDeleting, textIndex]);

  useEffect(() => {
    timeoutRef.current = setTimeout(tick, isDeleting ? DELETE_SPEED : TYPING_SPEED);
    return () => clearTimeout(timeoutRef.current);
  }, [tick]);

  return (
    <section className="relative min-h-[620px] md:min-h-screen flex items-center overflow-hidden bg-background pt-24 md:pt-32  pb-2 md:pb-8">
      {/* Single background video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="w-full h-full object-cover"
          poster={heroPoster}
          aria-hidden="true"
        >
          <source src={HERO_VIDEO} type="video/mp4" />
        </video>
        {/* Dark overlay for text readability while keeping video visible */}
        <div className="absolute inset-0 bg-background/40 backdrop-brightness-110" />
      </div>

      {/* Content */}
      <div className="relative z-10 site-container w-full">
        <motion.div
          style={{ y: yOffset }}
          className="max-w-2xl md:max-w-3xl lg:max-w-4xl"
        >
          {/* Overline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-accent font-semibold font-grotesk text-xs uppercase tracking-[0.35em] mb-4 sm:mb-6 drop-shadow-md"
          >
            Digital Growth Partner
          </motion.p>

          {/* Typing headline with invisible sizer */}
          <div className="grid mb-4 sm:mb-6">
            {TYPING_TEXTS.map((t, i) => (
              <span
                key={i}
                aria-hidden
                className="[grid-area:h] editorial-heading text-[clamp(1.5rem,5vw,4.5rem)] invisible leading-[1.1] max-w-3xl"
              >
                {t}&nbsp;
              </span>
            ))}
            {/* Visible typing text in same cell */}
            <h1 className="[grid-area:h] editorial-heading text-[clamp(1.5rem,5vw,4.5rem)] text-foreground leading-[1.1] max-w-3xl">
              {displayText}
              <span className="inline-block w-[3px] h-[1em] bg-accent ml-1 align-middle animate-pulse" />
            </h1>
          </div>

          {/* Subtext */}
          <p className="text-white/95 text-base sm:text-lg md:text-xl max-w-lg leading-relaxed font-medium mb-5 sm:mb-6">
            We help startups and brands grow using performance marketing, SEO, and AI-powered strategies.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3">
            <MagneticButton
              className="bg-accent text-accent-foreground rounded-full text-sm sm:text-base font-medium glow w-full sm:w-auto h-[48px] md:h-[52px] px-7 min-w-[180px] flex items-center justify-center"
              onClick={() => setModalOpen(true)}
            >
              Get Free Strategy →
            </MagneticButton>
            <MagneticButton
              className="glass rounded-full text-sm sm:text-base font-medium text-foreground w-full sm:w-auto h-[48px] md:h-[52px] px-7 min-w-[180px] flex items-center justify-center"
              onClick={() => {
                const target = document.getElementById("work");
                if (target) getLenis()?.scrollTo(target, { offset: -60, duration: 1.4 });
              }}
            >
              View Case Studies
            </MagneticButton>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex-col items-center gap-2 hidden md:flex"
      >
        <span className="text-muted-foreground text-xs uppercase tracking-[0.2em]">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-px h-8 bg-gradient-to-b from-accent to-transparent"
        />
      </motion.div>

      <LeadCaptureModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        sourcePage="Homepage"
        sourceLabel="Hero CTA - Get Free Strategy"
      />
    </section>
  );
};

export default HeroSection;
