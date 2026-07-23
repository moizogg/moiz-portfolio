import React from "react";
import { ArrowDownRight, BookOpen, Sparkles, MapPin, GraduationCap } from "lucide-react";

const focusAreas = [
  "Machine Learning",
  "Deep Learning",
  "Data Viz",
  "NLP",
  "Python",
  "Statistics",
];

const recentPages = [
  { title: "MoodBloom", tag: "NLP", n: "02" },
  { title: "HomeCalc", tag: "ML", n: "03" },
  { title: "TagPlugin", tag: "AI", n: "01" },
];

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-[100svh] bg-paper pt-[4.25rem] overflow-hidden"
    >
      {/* soft ambient shapes — fills void without two-tone split */}
      <div
        className="pointer-events-none absolute -right-20 top-24 h-72 w-72 rounded-full opacity-40"
        style={{
          background:
            "radial-gradient(circle, hsl(16 45% 55% / 0.18), transparent 70%)",
        }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute left-[-10%] bottom-10 h-64 w-64 rounded-full opacity-30"
        style={{
          background:
            "radial-gradient(circle, hsl(28 40% 50% / 0.15), transparent 70%)",
        }}
        aria-hidden
      />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8 lg:px-12 py-14 sm:py-18 lg:py-20">
        {/* top meta */}
        <div className="mb-10 sm:mb-12 flex flex-wrap items-center gap-x-4 gap-y-2">
          <span className="section-index">Portfolio · 26</span>
          <span className="hidden sm:block h-px w-10 bg-ink/15" />
          <span className="inline-flex items-center gap-1.5 text-[13px] text-ink-mid">
            <MapPin size={13} className="text-terra" />
            Multan, Pakistan
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-ink/10 bg-page/90 px-3 py-1 text-[12px] font-medium text-ink-mid">
            <span className="h-1.5 w-1.5 rounded-full bg-terra animate-pulse" />
            Open for internships
          </span>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-10 items-start">
          {/* ── Left: voice ── */}
          <div className="lg:col-span-7">
            <h1 className="font-display font-medium tracking-[-0.035em] leading-[0.96] text-ink">
              <span className="block text-[clamp(2.75rem,8vw,5.75rem)]">
                Moiz Amjad
              </span>
              <span className="mt-2 sm:mt-3 block text-[clamp(1.85rem,5.5vw,3.5rem)] text-ink-mid font-normal">
                builds with{" "}
                <em className="not-italic font-medium italic text-terra">data</em>
                {" "}&amp;{" "}
                <em className="not-italic font-medium italic text-ink">AI</em>
              </span>
            </h1>

            <p className="mt-7 max-w-md text-base sm:text-lg leading-relaxed text-ink-mid">
              Aspiring data scientist. Models, notebooks, and products that turn
              messy signals into decisions you can trust.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#work" className="btn-terra">
                See projects
                <ArrowDownRight size={16} strokeWidth={2.25} />
              </a>
              <a href="#contact" className="btn-ghost">
                Contact
              </a>
            </div>

            {/* stats as filled tiles */}
            <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-xl">
              {[
                { v: "6+", l: "Projects" },
                { v: "2Y+", l: "Building" },
                { v: "17", l: "Years old" },
                { v: "BH", l: "Beaconhouse" },
              ].map((s) => (
                <div
                  key={s.l}
                  className="rounded-xl border border-ink/[0.08] bg-page/70 px-3 py-3.5"
                >
                  <p className="font-display text-2xl sm:text-3xl text-ink tracking-tight leading-none">
                    {s.v}
                  </p>
                  <p className="mt-1.5 text-[11px] text-ink-mid">{s.l}</p>
                </div>
              ))}
            </div>

            {/* focus tags */}
            <div className="mt-8">
              <p className="text-[10px] font-semibold tracking-[0.2em] uppercase text-ink-mid mb-3">
                Focus
              </p>
              <div className="flex flex-wrap gap-2">
                {focusAreas.map((f) => (
                  <span
                    key={f}
                    className="rounded-full border border-ink/10 bg-page/80 px-3 py-1.5 text-[12px] font-medium text-ink-mid"
                  >
                    {f}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* ── Right: populated cluster ── */}
          <div className="lg:col-span-5 relative">
            {/* large watermark number */}
            <span
              className="pointer-events-none absolute -right-2 -top-6 font-display text-[8rem] sm:text-[10rem] leading-none text-ink/[0.05] select-none"
              aria-hidden
            >
              06
            </span>

            <div className="relative space-y-4">
              {/* Now reading / building */}
              <div className="relative z-20 rounded-2xl border border-ink/[0.08] bg-page p-5 shadow-[0_16px_40px_-24px_rgba(60,30,10,0.35)]">
                <div className="flex items-center gap-2 text-terra mb-3">
                  <Sparkles size={15} />
                  <span className="text-[11px] font-semibold tracking-[0.16em] uppercase">
                    Right now
                  </span>
                </div>
                <p className="font-display text-xl text-ink leading-snug">
                  Deepening ML foundations &amp; shipping small intelligent tools.
                </p>
                <p className="mt-2 text-sm text-ink-mid leading-relaxed">
                  Looking for internships where data work meets real product.
                </p>
              </div>

              {/* Stacked mini diary previews — ties to work section */}
              <div className="relative z-10 h-[200px] sm:h-[220px]">
                {recentPages.map((page, i) => (
                  <div
                    key={page.title}
                    className="diary-page absolute left-0 right-4 sm:right-6 p-4"
                    style={{
                      top: i * 28,
                      zIndex: 3 - i,
                      transform: `rotate(${(i - 1) * 2.2}deg)`,
                      width: "92%",
                      marginLeft: i * 6,
                    }}
                  >
                    <div className="flex items-center justify-between mb-2 pl-6">
                      <span className="text-[10px] font-semibold tracking-wider uppercase text-terra">
                        {page.tag}
                      </span>
                      <span className="font-display text-xs text-ink-mid">
                        {page.n}
                      </span>
                    </div>
                    <p className="font-display text-lg text-ink pl-6 leading-tight">
                      {page.title}
                    </p>
                    {i === 0 && (
                      <p className="mt-1 pl-6 text-[12px] text-ink-mid">
                        Latest entry in the project diary →
                      </p>
                    )}
                  </div>
                ))}
              </div>

              {/* school + role chips row */}
              <div className="grid grid-cols-2 gap-3 relative z-20">
                <div className="rounded-xl border border-ink/[0.08] bg-page/90 p-4">
                  <GraduationCap size={16} className="text-terra mb-2" />
                  <p className="text-[11px] uppercase tracking-wider text-ink-mid">
                    School
                  </p>
                  <p className="mt-0.5 font-display text-base text-ink leading-snug">
                    Beaconhouse
                  </p>
                </div>
                <div className="rounded-xl border border-ink/[0.08] bg-page/90 p-4">
                  <BookOpen size={16} className="text-terra mb-2" />
                  <p className="text-[11px] uppercase tracking-wider text-ink-mid">
                    Path
                  </p>
                  <p className="mt-0.5 font-display text-base text-ink leading-snug">
                    Data · AI · ML
                  </p>
                </div>
              </div>

              {/* quote strip */}
              <blockquote className="rounded-xl border border-dashed border-terra/25 bg-terra/[0.06] px-4 py-3.5">
                <p className="font-display italic text-[15px] sm:text-base text-ink leading-snug">
                  “Find the pattern. Prove it. Ship something useful.”
                </p>
                <footer className="mt-2 text-[11px] tracking-wide text-ink-mid">
                  — working note
                </footer>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
