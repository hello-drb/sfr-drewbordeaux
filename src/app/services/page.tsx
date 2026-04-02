import Link from "next/link";
import SectionReveal from "@/components/SectionReveal";
import { ArrowRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Signal Architecture",
  description:
    "Creative direction, visual identity, content strategy, and AI-augmented workflows. Architecture for how you look, sound, and are found.",
};

const SERVICES = [
  {
    title: "Visual Identity",
    description:
      "Photography, video, and the complete visual language that defines your creative practice. Not a logo \u2014 a world.",
    features: [
      "Brand Photography",
      "Music Video Direction",
      "Art Direction",
      "Visual Systems",
    ],
  },
  {
    title: "Content Strategy",
    description:
      "The editorial architecture behind your presence. What you say, how you say it, and where it lives.",
    features: [
      "Editorial Calendar",
      "Platform Strategy",
      "Copywriting",
      "Content Systems",
    ],
  },
  {
    title: "Automation & Systems",
    description:
      "Email capture, nurture sequences, booking flows, and the infrastructure that works while you create.",
    features: ["Email Automation", "CRM Setup", "Booking Flows", "Analytics"],
  },
  {
    title: "AI-Augmented Workflows",
    description:
      "Leveraging AI as a creative tool \u2014 not a replacement. Custom workflows that amplify your output without diluting your voice.",
    features: [
      "AI Film Production",
      "Generative Visual Assets",
      "Workflow Automation",
      "Tool Integration",
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className="pt-40 pb-20 px-6 bg-paper">
        <div className="max-w-[1000px] mx-auto">
          <span className="text-spruce text-[11px] uppercase tracking-[0.3em] font-bold block mb-6 animate-fade-in">
            Services
          </span>
          <h1 className="font-display text-6xl md:text-8xl uppercase tracking-wide text-ink leading-[0.9] animate-slide-up mb-8">
            Signal
            <br />
            <span className="text-rust">Architecture</span>
          </h1>
          <p className="text-stone font-light text-lg md:text-xl leading-relaxed max-w-2xl opacity-0 animate-slide-up-delay">
            I don&rsquo;t build brands. I architect signals &mdash; the coherent
            throughline connecting how you look, how you sound, and how
            you&rsquo;re found.
          </p>
        </div>
      </section>

      <div className="w-full h-px bg-ink/10 max-w-[1000px] mx-auto" />

      <section className="py-20 md:py-32 px-6 bg-paper">
        <div className="max-w-[1000px] mx-auto space-y-20">
          {SERVICES.map((service, i) => (
            <SectionReveal key={service.title} delay={i * 100}>
              <div className="grid md:grid-cols-[1fr_300px] gap-12 md:gap-20 pb-20 border-b border-ink/10 last:border-0 last:pb-0">
                <div>
                  <h2 className="font-display text-3xl md:text-4xl uppercase tracking-wide text-ink mb-6">
                    {service.title}
                  </h2>
                  <p className="text-stone font-light leading-relaxed text-lg">
                    {service.description}
                  </p>
                </div>
                <div className="md:pt-2">
                  <h4 className="text-[10px] uppercase tracking-[0.3em] text-stone/40 font-bold mb-4">
                    Includes
                  </h4>
                  <ul className="space-y-3">
                    {service.features.map((f) => (
                      <li
                        key={f}
                        className="flex items-center gap-3 text-sm text-ink font-medium"
                      >
                        <span className="w-1.5 h-1.5 bg-rust rounded-full shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </SectionReveal>
          ))}
        </div>
      </section>

      <section className="py-32 px-6 bg-charcoal">
        <SectionReveal>
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-display text-5xl md:text-6xl uppercase tracking-wide text-bone leading-[0.9] mb-8">
              Ready to Architect
              <br />
              <span className="text-rust">Your Signal?</span>
            </h2>
            <p className="text-stone font-light leading-relaxed mb-10">
              Every engagement starts with a conversation. Tell me about your
              creative practice and where you want to take it.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 bg-rust text-bone text-[11px] uppercase tracking-[0.2em] px-10 py-4 hover:bg-bone hover:text-ink transition-colors duration-300"
            >
              Start a Conversation <ArrowRight size={14} />
            </Link>
          </div>
        </SectionReveal>
      </section>
    </>
  );
}
