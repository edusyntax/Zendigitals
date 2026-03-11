import { useNavigate } from "react-router-dom";
import TiltCard from "./TiltCard";
import ScrollReveal from "./ScrollReveal";
import glassPrism from "@/assets/glass-prism.png";
import chromeKnot from "@/assets/chrome-knot.png";
import holographicFluid from "@/assets/holographic-fluid.png";
import heroObject from "@/assets/hero-object.jpg";
import metalMonolith from "@/assets/metallic-monolith.png";

const services = [
  {
    title: "Website Design",
    micro: "Design & development",
    description: "Stunning, conversion-focused websites that captivate visitors and drive measurable business results.",
    image: heroObject,
    tags: ["Custom Design", "Responsive", "Performance"],
    href: "/services/website-design",
  },
  {
    title: "SEO Services",
    micro: "Organic dominance",
    description: "Dominate search rankings with data-driven SEO strategies that drive sustainable organic traffic and revenue growth.",
    image: chromeKnot,
    tags: ["Technical SEO", "Content Strategy", "Link Building"],
    href: "/services/seo-services",
  },
  {
    title: "Lead Generation",
    micro: "Pipeline growth",
    description: "High-converting lead generation campaigns that fill your pipeline with qualified prospects ready to buy.",
    image: holographicFluid,
    tags: ["Multi-Channel", "Lead Scoring", "Nurture"],
    href: "/services/lead-generation-campaigns",
  },
  {
    title: "Social Media Marketing",
    micro: "Brand amplification",
    description: "Strategic social media management that builds engaged communities and converts followers into customers.",
    image: glassPrism,
    tags: ["Strategy", "Content", "Community"],
    href: "/services/social-media-marketing",
  },
  {
    title: "PPC Services",
    micro: "Paid acquisition",
    description: "ROI-focused paid advertising across Google, Bing, and social platforms that scales revenue predictably.",
    image: metalMonolith,
    tags: ["Google Ads", "Social Ads", "Landing Pages"],
    href: "/services/ppc-services",
  },
  {
    title: "AI Automation",
    micro: "Intelligent systems",
    description: "Custom AI integrations and workflow automation that scale marketing operations exponentially.",
    image: heroObject,
    tags: ["AI Workflows", "Personalization", "Automation"],
    href: "/services/ai-automation",
  },
];

const CapabilitiesSection = () => {
  const navigate = useNavigate();

  return (
    <section id="services" className="relative py-6 md:py-12 site-container">
      <ScrollReveal>
        <p className="text-accent font-grotesk text-sm uppercase tracking-[0.3em] mb-4">
          What We Do
        </p>
        <h2 className="editorial-heading text-[clamp(2rem,5vw,4.5rem)] text-foreground mb-12 md:mb-16 max-w-3xl">
          Services built for{" "}
          <span className="font-serif italic text-gradient-accent">
            exceptional
          </span>{" "}
          outcomes
        </h2>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {services.map((svc, i) => (
          <ScrollReveal key={svc.title} delay={i * 0.08}>
            <TiltCard className="h-full">
              <div
                className="glass rounded-2xl p-5 md:p-6 h-[300px] md:h-[310px] flex flex-col group border border-foreground/[0.12] relative overflow-hidden cursor-pointer"
                onClick={() => navigate(svc.href)}
                role="link"
                tabIndex={0}
                onKeyDown={(e) => e.key === "Enter" && navigate(svc.href)}
              >
                {/* Inner reflection */}
                <div className="absolute inset-0 bg-gradient-to-br from-foreground/[0.04] via-transparent to-transparent pointer-events-none rounded-2xl" />
                {/* Hover glow */}
                <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-2/3 h-1 bg-accent/0 group-hover:bg-accent/30 blur-lg transition-all duration-500 pointer-events-none" />

                <div className="relative z-10 flex flex-col h-full">
                  <div className="relative w-full h-20 mb-4 rounded-lg overflow-hidden bg-background-secondary/50 flex-shrink-0">
                    <img
                      src={svc.image}
                      alt={svc.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-2"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card/60 to-transparent" />
                  </div>
                  <p className="text-accent text-xs font-grotesk uppercase tracking-widest mb-1.5">
                    {svc.micro}
                  </p>
                  <h3 className="text-foreground text-lg md:text-xl font-grotesk font-bold mb-2">
                    {svc.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-1 line-clamp-3">
                    {svc.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {svc.tags.map((tag) => (
                      <span
                        key={tag}
                        className="glass text-xs text-muted-foreground px-3 py-1 rounded-full border border-foreground/[0.08]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </TiltCard>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
};

export default CapabilitiesSection;
