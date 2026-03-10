import PageLayout from "@/components/PageLayout";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import SEOHead, { serviceJsonLd } from "@/components/SEOHead";

const LeadGeneration = () => (
  <PageLayout>
    <SEOHead title="Lead Generation Campaigns" description="High-converting lead generation campaigns that fill your pipeline with qualified prospects. Multi-channel strategies designed for predictable growth." jsonLd={serviceJsonLd("Lead Generation Campaigns", "Multi-channel lead generation campaigns that deliver qualified prospects and predictable pipeline growth.")} />
    <ServicePageTemplate
      overline="Lead Generation"
      title="Fill your pipeline with"
      titleAccent="qualified leads"
      description="We engineer multi-channel lead generation campaigns that attract, nurture, and convert high-quality prospects into revenue opportunities."
      problem="Most businesses rely on unpredictable referrals and cold outreach that wastes time and budget. Without a systematic lead generation engine, growth stalls and sales teams struggle with unqualified leads that never convert."
      solution="We build automated lead generation systems across paid, organic, and outbound channels — with lead scoring, nurture sequences, and conversion optimization that deliver a steady flow of sales-ready prospects to your team."
      process={[
        { step: "Phase 01", title: "Audience Research", description: "Define your ideal customer profile, buying triggers, and the channels where they spend their time." },
        { step: "Phase 02", title: "Campaign Architecture", description: "Design multi-touch campaigns with landing pages, lead magnets, and automated nurture sequences." },
        { step: "Phase 03", title: "Launch & Scale", description: "Deploy campaigns across paid search, social, email, and content channels with real-time optimization." },
        { step: "Phase 04", title: "Optimize & Report", description: "Continuous A/B testing, lead quality analysis, and funnel optimization to maximize ROI." },
      ]}
      benefits={[
        { title: "Predictable Pipeline", description: "Systematic lead flow that your sales team can count on month after month." },
        { title: "Qualified Prospects", description: "Lead scoring and segmentation ensure your team focuses on buyers, not browsers." },
        { title: "Multi-Channel Reach", description: "Capture leads across search, social, email, and content — wherever your audience is." },
        { title: "Automated Nurture", description: "Intelligent email sequences that warm leads and move them toward purchase decisions." },
        { title: "Lower Cost Per Lead", description: "Optimized campaigns that reduce acquisition costs while improving lead quality." },
        { title: "Revenue Attribution", description: "Clear tracking from first touch to closed deal — know exactly what's working." },
      ]}
      caseResults={[
        { metric: "Leads Generated", value: "12,400+", description: "Qualified leads delivered across client campaigns in 12 months" },
        { metric: "Cost Per Lead", value: "-58%", description: "Average reduction in cost per qualified lead" },
        { metric: "Pipeline Revenue", value: "$8.7M", description: "Total pipeline value generated for clients" },
      ]}
      faqs={[
        { question: "What channels do you use for lead generation?", answer: "We leverage a mix of paid search (Google Ads), paid social (LinkedIn, Meta), SEO, content marketing, email outreach, and landing page optimization — tailored to your audience." },
        { question: "How do you define a 'qualified lead'?", answer: "We work with you to define lead scoring criteria based on demographics, firmographics, and behavioral signals. Only leads meeting your thresholds get passed to sales." },
        { question: "What's the typical cost per lead?", answer: "CPL varies by industry and channel, but our optimization process consistently reduces costs by 40-60% compared to industry averages." },
        { question: "How quickly can campaigns launch?", answer: "We typically have campaigns live within 2-3 weeks of kickoff, with initial results visible within the first month." },
      ]}
      ctaPrimary="Launch Your Lead Gen Campaign"
      ctaUrgency="Free lead generation audit — limited spots this month"
    />
  </PageLayout>
);

export default LeadGeneration;
