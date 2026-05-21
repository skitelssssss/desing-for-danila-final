// LUXE BEAUTY — Cart Page (MUI)
import { Link } from "wouter";
import { ShoppingBag, Trash2, Minus, Plus, ChevronLeft } from "lucide-react";
import { useCart } from "@/entities/cart";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Divider from "@mui/material/Divider";
import Paper from "@mui/material/Paper";

const labelSx = { fontFamily: "'Nunito', sans-serif", fontWeight: 400, fontSize: "0.825rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "#9A9690" };

export default function Cart() {
  const { items, totalItems, totalPrice, removeFromCart, setQuantity, clearCart } = useCart();

  if (items.length === 0) {
    return (
      <Box sx={{ bgcolor: "#F8F7F4", minHeight: "100vh" }}>
        <Box sx={{ textAlign: "center", py: 3, bgcolor: "#fff", borderBottom: "1px solid #F0EEE9" }}>
          <Typography sx={{ ...labelSx, mb: 0.5 }}>Luxe Beauty</Typography>
          <Typography sx={{ fontFamily: "'Nunito', sans-serif", fontWeight: 400, fontSize: "clamp(1.2rem, 3vw, 1.7rem)", letterSpacing: "0.28em", textTransform: "uppercase", color: "#1C1B18" }}>
            Корзина
          </Typography>
        </Box>
        <Container sx={{ py: 8 }}>
          <Box sx={{ textAlign: "center", maxWidth: 400, mx: "auto", py: 8 }}>
            <Box sx={{ width: 80, height: 80, border: "1px solid #D8D5CF", display: "flex", alignItems: "center", justifyContent: "center", mx: "auto", mb: 2 }}>
              <ShoppingBag size={32} strokeWidth={1} color="#9A9690" />
            </Box>
            <Typography sx={{ fontFamily: "'Nunito', sans-serif", fontWeight: 400, fontSize: "0.8rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "#1C1B18", mb: 0.75 }}>
              Корзина пуста
            </Typography>
            <Typography sx={{ fontFamily: "'Nunito', sans-serif", fontWeight: 400, fontSize: "0.825rem", lineHeight: 1.8, color: "#6B6860", mb: 2 }}>
              Добавьте товары из каталога, чтобы оформить заказ.
            </Typography>
            <Link href="/products">
              <Button variant="outlined" sx={{ fontSize: "0.825rem" }}>Перейти в каталог</Button>
            </Link>
          </Box>
        </Container>
      </Box>
    );
  }

  return (
    <Box sx={{ bgcolor: "#F8F7F4", minHeight: "100vh" }}>
      {/* Page header */}
      <Box sx={{ textAlign: "center", py: 3, bgcolor: "#fff", borderBottom: "1px solid #F0EEE9" }}>
        <Typography sx={{ ...labelSx, mb: 0.5 }}>Luxe Beauty</Typography>
        <Typography sx={{ fontFamily: "'Nunito', sans-serif", fontWeight: 400, fontSize: "clamp(1.2rem, 3vw, 1.7rem)", letterSpacing: "0.28em", textTransform: "uppercase", color: "#1C1B18" }}>
          Корзина
        </Typography>
      </Box>

      <Container sx={{ py: 6 }}>
        <Grid container spacing={4}>
          {/* Cart items */}
          <Grid size={{ xs: 12, lg: 8 }}>
            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 2 }}>
              <Typography sx={{ fontFamily: "'Nunito', sans-serif", fontWeight: 400, fontSize: "0.825rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "#1C1B18" }}>
                {totalItems} товар{totalItems === 1 ? "" : totalItems < 5 ? "а" : "ов"}
              </Typography>
              <Button
                onClick={clearCart}
                sx={{ fontFamily: "'Nunito', sans-serif", fontWeight: 400, fontSize: "0.72rem", letterSpacing: "0.1em", color: "#9A9690", textTransform: "none", border: "none", "&:hover": { color: "#1C1B18" } }}
              >
                Очистить корзину
              </Button>
            </Box>

            {items.map((item) => (
              <Paper
                key={item.productId}
                variant="outlined"
                sx={{
                  borderColor: "#E8E5DF", borderRadius: 0, mb: 1.5, p: 2,
                  display: "flex", gap: 2, alignItems: "center",
                }}
              >
                <Box sx={{ width: 80, height: 100, flexShrink: 0, overflow: "hidden", bgcolor: "#F0EEE9" }}>
                  <img src={item.image} alt={item.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                </Box>

                <Box sx={{ flex: 1, minWidth: 0 }}>
                  <Link href={`/products/${item.productId}`}>
                    <Typography sx={{
                      fontFamily: "'Nunito', sans-serif", fontWeight: 400, fontSize: "0.825rem",
                      letterSpacing: "0.12em", textTransform: "uppercase", color: "#1C1B18",
                      mb: 0.5, "&:hover": { opacity: 0.5 }, cursor: "pointer",
                    }}>
                      {item.name}
                    </Typography>
                  </Link>
                  <Typography sx={{ fontFamily: "'Nunito', sans-serif", fontWeight: 400, fontSize: "0.65rem", color: "#9A9690" }}>
                    Br{item.price}
                  </Typography>
                </Box>

                {/* Quantity */}
                <Box sx={{ display: "flex", alignItems: "center", border: "1px solid #D8D5CF" }}>
                  <IconButton
                    onClick={() => setQuantity(item.productId, item.quantity - 1)}
                    sx={{ borderRadius: 0, width: 32, height: 32 }}
                  >
                    <Minus size={12} />
                  </IconButton>
                  <Typography sx={{ fontFamily: "'Nunito', sans-serif", fontWeight: 400, fontSize: "0.72rem", color: "#1C1B18", width: 28, textAlign: "center" }}>
                    {item.quantity}
                  </Typography>
                  <IconButton
                    onClick={() => setQuantity(item.productId, item.quantity + 1)}
                    sx={{ borderRadius: 0, width: 32, height: 32 }}
                  >
                    <Plus size={12} />
                  </IconButton>
                </Box>

                {/* Line total */}
                <Typography sx={{ fontFamily: "'Nunito', sans-serif", fontWeight: 400, fontSize: "0.825rem", letterSpacing: "0.05em", color: "#1C1B18", minWidth: 72, textAlign: "right" }}>
                  Br{(item.price * item.quantity).toLocaleString()}
                </Typography>

                {/* Remove */}
                <IconButton
                  onClick={() => removeFromCart(item.productId)}
                  sx={{ color: "#9A9690", "&:hover": { color: "#1C1B18" } }}
                >
                  <Trash2 size={16} />
                </IconButton>
              </Paper>
            ))}

            <Link href="/products">
              <Typography sx={{
                display: "flex", alignItems: "center", gap: 0.5,
                fontFamily: "'Nunito', sans-serif", fontWeight: 400, fontSize: "0.825rem",
                letterSpacing: "0.1em", color: "#9A9690", mt: 2,
                "&:hover": { opacity: 0.6 }, cursor: "pointer",
              }}>
                <ChevronLeft size={14} /> Продолжить покупки
              </Typography>
            </Link>
          </Grid>

          {/* Order summary */}
          <Grid size={{ xs: 12, lg: 4 }}>
            <Paper sx={{ bgcolor: "#fff", border: "1px solid #E8E5DF", borderRadius: 0, p: 3 }}>
              <Typography sx={{ fontFamily: "'Nunito', sans-serif", fontWeight: 400, fontSize: "0.825rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#1C1B18", mb: 2 }}>
                Сумма заказа
              </Typography>

              <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}>
                <Typography sx={{ fontFamily: "'Nunito', sans-serif", fontWeight: 400, fontSize: "0.65rem", color: "#6B6860" }}>
                  Товары ({totalItems})
                </Typography>
                <Typography sx={{ fontFamily: "'Nunito', sans-serif", fontWeight: 400, fontSize: "0.65rem", color: "#1C1B18" }}>
                  Br{totalPrice.toLocaleString()}
                </Typography>
              </Box>
              <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}>
                <Typography sx={{ fontFamily: "'Nunito', sans-serif", fontWeight: 400, fontSize: "0.65rem", color: "#6B6860" }}>
                  Доставка
                </Typography>
                <Typography sx={{ fontFamily: "'Nunito', sans-serif", fontWeight: 400, fontSize: "0.65rem", color: "#9A9690" }}>
                  Уточняется
                </Typography>
              </Box>

              <Divider sx={{ my: 1.5, borderColor: "#E8E5DF" }} />

              <Box sx={{ display: "flex", justifyContent: "space-between", mb: 3 }}>
                <Typography sx={{ fontFamily: "'Nunito', sans-serif", fontWeight: 400, fontSize: "1rem", letterSpacing: "0.05em", color: "#1C1B18" }}>
                  Итого
                </Typography>
                <Typography sx={{ fontFamily: "'Nunito', sans-serif", fontWeight: 400, fontSize: "1rem", letterSpacing: "0.05em", color: "#1C1B18" }}>
                  Br{totalPrice.toLocaleString()}
                </Typography>
              </Box>

              <Link href="/contact">
                <Button variant="outlined" fullWidth sx={{ fontSize: "0.825rem", mb: 1 }}>
                  Оформить заказ
                </Button>
              </Link>

              <Typography sx={{ fontFamily: "'Nunito', sans-serif", fontWeight: 400, fontSize: "0.72rem", lineHeight: 1.6, color: "#9A9690", textAlign: "center" }}>
                При оформлении заказа вы будете перенаправлены на страницу контактов для уточнения деталей доставки.
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
