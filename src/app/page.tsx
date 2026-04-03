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

const CLIENT_ZONES = [
  {
    label: "Artists & Creators",
    description:
      "Musicians, performers, writers, and makers who need their visual world to match the depth of their work.",
    examples: "Grammy-winning vocalists. Broadway performers. Touring artists. NYT bestselling authors.",
  },
  {
    label: "Founders & Leaders",
    description:
      "Entrepreneurs, executives, and coaches whose brand should reflect the level they\u2019re operating at.",
    examples: "Festival executives. Hospitality groups. Marketing consultants. Nonprofit leaders.",
  },
  {
    label: "Brands & Cultural Projects",
    description:
      "Ensembles, labels, and cultural institutions building a cohesive identity across every touchpoint.",
    examples: "Chamber ensembles. Couture tailors. E-commerce brands. Record labels.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* ═══ HERO ═══ */}
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

      {/* ═══ BRAND HEADLINE ═══ */}
      <section className="py-24 px-6 bg-charcoal border-t border-bone/5">
        <SectionReveal>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl uppercase tracking-wide text-bone leading-[1.1]">
              Creative direction and brand architecture that makes the world see{" "}
              <span className="text-rust">what you&rsquo;re building.</span>
            </h2>
          </div>
        </SectionReveal>
      </section>

      {/* ═══ THE VERTICALS ═══ */}
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

      {/* ═══ PHILOSOPHY ═══ */}
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
              Twenty years across six creative disciplines. A psychology
              background that informs every brand engagement. One person who
              handles every layer &mdash; from strategy to shoot day to the
              systems that deliver the work to the world. The same instinct
              that produces an album, art-directs a visual identity, and builds
              the digital infrastructure to support it all.
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

      {/* ═══ SOCIAL PROOF ═══ */}
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

      {/* ═══ WHO THIS SERVES ═══ */}
      <section className="py-32 px-6 bg-paper">
        <div className="max-w-[1200px] mx-auto">
          <SectionReveal>
            <div className="text-center mb-20">
              <span className="text-spruce text-[11px] uppercase tracking-[0.3em] font-bold block mb-4">
                Client Zones
              </span>
              <h2 className="font-display text-4xl md:text-6xl uppercase tracking-wide text-ink">
                Who Finds <span className="text-rust">Drew</span>
              </h2>
            </div>
          </SectionReveal>

          <div className="grid md:grid-cols-3 gap-8">
            {CLIENT_ZONES.map((zone, i) => (
              <SectionReveal key={zone.label} delay={i * 150}>
                <div className="border border-ink/10 p-10 h-full">
                  <h3 className="font-display text-xl uppercase tracking-wide text-ink mb-4">
                    {zone.label}
                  </h3>
                  <p className="text-stone font-light leading-relaxed mb-6">
                    {zone.description}
                  </p>
                  <p className="text-[11px] uppercase tracking-[0.15em] text-stone/50 font-medium leading-relaxed">
                    {zone.examples}
                  </p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ SIGNAL ARCHITECTURE ═══ */}
      <section className="py-32 px-6 bg-sand/30">
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
                <p className="text-stone font-light leading-relaxed mb-6">
                  Not branding. Not marketing. Signal Architecture is the
                  coherent throughline connecting how a creative practice looks,
                  how it sounds, and how it&rsquo;s found &mdash; from visual
                  identity to content strategy to the systems that deliver
                  the work to the world.
                </p>
                <p className="text-stone font-light leading-relaxed mb-10">
                  Every engagement starts with deep discovery. The psychology
                  background informs the strategy. The creative skills build
                  the deliverables. The technical fluency makes the systems
                  run. One practice. Every layer.
                </p>
                <Link
                  href="/services"
                  className="inline-flex items-center gap-3 bg-charcoal text-bone text-[11px] uppercase tracking-[0.2em] px-8 py-4 hover:bg-rust transition-colors duration-300"
                >
                  Explore Services <ArrowRight size={14} />
                </Link>
              </div>
              <div className="relative">
                <div className="aspect-square bg-paper border border-ink/5 flex items-center justify-center">
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

      {/* ═══ NEWSLETTER ═══ */}
      <section className="py-24 bg-charcoal px-6">
        <SectionReveal>
          <div className="max-w-lg mx-auto text-center">
            <h3 className="font-display text-3xl uppercase tracking-wide text-bone mb-4">
              Stay in the Signal
            </h3>
            <p className="text-stone text-sm font-light mb-8">
              New work, new writing, and the occasional manifesto.
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

      {/* ═══ CLOSING CTA ═══ */}
      <section className="py-32 px-6 bg-paper">
        <SectionReveal>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-4xl md:text-6xl uppercase tracking-wide text-ink leading-[1.1] mb-8">
              Your brand should feel as remarkable as{" "}
              <span className="text-rust">the work you&rsquo;re doing.</span>
            </h2>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 bg-charcoal text-bone text-[11px] uppercase tracking-[0.2em] px-10 py-4 hover:bg-rust transition-colors duration-300"
            >
              Start a Conversation <ArrowRight size={14} />
            </Link>
          </div>
        </SectionReveal>
      </section>
    </>
  );
}
