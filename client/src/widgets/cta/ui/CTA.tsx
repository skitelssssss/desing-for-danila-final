// L'ART DE LA BEAUTÉ — CTA section (dark blue, centered label + title + button)
import { Link } from "wouter";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

interface CTAProps {
  label: string;
  title: string;
  buttonLabel?: string;
  buttonHref?: string;
}

export function CTA({ label, title, buttonLabel, buttonHref }: CTAProps) {
  return (
    <Box component="section" sx={{ bgcolor: "#0F1B3D", py: 10 }}>
      <Container sx={{ textAlign: "center" }}>
        <Typography sx={{ fontFamily: "'Nunito', sans-serif", fontWeight: 400, fontSize: "0.825rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "rgba(255,255,255,0.5)", mb: 0.75 }}>
          {label}
        </Typography>
        <Typography sx={{ fontFamily: "'Nunito', sans-serif", fontWeight: 400, fontSize: "clamp(1rem, 2vw, 1.3rem)", letterSpacing: "0.2em", textTransform: "uppercase", color: "#fff", mb: 0.75 }}>
          {title}
        </Typography>
        <Box sx={{ width: "2rem", height: "1px", bgcolor: "rgba(255,255,255,0.4)", mx: "auto", mb: buttonLabel ? 3 : 2 }} />
        {buttonLabel && buttonHref && (
          <Link href={buttonHref}>
            <Button
              variant="outlined"
              sx={{
                color: "#fff",
                borderColor: "rgba(255,255,255,0.4)",
                borderRadius: 0,
                fontFamily: "'Nunito', sans-serif",
                fontWeight: 400,
                fontSize: "0.72rem",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                px: 4,
                py: 1.25,
                transition: "all 0.25s ease",
                "&:hover": { borderColor: "#fff", bgcolor: "rgba(255,255,255,0.06)" },
              }}
            >
              {buttonLabel}
            </Button>
          </Link>
        )}
      </Container>
    </Box>
  );
}
