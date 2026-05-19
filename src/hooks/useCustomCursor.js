import { useEffect, useRef } from "react";

const LERP = 0.12;

export function useCustomCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const mouse = useRef({ x: 0, y: 0 });
  const ring = useRef({ x: 0, y: 0 });
  const rafRef = useRef(null);

  useEffect(() => {
    const isMobile = window.matchMedia("(max-width: 768px)").matches;
    if (isMobile) return;

    const dot = dotRef.current;
    const ringEl = ringRef.current;
    if (!dot || !ringEl) return;

    const onMove = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
      dot.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`;
    };

    const animate = () => {
      ring.current.x += (mouse.current.x - ring.current.x) * LERP;
      ring.current.y += (mouse.current.y - ring.current.y) * LERP;
      ringEl.style.transform = `translate(${ring.current.x}px, ${ring.current.y}px) translate(-50%, -50%)`;
      rafRef.current = requestAnimationFrame(animate);
    };

    const onOver = (e) => {
      const target = e.target.closest("a, button, .interactive");
      const scale = target ? 1.6 : 1;
      dot.style.width = target ? "10px" : "8px";
      dot.style.height = target ? "10px" : "8px";
      ringEl.style.width = target ? "48px" : "32px";
      ringEl.style.height = target ? "48px" : "32px";
      dot.style.transform = `translate(${mouse.current.x}px, ${mouse.current.y}px) translate(-50%, -50%) scale(${scale})`;
    };

    window.addEventListener("mousemove", onMove);
    document.addEventListener("mouseover", onOver);
    rafRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onOver);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return { dotRef, ringRef };
}
