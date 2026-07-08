import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProblemSection from "@/components/ProblemSection";
import DeliverableSection from "@/components/DeliverableSection";
import BenefitsSection from "@/components/BenefitsSection";
import ProcessSection from "@/components/ProcessSection";
import GuaranteeSection from "@/components/GuaranteeSection";
import FAQSection from "@/components/FAQSection";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ProblemSection />
        <DeliverableSection />
        <BenefitsSection />
        <ProcessSection />
        <GuaranteeSection />
        <FAQSection />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
