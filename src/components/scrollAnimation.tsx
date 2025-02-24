import { ReactNode, forwardRef, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger, useGSAP);

type AnimationProps = {
  children: ReactNode;
  type: "fadeUp" | "slideLeft" | "zoomIn" | "slideRight" | "fadeDown";
  delay?: number;
  duration?: number;
  className?: string;
  scrub?: boolean;
};

const animations = {
  fadeUp: { from: { y: 100, opacity: 0 }, to: { y: 0, opacity: 1 } },
  slideLeft: { from: { x: 100, opacity: 0 }, to: { x: 0, opacity: 1 } },
  slideRight: { from: { x: -100, opacity: 0 }, to: { x: 0, opacity: 1 } },
  zoomIn: { from: { scale: 0.5, opacity: 0 }, to: { scale: 1, opacity: 1 } },
  fadeDown: { from: { y: -100, opacity: 0 }, to: { y: 0, opacity: 1 } },
};

const ScrollAnimation = forwardRef<HTMLDivElement, AnimationProps>(
  ({ children, type, delay = 0, duration = 0.4, scrub, className }, ref) => {
    const localRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
      // Initial hide then animate
      gsap.set([localRef.current], {
        opacity: 1,
        visibility: "visible",
      });

      const animation = animations[type];
      gsap.fromTo(localRef.current, animation.from, {
        ...animation.to,
        delay,
        duration,
        ease: "power1.out",
        scrollTrigger: {
          trigger: localRef.current,
          start: "top 85%",
          scrub: scrub ? 1 : undefined,
          toggleActions: "play none none none",
        },
      });
    }, [type, delay, duration]);
    return (
      <div
        style={{ visibility: "hidden", opacity: 0 }}
        ref={localRef}
        className={className}
      >
        {children}
      </div>
    );
  }
);

export default ScrollAnimation;