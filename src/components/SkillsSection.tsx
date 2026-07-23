import React from "react";
import {
  Code2,
  Coffee,
  Atom,
  Brain,
  Database,
  BarChart3,
  type LucideIcon,
} from "lucide-react";

type Skill = {
  n: string;
  title: string;
  body: string;
  tools: string[];
  icon: LucideIcon;
  pillar: string;
};

const skills: Skill[] = [
  {
    n: "01",
    title: "Python",
    body: "My default for analysis, automation, and ML prototypes — clean scripts and notebooks that become real tools.",
    tools: ["Pandas", "NumPy", "Scikit-learn", "Fast scripts"],
    icon: Code2,
    pillar: "Primary",
  },
  {
    n: "02",
    title: "Java",
    body: "Structured systems and plugin architecture — type-safe, modular code when the problem needs discipline.",
    tools: ["OOP", "APIs", "Plugins", "Tooling"],
    icon: Coffee,
    pillar: "Systems",
  },
  {
    n: "03",
    title: "React",
    body: "Interfaces for data and product work — dashboards, marketing sites, and UI around models people can use.",
    tools: ["Components", "Hooks", "Vite", "Tailwind"],
    icon: Atom,
    pillar: "Product",
  },
  {
    n: "04",
    title: "Machine Learning",
    body: "Practical models with honest evaluation — classification, forecasting, and feature work in Python.",
    tools: ["Scikit-learn", "Metrics", "Pipelines", "Validation"],
    icon: Brain,
    pillar: "Applied",
  },
  {
    n: "05",
    title: "Data Analysis",
    body: "EDA, cleaning, and SQL-backed questions — find the story, then prove it with evidence.",
    tools: ["Pandas", "SQL", "Excel", "Reporting"],
    icon: Database,
    pillar: "Core",
  },
  {
    n: "06",
    title: "Visualization",
    body: "Charts and dashboards that explain results to non-technical readers without noise.",
    tools: ["Matplotlib", "Seaborn", "Plotly", "Dashboard UI"],
    icon: BarChart3,
    pillar: "Comms",
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="section-shell border-t border-ink/[0.08]">
      <div className="section-inner">
        <div className="mb-12 sm:mb-14 max-w-2xl">
          <p className="section-index mb-3">04 — Craft</p>
          <h2 className="section-title">
            <span className="italic text-terra">Python</span>,{" "}
            <span className="italic">Java</span>,{" "}
            <span className="italic text-terra">React</span>
            <span className="block mt-1 text-ink">— and the data around them</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-ink-mid leading-relaxed max-w-lg">
            Three languages I actually ship with, plus the analysis and ML skills that
            sit on top of them.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          {skills.map((s) => (
            <article key={s.n} className="paper-card flex flex-col p-5 sm:p-6">
              <div className="flex items-start justify-between gap-3 mb-5 border-b border-ink/10 pb-4">
                <span className="grid h-10 w-10 place-items-center border border-ink/12 bg-paper text-terra">
                  <s.icon size={18} strokeWidth={1.75} />
                </span>
                <div className="text-right">
                  <p className="font-display text-sm text-ink-mid/50 tabular-nums">
                    {s.n}
                  </p>
                  <p className="mt-1 text-[10px] font-semibold tracking-[0.14em] uppercase text-terra">
                    {s.pillar}
                  </p>
                </div>
              </div>

              <h3 className="font-display text-[1.45rem] sm:text-[1.65rem] text-ink tracking-tight leading-none">
                {s.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-mid flex-1">
                {s.body}
              </p>

              <div className="mt-5 pt-4 border-t border-dashed border-ink/15">
                <p className="text-[10px] font-semibold tracking-[0.16em] uppercase text-ink-mid mb-2.5">
                  In the kit
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {s.tools.map((t) => (
                    <span key={t} className="chip">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
