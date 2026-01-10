import { useEffect, useRef } from "react";
import { gsap } from "gsap";

interface DrawerProps {
  open: boolean;
  onClose: () => void;
  position?: "right" | "bottom";
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

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  useEffect(() => {
    if (!drawerRef.current || !backdropRef.current) return;

    if (open) {
      gsap.set(backdropRef.current, { opacity: 0, pointerEvents: "auto" });
      gsap.to(backdropRef.current, { opacity: 1, duration: 0.25 });

      gsap.fromTo(
        drawerRef.current,
        position === "right" ? { x: "100%" } : { y: "100%" },
        {
          x: "0%",
          y: "0%",
          duration: 0.4,
          ease: "power3.out",
        },
      );
    } else {
      gsap.to(backdropRef.current, {
        opacity: 0,
        duration: 0.2,
        onComplete: () => {
          gsap.set(backdropRef.current, { pointerEvents: "none" });
        },
      });

      gsap.to(drawerRef.current, {
        x: position === "right" ? "100%" : "0%",
        y: position === "bottom" ? "100%" : "0%",
        duration: 0.3,
        ease: "power3.in",
      });
    }
  }, [open, position]);

  return (
    <>
      <div
        ref={backdropRef}
        onClick={onClose}
        className="fixed inset-0 bg-black/50 z-40 pointer-events-none"
      />

      <div
        ref={drawerRef}
        style={{
          width: position === "right" ? width : "100%",
          height: position === "bottom" ? height : "100%",
        }}
        className={`
          fixed z-50 bg-zinc-900 text-white
          ${position === "right" ? "top-0 right-0" : "bottom-0 left-0"}
          rounded-t-xl
          shadow-xl
          flex flex-col
          p-2.5
        `}
      >
        {children}
      </div>
    </>
  );
}
