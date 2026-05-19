import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FadeUp } from "./FadeUp";
import { SKILLS } from "../data/content";

function SkillBar({ percent }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <div ref={ref} className="mt-4 h-0.5 w-full overflow-hidden rounded-full" style={{ background: "var(--border)" }}>
      <motion.div
        className="h-full rounded-full"
        style={{
          background: "linear-gradient(90deg, var(--accent), rgba(99, 210, 190, 0.5))",
        }}
        initial={{ width: 0 }}
        animate={{ width: inView ? `${percent}%` : 0 }}
        transition={{ duration: 1.2, ease: [0.19, 1, 0.22, 1] }}
      />
    </div>
  );
}

function SkillBlock({ skill, index }) {
  return (
    <FadeUp delay={index * 0.08}>
      <div
        className="skill-block h-full rounded-lg border p-6 transition-colors duration-300 md:p-8"
        style={{
          background: "var(--surface)",
          borderColor: "var(--border)",
        }}
      >
        <span className="mb-4 block text-2xl" style={{ color: "var(--accent)" }} aria-hidden>
          ⬡
        </span>
        <h3
          className="mb-2 text-lg"
          style={{ fontFamily: "var(--font-syne)", fontWeight: 700 }}
        >
          {skill.name}
        </h3>
        <p
          className="mb-1 text-sm leading-relaxed"
          style={{ fontFamily: "var(--font-dm-sans)", fontWeight: 300, color: "var(--muted)" }}
        >
          {skill.description}
        </p>
        <SkillBar percent={skill.percent} />
      </div>
    </FadeUp>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="py-24 md:py-32">
      <div className="section-container">
        <FadeUp className="mb-16">
          <p className="section-label mb-3">Skills</p>
          <h2
            className="mb-4 text-3xl md:text-4xl"
            style={{ fontFamily: "var(--font-syne)", fontWeight: 800 }}
          >
            What I bring
          </h2>
          <p
            className="max-w-lg text-base"
            style={{ fontFamily: "var(--font-dm-sans)", fontWeight: 300, color: "var(--muted)" }}
          >
            Depth in backend engineering with growing full-stack capability.
          </p>
        </FadeUp>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {SKILLS.map((skill, i) => (
            <SkillBlock key={skill.name} skill={skill} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
