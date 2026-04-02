import Link from "next/link";
import SectionReveal from "@/components/SectionReveal";
import { ArrowRight, ArrowDown } from "lucide-react";

const VERTICALS = [
  {
    title: "AI Film",
    slug: "ai-film",
    tagline: "The future of visual storytelling",
    image: "https://res.cloudinary.com/diduw1fmf/image/upload/v1769319488/drew-12_nihwq7.jpg",
  },
  {
    title: "Photography",
    slug: "photography",
    tagline: "Excavating visual truth",
    image: "https://res.cloudinary.com/diduw1fmf/image/upload/v1769321304/impulseinstinct_record_cuaqxk.png",
  },
  {
    title: "Creative Direction",
    slug: "creative-direction",
    tagline: "Signal over noise",
    image: "https://res.cloudinary.com/diduw1fmf/image/upload/v1769329708/lostandfoundcover_orff3l.png",
  },
  {
    title: "Music",
    slug: "music",
    tagline: "Where instinct meets impulse",
    image: "https://res.cloudinary.com/diduw1fmf/image/upload/v1769320153/impulseInstinctcover_zpkz6x.jpg",
  },
];

const PRESS = [
  "Vogue",
  "Billboard",
  "DownBeat",
  "American Songwriter",
  "Recording Academy",
];

