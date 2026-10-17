import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "../../data/projects";

export default function ProjectVisual({
  image,
  title,
  liveUrl,
  monogram,
  accentClass,
}: Pick<Project, "image" | "title" | "liveUrl" | "monogram" | "accentClass">) {
  const [failed, setFailed] = useState(false);
  return (
    <div className="w-full overflow-hidden rounded-lg border border-white/15 bg-surface shadow-2xl">
      <div
        className="flex h-8 items-center gap-1.5 border-b border-white/10 bg-[#151d2b] px-3"
        aria-hidden="true"
      >
        <span className="size-1.5 rounded-full bg-slate-500" />
        <span className="size-1.5 rounded-full bg-slate-600" />
        <span className="size-1.5 rounded-full bg-slate-700" />
        <span className="mx-auto truncate px-2 font-mono text-[8px] text-slate-400 sm:text-[9px]">
          {new URL(liveUrl).hostname}
        </span>
        <ArrowUpRight size={11} className="text-slate-400" />
      </div>
      {image && !failed ? (
        <img
          className="aspect-[1.44] w-full object-cover object-top"
          src={image}
          alt={title + " website screenshot"}
          loading="lazy"
          width={1440}
          height={1000}
          onError={() => setFailed(true)}
        />
      ) : (
        <div
          className={
            "relative flex aspect-[1.44] flex-col justify-between overflow-hidden p-7 " +
            accentClass
          }
        >
          <span className="font-mono text-[10px] uppercase tracking-widest text-white/60">
            {new URL(liveUrl).hostname}
          </span>
          <span className="font-display text-7xl font-semibold tracking-tighter text-white/90">
            {monogram}
          </span>
          <div className="flex items-center justify-between">
            <span className="font-display text-xl text-white">{title}</span>
            <ArrowUpRight className="text-white" />
          </div>
        </div>
      )}
    </div>
  );
}
