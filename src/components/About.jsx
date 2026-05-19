import { FadeUp } from "./FadeUp";
import { ABOUT_PARAGRAPHS, STACK_TAGS } from "../data/content";

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="section-container">
        <FadeUp className="mb-16">
          <p className="section-label mb-3">About</p>
          <h2
            className="text-3xl md:text-4xl"
            style={{ fontFamily: "var(--font-syne)", fontWeight: 800 }}
          >
            Who I am
          </h2>
        </FadeUp>

        <div className="grid gap-12 md:grid-cols-2 md:gap-16">
          <FadeUp delay={0.1} className="space-y-6">
            {ABOUT_PARAGRAPHS.map((para, i) => (
              <p
                key={i}
                className="text-base leading-relaxed md:text-lg"
                style={{
                  fontFamily: "var(--font-dm-sans)",
                  fontWeight: 300,
                  color: "var(--muted)",
                }}
              >
                {para.before}
                {para.highlight && (
                  <strong style={{ color: "var(--accent)", fontWeight: 500 }}>
                    {para.highlight}
                  </strong>
                )}
                {para.after}
              </p>
            ))}
          </FadeUp>

          <FadeUp delay={0.15}>
              <div
                className="relative overflow-hidden rounded-lg p-8"
                style={{ background: "var(--surface)" }}
              >
                <div
                  className="absolute top-0 right-0 left-0 h-px"
                  style={{
                    background:
                      "linear-gradient(90deg, transparent, var(--accent), transparent)",
                  }}
                />
                <p
                  className="mb-6 text-xs tracking-[0.2em] uppercase"
                  style={{ fontFamily: "var(--font-dm-mono)", color: "var(--muted)" }}
                >
                  Core Stack
                </p>
                <div className="flex flex-wrap gap-3">
                  {STACK_TAGS.map((tag) => (
                    <span
                      key={tag}
                      className="stack-tag rounded border px-3 py-1.5 text-xs transition-colors duration-300"
                      style={{
                        fontFamily: "var(--font-dm-mono)",
                        borderColor: "var(--border-bright)",
                        color: "var(--accent)",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
