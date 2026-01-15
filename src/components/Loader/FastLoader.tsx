import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function FastLoader() {
  const container = useRef<HTMLDivElement>(null);
  const text = "EPHEMERAL";

  useGSAP(() => {
    const tl = gsap.timeline();
  
  
    tl.from(".letter", {
      opacity: 0,
      y: 20,
      filter: "blur(10px)",
      scale: 1.2,
      stagger: 0.1,
      duration: 1.5,
      ease: "power4.out",
    })
  

    .to(".letter", {
      opacity: 0.7,
      duration: 1,
      repeat: -1,
      yoyo: true,
      stagger: {
        each: 0.2,
        from: "center"
      },
      ease: "sine.inOut"
    })
  
  
    tl.to(container.current, {
      opacity: 0,
      duration: 1,
      ease: "power2.inOut",
      onComplete: () => {
 
         gsap.set(container.current, { display: "none" });
      }
    }, "<1"); 
  
  }, { scope: container });

  return (
    <div ref={container} className="main-div bg-black absolute z-[9999] flex justify-center items-center w-full h-full overflow-hidden">
      <h3 className="quintessential-regular text-4xl md:text-6xl tracking-[0.3em] text-white flex">
        {text.split("").map((char, i) => (
          <span key={i} className="letter inline-block">
            {char === " " ? "\u00A0" : char}
          </span>
        ))}
      </h3>
    </div>
  );
}