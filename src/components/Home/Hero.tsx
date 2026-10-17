import { ArrowDown, ArrowUpRight, Code2, Globe2 } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { hireLink, profile } from "../../data/profile";
import { projects } from "../../data/projects";
import ProjectVisual from "../Shared/ProjectVisual";
import Reveal from "../Shared/Reveal";

const backProject = projects.find((project) => project.id === "srmu");
const frontProject = projects.find((project) => project.id === "khetidaar");

export default function Hero() {
  const reducedMotion = useReducedMotion();
  return (
    <section
      className="container grid items-center gap-12 overflow-clip pt-14 pb-16 md:py-20 lg:min-h-180 lg:grid-cols-[1.05fr_1fr] lg:gap-10"
      aria-labelledby="hero-title"
    >
      <Reveal className="min-w-0">
        <div className="mb-8 inline-flex items-center gap-2.5 rounded-full border border-accent/30 bg-accent/10 px-3.5 py-2 font-mono text-[9px] tracking-widest text-highlight">
          <span className="size-1.5 rounded-full bg-highlight" />
          {profile.available
            ? "AVAILABLE FOR FREELANCE WORK"
            : "LET’S PLAN YOUR NEXT PROJECT"}
        </div>
        <h1
          id="hero-title"
          className="text-[clamp(2.8rem,5.5vw,5rem)] leading-[1.05] font-medium tracking-[-.065em]"
        >
          Good design.
          <br />
          Great code.
          <br />
          <span className="text-highlight">Built for impact.</span>
        </h1>
        <p className="mt-7 max-w-lg text-sm leading-7 md:text-base">
          I’m Arun, a web designer & full-stack developer. I build distinctive
          websites and dependable applications that give your business room to
          grow.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-6">
          <a href={hireLink} className="button">
            Let’s build something <ArrowUpRight size={18} />
          </a>
          <a href="#work" className="text-link">
            View my work <ArrowDown size={16} />
          </a>
        </div>
        <div className="mt-7 flex items-center gap-2 text-[11px] text-muted">
          <Globe2 size={13} /> Bengaluru, India{" "}
          <span className="mx-1 text-slate-600">/</span> Working worldwide
        </div>
      </Reveal>
      <div
        className="relative mx-auto h-100 w-full max-w-xl min-w-0 sm:h-125 lg:h-120"
        aria-label="Screenshots of my deployed websites"
      >
        <div
          aria-hidden="true"
          className="absolute inset-8 rounded-full bg-accent/15 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="absolute inset-x-5 top-8 bottom-5 rounded-2xl border border-white/5"
        />
        <motion.div
          className="absolute top-8 left-[4%] w-[84%] origin-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          <div className="rotate-[-5deg]">
            {backProject && <ProjectVisual {...backProject} />}
          </div>
        </motion.div>
        <motion.div
          className="absolute top-43 right-[3%] w-[74%] sm:top-53 lg:top-52"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <div className="rotate-[5deg]">
            {frontProject && <ProjectVisual {...frontProject} />}
          </div>
        </motion.div>
        <motion.div
          className="absolute top-1 right-3 flex items-center gap-2 rounded-lg border border-white/15 bg-surface/85 px-4 py-3 text-[10px] shadow-xl backdrop-blur-xl"
          animate={reducedMotion ? {} : { y: [0, -5, 0] }}
          transition={{ duration: 5, repeat: Infinity }}
        >
          <Code2 size={15} className="text-highlight" /> Designed. Developed.
          Deployed.
        </motion.div>
        <span className="absolute bottom-0 left-3 border-l-2 border-accent pl-3 font-mono text-[9px] leading-5 tracking-wider text-muted">
          REAL PROJECTS.
          <br />
          <span className="text-white">OUT IN THE WORLD.</span>
        </span>
      </div>
    </section>
  );
}
