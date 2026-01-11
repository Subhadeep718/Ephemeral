import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

interface DrawerProps {
  open: boolean;
  onClose: () => void;
  position?: "right" | "bottom" | "left";
  width?: string;
  height?: string;
  children: React.ReactNode;
}

export default function Drawer({
  open,
  onClose,
  position = "right",
  width = "380px",
  height = "60vh",
  children,
}: DrawerProps) {
  const drawerRef = useRef<HTMLDivElement>(null);
  const backdropRef = useRef<HTMLDivElement>(null);

  const startPos = useRef(0);
  const currentPos = useRef(0);
  const dragging = useRef(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  useGSAP(
    () => {
      if (!drawerRef.current || !backdropRef.current) return;

      const isHorizontal = position === "right" || position === "left";

      if (open) {
        gsap.set(backdropRef.current, { opacity: 0, pointerEvents: "auto" });
        gsap.to(backdropRef.current, { opacity: 1, duration: 0.25 });

        gsap.fromTo(
          drawerRef.current,
          isHorizontal
            ? { x: position === "right" ? "100%" : "-100%" }
            : { y: "100%" },
          { x: 0, y: 0, duration: 0.4, ease: "power3.out" },
        );
      } else {
        gsap.to(backdropRef.current, {
          opacity: 0,
          duration: 0.2,
          onComplete: () =>
            void gsap.set(backdropRef.current, { pointerEvents: "none" }),
        });

        gsap.to(drawerRef.current, {
          x: isHorizontal ? (position === "right" ? "100%" : "-100%") : 0,
          y: position === "bottom" ? "100%" : 0,
          duration: 0.3,
          ease: "power3.in",
        });
      }
    },
    { dependencies: [open, position] },
  );

  const onPointerDown = (e: React.PointerEvent) => {
    dragging.current = true;
    startPos.current = position === "bottom" ? e.clientY : e.clientX;
    drawerRef.current?.setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (!dragging.current || !drawerRef.current) return;

    const current = position === "bottom" ? e.clientY : e.clientX;

    let delta = current - startPos.current;

    // Direction control
    if (position === "left") delta = Math.min(delta, 0);
    if (position === "right") delta = Math.max(delta, 0);
    if (position === "bottom") delta = Math.max(delta, 0);

    currentPos.current = Math.abs(delta);

    gsap.set(drawerRef.current, {
      x: position === "right" ? delta : position === "left" ? delta : 0,
      y: position === "bottom" ? delta : 0,
    });
  };

  const onPointerUp = () => {
    if (!drawerRef.current) return;

    dragging.current = false;

    const size =
      position === "bottom"
        ? drawerRef.current.offsetHeight
        : drawerRef.current.offsetWidth;

    const shouldClose = currentPos.current > size * 0.35;

    if (shouldClose) {
      onClose();
    } else {
      gsap.to(drawerRef.current, {
        x: 0,
        y: 0,
        duration: 0.3,
        ease: "power3.out",
      });
    }

    currentPos.current = 0;
  };

  return (
    <>
      {/* Backdrop */}
      <div
        ref={backdropRef}
        onClick={onClose}
        className="fixed inset-0 bg-black/50 z-40 pointer-events-none backdrop-blur-xs"
      />

      <div
        ref={drawerRef}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        style={{
          width: position === "right" || position === "left" ? width : "100%",
          height: position === "bottom" ? height : "100%",
          touchAction: "none",
        }}
        className={`
          fixed z-50 bg-zinc-900 text-white
          ${
            position === "right"
              ? "top-0 right-0"
              : position === "left"
                ? "top-0 left-0"
                : "bottom-0 left-0"
          }
          rounded-t-xl shadow-xl flex flex-col p-2.5
        `}
      >
        {position === "bottom" && (
          <div className="mx-auto my-2 h-1.5 w-10 rounded-full bg-zinc-500" />
        )}

        {children}
      </div>
    </>
  );
}
