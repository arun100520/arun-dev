import { ChevronDown } from "lucide-react";
import Reveal from "../Shared/Reveal";

const faqs = [
  [
    "What kinds of projects can we work on?",
    "Business websites, landing pages, custom React applications, dashboards, and backend APIs. I can help with design and development together, or join a project that needs one of those skills.",
  ],
  [
    "How much does a project cost?",
    "Every project has a different scope. After we discuss your goals, features, and timeline, I’ll put together a project-specific proposal with clear deliverables and pricing before work begins.",
  ],
  [
    "How long will it take?",
    "That depends on the scope, content readiness, and integrations. We’ll agree on milestones and a realistic timeline during discovery, with room for your feedback.",
  ],
  [
    "Can you redesign my existing website?",
    "Absolutely. We can review what’s working, identify what needs improvement, and plan a refresh of the design, user experience, or underlying application.",
  ],
  [
    "What happens after launch?",
    "You’ll receive a handover of the agreed deliverables and guidance for maintaining your site. We can also discuss a separate arrangement for ongoing updates, support, or new features.",
  ],
];
export default function FAQ() {
  return (
    <section className="section container grid gap-8 border-t border-white/10 md:grid-cols-[.9fr_1.1fr] md:gap-16">
      <Reveal>
        <span className="eyebrow">05 / BEFORE WE BEGIN</span>
        <h2 className="section-title">
          Good questions.
          <br />
          <span className="text-highlight">Straight answers.</span>
        </h2>
        <p className="mt-6 text-sm">
          Have something else in mind?
          <br />
          I’m just an email away.
        </p>
      </Reveal>
      <Reveal className="border-t border-white/10">
        {faqs.map(([question, answer]) => (
          <details
            className="group border-b border-white/10"
            key={question}
            name="portfolio-faq"
          >
            <summary className="flex list-none items-center justify-between gap-6 py-6 text-sm transition group-open:text-highlight">
              {question}
              <ChevronDown
                size={17}
                className="shrink-0 text-muted transition-transform group-open:rotate-180"
              />
            </summary>
            <p className="pr-4 pb-6 text-sm leading-7">{answer}</p>
          </details>
        ))}
      </Reveal>
    </section>
  );
}
