// LUXE BEAUTY — Products Page (Biologique Recherche style)
// White bg, filter tabs at top, 4-col product grid, outlined buttons

import { useState, useRef, useEffect } from "react";
import { Link } from "wouter";
import { Star, ChevronDown } from "lucide-react";
import { toast } from "sonner";
import { PRODUCTS } from "@/lib/data";

const CATEGORIES = ["Все", "Сыворотки", "Увлажнение", "Очищение", "Уход за глазами", "Маски", "Тело", "Тоники"];
const SKIN_TYPES = ["Все", "Сухая", "Жирная", "Комбинированная", "Нормальная", "Чувствительная"];

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5 justify-center">
      {[1,2,3,4,5].map((i) => (
        <Star key={i} size={10} className={i <= Math.round(rating) ? "text-[#1C1B18] fill-[#1C1B18]" : "text-[#D8D5CF]"} />
      ))}
    </div>
  );
}

function ProductCard({ product }: { product: typeof PRODUCTS[0] }) {
  return (
    <div className="group" style={{ background: "#fff" }}>
      <div className="relative overflow-hidden" style={{ aspectRatio: "3/4" }}>
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
          style={{ transition: "transform 0.5s ease" }}
          onMouseEnter={e => (e.currentTarget.style.transform = "scale(1.04)")}
          onMouseLeave={e => (e.currentTarget.style.transform = "scale(1)")}
        />
        {product.badge && (
          <span
            className="absolute top-3 right-3"
            style={{
              fontFamily: "'Jost', sans-serif",
              fontWeight: 400,
              fontSize: "0.52rem",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "#1C1B18",
              background: "#F8F7F4",
              padding: "3px 8px",
            }}
          >
            {product.badge}
          </span>
        )}
        <div
          className="absolute bottom-0 left-0 right-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{ background: "#fff", padding: "0.75rem" }}
        >
          <button
            onClick={() => toast.success(`${product.name} добавлен в корзину`)}
            className="btn-br w-full py-2.5"
            style={{ fontSize: "0.56rem" }}
          >
            Добавить в корзину
          </button>
        </div>
      </div>
      <div className="pt-4 pb-5 px-1 text-center">
        <Link href={`/products/${product.id}`}>
          <p
            className="hover:opacity-50 transition-opacity"
            style={{
              fontFamily: "'Jost', sans-serif",
              fontWeight: 400,
              fontSize: "0.62rem",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "#1C1B18",
              marginBottom: "0.4rem",
            }}
          >
            {product.name}
          </p>
        </Link>
        <div className="flex justify-center gap-1 mb-2">
          <Stars rating={product.rating} />
          <span style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.58rem", color: "#9A9690" }}>
            {product.rating.toFixed(1)}
          </span>
        </div>
        <p style={{ fontFamily: "'Jost', sans-serif", fontWeight: 300, fontSize: "0.68rem", color: "#1C1B18" }}>
          {product.originalPrice && (
            <span style={{ textDecoration: "line-through", color: "#9A9690", marginRight: "0.4rem" }}>
              ₽{product.originalPrice}
            </span>
          )}
          ₽{product.price}
        </p>
      </div>
    </div>
  );
}

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState("Все");
  const [selectedSkinType, setSelectedSkinType] = useState("Все");
  const [maxPrice, setMaxPrice] = useState(50000);
  const [sortOpen, setSortOpen] = useState(false);
  const [sort, setSort] = useState("Рекомендуемые");
  const [page, setPage] = useState(1);
  const ITEMS_PER_PAGE = 8;

  const filtered = PRODUCTS.filter((p) => {
    const catMatch = selectedCategory === "Все" || p.category === selectedCategory;
    const skinMatch = selectedSkinType === "Все" || p.skinType?.includes(selectedSkinType);
    const priceMatch = p.price <= maxPrice;
    return catMatch && skinMatch && priceMatch;
  });

  const sorted = [...filtered].sort((a, b) => {
    if (sort === "Цена: по возрастанию") return a.price - b.price;
    if (sort === "Цена: по убыванию") return b.price - a.price;
    if (sort === "По рейтингу") return b.rating - a.rating;
    return 0;
  });

  const totalPages = Math.ceil(sorted.length / ITEMS_PER_PAGE);
  const paginated = sorted.slice((page - 1) * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE);

  useEffect(() => { setPage(1); }, [selectedCategory, selectedSkinType, maxPrice, sort]);

  const labelStyle: React.CSSProperties = {
    fontFamily: "'Jost', sans-serif",
    fontWeight: 400,
    fontSize: "0.6rem",
    letterSpacing: "0.22em",
    textTransform: "uppercase",
    color: "#9A9690",
  };

  return (
    <div style={{ background: "#F8F7F4", minHeight: "100vh" }}>

      {/* Page header */}
      <div className="text-center py-14" style={{ background: "#fff", borderBottom: "1px solid #F0EEE9" }}>
        <p style={{ ...labelStyle, marginBottom: "0.5rem" }}>Luxe Beauty</p>
        <h1 style={{ fontFamily: "'Jost', sans-serif", fontWeight: 200, fontSize: "clamp(1.2rem, 3vw, 1.8rem)", letterSpacing: "0.28em", textTransform: "uppercase", color: "#1C1B18" }}>
          E-Boutique
        </h1>
        <div style={{ width: "2rem", height: "1px", background: "#1C1B18", margin: "0.75rem auto 0" }} />
      </div>

      {/* Filter bar */}
      <div style={{ background: "#fff", borderBottom: "1px solid #F0EEE9" }}>
        <div className="container py-5">
          <div className="flex flex-wrap items-center gap-6">
            {/* Category filter */}
            <div className="flex items-center gap-2 flex-wrap">
              <span style={labelStyle}>Категория:</span>
              <div className="flex flex-wrap gap-2">
                {CATEGORIES.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    style={{
                      fontFamily: "'Jost', sans-serif",
                      fontWeight: 400,
                      fontSize: "0.58rem",
                      letterSpacing: "0.15em",
                      textTransform: "uppercase",
                      color: selectedCategory === cat ? "#fff" : "#1C1B18",
                      background: selectedCategory === cat ? "#1C1B18" : "transparent",
                      border: "1px solid #1C1B18",
                      padding: "4px 12px",
                      transition: "all 0.2s",
                      cursor: "pointer",
                    }}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-6 mt-4">
            {/* Skin type */}
            <div className="flex items-center gap-2 flex-wrap">
              <span style={labelStyle}>Тип кожи:</span>
              <div className="flex flex-wrap gap-2">
                {SKIN_TYPES.map((s) => (
                  <button
                    key={s}
                    onClick={() => setSelectedSkinType(s)}
                    style={{
                      fontFamily: "'Jost', sans-serif",
                      fontWeight: 400,
                      fontSize: "0.58rem",
                      letterSpacing: "0.15em",
                      textTransform: "uppercase",
                      color: selectedSkinType === s ? "#fff" : "#1C1B18",
                      background: selectedSkinType === s ? "#1C1B18" : "transparent",
                      border: "1px solid #1C1B18",
                      padding: "4px 12px",
                      transition: "all 0.2s",
                      cursor: "pointer",
                    }}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            {/* Sort */}
            <div className="relative ml-auto">
              <button
                onClick={() => setSortOpen(!sortOpen)}
                className="flex items-center gap-2"
                style={{
                  fontFamily: "'Jost', sans-serif",
                  fontWeight: 400,
                  fontSize: "0.58rem",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: "#1C1B18",
                  background: "none",
                  border: "1px solid #D8D5CF",
                  padding: "5px 12px",
                  cursor: "pointer",
                }}
              >
                {sort}
                <ChevronDown size={12} />
              </button>
              {sortOpen && (
                <div
                  className="absolute right-0 top-full mt-1 z-20"
                  style={{ background: "#fff", border: "1px solid #E8E5DF", minWidth: 200 }}
                >
                  {["Рекомендуемые", "Цена: по возрастанию", "Цена: по убыванию", "По рейтингу"].map((s) => (
                    <button
                      key={s}
                      onClick={() => { setSort(s); setSortOpen(false); }}
                      className="block w-full text-left px-4 py-2.5 hover:bg-[#F8F7F4] transition-colors"
                      style={{
                        fontFamily: "'Jost', sans-serif",
                        fontWeight: 300,
                        fontSize: "0.65rem",
                        letterSpacing: "0.1em",
                        color: "#1C1B18",
                        background: "none",
                        border: "none",
                        cursor: "pointer",
                      }}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          <p style={{ ...labelStyle, marginTop: "1rem" }}>
            {filtered.length} продуктов
          </p>
        </div>
      </div>

      {/* Product grid */}
      <div className="container py-12">
        {paginated.length === 0 ? (
          <div className="text-center py-24">
            <p style={{ fontFamily: "'Jost', sans-serif", fontWeight: 300, fontSize: "0.75rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#9A9690" }}>
              Продукты не найдены
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {paginated.map((p) => <ProductCard key={p.id} product={p} />)}
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center gap-2 mt-14">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
              <button
                key={n}
                onClick={() => setPage(n)}
                style={{
                  fontFamily: "'Jost', sans-serif",
                  fontWeight: 400,
                  fontSize: "0.6rem",
                  letterSpacing: "0.15em",
                  color: page === n ? "#fff" : "#1C1B18",
                  background: page === n ? "#1C1B18" : "transparent",
                  border: "1px solid #1C1B18",
                  width: 36,
                  height: 36,
                  cursor: "pointer",
                  transition: "all 0.2s",
                }}
              >
                {n}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
