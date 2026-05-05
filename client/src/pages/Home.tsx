// LUXE BEAUTY — Home Page (Biologique Recherche style)
// White/off-white bg, uppercase tracking labels, centered sections,
// 4-col product grids, split editorial sections, outlined buttons

import { useState, useEffect, useRef } from "react";
import { Link } from "wouter";
import { Star } from "lucide-react";
import { toast } from "sonner";
import { useForm } from "react-hook-form";
import { PRODUCTS, SERVICES } from "@/lib/data";

function useInView(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold });
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5 justify-center">
      {[1,2,3,4,5].map((i) => (
        <Star key={i} size={10} className={i <= Math.round(rating) ? "text-[#1C1B18] fill-[#1C1B18]" : "text-[#D8D5CF]"} />
      ))}
    </div>
  );
}

interface NewsletterForm { email: string; }

// Section heading component matching BR style
function SectionHeading({ label, title }: { label?: string; title: string }) {
  return (
    <div className="text-center mb-10">
      {label && (
        <p style={{ fontFamily: "'Jost', sans-serif", fontWeight: 400, fontSize: "0.62rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "#9A9690", marginBottom: "0.5rem" }}>
          {label}
        </p>
      )}
      <p style={{ fontFamily: "'Jost', sans-serif", fontWeight: 300, fontSize: "0.72rem", letterSpacing: "0.28em", textTransform: "uppercase", color: "#1C1B18" }}>
        {title}
      </p>
      <div style={{ width: "2rem", height: "1px", background: "#1C1B18", margin: "0.75rem auto 0" }} />
    </div>
  );
}

// Product card matching BR style: white bg, product image, name, rating, price
function ProductCard({ product }: { product: typeof PRODUCTS[0] }) {
  return (
    <div className="group" style={{ background: "#fff" }}>
      <div className="relative overflow-hidden" style={{ aspectRatio: "3/4" }}>
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-103"
          style={{ transition: "transform 0.5s ease" }}
        />
        {product.badge && (
          <span
            className="absolute top-3 right-3"
            style={{
              fontFamily: "'Jost', sans-serif",
              fontWeight: 400,
              fontSize: "0.55rem",
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
        {/* Add to cart overlay */}
        <div
          className="absolute bottom-0 left-0 right-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{ background: "#fff", padding: "0.75rem" }}
        >
          <button
            onClick={() => toast.success(`${product.name} добавлен в корзину`)}
            className="btn-br w-full py-2.5"
            style={{ fontSize: "0.58rem" }}
          >
            Добавить в корзину
          </button>
        </div>
      </div>
      <div className="pt-4 pb-5 px-1 text-center">
        <Link href={`/products/${product.id}`}>
          <p
            className="hover:opacity-60 transition-opacity"
            style={{
              fontFamily: "'Jost', sans-serif",
              fontWeight: 400,
              fontSize: "0.65rem",
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
          <span style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.6rem", color: "#9A9690" }}>
            {product.rating.toFixed(1)}
          </span>
        </div>
        <p style={{ fontFamily: "'Jost', sans-serif", fontWeight: 300, fontSize: "0.7rem", color: "#1C1B18" }}>
          {product.originalPrice && (
            <span style={{ textDecoration: "line-through", color: "#9A9690", marginRight: "0.5rem" }}>
              ₽{product.originalPrice}
            </span>
          )}
          ₽{product.price}
        </p>
      </div>
    </div>
  );
}

export default function Home() {
  const heroRef = useInView();
  const iconsRef = useInView();
  const featuredRef = useInView();
  const giftsRef = useInView();
  const consultRef = useInView();
  const newRef = useInView();
  const categoryRef = useInView();

  const { register, handleSubmit, reset } = useForm<NewsletterForm>();
  const onNewsletter = (data: NewsletterForm) => {
    toast.success("Спасибо! Вы подписаны на новости.");
    reset();
  };

  const iconProducts = PRODUCTS.slice(0, 4);
  const giftProducts = PRODUCTS.slice(4, 8);
  const newProducts = PRODUCTS.slice(2, 6);
  const featuredProduct = PRODUCTS[0];

  const CATEGORIES = [
    { label: "Уход за лицом", count: "24 продукта", img: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&q=80" },
    { label: "Уход за телом", count: "12 продуктов", img: "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=600&q=80" },
    { label: "Уход за волосами", count: "8 продуктов", img: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&q=80" },
  ];

  return (
    <div style={{ background: "#F8F7F4" }}>

      {/* ══════════════════════════════════════════
          HERO — Full-bleed product close-up
      ══════════════════════════════════════════ */}
      <section className="relative" style={{ height: "90vh", minHeight: 520 }}>
        <img
          src="https://d2xsxph8kpxj0f.cloudfront.net/310519663629565245/cKdWGd7QzMhdUfJyAzyKXk/hero-main-hcES4xd72vwVH22ebB7tuq.webp"
          alt="Hero"
          className="w-full h-full object-cover"
        />
        {/* Minimal text overlay — bottom left */}
        <div
          ref={heroRef.ref}
          className={`absolute bottom-0 left-0 right-0 transition-all duration-1000 ${heroRef.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          style={{ background: "linear-gradient(to top, rgba(248,247,244,0.95) 0%, transparent 100%)", padding: "4rem 0 3rem" }}
        >
          <div className="container">
            <div className="max-w-xl">
              <p style={{ fontFamily: "'Jost', sans-serif", fontWeight: 400, fontSize: "0.6rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "#9A9690", marginBottom: "0.5rem" }}>
                Новая коллекция
              </p>
              <h1 style={{ fontFamily: "'Jost', sans-serif", fontWeight: 200, fontSize: "clamp(1.6rem, 4vw, 2.8rem)", letterSpacing: "0.15em", textTransform: "uppercase", color: "#1C1B18", lineHeight: 1.2, marginBottom: "1.5rem" }}>
                Искусство<br />ухода за кожей
              </h1>
              <Link href="/products">
                <span className="btn-br" style={{ fontSize: "0.6rem" }}>Открыть коллекцию</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          SPLIT PROMO — Gift selection
      ══════════════════════════════════════════ */}
      <section style={{ background: "#fff" }}>
        <div className="grid grid-cols-1 md:grid-cols-2" style={{ minHeight: 420 }}>
          <div className="overflow-hidden" style={{ maxHeight: 480 }}>
            <img
              src="https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=900&q=80"
              alt="Подборка подарков"
              className="w-full h-full object-cover"
              style={{ transition: "transform 0.6s ease" }}
              onMouseEnter={e => (e.currentTarget.style.transform = "scale(1.03)")}
              onMouseLeave={e => (e.currentTarget.style.transform = "scale(1)")}
            />
          </div>
          <div className="flex flex-col items-center justify-center text-center px-12 py-16" style={{ background: "#F8F7F4" }}>
            <p style={{ fontFamily: "'Jost', sans-serif", fontWeight: 400, fontSize: "0.6rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "#9A9690", marginBottom: "0.75rem" }}>
              Специальное предложение
            </p>
            <h2 style={{ fontFamily: "'Jost', sans-serif", fontWeight: 200, fontSize: "clamp(1.2rem, 2.5vw, 1.8rem)", letterSpacing: "0.18em", textTransform: "uppercase", color: "#1C1B18", lineHeight: 1.4, marginBottom: "0.75rem" }}>
              Подборка подарков
            </h2>
            <div style={{ width: "2rem", height: "1px", background: "#1C1B18", margin: "0 auto 1.5rem" }} />
            <p style={{ fontFamily: "'Jost', sans-serif", fontWeight: 300, fontSize: "0.8rem", lineHeight: 1.9, color: "#6B6860", maxWidth: 340, marginBottom: "2rem" }}>
              Подарите близким заметное преображение с нашей эксклюзивной подборкой, созданной специально для неё.
            </p>
            <Link href="/products">
              <span className="btn-br" style={{ fontSize: "0.6rem" }}>Открыть коллекцию</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          THE ICONS — 4-col product grid
      ══════════════════════════════════════════ */}
      <section style={{ background: "#F8F7F4", padding: "5rem 0" }}>
        <div className="container">
          <div ref={iconsRef.ref} className={`transition-all duration-1000 ${iconsRef.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <SectionHeading title="Иконы коллекции" />
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {iconProducts.map((p) => <ProductCard key={p.id} product={p} />)}
            </div>
            <div className="text-center mt-10">
              <Link href="/products">
                <span className="btn-br" style={{ fontSize: "0.6rem" }}>Просмотреть все</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          FEATURED PRODUCT — Split editorial
      ══════════════════════════════════════════ */}
      <section style={{ background: "#fff" }}>
        <div
          ref={featuredRef.ref}
          className={`grid grid-cols-1 md:grid-cols-2 transition-all duration-1000 ${featuredRef.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          style={{ minHeight: 560 }}
        >
          {/* Text side */}
          <div className="flex flex-col items-center justify-center text-center px-12 py-16 order-2 md:order-1">
            <p style={{ fontFamily: "'Jost', sans-serif", fontWeight: 400, fontSize: "0.6rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "#9A9690", marginBottom: "0.75rem" }}>
              Вдохновлён наукой
            </p>
            <h2 style={{ fontFamily: "'Jost', sans-serif", fontWeight: 200, fontSize: "clamp(1.2rem, 2.5vw, 1.8rem)", letterSpacing: "0.18em", textTransform: "uppercase", color: "#1C1B18", lineHeight: 1.4, marginBottom: "0.75rem" }}>
              {featuredProduct.name}
            </h2>
            <div style={{ width: "2rem", height: "1px", background: "#1C1B18", margin: "0 auto 1.5rem" }} />
            <p style={{ fontFamily: "'Jost', sans-serif", fontWeight: 300, fontSize: "0.8rem", lineHeight: 1.9, color: "#6B6860", maxWidth: 360, marginBottom: "2rem" }}>
              {featuredProduct.description}
            </p>
            <Link href={`/products/${featuredProduct.id}`}>
              <span className="btn-br" style={{ fontSize: "0.6rem" }}>Открыть продукт</span>
            </Link>
          </div>
          {/* Image side */}
          <div className="overflow-hidden order-1 md:order-2" style={{ minHeight: 400 }}>
            <img
              src={featuredProduct.image}
              alt={featuredProduct.name}
              className="w-full h-full object-cover"
              style={{ transition: "transform 0.6s ease" }}
              onMouseEnter={e => (e.currentTarget.style.transform = "scale(1.03)")}
              onMouseLeave={e => (e.currentTarget.style.transform = "scale(1)")}
            />
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          GIFT SELECTION — 4-col grid
      ══════════════════════════════════════════ */}
      <section style={{ background: "#F8F7F4", padding: "5rem 0" }}>
        <div className="container">
          <div ref={giftsRef.ref} className={`transition-all duration-1000 ${giftsRef.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <SectionHeading title="Подборка подарков" />
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {giftProducts.map((p) => <ProductCard key={p.id} product={p} />)}
            </div>
            <div className="text-center mt-10">
              <Link href="/products">
                <span className="btn-br" style={{ fontSize: "0.6rem" }}>Просмотреть все</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          CONSULTATION — Split section
      ══════════════════════════════════════════ */}
      <section style={{ background: "#fff" }}>
        <div
          ref={consultRef.ref}
          className={`grid grid-cols-1 md:grid-cols-2 transition-all duration-1000 ${consultRef.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          style={{ minHeight: 520 }}
        >
          {/* Photo */}
          <div className="overflow-hidden" style={{ minHeight: 400 }}>
            <img
              src="https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=900&q=80"
              alt="Консультация"
              className="w-full h-full object-cover"
            />
          </div>
          {/* Text */}
          <div className="flex flex-col items-center justify-center text-center px-12 py-16">
            <p style={{ fontFamily: "'Jost', sans-serif", fontWeight: 400, fontSize: "0.6rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "#9A9690", marginBottom: "0.75rem" }}>
              Онлайн-консультация
            </p>
            <h2 style={{ fontFamily: "'Jost', sans-serif", fontWeight: 200, fontSize: "clamp(1.2rem, 2.5vw, 1.8rem)", letterSpacing: "0.18em", textTransform: "uppercase", color: "#1C1B18", lineHeight: 1.4, marginBottom: "0.75rem" }}>
              Персональный анализ кожи
            </h2>
            <div style={{ width: "2rem", height: "1px", background: "#1C1B18", margin: "0 auto 1.5rem" }} />
            <p style={{ fontFamily: "'Jost', sans-serif", fontWeight: 300, fontSize: "0.8rem", lineHeight: 1.9, color: "#6B6860", maxWidth: 360, marginBottom: "2rem" }}>
              Чтобы помочь вам подобрать наиболее подходящие средства, мы предлагаем индивидуальный анализ кожи с одним из наших экспертов.
            </p>
            <Link href="/booking">
              <span className="btn-br" style={{ fontSize: "0.6rem" }}>Записаться на консультацию</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          NEW PRODUCTS — 4-col grid
      ══════════════════════════════════════════ */}
      <section style={{ background: "#F8F7F4", padding: "5rem 0" }}>
        <div className="container">
          <div ref={newRef.ref} className={`transition-all duration-1000 ${newRef.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <SectionHeading title="Новые продукты" />
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {newProducts.map((p) => <ProductCard key={p.id} product={p} />)}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          SERVICES SPLIT — Featured service
      ══════════════════════════════════════════ */}
      <section style={{ background: "#fff" }}>
        <div className="grid grid-cols-1 md:grid-cols-2" style={{ minHeight: 480 }}>
          <div className="flex flex-col items-center justify-center text-center px-12 py-16">
            <p style={{ fontFamily: "'Jost', sans-serif", fontWeight: 400, fontSize: "0.6rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "#9A9690", marginBottom: "0.75rem" }}>
              Наши процедуры
            </p>
            <h2 style={{ fontFamily: "'Jost', sans-serif", fontWeight: 200, fontSize: "clamp(1.2rem, 2.5vw, 1.8rem)", letterSpacing: "0.18em", textTransform: "uppercase", color: "#1C1B18", lineHeight: 1.4, marginBottom: "0.75rem" }}>
              {SERVICES[0]?.name}
            </h2>
            <div style={{ width: "2rem", height: "1px", background: "#1C1B18", margin: "0 auto 1.5rem" }} />
            <p style={{ fontFamily: "'Jost', sans-serif", fontWeight: 300, fontSize: "0.8rem", lineHeight: 1.9, color: "#6B6860", maxWidth: 360, marginBottom: "2rem" }}>
              {SERVICES[0]?.longDescription}
            </p>
            <Link href="/services">
              <span className="btn-br" style={{ fontSize: "0.6rem" }}>Все процедуры</span>
            </Link>
          </div>
          <div className="overflow-hidden" style={{ minHeight: 400 }}>
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663629565245/cKdWGd7QzMhdUfJyAzyKXk/services-hero-53aghyVLkgbZBEayuf9kQi.webp"
              alt="Процедуры"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          CATEGORY CARDS — 3 columns, B&W photo
      ══════════════════════════════════════════ */}
      <section style={{ background: "#F8F7F4", padding: "5rem 0" }}>
        <div className="container">
          <div ref={categoryRef.ref} className={`transition-all duration-1000 ${categoryRef.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {CATEGORIES.map((cat) => (
                <Link key={cat.label} href="/products">
                  <div className="relative overflow-hidden group" style={{ aspectRatio: "4/5" }}>
                    <img
                      src={cat.img}
                      alt={cat.label}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      style={{ filter: "grayscale(30%)" }}
                    />
                    <div
                      className="absolute inset-0 flex flex-col items-center justify-end pb-8"
                      style={{ background: "linear-gradient(to top, rgba(28,27,24,0.65) 0%, transparent 60%)" }}
                    >
                      <p style={{ fontFamily: "'Jost', sans-serif", fontWeight: 400, fontSize: "0.55rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,0.7)", marginBottom: "0.4rem" }}>
                        {cat.count}
                      </p>
                      <p style={{ fontFamily: "'Jost', sans-serif", fontWeight: 300, fontSize: "0.85rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#fff" }}>
                        {cat.label}
                      </p>
                      <p style={{ fontFamily: "'Jost', sans-serif", fontWeight: 400, fontSize: "0.55rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,0.7)", marginTop: "0.5rem" }}>
                        Посмотреть коллекцию →
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          NEWSLETTER
      ══════════════════════════════════════════ */}
      <section style={{ background: "#2D2B6E", padding: "5rem 0" }}>
        <div className="container text-center max-w-xl">
          <p style={{ fontFamily: "'Jost', sans-serif", fontWeight: 400, fontSize: "0.6rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "rgba(255,255,255,0.5)", marginBottom: "0.75rem" }}>
            Будьте в курсе
          </p>
          <h2 style={{ fontFamily: "'Jost', sans-serif", fontWeight: 200, fontSize: "clamp(1.2rem, 2.5vw, 1.6rem)", letterSpacing: "0.2em", textTransform: "uppercase", color: "#fff", marginBottom: "0.75rem" }}>
            Подпишитесь на новости
          </h2>
          <div style={{ width: "2rem", height: "1px", background: "rgba(255,255,255,0.4)", margin: "0 auto 1.5rem" }} />
          <p style={{ fontFamily: "'Jost', sans-serif", fontWeight: 300, fontSize: "0.78rem", lineHeight: 1.9, color: "rgba(255,255,255,0.6)", marginBottom: "2rem" }}>
            Получайте первыми информацию о новых продуктах, эксклюзивных предложениях и советах по уходу за кожей.
          </p>
          <form onSubmit={handleSubmit(onNewsletter)} className="flex gap-0 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Ваш email"
              {...register("email", { required: true })}
              style={{
                flex: 1,
                background: "rgba(255,255,255,0.08)",
                border: "1px solid rgba(255,255,255,0.25)",
                borderRight: "none",
                padding: "0.875rem 1rem",
                color: "#fff",
                fontFamily: "'Jost', sans-serif",
                fontWeight: 300,
                fontSize: "0.75rem",
                outline: "none",
              }}
              className="placeholder-white/30"
            />
            <button
              type="submit"
              className="btn-br-white"
              style={{ fontSize: "0.58rem", whiteSpace: "nowrap", flexShrink: 0 }}
            >
              Подписаться
            </button>
          </form>
        </div>
      </section>

    </div>
  );
}
