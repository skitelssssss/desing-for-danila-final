// LUXE BEAUTY — About Page (MUI)
import { Link } from "wouter";
import { useInView } from "@/shared/hooks/useInView";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";

const TEAM = [
  { name: "Мария Соколова", role: "Основатель & Главный эксперт", image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=600&q=80" },
  { name: "Анна Петрова", role: "Старший косметолог", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&q=80" },
  { name: "Елена Кузнецова", role: "Специалист по уходу за кожей", image: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=600&q=80" },
  { name: "Ольга Иванова", role: "Beauty-консультант", image: "https://images.unsplash.com/photo-1614644147798-f8c0fc9da7f6?w=600&q=80" },
];

const VALUES = [
  { num: "01", title: "Наука", desc: "Каждый продукт и процедура основаны на передовых научных исследованиях и клинически доказанных результатах." },
  { num: "02", title: "Индивидуальность", desc: "Мы верим, что красота уникальна. Каждый клиент получает персональный подход и индивидуальный протокол ухода." },
  { num: "03", title: "Качество", desc: "Только лучшие ингредиенты, только проверенные методики. Компромисс с качеством для нас недопустим." },
  { num: "04", title: "Результат", desc: "Видимый и долгосрочный результат — главный критерий нашей работы. Мы сопровождаем вас на каждом этапе." },
];

const TIMELINE = [
  { year: "2010", text: "Основание Luxe Beauty в Минске. Первый салон на улице Независимости." },
  { year: "2014", text: "Запуск собственной линейки косметики на основе натуральных активных компонентов." },
  { year: "2018", text: "Открытие второго салона. Партнёрство с ведущими европейскими лабораториями." },
  { year: "2022", text: "Запуск онлайн-платформы и доставки продуктов по всей Беларуси." },
  { year: "2024", text: "Более 50 000 довольных клиентов. Расширение линейки до 80+ продуктов." },
];

const labelSx = { fontFamily: "'Nunito', sans-serif", fontWeight: 400, fontSize: "0.68rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "#9A9690" };
const h2Sx = { fontFamily: "'Nunito', sans-serif", fontWeight: 400, fontSize: "clamp(1rem, 2vw, 1.3rem)", letterSpacing: "0.18em", textTransform: "uppercase", color: "#1C1B18", lineHeight: 1.4 };
const bodySx = { fontFamily: "'Nunito', sans-serif", fontWeight: 400, fontSize: "1rem", lineHeight: 1.9, color: "#6B6860" };
const sectionTitleSx = { fontFamily: "'Nunito', sans-serif", fontWeight: 400, fontSize: "0.65rem", letterSpacing: "0.28em", textTransform: "uppercase", color: "#1C1B18" };
const dividerSx = { width: "2rem", height: "1px", bgcolor: "#1C1B18", mx: "auto", mt: 0.75 };

export default function About() {
  const storyRef = useInView();
  const valuesRef = useInView();
  const teamRef = useInView();
  const timelineRef = useInView();

  const fadeInSx = (inView: boolean) => ({
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
          О нас
        </Typography>
      </Box>

      {/* Story split */}
      <Box component="section" sx={{ bgcolor: "#fff" }}>
        <Grid container ref={storyRef.ref} sx={{ minHeight: 500, ...fadeInSx(storyRef.inView) }}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Box sx={{ overflow: "hidden", minHeight: 380, height: "100%" }}>
              <img
                src="https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=900&q=80"
                alt="Наша история"
                style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.6s ease" }}
                onMouseEnter={e => (e.currentTarget.style.transform = "scale(1.03)")}
                onMouseLeave={e => (e.currentTarget.style.transform = "scale(1)")}
              />
            </Box>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }} sx={{ display: "flex" }}>
            <Box sx={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", px: 6, py: 8 }}>
              <Typography sx={{ ...labelSx, mb: 0.75 }}>Наша история</Typography>
              <Typography sx={{ ...h2Sx, mb: 0.75 }}>Красота как наука</Typography>
              <Box sx={{ width: "2rem", height: "1px", bgcolor: "#1C1B18", mx: "auto", mb: 1.5 }} />
              <Typography sx={{ ...bodySx, maxWidth: 520, mx: "auto", mb: 2, textAlign: "center" }}>
                Luxe Beauty основан в 2010 году с одной целью — объединить передовую науку и искусство ухода за кожей. Мы убеждены, что каждый человек заслуживает профессионального, персонализированного подхода к красоте. За 14 лет мы помогли более чем 50 000 клиентов обрести уверенность в себе и достичь видимых результатов. Наши специалисты постоянно совершенствуют знания и применяют только проверенные методики.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>

      {/* Values */}
      <Box component="section" sx={{ py: 10 }}>
        <Container>
          <Box ref={valuesRef.ref} sx={fadeInSx(valuesRef.inView)}>
            <Box sx={{ textAlign: "center", mb: 6 }}>
              <Typography sx={sectionTitleSx}>Наши ценности</Typography>
              <Box sx={dividerSx} />
            </Box>
            <Grid container spacing={3}>
              {VALUES.map((v) => (
                <Grid key={v.num} size={{ xs: 12, sm: 6, lg: 3 }} sx={{ display: "flex" }}>
                  <Box
  sx={{
    bgcolor: "#fff", p: 3.5, flex: 1,
    transition: "transform 0.5s cubic-bezier(0.33, 1, 0.68, 1), box-shadow 0.5s cubic-bezier(0.33, 1, 0.68, 1)",
    "&:hover": { transform: "translateY(-6px)", boxShadow: "0 12px 40px rgba(0,0,0,0.1)" },
  }}
>
                    <Typography sx={{ fontFamily: "'Nunito', sans-serif", fontWeight: 400, fontSize: "2.25rem", letterSpacing: "0.1em", color: "#D8D5CF", mb: 1 }}>
                      {v.num}
                    </Typography>
                    <Typography variant="h4" sx={{ mb: 0.75 }}>{v.title}</Typography>
                    <Box sx={{ width: "1.5rem", height: "1px", bgcolor: "#D8D5CF", mb: 0.75 }} />
                    <Typography sx={{ fontFamily: "'Nunito', sans-serif", fontWeight: 400, fontSize: "0.8rem", lineHeight: 1.9, color: "#6B6860" }}>
                      {v.desc}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Container>
      </Box>

      {/* Team */}
      <Box component="section" sx={{ bgcolor: "#fff", py: 10 }}>
        <Container>
          <Box ref={teamRef.ref} sx={fadeInSx(teamRef.inView)}>
            <Box sx={{ textAlign: "center", mb: 6 }}>
              <Typography sx={sectionTitleSx}>Наша команда</Typography>
              <Box sx={dividerSx} />
            </Box>
            <Grid container spacing={3}>
              {TEAM.map((member) => (
                <Grid key={member.name} size={{ xs: 6, md: 3 }}>
                  <Box sx={{ textAlign: "center" }}>
                    <Box sx={{ overflow: "hidden", mb: 2, aspectRatio: "3/4" }}>
                      <img
                        src={member.image}
                        alt={member.name}
                        style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.5s ease" }}
                        onMouseEnter={e => (e.currentTarget.style.transform = "scale(1.04)")}
                        onMouseLeave={e => (e.currentTarget.style.transform = "scale(1)")}
                      />
                    </Box>
                    <Typography sx={{ fontFamily: "'Nunito', sans-serif", fontWeight: 400, fontSize: "0.72rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#1C1B18", mb: 0.375 }}>
                      {member.name}
                    </Typography>
                    <Typography sx={{ fontFamily: "'Nunito', sans-serif", fontWeight: 400, fontSize: "0.72rem", color: "#9A9690" }}>
                      {member.role}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Container>
      </Box>

      {/* Timeline */}
      <Box component="section" sx={{ py: 10 }}>
        <Container>
          <Box ref={timelineRef.ref}>
            <Box sx={{ textAlign: "center", mb: 6 }}>
              <Typography sx={sectionTitleSx}>Наш путь</Typography>
              <Box sx={dividerSx} />
            </Box>
            <Box sx={{ maxWidth: 672, mx: "auto" }}>
              {TIMELINE.map((item, i) => (
                <Box
                  key={item.year}
                  sx={{
                    display: "flex", gap: 4, mb: 4,
                    transition: "all 0.8s cubic-bezier(0.33, 1, 0.68, 1)",
                    transitionDelay: `${i * 0.15}s`,
                    opacity: timelineRef.inView ? 1 : 0,
                    transform: timelineRef.inView ? "translateX(0)" : "translateX(-40px)",
                  }}
                >
                  <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <Box sx={{ width: 1, height: i === 0 ? 0 : 24, bgcolor: "#E8E5DF" }} />
                    <Box sx={{ width: 8, height: 8, bgcolor: "#1C1B18", flexShrink: 0 }} />
                    <Box sx={{ width: 1, flex: 1, bgcolor: "#E8E5DF" }} />
                  </Box>
                  <Box sx={{ pb: 1.5 }}>
                    <Typography sx={{ fontFamily: "'Nunito', sans-serif", fontWeight: 400, fontSize: "0.825rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "#9A9690", mb: 0.5 }}>
                      {item.year}
                    </Typography>
                    <Typography sx={{ fontFamily: "'Nunito', sans-serif", fontWeight: 400, fontSize: "0.68rem", lineHeight: 1.8, color: "#6B6860" }}>
                      {item.text}
                    </Typography>
                  </Box>
                </Box>
              ))}
            </Box>
          </Box>
        </Container>
      </Box>

      {/* CTA */}
      <Box component="section" sx={{ bgcolor: "#0F1B3D", py: 10 }}>
        <Container sx={{ textAlign: "center" }}>
          <Typography sx={{ fontFamily: "'Nunito', sans-serif", fontWeight: 400, fontSize: "0.825rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "rgba(255,255,255,0.5)", mb: 0.75 }}>
            Присоединяйтесь
          </Typography>
          <Typography sx={{ fontFamily: "'Nunito', sans-serif", fontWeight: 400, fontSize: "clamp(1rem, 2vw, 1.3rem)", letterSpacing: "0.2em", textTransform: "uppercase", color: "#fff", mb: 0.75 }}>
            Начните свой путь к идеальной коже
          </Typography>
          <Box sx={{ width: "2rem", height: "1px", bgcolor: "rgba(255,255,255,0.4)", mx: "auto", mb: 2 }} />
          <Link href="/contact">
          </Link>
        </Container>
      </Box>
    </Box>
  );
}
