import React from "react";
import { QueryProvider } from "./components/query-client";

export function Providers({ children }: { children: React.ReactNode }) {
  return <QueryProvider>{children}</QueryProvider>;
}
