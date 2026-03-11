import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

const companies = [
  "NVIDIA", "Stripe", "Vercel", "Linear", "Figma",
  "Notion", "Arc", "Supabase", "Datadog", "Loom",
  "Scale AI", "Ramp", "Webflow", "PostHog", "Retool",
];

const LogoItem = ({ name }: { name: string }) => (
  <div className="flex items-center justify-center px-8 md:px-10 py-3 md:py-4 select-none" data-hover>
    <span className="text-muted-foreground/60 font-grotesk text-xs md:text-sm lg:text-base font-semibold tracking-[0.15em] uppercase whitespace-nowrap hover:text-foreground transition-colors duration-300">
      {name}
    </span>
  </div>
);

const TrustStrip = () => {
  return (
    <section className="relative py-8 md:py-8 overflow-hidden">
      <div className="site-container">
        <ScrollReveal>
          <p className="text-center text-muted-foreground text-[0.7rem] md:text-xs font-grotesk font-semibold uppercase tracking-[0.3em] mb-8">
            Trusted by industry leaders
          </p>
        </ScrollReveal>
      </div>

      <div className="relative group site-container">
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

      <div className="site-container mt-10 md:mt-12">
        <div className="section-divider" />
      </div>
    </section>
  );
};

export default TrustStrip;
