import { useEffect, useRef } from "react";
import { ArrowUpRight, Github, X } from "lucide-react";
import type { Project } from "../../data/projects";
import { hireLink } from "../../data/profile";
import ProjectVisual from "./ProjectVisual";

export default function ProjectDialog({
  project,
  onClose,
}: {
  project: Project | null;
  onClose: () => void;
}) {
  const dialog = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    if (!project) return;
    const previousFocus = document.activeElement as HTMLElement | null;
    const element = dialog.current;
    element?.showModal();
    const overflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      element?.close();
      document.body.style.overflow = overflow;
      previousFocus?.focus();
    };
  }, [project]);
  return (
    <dialog
      ref={dialog}
      className="fixed inset-0 m-auto max-h-[90dvh] w-[calc(100%-2rem)] max-w-3xl overflow-y-auto rounded-xl border border-white/15 bg-canvas p-0 text-ink shadow-2xl"
      aria-label={
        project ? project.title + " project details" : "Project details"
      }
      onKeyDown={(event) => {
        if (event.key !== "Tab") return;
        const controls = Array.from(
          event.currentTarget.querySelectorAll<HTMLElement>(
            "a[href], button:not([disabled])",
          ),
        );
        const first = controls[0];
        const last = controls[controls.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last?.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first?.focus();
        }
      }}
      onCancel={onClose}
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      {project && (
        <div className="relative">
          <button
            autoFocus
            onClick={onClose}
            aria-label="Close project"
            className="absolute top-3 right-3 z-20 grid size-10 place-items-center rounded-full border border-white/20 bg-canvas/90 text-white backdrop-blur"
          >
            <X size={20} />
          </button>
          <div className={"px-7 py-10 sm:px-16 " + project.accentClass}>
            <ProjectVisual key={project.id} {...project} />
          </div>
          <div className="p-6 sm:p-8">
            <span className="eyebrow">
              {project.context === "SRDT"
                ? "PROFESSIONAL WORK AT SRDT"
                : "SELECTED WORK"}{" "}
              / {project.category}
            </span>
            <h2 className="text-3xl font-medium tracking-tight">
              {project.title}
            </h2>
            <p className="mt-4 text-sm">{project.description}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span className="tag" key={tag}>
                  {tag}
                </span>
              ))}
            </div>
            <div className="mt-7 flex flex-wrap items-center gap-5">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="button"
              >
                {project.id === "unif-crm"
                  ? "View product page"
                  : "Visit live site"}
                <ArrowUpRight size={17} />
              </a>
              {project.sourceUrl && (
                <a
                  href={project.sourceUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-link"
                >
                  <Github size={16} /> Source code
                </a>
              )}
              <a href={hireLink} className="text-link">
                Discuss your project <ArrowUpRight size={16} />
              </a>
            </div>
          </div>
        </div>
      )}
    </dialog>
  );
}
