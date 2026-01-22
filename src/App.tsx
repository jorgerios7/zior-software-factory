import { useRef, useState } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import { scrollToRef } from "./utils/scrollToRef";
import { LegalDialog } from "./components/LegalDialog";

export default function App() {
  const heroRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  type LegalType = "privacy" | "terms" | "none";
  const [legaType, setLegalType] = useState<LegalType>("none");

  return (
    <>
      <Header
        onHero={() => scrollToRef(heroRef)}
        onFeatures={() => scrollToRef(featuresRef)}
        onAbout={() => scrollToRef(aboutRef)}
        onContact={() => scrollToRef(contactRef)}
      />

      <Hero
        ref={heroRef}
        onContact={() => scrollToRef(contactRef)}
        onFeatures={() => scrollToRef(featuresRef)}
      />

      <Features ref={featuresRef} />
      <About ref={aboutRef} />
      <Contact ref={contactRef} />

      <LegalDialog
        type={legaType}
        onClose={() => setLegalType("none")}
      />

      <Footer
        onFeatures={() => scrollToRef(featuresRef)}
        onPrivacyPolicy={() => setLegalType("privacy")}
        onTerms={() => setLegalType("terms")}
      />
    </>
  );
}
