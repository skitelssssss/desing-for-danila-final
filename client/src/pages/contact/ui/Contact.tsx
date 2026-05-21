// LUXE BEAUTY — Contact Page (MUI)
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";

interface ContactForm {
  name: string;
  email: string;
  subject: string;
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

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const { register, handleSubmit, reset, formState: { errors } } = useForm<ContactForm>();

  const onSubmit = () => {
    toast.success("Сообщение отправлено! Мы ответим в течение 24 часов.");
    setSubmitted(true);
    reset();
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <Box sx={{ bgcolor: "#F8F7F4", minHeight: "100vh" }}>
      {/* Page header */}
      <Box sx={{ textAlign: "center", py: 3, bgcolor: "#fff", borderBottom: "1px solid #F0EEE9" }}>
        <Typography sx={{ fontFamily: "'Nunito', sans-serif", fontWeight: 400, fontSize: "0.68rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "#9A9690", mb: 0.5 }}>
          Luxe Beauty
        </Typography>
        <Typography sx={{ fontFamily: "'Nunito', sans-serif", fontWeight: 400, fontSize: "clamp(1.2rem, 3vw, 1.7rem)", letterSpacing: "0.28em", textTransform: "uppercase", color: "#1C1B18" }}>
          Контакты
        </Typography>
      </Box>

      {/* Contact form */}
      <Container sx={{ py: 8 }}>
        <Box sx={{ bgcolor: "#fff", p: { xs: 4, md: 8 }, maxWidth: 672, mx: "auto" }}>
          <Typography sx={{ fontFamily: "'Nunito', sans-serif", fontWeight: 400, fontSize: "0.68rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "#9A9690", mb: 0.75 }}>
            Написать нам
          </Typography>
          <Typography sx={{ fontFamily: "'Nunito', sans-serif", fontWeight: 400, fontSize: "clamp(1.5rem, 2.5vw, 1.9rem)", letterSpacing: "0.2em", textTransform: "uppercase", color: "#1C1B18", mb: 0.75 }}>
            Задайте вопрос
          </Typography>
          <Box sx={{ width: "2rem", height: "1px", bgcolor: "#1C1B18", mb: 3 }} />

            <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
              <Box>
                <Typography component="label" sx={{ fontFamily: "'Nunito', sans-serif", fontWeight: 400, fontSize: "0.68rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "#6B6860", display: "block", mb: 0.5 }}>
                  Имя *
                </Typography>
                <TextField
                  {...register("name", { required: true })}
                  placeholder="Анна Иванова"
                  fullWidth
                  error={!!errors.name}
                  sx={inputSx}
                />
              </Box>
              <Box>
                <Typography component="label" sx={{ fontFamily: "'Nunito', sans-serif", fontWeight: 400, fontSize: "0.68rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "#6B6860", display: "block", mb: 0.5 }}>
                  Email *
                </Typography>
                <TextField
                  type="email"
                  {...register("email", { required: true })}
                  placeholder="anna@example.com"
                  fullWidth
                  error={!!errors.email}
                  sx={inputSx}
                />
              </Box>
              <Box>
                <Typography component="label" sx={{ fontFamily: "'Nunito', sans-serif", fontWeight: 400, fontSize: "0.68rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "#6B6860", display: "block", mb: 0.5 }}>
                  Тема
                </Typography>
                <TextField
                  select
                  {...register("subject")}
                  defaultValue=""
                  fullWidth
                  sx={inputSx}
                >
                  <MenuItem value="">Выберите тему</MenuItem>
                  {["Вопрос о продукте", "Запись на процедуру", "Доставка и оплата", "Партнёрство", "Другое"].map(s => (
                    <MenuItem key={s} value={s}>{s}</MenuItem>
                  ))}
                </TextField>
              </Box>
              <Box>
                <Typography component="label" sx={{ fontFamily: "'Nunito', sans-serif", fontWeight: 400, fontSize: "0.68rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "#6B6860", display: "block", mb: 0.5 }}>
                  Сообщение *
                </Typography>
                <TextField
                  multiline
                  rows={5}
                  {...register("message", { required: true })}
                  placeholder="Ваш вопрос или сообщение..."
                  fullWidth
                  error={!!errors.message}
                  sx={inputSx}
                />
              </Box>
              <Button
                type="submit"
                variant="outlined"
                sx={{ mt: 1, fontSize: "0.68rem" }}
              >
                {submitted ? "Отправлено ✓" : "Отправить сообщение"}
              </Button>
            </Box>
          </Box>
        </Container>

    </Box>
  );
}
