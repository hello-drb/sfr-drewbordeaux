import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-charcoal text-bone py-20 relative z-10">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
          <div className="md:col-span-1">
            <span className="font-display text-xl uppercase tracking-wider text-bone/20">
              Drew Bordeaux
            </span>
            <p className="mt-4 text-stone text-sm font-light leading-relaxed max-w-xs">
              Creative direction across AI film, photography, music, and signal
              architecture.
            </p>
          </div>

          <div>
            <h4 className="text-[10px] uppercase tracking-[0.3em] text-bone/30 font-bold mb-6">
              Work
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/work/ai-film"
                  className="text-stone text-sm hover:text-rust transition-colors"
                >
                  AI Film
                </Link>
              </li>
              <li>
                <Link
                  href="/work/photography"
                  className="text-stone text-sm hover:text-rust transition-colors"
                >
                  Photography
                </Link>
              </li>
              <li>
                <Link
                  href="/work/creative-direction"
                  className="text-stone text-sm hover:text-rust transition-colors"
                >
                  Creative Direction
                </Link>
              </li>
              <li>
                <Link
                  href="/work/music"
                  className="text-stone text-sm hover:text-rust transition-colors"
                >
                  Music
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] uppercase tracking-[0.3em] text-bone/30 font-bold mb-6">
              Connect
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://instagram.com/drewsounds"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-stone text-sm hover:text-rust transition-colors"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://open.spotify.com/artist/3FoGO6FW2T3cffSg7SSjaW"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-stone text-sm hover:text-rust transition-colors"
                >
                  Spotify
                </a>
              </li>
              <li>
                <a
                  href="https://youtube.com/@drewbordeaux569"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-stone text-sm hover:text-rust transition-colors"
                >
                  YouTube
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] uppercase tracking-[0.3em] text-bone/30 font-bold mb-6">
              Site
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/about"
                  className="text-stone text-sm hover:text-rust transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-stone text-sm hover:text-rust transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/journal"
                  className="text-stone text-sm hover:text-rust transition-colors"
                >
                  Journal
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-stone text-sm hover:text-rust transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-bone/10 text-[10px] uppercase tracking-[0.3em] text-bone/20">
          <span>
            &copy; {new Date().getFullYear()} Drew Bordeaux. All rights
            reserved.
          </span>
          <span className="mt-4 md:mt-0">The 7th Vista</span>
        </div>
      </div>
    </footer>
  );
}
