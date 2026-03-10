import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

const companies = [
  "NVIDIA", "Stripe", "Vercel", "Linear", "Figma",
  "Notion", "Arc", "Supabase", "Datadog", "Loom",
  "Scale AI", "Ramp", "Webflow", "PostHog", "Retool",
];

const LogoItem = ({ name }: { name: string }) => (
  <div className="flex items-center justify-center px-10 py-4 select-none" data-hover>
    <span className="text-muted-foreground/40 font-grotesk text-sm md:text-base font-semibold tracking-[0.15em] uppercase whitespace-nowrap hover:text-muted-foreground/70 transition-colors duration-500">
      {name}
    </span>
  </div>
);

const TrustStrip = () => {
  return (
    <section className="relative py-6 md:py-8md:py-8 overflow-hidden">
      <ScrollReveal>
        <p className="text-center text-muted-foreground/50 text-xs font-grotesk uppercase tracking-[0.4em] mb-10">
          Trusted by industry leaders
        </p>
      </ScrollReveal>

      <div className="relative group">
        {/* Fade masks */}
        <div className="absolute left-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-r from-background to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-l from-background to-transparent pointer-events-none" />

        <div className="flex overflow-hidden group-hover:[&>div]:animation-play-state-paused">
          <motion.div
            className="flex shrink-0"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 30,
                ease: "linear",
              },
            }}
            style={{ animationPlayState: "running" }}
          >
            {[...companies, ...companies].map((name, i) => (
              <LogoItem key={`${name}-${i}`} name={name} />
            ))}
          </motion.div>
        </div>
      </div>

      <div className="section-divi8r mt-16" />
    </section>
  );
};

export default TrustStrip;
