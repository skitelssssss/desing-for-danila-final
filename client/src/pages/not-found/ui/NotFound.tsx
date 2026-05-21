import { Button } from "@/shared/ui/button";
import { Card, CardContent } from "@/shared/ui/card";
import { AlertCircle, Home } from "lucide-react";
import { useLocation } from "wouter";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function NotFound() {
  const [, setLocation] = useLocation();

  return (
    <Box sx={{ minHeight: "100vh", width: "100%", display: "flex", alignItems: "center", justifyContent: "center", bgcolor: "#F8F7F4" }}>
      <Card sx={{ width: "100%", maxWidth: 512, mx: 2, boxShadow: 4, border: 0, bgcolor: "rgba(255,255,255,0.8)", backdropFilter: "blur(8px)" }}>
        <CardContent sx={{ pt: 4, pb: 4, textAlign: "center" }}>
          <Box sx={{ display: "flex", justifyContent: "center", mb: 3 }}>
            <Box sx={{ position: "relative" }}>
              <Box
                sx={{
                  position: "absolute",
                  inset: 0,
                  bgcolor: "#FEE2E2",
                  borderRadius: "50%",
                  animation: "pulse 2s infinite",
                  "@keyframes pulse": {
                    "0%, 100%": { opacity: 1 },
                    "50%": { opacity: 0.5 },
                  },
                }}
              />
              <AlertCircle size={64} style={{ position: "relative", color: "#EF4444" }} />
            </Box>
          </Box>

          <Typography variant="h1" sx={{ fontWeight: 700, color: "#1E293B", mb: 0.5, fontSize: "2.5rem" }}>
            404
          </Typography>

          <Typography variant="h2" sx={{ fontWeight: 600, color: "#334155", mb: 2, fontSize: "1.05rem" }}>
            Страница не найдена
          </Typography>

          <Typography sx={{ color: "#475569", mb: 4, lineHeight: 1.6 }}>
            К сожалению, запрашиваемая страница не существует.
            <br />
            Возможно, она была перемещена или удалена.
          </Typography>

          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Button
              onClick={() => setLocation("/")}
              sx={{
                bgcolor: "#2563EB",
                "&:hover": { bgcolor: "#1D4ED8" },
                color: "#fff",
                px: 3,
                py: 1.25,
                border: "none",
              }}
            >
              <Home size={16} style={{ marginRight: 8 }} />
              На главную
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}
