"use client";

import { ThemeProvider } from "next-themes";
import { ReactNode } from "react";

export default function CustomThemeProvider({
  children,
}: {
  children: ReactNode;
}) {
  return (
    // @ts-ignore
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem={true}
      disableTransitionOnChange={true}
      storageKey="theme"
    >
      {children}
    </ThemeProvider>
  );
}