export function GsapDrawer({
  open,
  closeOpen,
  children,
  action = "bottom",
  title
}: {
  open: boolean
  closeOpen: () => void
  children: React.ReactNode
  action: "right" | "left" | "bottom"
  title: string
}) {
  const containerRef = useRef<HTMLDivElement>(null)
  const overlayRef = useRef<HTMLDivElement>(null)
  const panelRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  const dynamicWidth = "clamp(300px, 50vw, 800px)"

  const config = {
    bottom: {
      x: 0,
      y: "100%",
      alignItems: "flex-end",
      justifyContent: "center",
      width: "100%",
      height: "clamp(40dvh, 60dvh, 90dvh)",
      radius: "20px 20px 0 0"
    },
    right: {
      x: "100%",
      y: 0,
      alignItems: "center",
      justifyContent: "flex-end",
      width: dynamicWidth,
      height: "100%",
      radius: "0"
    },
    left: {
      x: "-100%",
      y: 0,
      alignItems: "center",
      justifyContent: "flex-start",
      width: dynamicWidth,
      height: "100%",
      radius: "0 "
    }
  }[action]

  useGSAP(
    () => {
      const tl = gsap.timeline()

      if (open) {
        gsap.set(overlayRef.current, { display: "flex" })

        gsap.set(contentRef.current?.children || [], {
          y: 20,
          opacity: 0
        })

        tl.to(overlayRef.current, {
          opacity: 1,
          duration: 0.3
        })
          .to(
            panelRef.current,
            {
              x: 0,
              y: 0,
              opacity: 1,
              duration: 0.5,
              ease: "power3.out"
            },
            "-=0.1"
          )
          .to(
            contentRef.current?.children || [],
            {
              y: 0,
              opacity: 1,
              duration: 0.4,
              stagger: 0.08,
              ease: "back.out(1.2)"
            },
            "-=0.2"
          )
      } else {
        tl.to(panelRef.current, {
          x: config.x,
          y: config.y,
          opacity: 0,
          duration: 0.4,
          ease: "power3.in"
        }).to(
          overlayRef.current,
          {
            opacity: 0,
            duration: 0.3,
            onComplete: () => {
              gsap.set(overlayRef.current, { display: "none" })
            }
          },
          "-=0.2"
        )
      }
    },
    { dependencies: [open, action], scope: containerRef }
  )

  return (
    <div
      ref={overlayRef}
      style={{
        position: "fixed",
        inset: "0",
        background: "#00000040",
        backdropFilter: "blur(5px)",
        zIndex: "9999",
        opacity: 0,
        display: "flex",
        alignItems: config.alignItems,
        justifyContent: config.justifyContent
      }}
      onClick={(e) => {
        if (e.target === overlayRef.current) closeOpen()
      }}
    >
      <div
        ref={panelRef}
        style={{
          position: "relative",
          width: config.width,
          height: config.height,
          minWidth: action !== "bottom" ? "300px" : "100%",
          background: "#FBFBE3",
          borderRadius: config.radius,
          display: "flex",
          flexDirection: "column",
          padding: "1rem",
          gap: "10px",
          transform: `translate(${config.x}, ${config.y})`,
          willChange: "transform",
          boxShadow: "-10px 0 30px rgba(0,0,0,0.1)"
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: action === "bottom" ? "center" : "space-between",
            alignItems: "center",
            paddingBottom: "10px",
            borderBottom: action !== "bottom" ? "1px solid #ddd" : "none"
          }}
        >
          {action !== "bottom" && (
            <div
              style={{
                fontWeight: "bold",
                color: "rgb(54 54 54)",
                fontSize: "clamp(1.3rem, 4vw, 1.5rem)"
              }}
            >
              {title}
            </div>
          )}

          {action === "bottom" ? (
            <div
              style={{
                height: "6px",
                width: "50px",
                borderRadius: "10px",
                background: "#9b9b9b",
                cursor: "pointer"
              }}
              onClick={closeOpen}
            />
          ) : (
            <div
              style={{ cursor: "pointer", padding: "5px" }}
              onClick={closeOpen}
            >
              <CloseIcon />
            </div>
          )}
        </div>

        <div
          ref={contentRef}
          className="no-sb"
          style={{
            flex: 1,
            overflow: "auto"
          }}
        >
          {children}
        </div>
      </div>
    </div>
  )
}

interface DrawerProps{
    open: boolean
    onClose : ()=> void
    position?: "right" | "bottom" | "left";
    children: React.ReactNode;
}

export default function Drawer({open, onClose, position="bottom", children}:DrawerProps){
    if(!open){
        return null
    }
    return(
        <div   onClick={onClose}     className="fixed inset-0 bg-black/40 z-40 pointer-events-none backdrop-blur-xs">

            <div  className={`fixed z-50 bg-white shadow-lg transition-transform duration-300
          ${position === "bottom" && "left-0 bottom-0 w-full h-64"}
          ${position === "right" && "right-0 top-0 h-full w-80"}
          ${position === "left" && "left-0 top-0 h-full w-80"}
        `}>
<div className=" rounded-t-lg shadow-xl p-2.5 bg-[#0B0D0E]">
<div className="mx-auto my-2 h-1.5 w-10 rounded-full bg-zinc-500" />
{children}

</div>
            </div>

        </div>

    )
}
