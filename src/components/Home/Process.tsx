import { ArrowRight } from "lucide-react";
import Reveal from "../Shared/Reveal";

const steps = [
  [
    "Let’s talk",
    "We start with your idea, audience, and goals. I listen, ask questions, and help shape a clear brief.",
  ],
  [
    "Find the direction",
    "We agree on scope and explore a visual direction. You’ll see the thinking before we build.",
  ],
  [
    "Make it real",
    "I design and develop, sharing progress along the way. Your feedback stays part of the process.",
  ],
  [
    "Launch with care",
    "We test, polish, and go live. You get a clear handover and an agreed plan for what comes next.",
  ],
];
export default function Process() {
  return (
    <section id="process" className="container pb-18 md:pb-24">
      <Reveal>
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <span className="eyebrow">04 / HOW WE WORK TOGETHER</span>
            <h2 className="section-title">
              A clear path from
              <br />
              idea to <span className="text-highlight">launch.</span>
            </h2>
          </div>
          <p className="text-sm">
            You stay involved.
            <br />I take care of the details.
          </p>
        </div>
      </Reveal>
      <div className="mt-10 grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-4">
        {steps.map(([title, description], index) => (
          <Reveal key={title} delay={index * 0.05}>
            <div className="flex items-center justify-between border-b border-white/15 pb-5 font-mono text-2xl text-highlight">
              0{index + 1}
              <ArrowRight size={17} className="text-slate-500" />
            </div>
            <h3 className="mt-5 text-lg font-medium tracking-tight">{title}</h3>
            <p className="mt-3 text-xs leading-6 sm:text-sm">{description}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
