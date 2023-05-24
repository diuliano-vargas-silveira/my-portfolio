"use client";

import { ReactElement } from "react";

import { PagesProvider } from "@/providers/pages-provider";

export function Providers({ children }: { children: ReactElement }) {
  return <PagesProvider>{children}</PagesProvider>;
}
