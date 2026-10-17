import { ArrowUpRight, ArrowUp } from "lucide-react";
import { Link } from "react-router-dom";
import { profile } from "../../data/profile";

export default function Footer() {
  return (
    <footer className="container pb-7">
      <div className="flex flex-wrap items-center gap-6 border-b border-white/10 pb-7">
        <Link
          to="/"
          aria-label="Arun Kumar home"
          className="font-display text-[29px] font-extrabold tracking-[-2px]"
        >
          arun<span className="text-accent">.</span>
        </Link>
        <p className="text-[10px] sm:text-xs">
          Independent thinking. Thoughtful execution.
        </p>
        <div className="flex w-full gap-6 sm:ml-auto sm:w-auto">
          {[
            ["GitHub", profile.github],
            ["LinkedIn", profile.linkedin],
            ["Email", "mailto:" + profile.email],
          ].map(([label, url]) => (
            <a
              key={label}
              href={url}
              target={label === "Email" ? undefined : "_blank"}
              rel="noreferrer"
              className="text-link text-xs text-muted"
            >
              {label}
              <ArrowUpRight size={13} />
            </a>
          ))}
        </div>
      </div>
      <div className="flex flex-wrap items-center justify-between gap-4 pt-6 font-mono text-[9px] text-muted">
        <span>© {new Date().getFullYear()} Arun Kumar</span>
        <span className="hidden sm:block">
          DESIGNED WITH INTENT. BUILT WITH CARE.
        </span>
        <button
          className="flex items-center gap-2 hover:text-highlight"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          Back to top <ArrowUp size={13} />
        </button>
      </div>
    </footer>
  );
}
