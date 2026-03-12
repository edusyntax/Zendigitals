import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FaWhatsapp, FaPhone, FaPlus } from "react-icons/fa";
import { useState } from "react";
import ScrollReveal from "./ScrollReveal";

import glassPrism from "@/assets/glass-prism.png";
import bgcard from "@/assets/bgcard.png"
import bgcard1 from "@/assets/bgcard-1.png"
import chromeKnot from "@/assets/chrome-knot.png";
import holographicFluid from "@/assets/holographic-fluid.png";
import heroObject from "@/assets/hero-object.jpg";
import metalMonolith from "@/assets/metallic-monolith.png";

const services = [
  {
    title: "Website Design",
    description:
      "Stunning, conversion-focused websites that captivate visitors and drive measurable business results.",
    image: bgcard1,
    href: "/services/website-design",
  },
  {
    title: "SEO Services",
    description:
      "Dominate search rankings with data-driven SEO strategies that drive sustainable organic traffic.",
    image: bgcard1,
    href: "/services/seo-services",
  },
  {
    title: "Lead Generation",
    description:
      "High-converting lead generation campaigns that fill your pipeline with qualified prospects.",
    image: bgcard1,
    href: "/services/lead-generation-campaigns",
  },
  {
    title: "Social Media Marketing",
    description:
      "Strategic social media management that builds engaged communities.",
    image: bgcard1,
    href: "/services/social-media-marketing",
  },
  {
    title: "PPC Services",
    description:
      "ROI-focused paid advertising campaigns across Google and social platforms.",
    image: bgcard1,
    href: "/services/ppc-services",
  },
  {
    title: "AI Automation",
    description:
      "Custom AI integrations and workflow automation that scale marketing operations.",
    image: bgcard1,
    href: "/services/ai-automation",
  },
];

const CapabilitiesSection = () => {
  const navigate = useNavigate();
  const [active, setActive] = useState<number | null>(null);

  return (
    <section id="services" className="py-6 md:py-4 site-container">

    <ScrollReveal>
        <p className="text-accent font-grotesk text-sm uppercase tracking-[0.3em] mb-4">
          What<span className="bg-[#FF6A3D] text-white px-2 py-1 rounded-md">We Do</span> 
        </p>
        <h2 className="editorial-heading text-[clamp(2rem,5vw,4.5rem)] text-foreground mb-12 md:mb-16 max-w-3xl">
          Services built for{" "}
          <span className="font-serif italic text-gradient-accent">
            exceptional
          </span> {" "}
          outcomes
        </h2>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

        {services.map((svc, i) => {

          const number = String(i + 1).padStart(2, "0");

          const [pos, setPos] = useState({ x: 0, y: 0 });

          const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
            const rect = e.currentTarget.getBoundingClientRect();

            const x = (e.clientX - rect.left) / rect.width - 0.5;
            const y = (e.clientY - rect.top) / rect.height - 0.5;

            setPos({ x, y });
          };

          return (
            <motion.div
              key={svc.title}
              onClick={() => navigate(svc.href)}
              onMouseMove={handleMouseMove}
              onMouseLeave={() => setPos({ x: 0, y: 0 })}
              className="relative h-[360px] rounded-2xl overflow-hidden cursor-pointer group"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
            >

              {/* Image with Inner Zoom + Parallax */}
              <motion.img
                src={svc.image}
                alt={svc.title}
                className="absolute inset-0 w-full h-full object-cover transition duration-500 group-hover:brightness-110"
                animate={{
                  scale: 1.15,
                  x: pos.x * -30,
                  y: pos.y * -30
                }}
                transition={{
                  type: "spring",
                  stiffness: 120,
                  damping: 20
                }}
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"/>

              {/* Ghost Number */}
              <span className="absolute top-6 right-6 text-[90px] font-bold text-white/10 select-none">
                {number}
              </span>

              {/* Content */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end z-10">

                <h3 className="text-white text-2xl font-bold mb-2">
                  {svc.title}
                </h3>

                <p className="text-white/80 text-sm leading-relaxed mb-5 max-w-xs">
                  {svc.description}
                </p>

                {/* Bottom Actions */}
                <div className="flex items-center justify-between">

                  {/* Explore Button */}
                  <button
                    className="flex items-center gap-2 text-white text-sm font-medium px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20  hover:border-accent transition"
                  >
                    Explore
                    <motion.span
                      whileHover={{ x: 4 }}
                      className="text-white"
                    >
                      →
                    </motion.span>
                  </button>

                  {/* Expandable Actions */}
                  <div className="flex items-center gap-2">

                    {active === i && (
                      <motion.div
                        className="flex items-center gap-2"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                      >
                        <a
                          href="https://wa.me/919999999999"
                          onClick={(e) => e.stopPropagation()}
                          className="w-9 h-9 rounded-full bg-green-500 flex items-center justify-center text-white"
                        >
                          <FaWhatsapp />
                        </a>

                        <a
                          href="tel:+919999999999"
                          onClick={(e) => e.stopPropagation()}
                          className="w-9 h-9 rounded-full bg-accent flex items-center justify-center text-white"
                        >
                          <FaPhone />
                        </a>
                      </motion.div>
                    )}

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setActive(active === i ? null : i);
                      }}
                      className="w-9 h-9 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition"
                    >
                      <FaPlus />
                    </button>

                  </div>

                </div>

              </div>

              {/* Glow */}
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-2/3 h-2 bg-accent/0 group-hover:bg-accent/40 blur-lg transition-all duration-500"/>

            </motion.div>
          );

        })}
      </div>

    </section>
  );
};

export default CapabilitiesSection;