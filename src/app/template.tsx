"use client";

import ReactLenis from "lenis/react";

export default function RootTemplate({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ReactLenis options={{ lerp: 0.5 }} root>
      {children}
    </ReactLenis>
  );
}
