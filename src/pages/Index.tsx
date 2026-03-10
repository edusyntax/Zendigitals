import { useState, useCallback } from "react";
import SmoothScroll from "@/components/SmoothScroll";
import BackgroundLayers from "@/components/BackgroundLayers";
import CustomCursor from "@/components/CustomCursor";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import TrustStrip from "@/components/TrustStrip";
import CapabilitiesSection from "@/components/CapabilitiesSection";
import AboutSection from "@/components/AboutSection";
import HowItWorks from "@/components/HowItWorks";
import CaseStudiesSection from "@/components/CaseStudiesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import MetricsSection from "@/components/MetricsSection";
import FullscreenCTA from "@/components/FullscreenCTA";
import Footer from "@/components/Footer";
import ThemeToggle from "@/components/ThemeToggle";
import ScrollProgress from "@/components/ScrollProgress";
import LoadingScreen from "@/components/LoadingScreen";
import ScrollToTop from "@/components/ScrollToTop";
import PageTransition from "@/components/PageTransition";
import SectionTransition from "@/components/SectionTransition";
import CinematicMilestoneGlobe from "@/components/MilestoneGlobe/CinematicMilestoneGlobe";
import SEOHead, { organizationJsonLd } from "@/components/SEOHead";

const Index = () => {
  const [loaded, setLoaded] = useState(false);
  const handleLoadComplete = useCallback(() => setLoaded(true), []);

  return (
    <>
      <SEOHead
        title="Digital Marketing Agency"
        description="Zendigitalz is an elite digital marketing agency engineering brand authority through performance marketing, SEO, AI automation, and data-driven growth strategies."
        path="/"
        jsonLd={organizationJsonLd}
      />
      {!loaded && <LoadingScreen onComplete={handleLoadComplete} />}
      <SmoothScroll>
        <BackgroundLayers />
        <CustomCursor />
        <ScrollProgress />
        <Navigation />
        <ScrollToTop />
        <PageTransition>
          <main>
            <HeroSection />
            <SectionTransition><TrustStrip /></SectionTransition>
            <SectionTransition><CapabilitiesSection /></SectionTransition>
            <SectionTransition><AboutSection /></SectionTransition>
            <SectionTransition><HowItWorks /></SectionTransition>
            <SectionTransition><CaseStudiesSection /></SectionTransition>
            <SectionTransition><TestimonialsSection /></SectionTransition>
            <SectionTransition><MetricsSection /></SectionTransition>
            <CinematicMilestoneGlobe />
            <SectionTransition><FullscreenCTA /></SectionTransition>
            <SectionTransition><Footer /></SectionTransition>
          </main>
        </PageTransition>
        <ThemeToggle />
      </SmoothScroll>
    </>
  );
};

export default Index;
