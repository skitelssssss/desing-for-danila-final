// LUXE BEAUTY — Services Page (MUI)
import { Link } from "wouter";
import { useInView } from "@/shared/hooks/useInView";
import { SERVICES } from "@/entities/service";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";

const PROCESS_STEPS = [
  { num: "01", title: "Анализ кожи", desc: "Детальная диагностика состояния кожи с помощью профессионального оборудования и экспертной оценки специалиста." },
  { num: "02", title: "Индивидуальный протокол", desc: "Разработка персонального плана процедур с учётом особенностей вашей кожи и желаемых результатов." },
  { num: "03", title: "Профессиональный уход", desc: "Проведение процедур с использованием премиальных продуктов и передовых техник." },
  { num: "04", title: "Домашний уход", desc: "Подбор индивидуальной программы домашнего ухода для поддержания и усиления результата." },
];

const labelSx = { fontFamily: "'Nunito', sans-serif", fontWeight: 400, fontSize: "0.68rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "#9A9690" };
const dividerSx = { width: "2rem", height: "1px", bgcolor: "#1C1B18", mx: "auto", mt: 0.75 };

export default function Services() {
  const heroRef = useInView();
  const gridRef = useInView();
  const processRef = useInView();

  const fadeSx = (inView: boolean) => ({
    transition: "all 1s",
    opacity: inView ? 1 : 0,
    transform: inView ? "translateY(0)" : "translateY(32px)",
  });

  return (
    <Box sx={{ bgcolor: "#F8F7F4", minHeight: "100vh" }}>
      {/* Page header */}
      <Box sx={{ textAlign: "center", py: 3, bgcolor: "#fff", borderBottom: "1px solid #F0EEE9" }}>
        <Typography sx={{ ...labelSx, mb: 0.5 }}>Luxe Beauty</Typography>
        <Typography sx={{ fontFamily: "'Nunito', sans-serif", fontWeight: 400, fontSize: "clamp(1.2rem, 3vw, 1.7rem)", letterSpacing: "0.28em", textTransform: "uppercase", color: "#1C1B18" }}>
          Процедуры
        </Typography>
      </Box>

      {/* Hero split */}
      <Box component="section" sx={{ bgcolor: "#fff" }}>
        <Grid container ref={heroRef.ref} sx={{ minHeight: 500, ...fadeSx(heroRef.inView) }}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Box sx={{ overflow: "hidden", minHeight: 380, height: "100%" }}>
              <img
                src="https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=900&q=80"
                alt="Процедуры"
                style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.6s ease" }}
                onMouseEnter={e => (e.currentTarget.style.transform = "scale(1.03)")}
                onMouseLeave={e => (e.currentTarget.style.transform = "scale(1)")}
              />
            </Box>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }} sx={{ display: "flex" }}>
            <Box sx={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", px: 6, py: 8 }}>
              <Typography sx={{ ...labelSx, mb: 0.75 }}>Наш подход</Typography>
              <Typography sx={{ fontFamily: "'Nunito', sans-serif", fontWeight: 400, fontSize: "clamp(1rem, 2vw, 1.3rem)", letterSpacing: "0.18em", textTransform: "uppercase", color: "#1C1B18", lineHeight: 1.4, mb: 0.75 }}>
                Наука красоты
              </Typography>
              <Box sx={{ width: "2rem", height: "1px", bgcolor: "#1C1B18", mx: "auto", mb: 1.5 }} />
              <Typography sx={{ fontFamily: "'Nunito', sans-serif", fontWeight: 400, fontSize: "1rem", lineHeight: 1.9, color: "#6B6860", maxWidth: 520, mx: "auto", mb: 2, textAlign: "center" }}>
                Каждая процедура разработана с учётом индивидуальных потребностей вашей кожи. Наши специалисты проводят тщательную диагностику, сочетая передовые технологии с проверенными методиками мирового уровня. Мы используем только премиальные продукты и персонализированный подход, чтобы достичь видимых и долгосрочных результатов. Доверьте свою красоту профессионалам Luxe Beauty.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>

      {/* Services grid */}
      <Box component="section" sx={{ py: 10 }}>
        <Container>
          <Box ref={gridRef.ref} sx={fadeSx(gridRef.inView)}>
            <Box sx={{ textAlign: "center", mb: 6 }}>
              <Typography sx={{ fontFamily: "'Nunito', sans-serif", fontWeight: 400, fontSize: "0.65rem", letterSpacing: "0.28em", textTransform: "uppercase", color: "#1C1B18" }}>
                Наши процедуры
              </Typography>
              <Box sx={dividerSx} />
            </Box>
            <Grid container spacing={3}>
              {SERVICES.map((service, i) => (
                <Grid key={service.id} size={{ xs: 12, sm: 6, lg: 4 }} sx={{ display: "flex" }}>
                  <Box
                    sx={{
                      bgcolor: "#fff",
                      p: 3.5,
                      display: "flex",
                      flexDirection: "column",
                      flex: 1,
                      transition: "transform 0.5s cubic-bezier(0.33, 1, 0.68, 1), box-shadow 0.5s cubic-bezier(0.33, 1, 0.68, 1)",
                      "&:hover": { transform: "translateY(-6px)", boxShadow: "0 12px 40px rgba(0,0,0,0.1)" },
                    }}
                  >
                    <Typography sx={{ ...labelSx, mb: 1.25 }}>0{i + 1}</Typography>
                    <Typography sx={{ fontFamily: "'Nunito', sans-serif", fontWeight: 400, fontSize: "0.8rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#1C1B18", mb: 0.5 }}>
                      {service.name}
                    </Typography>
                    <Box sx={{ width: "1.5rem", height: "1px", bgcolor: "#D8D5CF", my: 1 }} />
                    <Typography sx={{ fontFamily: "'Nunito', sans-serif", fontWeight: 400, fontSize: "0.72rem", lineHeight: 1.6, color: "#6B6860", flex: 1, mb: 1.5 }}>
                      {service.description}
                    </Typography>
                    <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                      <Box>
                        <Typography sx={{ ...labelSx, mb: 0.25 }}>Длительность</Typography>
                        <Typography sx={{ fontFamily: "'Nunito', sans-serif", fontWeight: 400, fontSize: "0.65rem", color: "#1C1B18" }}>{service.duration}</Typography>
                      </Box>
                      <Box sx={{ textAlign: "right" }}>
                        <Typography sx={{ ...labelSx, mb: 0.25 }}>Стоимость</Typography>
                        <Typography sx={{ fontFamily: "'Nunito', sans-serif", fontWeight: 400, fontSize: "0.8rem", color: "#1C1B18" }}>Br{service.price}</Typography>
                      </Box>
                    </Box>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Container>
      </Box>

      {/* Process steps */}
      <Box component="section" sx={{ bgcolor: "#fff", py: 10 }}>
        <Container>
          <Box ref={processRef.ref} sx={fadeSx(processRef.inView)}>
            <Box sx={{ textAlign: "center", mb: 2 }}>
              <Typography sx={{ fontFamily: "'Nunito', sans-serif", fontWeight: 400, fontSize: "0.65rem", letterSpacing: "0.28em", textTransform: "uppercase", color: "#1C1B18" }}>
                Как это работает
              </Typography>
              <Box sx={dividerSx} />
            </Box>
            <Grid container spacing={4}>
              {PROCESS_STEPS.map((step) => (
                <Grid key={step.num} size={{ xs: 12, sm: 6, lg: 3 }}>
                  <Box sx={{ textAlign: "center" }}>
                    <Typography sx={{ fontFamily: "'Nunito', sans-serif", fontWeight: 400, fontSize: "2.5rem", letterSpacing: "0.1em", color: "#D8D5CF", mb: 1 }}>
                      {step.num}
                    </Typography>
                    <Typography variant="h4" sx={{ mb: 0.75 }}>{step.title}</Typography>
                    <Box sx={{ width: "1.5rem", height: "1px", bgcolor: "#D8D5CF", mx: "auto", mb: 0.75 }} />
                    <Typography sx={{ fontFamily: "'Nunito', sans-serif", fontWeight: 400, fontSize: "0.8rem", lineHeight: 1.9, color: "#6B6860" }}>
                      {step.desc}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Container>
      </Box>

      {/* CTA */}
      <Box component="section" sx={{ bgcolor: "#0F1B3D", py: 10 }}>
        <Container sx={{ textAlign: "center" }}>
          <Typography sx={{ fontFamily: "'Nunito', sans-serif", fontWeight: 400, fontSize: "0.825rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "rgba(255,255,255,0.5)", mb: 0.75 }}>
            Начните сейчас
          </Typography>
          <Typography sx={{ fontFamily: "'Nunito', sans-serif", fontWeight: 400, fontSize: "clamp(1rem, 2vw, 1.3rem)", letterSpacing: "0.2em", textTransform: "uppercase", color: "#fff", mb: 0.75 }}>
            Свяжитесь с нами
          </Typography>
          <Box sx={{ width: "2rem", height: "1px", bgcolor: "rgba(255,255,255,0.4)", mx: "auto", mb: 2 }} />
        </Container>
      </Box>
    </Box>
  );
}
