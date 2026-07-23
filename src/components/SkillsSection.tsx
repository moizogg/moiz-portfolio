import React from "react";

const skills = [
  {
    n: "01",
    title: "Machine Learning",
    body: "Predictive models, classification, pipelines that stay honest.",
    tools: "Scikit-learn · TensorFlow · PyTorch",
  },
  {
    n: "02",
    title: "Programming",
    body: "Enough languages to move from notebook to product.",
    tools: "Python · Java · JavaScript · R",
  },
  {
    n: "03",
    title: "Visualization",
    body: "Charts that explain without shouting.",
    tools: "Matplotlib · Seaborn · Plotly",
  },
  {
    n: "04",
    title: "Data Analysis",
    body: "EDA, stats, SQL — find the story, then prove it.",
    tools: "Pandas · NumPy · SQL",
  },
  {
    n: "05",
    title: "Deep Learning",
    body: "Vision, language, and architectures worth the compute.",
    tools: "CNN · RNN · Transformers",
  },
  {
    n: "06",
    title: "Statistics",
    body: "Probability first. Models second.",
    tools: "Inference · A/B · Uncertainty",
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="section-shell border-t border-ink/[0.08]">
      <div className="section-inner">
        <div className="mb-12 sm:mb-16 max-w-lg">
          <p className="section-index mb-3">04 — Skills</p>
          <h2 className="section-title">
            Tools I reach for
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-ink/[0.08] border border-ink/[0.08]">
          {skills.map((s) => (
            <div
              key={s.n}
              className="bg-page/80 p-6 sm:p-8 flex flex-col min-h-[200px] hover:bg-page transition-colors duration-200"
            >
              <span className="font-display text-sm text-terra mb-6">{s.n}</span>
              <h3 className="font-display text-2xl text-ink mb-2">{s.title}</h3>
              <p className="text-sm text-ink-mid leading-relaxed flex-1">{s.body}</p>
              <p className="mt-6 text-[11px] font-medium tracking-wide text-ink-mid/80 uppercase">
                {s.tools}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
