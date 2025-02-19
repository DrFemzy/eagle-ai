import Image from "next/image";
import React from "react";

export const CoverImage = ({
  src,
  alt,
  className,
  position,
  placeholder,
}: {
  src: string;
  alt: string;
  className?: string;
  position?: string;
  placeholder?: boolean;
}) => (
  <Image
    src={src}
    placeholder={placeholder ? "blur" : undefined}
    blurDataURL={placeholder ? "/assets/pngs/placeholder.png" : undefined}
    alt={alt}
    fill
    style={{ objectFit: "cover", objectPosition: position }}
    priority
    className={className}
  />
);

export const ContainImage = ({
  src,
  alt,
  placeholder,
}: {
  src: string;
  alt: string;
  placeholder?: boolean;
}) => (
  <Image
    src={src}
    placeholder={placeholder ? "blur" : undefined}
    blurDataURL={placeholder ? "/assets/pngs/placeholder.png" : undefined}
    alt={alt}
    fill
    style={{ objectFit: "contain" }}
    priority
  />
);
