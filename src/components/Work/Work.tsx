import Navbar from "../Home/Navbar";
import Footer from "../Home/Footer";
import Contact from "../Home/Contact";
import WorkHeader from "./WorkHeader";
import ProjectGallery from "./ProjectGallery";

export default function Work() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <Navbar />
      <main id="main-content">
        <div className="container">
          <WorkHeader />
          <ProjectGallery />
        </div>
        <Contact />
      </main>
      <Footer />
    </>
  );
}
