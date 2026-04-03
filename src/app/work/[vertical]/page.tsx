import Link from "next/link";
import { notFound } from "next/navigation";
import SectionReveal from "@/components/SectionReveal";
import { ArrowRight } from "lucide-react";
import type { Metadata } from "next";

type VerticalProject = {
  title: string;
  year: string;
  description: string;
  image?: string;
};

type VerticalInfo = {
  title: string;
  tagline: string;
  description: string;
  longDescription: string;
  image: string;
  credentials: string[];
  projects: VerticalProject[];
};

const VERTICAL_DATA: Record<string, VerticalInfo> = {
  "ai-film": {
    title: "AI Film",
    tagline: "The future of visual storytelling",
    description:
      "Exploring the frontier of AI-generated cinema. Short films, music videos, and visual experiments that push the boundaries of what creative direction means in a generative world.",
    longDescription:
      "AI doesn\u2019t replace the director\u2019s eye \u2014 it amplifies it. Every frame still requires taste, intention, and the instinct to know when something is working. The tools are new. The craft is ancient. This vertical documents the experiments, the breakthroughs, and the visual language emerging at the intersection of generative technology and cinematic storytelling.",
    image: "https://res.cloudinary.com/diduw1fmf/image/upload/v1769319488/drew-12_nihwq7.jpg",
    credentials: [
      "AI-augmented music videos and short films",
      "Custom generative workflows using Runway, Kling, and Sora",
      "Visual storytelling for artists and brands",
    ],
    projects: [
      {
        title: "Generative Visual Experiments",
        year: "2025\u20132026",
        description:
          "An ongoing series exploring AI cinema techniques \u2014 from prompt-driven narratives to hybrid live-action/generated compositions. Developing a visual language for the new medium.",
      },
      {
        title: "Music Video Direction",
        year: "2026",
        description:
          "AI-augmented music videos that blend real performance footage with generative visuals, creating worlds that would be impossible with traditional production budgets.",
      },
      {
        title: "The Age of the AI Creative Director",
        year: "2026",
        description:
          "A forthcoming manifesto and accompanying visual essay on why the creative director\u2019s role becomes more vital \u2014 not less \u2014 in the age of generative AI.",
      },
    ],
  },
  photography: {
    title: "Photography",
    tagline: "Excavating visual truth",
    description:
      "Artist portraiture, live performance documentation, and editorial work through DrewImages. Featured in Vogue, Billboard, and DownBeat.",
    longDescription:
      "Photography is excavation. The best portraits don\u2019t impose a look \u2014 they reveal what\u2019s already there. Whether capturing a Grammy-winning vocalist mid-phrase or building a visual world for an album campaign, the approach is the same: pay close attention, then frame what you see with intention. DrewImages has become the visual home for artists who want to be seen, not styled.",
    image: "https://res.cloudinary.com/diduw1fmf/image/upload/v1769321304/impulseinstinct_record_cuaqxk.png",
    credentials: [
      "Featured in Vogue, Billboard, DownBeat, American Songwriter",
      "Portraits for Grammy-winning and nominated artists",
      "Live performance documentation at major venues",
      "Editorial and album artwork photography",
    ],
    projects: [
      {
        title: "Nicole Zuraitis \u2014 Artist Campaign",
        year: "2024\u20132026",
        description:
          "Ongoing creative direction and photography for Grammy-winning vocalist Nicole Zuraitis. Portraits, live documentation, and visual identity work spanning multiple releases.",
      },
      {
        title: "Jazzmeia Horn \u2014 Editorial Portraits",
        year: "2023\u20132024",
        description:
          "Portrait sessions and performance documentation for Grammy-nominated vocalist Jazzmeia Horn. Work featured in major music publications.",
      },
      {
        title: "Lauren \u2014 Portrait Session",
        year: "2026",
        description:
          "A recent creative portrait session exploring visual storytelling through light, texture, and the quiet moments between poses. Includes experimental AI-enhanced treatments.",
      },
      {
        title: "Live Performance Archive",
        year: "Ongoing",
        description:
          "Documenting live music across New York\u2019s stages \u2014 from intimate jazz clubs to festival headliners. Capturing the energy and spontaneity that studio sessions can\u2019t replicate.",
      },
    ],
  },
  "creative-direction": {
    title: "Creative Direction",
    tagline: "Signal over noise",
    description:
      "Full-spectrum creative direction \u2014 from album packaging to visual identity systems to content strategy. The practice of making everything about an artist\u2019s world feel coherent.",
    longDescription:
      "Creative direction isn\u2019t decoration. It\u2019s architecture \u2014 the coherent throughline connecting how an artist looks, sounds, and is found. Most creatives have all the raw material they need. What they\u2019re missing is the signal: the clear, consistent thread that turns scattered output into a recognizable world. That\u2019s what Signal Architecture provides.",
    image: "https://res.cloudinary.com/diduw1fmf/image/upload/v1769329708/lostandfoundcover_orff3l.png",
    credentials: [
      "Album packaging and visual identity for recording artists",
      "Brand strategy for creative professionals",
      "Content systems and editorial architecture",
      "AI-augmented creative workflows",
    ],
    projects: [
      {
        title: "Becki Davis \u2014 Lost & Found",
        year: "2024\u20132025",
        description:
          "Full creative direction for Becki Davis\u2019s debut album Lost & Found \u2014 art direction, album packaging, promotional photography, and visual identity. The album reached #7 on the Folk Alliance International Top Albums Chart.",
      },
      {
        title: "Impulse / Instinct \u2014 Solo Album Campaign",
        year: "2024",
        description:
          "Complete creative direction for Drew\u2019s own debut album. Photography, visual identity, packaging design, and the content strategy connecting the music to the broader creative practice.",
      },
      {
        title: "Signal Architecture \u2014 Service Offering",
        year: "2026",
        description:
          "A new creative direction offering for artists and brands: visual identity, content strategy, automation systems, and AI-augmented workflows \u2014 delivered as a cohesive creative package.",
      },
    ],
  },
  music: {
    title: "Music",
    tagline: "Where instinct meets impulse",
    description:
      "Solo artist, electric violinist, songwriter, and producer. From the debut album Impulse / Instinct to the upcoming Dust Between Galaxies, and production work including Becki Davis\u2019s chart-topping Lost & Found.",
    longDescription:
      "A classically trained violinist since age 5, Drew\u2019s evolution from the conservatory to the stage birthed a distinct sonic signature \u2014 an electric violin style channeling Jimi Hendrix paired with percussive acoustic guitar. The music practice is the creative core: the thing everything else orbits around. Two albums deep, a third on the way, and production credits that keep expanding.",
    image: "https://res.cloudinary.com/diduw1fmf/image/upload/v1769320153/impulseInstinctcover_zpkz6x.jpg",
    credentials: [
      "Solo artist with two released albums",
      "Electric violin + acoustic guitar live performer",
      "Producer: Becki Davis \u2014 Lost & Found (#7 Folk Alliance Intl.)",
      "Featured in American Songwriter, Recording Academy",
      "Upcoming: Dust Between Galaxies (Spring 2026)",
    ],
    projects: [
      {
        title: "Dust Between Galaxies",
        year: "Spring 2026",
        description:
          "The upcoming sophomore album. A deeper exploration of the sound established on Impulse / Instinct \u2014 electric violin, layered production, and songwriting that sits at the intersection of folk, rock, and something harder to name.",
      },
      {
        title: "Impulse / Instinct",
        year: "2024",
        description:
          "Drew\u2019s debut album. Eleven tracks establishing the sonic identity \u2014 percussive guitar, soaring electric violin, and production that breathes. The record that proved the solo voice.",
      },
      {
        title: "Becki Davis \u2014 Lost & Found (Producer)",
        year: "2024\u20132025",
        description:
          "Produced Becki Davis\u2019s debut full-length album, which reached #7 on the Folk Alliance International Top Albums Chart. A folk record built on trust, restraint, and letting the songs speak.",
      },
      {
        title: "The Good Ones",
        year: "Ongoing",
        description:
          "An evolving creative project exploring the intersection of music, visual art, and storytelling. Details emerging.",
      },
    ],
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
      {/* Hero */}
      <section className="relative pt-40 pb-24 px-6 bg-charcoal overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={data.image}
            alt=""
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/70 to-charcoal/50" />
        </div>
        <div className="max-w-[1400px] mx-auto relative z-10">
          <span className="text-rust text-[11px] uppercase tracking-[0.3em] font-bold block mb-6 animate-fade-in">
            {data.tagline}
          </span>
          <h1 className="font-display text-6xl md:text-8xl uppercase tracking-wide text-bone leading-[0.9] animate-slide-up">
            {data.title}
          </h1>
        </div>
      </section>

      {/* Description */}
      <section className="py-20 md:py-28 px-6 bg-paper">
        <div className="max-w-[800px] mx-auto">
          <SectionReveal>
            <p className="font-serif italic text-xl md:text-2xl text-ink/80 leading-relaxed border-l-4 border-spruce pl-6 mb-12">
              {data.description}
            </p>
            <p className="text-stone font-light text-lg leading-relaxed">
              {data.longDescription}
            </p>
          </SectionReveal>

          {data.credentials.length > 0 && (
            <SectionReveal delay={100}>
              <div className="mt-16 pt-16 border-t border-ink/10">
                <h3 className="text-[10px] uppercase tracking-[0.3em] text-stone/40 font-bold mb-6">
                  Credentials
                </h3>
                <ul className="space-y-3">
                  {data.credentials.map((c) => (
                    <li
                      key={c}
                      className="flex items-start gap-3 text-stone font-light"
                    >
                      <span className="w-1.5 h-1.5 bg-rust rounded-full shrink-0 mt-2" />
                      {c}
                    </li>
                  ))}
                </ul>
              </div>
            </SectionReveal>
          )}
        </div>
      </section>

      {/* Featured Work */}
      <section className="py-20 md:py-28 px-6 bg-bone">
        <div className="max-w-[1000px] mx-auto">
          <SectionReveal>
            <span className="text-rust text-[11px] uppercase tracking-[0.3em] font-bold block mb-4">
              Featured Work
            </span>
            <h2 className="font-display text-4xl md:text-5xl uppercase tracking-wide text-ink mb-16">
              Selected Projects
            </h2>
          </SectionReveal>

          <div className="space-y-16">
            {data.projects.map((project, i) => (
              <SectionReveal key={project.title} delay={i * 100}>
                <div className="grid md:grid-cols-[120px_1fr] gap-6 md:gap-12 pb-16 border-b border-ink/10 last:border-0 last:pb-0">
                  <div>
                    <span className="text-rust text-[11px] uppercase tracking-[0.2em] font-bold">
                      {project.year}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-display text-2xl md:text-3xl uppercase tracking-wide text-ink mb-4">
                      {project.title}
                    </h3>
                    <p className="text-stone font-light leading-relaxed text-lg">
                      {project.description}
                    </p>
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-spruce">
        <SectionReveal>
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-display text-4xl md:text-5xl uppercase tracking-wide text-bone leading-[0.9] mb-6">
              Interested in
              <br />
              Working Together?
            </h2>
            <p className="text-bone/60 font-light leading-relaxed mb-10">
              Every engagement starts with a conversation.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 bg-bone text-ink text-[11px] uppercase tracking-[0.2em] px-10 py-4 hover:bg-rust hover:text-bone transition-colors duration-300"
            >
              Get in Touch <ArrowRight size={14} />
            </Link>
          </div>
        </SectionReveal>
      </section>
    </>
  );
}
