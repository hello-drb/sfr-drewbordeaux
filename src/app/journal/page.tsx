import SectionReveal from "@/components/SectionReveal";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Journal",
  description:
    "Writing on creative direction, AI, music, and the intersection of art and technology.",
};

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
        </div>
      </section>

      <div className="w-full h-px bg-ink/10 max-w-[1000px] mx-auto" />

      <section className="py-20 md:py-32 px-6 bg-paper">
        <div className="max-w-[1000px] mx-auto">
          <SectionReveal>
            <article className="border-b border-ink/10 pb-16 mb-16">
              <span className="text-stone text-[10px] uppercase tracking-[0.2em] font-bold block mb-4">
                Coming Soon
              </span>
              <h2 className="font-display text-4xl md:text-5xl uppercase tracking-wide text-ink mb-6 leading-[0.95]">
                The Age of the AI
                <br />
                Creative Director
              </h2>
              <p className="text-stone font-light leading-relaxed max-w-2xl text-lg">
                A manifesto on why the creative director&rsquo;s role becomes more
                vital &mdash; not less &mdash; in the age of generative AI. The tools
                change. The taste doesn&rsquo;t.
              </p>
            </article>

            <p className="text-stone/50 text-sm font-light text-center">
              More writing coming soon. This journal will document the
              intersection of creative direction, technology, and artistic
              practice.
            </p>
          </SectionReveal>
        </div>
      </section>
    </>
  );
}
