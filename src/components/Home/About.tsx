import { ArrowUpRight, Check, Github, Linkedin } from "lucide-react";
import { profile } from "../../data/profile";
import Reveal from "../Shared/Reveal";

export default function About() {
  return (
    <section
      id="about"
      className="section container grid items-center gap-10 lg:grid-cols-2 lg:gap-x-20 lg:gap-y-14"
    >
      <Reveal className="relative order-2 overflow-hidden rounded-xl border border-white/10 bg-surface p-7 sm:p-9 lg:order-1">
        <div className="flex items-center justify-between border-b border-white/10 pb-5 font-mono text-[9px] tracking-widest text-muted">
          <span>ARUN KUMAR / ENGINEER</span>
          <span className="text-highlight">01</span>
        </div>
        <div className="relative my-5 py-5">
          <span className="font-display text-[clamp(7rem,20vw,12rem)] leading-none font-semibold tracking-[-.1em] text-white">
            A<span className="text-accent">K</span>
            <span className="text-highlight">.</span>
          </span>
          <div
            aria-hidden="true"
            className="absolute right-2 bottom-8 h-20 w-12 -skew-x-12 border-x-4 border-highlight/30"
          />
        </div>
        <div className="flex items-end justify-between gap-4 border-t border-white/10 pt-6">
          <div>
            <strong className="font-display text-xl font-medium">
              Arun Kumar
            </strong>
            <span className="mt-2 block font-mono text-[8px] tracking-widest text-muted">
              DESIGNER & FULL-STACK DEVELOPER
            </span>
          </div>
          <ArrowUpRight className="shrink-0 text-highlight" size={27} />
        </div>
        <div className="mt-6 flex items-center gap-2 text-[10px] text-muted">
          <span className="size-1.5 rounded-full bg-highlight" />
          {profile.location}
        </div>
      </Reveal>
      <Reveal className="order-1 lg:order-2">
        <span className="eyebrow">03 / THE PERSON BEHIND THE PIXELS</span>
        <h2 className="section-title">
          A designer’s eye.
          <br />
          An engineer’s <span className="text-highlight">mind.</span>
        </h2>
        <div className="mt-6 space-y-4 text-sm leading-7">
          <p className="text-slate-200">
            I’m Arun, a software engineer who cares just as much about how a
            product feels as how it works.
          </p>
          <p>
            At SRDT, I build Java and Spring Boot systems for CRM, government
            ERP, and online examinations. I bring that experience to freelance
            work, pairing considered design with reliable development.
          </p>
          <p>
            Whether you’re launching your first business or shaping your next
            product, I’m here to make the technical part feel a little simpler.
          </p>
        </div>
        <div className="mt-6 flex flex-wrap gap-x-5 gap-y-3">
          {[
            "Direct communication",
            "Thoughtful details",
            "End-to-end ownership",
          ].map((value) => (
            <span
              key={value}
              className="flex items-center gap-1.5 text-[11px] text-slate-300"
            >
              <Check size={13} className="text-highlight" />
              {value}
            </span>
          ))}
        </div>
        <div className="mt-7 flex gap-6">
          <a
            className="text-link text-xs"
            href={profile.github}
            target="_blank"
            rel="noreferrer"
          >
            <Github size={16} /> GitHub <ArrowUpRight size={13} />
          </a>
          <a
            className="text-link text-xs"
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
          >
            <Linkedin size={16} /> LinkedIn <ArrowUpRight size={13} />
          </a>
        </div>
      </Reveal>
      <Reveal className="order-3 grid grid-cols-3 gap-3 border-y border-white/10 py-7 sm:gap-8 lg:col-span-2">
        {[
          ["1+", "year", "Professional engineering experience"],
          ["100K", "+", "Daily events in systems I’ve built"],
          ["40", "%", "API latency reduction at SRDT"],
        ].map(([value, suffix, label]) => (
          <div
            key={label}
            className="border-l border-white/10 pl-3 first:border-0 first:pl-0 sm:pl-8"
          >
            <strong className="font-display text-3xl font-medium tracking-tight sm:text-4xl">
              {value}
              <span className="ml-1 text-base text-highlight sm:text-xl">
                {suffix}
              </span>
            </strong>
            <p className="mt-2 max-w-52 text-[9px] sm:text-xs">{label}</p>
          </div>
        ))}
      </Reveal>
    </section>
  );
}
