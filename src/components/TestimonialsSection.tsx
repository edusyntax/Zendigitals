import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const items = [
  {
    id: "01",
    title: "Joy of Traveling",
    description:
      "Discover the emotional richness that comes from immersive journeys and cultural exploration.",
    image: "https://picsum.photos/500/700?1",
  },
  {
    id: "02",
    title: "Purposeful Journey",
    description:
      "Every trip can teach something new. When we travel with purpose, every step feels meaningful and alive.",
    image: "https://picsum.photos/500/700?2",
  },
  {
    id: "03",
    title: "Smart Trip Planning",
    description:
      "Structure your adventures with clarity and intention for maximum impact.",
    image: "https://picsum.photos/500/700?3",
  },
  {
    id: "04",
    title: "Memories Beyond Photos",
    description:
      "Moments that go deeper than documentation — they transform perspective.",
    image: "https://picsum.photos/500/700?4",
  },
  {
    id: "05",
    title: "Budget Adventures",
    description:
      "Extraordinary experiences don’t require extraordinary budgets.",
    image: "https://picsum.photos/500/700?5",
  },
];

const HoverFlexSection = () => {
  const [active, setActive] = useState<number | null>(1);

  return (
    <section className="relative py-6 md:py-12 overflow-hidden">
      <div className="site-container">

        {/* Heading */}
        <ScrollReveal>
          <p className="text-xs tracking-[0.4em] uppercase text-accent mb-2">
            Frequently{" "}
            <span className="bg-[#FF6A3D] text-white px-2 py-2 rounded-md">
              Asked
            </span>
          </p>

          <h2 className="text-[clamp(2.4rem,4vw,3.2rem)] leading-tight font-bold tracking-tight text-foreground max-w-2xl mb-12">
            Clear answers.{" "}
            <span className="font-serif text-gradient-accent">
              No noise.
            </span>
          </h2>
        </ScrollReveal>

        {/* FAQ List */}
        <div className="space-y-8">

          {items.map((item, index) => {
            const isActive = active === index;

            return (
              <motion.div
                key={item.id}
                onMouseEnter={() => setActive(index)}
                className="relative border border-border cursor-pointer rounded-xl overflow-visible bg-card"
                animate={{
                  backgroundColor: isActive
                    ? "hsl(var(--accent) / 0.08)"
                    : "hsl(var(--card))",
                  scale: isActive ? 1.02 : 1,
                }}
                transition={{ duration: 0.25 }}
              >

                {/* Floating Image */}
                <AnimatePresence>
                  {isActive && (
                    <motion.img
                      key={item.image}
                      src={item.image}
                      initial={{ opacity: 0, scale: 0.85, rotate: -6, x: 20 }}
                      animate={{ opacity: 1, scale: 1, rotate: -6, x: 0 }}
                      exit={{ opacity: 0, scale: 0.85, rotate: -6, x: 20 }}
                      transition={{ duration: 0.35 }}
                      className="
                        hidden md:block
                        absolute
                        right-16
                        top-1/2
                        -translate-y-1/2
                        w-32
                        h-40
                        object-cover
                        rounded-xl
                        shadow-xl
                        pointer-events-none
                        z-20
                      "
                    />
                  )}
                </AnimatePresence>

                <div className="flex items-center justify-between py-6 px-8 md:py-8 md:px-10 gap-4">

                  {/* LEFT CONTENT */}
                  <div className="flex-1">
                    <div className="flex items-start gap-6">

                      <span className="font-mono text-2xl font-bold flex-shrink-0 text-accent">
                        {item.id}
                      </span>

                      <div className="flex-1">

                        <h3 className="text-2xl font-bold text-foreground">
                          {item.title}
                        </h3>

                        <AnimatePresence>
                          {isActive && (
                            <motion.p
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.3 }}
                              className="mt-3 text-sm leading-relaxed max-w-2xl overflow-hidden text-muted-foreground"
                            >
                              {item.description}
                            </motion.p>
                          )}
                        </AnimatePresence>

                      </div>
                    </div>
                  </div>

                  {/* RIGHT SIDE */}
                  <div className="flex items-center gap-4 md:gap-6 flex-shrink-0">

                    <motion.div
                      animate={{ rotate: isActive ? 45 : 0 }}
                      transition={{ duration: 0.3 }}
                      className={`w-10 h-10 flex items-center justify-center rounded-full border-2 transition-all ${
                        isActive
                          ? "border-accent/60 text-accent"
                          : "border-border text-muted-foreground"
                      }`}
                    >
                      <ArrowUpRight size={18} strokeWidth={2.5} />
                    </motion.div>

                  </div>

                </div>

              </motion.div>
            );
          })}

        </div>
      </div>
    </section>
  );
};

export default HoverFlexSection;