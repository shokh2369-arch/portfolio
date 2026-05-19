import { FadeUp } from "./FadeUp";
import { CONTACT_LINKS, LINKS } from "../data/content";

export default function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="section-container">
        <div className="grid gap-16 md:grid-cols-2 md:gap-20">
          <FadeUp>
            <h2
              className="mb-6 text-3xl leading-tight md:text-5xl"
              style={{ fontFamily: "var(--font-syne)", fontWeight: 800 }}
            >
              Let&apos;s build something{" "}
              <span style={{ color: "var(--accent)" }}>real.</span>
            </h2>
            <p
              className="mb-8 max-w-md text-base leading-relaxed md:text-lg"
              style={{ fontFamily: "var(--font-dm-sans)", fontWeight: 300, color: "var(--muted)" }}
            >
              Open to freelance, contract, and full-time opportunities. Reach out
              and let&apos;s talk about what you&apos;re building.
            </p>
            <a href={LINKS.email} className="btn-primary interactive inline-flex">
              Get in touch
            </a>
          </FadeUp>

          <FadeUp delay={0.15}>
            <ul className="flex flex-col gap-3">
              {CONTACT_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="contact-link interactive group relative flex items-center gap-4 overflow-hidden rounded border p-5 no-underline transition-all duration-300"
                    style={{ borderColor: "var(--border)" }}
                  >
                    <span
                      className="flex h-10 w-10 shrink-0 items-center justify-center rounded text-lg"
                      style={{
                        background: "var(--surface)",
                        color: "var(--accent)",
                      }}
                      aria-hidden
                    >
                      {link.icon}
                    </span>
                    <div className="min-w-0 flex-1">
                      <p
                        className="mb-0.5 text-xs tracking-[0.15em] uppercase"
                        style={{ fontFamily: "var(--font-dm-mono)", color: "var(--muted)" }}
                      >
                        {link.label}
                      </p>
                      <p
                        className="truncate text-sm md:text-base"
                        style={{ fontFamily: "var(--font-dm-sans)", color: "var(--text)" }}
                      >
                        {link.value}
                      </p>
                    </div>
                    <span
                      className="contact-arrow absolute right-4 bottom-4 text-lg opacity-0 transition-all duration-300 group-hover:opacity-100"
                      style={{ color: "var(--accent)" }}
                      aria-hidden
                    >
                      ↗
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
