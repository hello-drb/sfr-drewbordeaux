import { notFound } from "next/navigation";
import SectionReveal from "@/components/SectionReveal";
import type { Metadata } from "next";

const VERTICAL_DATA: Record<
  string,
  { title: string; tagline: string; description: string }
> = {
  "ai-film": {
    title: "AI Film",
    tagline: "The future of visual storytelling",
    description:
      "Exploring the frontier of AI-generated cinema. Short films, music videos, and visual experiments that push the boundaries of what creative direction means in a generative world.",
  },
  photography: {
    title: "Photography",
    tagline: "Excavating visual truth",
    description:
      "Artist portraiture, live performance documentation, and editorial work through DrewImages. Featured in Vogue, Billboard, and DownBeat, with clients including Grammy-winning artists.",
  },
  "creative-direction": {
    title: "Creative Direction",
    tagline: "Signal over noise",
    description:
      "Full-spectrum creative direction \u2014 from album packaging to visual identity systems to content strategy. The practice of making everything about an artist\u2019s world feel coherent.",
  },
  music: {
    title: "Music",
    tagline: "Where instinct meets impulse",
    description:
      "Solo artist, electric violinist, songwriter, and producer. From the debut album Impulse / Instinct to the upcoming Dust Between Galaxies, and production work including Becki Davis\u2019s chart-topping Lost & Found.",
  },
};

type Props = {
  params: Promise<{ vertical: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { vertical } = await params;
  const data = VERTICAL_DATA[vertical];
  if (!data) return {};
  return { title: data.title, description: data.description };
}

export async function generateStaticParams() {
  return Object.keys(VERTICAL_DATA).map((vertical) => ({ vertical }));
}

export default async function VerticalPage({ params }: Props) {
  const { vertical } = await params;
  const data = VERTICAL_DATA[vertical];
  if (!data) notFound();

  return (
    <>
      <section className="pt-40 pb-20 px-6 bg-paper">
        <div className="max-w-[1400px] mx-auto">
          <span className="text-rust text-[11px] uppercase tracking-[0.3em] font-bold block mb-6 animate-fade-in">
            {data.tagline}
          </span>
          <h1 className="font-display text-6xl md:text-8xl uppercase tracking-wide text-ink leading-[0.9] animate-slide-up">
            {data.title}
          </h1>
        </div>
      </section>

      <div className="w-full h-px bg-ink/10" />

      <section className="py-20 md:py-32 px-6 bg-paper">
        <div className="max-w-[1000px] mx-auto">
          <SectionReveal>
            <p className="text-stone font-light text-lg leading-relaxed max-w-2xl mb-16">
              {data.description}
            </p>
            <div className="bg-sand/30 border border-ink/5 p-16 text-center">
              <p className="text-stone/40 text-sm uppercase tracking-[0.2em]">
                Portfolio pieces coming soon.
                <br />
                Content managed via Sanity CMS.
              </p>
            </div>
          </SectionReveal>
        </div>
      </section>
    </>
  );
}
