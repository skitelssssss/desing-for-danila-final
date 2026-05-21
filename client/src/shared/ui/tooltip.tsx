export { default as Tooltip } from "@mui/material/Tooltip";

import type { ReactNode } from "react";

// MUI Tooltip doesn't need a Provider — no-op wrapper for backwards compat
export function TooltipProvider({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
