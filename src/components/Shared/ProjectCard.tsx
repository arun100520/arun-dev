import { ArrowUpRight, Plus } from "lucide-react";
import type { Project } from "../../data/projects";
import ProjectVisual from "./ProjectVisual";
import Reveal from "./Reveal";

export default function ProjectCard({
  project,
  onSelect,
  index = 0,
}: {
  project: Project;
  onSelect: (project: Project) => void;
  index?: number;
}) {
  return (
    <Reveal delay={index * 0.04} className="project-card group min-w-0">
      <button
        className={
          "relative flex aspect-[1.25] w-full items-center overflow-hidden rounded-xl border border-white/10 px-5 pt-7 text-left sm:px-7 " +
          project.accentClass
        }
        onClick={() => onSelect(project)}
        aria-label={"View " + project.title + " project"}
      >
        <span className="absolute top-4 left-5 z-10 rounded border border-white/15 bg-black/40 px-2 py-1 font-mono text-[8px] tracking-widest text-white backdrop-blur-md">
          {project.context === "SRDT" ? "AT SRDT" : "DEPLOYED PROJECT"}
        </span>
        <div className="w-full rotate-[-3deg] transition duration-500 group-hover:rotate-0 group-hover:scale-[1.03] motion-reduce:transform-none">
          <ProjectVisual {...project} />
        </div>
        <span className="absolute right-3 bottom-3 grid size-9 place-items-center rounded-full border border-white/20 bg-canvas/80 text-white backdrop-blur-md">
          <Plus size={17} />
        </span>
      </button>
      <div className="mt-5 flex items-start justify-between gap-3">
        <div>
          <span className="font-mono text-[9px] tracking-widest text-muted uppercase">
            {project.category}
          </span>
          <h3 className="mt-2 text-xl font-medium tracking-tight sm:text-2xl">
            <button
              className="text-left transition hover:text-highlight"
              onClick={() => onSelect(project)}
            >
              {project.title}
            </button>
          </h3>
        </div>
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noreferrer"
          className="mt-3 grid size-10 shrink-0 place-items-center rounded-full border border-white/10 transition hover:border-highlight hover:text-highlight"
          aria-label={"Visit " + project.title + " website"}
        >
          <ArrowUpRight size={19} />
        </a>
      </div>
      <p className="mt-3 text-xs leading-relaxed">{project.summary}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span key={tag} className="tag">
            {tag}
          </span>
        ))}
      </div>
    </Reveal>
  );
}
