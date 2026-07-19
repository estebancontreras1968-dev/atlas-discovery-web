import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProblemSection from "@/components/ProblemSection";
import CauseExampleSection from "@/components/CauseExampleSection";
import CostSection from "@/components/CostSection";
import WhatIsSection from "@/components/WhatIsSection";
import HowItUnderstandsSection from "@/components/HowItUnderstandsSection";
import DeliverableSection from "@/components/DeliverableSection";
import DeliverablesCTA from "@/components/DeliverablesCTA";
import ProcessSection from "@/components/ProcessSection";
import AutomationSupportSection from "@/components/AutomationSupportSection";
import AudienceSection from "@/components/AudienceSection";
import NotThisSection from "@/components/NotThisSection";
import GuaranteeSection from "@/components/GuaranteeSection";
import ConfidentialitySection from "@/components/ConfidentialitySection";
import FAQSection from "@/components/FAQSection";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="pt-[68px]">
        <Hero />
        <ProblemSection />
        <CauseExampleSection />
        <CostSection />
        <WhatIsSection />
        <HowItUnderstandsSection />
        <DeliverableSection />
        <DeliverablesCTA />
        <ProcessSection />
        <AutomationSupportSection />
        <AudienceSection />
        <NotThisSection />
        <GuaranteeSection />
        <ConfidentialitySection />
        <FAQSection />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
