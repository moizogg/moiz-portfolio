import React, { useState } from "react";
import { Github, Linkedin, Mail } from "lucide-react";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Hello from ${form.name}`);
    const body = encodeURIComponent(
      `${form.message}\n\n— ${form.name}\n${form.email}`
    );
    window.location.href = `mailto:moizog7865@gmail.com?subject=${subject}&body=${body}`;
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="border-t border-ink/[0.08]">
      <div className="grid lg:grid-cols-12 min-h-[70vh]">
        {/* Left panel */}
        <div className="lg:col-span-5 bg-ink text-paper px-5 sm:px-8 lg:px-12 py-16 sm:py-20 flex flex-col justify-between">
          <div>
            <p className="text-[11px] font-medium tracking-[0.28em] uppercase text-paper/50 mb-6">
              05 — Contact
            </p>
            <h2 className="font-display text-4xl sm:text-5xl font-medium leading-[1.1] tracking-tight">
              Let&apos;s talk about
              <br />
              the next{" "}
              <span className="italic text-clay">internship.</span>
            </h2>
            <p className="mt-6 text-paper/65 max-w-sm leading-relaxed text-sm sm:text-base">
              Open to software, data, and product internships — Python, Java,
              React, and applied ML. Multan · remote OK.
            </p>
          </div>

          <div className="mt-12 flex flex-col gap-3">
            {[
              { icon: Mail, label: "moizog7865@gmail.com", href: "mailto:moizog7865@gmail.com" },
              { icon: Github, label: "github.com/Moiz7865", href: "https://github.com/Moiz7865" },
              { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com" },
            ].map((l) => (
              <a
                key={l.label}
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 text-sm text-paper/80 hover:text-paper transition-colors"
              >
                <l.icon size={16} className="text-clay" />
                {l.label}
              </a>
            ))}
          </div>
        </div>

        {/* Form */}
        <div className="lg:col-span-7 bg-paper px-5 sm:px-8 lg:px-12 py-16 sm:py-20 flex items-center">
          <form onSubmit={onSubmit} className="w-full max-w-lg space-y-5">
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="mb-2 block text-[10px] font-medium tracking-[0.18em] uppercase text-ink-mid">
                  Name
                </label>
                <input
                  name="name"
                  required
                  value={form.name}
                  onChange={onChange}
                  className="input-field"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="mb-2 block text-[10px] font-medium tracking-[0.18em] uppercase text-ink-mid">
                  Email
                </label>
                <input
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={onChange}
                  className="input-field"
                  placeholder="you@email.com"
                />
              </div>
            </div>
            <div>
              <label className="mb-2 block text-[10px] font-medium tracking-[0.18em] uppercase text-ink-mid">
                Message
              </label>
              <textarea
                name="message"
                required
                rows={6}
                value={form.message}
                onChange={onChange}
                className="input-field resize-none"
                placeholder="Idea, role, or just hello…"
              />
            </div>
            <button type="submit" className="btn-terra">
              Send message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
