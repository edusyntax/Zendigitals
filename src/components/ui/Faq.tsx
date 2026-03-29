import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const items = [
  {
    id: "01",
    title: "What exactly do you help businesses with?",
    description:
      "We help businesses get more visibility online and turn that visibility into actual leads. That can be through SEO, ads, social media, or improving your website—depending on what you need.",
    image: "https://picsum.photos/500/700?1",
  },
  {
    id: "02",
    title: "Which service should I start with?",
    description:"That depends on your goal. If you need quick results, ads usually make sense. If you're thinking long-term, SEO and content help. We usually suggest a direction after understanding your business.",
        image: "https://picsum.photos/500/700?2",
  },
  {
    id: "03",
    title: "How soon can I expect results?",
    description:"Paid campaigns can start showing activity within a few days. Organic methods like SEO take more time, but they tend to be more consistent in the long run.",
    image: "https://picsum.photos/500/700?3",
  },
  {
    id: "04",
    title: " Do I need all your services or just one?",
    description:"Not necessarily all. Some businesses only need one or two things done right. We usually recommend only what’s required instead of pushing everything.",
    image: "https://picsum.photos/500/700?4",
  },
  {
    id: "05",
    title: "Will I be able to track what’s happening?",
    description:
      "Yes. We keep things transparent. You’ll know what’s being done, what’s working, and where things need improvement.",
    image: "https://picsum.photos/500/700?5",
  },
  {
    id: "06",
    title: " Do you work with small businesses or only big brands?",
    description:
      "We work with both. In fact, many of the businesses we work with are small or growing, and that’s where structured marketing makes a big difference.",
    image: "https://picsum.photos/500/700?5",
  },
];

const HoverFlexSection = () => {
  const [active, setActive] = useState<number | null>(1);

  return (
      <section className="relative py-6 md:py-12 overflow-hidden">
      <div className="site-container">

        {/* Heading */}
        <p className="text-accent text-xs uppercase tracking-[0.25em] mb-3">
          Frequently{" "}
          <span className="bg-[#FF6A3D] text-accent-foreground px-2 py-1 rounded-md">
            Asked
          </span>
        </p>

        <h2 className="editorial-heading text-[clamp(2.2rem,4vw,3.2rem)] font-semibold text-foreground max-w-3xl mb-10 md:mb-14">
        Clear answers.{" "}
     <span className="font-serif text-gradient-accent">
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
                      initial={{ opacity: 0, scale: 0.85, rotate: -6, y: -80,x:-50 }}
                      animate={{ opacity: 1, scale: 1, rotate: -6, y:30 }}
                      exit={{ opacity: 0, scale: 0.85, rotate: -6, y: 10 }}
                      transition={{ duration: 0.35 }}
                      className="
                        hidden md:block
                        absolute
                        right-16
                        -top-20
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
                      className={`w-10 h-10 flex-shrink-0 flex items-center justify-center rounded-full border-2 transition-all ${
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