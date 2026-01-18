import { useRef } from "react"
import About from "./components/About"
import Contact from "./components/Contact"
import Features from "./components/Features"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Hero from "./components/Hero"
import { scrollToRef } from "./utils/scrollToRef"

export default function App() {
  const heroRef = useRef<HTMLDivElement>(null)
  const featuresRef = useRef<HTMLDivElement>(null)
  const aboutRef = useRef<HTMLDivElement>(null)
  const contactRef = useRef<HTMLDivElement>(null)

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

      <Footer 
       onFeatures={() => scrollToRef(featuresRef)}
      />
    </>
  )
}
