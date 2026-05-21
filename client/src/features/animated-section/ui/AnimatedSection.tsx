import type { ReactNode } from "react";
import Box from "@mui/material/Box";
import { useInView } from "@/shared/hooks/useInView";

export function AnimatedSection({
  children,
  className = "",
  threshold = 0.1,
}: {
  children: ReactNode;
  className?: string;
  threshold?: number;
}) {
  const { ref, inView } = useInView(threshold);

  return (
    <Box
      ref={ref}
      className={className}
      sx={{
        transition: "all 1s",
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(32px)",
      }}
    >
      {children}
    </Box>
  );
}
