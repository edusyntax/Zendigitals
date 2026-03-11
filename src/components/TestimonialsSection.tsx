import ScrollReveal from "./ScrollReveal";

const testimonials = [
  {
    logo: "hulu",
    rating: "4.9",
    quote:
      "The progress tracker is fantastic. It’s motivating to see how much I've improved over time.",
    name: "Kate Davis",
    username: "frable_captain_8",
  },
  {
    logo: "HBO max",
    rating: "3.2",
    quote:
      "The app has a great mix of usability and performance. A seamless experience overall.",
    name: "Martin Kazlauskas",
    username: "sartorial_statue_59",
  },
  {
    logo: "Disney+",
    rating: "4.9",
    quote:
      "Consistent execution, intuitive design, and measurable improvement in engagement.",
    name: "Sanjay Sharma",
    username: "voracious_rainbows_68",
  },
  {
    logo: "STARZ",
    rating: "3.2",
    quote:
      "A well-balanced system built with long-term scalability in mind.",
    name: "Tawanna Afumba",
    username: "intrinsigent_joelam_15",
  },
  {
    logo: "VIX",
    rating: "4.9",
    quote:
      "Thoughtful architecture and premium execution across every detail.",
    name: "Larry King",
    username: "pendulous_unicorn_46",
  },
  {
    logo: "prime video",
    rating: "3.2",
    quote:
      "Precision-driven development with measurable impact.",
    name: "Fatima Mohamed",
    username: "salubrious_artist_72",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="site-container">
        {/* Header */}
        <ScrollReveal>
          <h2 className="editorial-heading text-[clamp(2rem,4vw,3rem)] text-center text-foreground">
            Our trusted{" "}
            <span className=" bg-[#FF6A3D] text-accent-foreground px-2 py-1 rounded-sm">
              clients
            </span>
          </h2>
          <p className="text-center text-muted-foreground mt-4 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            Our mission is to drive progress and enhance the lives of our customers by
            delivering superior products and services that exceed expectations.
          </p>
        </ScrollReveal>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {testimonials.map((t, i) => (
            <ScrollReveal key={t.username} delay={i * 0.05}>
              <article
                className="bg-card rounded-2xl p-6 h-[220px] flex flex-col justify-between shadow-sm border border-border transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg/40"
              >
                {/* Top */}
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <span className="font-grotesk font-semibold text-sm capitalize text-card-foreground">
                      {t.logo}
                    </span>
                    <span className="text-xs font-medium text-accent flex items-center gap-1">
                      {t.rating}
                      <span aria-hidden="true">★</span>
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                    “{t.quote}”
                  </p>
                </div>

                {/* Bottom */}
                <div>
                  <p className="text-sm font-semibold text-card-foreground">
                    {t.name}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {t.username}
                  </p>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;