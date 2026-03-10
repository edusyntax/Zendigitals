import PageLayout from "@/components/PageLayout";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import SEOHead, { serviceJsonLd } from "@/components/SEOHead";

const WebsiteDesign = () => (
  <PageLayout>
    <SEOHead title="Website Design" description="Stunning, conversion-focused website design that turns visitors into customers. Custom designs built for performance, speed, and results." jsonLd={serviceJsonLd("Website Design", "Custom website design focused on conversions, performance, and modern aesthetics.")} />
    <ServicePageTemplate
      overline="Website Design"
      title="Websites designed to"
      titleAccent="convert & impress"
      description="We craft stunning, performance-optimized websites that captivate visitors and drive measurable business results."
      problem="Most websites look outdated, load slowly, and fail to convert visitors. Generic templates don't reflect your brand's unique value, and poor UX drives potential customers straight to competitors."
      solution="We design and build custom websites from the ground up — optimized for speed, conversion, and brand impact. Every element is crafted with purpose, from layout architecture to micro-interactions that guide users toward action."
      process={[
        { step: "Phase 01", title: "Discovery & Strategy", description: "Deep-dive into your brand, audience, and business goals to define the perfect digital experience." },
        { step: "Phase 02", title: "UI/UX Design", description: "Wireframes and high-fidelity designs with conversion-optimized layouts and intuitive navigation." },
        { step: "Phase 03", title: "Development", description: "Clean, performant code with responsive design, SEO foundations, and blazing-fast load times." },
        { step: "Phase 04", title: "Launch & Optimize", description: "Thorough QA, analytics setup, and post-launch optimization to maximize performance." },
      ]}
      benefits={[
        { title: "Conversion-Focused", description: "Every design decision is backed by data and optimized to turn visitors into customers." },
        { title: "Lightning Fast", description: "Sub-2-second load times that reduce bounce rates and improve search rankings." },
        { title: "Mobile-First", description: "Flawless experience across all devices — from mobile to ultra-wide desktop." },
        { title: "SEO-Ready", description: "Built-in technical SEO foundations so your site ranks from day one." },
        { title: "Brand Aligned", description: "Custom designs that capture your brand identity and differentiate from competitors." },
        { title: "Scalable Architecture", description: "Built to grow with your business — easy to update, extend, and maintain." },
      ]}
      caseResults={[
        { metric: "Conversion Rate Lift", value: "186%", description: "Average increase in conversion rate after website redesign" },
        { metric: "Page Load Speed", value: "1.2s", description: "Average load time across client websites" },
        { metric: "Bounce Rate Reduction", value: "42%", description: "Average decrease in bounce rate post-launch" },
      ]}
      faqs={[
        { question: "How long does a website design project take?", answer: "Typically 6-10 weeks from kickoff to launch, depending on complexity. We provide a detailed timeline during the discovery phase." },
        { question: "Do you build on WordPress or custom code?", answer: "We use modern frameworks like React for maximum performance and flexibility. We can also work with WordPress or headless CMS solutions based on your needs." },
        { question: "Will my website be SEO-friendly?", answer: "Absolutely. Every website we build includes technical SEO foundations — proper meta tags, schema markup, fast load times, and clean code structure." },
        { question: "Do you offer ongoing maintenance?", answer: "Yes, we offer maintenance packages that include security updates, performance monitoring, content updates, and ongoing optimization." },
      ]}
      ctaPrimary="Start Your Website Project"
      ctaUrgency="Free design consultation — limited spots this month"
    />
  </PageLayout>
);

export default WebsiteDesign;
