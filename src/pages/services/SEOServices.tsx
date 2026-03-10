import PageLayout from "@/components/PageLayout";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import SEOHead, { serviceJsonLd } from "@/components/SEOHead";

const SEOServices = () => (
  <PageLayout>
    <SEOHead title="SEO Services" description="Dominate search rankings with data-driven SEO strategies. Technical audits, content strategy, and link building that drive sustainable organic growth." jsonLd={serviceJsonLd("SEO Services", "Data-driven SEO strategies for sustainable organic traffic growth and revenue impact.")} />
    <ServicePageTemplate
      overline="SEO Services"
      title="Dominate search rankings with"
      titleAccent="advanced SEO"
      description="Our data-driven SEO strategies drive sustainable organic traffic growth, higher rankings, and measurable revenue impact."
      problem="Most businesses struggle with declining organic visibility, poor technical SEO foundations, and content that doesn't rank. Without a systematic approach, you're leaving thousands of potential customers on the table every month."
      solution="We build comprehensive SEO systems that combine technical excellence, strategic content creation, and authoritative link building to drive compounding organic growth. Every strategy is tailored to your market and backed by data."
      process={[
        { step: "Phase 01", title: "Technical Audit", description: "Deep crawl analysis, site speed optimization, schema markup, and architecture improvements." },
        { step: "Phase 02", title: "Keyword Strategy", description: "Market research, competitor gap analysis, and content mapping to high-intent search queries." },
        { step: "Phase 03", title: "Content & Authority", description: "Strategic content creation and digital PR to build topical authority and earn quality backlinks." },
        { step: "Phase 04", title: "Scale & Optimize", description: "Continuous monitoring, A/B testing, and iterative improvements to compound results." },
      ]}
      benefits={[
        { title: "Compounding Returns", description: "SEO delivers increasing returns over time — your investment today pays dividends for years." },
        { title: "Lower Acquisition Cost", description: "Organic traffic has the lowest cost-per-acquisition of any marketing channel." },
        { title: "Brand Authority", description: "Ranking #1 positions your brand as the trusted leader in your category." },
        { title: "Qualified Traffic", description: "Target high-intent keywords that attract visitors ready to buy." },
        { title: "Competitive Moat", description: "Strong SEO foundations create barriers competitors can't easily replicate." },
        { title: "Full Transparency", description: "Real-time dashboards and monthly reports showing exact rankings, traffic, and revenue impact." },
      ]}
      caseResults={[
        { metric: "Organic Traffic Growth", value: "312%", description: "Average increase in organic sessions within 12 months" },
        { metric: "Keyword Rankings", value: "850+", description: "First-page rankings achieved across client portfolios" },
        { metric: "Revenue Impact", value: "$4.2M", description: "Additional revenue generated through organic channels" },
      ]}
      faqs={[
        { question: "How long does it take to see SEO results?", answer: "Most clients see measurable improvements within 3-4 months, with significant results at the 6-12 month mark. SEO is a compounding investment." },
        { question: "Do you guarantee first-page rankings?", answer: "We don't guarantee specific rankings (no ethical SEO agency does), but we guarantee a data-driven approach that consistently delivers organic traffic growth and revenue impact." },
        { question: "What industries do you specialize in?", answer: "We work across B2B, SaaS, e-commerce, professional services, and more. Our strategies are tailored to your specific market and competitive landscape." },
        { question: "How do you measure SEO success?", answer: "We track rankings, organic traffic, conversions, and revenue attribution. You'll receive monthly reports with full transparency into every metric." },
      ]}
      ctaPrimary="Start Your SEO Growth Strategy"
      ctaUrgency="Free SEO audit available — limited spots this month"
    />
  </PageLayout>
);

export default SEOServices;
