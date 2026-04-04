import { HeroData, HeroBackground } from "@/types/services";
import { ButtonGroup } from "@/components/ui/ButtonGroup";
import { heroButtons } from "@/content/button";

interface Props {
  data: HeroData;
}

/* ================= BACKGROUND RENDERER ================= */
function BackgroundRenderer({ background }: { background: HeroBackground }) {
  if (!background || background.type === "none") return null;

  if (background.type === "image" && background.image) {
    return (
      <img
        src={background.image}
        className="w-full h-full object-cover scale-105"
        alt=""
      />
    );
  }

  if (background.type === "video" && background.video) {
    return (
      <video
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover scale-105"
      >
        <source src={background.video} />
      </video>
    );
  }

  if (background.type === "gradient" && background.gradient) {
    return (
      <div className={`w-full h-full bg-gradient-to-b ${background.gradient}`} />
    );
  }

  return null;
}

/* ================= HERO ================= */
export function HeroSection({ data }: Props) {
  return (
    <section className="pt-24  relative overflow-hidden">

      {/* ================= BACKGROUND ================= */}
      <div className="absolute inset-0 z-0">

        {/* dynamic bg */}
        {/* <BackgroundRenderer background={data.background} /> */}

        {/* theme-safe overlay */}
        <div className="absolute inset-0 bg-background/80 dark:bg-background/60" />

        {/* depth gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/40 to-background" />

        {/* ambient layer */}
        <div className="absolute inset-0 bg-background-ambient opacity-40 pointer-events-none" />

        {/* optional premium tint */}
        <div className="absolute inset-0 bg-primary/5 mix-blend-overlay" />

      </div>

      {/* ================= CONTENT ================= */}
      <div className="max-w-7xl mx-auto  md:px-6 lg:px-20 relative z-10">

        <div className="max-w-5xl backdrop-blur-sm bg-background/40 dark:bg-background/30 p-6 md:p-8 rounded-2xl">

          {/* eyebrow */}
          <p className="text-sm  font-bold mb-4 tracking-wide">
            {data.eyebrow}
          </p>

          {/* title */}
          <h1 className="text-4xl md:text-6xl font-semibold leading-[1.1] tracking-tight">
            {data.title}
            {data.highlight && (
              <span className="block text-primary">
                {data.highlight}
              </span>
            )}
          </h1>

          {/* subtitle */}
          <p className="mt-6 text-lg text-muted-foreground max-w-xl leading-relaxed">
            {data.subtitle}
          </p>

          {/* bullets */}
          <div className="mt-6 space-y-2 text-muted-foreground text-sm md:text-base">
            {data.bullets.map((b, i) => (
              <p key={i}>✔ {b}</p>
            ))}
          </div>

          {/* CTA */}
<ButtonGroup buttons={heroButtons} />

        </div>
    <div className="overflow-hidden border-y border-border py-4">

      <div className="flex whitespace-nowrap animate-marquee gap-12 text-muted-foreground">

        {[
          "Higher engagement",
          "Faster load speeds",
          "Better SEO rankings",
          "Lower bounce rates",
          "Stronger brand perception",
        ].map((item, i) => (
          <span key={i} className="flex items-center gap-6">
            {item}
            <span className="text-primary">*</span>
          </span>
        ))}

        {/* DUPLICATE */}
        {[
          "Higher engagement",
          "Faster load speeds",
          "Better SEO rankings",
          "Lower bounce rates",
          "Stronger brand perception",
        ].map((item, i) => (
          <span key={`dup-${i}`} className="flex items-center gap-6">
            {item}
            <span className="text-primary">*</span>
          </span>
        ))}

      </div>

    </div>
      </div>

    </section>
  );
}