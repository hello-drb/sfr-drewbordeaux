import SectionReveal from "@/components/SectionReveal";
import { ArrowRight } from "lucide-react";
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
          <h1 className="font-display text-6xl md:text-8xl uppercase tracking-wide text-ink leading-[0.9] animate-slide-up mb-6">
            Let&rsquo;s Talk
          </h1>
          <p className="text-stone font-light text-lg leading-relaxed max-w-xl opacity-0 animate-slide-up-delay">
            Tell me what you&rsquo;re building. Every engagement starts with a
            real conversation &mdash; no pitch deck, no questionnaire, just a
            discussion about where you are and where you want to go.
          </p>
        </div>
      </section>

      <div className="w-full h-px bg-ink/10 max-w-[800px] mx-auto" />

      <section className="py-20 md:py-32 px-6 bg-paper">
        <div className="max-w-[800px] mx-auto grid md:grid-cols-[1fr_280px] gap-16 md:gap-24">
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
                  What Are You Looking For?
                </label>
                <select className="w-full bg-transparent border-b border-ink/20 py-3 text-ink focus:outline-none focus:border-rust transition-colors font-sans text-lg font-light appearance-none">
                  <option value="">Select one...</option>
                  <option>Creative Direction &mdash; full brand architecture</option>
                  <option>Visual Identity &mdash; photography, video, art direction</option>
                  <option>Content Strategy &mdash; editorial, voice, platform</option>
                  <option>AI Workflows &mdash; creative tools and systems</option>
                  <option>Signal Architecture Audit &mdash; where do I start?</option>
                  <option>Music Production &mdash; recording, mixing, direction</option>
                  <option>Collaboration &mdash; creative partnership</option>
                  <option>Something Else</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-[0.2em] text-stone/60 font-bold block">
                  Tell Me About Your Project
                </label>
                <textarea
                  rows={5}
                  required
                  className="w-full bg-transparent border-b border-ink/20 py-3 text-ink focus:outline-none focus:border-rust transition-colors font-sans text-lg font-light resize-none"
                  placeholder="What are you building? Where do you want to take it?"
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
                  Connect
                </h4>
                <ul className="space-y-2 text-sm">
                  <li>
                    <a
                      href="https://linkedin.com/in/drewbordeaux"
                      className="text-stone hover:text-rust transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      LinkedIn
                    </a>
                  </li>
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

              <div className="border-t border-ink/10 pt-10">
                <h4 className="text-[10px] uppercase tracking-[0.3em] text-stone/40 font-bold mb-4">
                  What Happens Next
                </h4>
                <div className="space-y-4 text-sm text-stone font-light leading-relaxed">
                  <p>
                    I&rsquo;ll read your message and respond within 24 hours.
                    If it&rsquo;s a good fit, we&rsquo;ll schedule a call to
                    talk through your project in detail.
                  </p>
                  <p>
                    No sales pitch. Just a real conversation about what
                    you&rsquo;re building and whether working together makes
                    sense.
                  </p>
                </div>
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>
    </>
  );
}
