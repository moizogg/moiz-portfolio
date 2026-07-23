import React from "react";

const projects = [
  {
    title: "TagPlugin",
    blurb:
      "AI-enhanced Minecraft systems — intelligent tags, automated play, a little chaos tamed by ML.",
    tags: ["Java", "AI/ML", "API"],
    category: "AI Development",
    date: "Mar ’24",
    note: "Lab · game systems",
  },
  {
    title: "MoodBloom",
    blurb:
      "Journaling that listens. NLP maps mood over time and returns quiet, useful insights.",
    tags: ["Python", "NLP"],
    category: "AI Application",
    date: "Jun ’24",
    note: "Wellness · language",
  },
  {
    title: "HomeCalc",
    blurb:
      "Predict next month’s household spend before the surprise. Patterns over panic.",
    tags: ["Python", "Sklearn"],
    category: "Predictive",
    date: "Sep ’24",
    note: "Budget · forecast",
  },
  {
    title: "DS Internship",
    blurb:
      "EDA, models, and charts that had to be clear enough for non-technical stakeholders.",
    tags: ["Pandas", "Viz"],
    category: "Data Science",
    date: "Jan ’25",
    note: "Industry · delivery",
  },
  {
    title: "Deep Learning",
    blurb:
      "Notebooks on vision, recsys, and language — experiments with receipts, not vibes.",
    tags: ["PyTorch", "TF"],
    category: "Research",
    date: "Apr ’25",
    note: "Models · experiments",
  },
  {
    title: "Taqdeer-e-Naw",
    blurb:
      "NGO site and impact dashboard — stories for donors, numbers for the team.",
    tags: ["React", "Analytics"],
    category: "Web + Data",
    date: "Jul ’25",
    note: "Community · product",
  },
];

/** How many px of each older page stay visible at the top of the pile */
const EDGE = 22;
/** Where the first page sticks */
const STICK_TOP = 88;

/**
 * True diary pile:
 * - All pages share ONE parent (so sticky never “releases” early)
 * - Each page sticks a bit lower → only a thin strip of older pages shows
 * - Older pages do NOT scroll away or fade out while the stack is in view
 */
const ProjectsSection = () => {
  const n = projects.length;

  return (
    <section id="work" className="border-t border-ink/[0.08] bg-paper">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-12 pt-20 md:pt-28 pb-6">
        <p className="section-index mb-3">02 — Work</p>
        <h2 className="section-title max-w-lg">
          Pages from the{" "}
          <span className="italic text-terra">project diary</span>
        </h2>
        <p className="mt-4 max-w-md text-sm sm:text-base text-ink-mid leading-relaxed">
          Scroll down — each page lands on the pile. Older entries stay, with just
          their edge showing under the new one.
        </p>
      </div>

      {/*
        Shared parent for every sticky page.
        margin-bottom on each page = scroll room before the next one covers it.
        top: STICK_TOP + i * EDGE  →  stacked edges like a real notebook.
      */}
      <div
        className="relative mx-auto max-w-[34rem] px-5 sm:px-6"
        style={{
          // Extra bottom space so the full pile can sit before section ends
          paddingBottom: `calc(28vh + ${n * EDGE}px)`,
        }}
      >
        {/* faint notebook binding behind the pile */}
        <div
          className="pointer-events-none absolute left-[1.35rem] top-0 bottom-24 w-px bg-terra/20 sm:left-[1.6rem]"
          aria-hidden
        />

        {projects.map((p, i) => {
          const isLast = i === n - 1;
          // Space to scroll while this page is on top before next covers it
          const scrollRun = isLast ? 0 : "55vh";

          return (
            <div
              key={p.title}
              className="sticky"
              style={{
                top: STICK_TOP + i * EDGE,
                zIndex: i + 1,
                marginBottom: scrollRun,
              }}
            >
              <article
                className="diary-page"
                style={{
                  // Tiny permanent tilt so the pile feels physical (not animated away)
                  transform: `rotate(${(i % 2 === 0 ? -0.35 : 0.4)}deg)`,
                }}
              >
                {/* punch holes */}
                <div
                  className="absolute left-[0.85rem] top-12 bottom-12 z-10 flex flex-col justify-between py-1"
                  aria-hidden
                >
                  {[0, 1, 2, 3, 4].map((h) => (
                    <span
                      key={h}
                      className="block h-2.5 w-2.5 rounded-full bg-paper shadow-[inset_0_1px_2px_rgba(0,0,0,0.15)] ring-1 ring-ink/10"
                    />
                  ))}
                </div>

                {/* edge tab — the strip you still see when buried under later pages */}
                <div
                  className="absolute inset-x-0 top-0 h-[22px] flex items-center justify-between px-12 sm:px-14 pointer-events-none"
                  aria-hidden
                >
                  <span className="text-[10px] font-semibold tracking-[0.18em] uppercase text-terra/80 truncate">
                    {p.title}
                  </span>
                  <span className="font-display text-[11px] text-ink-mid/70 tabular-nums">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>

                <div className="relative pl-12 pr-6 sm:pr-8 pt-9 pb-7 sm:pl-14">
                  <div className="mb-4 flex items-start justify-between gap-3 border-b border-terra/20 pb-3">
                    <div>
                      <p className="text-[10px] font-semibold tracking-[0.22em] uppercase text-terra">
                        {p.category}
                      </p>
                      <p className="mt-1 text-[11px] text-ink-mid italic font-display">
                        {p.note}
                      </p>
                    </div>
                    <div className="text-right shrink-0">
                      <p className="font-display text-sm text-ink-mid">{p.date}</p>
                      <p className="text-[10px] tracking-wider text-ink-mid/70 mt-0.5">
                        ENTRY {String(i + 1).padStart(2, "0")}
                      </p>
                    </div>
                  </div>

                  <h3 className="font-display text-[1.85rem] sm:text-[2.15rem] leading-[1.15] tracking-tight text-ink pr-2">
                    {p.title}
                  </h3>

                  <p className="mt-3 text-[14px] sm:text-[15px] leading-[1.75] text-ink-mid">
                    {p.blurb}
                  </p>

                  <div className="mt-6 flex flex-wrap items-end justify-between gap-3">
                    <div className="flex flex-wrap gap-1.5">
                      {p.tags.map((t) => (
                        <span
                          key={t}
                          className="border border-dashed border-ink/15 bg-paper/40 px-2 py-0.5 text-[11px] font-medium text-ink-mid"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                    <span className="font-display italic text-sm text-terra/80">
                      — M.A.
                    </span>
                  </div>
                </div>

                {/* paper thickness under page */}
                <div
                  className="pointer-events-none absolute -bottom-[3px] left-3 right-4 h-[3px] rounded-b-sm bg-ink/[0.05]"
                  aria-hidden
                />
                <div
                  className="pointer-events-none absolute -bottom-[6px] left-5 right-6 h-[3px] rounded-b-sm bg-ink/[0.035]"
                  aria-hidden
                />
              </article>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ProjectsSection;
