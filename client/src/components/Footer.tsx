// LUXE BEAUTY — Footer (Biologique Recherche style)
// Deep indigo background, 3-column layout, white text

import { Link } from "wouter";
import { Instagram, Facebook, Youtube } from "lucide-react";

const MAIN_MENU = [
  { label: "Главная", href: "/" },
  { label: "E-Boutique", href: "/products" },
  { label: "Процедуры", href: "/services" },
  { label: "Консультация", href: "/booking" },
  { label: "О бренде", href: "/about" },
  { label: "Наши адреса", href: "/contact" },
];

const INFO_LINKS = [
  "Политика конфиденциальности",
  "Политика возврата",
  "Политика доставки",
  "Условия обслуживания",
  "Правовое уведомление",
];

const colLabelStyle: React.CSSProperties = {
  fontFamily: "'Jost', sans-serif",
  fontWeight: 400,
  fontSize: "0.6rem",
  letterSpacing: "0.22em",
  textTransform: "uppercase" as const,
  color: "rgba(255,255,255,0.45)",
  marginBottom: "1.25rem",
  display: "block",
};

const linkStyle: React.CSSProperties = {
  fontFamily: "'Jost', sans-serif",
  fontWeight: 300,
  fontSize: "0.68rem",
  letterSpacing: "0.1em",
  textTransform: "uppercase" as const,
  color: "rgba(255,255,255,0.65)",
  textDecoration: "none",
  display: "block",
  marginBottom: "0.6rem",
  transition: "color 0.2s",
};

export default function Footer() {
  return (
    <footer style={{ background: "#2D2B6E" }}>
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

          {/* Column 1: Main Menu */}
          <div>
            <span style={colLabelStyle}>Главное меню</span>
            {MAIN_MENU.map((item) => (
              <Link key={item.href} href={item.href}>
                <span
                  style={linkStyle}
                  onMouseEnter={e => (e.currentTarget.style.color = "#fff")}
                  onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.65)")}
                >
                  {item.label}
                </span>
              </Link>
            ))}
          </div>

          {/* Column 2: About */}
          <div>
            <span style={colLabelStyle}>О нас</span>
            <p
              style={{
                fontFamily: "'Jost', sans-serif",
                fontWeight: 300,
                fontSize: "0.75rem",
                lineHeight: 1.9,
                color: "rgba(255,255,255,0.6)",
                marginBottom: "1.25rem",
              }}
            >
              Luxe Beauty — бутик премиальной косметики и профессиональных процедур по уходу за кожей. Индивидуальный подход и продукты высочайшего качества.
            </p>
            <p
              style={{
                fontFamily: "'Jost', sans-serif",
                fontWeight: 300,
                fontSize: "0.65rem",
                letterSpacing: "0.08em",
                color: "rgba(255,255,255,0.4)",
              }}
            >
              12 Тверская ул., Москва, Россия
            </p>
            <div className="flex gap-4 mt-6">
              {[Instagram, Facebook, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="text-white/40 hover:text-white transition-colors"
                >
                  <Icon size={15} strokeWidth={1.5} />
                </a>
              ))}
            </div>
          </div>

          {/* Column 3: Info */}
          <div>
            <span style={colLabelStyle}>Информация</span>
            {INFO_LINKS.map((item) => (
              <a
                key={item}
                href="#"
                style={linkStyle}
                onMouseEnter={e => (e.currentTarget.style.color = "#fff")}
                onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.65)")}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}
        className="container py-5 flex flex-col sm:flex-row items-center justify-between gap-3"
      >
        <p
          style={{
            fontFamily: "'Jost', sans-serif",
            fontWeight: 300,
            fontSize: "0.58rem",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.35)",
          }}
        >
          © Luxe Beauty 2026
        </p>
        <div className="flex gap-2">
          {["Visa", "MC", "PayPal", "Apple Pay"].map((m) => (
            <span
              key={m}
              style={{
                fontFamily: "'Jost', sans-serif",
                fontSize: "0.52rem",
                letterSpacing: "0.08em",
                color: "rgba(255,255,255,0.4)",
                border: "1px solid rgba(255,255,255,0.15)",
                padding: "2px 6px",
              }}
            >
              {m}
            </span>
          ))}
        </div>
      </div>
    </footer>
  );
}
