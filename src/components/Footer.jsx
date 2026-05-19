export default function Footer() {
  return (
    <footer
      className="border-t py-8"
      style={{ borderColor: "var(--border)" }}
    >
      <div className="section-container flex flex-col items-center justify-between gap-4 text-sm sm:flex-row">
        <p style={{ fontFamily: "var(--font-dm-mono)", color: "var(--muted)" }}>
          © 2025 Shohjahon Abdullayev
        </p>
        <p
          className="flex items-center gap-2"
          style={{ fontFamily: "var(--font-dm-mono)", color: "var(--muted)" }}
        >
          <span className="status-dot inline-block h-2 w-2 rounded-full" style={{ background: "var(--accent)" }} />
          Available for work
        </p>
      </div>
    </footer>
  );
}
