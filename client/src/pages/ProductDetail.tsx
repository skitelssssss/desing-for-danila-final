// LUXE BEAUTY — Product Detail (Biologique Recherche style)
// White bg, clean product gallery, minimal tabs, related products grid

import { useState } from "react";
import { useParams, Link } from "wouter";
import { Star, ChevronLeft } from "lucide-react";
import { toast } from "sonner";
import { PRODUCTS } from "@/lib/data";

function Stars({ rating, size = 12 }: { rating: number; size?: number }) {
  return (
    <div className="flex gap-0.5">
      {[1,2,3,4,5].map((i) => (
        <Star key={i} size={size} className={i <= Math.round(rating) ? "text-[#1C1B18] fill-[#1C1B18]" : "text-[#D8D5CF]"} />
      ))}
    </div>
  );
}

const labelStyle: React.CSSProperties = {
  fontFamily: "'Jost', sans-serif",
  fontWeight: 400,
  fontSize: "0.6rem",
  letterSpacing: "0.22em",
  textTransform: "uppercase" as const,
  color: "#9A9690",
};

export default function ProductDetail() {
  const { id } = useParams<{ id: string }>();
  const product = PRODUCTS.find((p) => p.id === id) || PRODUCTS[0];
  const related = PRODUCTS.filter((p) => p.id !== product.id && p.category === product.category).slice(0, 4);
  const [activeImg, setActiveImg] = useState(0);
  const [activeTab, setActiveTab] = useState("description");
  const [qty, setQty] = useState(1);

  const images = [
    product.image,
    "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=800&q=80",
    "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=800&q=80",
  ];

  const TABS = [
    { id: "description", label: "Описание" },
    { id: "ingredients", label: "Состав" },
    { id: "how-to-use", label: "Применение" },
  ];

  return (
    <div style={{ background: "#F8F7F4", minHeight: "100vh" }}>

      {/* Breadcrumb */}
      <div style={{ background: "#fff", borderBottom: "1px solid #F0EEE9" }}>
        <div className="container py-4 flex items-center gap-3">
          <Link href="/products">
            <span className="flex items-center gap-1 hover:opacity-60 transition-opacity" style={labelStyle}>
              <ChevronLeft size={12} /> E-Boutique
            </span>
          </Link>
          <span style={{ ...labelStyle, color: "#D8D5CF" }}>/</span>
          <span style={labelStyle}>{product.name}</span>
        </div>
      </div>

      {/* Main product section */}
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">

          {/* Left: Image gallery */}
          <div>
            <div className="overflow-hidden mb-4" style={{ background: "#fff", aspectRatio: "1/1" }}>
              <img
                src={images[activeImg]}
                alt={product.name}
                className="w-full h-full object-cover"
                style={{ transition: "opacity 0.3s ease" }}
              />
            </div>
            <div className="flex gap-2">
              {images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImg(i)}
                  style={{
                    width: 72,
                    height: 72,
                    border: activeImg === i ? "1px solid #1C1B18" : "1px solid #E8E5DF",
                    padding: 2,
                    background: "#fff",
                    cursor: "pointer",
                    transition: "border-color 0.2s",
                  }}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Right: Product info */}
          <div className="flex flex-col">
            {product.badge && (
              <span style={{ ...labelStyle, marginBottom: "0.75rem" }}>{product.badge}</span>
            )}
            <h1 style={{ fontFamily: "'Jost', sans-serif", fontWeight: 300, fontSize: "clamp(1.1rem, 2.5vw, 1.6rem)", letterSpacing: "0.2em", textTransform: "uppercase", color: "#1C1B18", marginBottom: "0.5rem" }}>
              {product.name}
            </h1>
            <p style={{ fontFamily: "'Jost', sans-serif", fontWeight: 300, fontSize: "0.7rem", letterSpacing: "0.1em", color: "#9A9690", marginBottom: "1rem" }}>
              {product.category}
            </p>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-4">
              <Stars rating={product.rating} />
              <span style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.65rem", color: "#9A9690" }}>
                {product.rating.toFixed(1)} ({product.reviews || 0} отзывов)
              </span>
            </div>

            <div style={{ width: "100%", height: "1px", background: "#F0EEE9", marginBottom: "1.5rem" }} />

            {/* Price */}
            <div className="flex items-center gap-3 mb-6">
              <span style={{ fontFamily: "'Jost', sans-serif", fontWeight: 400, fontSize: "1.1rem", letterSpacing: "0.1em", color: "#1C1B18" }}>
                ₽{product.price}
              </span>
              {product.originalPrice && (
                <span style={{ fontFamily: "'Jost', sans-serif", fontWeight: 300, fontSize: "0.85rem", color: "#9A9690", textDecoration: "line-through" }}>
                  ₽{product.originalPrice}
                </span>
              )}
            </div>

            {/* Qty + Add to cart */}
            <div className="flex gap-3 mb-6">
              <div className="flex items-center" style={{ border: "1px solid #D8D5CF" }}>
                <button
                  onClick={() => setQty(Math.max(1, qty - 1))}
                  style={{ width: 40, height: 44, background: "none", border: "none", cursor: "pointer", fontFamily: "'Jost', sans-serif", fontSize: "1rem", color: "#1C1B18" }}
                >
                  −
                </button>
                <span style={{ fontFamily: "'Jost', sans-serif", fontWeight: 400, fontSize: "0.7rem", letterSpacing: "0.1em", color: "#1C1B18", width: 32, textAlign: "center" }}>
                  {qty}
                </span>
                <button
                  onClick={() => setQty(qty + 1)}
                  style={{ width: 40, height: 44, background: "none", border: "none", cursor: "pointer", fontFamily: "'Jost', sans-serif", fontSize: "1rem", color: "#1C1B18" }}
                >
                  +
                </button>
              </div>
              <button
                onClick={() => toast.success(`${product.name} добавлен в корзину`)}
                className="btn-br flex-1"
                style={{ fontSize: "0.6rem" }}
              >
                Добавить в корзину
              </button>
            </div>

            <Link href="/booking">
              <span className="btn-br block text-center" style={{ fontSize: "0.6rem" }}>Записаться на консультацию</span>
            </Link>

            <p style={{ fontFamily: "'Jost', sans-serif", fontWeight: 300, fontSize: "0.78rem", lineHeight: 1.9, color: "#6B6860", marginTop: "1.5rem" }}>
              {product.description}
            </p>

            {/* Meta */}
            <div style={{ borderTop: "1px solid #F0EEE9", paddingTop: "1.25rem", marginTop: "1.5rem" }}>
              {[
                { label: "Категория", value: product.category },
                { label: "Тип кожи", value: (product.skinType || []).join(", ") },
              ].map(({ label, value }) => (
                <div key={label} className="flex gap-4 mb-2">
                  <span style={{ ...labelStyle, minWidth: 100 }}>{label}:</span>
                  <span style={{ fontFamily: "'Jost', sans-serif", fontWeight: 300, fontSize: "0.7rem", color: "#1C1B18" }}>{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="mt-16">
          <div className="flex" style={{ borderBottom: "1px solid #E8E5DF" }}>
            {TABS.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                style={{
                  fontFamily: "'Jost', sans-serif",
                  fontWeight: 400,
                  fontSize: "0.6rem",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: activeTab === tab.id ? "#1C1B18" : "#9A9690",
                  background: "none",
                  border: "none",
                  borderBottom: activeTab === tab.id ? "1px solid #1C1B18" : "1px solid transparent",
                  padding: "0.875rem 1.5rem",
                  cursor: "pointer",
                  marginBottom: "-1px",
                  transition: "color 0.2s",
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>
          <div style={{ background: "#fff", padding: "2rem", maxWidth: 640 }}>
            {activeTab === "description" && (
              <p style={{ fontFamily: "'Jost', sans-serif", fontWeight: 300, fontSize: "0.8rem", lineHeight: 2, color: "#6B6860" }}>
                {product.description} Формула обогащена активными компонентами, которые работают синергетически для достижения видимых результатов уже после первого применения. Продукт прошёл дерматологическое тестирование и подходит для ежедневного использования.
              </p>
            )}
            {activeTab === "ingredients" && (
              <p style={{ fontFamily: "'Jost', sans-serif", fontWeight: 300, fontSize: "0.75rem", lineHeight: 2, color: "#6B6860" }}>
                Aqua, Glycerin, Niacinamide, Hyaluronic Acid, Retinol, Vitamin C, Peptides, Ceramides, Squalane, Allantoin, Panthenol, Tocopherol, Citric Acid, Sodium Hyaluronate.
              </p>
            )}
            {activeTab === "how-to-use" && (
              <p style={{ fontFamily: "'Jost', sans-serif", fontWeight: 300, fontSize: "0.8rem", lineHeight: 2, color: "#6B6860" }}>
                Нанесите небольшое количество средства на очищенную кожу лица утром и вечером. Распределите лёгкими массажными движениями от центра к периферии. Дайте впитаться перед нанесением следующего средства по уходу.
              </p>
            )}
          </div>
        </div>

        {/* Related products */}
        {related.length > 0 && (
          <div className="mt-16">
            <div className="text-center mb-10">
              <p style={{ fontFamily: "'Jost', sans-serif", fontWeight: 300, fontSize: "0.7rem", letterSpacing: "0.28em", textTransform: "uppercase", color: "#1C1B18" }}>
                Вам также понравится
              </p>
              <div style={{ width: "2rem", height: "1px", background: "#1C1B18", margin: "0.75rem auto 0" }} />
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {related.map((p) => (
                <Link key={p.id} href={`/products/${p.id}`}>
                  <div className="group" style={{ background: "#fff" }}>
                    <div className="overflow-hidden" style={{ aspectRatio: "3/4" }}>
                      <img
                        src={p.image}
                        alt={p.name}
                        className="w-full h-full object-cover"
                        style={{ transition: "transform 0.5s ease" }}
                        onMouseEnter={e => (e.currentTarget.style.transform = "scale(1.04)")}
                        onMouseLeave={e => (e.currentTarget.style.transform = "scale(1)")}
                      />
                    </div>
                    <div className="pt-4 pb-5 px-1 text-center">
                      <p style={{ fontFamily: "'Jost', sans-serif", fontWeight: 400, fontSize: "0.62rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "#1C1B18", marginBottom: "0.3rem" }}>
                        {p.name}
                      </p>
                      <p style={{ fontFamily: "'Jost', sans-serif", fontWeight: 300, fontSize: "0.65rem", color: "#9A9690" }}>
                        ₽{p.price}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
