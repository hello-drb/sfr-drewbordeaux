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
      "Photography, video, and the complete visual language that defines a creative practice. Not a logo. Not a mood board handed off for someone else to execute. The full visual world\u2014conceived, shot, directed, and delivered by one person with two decades of editorial and commercial experience.",
    audience: "Artists launching albums. Founders rebranding. Brands building visual systems.",
    features: [
      "Brand & Editorial Photography",
      "Music Video Direction",
      "Art Direction & Album Packaging",
      "Visual Systems & Style Guides",
    ],
  },
  {
    title: "Content Strategy",
    description:
      "The editorial architecture behind a meaningful presence. What gets said, how it sounds, and where it lives\u2014built to compound over time rather than chase algorithms. Strategy rooted in identity, not trends.",
    audience: "Thought leaders building audiences. Brands finding their voice. Creators scaling content.",
    features: [
      "Editorial Calendar & Platform Strategy",
      "Copywriting & Brand Voice",
      "Newsletter & Essay Series",
      "Content Systems & Workflows",
    ],
  },
  {
    title: "Automation & Systems",
    description:
      "Email capture, nurture sequences, booking flows, and the infrastructure that works while the creator creates. The invisible architecture that turns attention into engagement and engagement into relationships.",
    audience: "Consultants building pipelines. Studios scaling operations. Anyone tired of manual follow-up.",
    features: [
      "Email Automation & Nurture Sequences",
      "CRM Setup & Pipeline Design",
      "Booking Flows & Scheduling",
      "Analytics & Conversion Tracking",
    ],
  },
  {
    title: "AI-Augmented Workflows",
    description:
      "AI as a creative tool, not a replacement. Custom workflows that amplify output without diluting voice\u2014built by someone who produces music, directs film, and builds software, not by a consultant who read about it.",
    audience: "Creative teams exploring AI. Studios building new pipelines. Forward-thinking brands.",
    features: [
      "AI Film & Generative Visual Production",
      "Custom Creative Workflows",
      "Knowledge Architecture & Tool Integration",
      "AI Strategy Consulting",
    ],
  },
];

const PROCESS_STEPS = [
  {
    number: "01",
    title: "Discovery",
    description:
      "Deep conversation about who the client is, what they believe, what patterns drive their decisions, and where they want to go. Psychology-informed, not surface-level.",
  },
  {
    number: "02",
    title: "Synthesis",
    description:
      "Distilling the discovery into a clear creative identity\u2014finding the signal in the noise. The foundation everything else builds on.",
  },
  {
    number: "03",
    title: "World-Building",
    description:
      "Constructing the visible universe around that identity: visual language, digital presence, content strategy, the full brand ecosystem.",
  },
  {
    number: "04",
    title: "Integration",
    description:
      "Ensuring every touchpoint reinforces the same signal. Coherence across all channels, all expressions, all systems.",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* ═══ HERO ═══ */}
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
            Creative direction and brand architecture that makes the world see
            what you&rsquo;re building. One practice that handles every
            layer &mdash; from deep discovery to the systems that deliver the
            work.
          </p>
        </div>
      </section>

      <div className="w-full h-px bg-ink/10 max-w-[1000px] mx-auto" />

      {/* ═══ SERVICES ═══ */}
      <section className="py-20 md:py-32 px-6 bg-paper">
        <div className="max-w-[1000px] mx-auto space-y-24">
          {SERVICES.map((service, i) => (
            <SectionReveal key={service.title} delay={i * 100}>
              <div className="grid md:grid-cols-[1fr_300px] gap-12 md:gap-20 pb-24 border-b border-ink/10 last:border-0 last:pb-0">
                <div>
                  <h2 className="font-display text-3xl md:text-4xl uppercase tracking-wide text-ink mb-6">
                    {service.title}
                  </h2>
                  <p className="text-stone font-light leading-relaxed text-lg mb-4">
                    {service.description}
                  </p>
                  <p className="text-[11px] uppercase tracking-[0.15em] text-spruce/70 font-medium">
                    {service.audience}
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

      {/* ═══ THE PROCESS ═══ */}
      <section className="py-32 px-6 bg-sand/30">
        <div className="max-w-[1000px] mx-auto">
          <SectionReveal>
            <div className="mb-20">
              <span className="text-spruce text-[11px] uppercase tracking-[0.3em] font-bold block mb-4">
                How It Works
              </span>
              <h2 className="font-display text-4xl md:text-6xl uppercase tracking-wide text-ink">
                The <span className="text-rust">Process</span>
              </h2>
            </div>
          </SectionReveal>

          <div className="grid md:grid-cols-2 gap-12">
            {PROCESS_STEPS.map((step, i) => (
              <SectionReveal key={step.number} delay={i * 100}>
                <div className="flex gap-6">
                  <span className="font-display text-5xl text-ink/10 leading-none shrink-0">
                    {step.number}
                  </span>
                  <div>
                    <h3 className="font-display text-xl uppercase tracking-wide text-ink mb-3">
                      {step.title}
                    </h3>
                    <p className="text-stone font-light leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ ENGAGEMENT OVERVIEW ═══ */}
      <section className="py-32 px-6 bg-paper">
        <SectionReveal>
          <div className="max-w-[800px] mx-auto">
            <div className="text-center mb-16">
              <span className="text-spruce text-[11px] uppercase tracking-[0.3em] font-bold block mb-4">
                Working Together
              </span>
              <h2 className="font-display text-4xl md:text-5xl uppercase tracking-wide text-ink">
                Engagement <span className="text-rust">Models</span>
              </h2>
            </div>

            <div className="space-y-8">
              <div className="border border-ink/10 p-8 md:p-10">
                <h3 className="font-display text-xl uppercase tracking-wide text-ink mb-3">
                  Project-Based
                </h3>
                <p className="text-stone font-light leading-relaxed">
                  A defined scope with clear deliverables. Brand identity
                  packages, album art direction, website builds, campaign
                  shoots. The engagement has a beginning and an end, with
                  everything between handled at the highest level.
                </p>
              </div>

              <div className="border border-ink/10 p-8 md:p-10">
                <h3 className="font-display text-xl uppercase tracking-wide text-ink mb-3">
                  Ongoing Direction
                </h3>
                <p className="text-stone font-light leading-relaxed">
                  Monthly creative support with a consistent visual language
                  and strategic rhythm. For practices and brands that need
                  a creative director on retainer without the overhead of a
                  full-time hire. Strategy, production, and systems\u2014all
                  under one roof.
                </p>
              </div>

              <div className="border border-ink/10 p-8 md:p-10">
                <h3 className="font-display text-xl uppercase tracking-wide text-ink mb-3">
                  Signal Architecture Audit
                </h3>
                <p className="text-stone font-light leading-relaxed">
                  A focused engagement that reviews the full signal\u2014visual
                  identity, content strategy, digital presence, and
                  systems\u2014and delivers a clear roadmap for what to build,
                  fix, or refine. The starting point for larger engagements
                  or a standalone strategic deliverable.
                </p>
              </div>
            </div>
          </div>
        </SectionReveal>
      </section>

      {/* ═══ CTA ═══ */}
      <section className="py-32 px-6 bg-charcoal">
        <SectionReveal>
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-display text-5xl md:text-6xl uppercase tracking-wide text-bone leading-[0.9] mb-8">
              Your brand should feel
              <br />
              <span className="text-rust">as remarkable as the work.</span>
            </h2>
            <p className="text-stone font-light leading-relaxed mb-10">
              Every engagement starts with a conversation. No pitch deck.
              No questionnaire. Just a real discussion about where you are
              and where you want to go.
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
