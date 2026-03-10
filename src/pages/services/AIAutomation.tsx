import PageLayout from "@/components/PageLayout";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import SEOHead, { serviceJsonLd } from "@/components/SEOHead";

const AIAutomation = () => (
  <PageLayout>
    <SEOHead title="AI Automation" description="Intelligent AI marketing automation that scales your operations, personalizes customer experiences, and drives exponential growth." jsonLd={serviceJsonLd("AI Marketing Automation", "Custom AI integrations and marketing automation for scalable, personalized customer experiences.")} />
    <ServicePageTemplate
      overline="AI Automation"
      title="Scale marketing with"
      titleAccent="intelligent AI"
      description="Custom AI integrations and workflow automation that scale your marketing operations exponentially while delivering hyper-personalized experiences."
      problem="Manual marketing processes don't scale. Your team spends hours on repetitive tasks — segmentation, follow-ups, reporting, content creation — instead of focusing on strategy and growth. Traditional automation tools are rigid and limited."
      solution="We implement intelligent AI-powered marketing systems that automate complex workflows, personalize at scale, and continuously learn and optimize. From AI content generation to predictive analytics, we build the marketing engine of the future."
      process={[
        { step: "Phase 01", title: "Workflow Audit", description: "Map your current marketing processes to identify automation opportunities and AI integration points." },
        { step: "Phase 02", title: "System Design", description: "Architect custom AI workflows, integrations, and automation sequences tailored to your stack." },
        { step: "Phase 03", title: "Implementation", description: "Build and deploy AI-powered automations with proper testing, monitoring, and fallback systems." },
        { step: "Phase 04", title: "Train & Optimize", description: "Team training, performance monitoring, and continuous refinement of AI models and workflows." },
      ]}
      benefits={[
        { title: "10x Efficiency", description: "Automate repetitive tasks and free your team to focus on high-impact strategic work." },
        { title: "Hyper-Personalization", description: "Deliver uniquely personalized experiences to every customer at scale with AI." },
        { title: "Predictive Insights", description: "AI-driven analytics that predict customer behavior and optimize campaigns proactively." },
        { title: "24/7 Operations", description: "Automated systems that work around the clock — nurturing leads and optimizing campaigns while you sleep." },
        { title: "Smart Content", description: "AI-assisted content creation that maintains your brand voice while scaling production." },
        { title: "Continuous Learning", description: "Systems that get smarter over time, improving performance with every interaction." },
      ]}
      caseResults={[
        { metric: "Time Saved", value: "72%", description: "Reduction in manual marketing tasks through AI automation" },
        { metric: "Campaign Performance", value: "3.8x", description: "Improvement in campaign ROI through AI optimization" },
        { metric: "Lead Response Time", value: "<2min", description: "Average automated lead response time (vs. 47 hours industry avg)" },
      ]}
      faqs={[
        { question: "What marketing tasks can AI automate?", answer: "Email sequences, lead scoring, content generation, social scheduling, audience segmentation, reporting, chatbot interactions, and campaign optimization — among many others." },
        { question: "Do I need to replace my existing tools?", answer: "No — we integrate AI capabilities into your existing marketing stack (HubSpot, Salesforce, Mailchimp, etc.) rather than replacing what already works." },
        { question: "Is AI automation reliable?", answer: "We build systems with proper guardrails, human review checkpoints, and fallback mechanisms. AI handles the heavy lifting while your team maintains strategic control." },
        { question: "How long does implementation take?", answer: "Basic automations can be live in 2-3 weeks. More complex AI integrations typically take 4-8 weeks depending on scope and systems involved." },
      ]}
      ctaPrimary="Automate Your Marketing"
      ctaUrgency="Free automation audit — limited spots this month"
    />
  </PageLayout>
);

export default AIAutomation;
