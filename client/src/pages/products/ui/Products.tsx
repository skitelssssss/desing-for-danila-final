// LUXE BEAUTY — Products Page (MUI)
import { useState, useEffect } from "react";
import { Link } from "wouter";
import { ChevronDown } from "lucide-react";
import { toast } from "sonner";
import { StarRating } from "@/features/star-rating/ui/StarRating";
import { PRODUCTS } from "@/entities/product";
import { useCart } from "@/entities/cart";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

const CATEGORIES = ["Все", "Сыворотки", "Увлажнение", "Очищение", "Уход за глазами", "Маски", "Тело", "Тоники"];
const SKIN_TYPES = ["Все", "Сухая", "Жирная", "Комбинированная", "Нормальная", "Чувствительная"];

const labelSx = { fontFamily: "'Nunito', sans-serif", fontWeight: 400, fontSize: "0.68rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "#9A9690" };
const filterBtnSx = (active: boolean) => ({
  fontFamily: "'Nunito', sans-serif", fontWeight: 400, fontSize: "0.65rem", letterSpacing: "0.15em", textTransform: "uppercase",
  color: active ? "#fff" : "#1C1B18", bgcolor: active ? "#1C1B18" : "transparent",
  border: "1px solid #1C1B18", borderRadius: 0, px: 1.5, py: 0.5, transition: "all 0.2s",
  "&:hover": { bgcolor: active ? "#1C1B18" : "#F0EEE9" },
});

function ProductCard({ product }: { product: typeof PRODUCTS[0] }) {
  const { addToCart } = useCart();

  const handleAdd = () => {
    addToCart({ id: product.id, name: product.name, price: product.price, image: product.image });
    toast.success(`${product.name} добавлен в корзину`);
  };

  return (
    <Box
      sx={{
        bgcolor: "#fff",
        transition: "transform 0.5s cubic-bezier(0.33, 1, 0.68, 1), box-shadow 0.5s cubic-bezier(0.33, 1, 0.68, 1)",
        "&:hover": { transform: "translateY(-6px)", boxShadow: "0 12px 40px rgba(0,0,0,0.1)" },
      }}
    >
      <Box className="photo-container" sx={{ position: "relative", overflow: "hidden", aspectRatio: "3/4" }}>
        <img
          src={product.image}
          alt={product.name}
          style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.6s cubic-bezier(0.33, 1, 0.68, 1)" }}
          onMouseEnter={e => (e.currentTarget.style.transform = "scale(1.06)")}
          onMouseLeave={e => (e.currentTarget.style.transform = "scale(1)")}
        />
        {product.badge && (
          <Box sx={{
            position: "absolute", top: 12, right: 12,
            fontFamily: "'Nunito', sans-serif", fontWeight: 400, fontSize: "0.72rem",
            letterSpacing: "0.15em", textTransform: "uppercase", color: "#1C1B18",
            bgcolor: "#F8F7F4", px: 1, py: 0.375,
          }}>
            {product.badge}
          </Box>
        )}
        <Box
          sx={{
            position: "absolute", bottom: 0, left: 0, right: 0,
            bgcolor: "#fff", p: 1.5, opacity: 0,
            transition: "opacity 0.4s",
            ".photo-container:hover &": { opacity: 1 },
          }}
        >
          <Button
            variant="outlined"
            fullWidth
            onClick={handleAdd}
            sx={{ fontSize: "0.65rem" }}
          >
            Добавить в корзину
          </Button>
        </Box>
      </Box>
      <Box sx={{ pt: 2, pb: 2.5, px: 0.5, textAlign: "center" }}>
        <Link href={`/products/${product.id}`}>
          <Typography sx={{
            fontFamily: "'Nunito', sans-serif", fontWeight: 400, fontSize: "0.65rem",
            letterSpacing: "0.18em", textTransform: "uppercase", color: "#1C1B18",
            mb: 0.5, "&:hover": { opacity: 0.5 },
          }}>
            {product.name}
          </Typography>
        </Link>
        <Box sx={{ display: "flex", justifyContent: "center", gap: 0.5, mb: 1 }}>
          <StarRating rating={product.rating} />
          <Typography sx={{ fontFamily: "'Nunito', sans-serif", fontSize: "0.65rem", color: "#9A9690" }}>
            {product.rating.toFixed(1)}
          </Typography>
        </Box>
        <Typography sx={{ fontFamily: "'Nunito', sans-serif", fontWeight: 400, fontSize: "0.68rem", color: "#1C1B18" }}>
          {product.originalPrice && (
            <span style={{ textDecoration: "line-through", color: "#9A9690", marginRight: "0.4rem" }}>
              Br{product.originalPrice}
            </span>
          )}
          Br{product.price}
        </Typography>
      </Box>
    </Box>
  );
}

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState("Все");
  const [selectedSkinType, setSelectedSkinType] = useState("Все");
  const [maxPrice] = useState(50000);
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

  useEffect(() => { setPage(1); }, [selectedCategory, selectedSkinType, sort]);

  return (
    <Box sx={{ bgcolor: "#F8F7F4", minHeight: "100vh" }}>
      {/* Page header */}
      <Box sx={{ textAlign: "center", py: 3, bgcolor: "#fff", borderBottom: "1px solid #F0EEE9" }}>
        <Typography sx={{ ...labelSx, mb: 0.5 }}>Luxe Beauty</Typography>
        <Typography sx={{ fontFamily: "'Nunito', sans-serif", fontWeight: 400, fontSize: "clamp(1.2rem, 3vw, 1.7rem)", letterSpacing: "0.28em", textTransform: "uppercase", color: "#1C1B18" }}>
          E-Boutique
        </Typography>
      </Box>

      {/* Filter bar */}
      <Box sx={{ bgcolor: "#fff", borderBottom: "1px solid #F0EEE9" }}>
        <Container sx={{ py: 3 }}>
          <Box sx={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: 3 }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1, flexWrap: "wrap" }}>
              <Typography sx={labelSx}>Категория:</Typography>
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                {CATEGORIES.map((cat) => (
                  <Button key={cat} onClick={() => setSelectedCategory(cat)} sx={filterBtnSx(selectedCategory === cat)}>
                    {cat}
                  </Button>
                ))}
              </Box>
            </Box>
          </Box>

          <Box sx={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: 3, mt: 2 }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1, flexWrap: "wrap" }}>
              <Typography sx={labelSx}>Тип кожи:</Typography>
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                {SKIN_TYPES.map((s) => (
                  <Button key={s} onClick={() => setSelectedSkinType(s)} sx={filterBtnSx(selectedSkinType === s)}>
                    {s}
                  </Button>
                ))}
              </Box>
            </Box>

            {/* Sort */}
            <Box sx={{ ml: "auto", position: "relative" }}>
              <Button
                onClick={() => setSortOpen(!sortOpen)}
                sx={{
                  fontFamily: "'Nunito', sans-serif", fontWeight: 400, fontSize: "0.65rem",
                  letterSpacing: "0.15em", textTransform: "uppercase", color: "#1C1B18",
                  border: "1px solid #D8D5CF", borderRadius: 0, px: 1.5, py: 0.625,
                }}
                endIcon={<ChevronDown size={12} />}
              >
                {sort}
              </Button>
              <Menu
                open={sortOpen}
                onClose={() => setSortOpen(false)}
                anchorReference="anchorPosition"
                anchorPosition={{ top: 9999, left: 9999 }}
                transformOrigin={{ horizontal: "right", vertical: "top" }}
                sx={{ "& .MuiPaper-root": { borderRadius: 0, border: "1px solid #E8E5DF", minWidth: 200 } }}
              >
                {["Рекомендуемые", "Цена: по возрастанию", "Цена: по убыванию", "По рейтингу"].map((s) => (
                  <MenuItem
                    key={s}
                    onClick={() => { setSort(s); setSortOpen(false); }}
                    sx={{ fontFamily: "'Nunito', sans-serif", fontWeight: 400, fontSize: "0.72rem", letterSpacing: "0.1em", color: "#1C1B18" }}
                  >
                    {s}
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Box>

          <Typography sx={{ ...labelSx, mt: 1 }}>
            {filtered.length} продуктов
          </Typography>
        </Container>
      </Box>

      {/* Product grid */}
      <Container sx={{ py: 6 }}>
        {paginated.length === 0 ? (
          <Box sx={{ textAlign: "center", py: 12 }}>
            <Typography sx={{ fontFamily: "'Nunito', sans-serif", fontWeight: 400, fontSize: "0.825rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#9A9690" }}>
              Продукты не найдены
            </Typography>
          </Box>
        ) : (
          <Grid container spacing={3}>
            {paginated.map((p) => (
              <Grid key={p.id} size={{ xs: 6, md: 3 }}>
                <ProductCard product={p} />
              </Grid>
            ))}
          </Grid>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <Box sx={{ display: "flex", justifyContent: "center", gap: 1, mt: 7 }}>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
              <Button
                key={n}
                onClick={() => setPage(n)}
                sx={{
                  fontFamily: "'Nunito', sans-serif", fontWeight: 400, fontSize: "0.68rem", letterSpacing: "0.15em",
                  color: page === n ? "#fff" : "#1C1B18", bgcolor: page === n ? "#1C1B18" : "transparent",
                  border: "1px solid #1C1B18", borderRadius: 0, minWidth: 36, width: 36, height: 36,
                  transition: "all 0.2s",
                }}
              >
                {n}
              </Button>
            ))}
          </Box>
        )}
      </Container>
    </Box>
  );
}
