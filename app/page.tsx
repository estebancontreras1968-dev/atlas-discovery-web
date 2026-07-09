import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProblemSection from "@/components/ProblemSection";
import CostSection from "@/components/CostSection";
import WhatIsSection from "@/components/WhatIsSection";
import DeliverableSection from "@/components/DeliverableSection";
import ProcessSection from "@/components/ProcessSection";
import AudienceSection from "@/components/AudienceSection";
import GuaranteeSection from "@/components/GuaranteeSection";
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
        <CostSection />
        <WhatIsSection />
        <DeliverableSection />
        <ProcessSection />
        <AudienceSection />
        <GuaranteeSection />
        <FAQSection />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
