// L'ART DE LA BEAUTÉ — Product Detail (MUI)
import { useState } from "react";
import { useParams, Link } from "wouter";
import { ChevronLeft } from "lucide-react";
import { toast } from "sonner";
import { StarRating } from "@/features/star-rating/ui/StarRating";
import { formatPrice } from "@/shared/lib/formatPrice";
import { CTA } from "@/widgets/cta/ui/CTA";
import { PRODUCTS } from "@/entities/product";
import { useCart } from "@/entities/cart";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";

const labelSx = { fontFamily: "'Nunito', sans-serif", fontWeight: 400, fontSize: "0.825rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "#9A9690" };

export default function ProductDetail() {
  const { id } = useParams<{ id: string }>();
  const product = PRODUCTS.find((p) => p.id === id) || PRODUCTS[0];
  const related = PRODUCTS.filter((p) => p.id !== product.id && p.category === product.category).slice(0, 4);
  const [activeImg, setActiveImg] = useState(0);
  const [activeTab, setActiveTab] = useState("description");
  const [qty, setQty] = useState(1);
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({ id: product.id, name: product.name, price: product.price, image: product.image }, qty);
    toast.success(`${product.name} добавлен в корзину`);
  };

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
    <Box sx={{ bgcolor: "#F8F7F4", minHeight: "100vh" }}>
      {/* Breadcrumb */}
      <Box sx={{ bgcolor: "#fff" }}>
        <Container sx={{ py: 2 }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
            <Link href="/products">
              <Typography sx={{ ...labelSx, display: "flex", alignItems: "center", gap: 0.5, "&:hover": { opacity: 0.6 }, cursor: "pointer" }}>
                <ChevronLeft size={12} /> E-Boutique
              </Typography>
            </Link>
            <Typography sx={{ ...labelSx, color: "#D8D5CF" }}>/</Typography>
            <Typography sx={labelSx}>{product.name}</Typography>
          </Box>
        </Container>
      </Box>

      {/* Main product section */}
      <Container sx={{ py: 6 }}>
        <Grid container spacing={6}>
          {/* Left: Image gallery */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Box sx={{ overflow: "hidden", mb: 2, bgcolor: "#fff", aspectRatio: "1/1" }}>
              <img src={images[activeImg]} alt={product.name} style={{ width: "100%", height: "100%", objectFit: "cover", transition: "opacity 0.3s ease" }} />
            </Box>
            <Box sx={{ display: "flex", gap: 1 }}>
              {images.map((img, i) => (
                <Button
                  key={i}
                  onClick={() => setActiveImg(i)}
                  sx={{
                    width: 72, height: 72, minWidth: 72, p: 0.25,
                    bgcolor: "#fff", borderRadius: 0,
                    border: activeImg === i ? "1px solid #1C1B18" : "1px solid #E8E5DF",
                    transition: "border-color 0.2s",
                  }}
                >
                  <img src={img} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                </Button>
              ))}
            </Box>
          </Grid>

          {/* Right: Product info */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              {product.badge && <Typography sx={{ ...labelSx, mb: 0.75 }}>{product.badge}</Typography>}
              <Typography sx={{ fontFamily: "'Nunito', sans-serif", fontWeight: 400, fontSize: "clamp(1.1rem, 2.5vw, 1.5rem)", letterSpacing: "0.2em", textTransform: "uppercase", color: "#1C1B18", mb: 0.5 }}>
                {product.name}
              </Typography>
              <Typography sx={{ fontFamily: "'Nunito', sans-serif", fontWeight: 400, fontSize: "0.65rem", letterSpacing: "0.1em", color: "#9A9690", mb: 1 }}>
                {product.category}
              </Typography>

              <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 2 }}>
                <StarRating rating={product.rating} size={12} />
                <Typography sx={{ fontFamily: "'Nunito', sans-serif", fontSize: "0.72rem", color: "#9A9690" }}>
                  {product.rating.toFixed(1)} ({product.reviews || 0} отзывов)
                </Typography>
              </Box>

              <Box sx={{ width: "100%", height: "1px", bgcolor: "#F0EEE9", mb: 1.5 }} />

              <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 3 }}>
                <Typography sx={{ fontFamily: "'Nunito', sans-serif", fontWeight: 400, fontSize: "1.15rem", letterSpacing: "0.1em", color: "#1C1B18" }}>
                  {formatPrice(product.price)}
                </Typography>
                {product.originalPrice && (
                  <Typography sx={{ fontFamily: "'Nunito', sans-serif", fontWeight: 400, fontSize: "0.8rem", color: "#9A9690", textDecoration: "line-through" }}>
                    {formatPrice(product.originalPrice)}
                  </Typography>
                )}
              </Box>

              <Box sx={{ display: "flex", gap: 1.5, mb: 3 }}>
                <Box sx={{ display: "flex", alignItems: "center", border: "1px solid #D8D5CF" }}>
                  <Button onClick={() => setQty(Math.max(1, qty - 1))} sx={{ minWidth: 40, height: 44, fontSize: "1.05rem", color: "#1C1B18", border: "none" }}>−</Button>
                  <Typography sx={{ fontFamily: "'Nunito', sans-serif", fontWeight: 400, fontSize: "0.65rem", letterSpacing: "0.1em", color: "#1C1B18", width: 32, textAlign: "center" }}>
                    {qty}
                  </Typography>
                  <Button onClick={() => setQty(qty + 1)} sx={{ minWidth: 40, height: 44, fontSize: "1.05rem", color: "#1C1B18", border: "none" }}>+</Button>
                </Box>
                <Button
                  variant="outlined"
                  onClick={handleAddToCart}
                  sx={{ flex: 1, fontSize: "0.825rem" }}
                >
                  Добавить в корзину
                </Button>
              </Box>

              <Link href="/contact">
                <Button variant="outlined" fullWidth sx={{ fontSize: "0.825rem" }}>Связаться с нами</Button>
              </Link>

              <Typography sx={{ fontFamily: "'Nunito', sans-serif", fontWeight: 400, fontSize: "0.68rem", lineHeight: 1.9, color: "#6B6860", mt: 1.5 }}>
                {product.description}
              </Typography>

              <Box sx={{ borderTop: "1px solid #F0EEE9", pt: 1.25, mt: 1.5 }}>
                {[
                  { label: "Категория", value: product.category },
                  { label: "Тип кожи", value: (product.skinType || []).join(", ") },
                ].map(({ label, value }) => (
                  <Box key={label} sx={{ display: "flex", gap: 2, mb: 1 }}>
                    <Typography sx={{ ...labelSx, minWidth: 100 }}>{label}:</Typography>
                    <Typography sx={{ fontFamily: "'Nunito', sans-serif", fontWeight: 400, fontSize: "0.65rem", color: "#1C1B18" }}>{value}</Typography>
                  </Box>
                ))}
              </Box>
            </Box>
          </Grid>
        </Grid>

        {/* Tabs */}
        <Box sx={{ mt: 8 }}>
          <Box sx={{ display: "flex", borderBottom: "1px solid #E8E5DF" }}>
            {TABS.map((tab) => (
              <Button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                sx={{
                  fontFamily: "'Nunito', sans-serif", fontWeight: 400, fontSize: "0.825rem",
                  letterSpacing: "0.2em", textTransform: "uppercase",
                  color: activeTab === tab.id ? "#1C1B18" : "#9A9690",
                  border: "none", borderBottom: activeTab === tab.id ? "1px solid #1C1B18" : "1px solid transparent",
                  borderRadius: 0, px: 3, py: 1, mb: "-1px", transition: "color 0.2s",
                }}
              >
                {tab.label}
              </Button>
            ))}
          </Box>
          <Box sx={{ bgcolor: "#fff", p: 4, maxWidth: 640 }}>
            {activeTab === "description" && (
              <Typography sx={{ fontFamily: "'Nunito', sans-serif", fontWeight: 400, fontSize: "1.05rem", lineHeight: 2, color: "#6B6860" }}>
                {product.description} Формула обогащена активными компонентами, которые работают синергетически для достижения видимых результатов уже после первого применения. Продукт прошёл дерматологическое тестирование и подходит для ежедневного использования.
              </Typography>
            )}
            {activeTab === "ingredients" && (
              <Typography sx={{ fontFamily: "'Nunito', sans-serif", fontWeight: 400, fontSize: "0.825rem", lineHeight: 2, color: "#6B6860" }}>
                Aqua, Glycerin, Niacinamide, Hyaluronic Acid, Retinol, Vitamin C, Peptides, Ceramides, Squalane, Allantoin, Panthenol, Tocopherol, Citric Acid, Sodium Hyaluronate.
              </Typography>
            )}
            {activeTab === "how-to-use" && (
              <Typography sx={{ fontFamily: "'Nunito', sans-serif", fontWeight: 400, fontSize: "1.05rem", lineHeight: 2, color: "#6B6860" }}>
                Нанесите небольшое количество средства на очищенную кожу лица утром и вечером. Распределите лёгкими массажными движениями от центра к периферии. Дайте впитаться перед нанесением следующего средства по уходу.
              </Typography>
            )}
          </Box>
        </Box>

        {/* Related products */}
        {related.length > 0 && (
          <Box sx={{ mt: 8 }}>
            <Box sx={{ textAlign: "center", mb: 5 }}>
              <Typography sx={{ fontFamily: "'Nunito', sans-serif", fontWeight: 400, fontSize: "0.65rem", letterSpacing: "0.28em", textTransform: "uppercase", color: "#1C1B18" }}>
                Вам также понравится
              </Typography>
              <Box sx={{ width: "2rem", height: "1px", bgcolor: "#1C1B18", mx: "auto", mt: 0.75 }} />
            </Box>
            <Grid container spacing={3}>
              {related.map((p) => (
                <Grid key={p.id} size={{ xs: 6, md: 3 }}>
                  <Link href={`/products/${p.id}`}>
                    <Box
                      sx={{
                        bgcolor: "#fff",
                        transition: "transform 0.5s cubic-bezier(0.33, 1, 0.68, 1), box-shadow 0.5s cubic-bezier(0.33, 1, 0.68, 1)",
                        "&:hover": { transform: "translateY(-6px)", boxShadow: "0 12px 40px rgba(0,0,0,0.1)" },
                      }}
                    >
                      <Box sx={{ overflow: "hidden", aspectRatio: "3/4" }}>
                        <img
                          src={p.image}
                          alt={p.name}
                          style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.6s cubic-bezier(0.33, 1, 0.68, 1)" }}
                          onMouseEnter={e => (e.currentTarget.style.transform = "scale(1.06)")}
                          onMouseLeave={e => (e.currentTarget.style.transform = "scale(1)")}
                        />
                      </Box>
                      <Box sx={{ pt: 2, pb: 2.5, px: 0.5, textAlign: "center" }}>
                        <Typography sx={{ fontFamily: "'Nunito', sans-serif", fontWeight: 400, fontSize: "0.68rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "#1C1B18", mb: 0.375 }}>
                          {p.name}
                        </Typography>
                        <Typography sx={{ fontFamily: "'Nunito', sans-serif", fontWeight: 400, fontSize: "0.72rem", color: "#9A9690" }}>
                          {formatPrice(p.price)}
                        </Typography>
                      </Box>
                    </Box>
                  </Link>
                </Grid>
              ))}
            </Grid>
          </Box>
        )}
      </Container>

      <CTA
        label="Присоединяйтесь"
        title="Начните свой путь к идеальной коже"
        buttonLabel="Связаться с нами"
        buttonHref="/contact"
      />
    </Box>
  );
}
