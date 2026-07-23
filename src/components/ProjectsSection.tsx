import React from "react";

const projects = [
  {
    title: "MoodBloom",
    role: "Sole builder",
    category: "Applied NLP",
    date: "2024",
    summary:
      "Emotion-aware journaling app that analyzes free-text entries and surfaces longitudinal mood patterns for personal wellness tracking.",
    impact: [
      "Built NLP pipeline for emotion classification from user journals",
      "Designed insight layer that turns raw labels into readable trends",
      "Shipped end-to-end flow: capture → model → feedback UI",
    ],
    stack: ["Python", "NLP", "Emotion AI", "Product UX"],
  },
  {
    title: "HomeCalc",
    role: "Sole builder",
    category: "Predictive modeling",
    date: "2024",
    summary:
      "Household expense forecasting system that estimates upcoming budgets from historical spend and highlights categories driving variance.",
    impact: [
      "Feature engineering on messy multi-month spend data",
      "Trained regression models for next-period budget prediction",
      "Presented forecasts in a format non-technical users can act on",
    ],
    stack: ["Python", "Scikit-learn", "Pandas", "Forecasting"],
  },
  {
    title: "Data Science Internship",
    role: "Intern",
    category: "Industry analytics",
    date: "2025",
    summary:
      "End-to-end analytics engagement: exploratory analysis, predictive modeling, and stakeholder-ready visualization for business questions.",
    impact: [
      "Ran structured EDA to isolate drivers behind target metrics",
      "Built and validated predictive models for decision support",
      "Delivered charts and narratives usable by non-technical teams",
    ],
    stack: ["Python", "Pandas", "Matplotlib", "Seaborn", "SQL"],
  },
  {
    title: "Deep Learning Lab",
    role: "Research practice",
    category: "Neural networks",
    date: "2025",
    summary:
      "Series of controlled deep learning experiments across vision, recommendation, and language — focused on architecture choices and evaluation, not demos.",
    impact: [
      "Implemented CNNs for image classification baselines",
      "Explored sequence models and modern transformer patterns",
      "Documented training setups, metrics, and failure modes",
    ],
    stack: ["PyTorch", "TensorFlow", "CNN", "RNN", "Transformers"],
  },
  {
    title: "Taqdeer-e-Naw Platform",
    role: "Full-stack + analytics",
    category: "Web product",
    date: "2025",
    summary:
      "NGO website with an analytics dashboard for community impact measurement and clearer donor communication.",
    impact: [
      "Shipped responsive public site for program visibility",
      "Built dashboard views for engagement and impact metrics",
      "Connected storytelling content to measurable outcomes",
    ],
    stack: ["React", "Data visualization", "Analytics", "UI"],
  },
  {
    title: "TagPlugin",
    role: "Sole builder",
    category: "Intelligent systems",
    date: "2024",
    summary:
      "Java plugin architecture for Minecraft with rule- and model-assisted tagging to automate gameplay systems and reduce manual configuration.",
    impact: [
      "Designed modular plugin structure against the game API",
      "Applied ML-inspired heuristics for smarter tag behavior",
      "Automated workflows that previously required hand tuning",
    ],
    stack: ["Java", "Plugin API", "Systems design", "Automation"],
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
            <p className="section-index mb-3">02 — Selected work</p>
            <h2 className="section-title">
              Projects with{" "}
              <span className="italic text-terra">clear outcomes</span>
            </h2>
            <p className="mt-4 text-sm sm:text-base text-ink-mid leading-relaxed">
              Case-style writeups — problem, approach, and what shipped. Scroll to
              stack each card; earlier work stays as a visible page edge.
            </p>
          </div>
          <p className="text-[12px] font-medium tracking-[0.14em] uppercase text-ink-mid shrink-0">
            {n} featured builds
          </p>
        </div>
      </div>

      <div
        className="relative mx-auto max-w-2xl px-5 sm:px-6"
        style={{ paddingBottom: `calc(24vh + ${n * EDGE}px)` }}
      >
        {projects.map((p, i) => {
          const isLast = i === n - 1;
          return (
            <div
              key={p.title}
              className="sticky"
              style={{
                top: STICK_TOP + i * EDGE,
                zIndex: i + 1,
                marginBottom: isLast ? 0 : "52vh",
              }}
            >
              <article
                className="relative overflow-hidden rounded-2xl border border-ink/[0.1] bg-page shadow-[0_24px_60px_-28px_rgba(40,20,8,0.45)]"
                style={{
                  transform: `rotate(${i % 2 === 0 ? -0.25 : 0.3}deg)`,
                }}
              >
                {/* stack edge label */}
                <div
                  className="absolute inset-x-0 top-0 h-6 flex items-center justify-between px-5 bg-gradient-to-b from-paper/90 to-transparent pointer-events-none"
                  aria-hidden
                >
                  <span className="text-[10px] font-semibold tracking-[0.16em] uppercase text-terra/80 truncate">
                    {p.title}
                  </span>
                  <span className="text-[10px] tabular-nums text-ink-mid/70">
                    {String(i + 1).padStart(2, "0")} / {String(n).padStart(2, "0")}
                  </span>
                </div>

                {/* accent bar */}
                <div className="h-1 w-full bg-gradient-to-r from-terra via-terra/70 to-clay" />

                <div className="p-5 sm:p-7 pt-7">
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                    <div>
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <span className="rounded-full bg-terra/10 px-2.5 py-0.5 text-[11px] font-semibold text-terra">
                          {p.category}
                        </span>
                        <span className="text-[12px] text-ink-mid">{p.role}</span>
                      </div>
                      <h3 className="font-display text-[1.75rem] sm:text-[2rem] tracking-tight text-ink leading-tight">
                        {p.title}
                      </h3>
                    </div>
                    <span className="font-display text-sm text-ink-mid tabular-nums">
                      {p.date}
                    </span>
                  </div>

                  <p className="text-[14px] sm:text-[15px] leading-relaxed text-ink-mid">
                    {p.summary}
                  </p>

                  <div className="mt-5">
                    <p className="text-[10px] font-semibold tracking-[0.18em] uppercase text-ink-mid mb-2.5">
                      What I did
                    </p>
                    <ul className="space-y-2">
                      {p.impact.map((line) => (
                        <li
                          key={line}
                          className="flex gap-2.5 text-[13px] sm:text-[14px] text-ink leading-snug"
                        >
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-terra" />
                          {line}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-6 flex flex-wrap gap-1.5 pt-4 border-t border-ink/[0.07]">
                    {p.stack.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-ink/10 bg-paper/70 px-2.5 py-1 text-[11px] font-medium text-ink-mid"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ProjectsSection;
