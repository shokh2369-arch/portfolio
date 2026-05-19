import { useCustomCursor } from "../hooks/useCustomCursor";

export default function CustomCursor() {
  const { dotRef, ringRef } = useCustomCursor();

  return (
    <div className="max-md:hidden" aria-hidden>
      <div
        ref={dotRef}
        className="pointer-events-none fixed top-0 left-0 z-[9999] rounded-full"
        style={{
          width: 8,
          height: 8,
          background: "var(--accent)",
          willChange: "transform",
        }}
      />
      <div
        ref={ringRef}
        className="pointer-events-none fixed top-0 left-0 z-[9998] rounded-full border"
        style={{
          width: 32,
          height: 32,
          borderColor: "var(--border-bright)",
          willChange: "transform",
        }}
      />
    </div>
  );
}
