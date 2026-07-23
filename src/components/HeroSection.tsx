import React from "react";
import { ArrowDownRight, ArrowUpRight, MapPin } from "lucide-react";

const stack = [
  { name: "Python", note: "Data · ML · scripts" },
  { name: "Java", note: "Systems · plugins" },
  { name: "React", note: "Interfaces · product" },
];

const slips = [
  {
    title: "MoodBloom",
    line: "Python + NLP journal insights",
    mark: "01",
  },
  {
    title: "Taqdeer-e-Naw",
    line: "React site + impact analytics",
    mark: "02",
  },
  {
    title: "TagPlugin",
    line: "Java systems on the game API",
    mark: "03",
  },
];

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-[100svh] bg-paper pt-[4.25rem] overflow-hidden"
    >
      <div className="relative mx-auto max-w-6xl px-5 sm:px-8 lg:px-12 py-14 sm:py-16 lg:py-20">
        <div className="mb-10 sm:mb-12 flex flex-wrap items-center gap-x-4 gap-y-2">
          <span className="section-index">Portfolio · 2026</span>
          <span className="hidden sm:block h-px w-10 bg-ink/15" />
          <span className="inline-flex items-center gap-1.5 text-[13px] text-ink-mid">
            <MapPin size={13} className="text-terra" />
            Multan, Pakistan
          </span>
          <span className="inline-flex items-center gap-1.5 border border-terra/30 bg-page px-3 py-1 text-[12px] font-semibold text-terra">
            <span className="h-1.5 w-1.5 bg-terra" />
            Open to internships
          </span>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-10 items-start">
          {/* ── Flowery hero type ── */}
          <div className="lg:col-span-7">
            <p className="mb-5 text-[12px] font-medium tracking-[0.2em] uppercase text-ink-mid">
              Python · Java · React · data
            </p>

            <h1 className="font-display tracking-[-0.03em] text-ink">
              <span className="block text-[clamp(3rem,9vw,5.75rem)] font-medium leading-[0.92]">
                Moiz Amjad
              </span>

              {/* Flowery multi-line composition */}
              <span className="mt-5 sm:mt-6 block max-w-2xl">
                <span className="block font-display italic font-normal text-[clamp(2.1rem,6.5vw,3.75rem)] leading-[1.05] text-ink-mid">
                  crafts with{" "}
                  <span className="text-terra not-italic font-medium">
                    Python
                  </span>
                </span>
                <span className="mt-1 block font-display italic font-normal text-[clamp(2.1rem,6.5vw,3.75rem)] leading-[1.05] text-ink-mid">
                  ships in{" "}
                  <span className="relative inline-block text-ink not-italic font-medium">
                    Java
                    <span
                      className="absolute -bottom-1 left-0 right-0 h-2 bg-terra/25 -z-10"
                      aria-hidden
                    />
                  </span>
                  {" & "}
                  <span className="text-terra not-italic font-medium">
                    React
                  </span>
                </span>
                <span className="mt-3 block font-display italic text-[clamp(1.35rem,3.5vw,1.85rem)] text-ink-mid/90 leading-snug max-w-md">
                  — and learns the language of{" "}
                  <em className="text-ink not-italic font-medium">data</em>{" "}
                  along the way.
                </span>
              </span>
            </h1>

            <p className="mt-8 max-w-md text-[15px] sm:text-base leading-relaxed text-ink-mid">
              Student developer from Multan. I write clean Python for analysis
              and ML, Java for structured systems, and React when the work needs
              a real interface — not just a notebook export.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#work" className="btn-terra">
                See projects
                <ArrowDownRight size={16} strokeWidth={2.25} />
              </a>
              <a href="#contact" className="btn-ghost">
                Contact
              </a>
              <a
                href="https://github.com/Moiz7865"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sm font-medium text-ink-mid hover:text-ink px-1"
              >
                GitHub <ArrowUpRight size={14} />
              </a>
            </div>

            {/* Language pillars — floating square paper slips */}
            <div className="mt-12 grid grid-cols-3 gap-2.5 max-w-lg items-start">
              {stack.map((s, i) => (
                <div
                  key={s.name}
                  className="float-card paper-card p-3.5 sm:p-4 cursor-default"
                  style={
                    {
                      // slight rest offsets so the row feels like loose paper, not a rigid grid
                      marginTop: i === 1 ? "10px" : i === 2 ? "4px" : "0px",
                    } as React.CSSProperties
                  }
                >
                  <p className="font-display text-xl sm:text-2xl text-ink leading-none">
                    {s.name}
                  </p>
                  <p className="mt-2 text-[11px] text-ink-mid leading-snug">
                    {s.note}
                  </p>
                  <div
                    className="mt-3 h-px w-8 bg-terra/40"
                    aria-hidden
                  />
                </div>
              ))}
            </div>
          </div>

          {/* ── Paper slips cluster ── */}
          <div className="lg:col-span-5 space-y-3">
            <div className="paper-card p-5 sm:p-6">
              <div className="flex items-center justify-between border-b border-ink/10 pb-3 mb-4">
                <p className="text-[10px] font-semibold tracking-[0.2em] uppercase text-terra">
                  Now
                </p>
                <p className="text-[11px] text-ink-mid">Multan · student</p>
              </div>
              <p className="font-display italic text-xl sm:text-2xl text-ink leading-snug">
                Building across the stack — models in Python, systems in Java,
                interfaces in React.
              </p>
              <p className="mt-3 text-sm text-ink-mid leading-relaxed">
                Open to internships where I can contribute code and analysis
                that holds up under review.
              </p>
            </div>

            {/* Stacked paper notes */}
            <div className="relative h-[210px] sm:h-[230px]">
              {slips.map((s, i) => (
                <div
                  key={s.title}
                  className="diary-page absolute left-0 w-[94%] p-4"
                  style={{
                    top: i * 36,
                    zIndex: 3 - i,
                    marginLeft: i * 8,
                    transform: `rotate(${(i - 1) * 1.6}deg)`,
                  }}
                >
                  <div className="pl-8 flex items-start justify-between gap-2">
                    <div>
                      <p className="text-[10px] font-semibold tracking-[0.16em] uppercase text-terra">
                        Note {s.mark}
                      </p>
                      <p className="font-display text-lg text-ink mt-0.5">
                        {s.title}
                      </p>
                      <p className="text-[12px] text-ink-mid mt-0.5">{s.line}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-2.5">
              <div className="paper-card p-4">
                <p className="text-[10px] uppercase tracking-[0.16em] text-ink-mid">
                  School
                </p>
                <p className="mt-1 font-display text-lg text-ink leading-snug">
                  Beaconhouse
                </p>
                <p className="text-[12px] text-ink-mid">Multan</p>
              </div>
              <div className="border border-ink bg-ink p-4 text-paper">
                <p className="text-[10px] uppercase tracking-[0.16em] text-paper/55">
                  Seeking
                </p>
                <p className="mt-1 font-display text-lg leading-snug text-paper">
                  Internship
                </p>
                <p className="text-[12px] text-paper/60">Dev · data · product</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
