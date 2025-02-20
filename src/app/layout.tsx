import type { Metadata } from "next";
import "./globals.css";
import { poppins } from "@/fonts";
import { Toaster } from "sonner";

export const metadata: Metadata = {
  title: "Eagles AI",
  description: "Pioneering the Future of Digital Asset Investment",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased`}>
        <Toaster richColors />
        {children}</body>
    </html>
  );
}
