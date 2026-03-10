import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
import TiltCard from "./TiltCard";

const testimonials = [
  {
    quote: "Zendigitalz didn't just build our platform — they engineered our market position. Revenue up 340% in 8 months.",
    name: "Alexei Volkov",
    role: "CEO",
    company: "Nebula Finance",
  },
  {
    quote: "The precision. The craft. Every pixel, every interaction — deliberately architected. This is what elite looks like.",
    name: "Maya Chen",
    role: "CPO",
    company: "Void Studios",
  },
  {
    quote: "We interviewed 12 agencies. Zendigitalz was the only team that understood systems, not just aesthetics.",
    name: "James Whitfield",
    role: "Founder",
    company: "Chromatic",
  },
  {
    quote: "Our conversion rate tripled. Our brand perception shifted entirely. They don't build websites — they build authority.",
    name: "Sophia Laurent",
    role: "CMO",
    company: "Scale Dynamics",
  },
  {
    quote: "Working with Zendigitalz felt like upgrading from a sedan to a spacecraft. Technically flawless execution.",
    name: "Raj Patel",
    role: "CTO",
    company: "Apex Protocol",
  },
];

const TestimonialsSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  const x = useTransform(scrollYProgress, [0, 1], ["5%", "-25%"]);

  return (
    <section className="relative py-16 md:py-20 overflow-hidden" ref={containerRef}>
      <div className="site-container mb-12">
        <ScrollReveal>
          <p className="text-accent font-grotesk text-sm uppercase tracking-[0.3em] mb-4">Testimonials</p>
          <h2 className="editorial-heading text-[clamp(2rem,5vw,4.5rem)] text-foreground max-w-3xl">
            Client <span className="font-serif italic text-gradient-accent">Voices</span>
          </h2>
        </ScrollReveal>
      </div>

      <motion.div
        style={{ x }}
        className="flex gap-6 site-container overflow-x-auto md:overflow-visible snap-x snap-mandatory md:snap-none scrollbar-hide"
      >
        {testimonials.map((t, i) => (
          <ScrollReveal key={t.name} delay={i * 0.08} direction="right">
            <TiltCard>
              <div className="glass rounded-2xl p-8 md:p-10 min-w-[80vw] md:min-w-[400px] max-w-[450px] flex flex-col h-full group snap-start border border-foreground/[0.12] relative overflow-hidden transition-transform duration-300 hover:scale-[1.02] hover:shadow-[0_0_30px_-8px_hsl(var(--accent)/0.15)]">
                {/* Inner reflection */}
                <div className="absolute inset-0 bg-gradient-to-br from-foreground/[0.03] via-transparent to-transparent pointer-events-none rounded-2xl" />

                {/* Oversized quotation mark */}
                <span className="absolute top-4 left-6 text-[120px] leading-none font-serif text-accent/[0.06] pointer-events-none select-none">"</span>

                {/* Quote */}
                <p className="text-foreground text-xl md:text-2xl leading-relaxed mb-8 flex-1 font-light relative z-10">
                  "{t.quote}"
                </p>

                {/* Attribution */}
                <div className="flex items-center gap-4 relative z-10">
                  <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                    <span className="text-accent font-grotesk text-sm font-bold">{t.name[0]}</span>
                  </div>
                  <div>
                    <p className="text-foreground font-grotesk font-semibold text-sm">{t.name}</p>
                    <p className="text-muted-foreground text-xs">{t.role}, {t.company}</p>
                  </div>
                </div>

                {/* Active glow */}
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-1/2 h-px bg-accent/0 group-hover:bg-accent/40 blur-sm transition-all duration-500" />
              </div>
            </TiltCard>
          </ScrollReveal>
        ))}
      </motion.div>
    </section>
  );
};

export default TestimonialsSection;
