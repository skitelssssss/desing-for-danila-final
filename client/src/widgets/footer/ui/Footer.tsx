// LUXE BEAUTY — Footer (MUI)
import { Link } from "wouter";
import { Instagram, Facebook, Youtube } from "lucide-react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import MuiLink from "@mui/material/Link";
import IconButton from "@mui/material/IconButton";
import Divider from "@mui/material/Divider";

const MAIN_MENU = [
  { label: "Главная", href: "/" },
  { label: "E-Boutique", href: "/products" },
  { label: "Процедуры", href: "/services" },
  { label: "О бренде", href: "/about" },
  { label: "Контакты", href: "/contact" },
];

const INFO_LINKS = [
  "Политика конфиденциальности",
  "Политика возврата",
  "Политика доставки",
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

export default function Footer() {
  return (
    <Box component="footer" sx={{ bgcolor: "#0F1B3D" }}>
      <Container sx={{ py: 8 }}>
        <Grid container spacing={6}>
          {/* Column 1: Main Menu */}
          <Grid size={{ xs: 12, md: 4 }}>
            <Typography component="span" sx={colLabelSx}>Главное меню</Typography>
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
              Luxe Beauty — бутик премиальной косметики и профессиональных процедур по уходу за кожей. Индивидуальный подход и продукты высочайшего качества.
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
              ул. Независимости, 12, Минск, Беларусь
            </Typography>
            <Box sx={{ display: "flex", gap: 2, mt: 3 }}>
              {[Instagram, Facebook, Youtube].map((Icon, i) => (
                <IconButton key={i} sx={{ color: "rgba(255,255,255,0.4)", "&:hover": { color: "#fff" } }}>
                  <Icon size={15} strokeWidth={1.5} />
                </IconButton>
              ))}
            </Box>
          </Grid>

          {/* Column 3: Info */}
          <Grid
            size={{ xs: 12, md: 4 }}
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
            © Luxe Beauty 2026
          </Typography>
          <Box sx={{ display: "flex", gap: 1 }}>
            {["Visa", "MC", "PayPal", "Apple Pay"].map((m) => (
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
