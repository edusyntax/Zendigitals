import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

const steps = [
  {
    num: "01",
    title: "Discover",
    description: "Deep-dive audit into your brand, market position, competitors, and growth architecture.",
  },
  {
    num: "02",
    title: "Architect",
    description: "Strategic blueprint mapping goals to systems — no guesswork, pure engineering.",
  },
  {
    num: "03",
    title: "Design",
    description: "Pixel-perfect interfaces sculpted for conversion, clarity, and brand authority.",
  },
  {
    num: "04",
    title: "Build",
    description: "Performance-obsessed development. Scalable, secure, architecturally sound.",
  },
  {
    num: "05",
    title: "Optimize",
    description: "Continuous iteration powered by data. We compound results, not just maintain them.",
  },
];

const HowItWorks = () => {
  return (
    <section id="process" className="relative py-16 md:py-20 site-container">
      <div className="section-divider mb-20" />

      <ScrollReveal>
        <p className="text-accent font-grotesk text-sm uppercase tracking-[0.3em] mb-4">Our Process</p>
        <h2 className="editorial-heading text-[clamp(2rem,5vw,4.5rem)] text-foreground mb-16 max-w-3xl">
          How We <span className="font-serif italic text-gradient-accent">Work</span>
        </h2>
      </ScrollReveal>

      {/* Progress line */}
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-4 md:left-8 top-0 bottom-0 w-px bg-border" />

        <div className="flex flex-col gap-12 md:gap-16">
          {steps.map((step, i) => (
            <ScrollReveal key={step.num} delay={i * 0.08}>
              <div className="flex gap-8 md:gap-16 items-start group">
                {/* Dot on line */}
                <div className="relative flex-shrink-0">
                  <motion.div
                    className="w-8 h-8 md:w-16 md:h-16 rounded-full glass flex items-center justify-center relative z-10 border border-foreground/[0.12]"
                    whileInView={{ scale: [0.8, 1.1, 1] }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                  >
                    <span className="text-accent font-grotesk text-xs md:text-sm font-bold">{step.num}</span>
                  </motion.div>
                  {/* Glow */}
                  <div className="absolute inset-0 rounded-full bg-accent/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                {/* Content */}
                <div className="flex-1 pb-6">
                  <h3 className="text-foreground text-2xl md:text-4xl font-grotesk font-bold mb-3 group-hover:text-accent transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-xl">
                    {step.description}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      <div className="section-divider mt-20" />
    </section>
  );
};

export default HowItWorks;
