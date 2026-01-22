import { useRef, useState } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import { scrollToRef } from "./utils/scrollToRef";
import { LegalDialog } from "./components/LegalDialog";
import LegalView from "./components/LegalDialog/LegalView";
import { TERMS } from "./content/terms";
import { PRIVACY_POLICY } from "./content/privacyPolicy";

export default function App() {
  const heroRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  type LegalType = "privacy" | "terms" | null;
  const [openLegal, setOpenLegal] = useState<LegalType>(null);

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
        open={openLegal !== null}
        title={openLegal as string}
        onClose={() => setOpenLegal(null)}
      >
        {openLegal === "privacy" && (
          <LegalView legalList={PRIVACY_POLICY}/>
        )}

        {openLegal === "terms" && (
          <LegalView legalList={TERMS}/>
        )}
      </LegalDialog>

      <Footer
        onFeatures={() => scrollToRef(featuresRef)}
        onPrivacyPolicy={() => setOpenLegal("privacy")}
        onTerms={() => setOpenLegal("terms")}
      />
    </>
  );
}
