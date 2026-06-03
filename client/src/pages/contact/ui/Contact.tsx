// L'ART DE LA BEAUTÉ — Contact Page (MUI)
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { MapPin, Phone, Clock, Instagram, Send } from "lucide-react";
import { CTA } from "@/widgets/cta/ui/CTA";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";

interface ContactForm {
  name: string;
  phone: string;
  service: string;
  message: string;
}

const inputSx = {
  fontFamily: "'Nunito', sans-serif",
  fontWeight: 400,
  fontSize: "0.68rem",
  bgcolor: "#F8F7F4",
  "& .MuiOutlinedInput-root": {
    borderRadius: 0,
    "& fieldset": { borderColor: "#D8D5CF", borderRadius: 0 },
    "&:hover fieldset": { borderColor: "#1C1B18" },
    "&.Mui-focused fieldset": { borderColor: "#1C1B18", borderWidth: "1px" },
  },
};

const PHONE = "+375 29 749-22-22";
const PHONE_TEL = "+375297492222";
const INSTAGRAM = "https://www.instagram.com/lart.de_la_beaute";
const TELEGRAM = "https://t.me/l_art_de_la_beaute";
const VIBER = "viber://chat?number=%2B375297492222";
const YANDEX_MAPS = "https://yandex.ru/maps/org/223691556517";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const { register, handleSubmit, reset, formState: { errors } } = useForm<ContactForm>();

  const onSubmit = () => {
    toast.success("Заявка отправлена! Мы свяжемся с вами в ближайшее время.");
    setSubmitted(true);
    reset();
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <Box sx={{ bgcolor: "#F8F7F4", minHeight: "100vh" }}>
      {/* Page header */}
      <Box sx={{ textAlign: "center", py: 3, bgcolor: "#fff" }}>
        <Typography sx={{ fontFamily: "'Nunito', sans-serif", fontWeight: 400, fontSize: "0.68rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "#9A9690", mb: 0.5 }}>
          L'art de la Beauté
        </Typography>
        <Typography sx={{ fontFamily: "'Nunito', sans-serif", fontWeight: 400, fontSize: "clamp(1.2rem, 3vw, 1.7rem)", letterSpacing: "0.28em", textTransform: "uppercase", color: "#1C1B18" }}>
          Контакты
        </Typography>
      </Box>

      {/* Info + Form */}
      <Container sx={{ py: 8 }}>
        <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" }, gap: 4, maxWidth: 1100, mx: "auto" }}>
          {/* Info card */}
          <Box sx={{ bgcolor: "#fff", p: { xs: 4, md: 5 } }}>
            <Typography sx={{ fontFamily: "'Nunito', sans-serif", fontWeight: 400, fontSize: "0.68rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "#9A9690", mb: 0.75 }}>
              Косметология в Минске
            </Typography>
            <Typography sx={{ fontFamily: "'Nunito', sans-serif", fontWeight: 400, fontSize: "clamp(1.5rem, 2.5vw, 1.9rem)", letterSpacing: "0.2em", textTransform: "uppercase", color: "#1C1B18", mb: 0.75 }}>
              L'art de la Beauté
            </Typography>
            <Box sx={{ width: "2rem", height: "1px", bgcolor: "#1C1B18", mb: 3 }} />

            <Box sx={{ display: "flex", flexDirection: "column", gap: 2.5 }}>
              <Box component="a" href={YANDEX_MAPS} target="_blank" rel="noopener noreferrer" sx={{ display: "flex", alignItems: "flex-start", gap: 1.5, textDecoration: "none", color: "#1C1B18", "&:hover .ico": { color: "#0F1B3D" } }}>
                <MapPin size={16} strokeWidth={1.5} className="ico" style={{ color: "#9A9690", marginTop: 2, transition: "color 0.2s" }} />
                <Box>
                  <Typography sx={{ fontFamily: "'Nunito', sans-serif", fontWeight: 400, fontSize: "0.85rem", color: "#1C1B18" }}>Минск, ул. Тимирязева, 122</Typography>
                  <Typography sx={{ fontFamily: "'Nunito', sans-serif", fontWeight: 400, fontSize: "0.68rem", color: "#9A9690", mt: 0.25 }}>ст. м. «Ратомская» — 440 м · построить маршрут →</Typography>
                </Box>
              </Box>

              <Box component="a" href={`tel:${PHONE_TEL}`} sx={{ display: "flex", alignItems: "center", gap: 1.5, textDecoration: "none", color: "#1C1B18" }}>
                <Phone size={16} strokeWidth={1.5} style={{ color: "#9A9690" }} />
                <Typography sx={{ fontFamily: "'Nunito', sans-serif", fontWeight: 400, fontSize: "0.85rem", color: "#1C1B18" }}>{PHONE}</Typography>
              </Box>

              <Box sx={{ display: "flex", alignItems: "flex-start", gap: 1.5 }}>
                <Clock size={16} strokeWidth={1.5} style={{ color: "#9A9690", marginTop: 2 }} />
                <Box>
                  <Typography sx={{ fontFamily: "'Nunito', sans-serif", fontWeight: 400, fontSize: "0.85rem", color: "#1C1B18" }}>Пн–Сб: 09:00–21:00</Typography>
                  <Typography sx={{ fontFamily: "'Nunito', sans-serif", fontWeight: 400, fontSize: "0.85rem", color: "#1C1B18" }}>Вс: 09:00–18:00</Typography>
                </Box>
              </Box>
            </Box>

            <Box sx={{ display: "flex", gap: 1, mt: 4 }}>
              <Button component="a" href={INSTAGRAM} target="_blank" rel="noopener noreferrer" startIcon={<Instagram size={14} strokeWidth={1.5} />} variant="outlined" sx={{ flex: 1, fontSize: "0.62rem", borderRadius: 0, py: 1, borderColor: "#1C1B18", color: "#1C1B18", "&:hover": { borderColor: "#0F1B3D", bgcolor: "#0F1B3D", color: "#fff" } }}>
                Instagram
              </Button>
              <Button component="a" href={TELEGRAM} target="_blank" rel="noopener noreferrer" startIcon={<Send size={14} strokeWidth={1.5} />} variant="outlined" sx={{ flex: 1, fontSize: "0.62rem", borderRadius: 0, py: 1, borderColor: "#1C1B18", color: "#1C1B18", "&:hover": { borderColor: "#0F1B3D", bgcolor: "#0F1B3D", color: "#fff" } }}>
                Telegram
              </Button>
              <Button component="a" href={VIBER} startIcon={<Box component="span" sx={{ fontSize: "0.62rem", fontWeight: 700 }}>V</Box>} variant="outlined" sx={{ flex: 1, fontSize: "0.62rem", borderRadius: 0, py: 1, borderColor: "#1C1B18", color: "#1C1B18", "&:hover": { borderColor: "#0F1B3D", bgcolor: "#0F1B3D", color: "#fff" } }}>
                Viber
              </Button>
            </Box>

            <Typography sx={{ fontFamily: "'Nunito', sans-serif", fontWeight: 400, fontSize: "0.65rem", color: "#9A9690", mt: 4, lineHeight: 1.8 }}>
              Оплата: наличные, банковская карта.<br />
              Wi-Fi · парковка · косметология для мужчин.
            </Typography>
          </Box>

          {/* Booking form */}
          <Box sx={{ bgcolor: "#fff", p: { xs: 4, md: 5 } }}>
            <Typography sx={{ fontFamily: "'Nunito', sans-serif", fontWeight: 400, fontSize: "0.68rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "#9A9690", mb: 0.75 }}>
              Запись на процедуру
            </Typography>
            <Typography sx={{ fontFamily: "'Nunito', sans-serif", fontWeight: 400, fontSize: "clamp(1.5rem, 2.5vw, 1.9rem)", letterSpacing: "0.2em", textTransform: "uppercase", color: "#1C1B18", mb: 0.75 }}>
              Оставьте заявку
            </Typography>
            <Box sx={{ width: "2rem", height: "1px", bgcolor: "#1C1B18", mb: 3 }} />

            <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
              <Box>
                <Typography component="label" sx={{ fontFamily: "'Nunito', sans-serif", fontWeight: 400, fontSize: "0.68rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "#6B6860", display: "block", mb: 0.5 }}>
                  Имя *
                </Typography>
                <TextField
                  {...register("name", { required: true })}
                  placeholder="Анна"
                  fullWidth
                  error={!!errors.name}
                  sx={inputSx}
                />
              </Box>
              <Box>
                <Typography component="label" sx={{ fontFamily: "'Nunito', sans-serif", fontWeight: 400, fontSize: "0.68rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "#6B6860", display: "block", mb: 0.5 }}>
                  Телефон *
                </Typography>
                <TextField
                  {...register("phone", { required: true })}
                  placeholder="+375 29 ___-__-__"
                  fullWidth
                  error={!!errors.phone}
                  sx={inputSx}
                />
              </Box>
              <Box>
                <Typography component="label" sx={{ fontFamily: "'Nunito', sans-serif", fontWeight: 400, fontSize: "0.68rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "#6B6860", display: "block", mb: 0.5 }}>
                  Интересующая процедура
                </Typography>
                <TextField
                  select
                  {...register("service")}
                  defaultValue=""
                  fullWidth
                  sx={inputSx}
                >
                  <MenuItem value="">Выберите процедуру</MenuItem>
                  {["Пилинг", "Массаж лица", "Процедура для лица", "Анализ кожи", "Консультация косметолога", "Другое"].map(s => (
                    <MenuItem key={s} value={s}>{s}</MenuItem>
                  ))}
                </TextField>
              </Box>
              <Box>
                <Typography component="label" sx={{ fontFamily: "'Nunito', sans-serif", fontWeight: 400, fontSize: "0.68rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "#6B6860", display: "block", mb: 0.5 }}>
                  Комментарий
                </Typography>
                <TextField
                  multiline
                  rows={4}
                  {...register("message")}
                  placeholder="Удобное время, пожелания..."
                  fullWidth
                  sx={inputSx}
                />
              </Box>
              <Button
                type="submit"
                variant="outlined"
                sx={{ mt: 1, fontSize: "0.68rem", borderRadius: 0, py: 1.25, borderColor: "#1C1B18", color: "#1C1B18", "&:hover": { bgcolor: "#1C1B18", color: "#fff", borderColor: "#1C1B18" } }}
              >
                {submitted ? "Отправлено ✓" : "Записаться"}
              </Button>
            </Box>
          </Box>
        </Box>
      </Container>

      <CTA
        label="Присоединяйтесь"
        title="Запишитесь на персональную консультацию"
        buttonLabel="Позвонить"
        buttonHref={`tel:${PHONE_TEL}`}
      />
    </Box>
  );
}
