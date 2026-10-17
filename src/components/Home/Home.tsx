import Navbar from "./Navbar";
import Hero from "./Hero";
import TechStrip from "./TechStrip";
import SelectedWork from "./SelectedWork";
import Services from "./Services";
import About from "./About";
import Process from "./Process";
import FAQ from "./FAQ";
import Contact from "./Contact";
import Footer from "./Footer";

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <Navbar />
      <main id="main-content">
        <Hero />
        <TechStrip />
        <SelectedWork />
        <Services />
        <About />
        <Process />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
