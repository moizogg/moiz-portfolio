import React from "react";
import {
  ArrowDownRight,
  ArrowUpRight,
  MapPin,
  GraduationCap,
  Brain,
  LineChart,
  Code2,
  Activity,
} from "lucide-react";

const focusAreas = [
  "Machine Learning",
  "Deep Learning",
  "NLP",
  "Data Analysis",
  "Python",
  "React",
];

const highlightCases = [
  {
    title: "MoodBloom",
    domain: "NLP · Product",
    result: "Emotion signals → actionable wellness insights",
  },
  {
    title: "HomeCalc",
    domain: "Forecasting · ML",
    result: "Spend history → monthly budget predictions",
  },
  {
    title: "Impact dashboard",
    domain: "Web · Analytics",
    result: "NGO data → donor-ready metrics",
  },
];

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-[100svh] bg-paper pt-[4.25rem] overflow-hidden"
    >
      <div
        className="pointer-events-none absolute -right-24 top-20 h-80 w-80 rounded-full opacity-50"
        style={{
          background:
            "radial-gradient(circle, hsl(16 45% 50% / 0.16), transparent 68%)",
        }}
        aria-hidden
      />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8 lg:px-12 py-14 sm:py-16 lg:py-20">
        <div className="mb-10 sm:mb-12 flex flex-wrap items-center gap-x-4 gap-y-2">
          <span className="section-index">Portfolio · 2026</span>
          <span className="hidden sm:block h-px w-10 bg-ink/15" />
          <span className="inline-flex items-center gap-1.5 text-[13px] text-ink-mid">
            <MapPin size={13} className="text-terra" />
            Multan, Pakistan
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-terra/25 bg-terra/[0.08] px-3 py-1 text-[12px] font-semibold text-terra">
            <span className="h-1.5 w-1.5 rounded-full bg-terra" />
            Open to internships
          </span>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-12 items-start">
          {/* Left */}
          <div className="lg:col-span-6 xl:col-span-7">
            <p className="mb-4 text-[13px] font-medium tracking-[0.14em] uppercase text-ink-mid">
              Data science · AI · applied ML
            </p>

            <h1 className="font-display font-medium tracking-[-0.035em] leading-[0.96] text-ink">
              <span className="block text-[clamp(2.75rem,7.5vw,5.5rem)]">
                Moiz Amjad
              </span>
              <span className="mt-3 block max-w-xl text-[clamp(1.45rem,3.8vw,2.35rem)] font-normal text-ink-mid leading-[1.2]">
                Building systems that turn{" "}
                <em className="not-italic font-medium italic text-terra">
                  raw data
                </em>{" "}
                into decisions teams can trust.
              </span>
            </h1>

            <p className="mt-7 max-w-lg text-[15px] sm:text-base leading-relaxed text-ink-mid">
              Student developer focused on machine learning, analytics, and
              shipping clean interfaces around the models. Strong on Python
              tooling, careful evaluation, and products that stay usable outside
              a notebook.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#work" className="btn-terra">
                View selected work
                <ArrowDownRight size={16} strokeWidth={2.25} />
              </a>
              <a href="#contact" className="btn-ghost">
                Get in touch
              </a>
              <a
                href="https://github.com/Moiz7865"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sm font-medium text-ink-mid hover:text-ink transition-colors px-2"
              >
                GitHub
                <ArrowUpRight size={14} />
              </a>
            </div>

            <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-xl">
              {[
                { v: "6+", l: "Shipped projects", icon: Code2 },
                { v: "2+", l: "Years building", icon: Activity },
                { v: "ML + Web", l: "End-to-end stack", icon: Brain },
                { v: "Beaconhouse", l: "Multan", icon: GraduationCap },
              ].map((s) => (
                <div
                  key={s.l}
                  className="rounded-2xl border border-ink/[0.08] bg-page/90 p-3.5 shadow-[0_8px_24px_-18px_rgba(40,20,8,0.35)]"
                >
                  <s.icon size={15} className="text-terra mb-2.5" />
                  <p className="font-display text-xl sm:text-2xl text-ink tracking-tight leading-none">
                    {s.v}
                  </p>
                  <p className="mt-1.5 text-[11px] leading-snug text-ink-mid">
                    {s.l}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <p className="text-[10px] font-semibold tracking-[0.2em] uppercase text-ink-mid mb-3">
                Core focus
              </p>
              <div className="flex flex-wrap gap-2">
                {focusAreas.map((f) => (
                  <span
                    key={f}
                    className="rounded-full border border-ink/10 bg-page px-3 py-1.5 text-[12px] font-medium text-ink shadow-sm"
                  >
                    {f}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right — elevated cards */}
          <div className="lg:col-span-6 xl:col-span-5">
            <div className="space-y-3.5">
              {/* Status card */}
              <div className="rounded-2xl border border-ink/[0.08] bg-page p-5 sm:p-6 shadow-[0_20px_50px_-28px_rgba(40,20,8,0.4)]">
                <div className="flex items-center justify-between gap-3 mb-4">
                  <div className="flex items-center gap-2">
                    <span className="grid h-8 w-8 place-items-center rounded-xl bg-terra/10 text-terra">
                      <LineChart size={16} />
                    </span>
                    <div>
                      <p className="text-[11px] font-semibold tracking-[0.16em] uppercase text-terra">
                        Currently
                      </p>
                      <p className="text-sm font-medium text-ink">
                        Building applied ML skills
                      </p>
                    </div>
                  </div>
                  <span className="rounded-full bg-emerald-500/10 px-2.5 py-1 text-[11px] font-semibold text-emerald-700">
                    Active
                  </span>
                </div>
                <p className="text-sm leading-relaxed text-ink-mid">
                  Deepening model evaluation, feature work, and full-stack
                  delivery — looking for internships where data science meets
                  product impact.
                </p>
                <div className="mt-4 grid grid-cols-3 gap-2">
                  {[
                    ["Python", "Primary"],
                    ["ML stack", "Scikit / TF"],
                    ["Product", "React + APIs"],
                  ].map(([k, v]) => (
                    <div
                      key={k}
                      className="rounded-xl bg-paper/80 border border-ink/[0.06] px-2.5 py-2"
                    >
                      <p className="text-[10px] uppercase tracking-wider text-ink-mid">
                        {k}
                      </p>
                      <p className="mt-0.5 text-[12px] font-semibold text-ink">
                        {v}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Featured case cards */}
              <div className="rounded-2xl border border-ink/[0.08] bg-page overflow-hidden shadow-[0_16px_40px_-24px_rgba(40,20,8,0.35)]">
                <div className="flex items-center justify-between px-5 py-3.5 border-b border-ink/[0.06] bg-paper/50">
                  <p className="text-[11px] font-semibold tracking-[0.16em] uppercase text-ink-mid">
                    Selected highlights
                  </p>
                  <a
                    href="#work"
                    className="text-[12px] font-medium text-terra hover:underline"
                  >
                    All work →
                  </a>
                </div>
                <ul className="divide-y divide-ink/[0.06]">
                  {highlightCases.map((c, i) => (
                    <li
                      key={c.title}
                      className="flex gap-3 px-5 py-3.5 hover:bg-paper/40 transition-colors"
                    >
                      <span className="font-display text-sm text-terra/70 tabular-nums pt-0.5">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <div className="min-w-0 flex-1">
                        <div className="flex flex-wrap items-baseline justify-between gap-x-2 gap-y-0.5">
                          <p className="font-semibold text-ink text-[15px]">
                            {c.title}
                          </p>
                          <p className="text-[11px] text-ink-mid">{c.domain}</p>
                        </div>
                        <p className="mt-0.5 text-[13px] text-ink-mid leading-snug">
                          {c.result}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Profile strip */}
              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-2xl border border-ink/[0.08] bg-page p-4 shadow-sm">
                  <GraduationCap size={16} className="text-terra mb-2" />
                  <p className="text-[10px] uppercase tracking-[0.16em] text-ink-mid">
                    Education
                  </p>
                  <p className="mt-1 font-display text-lg text-ink leading-snug">
                    Beaconhouse School
                  </p>
                  <p className="text-[12px] text-ink-mid mt-0.5">Multan · Student</p>
                </div>
                <div className="rounded-2xl border border-ink/[0.08] bg-ink text-paper p-4 shadow-sm">
                  <Brain size={16} className="text-clay mb-2" />
                  <p className="text-[10px] uppercase tracking-[0.16em] text-paper/55">
                    Seeking
                  </p>
                  <p className="mt-1 font-display text-lg leading-snug">
                    DS / ML internship
                  </p>
                  <p className="text-[12px] text-paper/60 mt-0.5">
                    Remote or on-site
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
