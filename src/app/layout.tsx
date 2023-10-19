import type { Metadata } from "next";

import "@/styles/globals.css";
import { gotham } from "@/styles/fonts";

export const metadata: Metadata = {
  title: "Vink Card",
  description: "Vink Card",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={gotham.variable}>
      <body>{children}</body>
    </html>
  );
}
