import { useState } from "react";
import { ArrowUpRight, Check, Copy } from "lucide-react";
import { hireLink, profile } from "../../data/profile";
import Reveal from "../Shared/Reveal";

export default function Contact() {
  const [copyStatus, setCopyStatus] = useState("");
  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopyStatus("Email copied!");
    } catch {
      setCopyStatus("Copy this address: " + profile.email);
    }
  }
  return (
    <section id="contact" className="container pb-16">
      <Reveal className="relative overflow-hidden rounded-2xl border border-accent/30 bg-surface p-7 sm:p-12 lg:p-16">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 right-0 w-1/2 bg-linear-to-l from-accent/10 to-transparent"
        />
        <div className="relative">
          <span className="eyebrow">LET’S MAKE YOUR NEXT MOVE COUNT</span>
          <h2 className="max-w-3xl font-display text-4xl leading-[1.12] font-medium tracking-[-.05em] sm:text-5xl lg:text-6xl">
            Have a project in mind?
            <br />
            <span className="text-highlight">Let’s build it right.</span>
          </h2>
          <p className="mt-6 max-w-lg text-sm leading-7">
            A new website, a better experience, or a product you’re ready to
            launch. Tell me what you have in mind.
          </p>
          <a href={hireLink} className="button mt-7">
            Hire me — let’s talk <ArrowUpRight size={18} />
          </a>
          <div className="mt-5 flex flex-wrap items-center gap-2 text-xs text-muted">
            <a
              className="transition hover:text-white"
              href={"mailto:" + profile.email}
            >
              {profile.email}
            </a>
            <button
              onClick={copyEmail}
              aria-label="Copy email address"
              className="grid size-9 place-items-center rounded border border-transparent hover:border-white/15 hover:text-highlight"
            >
              {copyStatus === "Email copied!" ? (
                <Check size={15} />
              ) : (
                <Copy size={15} />
              )}
            </button>
          </div>
          <span
            className="mt-1 block min-h-4 text-xs text-highlight"
            role="status"
          >
            {copyStatus}
          </span>
        </div>
        <ArrowUpRight
          aria-hidden="true"
          strokeWidth={0.7}
          className="absolute right-12 bottom-16 hidden size-36 text-accent/40 lg:block"
        />
      </Reveal>
    </section>
  );
}
