import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import gsap from "gsap";
import { XIcon } from "./iconLibrary/x";

export default function GsapDrawer({
  open,
  closeOpen,
  children,
  action = "bottom",
  title,
}: {
  open: boolean;
  closeOpen: () => void;
  children: React.ReactNode;
  action: "right" | "left" | "bottom";
  title: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  // Configuration for Tailwind classes and GSAP values
  const config = {
    bottom: {
      x: 0,
      y: "100%",
      overlay: "items-end justify-center",
      panel: "w-full h-[60dvh] rounded-t-[20px]",
      translate: "translate-y-full",
    },
    right: {
      x: "100%",
      y: 0,
      overlay: "items-center justify-end",
      panel: "w-[clamp(300px,50vw,800px)] h-full rounded-none",
      translate: "translate-x-full",
    },
    left: {
      x: "-100%",
      y: 0,
      overlay: "items-center justify-start",
      panel: "w-[clamp(300px,50vw,800px)] h-full rounded-none",
      translate: "-translate-x-full",
    },
  }[action];

  useGSAP(
    () => {
      const tl = gsap.timeline();

      if (open) {
        gsap.set(overlayRef.current, { display: "flex" });
        gsap.set(contentRef.current?.children || [], { y: 20, opacity: 0 });

        tl.to(overlayRef.current, { opacity: 1, duration: 0.3 })
          .to(
            panelRef.current,
            {
              x: 0,
              y: 0,
              opacity: 1,
              duration: 0.5,
              ease: "power3.out",
            },
            "-=0.1",
          )
          .to(
            contentRef.current?.children || [],
            {
              y: 0,
              opacity: 1,
              duration: 0.4,
              stagger: 0.08,
              ease: "back.out(1.2)",
            },
            "-=0.2",
          );
      } else {
        tl.to(panelRef.current, {
          x: config.x,
          y: config.y,
          opacity: 0,
          duration: 0.4,
          ease: "power3.in",
        }).to(
          overlayRef.current,
          {
            opacity: 0,
            duration: 0.3,
            onComplete: () => {
              gsap.set(overlayRef.current, { display: "none" });
            },
          },
          "-=0.2",
        );
      }
    },
    { dependencies: [open, action], scope: containerRef },
  );

  return (
    <div
      ref={overlayRef}
      className={`fixed inset-0 z-[9999] bg-black/25 backdrop-blur-sm opacity-0 hidden flex ${config.overlay}`}
      onClick={(e) => {
        if (e.target === overlayRef.current) closeOpen();
      }}
    >
      <div
        ref={panelRef}
        className={`relative bg-[#FBFBE3] flex flex-col p-4 gap-2.5 shadow-[-10px_0_30px_rgba(0,0,0,0.1)] will-change-transform ${config.panel} ${config.translate}`}
      >
        <div
          className={`flex items-center pb-2.5 ${
            action === "bottom"
              ? "justify-center"
              : "justify-between border-b border-gray-300"
          }`}
        >
          {action !== "bottom" && (
            <div className="font-bold text-[#363636] text-[clamp(1.3rem,4vw,1.5rem)]">
              {title}
            </div>
          )}

          {action === "bottom" ? (
            <div
              className="h-1.5 w-[50px] rounded-full bg-[#9b9b9b] cursor-pointer"
              onClick={closeOpen}
            />
          ) : (
            <div className="cursor-pointer p-1" onClick={closeOpen}>
              <XIcon />
            </div>
          )}
        </div>

        <div ref={contentRef} className="no-sb flex-1 overflow-auto">
          {children}
        </div>
      </div>
    </div>
  );
}
