import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { openSans } from "@/fonts";
import { cn } from "@/utils/cn";
import { Loader } from "lucide-react";

function PryBtn({
  text,
  fullWidth,
  mobileFullWidth,
  loading,
  disable,
}: {
  text: string;
  fullWidth?: boolean;
  mobileFullWidth?: boolean;
  loading?: boolean;
  disable?: boolean;
}) {
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!buttonRef.current || disable) return;

    const button = buttonRef.current;
    
    const handleHover = () => {
      gsap.to(button, {
        backgroundPosition: '50% 0%',
        duration: 0.1,
        ease: 'power2.inOut'
      });
    };

    const handleLeave = () => {
      gsap.to(button, {
        backgroundPosition: '0% 0%',
        duration: 0.1,
        ease: 'power2.inOut'
      });
    };

    button.addEventListener('mouseenter', handleHover);
    button.addEventListener('mouseleave', handleLeave);

    return () => {
      button.removeEventListener('mouseenter', handleHover);
      button.removeEventListener('mouseleave', handleLeave);
    };
  }, [disable]);

  return (
    <button
      ref={buttonRef}
      disabled={disable}
      className={cn(
        `${openSans.className} relative cursor-pointer rounded-full bg-[linear-gradient(145deg,#1870f6_35.27%,#32fefe_55.1%)] bg-[length:200%_100%] bg-left px-md py-[0.72rem] text-base font-normal leading-normal text-white hover:text-black transition-[colors] duration-1000 self-start`,
        fullWidth && "self-auto",
        mobileFullWidth && "max-md:w-full",
        disable && "cursor-not-allowed bg-[linear-gradient(145deg,#1870f6_62.27%,#32fefe_95.1%)]"
      )}
    >
      {loading ? (
        <Loader
          size={16}
          className="w-full animate-spin text-center text-white"
        />
      ) : (
        <span className="relative z-10">{text}</span>
      )}
    </button>
  );
}

export default PryBtn;