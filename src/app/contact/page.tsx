import SectionReveal from "@/components/SectionReveal";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Start a conversation about creative direction, signal architecture, or collaboration.",
};

export default function ContactPage() {
  return (
    <>
      <section className="pt-40 pb-20 px-6 bg-paper">
        <div className="max-w-[800px] mx-auto">
          <span className="text-spruce text-[11px] uppercase tracking-[0.3em] font-bold block mb-6 animate-fade-in">
            Get in Touch
          </span>
          <h1 className="font-display text-6xl md:text-8xl uppercase tracking-wide text-ink leading-[0.9] animate-slide-up">
            Contact
          </h1>
        </div>
      </section>

      <div className="w-full h-px bg-ink/10 max-w-[800px] mx-auto" />

      <section className="py-20 md:py-32 px-6 bg-paper">
        <div className="max-w-[800px] mx-auto grid md:grid-cols-[1fr_250px] gap-16 md:gap-24">
          <SectionReveal>
            <form className="space-y-10">
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-[0.2em] text-stone/60 font-bold block">
                  Name
                </label>
                <input
                  type="text"
                  required
                  className="w-full bg-transparent border-b border-ink/20 py-3 text-ink focus:outline-none focus:border-rust transition-colors font-sans text-lg font-light"
                  placeholder="Your name"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-[0.2em] text-stone/60 font-bold block">
                  Email
                </label>
                <input
                  type="email"
                  required
                  className="w-full bg-transparent border-b border-ink/20 py-3 text-ink focus:outline-none focus:border-rust transition-colors font-sans text-lg font-light"
                  placeholder="your@email.com"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-[0.2em] text-stone/60 font-bold block">
                  Interest
                </label>
                <select className="w-full bg-transparent border-b border-ink/20 py-3 text-ink focus:outline-none focus:border-rust transition-colors font-sans text-lg font-light appearance-none">
                  <option>Creative Direction</option>
                  <option>Visual Identity</option>
                  <option>Music Production</option>
                  <option>AI Film</option>
                  <option>Signal Architecture</option>
                  <option>General Inquiry</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-[0.2em] text-stone/60 font-bold block">
                  Message
                </label>
                <textarea
                  rows={5}
                  required
                  className="w-full bg-transparent border-b border-ink/20 py-3 text-ink focus:outline-none focus:border-rust transition-colors font-sans text-lg font-light resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>
              <button
                type="submit"
                className="bg-charcoal text-bone text-[11px] uppercase tracking-[0.2em] px-10 py-4 hover:bg-rust transition-colors duration-300"
              >
                Send Message
              </button>
            </form>
          </SectionReveal>

          <SectionReveal delay={200}>
            <div className="space-y-10 md:pt-2">
              <div>
                <h4 className="text-[10px] uppercase tracking-[0.3em] text-stone/40 font-bold mb-4">
                  Email
                </h4>
                <a
                  href="mailto:hello@drewbordeaux.com"
                  className="text-ink hover:text-rust transition-colors text-sm"
                >
                  hello@drewbordeaux.com
                </a>
              </div>
              <div>
                <h4 className="text-[10px] uppercase tracking-[0.3em] text-stone/40 font-bold mb-4">
                  Based In
                </h4>
                <p className="text-stone text-sm">New York</p>
              </div>
              <div>
                <h4 className="text-[10px] uppercase tracking-[0.3em] text-stone/40 font-bold mb-4">
                  Social
                </h4>
                <ul className="space-y-2 text-sm">
                  <li>
                    <a
                      href="https://instagram.com/drewsounds"
                      className="text-stone hover:text-rust transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Instagram
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://open.spotify.com/artist/3FoGO6FW2T3cffSg7SSjaW"
                      className="text-stone hover:text-rust transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Spotify
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>
    </>
  );
}
