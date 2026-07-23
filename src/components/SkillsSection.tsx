import React from "react";
import {
  Brain,
  Code2,
  BarChart3,
  Database,
  Cpu,
  Sigma,
  type LucideIcon,
} from "lucide-react";

type Skill = {
  n: string;
  title: string;
  body: string;
  tools: string[];
  icon: LucideIcon;
  level: string;
};

const skills: Skill[] = [
  {
    n: "01",
    title: "Machine Learning",
    body: "Supervised models, classification, and evaluation loops I can explain — not just fit.",
    tools: ["Scikit-learn", "Feature work", "Cross-val", "Metrics"],
    icon: Brain,
    level: "Core",
  },
  {
    n: "02",
    title: "Programming",
    body: "Readable code from notebooks to small services and interactive frontends.",
    tools: ["Python", "Java", "JavaScript", "TypeScript"],
    icon: Code2,
    level: "Core",
  },
  {
    n: "03",
    title: "Data Visualization",
    body: "Charts and dashboards aimed at clarity for stakeholders, not decoration.",
    tools: ["Matplotlib", "Seaborn", "Plotly", "Dashboard UI"],
    icon: BarChart3,
    level: "Strong",
  },
  {
    n: "04",
    title: "Data Analysis",
    body: "EDA, cleaning, and SQL-backed questions that lead to a defensible answer.",
    tools: ["Pandas", "NumPy", "SQL", "Excel"],
    icon: Database,
    level: "Core",
  },
  {
    n: "05",
    title: "Deep Learning",
    body: "Hands-on practice with vision and sequence models; careful with compute and metrics.",
    tools: ["PyTorch", "TensorFlow", "CNNs", "Transformers"],
    icon: Cpu,
    level: "Growing",
  },
  {
    n: "06",
    title: "Statistics",
    body: "Probability and uncertainty first — models second. Comfortable discussing limits.",
    tools: ["Inference", "Distributions", "A/B basics", "Error analysis"],
    icon: Sigma,
    level: "Strong",
  },
];

const levelStyle: Record<string, string> = {
  Core: "bg-terra/12 text-terra",
  Strong: "bg-ink/8 text-ink",
  Growing: "bg-amber-500/10 text-amber-800",
};

const SkillsSection = () => {
  return (
    <section id="skills" className="section-shell border-t border-ink/[0.08]">
      <div className="section-inner">
        <div className="mb-12 sm:mb-14 max-w-2xl">
          <p className="section-index mb-3">04 — Capabilities</p>
          <h2 className="section-title">
            Skills that show up{" "}
            <span className="italic text-terra">in the work</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-ink-mid leading-relaxed max-w-lg">
            Mapped to real project use — tools I reach for when shipping analysis,
            models, or product interfaces.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {skills.map((s) => (
            <article
              key={s.n}
              className="group relative flex flex-col rounded-2xl border border-ink/[0.08] bg-page p-6 shadow-[0_12px_36px_-24px_rgba(40,20,8,0.35)] transition-all duration-200 hover:-translate-y-0.5 hover:border-terra/25 hover:shadow-[0_20px_44px_-24px_rgba(40,20,8,0.4)]"
            >
              <div className="flex items-start justify-between gap-3 mb-5">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-terra/10 text-terra ring-1 ring-terra/15">
                  <s.icon size={20} strokeWidth={1.75} />
                </span>
                <div className="flex flex-col items-end gap-1.5">
                  <span className="font-display text-sm text-ink-mid/50 tabular-nums">
                    {s.n}
                  </span>
                  <span
                    className={`rounded-full px-2 py-0.5 text-[10px] font-semibold tracking-wide ${levelStyle[s.level]}`}
                  >
                    {s.level}
                  </span>
                </div>
              </div>

              <h3 className="font-display text-[1.35rem] sm:text-2xl text-ink tracking-tight leading-snug">
                {s.title}
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-ink-mid flex-1">
                {s.body}
              </p>

              <div className="mt-5 pt-4 border-t border-ink/[0.07]">
                <p className="text-[10px] font-semibold tracking-[0.16em] uppercase text-ink-mid mb-2.5">
                  Toolkit
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {s.tools.map((t) => (
                    <span
                      key={t}
                      className="rounded-md border border-ink/10 bg-paper/80 px-2 py-1 text-[11px] font-medium text-ink-mid group-hover:border-terra/20"
                    >
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
