import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { NAV_LINKS } from "../data/content";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header
      className="fixed top-0 right-0 left-0 z-50 border-b"
      style={{
        background: "rgba(6, 9, 16, 0.7)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        borderColor: "var(--border)",
      }}
    >
      <nav className="section-container flex h-16 items-center justify-between">
        <a href="#" className="interactive flex items-baseline gap-0.5 no-underline">
          <span
            className="text-xl font-extrabold tracking-tight"
            style={{ fontFamily: "var(--font-syne)", color: "var(--text)" }}
          >
            SA
          </span>
          <span
            className="inline-block h-2 w-2 translate-y-0.5 rounded-full"
            style={{ background: "var(--accent)" }}
            aria-hidden
          />
        </a>

        <ul className="hidden items-center gap-10 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="nav-link interactive">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          <a
            href="#contact"
            className="interactive hidden border px-5 py-2.5 no-underline transition-colors md:inline-flex"
            style={{
              fontFamily: "var(--font-dm-mono)",
              fontSize: "0.75rem",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              borderColor: "var(--border-bright)",
              color: "var(--accent)",
            }}
          >
            Hire Me
          </a>

          <button
            type="button"
            className="interactive flex flex-col gap-1.5 p-2 md:hidden"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            <span
              className="block h-px w-6 transition-transform"
              style={{
                background: "var(--text)",
                transform: open ? "rotate(45deg) translateY(5px)" : "none",
              }}
            />
            <span
              className="block h-px w-6 transition-opacity"
              style={{
                background: "var(--text)",
                opacity: open ? 0 : 1,
              }}
            />
            <span
              className="block h-px w-6 transition-transform"
              style={{
                background: "var(--text)",
                transform: open ? "rotate(-45deg) translateY(-5px)" : "none",
              }}
            />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-t md:hidden"
            style={{
              background: "rgba(6, 9, 16, 0.95)",
              borderColor: "var(--border)",
            }}
          >
            <ul className="flex flex-col gap-6 px-5 py-8">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="nav-link interactive block"
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#contact"
                  className="interactive inline-block border px-5 py-2.5 no-underline"
                  style={{
                    fontFamily: "var(--font-dm-mono)",
                    fontSize: "0.75rem",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    borderColor: "var(--border-bright)",
                    color: "var(--accent)",
                  }}
                  onClick={() => setOpen(false)}
                >
                  Hire Me
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