export default function HomePage() {
  return (
    <>
      {/* \u2550\u2550\u2550 HERO \u2550\u2550\u2550 */}
      <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden bg-charcoal">
        <div className="absolute inset-0 z-0">
          <img
            src="https://res.cloudinary.com/diduw1fmf/image/upload/v1769319488/drew-12_nihwq7.jpg"
            alt=""
            className="w-full h-full object-cover opacity-30"
            style={{ objectPosition: "center 15%" }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/60 to-charcoal/40" />
        </div>

        <div className="relative z-10 text-center px-6 animate-fade-in">
          <h1 className="font-display text-6xl sm:text-8xl md:text-[10rem] lg:text-[12rem] uppercase tracking-wide text-bone leading-[0.85]">
            Drew
            <br />
            Bordeaux
          </h1>
          <p className="mt-8 text-bone/50 text-[11px] sm:text-xs uppercase tracking-[0.4em] font-sans font-medium opacity-0 animate-slide-up-delay">
            Creative Director &nbsp;\u2022&nbsp; Signal Architect
          </p>
        </div>

        <div className="absolute bottom-12 z-10 animate-bounce">
          <ArrowDown className="text-bone/30" size={20} />
        </div>
      </section>

      {/* \u2550\u2550\u2550 THE VERTICALS \u2550\u2550\u2550 */}
      <section className="py-32 px-6 bg-paper">
        <div className="max-w-[1400px] mx-auto">
          <SectionReveal>
            <div className="flex items-end justify-between mb-20">
              <div>
                <span className="text-rust text-[11px] uppercase tracking-[0.3em] font-bold block mb-4">
                  The Work
                </span>
                <h2 className="font-display text-5xl md:text-7xl uppercase tracking-wide text-ink">
                  Four Verticals.
                  <br />
                  <span className="text-stone">One Vision.</span>
                </h2>
              </div>
              <Link
                href="/work"
                className="hidden md:flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-rust hover:text-ink transition-colors"
              >
                View All <ArrowRight size={14} />
              </Link>
            </div>
          </SectionReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {VERTICALS.map((v, i) => (
              <SectionReveal key={v.slug} delay={i * 100}>
                <Link href={`/work/${v.slug}`} className="group block">
                  <div className="relative aspect-[4/3] overflow-hidden bg-charcoal">
                    <img
                      src={v.image}
                      alt={v.title}
                      className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/20 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-8">
                      <span className="text-rust text-[10px] uppercase tracking-[0.3em] font-bold block mb-2">
                        {v.tagline}
                      </span>
                      <h3 className="font-display text-4xl md:text-5xl uppercase text-bone tracking-wide group-hover:text-rust transition-colors duration-500">
                        {v.title}
                      </h3>
                    </div>
                  </div>
                </Link>
              </SectionReveal>
            ))}
          </div>

          <div className="mt-12 text-center md:hidden">
            <Link
              href="/work"
              className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-rust"
            >
              View All Work <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* \u2550\u2550\u2550 PHILOSOPHY \u2550\u2550\u2550 */}
      <section className="py-32 px-6 bg-spruce relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.6' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
            mixBlendMode: "overlay" as const,
          }}
        />
        <SectionReveal>
          <div className="max-w-3xl mx-auto text-center relative z-10">
            <p className="font-serif italic text-2xl md:text-4xl leading-relaxed text-bone">
              &ldquo;Excavation, not superimposition. The best creative direction
              doesn&rsquo;t invent an identity &mdash; it reveals one.&rdquo;
            </p>
            <div className="w-16 h-[2px] bg-bone/20 mx-auto mt-12 mb-8" />
            <p className="text-bone/70 text-sm font-sans font-light leading-relaxed max-w-xl mx-auto">
              Six creative disciplines. One unified vision. DrewBordeaux.com is
              the 7th Vista &mdash; the elevated view where AI film, photography,
              creative direction, and music converge into a singular practice.
            </p>
            <Link
              href="/about"
              className="inline-block mt-10 text-[11px] uppercase tracking-[0.25em] text-bone border-b border-bone/30 pb-1 hover:border-bone transition-colors"
            >
              Read the Philosophy
            </Link>
          </div>
        </SectionReveal>
      </section>

      {/* \u2550\u2550\u2550 SOCIAL PROOF \u2550\u2550\u2550 */}
      <section className="py-24 bg-charcoal overflow-hidden">
        <SectionReveal>
          <div className="text-center mb-16">
            <span className="text-bone/30 text-[10px] uppercase tracking-[0.4em] font-bold">
              Featured In
            </span>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-x-16 gap-y-8 max-w-4xl mx-auto px-6">
            {PRESS.map((pub) => (
              <span
                key={pub}
                className="font-serif italic text-2xl md:text-3xl text-bone/20 hover:text-bone/60 transition-colors duration-500 cursor-default"
              >
                {pub}
              </span>
            ))}
          </div>
        </SectionReveal>
      </section>

      {/* \u2550\u2550\u2550 SIGNAL ARCHITECTURE \u2550\u2550\u2550 */}
      <section className="py-32 px-6 bg-paper">
        <SectionReveal>
          <div className="max-w-[1000px] mx-auto">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <span className="text-spruce text-[11px] uppercase tracking-[0.3em] font-bold block mb-6">
                  Services
                </span>
                <h2 className="font-display text-5xl md:text-6xl uppercase tracking-wide text-ink leading-[0.9] mb-8">
                  Signal
                  <br />
                  Architecture
                </h2>
                <p className="text-stone font-light leading-relaxed mb-10">
                  I don&rsquo;t build brands. I architect signals &mdash; the coherent
                  throughline connecting how you look, how you sound, and how
                  you&rsquo;re found. From visual identity to content strategy to
                  the systems that deliver your work to the world.
                </p>
                <Link
                  href="/services"
                  className="inline-flex items-center gap-3 bg-charcoal text-bone text-[11px] uppercase tracking-[0.2em] px-8 py-4 hover:bg-rust transition-colors duration-300"
                >
                  Explore Services <ArrowRight size={14} />
                </Link>
              </div>
              <div className="relative">
                <div className="aspect-square bg-sand/50 border border-ink/5 flex items-center justify-center">
                  <div className="text-center space-y-4 p-12">
                    <div className="w-12 h-12 border border-ink/10 rounded-full mx-auto flex items-center justify-center">
                      <div className="w-3 h-3 bg-rust rounded-full" />
                    </div>
                    <p className="text-stone text-xs uppercase tracking-[0.2em]">Visual Identity</p>
                    <div className="w-px h-8 bg-ink/10 mx-auto" />
                    <p className="text-stone text-xs uppercase tracking-[0.2em]">Content Strategy</p>
                    <div className="w-px h-8 bg-ink/10 mx-auto" />
                    <p className="text-stone text-xs uppercase tracking-[0.2em]">Automation &amp; Systems</p>
                    <div className="w-px h-8 bg-ink/10 mx-auto" />
                    <p className="text-stone text-xs uppercase tracking-[0.2em]">AI-Augmented Workflows</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SectionReveal>
      </section>

      {/* \u2550\u2550\u2550 NEWSLETTER \u2550\u2550\u2550 */}
      <section className="py-24 bg-sand/50 px-6">
        <SectionReveal>
          <div className="max-w-lg mx-auto text-center">
            <h3 className="font-display text-3xl uppercase tracking-wide text-ink mb-4">
              Stay in the Signal
            </h3>
            <p className="text-stone text-sm font-light mb-8">
              New work, new writing, and the occasional manifesto.
            </p>
            <form className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 bg-transparent border-b border-ink/20 py-3 text-ink focus:outline-none focus:border-rust transition-colors placeholder:text-stone/30 font-sans"
              />
              <button
                type="submit"
                className="text-[11px] uppercase tracking-[0.2em] text-ink hover:text-rust transition-colors py-3 px-6 border border-ink/20 hover:border-rust"
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
