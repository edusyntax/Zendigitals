import PageLayout from "@/components/PageLayout";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import SEOHead, { serviceJsonLd } from "@/components/SEOHead";

const SocialMediaMarketing = () => (
  <PageLayout>
    <SEOHead title="Social Media Marketing" description="Strategic social media management that builds communities, amplifies your brand, and drives conversions." jsonLd={serviceJsonLd("Social Media Marketing", "Strategic social media for brand growth and conversions.")} />
    <ServicePageTemplate
      overline="Social Media Marketing"
      title="Turn social attention into"
      titleAccent="real customers"
      description="Strategic social media management that builds engaged communities, amplifies your brand, and drives measurable conversions."
      problem="Most brands post without purpose — inconsistent content, no engagement strategy, and zero connection between social activity and revenue. Social becomes a time sink instead of a growth engine."
      solution="We build social media systems that combine brand storytelling, community management, and conversion-focused content to turn followers into loyal customers. Every post serves a strategic purpose."
      process={[
        { step: "Phase 01", title: "Brand Audit", description: "Competitive analysis, audience research, and brand voice development for social platforms." },
        { step: "Phase 02", title: "Content Strategy", description: "Content calendar, format optimization, and creative production aligned with business goals." },
        { step: "Phase 03", title: "Community Building", description: "Engagement protocols, influencer partnerships, and community management systems." },
        { step: "Phase 04", title: "Optimize & Scale", description: "Performance analysis, A/B testing, and scaling what works across platforms." },
      ]}
      benefits={[
        { title: "Brand Awareness", description: "Reach millions of potential customers with strategic, platform-native content." },
        { title: "Community Engagement", description: "Build a loyal audience that advocates for your brand organically." },
        { title: "Social Commerce", description: "Direct conversion pathways from social platforms to purchase." },
        { title: "Trend Agility", description: "Stay ahead of platform changes and cultural trends with rapid content adaptation." },
        { title: "Influencer Strategy", description: "Strategic partnerships with creators who align with your brand values." },
        { title: "Cross-Platform Presence", description: "Unified brand experience across Instagram, TikTok, LinkedIn, Twitter, and more." },
      ]}
      caseResults={[
        { metric: "Engagement Rate", value: "8.4%", description: "Average engagement rate across managed accounts (industry avg: 1.2%)" },
        { metric: "Follower Growth", value: "450%", description: "Average audience growth within 6 months of management" },
        { metric: "Social Revenue", value: "$2.1M", description: "Revenue attributed to social media campaigns" },
      ]}
      ctaPrimary="Start Your Social Strategy"
      ctaUrgency="Free social media audit — limited spots available"
    />
  </PageLayout>
);

export default SocialMediaMarketing;
