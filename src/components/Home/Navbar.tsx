import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { hireLink } from "../../data/profile";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  useEffect(() => setOpen(false), [location]);
  useEffect(() => {
    const close = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, []);
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-canvas/85 backdrop-blur-xl">
      <div className="container flex h-20 items-center justify-between">
        <Link
          to="/"
          aria-label="Arun Kumar home"
          className="flex items-center"
        >
          <span className="font-display text-[33px] font-extrabold tracking-[-2px]">
            arun<span className="text-accent">.</span>
          </span>
          <span className="ml-4 max-w-24 border-l border-white/15 pl-4 text-[8px] leading-relaxed tracking-[1.3px] text-muted">
            DESIGNER &amp; DEVELOPER
          </span>
        </Link>
        <nav
          id="primary-navigation"
          aria-label="Main navigation"
          className={
            (open ? "flex" : "hidden") +
            " absolute top-20 right-0 left-0 flex-col gap-1 border-b border-white/10 bg-surface p-5 shadow-xl md:static md:flex md:flex-row md:items-center md:gap-6 md:border-0 md:bg-transparent md:p-0 md:shadow-none lg:gap-9"
          }
        >
          {["Work", "Services", "About", "Process"].map((label) => (
            <Link
              key={label}
              to={"/#" + label.toLowerCase()}
              onClick={() => setOpen(false)}
              className="py-3 text-sm text-muted transition hover:text-white"
            >
              {label}
            </Link>
          ))}
          <a
            href={hireLink}
            className="button mt-2 min-h-10 py-2.5 text-xs md:mt-0 md:ml-2"
          >
            Let’s talk <ArrowUpRight size={15} />
          </a>
        </nav>
        <button
          className="grid size-10 place-items-center rounded border border-white/15 md:hidden"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-controls="primary-navigation"
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X size={21} /> : <Menu size={21} />}
        </button>
      </div>
    </header>
  );
}
