import React from "react";

const AboutSection = () => {
  return (
    <section id="about" className="section-shell border-t border-ink/[0.08] bg-paper-2/40">
      <div className="section-inner">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-4">
            <p className="section-index mb-3">03 — About</p>
            <h2 className="section-title">
              Student builder.
              <br />
              <span className="italic text-terra">Serious about craft.</span>
            </h2>
          </div>

          <div className="lg:col-span-7 lg:col-start-6 space-y-5 text-[15px] sm:text-lg leading-relaxed text-ink-mid">
            <p>
              I&apos;m <strong className="text-ink font-semibold">Moiz Amjad</strong>, a
              student at Beaconhouse School in Multan. I care about applied data science —
              the full path from messy tables to a model or interface someone can actually
              use.
            </p>
            <p>
              Over the last two years I&apos;ve shipped six projects spanning NLP, forecasting,
              deep learning experiments, and product-facing web work. I default to Python for
              analysis and modeling, and React when the result needs a clear front door.
            </p>
            <p>
              I&apos;m looking for internships where I can contribute carefully, learn from
              stronger engineers, and leave code and analyses that hold up under review.
            </p>

            <dl className="mt-10 grid grid-cols-2 gap-5 pt-8 border-t border-ink/[0.1]">
              {[
                ["Education", "Beaconhouse School, Multan"],
                ["Based in", "Multan, Pakistan"],
                ["Primary stack", "Python · ML · React"],
                ["Open to", "DS / ML internships"],
              ].map(([dt, dd]) => (
                <div key={dt}>
                  <dt className="text-[10px] font-semibold tracking-[0.18em] uppercase text-ink-mid mb-1">
                    {dt}
                  </dt>
                  <dd className="font-display text-lg text-ink leading-snug">{dd}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
