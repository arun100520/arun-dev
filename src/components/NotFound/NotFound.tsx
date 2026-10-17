import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Navbar from "../Home/Navbar";
import Footer from "../Home/Footer";
export default function NotFound() {
  return (
    <>
      <Navbar />
      <main className="container flex min-h-[70vh] flex-col items-start justify-center py-20">
        <span className="eyebrow">404 / A SMALL DETOUR</span>
        <h1 className="text-5xl font-medium tracking-tight md:text-7xl">
          This page wandered off.
        </h1>
        <p className="my-7">Let’s get you back to something good.</p>
        <Link to="/" className="button">
          <ArrowLeft size={17} /> Back to home
        </Link>
      </main>
      <Footer />
    </>
  );
}
