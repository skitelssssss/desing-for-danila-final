// L'ART DE LA BEAUTÉ — Header (MUI AppBar)
import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "wouter";
import { ShoppingBag, ChevronDown } from "lucide-react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useCart } from "@/entities/cart";

const NAV_LINKS = [
  { href: "/", label: "Главная" },
  { href: "/products", label: "E-Boutique" },
  { href: "/services", label: "Процедуры" },
  { href: "/about", label: "О бренде" },
  { href: "/contact", label: "Контакты" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [location] = useLocation();
  const { totalItems } = useCart();
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setMenuOpen(false); }, [location]);

  useEffect(() => {
    if (!menuOpen) return;
    const onClick = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [menuOpen]);

  const isActive = (href: string) => location === href;
  const currentLabel = NAV_LINKS.find((l) => l.href === location)?.label ?? "Главная";

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
        <Container disableGutters sx={{ position: "relative", px: { xs: 2, md: 4 } }}>
          <Toolbar disableGutters sx={{ height: { xs: 64, md: 80 }, justifyContent: "space-between" }}>
            {/* Mobile custom dropdown */}
            <Box ref={menuRef} sx={{ display: { xs: "block", md: "none" }, position: "relative" }}>
              <Box
                component="button"
                onClick={() => setMenuOpen((v) => !v)}
                aria-haspopup="listbox"
                aria-expanded={menuOpen}
                aria-label="Меню"
                sx={{
                  display: "flex", alignItems: "center", gap: 1.25,
                  fontFamily: "'Nunito', sans-serif",
                  fontWeight: 400,
                  fontSize: "0.65rem",
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: "#1C1B18",
                  bgcolor: "transparent",
                  border: "1px solid #E8E5DF",
                  borderRadius: 999,
                  py: 0.85,
                  pl: 1.75,
                  pr: 1.25,
                  cursor: "pointer",
                  outline: "none",
                  transition: "border-color 0.25s ease, background 0.25s ease",
                  "&:hover": { borderColor: "#1C1B18" },
                  "&:focus-visible": { borderColor: "#1C1B18" },
                }}
              >
                <Box component="span" sx={{ whiteSpace: "nowrap" }}>{currentLabel}</Box>
                <ChevronDown
                  size={14}
                  strokeWidth={1.5}
                  style={{
                    transition: "transform 0.3s ease",
                    transform: menuOpen ? "rotate(180deg)" : "rotate(0deg)",
                  }}
                />
              </Box>

              <Box
                role="listbox"
                sx={{
                  position: "absolute",
                  top: "calc(100% + 10px)",
                  left: 0,
                  minWidth: 240,
                  bgcolor: "#fff",
                  border: "1px solid #E8E5DF",
                  boxShadow: "0 16px 48px rgba(28,27,24,0.10)",
                  opacity: menuOpen ? 1 : 0,
                  transform: menuOpen ? "translateY(0) scale(1)" : "translateY(-6px) scale(0.98)",
                  transformOrigin: "top left",
                  pointerEvents: menuOpen ? "auto" : "none",
                  transition: "opacity 0.22s ease, transform 0.22s ease",
                  zIndex: 20,
                  overflow: "hidden",
                }}
              >
                {NAV_LINKS.map((link, idx) => {
                  const active = isActive(link.href);
                  return (
                    <Link key={link.href} href={link.href}>
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          gap: 2,
                          px: 2.25,
                          py: 1.5,
                          borderBottom: idx < NAV_LINKS.length - 1 ? "1px solid #F0EEE9" : "none",
                          bgcolor: active ? "#F8F7F4" : "transparent",
                          cursor: "pointer",
                          transition: "background 0.2s ease, padding-left 0.2s ease",
                          "&:hover": { bgcolor: "#F8F7F4", pl: 2.75 },
                          "&:hover .menu-arrow": { opacity: 1, transform: "translateX(0)" },
                        }}
                      >
                        <Typography
                          sx={{
                            fontFamily: "'Nunito', sans-serif",
                            fontWeight: active ? 500 : 400,
                            fontSize: "0.7rem",
                            letterSpacing: "0.2em",
                            textTransform: "uppercase",
                            color: "#1C1B18",
                          }}
                        >
                          {link.label}
                        </Typography>
                        <Box
                          className="menu-arrow"
                          component="span"
                          sx={{
                            color: "#9A9690",
                            fontSize: "0.85rem",
                            opacity: active ? 1 : 0,
                            transform: active ? "translateX(0)" : "translateX(-4px)",
                            transition: "opacity 0.2s ease, transform 0.2s ease",
                          }}
                        >
                          →
                        </Box>
                      </Box>
                    </Link>
                  );
                })}
              </Box>
            </Box>

            {/* Logo */}
            <Link href="/">
              <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", lineHeight: 1, gap: 0.25, cursor: "pointer" }}>
                <Typography sx={{ fontFamily: "'Nunito', sans-serif", fontWeight: 400, fontSize: "0.95rem", letterSpacing: "0.32em", textTransform: "uppercase", color: "#1C1B18" }}>
                  L'Art de la
                </Typography>
                <Typography sx={{ fontFamily: "'Nunito', sans-serif", fontWeight: 400, fontSize: "0.95rem", letterSpacing: "0.32em", textTransform: "uppercase", color: "#1C1B18" }}>
                  Beauté
                </Typography>
              </Box>
            </Link>

            {/* Desktop nav — centered */}
            <Box sx={{ position: "absolute", left: "50%", top: "50%", transform: "translate(-50%, -50%)", display: { xs: "none", md: "flex" }, gap: 4 }}>
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
    </>
  );
}
