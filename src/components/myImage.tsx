import { cn } from "@/utils/cn";
import Image from "next/image";
import React from "react";

export const CoverImage = ({
  src,
  mobileImage,
  alt,
  className,
  position,
  placeholder,
}: {
  src: string;
  alt: string;
  className?: string;
  mobileImage?: string;
  position?: string;
  placeholder?: boolean;
}) => (
  <>
    <Image
      src={src}
      placeholder={placeholder ? "blur" : undefined}
      blurDataURL={placeholder ? "/assets/pngs/placeholder.png" : undefined}
      alt={alt}
      fill
      style={{ objectFit: "cover", objectPosition: position }}
      priority
      className={cn(`${className}`, mobileImage && "md:hidden")}
    />

    <Image
      src={mobileImage ?? src}
      placeholder={placeholder ? "blur" : undefined}
      blurDataURL={placeholder ? "/assets/pngs/placeholder.png" : undefined}
      alt={alt}
      fill
      style={{ objectFit: "cover", objectPosition: position }}
      priority
      className={cn(`${className}`, mobileImage && "hidden md:inline-block")}
    />
  </>
);

export const ContainImage = ({
  src,
  alt,
  mobileImage,
  placeholder,
}: {
  src: string;
  alt: string;
  mobileImage?: string;

  placeholder?: boolean;
}) => (
  <>
    <Image
      src={src}
      placeholder={placeholder ? "blur" : undefined}
      blurDataURL={placeholder ? "/assets/pngs/placeholder.png" : undefined}
      alt={alt}
      fill
      style={{ objectFit: "contain" }}
      priority
      className={cn(mobileImage && "md:hidden")}
    />
    <Image
      src={mobileImage ?? src}
      placeholder={placeholder ? "blur" : undefined}
      blurDataURL={placeholder ? "/assets/pngs/placeholder.png" : undefined}
      alt={alt}
      fill
      style={{ objectFit: "contain" }}
      priority
      className={cn(mobileImage && "hidden md:inline-block")}
    />
  </>
);
