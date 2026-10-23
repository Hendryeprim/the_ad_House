import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CoreIdea from "./components/CoreIdea";
import Services from "./components/Services";
import DigitalMarketing from "./components/DigitalMarketing";
import Approach from "./components/Approach";
import TravelExample from "./components/TravelExample";
import BabyFoodExample from "./components/BabyFoodExample";
import MindMap from "./components/MindMap";
import WhyUs from "./components/WhyUs";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import FloatingContact from "./components/FloatingContact";
import LegalModal from "./components/LegalModal";

function App() {
  const [legalModal, setLegalModal] = useState({ isOpen: false, tab: "privacy" });

  useEffect(() => {
    const checkLegalTriggers = () => {
      const hash = (window.location.hash || "").toLowerCase();
      const path = (window.location.pathname || "").toLowerCase();

      if (hash === "#privacy" || hash === "#privacy-policy" || path.includes("/privacy")) {
        setLegalModal({ isOpen: true, tab: "privacy" });
      } else if (hash === "#terms" || hash === "#terms-of-service" || path.includes("/terms")) {
        setLegalModal({ isOpen: true, tab: "terms" });
      }
    };

    checkLegalTriggers();
    window.addEventListener("hashchange", checkLegalTriggers);
    window.addEventListener("popstate", checkLegalTriggers);

    return () => {
      window.removeEventListener("hashchange", checkLegalTriggers);
      window.removeEventListener("popstate", checkLegalTriggers);
    };
  }, []);

  const openLegal = (tab = "privacy") => {
    setLegalModal({ isOpen: true, tab });
    window.location.hash = tab === "privacy" ? "privacy-policy" : "terms-of-service";
  };

  const closeLegal = () => {
    setLegalModal((prev) => ({ ...prev, isOpen: false }));
    const hash = window.location.hash.toLowerCase();
    if (
      hash === "#privacy" ||
      hash === "#privacy-policy" ||
      hash === "#terms" ||
      hash === "#terms-of-service"
    ) {
      history.replaceState(null, "", window.location.pathname + window.location.search);
    }
  };

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#0a0a0a] text-white selection:bg-secondary selection:text-white">
      {/* Navigation */}
      <Navbar />

      {/* Exact 10-Section Website Order from Client Master Document */}
      {/* 01. HERO — 30 TO 90 — SEE WHAT'S NEXT */}
      <Hero />

      {/* 02. 30 MINUTES TO KNOW WHO YOU ARE / 90 DAYS TO DEFINE WHERE YOU GO */}
      <CoreIdea />

      {/* 03. SERVICES — FOUR CATEGORIES */}
      <Services />

      {/* 04. DIGITAL MARKETING — WHAT / WHY / WHO */}
      <DigitalMarketing />

      {/* 05. OUR APPROACH — NO COOKIE-CUTTER PLANS */}
      <Approach />

      {/* 06. HOW WE THINK — TRAVEL EXAMPLE */}
      <TravelExample />

      {/* 07. HOW WE THINK — BABY FOOD EXAMPLE */}
      <BabyFoodExample />

      {/* 08. 30 TO 90 STRATEGY MIND MAP */}
      <MindMap />

      {/* 09. WHY THE AD HOUSE / OUR DIFFERENCE */}
      <WhyUs />

      {/* 10. CONSULTATION / CONTACT CTA */}
      <Contact onOpenLegal={openLegal} />

      {/* Footer & Floating Reachability */}
      <Footer onOpenLegal={openLegal} />
      <FloatingContact />

      {/* Privacy Policy & Terms of Service Modal */}
      <LegalModal
        key={`${legalModal.isOpen}-${legalModal.tab}`}
        isOpen={legalModal.isOpen}
        initialTab={legalModal.tab}
        onClose={closeLegal}
      />
    </div>
  );
}

export default App;

