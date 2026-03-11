import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

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
    <section className="relative bg-background py-16 md:py-24 px-6 md:px-10 lg:px-20 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <p className="text-accent text-xs uppercase tracking-[0.25em] mb-3">
          Frequently{" "}
          <span className="bg-[#FF6A3D] text-accent-foreground px-2 py-1 rounded-md">
            Asked
          </span>
        </p>
        <h2 className="editorial-heading text-[clamp(2.2rem,4vw,3.2rem)] font-semibold text-foreground max-w-3xl mb-10 md:mb-14">
          Clear answers.{" "}
          <span className="font-serif italic text-muted-foreground">
            No noise.
          </span>
        </h2>

        <div className="space-y-6">

        {items.map((item, index) => {
          const isActive = active === index;

          return (
            <motion.div
              key={item.id}
              onMouseEnter={() => setActive(index)}
              className="relative border border-border cursor-pointer rounded-xl overflow-hidden bg-card"
              animate={{
                backgroundColor: isActive ? "hsl(var(--accent) / 0.1)" : "hsl(var(--card))",
                color: isActive ? "hsl(var(--foreground))" : "hsl(var(--foreground))",
              }}
              transition={{ duration: 0.3 }}
              whileHover={
                !isActive ? { backgroundColor: "hsl(var(--card) / 0.9)" } : {}
              }
            >
              <div className="flex items-center justify-between py-6 px-8 md:py-8 md:px-10 gap-4">

                {/* LEFT CONTENT */}
                <div className="flex-1">
                  <div className="flex items-start gap-6">
                    <span
                      className={`font-mono text-2xl font-bold flex-shrink-0 ${
                        isActive ? "text-accent" : "text-accent"
                      }`}
                    >
                      {item.id}
                    </span>

                    <div className="flex-1">
                      <h3
                        className={`text-2xl font-bold ${
                          isActive ? "text-foreground" : "text-foreground"
                        }`}
                      >
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

                  {/* Floating Image */}
                  <AnimatePresence>
                    {isActive && (
                      <motion.img
                        key={item.image}
                        src={item.image}
                        initial={{ opacity: 0, scale: 0.85, x: 20 }}
                        animate={{ opacity: 1, scale: 1, x: 0 }}
                        exit={{ opacity: 0, scale: 0.85, x: 20 }}
                        transition={{ duration: 0.3 }}
                        className="hidden md:block w-28 h-36 object-cover rounded-lg shadow-lg"
                      />
                    )}
                  </AnimatePresence>

                  {/* Arrow Button */}
                  <motion.div
                    animate={{ rotate: isActive ? 45 : 0 }}
                    transition={{ duration: 0.3 }}
                    className={`w-10 h-10 flex-shrink-0 flex items-center justify-center rounded-full border-2 transition-all ${
                      isActive
                        ? "border-accent/60 text-accent"
                        : "border-border text-muted-foreground group-hover:border-accent/60 group-hover:text-accent"
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