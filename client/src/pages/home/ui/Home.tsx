// LUXE BEAUTY — Home Page (MUI)
import { Link } from "wouter";
import { toast } from "sonner";
import { useForm } from "react-hook-form";
import { useInView } from "@/shared/hooks/useInView";
import { StarRating } from "@/features/star-rating/ui/StarRating";
import { PRODUCTS } from "@/entities/product";
import { SERVICES } from "@/entities/service";
import { useCart } from "@/entities/cart";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

interface NewsletterForm { email: string; }

const labelSx = { fontFamily: "'Nunito', sans-serif", fontWeight: 400, fontSize: "0.825rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "#9A9690" };
const sectionTitleSx = { fontFamily: "'Nunito', sans-serif", fontWeight: 400, fontSize: "0.8rem", letterSpacing: "0.28em", textTransform: "uppercase", color: "#1C1B18" };
const dividerSx = { width: "2rem", height: "1px", bgcolor: "#1C1B18", mx: "auto", mt: 0.75 };

function SectionHeading({ label, title }: { label?: string; title: string }) {
  return (
    <Box sx={{ textAlign: "center", mb: 5 }}>
      {label && <Typography sx={{ ...labelSx, mb: 0.5 }}>{label}</Typography>}
      <Typography sx={sectionTitleSx}>{title}</Typography>
      <Box sx={dividerSx} />
    </Box>
  );
}

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
      <Box className="product-image-container" sx={{ position: "relative", overflow: "hidden", aspectRatio: "3/4" }}>
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
            fontFamily: "'Nunito', sans-serif", fontWeight: 400, fontSize: "0.69rem",
            letterSpacing: "0.15em", textTransform: "uppercase", color: "#1C1B18",
            bgcolor: "#F8F7F4", px: 1, py: 0.375,
          }}>
            {product.badge}
          </Box>
        )}
        <Box
          className="add-to-cart-overlay"
          sx={{
            position: "absolute", bottom: 0, left: 0, right: 0,
            bgcolor: "#fff", p: 1.5, opacity: 0,
            transition: "opacity 0.4s",
            ".product-image-container:hover &": { opacity: 1 },
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
            fontFamily: "'Nunito', sans-serif", fontWeight: 400, fontSize: "0.72rem",
            letterSpacing: "0.18em", textTransform: "uppercase", color: "#1C1B18",
            mb: 0.5, "&:hover": { opacity: 0.6 },
          }}>
            {product.name}
          </Typography>
        </Link>
        <Box sx={{ display: "flex", justifyContent: "center", gap: 0.5, mb: 1 }}>
          <StarRating rating={product.rating} />
          <Typography sx={{ fontFamily: "'Nunito', sans-serif", fontSize: "0.825rem", color: "#9A9690" }}>
            {product.rating.toFixed(1)}
          </Typography>
        </Box>
        <Typography sx={{ fontFamily: "'Nunito', sans-serif", fontWeight: 400, fontSize: "0.65rem", color: "#1C1B18" }}>
          {product.originalPrice && (
            <span style={{ textDecoration: "line-through", color: "#9A9690", marginRight: "0.5rem" }}>
              Br{product.originalPrice}
            </span>
          )}
          Br{product.price}
        </Typography>
      </Box>
    </Box>
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

  const fadeSx = (inView: boolean) => ({
    transition: "all 1s",
    opacity: inView ? 1 : 0,
    transform: inView ? "translateY(0)" : "translateY(16px)",
  });

  return (
    <Box sx={{ bgcolor: "#F8F7F4" }}>
      {/* HERO */}
      <Box component="section" sx={{ position: "relative", height: "90vh", minHeight: 520 }}>
        <img
          src="https://d2xsxph8kpxj0f.cloudfront.net/310519663629565245/cKdWGd7QzMhdUfJyAzyKXk/hero-main-hcES4xd72vwVH22ebB7tuq.webp"
          alt="Hero"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
        <Box
          ref={heroRef.ref}
          sx={{
            position: "absolute", bottom: 0, left: 0, right: 0,
            background: "linear-gradient(to top, rgba(248,247,244,0.95) 0%, transparent 100%)",
            py: 8, ...fadeSx(heroRef.inView),
          }}
        >
          <Container>
            <Box sx={{ maxWidth: "36rem" }}>
              <Typography sx={{ ...labelSx, mb: 0.5 }}>Новая коллекция</Typography>
              <Typography sx={{ fontFamily: "'Nunito', sans-serif", fontWeight: 400, fontSize: "clamp(2rem, 5vw, 3.5rem)", letterSpacing: "0.15em", textTransform: "uppercase", color: "#1C1B18", lineHeight: 1.2, mb: 1.5 }}>
                Искусство<br />ухода за кожей
              </Typography>
              <Link href="/products">
                <Button variant="outlined" sx={{ fontSize: "0.825rem" }}>Открыть коллекцию</Button>
              </Link>
            </Box>
          </Container>
        </Box>
      </Box>

      {/* SPLIT PROMO — Gift selection */}
      <Box component="section" sx={{ bgcolor: "#fff" }}>
        <Grid container sx={{ minHeight: 420 }}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Box sx={{ overflow: "hidden", maxHeight: 480, height: "100%" }}>
              <img
                src="https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=900&q=80"
                alt="Подборка подарков"
                style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.6s ease" }}
                onMouseEnter={e => (e.currentTarget.style.transform = "scale(1.03)")}
                onMouseLeave={e => (e.currentTarget.style.transform = "scale(1)")}
              />
            </Box>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", px: 6, py: 8, bgcolor: "#F8F7F4", height: "100%" }}>
              <Typography sx={{ ...labelSx, mb: 0.75 }}>Специальное предложение</Typography>
              <Typography sx={{ fontFamily: "'Nunito', sans-serif", fontWeight: 400, fontSize: "clamp(1rem, 2vw, 1.3rem)", letterSpacing: "0.18em", textTransform: "uppercase", color: "#1C1B18", lineHeight: 1.4, mb: 0.75 }}>
                Подборка подарков
              </Typography>
              <Box sx={{ width: "2rem", height: "1px", bgcolor: "#1C1B18", mx: "auto", mb: 1.5 }} />
              <Typography sx={{ fontFamily: "'Nunito', sans-serif", fontWeight: 400, fontSize: "1rem", lineHeight: 1.9, color: "#6B6860", maxWidth: 340, mb: 2 }}>
                Подарите близким заметное преображение с нашей эксклюзивной подборкой, созданной специально для неё.
              </Typography>
              <Link href="/products">
                <Button variant="outlined" sx={{ fontSize: "0.825rem" }}>Открыть коллекцию</Button>
              </Link>
            </Box>
          </Grid>
        </Grid>
      </Box>

      {/* THE ICONS */}
      <Box component="section" sx={{ py: 10 }}>
        <Container>
          <Box ref={iconsRef.ref} sx={fadeSx(iconsRef.inView)}>
            <SectionHeading title="Иконы коллекции" />
            <Grid container spacing={3}>
              {iconProducts.map((p) => (
                <Grid key={p.id} size={{ xs: 6, md: 3 }}>
                  <ProductCard product={p} />
                </Grid>
              ))}
            </Grid>
            <Box sx={{ textAlign: "center", mt: 5 }}>
              <Link href="/products">
                <Button variant="outlined" sx={{ fontSize: "0.825rem" }}>Просмотреть все</Button>
              </Link>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* FEATURED PRODUCT */}
      <Box component="section" sx={{ bgcolor: "#fff" }}>
        <Grid container ref={featuredRef.ref} sx={{ minHeight: 560, ...fadeSx(featuredRef.inView) }}>
          <Grid size={{ xs: 12, md: 6 }} sx={{ order: { xs: 2, md: 1 } }}>
            <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", px: 6, py: 8 }}>
              <Typography sx={{ ...labelSx, mb: 0.75 }}>Вдохновлён наукой</Typography>
              <Typography sx={{ fontFamily: "'Nunito', sans-serif", fontWeight: 400, fontSize: "clamp(1rem, 2vw, 1.3rem)", letterSpacing: "0.18em", textTransform: "uppercase", color: "#1C1B18", lineHeight: 1.4, mb: 0.75 }}>
                {featuredProduct.name}
              </Typography>
              <Box sx={{ width: "2rem", height: "1px", bgcolor: "#1C1B18", mx: "auto", mb: 1.5 }} />
              <Typography sx={{ fontFamily: "'Nunito', sans-serif", fontWeight: 400, fontSize: "1rem", lineHeight: 1.9, color: "#6B6860", maxWidth: 360, mb: 2 }}>
                {featuredProduct.description}
              </Typography>
              <Link href={`/products/${featuredProduct.id}`}>
                <Button variant="outlined" sx={{ fontSize: "0.825rem" }}>Открыть продукт</Button>
              </Link>
            </Box>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }} sx={{ order: { xs: 1, md: 2 } }}>
            <Box sx={{ overflow: "hidden", minHeight: 400, height: "100%" }}>
              <img
                src={featuredProduct.image}
                alt={featuredProduct.name}
                style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.6s ease" }}
                onMouseEnter={e => (e.currentTarget.style.transform = "scale(1.03)")}
                onMouseLeave={e => (e.currentTarget.style.transform = "scale(1)")}
              />
            </Box>
          </Grid>
        </Grid>
      </Box>

      {/* GIFT SELECTION */}
      <Box component="section" sx={{ py: 10 }}>
        <Container>
          <Box ref={giftsRef.ref} sx={fadeSx(giftsRef.inView)}>
            <SectionHeading title="Подборка подарков" />
            <Grid container spacing={3}>
              {giftProducts.map((p) => (
                <Grid key={p.id} size={{ xs: 6, md: 3 }}>
                  <ProductCard product={p} />
                </Grid>
              ))}
            </Grid>
            <Box sx={{ textAlign: "center", mt: 5 }}>
              <Link href="/products">
                <Button variant="outlined" sx={{ fontSize: "0.825rem" }}>Просмотреть все</Button>
              </Link>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* CONSULTATION */}
      <Box component="section" sx={{ bgcolor: "#fff" }}>
        <Grid container ref={consultRef.ref} sx={{ minHeight: 520, ...fadeSx(consultRef.inView) }}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Box sx={{ overflow: "hidden", minHeight: 400, height: "100%" }}>
              <img
                src="https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=900&q=80"
                alt="Консультация"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </Box>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", px: 6, py: 8 }}>
              <Typography sx={{ ...labelSx, mb: 0.75 }}>Свяжитесь с нами</Typography>
              <Typography sx={{ fontFamily: "'Nunito', sans-serif", fontWeight: 400, fontSize: "clamp(1rem, 2vw, 1.3rem)", letterSpacing: "0.18em", textTransform: "uppercase", color: "#1C1B18", lineHeight: 1.4, mb: 0.75 }}>
                Персональный анализ кожи
              </Typography>
              <Box sx={{ width: "2rem", height: "1px", bgcolor: "#1C1B18", mx: "auto", mb: 1.5 }} />
              <Typography sx={{ fontFamily: "'Nunito', sans-serif", fontWeight: 400, fontSize: "1rem", lineHeight: 1.9, color: "#6B6860", maxWidth: 360, mb: 2 }}>
                Чтобы помочь вам подобрать наиболее подходящие средства, мы предлагаем индивидуальный анализ кожи с одним из наших экспертов.
              </Typography>
              <Link href="/contact">
                <Button variant="outlined" sx={{ fontSize: "0.825rem" }}>Связаться с нами</Button>
              </Link>
            </Box>
          </Grid>
        </Grid>
      </Box>

      {/* NEW PRODUCTS */}
      <Box component="section" sx={{ py: 10 }}>
        <Container>
          <Box ref={newRef.ref} sx={fadeSx(newRef.inView)}>
            <SectionHeading title="Новые продукты" />
            <Grid container spacing={3}>
              {newProducts.map((p) => (
                <Grid key={p.id} size={{ xs: 6, md: 3 }}>
                  <ProductCard product={p} />
                </Grid>
              ))}
            </Grid>
          </Box>
        </Container>
      </Box>

      {/* SERVICES SPLIT */}
      <Box component="section" sx={{ bgcolor: "#fff" }}>
        <Grid container sx={{ minHeight: 480 }}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", px: 6, py: 8 }}>
              <Typography sx={{ ...labelSx, mb: 0.75 }}>Наши процедуры</Typography>
              <Typography sx={{ fontFamily: "'Nunito', sans-serif", fontWeight: 400, fontSize: "clamp(1rem, 2vw, 1.3rem)", letterSpacing: "0.18em", textTransform: "uppercase", color: "#1C1B18", lineHeight: 1.4, mb: 0.75 }}>
                {SERVICES[0]?.name}
              </Typography>
              <Box sx={{ width: "2rem", height: "1px", bgcolor: "#1C1B18", mx: "auto", mb: 1.5 }} />
              <Typography sx={{ fontFamily: "'Nunito', sans-serif", fontWeight: 400, fontSize: "1rem", lineHeight: 1.9, color: "#6B6860", maxWidth: 360, mb: 2 }}>
                {SERVICES[0]?.longDescription}
              </Typography>
              <Link href="/services">
                <Button variant="outlined" sx={{ fontSize: "0.825rem" }}>Все процедуры</Button>
              </Link>
            </Box>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <Box sx={{ overflow: "hidden", minHeight: 400, height: "100%" }}>
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663629565245/cKdWGd7QzMhdUfJyAzyKXk/services-hero-53aghyVLkgbZBEayuf9kQi.webp"
                alt="Процедуры"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </Box>
          </Grid>
        </Grid>
      </Box>

      {/* CATEGORY CARDS */}
      <Box component="section" sx={{ py: 10 }}>
        <Container>
          <Box ref={categoryRef.ref} sx={fadeSx(categoryRef.inView)}>
            <Grid container spacing={2}>
              {CATEGORIES.map((cat) => (
                <Grid key={cat.label} size={{ xs: 12, md: 4 }}>
                  <Link href="/products">
                    <Box sx={{ position: "relative", overflow: "hidden", aspectRatio: "4/5" }}>
                      <img
                        src={cat.img}
                        alt={cat.label}
                        style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.7s ease", filter: "grayscale(30%)" }}
                        onMouseEnter={e => (e.currentTarget.style.transform = "scale(1.05)")}
                        onMouseLeave={e => (e.currentTarget.style.transform = "scale(1)")}
                      />
                      <Box
                        sx={{
                          position: "absolute", inset: 0,
                          display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "flex-end",
                          pb: 4, background: "linear-gradient(to top, rgba(28,27,24,0.65) 0%, transparent 60%)",
                        }}
                      >
                        <Typography sx={{ fontFamily: "'Nunito', sans-serif", fontWeight: 400, fontSize: "0.69rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,0.7)", mb: 0.5 }}>
                          {cat.count}
                        </Typography>
                        <Typography sx={{ fontFamily: "'Nunito', sans-serif", fontWeight: 400, fontSize: "0.8rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#fff" }}>
                          {cat.label}
                        </Typography>
                        <Typography sx={{ fontFamily: "'Nunito', sans-serif", fontWeight: 400, fontSize: "0.69rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,0.7)", mt: 0.5 }}>
                          Посмотреть коллекцию →
                        </Typography>
                      </Box>
                    </Box>
                  </Link>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Container>
      </Box>

      {/* NEWSLETTER */}
      <Box component="section" sx={{ bgcolor: "#0F1B3D", py: 10 }}>
        <Container sx={{ textAlign: "center", maxWidth: "36rem" }}>
          <Typography sx={{ fontFamily: "'Nunito', sans-serif", fontWeight: 400, fontSize: "0.825rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "rgba(255,255,255,0.5)", mb: 0.75 }}>
            Будьте в курсе
          </Typography>
          <Typography sx={{ fontFamily: "'Nunito', sans-serif", fontWeight: 400, fontSize: "clamp(1.5rem, 3vw, 2rem)", letterSpacing: "0.2em", textTransform: "uppercase", color: "#fff", mb: 0.75 }}>
            Подпишитесь на новости
          </Typography>
          <Box sx={{ width: "2rem", height: "1px", bgcolor: "rgba(255,255,255,0.4)", mx: "auto", mb: 1.5 }} />
          <Typography sx={{ fontFamily: "'Nunito', sans-serif", fontWeight: 400, fontSize: "0.68rem", lineHeight: 1.9, color: "rgba(255,255,255,0.6)", mb: 2 }}>
            Получайте первыми информацию о новых продуктах, эксклюзивных предложениях и советах по уходу за кожей.
          </Typography>
          <Box component="form" onSubmit={handleSubmit(onNewsletter)} sx={{ display: "flex", maxWidth: "28rem", mx: "auto" }}>
            <TextField
              type="email"
              placeholder="Ваш email"
              {...register("email", { required: true })}
              fullWidth
              sx={{
                "& .MuiOutlinedInput-root": {
                  fontFamily: "'Nunito', sans-serif", fontWeight: 400, fontSize: "0.825rem",
                  bgcolor: "rgba(255,255,255,0.08)", color: "#fff", borderRadius: 0,
                  "& fieldset": { borderColor: "rgba(255,255,255,0.25)", borderRight: "none", borderRadius: 0 },
                  "&:hover fieldset": { borderColor: "rgba(255,255,255,0.5)" },
                  "&.Mui-focused fieldset": { borderColor: "rgba(255,255,255,0.5)", borderWidth: "1px" },
                },
                "& .MuiInputBase-input::placeholder": { color: "rgba(255,255,255,0.3)" },
              }}
            />
            <Button
              type="submit"
              sx={{
                fontFamily: "'Nunito', sans-serif", fontWeight: 400, fontSize: "0.65rem",
                letterSpacing: "0.2em", textTransform: "uppercase",
                color: "#fff", border: "1px solid #fff", bgcolor: "transparent", borderRadius: 0,
                whiteSpace: "nowrap", flexShrink: 0, px: 4,
                "&:hover": { bgcolor: "#fff", color: "#1C1B18" },
              }}
            >
              Подписаться
            </Button>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}
