import React from "react";

const Footer = () => (
  <footer className="border-t border-ink/[0.08] bg-paper">
    <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-12 py-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
      <p className="font-display text-lg text-ink">Moiz Amjad</p>
      <p className="text-[12px] text-ink-mid tracking-wide">
        © {new Date().getFullYear()} · Field notes from Multan
      </p>
    </div>
  </footer>
);

export default Footer;
