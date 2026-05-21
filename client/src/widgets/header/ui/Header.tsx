// LUXE BEAUTY — Header (MUI AppBar + Drawer)
import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { ShoppingBag, Search, X } from "lucide-react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Drawer from "@mui/material/Drawer";
import { useCart } from "@/entities/cart";

const NAV_LINKS = [
  { href: "/", label: "Главная" },
  { href: "/products", label: "E-Boutique" },
  { href: "/services", label: "Процедуры" },
  { href: "/about", label: "О бренде" },
  { href: "/contact", label: "Наши адреса" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();
  const { totalItems } = useCart();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setMenuOpen(false); }, [location]);

  const isActive = (href: string) => location === href;

  return (
    <>
      <AppBar
        position="sticky"
        elevation={0}
        sx={{
          bgcolor: "#fff",
          borderBottom: `1px solid ${scrolled ? "#E8E5DF" : "#F0EEE9"}`,
        }}
      >
        <Container>
          <Toolbar disableGutters sx={{ height: { xs: 64, md: 80 }, justifyContent: "space-between" }}>
            {/* Mobile hamburger */}
            <IconButton
              onClick={() => setMenuOpen(true)}
              aria-label="Открыть меню"
              sx={{ display: { md: "none" } }}
            >
              <Box sx={{ display: "flex", flexDirection: "column", gap: 0.375 }}>
                {[0, 1, 2].map((i) => (
                  <Box key={i} sx={{ width: 20, height: 1, bgcolor: "#1C1B18" }} />
                ))}
              </Box>
            </IconButton>

            {/* Logo */}
            <Link href="/">
              <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", lineHeight: 1, gap: 0.25, cursor: "pointer" }}>
                <Typography sx={{ fontFamily: "'Nunito', sans-serif", fontWeight: 400, fontSize: "1.125rem", letterSpacing: "0.45em", textTransform: "uppercase", color: "#1C1B18" }}>
                  LUXE
                </Typography>
                <Typography sx={{ fontFamily: "'Nunito', sans-serif", fontWeight: 400, fontSize: "0.69rem", letterSpacing: "0.5em", textTransform: "uppercase", color: "#1C1B18" }}>
                  BEAUTY
                </Typography>
              </Box>
            </Link>

            {/* Desktop nav */}
            <Box sx={{ display: { xs: "none", md: "flex" }, gap: 4 }}>
              {NAV_LINKS.map((link) => (
                <Link key={link.href} href={link.href}>
                  <Typography
                    sx={{
                      fontFamily: "'Nunito', sans-serif",
                      fontWeight: 400,
                      fontSize: "0.65rem",
                      letterSpacing: "0.18em",
                      textTransform: "uppercase",
                      color: "#1C1B18",
                      opacity: isActive(link.href) ? 1 : 0.5,
                      transition: "opacity 0.2s",
                      "&:hover": { opacity: 1 },
                    }}
                  >
                    {link.label}
                  </Typography>
                </Link>
              ))}
            </Box>

            {/* Right icons */}
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <IconButton aria-label="Поиск" sx={{ color: "#1C1B18", "&:hover": { opacity: 0.5 } }}>
                <Search size={17} strokeWidth={1.5} />
              </IconButton>
              <Link href="/cart">
                <Box sx={{ position: "relative", color: "#1C1B18", "&:hover": { opacity: 0.5 }, cursor: "pointer" }}>
                  <ShoppingBag size={17} strokeWidth={1.5} />
                  {totalItems > 0 && (
                    <Box
                      sx={{
                        position: "absolute", top: -6, right: -6, minWidth: 16, height: 16, px: 0.375,
                        borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center",
                        bgcolor: "#0F1B3D", color: "#fff", fontFamily: "'Nunito', sans-serif", fontSize: "0.625rem",
                      }}
                    >
                      {totalItems > 99 ? "99+" : totalItems}
                    </Box>
                  )}
                </Box>
              </Link>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
        sx={{ display: { md: "none" } }}
        slotProps={{ paper: { sx: { width: "100%", bgcolor: "#fff" } } }}
      >
        <Container sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
          <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: 64 }}>
            <IconButton onClick={() => setMenuOpen(false)} sx={{ color: "#1C1B18" }}>
              <X size={18} strokeWidth={1.5} />
            </IconButton>
            <Link href="/">
              <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", lineHeight: 1, gap: 0.25 }}>
                <Typography sx={{ fontFamily: "'Nunito', sans-serif", fontWeight: 400, fontSize: "1.125rem", letterSpacing: "0.45em", color: "#1C1B18" }}>LUXE</Typography>
                <Typography sx={{ fontFamily: "'Nunito', sans-serif", fontWeight: 400, fontSize: "0.69rem", letterSpacing: "0.5em", color: "#1C1B18" }}>BEAUTY</Typography>
              </Box>
            </Link>
            <Box sx={{ width: 18 }} />
          </Box>

          {/* Nav links */}
          <Box sx={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center" }}>
            {NAV_LINKS.map((link) => (
              <Link key={link.href} href={link.href}>
                <Box
                  sx={{
                    py: 2, display: "flex", alignItems: "center", justifyContent: "space-between",
                    borderBottom: "1px solid #F0EEE9",
                    opacity: isActive(link.href) ? 1 : 0.55,
                    transition: "opacity 0.2s",
                    "&:hover": { opacity: 1 },
                  }}
                >
                  <Typography sx={{ fontFamily: "'Nunito', sans-serif", fontWeight: 400, fontSize: "0.72rem", letterSpacing: "0.25em", textTransform: "uppercase", color: "#1C1B18" }}>
                    {link.label}
                  </Typography>
                  <Typography sx={{ color: "#9A9690", fontSize: "0.825rem" }}>→</Typography>
                </Box>
              </Link>
            ))}
          </Box>

          {/* Drawer footer */}
          <Box sx={{ pb: 4 }}>
            <Typography sx={{ fontFamily: "'Nunito', sans-serif", fontWeight: 400, fontSize: "0.825rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#9A9690" }}>
              © 2026 Luxe Beauty
            </Typography>
          </Box>
        </Container>
      </Drawer>
    </>
  );
}
