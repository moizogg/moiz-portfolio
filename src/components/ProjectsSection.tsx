import React from "react";

const projects = [
  {
    title: "MoodBloom",
    role: "Python · product",
    category: "NLP application",
    date: "2024",
    summary:
      "Journaling product with a Python NLP layer that reads free-text entries and returns emotion trends people can actually follow.",
    impact: [
      "Emotion classification pipeline on journal text",
      "Insight layer from raw labels to readable trends",
      "End-to-end flow: capture → model → feedback UI",
    ],
    stack: ["Python", "NLP", "Product UX"],
  },
  {
    title: "HomeCalc",
    role: "Python · forecasting",
    category: "Predictive modeling",
    date: "2024",
    summary:
      "Household budget forecaster in Python — estimates next-period spend and surfaces the categories driving variance.",
    impact: [
      "Feature work on multi-month spend history",
      "Regression models for budget prediction",
      "Outputs designed for non-technical readers",
    ],
    stack: ["Python", "Scikit-learn", "Pandas"],
  },
  {
    title: "Taqdeer-e-Naw",
    role: "React · analytics",
    category: "Web product",
    date: "2025",
    summary:
      "NGO platform in React with an analytics dashboard so program impact is visible to teams and donors.",
    impact: [
      "Responsive public site for program visibility",
      "Dashboard views for engagement metrics",
      "Connected story content to measurable outcomes",
    ],
    stack: ["React", "Analytics", "UI"],
  },
  {
    title: "TagPlugin",
    role: "Java · systems",
    category: "Intelligent systems",
    date: "2024",
    summary:
      "Java plugin architecture for Minecraft — modular tagging and automation that cuts hand-tuned configuration.",
    impact: [
      "Plugin structure against the game API",
      "Rule- and heuristic-assisted tagging",
      "Automated workflows that used to be manual",
    ],
    stack: ["Java", "API design", "Automation"],
  },
  {
    title: "Data Science Internship",
    role: "Python · analytics",
    category: "Industry work",
    date: "2025",
    summary:
      "Internship focused on EDA, predictive modeling, and stakeholder-ready visualization for business questions.",
    impact: [
      "Structured EDA on real operational data",
      "Models for decision support with clear metrics",
      "Charts and narratives for non-technical teams",
    ],
    stack: ["Python", "Pandas", "SQL", "Viz"],
  },
  {
    title: "Deep Learning Lab",
    role: "Python · research practice",
    category: "Neural nets",
    date: "2025",
    summary:
      "Controlled DL experiments in Python — vision, recsys, and language — with notes on metrics and failure modes.",
    impact: [
      "CNN baselines for image classification",
      "Sequence and transformer-style experiments",
      "Documented training setups and evaluation",
    ],
    stack: ["Python", "PyTorch", "TensorFlow"],
  },
];

const EDGE = 24;
const STICK_TOP = 88;

const ProjectsSection = () => {
  const n = projects.length;

  return (
    <section id="work" className="border-t border-ink/[0.08] bg-paper">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-12 pt-20 md:pt-28 pb-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
          <div className="max-w-xl">
            <p className="section-index mb-3">02 — Work</p>
            <h2 className="section-title">
              Pages from the{" "}
              <span className="italic text-terra">project diary</span>
            </h2>
            <p className="mt-4 text-sm sm:text-base text-ink-mid leading-relaxed">
              Python analyses, Java systems, React products. Scroll — each page stacks;
              older work stays as a thin edge underneath.
            </p>
          </div>
          <p className="text-[12px] font-medium tracking-[0.14em] uppercase text-ink-mid">
            {n} entries
          </p>
        </div>
      </div>

      <div className="relative mx-auto max-w-2xl px-5 sm:px-6">
        {projects.map((p, i) => (
            <div
              key={p.title}
              className="sticky"
              style={{
                // Same stick math for every page (incl. last) so it rises into the pile
                top: STICK_TOP + i * EDGE,
                zIndex: i + 1,
                // Scroll runway for ALL cards — last one used to have 0 and never joined the motion
                marginBottom: "55vh",
              }}
            >
              <article
                className="diary-page"
                style={{
                  transform: `rotate(${i % 2 === 0 ? -0.3 : 0.35}deg)`,
                }}
              >
                <div
                  className="absolute inset-x-0 top-0 h-6 flex items-center justify-between pl-12 pr-4 pointer-events-none"
                  aria-hidden
                >
                  <span className="text-[10px] font-semibold tracking-[0.14em] uppercase text-terra/80 truncate">
                    {p.title}
                  </span>
                  <span className="text-[10px] tabular-nums text-ink-mid/70">
                    {String(i + 1).padStart(2, "0")}/{String(n).padStart(2, "0")}
                  </span>
                </div>

                <div className="relative pl-12 pr-5 sm:pr-7 pt-8 pb-6 sm:pl-14">
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-3 border-b border-terra/20 pb-3">
                    <div>
                      <p className="text-[10px] font-semibold tracking-[0.18em] uppercase text-terra">
                        {p.category}
                      </p>
                      <p className="mt-1 text-[12px] text-ink-mid">{p.role}</p>
                    </div>
                    <span className="font-display text-sm text-ink-mid">{p.date}</span>
                  </div>

                  <h3 className="font-display text-[1.7rem] sm:text-[1.95rem] tracking-tight text-ink leading-tight">
                    {p.title}
                  </h3>
                  <p className="mt-3 text-[14px] sm:text-[15px] leading-relaxed text-ink-mid">
                    {p.summary}
                  </p>

                  <ul className="mt-5 space-y-2">
                    {p.impact.map((line) => (
                      <li
                        key={line}
                        className="flex gap-2 text-[13px] sm:text-[14px] text-ink leading-snug"
                      >
                        <span className="mt-[0.45rem] h-1 w-1 shrink-0 bg-terra" />
                        {line}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-5 flex flex-wrap items-end justify-between gap-3 pt-3 border-t border-dashed border-ink/15">
                    <div className="flex flex-wrap gap-1.5">
                      {p.stack.map((t) => (
                        <span key={t} className="chip">
                          {t}
                        </span>
                      ))}
                    </div>
                    <span className="font-display italic text-sm text-terra/80">
                      — M.A.
                    </span>
                  </div>
                </div>
              </article>
            </div>
        ))}

        {/*
          Release lane: after the last page settles on the pile,
          this empty space lets the whole stack unstick and scroll up together.
        */}
        <div
          className="pointer-events-none w-full"
          style={{ height: `calc(45vh + ${n * EDGE}px)` }}
          aria-hidden
        />
      </div>
    </section>
  );
};

export default ProjectsSection;
