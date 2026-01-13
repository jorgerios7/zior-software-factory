import './App.css'
import About from './components/About';
import Contact from './components/Contact';
import Features from './components/Features'
import Footer from './components/Footer';
import Header from './components/Header'
import Hero from './components/Hero'

export default function App() {
  return (
    <>
      <Header />
      <Hero />
      <Features />
      <About />
      <Contact />
      <Footer />
    </>
  );
}
