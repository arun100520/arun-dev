import { ArrowUpRight, Braces, PanelsTopLeft, Network } from "lucide-react";
import Reveal from "../Shared/Reveal";
import { hireLink } from "../../data/profile";

const services = [
  {
    Icon: PanelsTopLeft,
    title: "Web design",
    text: "A clear visual identity and an experience that makes your business easy to understand and remember.",
    features: [
      "Landing pages & business websites",
      "Responsive layouts & interactions",
      "Website redesigns",
    ],
  },
  {
    Icon: Braces,
    title: "Web development",
    text: "From the first screen to the final integration. Custom applications built around the way your business works.",
    features: [
      "React & TypeScript applications",
      "Custom dashboards & platforms",
      "API & third-party integrations",
    ],
  },
  {
    Icon: Network,
    title: "Backend & beyond",
    text: "The foundations of a dependable product. Well-structured APIs, thoughtful data models, and reliable deployments.",
    features: [
      "Java & Spring Boot APIs",
      "Databases & event-driven systems",
      "Cloud deployment & optimization",
    ],
  },
];
export default function Services() {
  return (
    <section
      id="services"
      className="section border-y border-white/10 bg-surface/50"
    >
      <div className="container">
        <Reveal>
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <span className="eyebrow">02 / WHAT I DO</span>
              <h2 className="section-title">
                Your ambition.
                <br className="sm:hidden" />{" "}
                <span className="text-highlight">My expertise.</span>
              </h2>
            </div>
            <p className="text-sm">
              One point of contact.
              <br />
              From the first idea to the final deploy.
            </p>
          </div>
        </Reveal>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {services.map(({ Icon, title, text, features }, index) => (
            <Reveal
              key={title}
              delay={index * 0.07}
              className="flex flex-col rounded-xl border border-white/10 bg-canvas/30 p-6 transition-colors hover:border-accent/50 lg:p-8"
            >
              <div className="mb-7 flex items-center justify-between">
                <span className="grid size-12 place-items-center rounded-md border border-accent/25 bg-accent/10 text-highlight">
                  <Icon size={24} strokeWidth={1.5} />
                </span>
                <span className="font-mono text-[10px] text-slate-500">
                  0{index + 1}
                </span>
              </div>
              <h3 className="text-2xl font-medium tracking-tight">{title}</h3>
              <p className="mt-4 text-sm leading-7">{text}</p>
              <ul className="my-7 space-y-3">
                {features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2.5 text-xs leading-5 text-slate-300"
                  >
                    <span className="mt-2 size-1 shrink-0 bg-highlight" />
                    {feature}
                  </li>
                ))}
              </ul>
              <a
                href={
                  hireLink +
                  "&body=" +
                  encodeURIComponent(
                    "Hi Arun, I'm interested in " +
                      title.toLowerCase() +
                      " for my project.\n\nProject idea:\nTimeline:\nBudget range:\n",
                  )
                }
                className="mt-auto flex items-center justify-between gap-3 border-t border-white/10 pt-5 text-xs transition hover:text-highlight"
              >
                Discuss your project <ArrowUpRight size={16} />
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
