// L'ART DE LA BEAUTÉ — Booking Page (MUI)
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { SERVICES } from "@/entities/service";
import { formatPrice } from "@/shared/lib/formatPrice";
import { CTA } from "@/widgets/cta/ui/CTA";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";

interface BookingForm {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  skinType: string;
  concerns: string;
  notes: string;
}

const STEPS = ["Услуга", "Дата и время", "Ваши данные"];
const TIME_SLOTS = ["10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00"];

const labelSx = { fontFamily: "'Nunito', sans-serif", fontWeight: 400, fontSize: "0.68rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "#9A9690" };
const fieldLabelSx = { fontFamily: "'Nunito', sans-serif", fontWeight: 400, fontSize: "0.68rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "#6B6860", display: "block", mb: 0.5 };
const inputSx = {
  "& .MuiOutlinedInput-root": {
    fontFamily: "'Nunito', sans-serif", fontWeight: 400, fontSize: "0.68rem",
    bgcolor: "#fff", borderRadius: 0,
    "& fieldset": { borderColor: "#D8D5CF", borderRadius: 0 },
    "&:hover fieldset": { borderColor: "#1C1B18" },
    "&.Mui-focused fieldset": { borderColor: "#1C1B18", borderWidth: "1px" },
  },
};

export default function Booking() {
  const [step, setStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [selectedService, setSelectedService] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const { register, handleSubmit, formState: { errors } } = useForm<BookingForm>();

  const onSubmit = () => {
    toast.success("Запись подтверждена! Мы свяжемся с вами в ближайшее время.");
    setSubmitted(true);
  };

  const canGoNext = () => {
    if (step === 0) return !!selectedService;
    if (step === 1) return !!selectedDate && !!selectedTime;
    return true;
  };

  if (submitted) {
    return (
      <Box sx={{ bgcolor: "#F8F7F4", minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <Box sx={{ textAlign: "center", maxWidth: 480, p: 4 }}>
          <Box sx={{ width: 64, height: 64, border: "1px solid #1C1B18", display: "flex", alignItems: "center", justifyContent: "center", mx: "auto", mb: 2 }}>
            <Typography sx={{ fontSize: "1.875rem" }}>✓</Typography>
          </Box>
          <Typography sx={{ fontFamily: "'Nunito', sans-serif", fontWeight: 400, fontSize: "0.65rem", letterSpacing: "0.28em", textTransform: "uppercase", color: "#1C1B18", mb: 0.75 }}>
            Запись подтверждена
          </Typography>
          <Box sx={{ width: "2rem", height: "1px", bgcolor: "#1C1B18", mx: "auto", mb: 1.5 }} />
          <Typography sx={{ fontFamily: "'Nunito', sans-serif", fontWeight: 400, fontSize: "0.65rem", lineHeight: 1.9, color: "#6B6860", mb: 2 }}>
            Спасибо за вашу запись. Мы свяжемся с вами в ближайшее время для подтверждения.
          </Typography>
          <Button
            variant="outlined"
            onClick={() => { setSubmitted(false); setStep(0); setSelectedService(""); setSelectedDate(""); setSelectedTime(""); }}
            sx={{ fontSize: "0.825rem" }}
          >
            Записаться снова
          </Button>
        </Box>
      </Box>
    );
  }

  return (
    <Box sx={{ bgcolor: "#F8F7F4", minHeight: "100vh" }}>
      {/* Page header */}
      <Box sx={{ textAlign: "center", py: 3, bgcolor: "#fff" }}>
        <Typography sx={{ ...labelSx, mb: 0.5 }}>L'art de la Beauté</Typography>
        <Typography sx={{ fontFamily: "'Nunito', sans-serif", fontWeight: 400, fontSize: "clamp(1.2rem, 3vw, 1.7rem)", letterSpacing: "0.28em", textTransform: "uppercase", color: "#1C1B18" }}>
          Запись на консультацию
        </Typography>
      </Box>

      <Container sx={{ py: 8 }}>
        <Box sx={{ maxWidth: 672, mx: "auto" }}>
          {/* Step indicator */}
          <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", mb: 7 }}>
            {STEPS.map((s, i) => (
              <Box key={s} sx={{ display: "flex", alignItems: "center" }}>
                <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                  <Box sx={{
                    width: 32, height: 32,
                    border: `1px solid ${i <= step ? "#1C1B18" : "#D8D5CF"}`,
                    bgcolor: i < step ? "#1C1B18" : "#fff",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    transition: "all 0.3s",
                  }}>
                    {i < step ? (
                      <Typography sx={{ color: "#fff", fontSize: "0.72rem" }}>✓</Typography>
                    ) : (
                      <Typography sx={{ fontFamily: "'Nunito', sans-serif", fontWeight: 400, fontSize: "0.825rem", color: i === step ? "#1C1B18" : "#9A9690" }}>
                        {i + 1}
                      </Typography>
                    )}
                  </Box>
                  <Typography sx={{ ...labelSx, mt: 0.5, color: i === step ? "#1C1B18" : "#9A9690" }}>{s}</Typography>
                </Box>
                {i < STEPS.length - 1 && (
                  <Box sx={{ width: 80, height: 1, bgcolor: i < step ? "#1C1B18" : "#D8D5CF", mx: 1, mb: 1.5, transition: "background 0.3s" }} />
                )}
              </Box>
            ))}
          </Box>

          {/* Step 0: Service selection */}
          {step === 0 && (
            <Box>
              <Typography sx={{ fontFamily: "'Nunito', sans-serif", fontWeight: 400, fontSize: "0.65rem", letterSpacing: "0.28em", textTransform: "uppercase", color: "#1C1B18", textAlign: "center", mb: 2 }}>
                Выберите процедуру
              </Typography>
              <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
                {SERVICES.map((service) => (
                  <Button
                    key={service.id}
                    onClick={() => setSelectedService(service.id)}
                    sx={{
                      bgcolor: selectedService === service.id ? "#1C1B18" : "#fff",
                      border: `1px solid ${selectedService === service.id ? "#1C1B18" : "#E8E5DF"}`,
                      p: 2,
                      textAlign: "left",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      borderRadius: 0,
                      textTransform: "none",
                      transition: "all 0.2s",
                      "&:hover": { bgcolor: selectedService === service.id ? "#1C1B18" : "#fff" },
                    }}
                  >
                    <Box>
                      <Typography sx={{ fontFamily: "'Nunito', sans-serif", fontWeight: 400, fontSize: "0.72rem", letterSpacing: "0.18em", textTransform: "uppercase", color: selectedService === service.id ? "#fff" : "#1C1B18", mb: 0.375 }}>
                        {service.name}
                      </Typography>
                      <Typography sx={{ fontFamily: "'Nunito', sans-serif", fontWeight: 400, fontSize: "0.68rem", color: selectedService === service.id ? "rgba(255,255,255,0.65)" : "#9A9690" }}>
                        {service.duration}
                      </Typography>
                    </Box>
                    <Typography sx={{ fontFamily: "'Nunito', sans-serif", fontWeight: 400, fontSize: "1rem", color: selectedService === service.id ? "#fff" : "#1C1B18" }}>
                      {formatPrice(service.price)}
                    </Typography>
                  </Button>
                ))}
              </Box>
            </Box>
          )}

          {/* Step 1: Date & Time */}
          {step === 1 && (
            <Box>
              <Typography sx={{ fontFamily: "'Nunito', sans-serif", fontWeight: 400, fontSize: "0.65rem", letterSpacing: "0.28em", textTransform: "uppercase", color: "#1C1B18", textAlign: "center", mb: 2 }}>
                Выберите дату и время
              </Typography>
              <Box sx={{ mb: 3 }}>
                <Typography component="label" sx={fieldLabelSx}>Дата</Typography>
                <TextField
                  type="date"
                  value={selectedDate}
                  onChange={e => setSelectedDate(e.target.value)}
                  fullWidth
                  sx={inputSx}
                  slotProps={{ inputLabel: { shrink: true }, htmlInput: { min: new Date().toISOString().split("T")[0] } }}
                />
              </Box>
              <Box>
                <Typography component="label" sx={fieldLabelSx}>Время</Typography>
                <Grid container spacing={1}>
                  {TIME_SLOTS.map((t) => (
                    <Grid key={t} size={2.4}>
                      <Button
                        onClick={() => setSelectedTime(t)}
                        variant="outlined"
                        sx={{
                          width: "100%",
                          bgcolor: selectedTime === t ? "#1C1B18" : "#fff",
                          borderColor: selectedTime === t ? "#1C1B18" : "#E8E5DF",
                          color: selectedTime === t ? "#fff" : "#1C1B18",
                          fontFamily: "'Nunito', sans-serif",
                          fontWeight: 400,
                          fontSize: "0.68rem",
                          borderRadius: 0,
                          py: 0.75,
                          "&:hover": { bgcolor: selectedTime === t ? "#1C1B18" : "#F8F7F4" },
                        }}
                      >
                        {t}
                      </Button>
                    </Grid>
                  ))}
                </Grid>
              </Box>
            </Box>
          )}

          {/* Step 2: Personal info */}
          {step === 2 && (
            <Box component="form" onSubmit={handleSubmit(onSubmit)}>
              <Typography sx={{ fontFamily: "'Nunito', sans-serif", fontWeight: 400, fontSize: "0.65rem", letterSpacing: "0.28em", textTransform: "uppercase", color: "#1C1B18", textAlign: "center", mb: 2 }}>
                Ваши данные
              </Typography>
              <Grid container spacing={2} sx={{ mb: 2 }}>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <Typography component="label" sx={fieldLabelSx}>Имя *</Typography>
                  <TextField {...register("firstName", { required: true })} placeholder="Анна" fullWidth error={!!errors.firstName} sx={inputSx} />
                </Grid>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <Typography component="label" sx={fieldLabelSx}>Фамилия *</Typography>
                  <TextField {...register("lastName", { required: true })} placeholder="Иванова" fullWidth error={!!errors.lastName} sx={inputSx} />
                </Grid>
              </Grid>
              <Box sx={{ mb: 2 }}>
                <Typography component="label" sx={fieldLabelSx}>Email *</Typography>
                <TextField type="email" {...register("email", { required: true })} placeholder="anna@example.com" fullWidth error={!!errors.email} sx={inputSx} />
              </Box>
              <Box sx={{ mb: 2 }}>
                <Typography component="label" sx={fieldLabelSx}>Телефон</Typography>
                <TextField type="tel" {...register("phone")} placeholder="+375 (29) 000-00-00" fullWidth sx={inputSx} />
              </Box>
              <Box sx={{ mb: 2 }}>
                <Typography component="label" sx={fieldLabelSx}>Тип кожи</Typography>
                <TextField select {...register("skinType")} defaultValue="" fullWidth sx={inputSx}>
                  <MenuItem value="">Выберите тип кожи</MenuItem>
                  {["Нормальная", "Сухая", "Жирная", "Комбинированная", "Чувствительная"].map(t => (
                    <MenuItem key={t} value={t}>{t}</MenuItem>
                  ))}
                </TextField>
              </Box>
              <Box sx={{ mb: 2 }}>
                <Typography component="label" sx={fieldLabelSx}>Проблемы кожи</Typography>
                <TextField {...register("concerns")} placeholder="Акне, пигментация, морщины..." fullWidth sx={inputSx} />
              </Box>
              <Box sx={{ mb: 3 }}>
                <Typography component="label" sx={fieldLabelSx}>Дополнительные пожелания</Typography>
                <TextField multiline rows={3} {...register("notes")} placeholder="Любая дополнительная информация..." fullWidth sx={inputSx} />
              </Box>
              <Button type="submit" variant="outlined" fullWidth sx={{ fontSize: "0.825rem" }}>
                Подтвердить запись
              </Button>
            </Box>
          )}

          {/* Navigation */}
          {step < 2 && (
            <Box sx={{ display: "flex", justifyContent: "space-between", mt: 5 }}>
              {step > 0 ? (
                <Button onClick={() => setStep(step - 1)} sx={{ fontFamily: "'Nunito', sans-serif", fontWeight: 400, fontSize: "0.825rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "#9A9690", border: "none" }}>
                  ← Назад
                </Button>
              ) : <Box />}
              <Button
                onClick={() => canGoNext() && setStep(step + 1)}
                variant="outlined"
                disabled={!canGoNext()}
                sx={{ fontSize: "0.825rem" }}
              >
                Далее →
              </Button>
            </Box>
          )}
        </Box>
      </Container>

      <CTA
        label="Присоединяйтесь"
        title="Не нашли подходящую процедуру?"
        buttonLabel="Связаться с нами"
        buttonHref="/contact"
      />
    </Box>
  );
}
