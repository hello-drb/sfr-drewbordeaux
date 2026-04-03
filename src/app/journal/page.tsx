import Link from "next/link";
import SectionReveal from "@/components/SectionReveal";
import { ArrowRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Journal",
  description:
    "Writing on creative direction, AI, music, and the intersection of art and technology.",
};

const UPCOMING_POSTS = [
  {
    title: "The Age of the AI Creative Director",
    category: "Manifesto",
    description:
      "Why the creative director\u2019s role becomes more vital \u2014 not less \u2014 in the age of generative AI. The tools change. The taste doesn\u2019t.",
    status: "Coming Soon",
  },
  {
    title: "Excavation, Not Superimposition",
    category: "Philosophy",
    description:
      "The principle behind every creative decision: don\u2019t invent an identity from scratch. Pay attention to what\u2019s already there, then shape the work around it.",
    status: "Coming Soon",
  },
  {
    title: "Building the 7th Vista",
    category: "Process",
    description:
      "Documenting the build process of this site \u2014 an AI-augmented creative director\u2019s portfolio, built with the same workflows being offered as a service. The build is the proof of concept.",
    status: "Coming Soon",
  },
];

export default function JournalPage() {
  return (
    <>
      <section className="pt-40 pb-20 px-6 bg-paper">
        <div className="max-w-[1000px] mx-auto">
          <span className="text-rust text-[11px] uppercase tracking-[0.3em] font-bold block mb-6 animate-fade-in">
            Writing
          </span>
          <h1 className="font-display text-6xl md:text-8xl uppercase tracking-wide text-ink leading-[0.9] animate-slide-up">
            Journal
          </h1>
          <p className="mt-8 text-stone font-light text-lg leading-relaxed max-w-2xl opacity-0 animate-slide-up-delay">
            Essays on creative direction, AI, music production, and the practice
            of making things that matter.
          </p>
        </div>
      </section>

      <div className="w-full h-px bg-ink/10 max-w-[1000px] mx-auto" />

      <section className="py-20 md:py-32 px-6 bg-paper">
        <div className="max-w-[1000px] mx-auto space-y-0">
          {UPCOMING_POSTS.map((post, i) => (
            <SectionReveal key={post.title} delay={i * 100}>
              <article className="border-b border-ink/10 py-16 first:pt-0">
                <div className="flex items-start justify-between gap-8">
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="text-spruce text-[10px] uppercase tracking-[0.2em] font-bold">
                        {post.category}
                      </span>
                      <span className="text-stone/30 text-[10px] uppercase tracking-[0.2em]">
                        {post.status}
                      </span>
                    </div>
                    <h2 className="font-display text-3xl md:text-4xl uppercase tracking-wide text-ink mb-4 leading-[0.95]">
                      {post.title}
                    </h2>
                    <p className="text-stone font-light leading-relaxed max-w-2xl text-lg">
                      {post.description}
                    </p>
                  </div>
                </div>
              </article>
            </SectionReveal>
          ))}
        </div>
      </section>

      <section className="py-24 px-6 bg-charcoal">
        <SectionReveal>
          <div className="max-w-lg mx-auto text-center">
            <h3 className="font-display text-3xl uppercase tracking-wide text-bone mb-4">
              Stay in the Signal
            </h3>
            <p className="text-stone text-sm font-light mb-8">
              New writing, new work, and the occasional manifesto.
            </p>
            <form className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 bg-transparent border-b border-bone/20 py-3 text-bone focus:outline-none focus:border-rust transition-colors placeholder:text-stone/30 font-sans"
              />
              <button
                type="submit"
                className="text-[11px] uppercase tracking-[0.2em] text-bone hover:text-rust transition-colors py-3 px-6 border border-bone/20 hover:border-rust"
              >
                Subscribe
              </button>
            </form>
          </div>
        </SectionReveal>
      </section>
    </>
  );
}
