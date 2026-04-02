import Link from "next/link";
import SectionReveal from "@/components/SectionReveal";
import { ArrowRight } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Portfolio across four creative verticals: AI Film, Photography, Creative Direction, and Music.",
};

const VERTICALS = [
  {
    title: "AI Film",
    slug: "ai-film",
    tagline: "The future of visual storytelling",
    description:
      "Exploring the frontier of AI-generated cinema. Short films, music videos, and visual experiments that push the boundaries of what\u2019s possible.",
    image:
      "https://res.cloudinary.com/diduw1fmf/image/upload/v1769319488/drew-12_nihwq7.jpg",
  },
  {
    title: "Photography",
    slug: "photography",
    tagline: "Excavating visual truth",
    description:
      "Artist portraiture, live performance documentation, and editorial work. Featured in Vogue, Billboard, and DownBeat.",
    image:
      "https://res.cloudinary.com/diduw1fmf/image/upload/v1769321304/impulseinstinct_record_cuaqxk.png",
  },
  {
    title: "Creative Direction",
    slug: "creative-direction",
    tagline: "Signal over noise",
    description:
      "Full-spectrum creative direction for artists and brands. Visual identity, content strategy, and the cohesive throughline connecting how you look, sound, and are found.",
    image:
      "https://res.cloudinary.com/diduw1fmf/image/upload/v1769329708/lostandfoundcover_orff3l.png",
  },
  {
    title: "Music",
    slug: "music",
    tagline: "Where instinct meets impulse",
    description:
      "Solo artist, electric violinist, songwriter, and producer. Two albums deep with a third on the way. Production credits spanning folk, rock, and indie.",
    image:
      "https://res.cloudinary.com/diduw1fmf/image/upload/v1769320153/impulseInstinctcover_zpkz6x.jpg",
  },
];

export default function WorkPage() {
  return (
    <>
      <section className="pt-40 pb-20 px-6 bg-paper">
        <div className="max-w-[1400px] mx-auto">
          <span className="text-rust text-[11px] uppercase tracking-[0.3em] font-bold block mb-6 animate-fade-in">
            Portfolio
          </span>
          <h1 className="font-display text-6xl md:text-8xl uppercase tracking-wide text-ink leading-[0.9] animate-slide-up">
            The Work
          </h1>
        </div>
      </section>

      <div className="w-full h-px bg-ink/10" />

      <section className="bg-paper py-20">
        <div className="max-w-[1400px] mx-auto px-6 space-y-4">
          {VERTICALS.map((v, i) => (
            <SectionReveal key={v.slug} delay={i * 100}>
              <Link href={`/work/${v.slug}`} className="group block">
                <div className="relative overflow-hidden bg-charcoal aspect-[21/9]">
                  <img
                    src={v.image}
                    alt={v.title}
                    className="w-full h-full object-cover opacity-40 group-hover:opacity-60 group-hover:scale-105 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-charcoal/80 via-charcoal/40 to-transparent" />
                  <div className="absolute inset-0 flex items-center px-12 md:px-20">
                    <div className="max-w-xl">
                      <span className="text-rust text-[10px] uppercase tracking-[0.3em] font-bold block mb-3">
                        {v.tagline}
                      </span>
                      <h2 className="font-display text-4xl md:text-6xl uppercase text-bone tracking-wide mb-4 group-hover:text-rust transition-colors duration-500">
                        {v.title}
                      </h2>
                      <p className="text-bone/60 text-sm font-light leading-relaxed hidden md:block max-w-md">
                        {v.description}
                      </p>
                      <div className="mt-6 flex items-center gap-2 text-rust text-[10px] uppercase tracking-[0.2em]">
                        Explore{" "}
                        <ArrowRight
                          size={12}
                          className="group-hover:translate-x-1 transition-transform"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </SectionReveal>
          ))}
        </div>
      </section>
    </>
  );
}
