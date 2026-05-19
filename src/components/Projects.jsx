import { motion } from "framer-motion";
import { FadeUp, FadeUpStagger, fadeUpItem } from "./FadeUp";
import { PROJECTS } from "../data/content";

export default function Projects() {
  return (
    <section id="projects" className="py-24 md:py-32">
      <div className="section-container mb-16">
        <FadeUp>
          <p className="section-label mb-3">Work</p>
          <h2
            className="mb-4 text-3xl md:text-4xl"
            style={{ fontFamily: "var(--font-syne)", fontWeight: 800 }}
          >
            Selected Work
          </h2>
          <p
            className="max-w-lg text-base"
            style={{ fontFamily: "var(--font-dm-sans)", fontWeight: 300, color: "var(--muted)" }}
          >
            Production systems and client deliverables — backend-first, built to
            scale.
          </p>
        </FadeUp>
      </div>

      <FadeUpStagger>
        <ul className="border-t" style={{ borderColor: "var(--border)" }}>
          {PROJECTS.map((project) => (
            <motion.li key={project.id} variants={fadeUpItem}>
              <a
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="project-row interactive group relative block no-underline"
              >
                <div
                  className="absolute inset-y-0 -left-[50vw] -right-[50vw] -z-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  style={{ background: "var(--accent-dim)" }}
                  aria-hidden
                />
                <div className="section-container relative">
                  <div className="grid grid-cols-[auto_1fr_auto] items-start gap-6 py-10 md:gap-10 md:py-12">
                    <span
                      className="pt-1 text-sm"
                      style={{ fontFamily: "var(--font-dm-mono)", color: "var(--muted)" }}
                    >
                      {project.id}
                    </span>

                    <div>
                      <p
                        className="mb-2 text-xs tracking-[0.15em] uppercase"
                        style={{
                          fontFamily: "var(--font-dm-mono)",
                          color: "var(--accent)",
                        }}
                      >
                        {project.type}
                      </p>
                      <h3
                        className="mb-3 text-xl md:text-[1.4rem]"
                        style={{
                          fontFamily: "var(--font-syne)",
                          fontWeight: 700,
                          color: "var(--text)",
                        }}
                      >
                        {project.name}
                      </h3>
                      <p
                        className="mb-4 max-w-2xl text-sm leading-relaxed md:text-base"
                        style={{
                          fontFamily: "var(--font-dm-sans)",
                          fontWeight: 300,
                          color: "var(--muted)",
                        }}
                      >
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((t) => (
                          <span
                            key={t}
                            className="rounded border px-2.5 py-1 text-xs"
                            style={{
                              fontFamily: "var(--font-dm-mono)",
                              borderColor: "var(--border)",
                              color: "var(--muted)",
                            }}
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    <span
                      className="pt-2 text-2xl transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                      style={{ color: "var(--accent)" }}
                      aria-hidden
                    >
                      ↗
                    </span>
                  </div>
                </div>
              </a>
              <div className="border-b" style={{ borderColor: "var(--border)" }} />
            </motion.li>
          ))}
        </ul>
      </FadeUpStagger>
    </section>
  );
}
