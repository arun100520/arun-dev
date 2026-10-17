import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Reveal from "../Shared/Reveal";

export default function WorkHeader() {
  return (
    <Reveal className="pt-12 md:pt-18">
      <Link to="/" className="text-link mb-12 text-muted">
        <ArrowLeft size={16} /> Back to home
      </Link>
      <span className="eyebrow">THE PROJECT COLLECTION</span>
      <h1 className="font-display text-5xl leading-[1.08] font-medium tracking-[-.055em] md:text-7xl">
        Built with purpose.
        <br />
        <span className="text-highlight">Live in the world.</span>
      </h1>
      <p className="mt-6 max-w-xl text-sm leading-7 md:text-base">
        Explore my websites and applications across education, enterprise
        technology, consumer brands, and sports.
      </p>
    </Reveal>
  );
}
