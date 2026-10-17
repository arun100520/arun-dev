import { useState } from "react";
import { projects } from "../../data/projects";
import type { Project, ProjectCategory } from "../../data/projects";
import ProjectCard from "../Shared/ProjectCard";
import ProjectDialog from "../Shared/ProjectDialog";

const filters: ("All work" | ProjectCategory)[] = [
  "All work",
  "Web design",
  "Web applications",
];
export default function ProjectGallery() {
  const [filter, setFilter] = useState<(typeof filters)[number]>("All work");
  const [selected, setSelected] = useState<Project | null>(null);
  const filtered = projects.filter(
    (project) => filter === "All work" || project.category === filter,
  );
  return (
    <section className="pt-10 pb-24" aria-label="Project collection">
      <div
        className="flex flex-wrap gap-2 border-b border-white/10 pb-6"
        aria-label="Filter projects"
      >
        {filters.map((item) => (
          <button
            key={item}
            className={
              "flex items-center gap-3 rounded-md border px-4 py-3 text-xs transition " +
              (item === filter
                ? "border-accent bg-accent text-white"
                : "border-white/10 text-muted hover:border-white/30 hover:text-white")
            }
            aria-pressed={item === filter}
            onClick={() => setFilter(item)}
          >
            {item}
            <span className="font-mono text-[10px] opacity-70">
              {projects
                .filter(
                  (project) => item === "All work" || project.category === item,
                )
                .length.toString()
                .padStart(2, "0")}
            </span>
          </button>
        ))}
      </div>
      <p className="sr-only" aria-live="polite">
        {filtered.length} projects shown
      </p>
      <div className="mt-9 grid gap-x-7 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
        {filtered.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={index}
            onSelect={setSelected}
          />
        ))}
      </div>
      {!filtered.length && (
        <p className="py-12">
          New work is on the way. In the meantime, let’s talk about yours.
        </p>
      )}
      <ProjectDialog project={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
