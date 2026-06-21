import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Clark James De Luna | Web Developer Portfolio",
  description: "Portfolio of Clark James De Luna, IT Graduate and Web Developer.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}