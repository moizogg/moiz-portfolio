import React from "react";

const AboutSection = () => {
  return (
    <section id="about" className="section-shell border-t border-ink/[0.08] bg-paper-2/50">
      <div className="section-inner">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-4">
            <p className="section-index mb-3">03 — About</p>
            <h2 className="section-title">
              Curious by
              <br />
              <span className="italic text-terra">default.</span>
            </h2>
          </div>

          <div className="lg:col-span-7 lg:col-start-6 space-y-6 text-[16px] sm:text-lg leading-relaxed text-ink-mid">
            <p>
              I&apos;m <strong className="text-ink font-semibold">Moiz Amjad</strong>, a
              student at Beaconhouse School in Multan. I&apos;m drawn to the edge where
              messy data becomes something you can trust — models, dashboards, small
              intelligent tools.
            </p>
            <p>
              Two years into building, I bounce between Python notebooks, Java experiments,
              React interfaces, and whatever cloud glue the project needs. Six projects in,
              still treating every dataset like a puzzle worth solving carefully.
            </p>
            <p>
              When I&apos;m not training something, I&apos;m usually sketching the next
              question: what should this system notice that a human would miss?
            </p>

            <dl className="mt-10 grid grid-cols-2 gap-6 pt-8 border-t border-ink/[0.1]">
              {[
                ["School", "Beaconhouse, Multan"],
                ["Location", "Multan, Pakistan"],
                ["Stack", "Python · Java · React"],
                ["Status", "Open for internships"],
              ].map(([dt, dd]) => (
                <div key={dt}>
                  <dt className="text-[10px] font-medium tracking-[0.2em] uppercase text-ink-mid mb-1">
                    {dt}
                  </dt>
                  <dd className="font-display text-lg text-ink">{dd}</dd>
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
