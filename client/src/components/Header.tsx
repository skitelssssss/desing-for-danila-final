// LUXE BEAUTY — Header (Biologique Recherche style)
// White bg, centered logo, hamburger left, cart/search right
// Announcement bar: indigo bg, white uppercase text

import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { ShoppingBag, Search, X } from "lucide-react";

const NAV_LINKS = [
  { href: "/", label: "Главная" },
  { href: "/products", label: "E-Boutique" },
  { href: "/services", label: "Процедуры" },
  { href: "/booking", label: "Консультация" },
  { href: "/about", label: "О бренде" },
  { href: "/contact", label: "Наши адреса" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setMenuOpen(false); }, [location]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      {/* Announcement Bar */}
      <div
        className="text-center py-2.5 px-4"
        style={{
          background: "#2D2B6E",
          color: "#fff",
          fontFamily: "'Jost', sans-serif",
          fontWeight: 400,
          fontSize: "0.62rem",
          letterSpacing: "0.18em",
          textTransform: "uppercase",
        }}
      >
        Бесплатная доставка при заказе от 5 000 ₽ &nbsp;•&nbsp; Персональная консультация специалиста
      </div>

      {/* Main Header */}
      <header
        className="sticky top-0 z-50 bg-white"
        style={{ borderBottom: scrolled ? "1px solid #E8E5DF" : "1px solid #F0EEE9" }}
      >
        <div className="container">
          <div className="flex items-center justify-between h-16 md:h-20">

            {/* Left: Hamburger */}
            <button
              onClick={() => setMenuOpen(true)}
              aria-label="Открыть меню"
              className="flex flex-col gap-1.5 p-1"
              style={{ background: "none", border: "none" }}
            >
              <span className="block w-5 h-px bg-[#1C1B18]" />
              <span className="block w-5 h-px bg-[#1C1B18]" />
              <span className="block w-5 h-px bg-[#1C1B18]" />
            </button>

            {/* Center: Logo */}
            <Link href="/">
              <div className="flex flex-col items-center leading-none select-none gap-0.5">
                <span
                  style={{
                    fontFamily: "'Jost', sans-serif",
                    fontWeight: 400,
                    fontSize: "0.9rem",
                    letterSpacing: "0.45em",
                    color: "#1C1B18",
                    textTransform: "uppercase",
                  }}
                >
                  LUXE
                </span>
                <span
                  style={{
                    fontFamily: "'Jost', sans-serif",
                    fontWeight: 300,
                    fontSize: "0.55rem",
                    letterSpacing: "0.5em",
                    color: "#1C1B18",
                    textTransform: "uppercase",
                  }}
                >
                  BEAUTY
                </span>
              </div>
            </Link>

            {/* Right: Search + Cart */}
            <div className="flex items-center gap-4">
              <button
                aria-label="Поиск"
                className="text-[#1C1B18] hover:opacity-50 transition-opacity"
                style={{ background: "none", border: "none" }}
              >
                <Search size={17} strokeWidth={1.5} />
              </button>
              <Link href="/products">
                <div className="relative text-[#1C1B18] hover:opacity-50 transition-opacity">
                  <ShoppingBag size={17} strokeWidth={1.5} />
                  <span
                    className="absolute -top-1.5 -right-1.5 w-4 h-4 rounded-full flex items-center justify-center text-white"
                    style={{
                      background: "#2D2B6E",
                      fontFamily: "'Jost', sans-serif",
                      fontSize: "0.5rem",
                    }}
                  >
                    0
                  </span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Full-screen Slide-in Menu */}
      <div
        className="fixed inset-0 z-[100] bg-white transition-transform duration-500 ease-in-out"
        style={{ transform: menuOpen ? "translateX(0)" : "translateX(-100%)" }}
      >
        <div className="container h-full flex flex-col">
          {/* Menu header row */}
          <div className="flex items-center justify-between h-16 md:h-20">
            <button
              onClick={() => setMenuOpen(false)}
              aria-label="Закрыть меню"
              className="text-[#1C1B18] hover:opacity-50 transition-opacity"
              style={{ background: "none", border: "none" }}
            >
              <X size={18} strokeWidth={1.5} />
            </button>
            <Link href="/">
              <div className="flex flex-col items-center leading-none gap-0.5">
                <span style={{ fontFamily: "'Jost', sans-serif", fontWeight: 400, fontSize: "0.9rem", letterSpacing: "0.45em", color: "#1C1B18" }}>LUXE</span>
                <span style={{ fontFamily: "'Jost', sans-serif", fontWeight: 300, fontSize: "0.55rem", letterSpacing: "0.5em", color: "#1C1B18" }}>BEAUTY</span>
              </div>
            </Link>
            <div style={{ width: 18 }} />
          </div>

          {/* Nav links */}
          <nav className="flex-1 flex flex-col justify-center">
            {NAV_LINKS.map((link, i) => (
              <Link key={link.href} href={link.href}>
                <div
                  className="py-4 flex items-center justify-between"
                  style={{
                    borderBottom: "1px solid #F0EEE9",
                    opacity: location === link.href ? 1 : 0.55,
                    transition: "opacity 0.2s",
                    animationDelay: `${i * 0.05}s`,
                  }}
                  onMouseEnter={e => (e.currentTarget.style.opacity = "1")}
                  onMouseLeave={e => (e.currentTarget.style.opacity = location === link.href ? "1" : "0.55")}
                >
                  <span
                    style={{
                      fontFamily: "'Jost', sans-serif",
                      fontWeight: 400,
                      fontSize: "0.65rem",
                      letterSpacing: "0.25em",
                      textTransform: "uppercase",
                      color: "#1C1B18",
                    }}
                  >
                    {link.label}
                  </span>
                  <span style={{ color: "#9A9690", fontSize: "0.75rem" }}>→</span>
                </div>
              </Link>
            ))}
          </nav>

          {/* Menu footer */}
          <div className="pb-8">
            <p
              style={{
                fontFamily: "'Jost', sans-serif",
                fontWeight: 300,
                fontSize: "0.6rem",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "#9A9690",
              }}
            >
              © 2026 Luxe Beauty
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
