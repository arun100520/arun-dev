import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { projects } from "../../data/projects";
import type { Project } from "../../data/projects";
import ProjectCard from "../Shared/ProjectCard";
import ProjectDialog from "../Shared/ProjectDialog";
import Reveal from "../Shared/Reveal";

export default function SelectedWork() {
  const [selected, setSelected] = useState<Project | null>(null);
  return (
    <section id="work" className="section container">
      <Reveal>
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <span className="eyebrow">01 / SELECTED WORK</span>
            <h2 className="section-title">
              Ideas made <span className="text-highlight">real.</span>
            </h2>
          </div>
          <Link to="/work" className="text-link">
            All {projects.length} projects <ArrowUpRight size={17} />
          </Link>
        </div>
        <p className="mt-5 max-w-2xl text-sm">
          Brand websites, education platforms, and enterprise software. A
          selection of my work, live on the web.
        </p>
      </Reveal>
      <div className="mt-10 grid gap-x-7 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
        {projects
          .filter((project) => project.featured)
          .slice(0, 3)
          .map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              onSelect={setSelected}
            />
          ))}
      </div>
      <ProjectDialog project={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
