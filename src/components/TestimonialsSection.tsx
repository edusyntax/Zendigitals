import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

const testimonials = [
  {
    quote: "Zendigital rebuilt our acquisition system and doubled our conversion rate.",
    name: "Nora Elkins",
    role: "Head of Growth",
    avatar: "https://i.pravatar.cc/60?img=1",
  },
  {
    quote: "The clarity they brought to our brand architecture changed everything.",
    name: "Amira Benali",
    role: "Brand Director",
    avatar: "https://i.pravatar.cc/60?img=2",
  },
  {
    quote: "Systems that compound results month after month.",
    name: "Priya Sharma",
    role: "VP Marketing",
    avatar: "https://i.pravatar.cc/60?img=3",
  },
  {
    quote: "Clean execution and scalable infrastructure.",
    name: "Leo Hartmann",
    role: "Founder",
    avatar: "https://i.pravatar.cc/60?img=4",
  },
  {
    quote: "Zendigital built a digital engine for predictable demand.",
    name: "Suki Tanaka",
    role: "Editorial Lead",
    avatar: "https://i.pravatar.cc/60?img=5",
  },
];

const TestimonialCard = ({ t }: any) => (
  <div
    className="
      w-[260px]
      h-[240px]
      rounded-2xl
      border border-border
      bg-card
      p-6
      shadow-sm
      flex flex-col justify-between
      mx-3
      select-none
    "
  >
    <p className="text-muted-foreground text-sm leading-relaxed">
      “{t.quote}”
    </p>

    <div className="flex items-center gap-3">
      <img
        src={t.avatar}
        className="w-10 h-10 rounded-full object-cover"
      />
      <div>
        <p className="text-sm font-semibold text-card-foreground">
          {t.name}
        </p>
        <p className="text-xs text-muted-foreground">
          {t.role}
        </p>
      </div>
    </div>
  </div>
);

const TestimonialsSection = () => {
  const row1 = testimonials.slice(0, 3);
  const row2 = testimonials.slice(2);

  return (
    <section className="relative py-6 overflow-hidden">

      {/* Heading */}
      <div className="site-container">
        <ScrollReveal>
          <p className="text-xs tracking-[0.4em] uppercase text-accent mb-2">
            Strategic{" "}
            <span className="bg-[#FF6A3D] text-white px-2 py-2 rounded-md">
              Intelligence
            </span>
          </p>

          <h2 className="text-[clamp(2.4rem,3.5vw,3.2rem)] mb-1 leading-tight font-bold tracking-tight text-foreground max-w-2xl">
            Insights shaping digital{" "}
            <span className="font-serif text-gradient-accent">authority</span>
          </h2>
        </ScrollReveal>
      </div>

      {/* Marquee Container */}
      <div className="relative group site-container space-y-6">

        {/* Edge fade masks */}

        {/* Row 1 */}
        <div className="flex overflow-hidden group-hover:[&>div]:animation-play-state-paused">

          <motion.div
            className="flex shrink-0"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              repeatType: "loop",
              duration: 35,
              ease: "linear",
            }}
            style={{ willChange: "transform" }}
          >
            {[...row1, ...row1, ...row1].map((t, i) => (
              <TestimonialCard key={`r1-${i}`} t={t} />
            ))}
          </motion.div>

        </div>

        {/* Row 2 */}
        <div className="flex overflow-hidden group-hover:[&>div]:animation-play-state-paused">

          <motion.div
            className="flex shrink-0"
            animate={{ x: ["-50%", "0%"] }}
            transition={{
              repeat: Infinity,
              repeatType: "loop",
              duration: 35,
              ease: "linear",
            }}
            style={{ willChange: "transform" }}
          >
            {[...row2, ...row2, ...row2].map((t, i) => (
              <TestimonialCard key={`r2-${i}`} t={t} />
            ))}
          </motion.div>

        </div>

      </div>

    </section>
  );
};

export default TestimonialsSection;