import PageLayout from "@/components/PageLayout";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import SEOHead, { serviceJsonLd } from "@/components/SEOHead";

const PPCServices = () => (
  <PageLayout>
    <SEOHead title="PPC Services" description="ROI-focused PPC advertising across Google, Bing, and social platforms. Data-driven campaigns that maximize every dollar of ad spend." jsonLd={serviceJsonLd("PPC Services", "Pay-per-click advertising management for maximum ROI across search and social platforms.")} />
    <ServicePageTemplate
      overline="PPC Services"
      title="Maximize every dollar of"
      titleAccent="ad spend"
      description="ROI-focused PPC campaigns across Google, Bing, and social platforms that drive qualified traffic, leads, and revenue with full transparency."
      problem="Most businesses waste 30-50% of their ad budget on poor targeting, weak ad copy, and unoptimized landing pages. Without expert management, PPC becomes a money pit instead of a growth engine."
      solution="We build and manage precision-targeted PPC campaigns with advanced bidding strategies, compelling ad creative, and conversion-optimized landing pages — all continuously refined by data to maximize your return on ad spend."
      process={[
        { step: "Phase 01", title: "Account Audit", description: "Comprehensive review of current campaigns, wasted spend, and competitive landscape to find quick wins." },
        { step: "Phase 02", title: "Campaign Architecture", description: "Strategic account structure, keyword targeting, audience segmentation, and ad copy creation." },
        { step: "Phase 03", title: "Launch & Monitor", description: "Campaign deployment with real-time monitoring, bid management, and daily optimization." },
        { step: "Phase 04", title: "Scale & Refine", description: "A/B testing, conversion tracking, ROAS optimization, and strategic scaling of winning campaigns." },
      ]}
      benefits={[
        { title: "Immediate Results", description: "Start driving qualified traffic and leads from day one — no waiting months for traction." },
        { title: "Precision Targeting", description: "Reach exactly the right audience at exactly the right moment in their buying journey." },
        { title: "Full Spend Control", description: "Set budgets, adjust in real-time, and scale up or down based on performance data." },
        { title: "Multi-Platform", description: "Expert management across Google Ads, Bing, YouTube, LinkedIn, Meta, and more." },
        { title: "Landing Page Optimization", description: "Conversion-optimized landing pages that turn clicks into customers." },
        { title: "Transparent Reporting", description: "Real-time dashboards showing spend, clicks, conversions, and revenue — no hidden metrics." },
      ]}
      caseResults={[
        { metric: "ROAS", value: "6.4x", description: "Average return on ad spend across client campaigns" },
        { metric: "Cost Per Click", value: "-41%", description: "Average reduction in CPC through optimization" },
        { metric: "Conversions", value: "280%", description: "Average increase in conversions within first 90 days" },
      ]}
      faqs={[
        { question: "What's the minimum ad budget you recommend?", answer: "We typically recommend a minimum of $3,000-5,000/month in ad spend to generate meaningful data and results. We'll advise on the right budget for your goals." },
        { question: "How quickly will I see results from PPC?", answer: "You can expect to see initial traffic and data within days. Meaningful optimization and scaling typically happens within the first 30-60 days." },
        { question: "Do you manage Google Ads and social ads?", answer: "Yes — we manage campaigns across Google Ads, Bing, YouTube, LinkedIn Ads, Meta (Facebook/Instagram), and other platforms based on where your audience converts best." },
        { question: "How do you prevent wasted ad spend?", answer: "We use negative keyword lists, audience exclusions, dayparting, geo-targeting, and continuous bid optimization to ensure every dollar reaches the right audience." },
      ]}
      ctaPrimary="Launch Your PPC Campaign"
      ctaUrgency="Free PPC audit available — limited spots this month"
    />
  </PageLayout>
);

export default PPCServices;
