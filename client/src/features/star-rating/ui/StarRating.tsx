import Box from "@mui/material/Box";
import { Star } from "lucide-react";

export function StarRating({ rating, size = 10 }: { rating: number; size?: number }) {
  return (
    <Box sx={{ display: "flex", gap: 0.25 }}>
      {[1, 2, 3, 4, 5].map((i) => (
        <Star
          key={i}
          size={size}
          color={i <= Math.round(rating) ? "#1C1B18" : "#D8D5CF"}
          fill={i <= Math.round(rating) ? "#1C1B18" : "none"}
        />
      ))}
    </Box>
  );
}
