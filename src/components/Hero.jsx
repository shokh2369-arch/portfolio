import { motion } from "framer-motion";
import { LINKS, STATS } from "../data/content";

const ease = [0.19, 1, 0.22, 1];

const fade = (delay) => ({
  initial: { opacity: 0, y: 32 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease, delay },
});

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen flex-col justify-center pt-[120px] pb-20"
    >
      <div
        className="pointer-events-none absolute top-[20%] -left-40 h-[480px] w-[480px] rounded-full blur-[120px]"
        style={{ background: "rgba(99, 210, 190, 0.1)" }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute bottom-[15%] left-[20%] h-[320px] w-[320px] rounded-full blur-[100px]"
        style={{ background: "rgba(240, 165, 0, 0.04)" }}
        aria-hidden
      />

      <div className="section-container relative z-10 w-full">
        <div className="hero-content mx-auto max-w-4xl text-center">
          <motion.div
            className="mb-8 flex items-center justify-center gap-4"
            {...fade(0.2)}
          >
            <span
              className="inline-block h-px shrink-0"
              style={{ width: 32, background: "var(--accent)" }}
            />
            <span
              className="text-xs tracking-[0.2em] uppercase"
              style={{ fontFamily: "var(--font-dm-mono)", color: "var(--muted)" }}
            >
              Backend / Full-Stack Developer
            </span>
          </motion.div>

          <motion.h1 className="hero-title mb-6" {...fade(0.35)}>
            <span className="hero-title__line text-white">Shohjahon</span>
            <span className="hero-title__line text-outline">Abdullayev</span>
          </motion.h1>

          <motion.p
            className="mx-auto mb-10 max-w-xl text-lg leading-relaxed"
            style={{
              fontFamily: "var(--font-dm-sans)",
              fontWeight: 300,
              color: "var(--muted)",
            }}
            {...fade(0.5)}
          >
            I build scalable backend systems and real-world applications using Go
            and Node.js.
          </motion.p>

          <motion.div
            className="mb-14 flex flex-wrap items-center justify-center gap-4"
            {...fade(0.65)}
          >
            <a href="#projects" className="btn-primary interactive">
              View Projects ↓
            </a>
            <a
              href={LINKS.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost interactive"
            >
              GitHub ↗
            </a>
            <a
              href={LINKS.cv}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost interactive"
            >
              Download CV ↓
            </a>
          </motion.div>

          <motion.div {...fade(0.8)}>
            <hr
              className="mx-auto mb-10 max-w-3xl border-0 border-t"
              style={{ borderColor: "var(--border)" }}
            />
            <div className="flex flex-wrap items-center justify-center gap-10 md:gap-16">
              {STATS.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div
                    className="mb-1 text-3xl md:text-4xl"
                    style={{
                      fontFamily: "var(--font-syne)",
                      fontWeight: 800,
                      color: "var(--accent)",
                    }}
                  >
                    {stat.value}
                  </div>
                  <div
                    className="text-xs tracking-[0.15em] uppercase"
                    style={{
                      fontFamily: "var(--font-dm-mono)",
                      color: "var(--muted)",
                    }}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
