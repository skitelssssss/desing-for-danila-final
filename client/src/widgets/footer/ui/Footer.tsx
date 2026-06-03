// L'ART DE LA BEAUTÉ — Footer (MUI)
import { Link } from "wouter";
import { Instagram, Send } from "lucide-react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import MuiLink from "@mui/material/Link";
import IconButton from "@mui/material/IconButton";
import Divider from "@mui/material/Divider";

const MAIN_MENU = [
  { label: "Главная", href: "/" },
  { label: "Процедуры", href: "/services" },
  { label: "О нас", href: "/about" },
  { label: "Контакты", href: "/contact" },
];

const INFO_LINKS = [
  "Политика конфиденциальности",
  "Политика возврата",
  "Условия обслуживания",
  "Правовое уведомление",
];

const colLabelSx = {
  fontFamily: "'Nunito', sans-serif",
  fontWeight: 400,
  fontSize: "0.825rem",
  letterSpacing: "0.22em",
  textTransform: "uppercase",
  color: "rgba(255,255,255,0.45)",
  mb: 1.5,
};

const linkSx = {
  fontFamily: "'Nunito', sans-serif",
  fontWeight: 400,
  fontSize: "0.68rem",
  letterSpacing: "0.1em",
  textTransform: "uppercase",
  color: "rgba(255,255,255,0.65)",
  textDecoration: "none",
  display: "block",
  mb: 0.75,
  transition: "color 0.2s",
  "&:hover": { color: "#fff" },
};

const PHONE = "+375 29 749-22-22";
const PHONE_TEL = "+375297492222";
const INSTAGRAM = "https://www.instagram.com/lart.de_la_beaute";
const TELEGRAM = "https://t.me/l_art_de_la_beaute";
const VIBER = "viber://chat?number=%2B375297492222";
const ADDRESS = "Минск, ул. Тимирязева, 122";
const HOURS = "Пн–Сб 09:00–21:00 · Вс 09:00–18:00";

export default function Footer() {
  return (
    <Box component="footer" sx={{ bgcolor: "#0F1B3D" }}>
      <Container sx={{ py: 8 }}>
        <Grid container spacing={6}>
          {/* Column 1: Main Menu */}
          <Grid size={{ xs: 12, md: 3 }}>
            <Typography component="span" sx={colLabelSx}>Меню</Typography>
            {MAIN_MENU.map((item) => (
              <Link key={item.href} href={item.href}>
                <Typography component="span" sx={linkSx}>
                  {item.label}
                </Typography>
              </Link>
            ))}
          </Grid>

          {/* Column 2: About */}
          <Grid size={{ xs: 12, md: 4 }}>
            <Typography component="span" sx={colLabelSx}>О нас</Typography>
            <Typography
              sx={{
                fontFamily: "'Nunito', sans-serif",
                fontWeight: 400,
                fontSize: "0.825rem",
                lineHeight: 1.9,
                color: "rgba(255,255,255,0.6)",
                mb: 1.5,
              }}
            >
              L'art de la Beauté — косметология в Минске. Профессиональный уход за кожей лица на премиальных брендах Comfort Zone и PHYTOMER. Эстетическая косметология с индивидуальным подходом.
            </Typography>
            <MuiLink
              href={`tel:${PHONE_TEL}`}
              underline="none"
              sx={{ ...linkSx, color: "rgba(255,255,255,0.85)", mb: 0.5 }}
            >
              {PHONE}
            </MuiLink>
            <Typography
              sx={{
                fontFamily: "'Nunito', sans-serif",
                fontWeight: 400,
                fontSize: "0.72rem",
                letterSpacing: "0.08em",
                color: "rgba(255,255,255,0.4)",
                mb: 0.5,
              }}
            >
              {ADDRESS}
            </Typography>
            <Typography
              sx={{
                fontFamily: "'Nunito', sans-serif",
                fontWeight: 400,
                fontSize: "0.72rem",
                letterSpacing: "0.08em",
                color: "rgba(255,255,255,0.4)",
              }}
            >
              {HOURS}
            </Typography>
            <Box sx={{ display: "flex", gap: 1, mt: 3 }}>
              <IconButton component="a" href={INSTAGRAM} target="_blank" rel="noopener noreferrer" sx={{ color: "rgba(255,255,255,0.4)", "&:hover": { color: "#fff" } }} aria-label="Instagram">
                <Instagram size={15} strokeWidth={1.5} />
              </IconButton>
              <IconButton component="a" href={TELEGRAM} target="_blank" rel="noopener noreferrer" sx={{ color: "rgba(255,255,255,0.4)", "&:hover": { color: "#fff" } }} aria-label="Telegram">
                <Send size={15} strokeWidth={1.5} />
              </IconButton>
              <IconButton component="a" href={VIBER} sx={{ color: "rgba(255,255,255,0.4)", "&:hover": { color: "#fff" } }} aria-label="Viber">
                <Box component="span" sx={{ fontSize: "0.62rem", letterSpacing: "0.1em", fontFamily: "'Nunito', sans-serif", textTransform: "uppercase" }}>Viber</Box>
              </IconButton>
            </Box>
          </Grid>

          {/* Column 3: Info */}
          <Grid
            size={{ xs: 12, md: 5 }}
            sx={{ borderLeft: { md: "1px solid rgba(255,255,255,0.1)" }, pl: { md: 4 } }}
          >
            <Typography component="span" sx={colLabelSx}>Информация</Typography>
            {INFO_LINKS.map((item) => (
              <MuiLink
                key={item}
                href="#"
                underline="none"
                sx={linkSx}
              >
                {item}
              </MuiLink>
            ))}
            <Typography
              sx={{
                fontFamily: "'Nunito', sans-serif",
                fontWeight: 400,
                fontSize: "0.72rem",
                letterSpacing: "0.08em",
                color: "rgba(255,255,255,0.35)",
                mt: 3,
                lineHeight: 1.9,
              }}
            >
              Метро «Ратомская» — 440 м.<br />
              Онлайн-запись через Telegram и Viber.
            </Typography>
          </Grid>
        </Grid>
      </Container>

      {/* Bottom bar */}
      <Divider sx={{ borderColor: "rgba(255,255,255,0.1)" }} />
      <Container sx={{ py: 2.5 }}>
        <Box sx={{ display: "flex", flexDirection: { xs: "column", sm: "row" }, alignItems: "center", justifyContent: "space-between", gap: 1.5 }}>
          <Typography
            sx={{
              fontFamily: "'Nunito', sans-serif",
              fontWeight: 400,
              fontSize: "0.65rem",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.35)",
            }}
          >
            © L'art de la Beauté 2026
          </Typography>
          <Box sx={{ display: "flex", gap: 1 }}>
            {["Visa", "Mastercard", "Наличные"].map((m) => (
              <Typography
                key={m}
                component="span"
                sx={{
                  fontFamily: "'Nunito', sans-serif",
                  fontSize: "0.65rem",
                  letterSpacing: "0.08em",
                  color: "rgba(255,255,255,0.4)",
                  border: "1px solid rgba(255,255,255,0.15)",
                  px: 0.75,
                  py: 0.25,
                }}
              >
                {m}
              </Typography>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
