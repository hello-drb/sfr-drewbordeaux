import Link from "next/link";
import SectionReveal from "@/components/SectionReveal";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "The philosophy behind Drew Bordeaux \u2014 excavation, not superimposition. Six creative disciplines unified into the 7th Vista.",
};

export default function AboutPage() {
  return (
    <>
      <section className="pt-40 pb-20 px-6 bg-paper">
        <div className="max-w-[1000px] mx-auto">
          <span className="text-spruce text-[11px] uppercase tracking-[0.3em] font-bold block mb-6 animate-fade-in">
            Philosophy
          </span>
          <h1 className="font-display text-6xl md:text-8xl uppercase tracking-wide text-ink leading-[0.9] animate-slide-up">
            The 7th
            <br />
            <span className="text-rust">Vista</span>
          </h1>
        </div>
      </section>

      <div className="w-full h-px bg-ink/10 max-w-[1000px] mx-auto" />

      <section className="py-20 md:py-32 px-6 bg-paper">
        <div className="max-w-[700px] mx-auto">
          <SectionReveal>
            <p className="font-serif italic text-xl md:text-2xl text-ink/80 leading-relaxed border-l-4 border-spruce pl-6 mb-16">
              &ldquo;It&rsquo;s not just about the song. It&rsquo;s about the world it lives in.&rdquo;
            </p>
          </SectionReveal>

          <SectionReveal delay={100}>
            <div className="space-y-6 font-sans font-light leading-relaxed text-stone">
              <p>
                Drew Bordeaux operates across six creative disciplines &mdash; music, production,
                photography, visual identity, AI film, and creative direction. Each practice
                is distinct. Each has its own language, its own demands, its own audience.
              </p>
              <p>
                But they share a common philosophy: <strong className="text-ink font-medium">excavation, not superimposition.</strong> The
                best creative direction doesn&rsquo;t invent an identity from scratch. It pays
                close attention to the influences, moods, and ideas already present &mdash; then
                shapes the work around them to create something cohesive and true.
              </p>
              <p>
                DrewBordeaux.com is the 7th Vista &mdash; the elevated vantage point where all
                six disciplines converge into a unified practice. Not a portfolio of separate
                skills, but a single creative intelligence applied across mediums.
              </p>
            </div>
          </SectionReveal>

          <SectionReveal delay={200}>
            <div className="mt-20 pt-20 border-t border-ink/10">
              <h2 className="font-display text-3xl md:text-4xl uppercase tracking-wide text-ink mb-8">
                The Era View
              </h2>
              <div className="space-y-6 font-sans font-light leading-relaxed text-stone">
                <p>
                  Websites are living, breathing things. They are not permanent structures &mdash;
                  they are eras. Each era captures the current state of the creative practice,
                  the current visual language, the current signal.
                </p>
                <p>
                  This site will change. It will evolve as the work evolves. What you&rsquo;re
                  seeing now is the first era &mdash; and the build process itself is the first
                  proof of concept: a creative director&rsquo;s site built with the same
                  AI-augmented workflows being offered as a service.
                </p>
              </div>
            </div>
          </SectionReveal>

          <SectionReveal delay={300}>
            <div className="mt-20 pt-20 border-t border-ink/10">
              <h2 className="font-display text-3xl md:text-4xl uppercase tracking-wide text-ink mb-8">
                Background
              </h2>
              <div className="space-y-6 font-sans font-light leading-relaxed text-stone">
                <p>
                  A classically trained violinist since age 5, Drew&rsquo;s evolution from the
                  conservatory to the stage birthed a distinct sonic signature &mdash; an electric
                  violin style channeling Jimi Hendrix paired with percussive acoustic guitar.
                  That same attention to texture and detail carries into every discipline.
                </p>
                <p>
                  His visual work through <a href="https://drewimages.studio" className="text-ink border-b border-ink/20 hover:border-rust hover:text-rust transition-colors" target="_blank" rel="noopener noreferrer">DrewImages</a> has
                  appeared in <em className="font-serif">Vogue</em>, <em className="font-serif">Billboard</em>,
                  and <em className="font-serif">DownBeat</em>, with clients including Grammy-winning
                  artists Jazzmeia Horn, Nicole Zuraitis, and Cyrille Aim\u00e9e.
                </p>
                <p>
                  As a music producer, he helmed Becki Davis&rsquo;s debut <em className="font-serif">Lost &amp; Found</em>,
                  which reached #7 on the Folk Alliance International Top Albums Chart. His own
                  debut album <em className="font-serif">Impulse / Instinct</em> established
                  his recorded voice. A new album, <em className="font-serif">Dust Between Galaxies</em>,
                  arrives Spring 2026.
                </p>
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>
    </>
  );
}
