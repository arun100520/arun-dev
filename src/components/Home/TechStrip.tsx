import { useState } from "react";
import {
  Code2,
  Layers3,
  Braces,
  Database,
  Cloud,
  PanelsTopLeft,
  Coffee,
  Leaf,
  Server,
  Network,
  Terminal,
  Wind,
  Search,
  Zap,
  MessageSquare,
  Pause,
  Play,
} from "lucide-react";

const items = [
  { Icon: Code2, name: "React" },
  { Icon: Braces, name: "TypeScript" },
  { Icon: Layers3, name: "Spring Boot" },
  { Icon: Database, name: "PostgreSQL" },
  { Icon: Cloud, name: "AWS" },
  { Icon: PanelsTopLeft, name: "Web design" },
  { Icon: Database, name: "MySQL" },
  { Icon: Leaf, name: "MongoDB" },
  { Icon: Coffee, name: "Java" },
  { Icon: Server, name: "Node.js" },
  { Icon: Network, name: "Express.js" },
  { Icon: Terminal, name: "Next.js" },
  { Icon: Wind, name: "Tailwind CSS" },
  { Icon: Search, name: "ELK" },
  { Icon: Zap, name: "Redis" },
  { Icon: MessageSquare, name: "RabbitMQ" },
];

export default function TechStrip() {
  const [paused, setPaused] = useState(false);
  return (
    <section
      aria-label="Technologies I work with"
      className="border-y border-white/10 bg-surface/50"
    >
      <div className="container flex min-w-0 flex-col gap-6 py-7 lg:flex-row lg:items-center lg:gap-10">
        <div className="flex shrink-0 items-center justify-between gap-5">
          <span className="shrink-0 font-mono text-[8px] leading-5 tracking-widest text-muted">
            CREATIVE THINKING.
            <br className="hidden lg:block" /> SOLID ENGINEERING.
          </span>
          <button
            type="button"
            onClick={() => setPaused(!paused)}
            aria-label={
              paused ? "Resume technology marquee" : "Pause technology marquee"
            }
            aria-pressed={paused}
            aria-controls="technology-marquee"
            className="grid size-8 shrink-0 place-items-center rounded border border-white/10 text-muted transition hover:border-highlight/40 hover:text-highlight motion-reduce:hidden"
          >
            {paused ? (
              <Play size={12} aria-hidden="true" />
            ) : (
              <Pause size={12} aria-hidden="true" />
            )}
          </button>
        </div>
        <div className="group min-w-0 flex-1 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_24px,black_calc(100%-24px),transparent)] motion-reduce:[mask-image:none]">
          <div
            id="technology-marquee"
            className="flex w-max animate-tech-marquee py-2 group-hover:[animation-play-state:paused] motion-reduce:w-full motion-reduce:animate-none"
            style={paused ? { animationPlayState: "paused" } : undefined}
          >
            {[0, 1].map((copy) => (
              <ul
                key={copy}
                aria-hidden={copy === 1 ? true : undefined}
                className={
                  "flex shrink-0 items-center gap-10 pr-10 sm:gap-14 sm:pr-14 " +
                  (copy === 1
                    ? "motion-reduce:hidden"
                    : "motion-reduce:w-full motion-reduce:flex-wrap motion-reduce:gap-x-6 motion-reduce:gap-y-5 motion-reduce:pr-0")
                }
              >
                {items.map(({ Icon, name }) => (
                  <li
                    key={name}
                    className="flex shrink-0 items-center gap-2.5 whitespace-nowrap text-xs font-medium text-slate-300 sm:text-sm"
                  >
                    <Icon
                      size={18}
                      strokeWidth={1.5}
                      className="shrink-0 text-slate-500"
                      aria-hidden="true"
                    />
                    {name}
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
