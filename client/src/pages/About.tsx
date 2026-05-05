// LUXE BEAUTY — About Page (Biologique Recherche style)
// White/off-white bg, editorial split sections, team grid, values, timeline

import { useRef, useState, useEffect } from "react";
import { Link } from "wouter";

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

const labelStyle: React.CSSProperties = {
  fontFamily: "'Jost', sans-serif",
  fontWeight: 400,
  fontSize: "0.6rem",
  letterSpacing: "0.22em",
  textTransform: "uppercase" as const,
  color: "#9A9690",
};

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
  { year: "2010", text: "Основание Luxe Beauty в Москве. Первый салон на Патриарших прудах." },
  { year: "2014", text: "Запуск собственной линейки косметики на основе натуральных активных компонентов." },
  { year: "2018", text: "Открытие второго салона. Партнёрство с ведущими европейскими лабораториями." },
  { year: "2022", text: "Запуск онлайн-платформы и доставки продуктов по всей России." },
  { year: "2024", text: "Более 50 000 довольных клиентов. Расширение линейки до 80+ продуктов." },
];

export default function About() {
  const storyRef = useInView();
  const valuesRef = useInView();
  const teamRef = useInView();
  const timelineRef = useInView();

  return (
    <div style={{ background: "#F8F7F4", minHeight: "100vh" }}>

      {/* Page header */}
      <div className="text-center py-14" style={{ background: "#fff", borderBottom: "1px solid #F0EEE9" }}>
        <p style={{ ...labelStyle, marginBottom: "0.5rem" }}>Luxe Beauty</p>
        <h1 style={{ fontFamily: "'Jost', sans-serif", fontWeight: 200, fontSize: "clamp(1.2rem, 3vw, 1.8rem)", letterSpacing: "0.28em", textTransform: "uppercase", color: "#1C1B18" }}>
          О нас
        </h1>
        <div style={{ width: "2rem", height: "1px", background: "#1C1B18", margin: "0.75rem auto 0" }} />
      </div>

      {/* Story split */}
      <section style={{ background: "#fff" }}>
        <div
          ref={storyRef.ref}
          className={`grid grid-cols-1 md:grid-cols-2 transition-all duration-1000 ${storyRef.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          style={{ minHeight: 560 }}
        >
          <div className="overflow-hidden" style={{ minHeight: 400 }}>
            <img
              src="https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=900&q=80"
              alt="Наша история"
              className="w-full h-full object-cover"
              style={{ transition: "transform 0.6s ease" }}
              onMouseEnter={e => (e.currentTarget.style.transform = "scale(1.03)")}
              onMouseLeave={e => (e.currentTarget.style.transform = "scale(1)")}
            />
          </div>
          <div className="flex flex-col justify-center px-12 py-16">
            <p style={{ ...labelStyle, marginBottom: "0.75rem" }}>Наша история</p>
            <h2 style={{ fontFamily: "'Jost', sans-serif", fontWeight: 200, fontSize: "clamp(1.2rem, 2.5vw, 1.8rem)", letterSpacing: "0.18em", textTransform: "uppercase", color: "#1C1B18", lineHeight: 1.4, marginBottom: "0.75rem" }}>
              Красота как наука
            </h2>
            <div style={{ width: "2rem", height: "1px", background: "#1C1B18", margin: "0 0 1.5rem" }} />
            <p style={{ fontFamily: "'Jost', sans-serif", fontWeight: 300, fontSize: "0.8rem", lineHeight: 1.9, color: "#6B6860", marginBottom: "1rem" }}>
              Luxe Beauty основан в 2010 году с одной целью — объединить передовую науку и искусство ухода за кожей. Мы убеждены, что каждый человек заслуживает профессионального, персонализированного подхода к красоте.
            </p>
            <p style={{ fontFamily: "'Jost', sans-serif", fontWeight: 300, fontSize: "0.8rem", lineHeight: 1.9, color: "#6B6860" }}>
              За 14 лет мы помогли более чем 50 000 клиентов обрести уверенность в себе и достичь видимых результатов. Наши специалисты постоянно совершенствуют знания и применяют только проверенные методики.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section style={{ padding: "5rem 0" }}>
        <div className="container">
          <div
            ref={valuesRef.ref}
            className={`transition-all duration-1000 ${valuesRef.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <div className="text-center mb-12">
              <p style={{ fontFamily: "'Jost', sans-serif", fontWeight: 300, fontSize: "0.7rem", letterSpacing: "0.28em", textTransform: "uppercase", color: "#1C1B18" }}>
                Наши ценности
              </p>
              <div style={{ width: "2rem", height: "1px", background: "#1C1B18", margin: "0.75rem auto 0" }} />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {VALUES.map((v) => (
                <div key={v.num} style={{ background: "#fff", padding: "2.5rem" }}>
                  <p style={{ fontFamily: "'Jost', sans-serif", fontWeight: 200, fontSize: "1.8rem", letterSpacing: "0.1em", color: "#D8D5CF", marginBottom: "1rem" }}>
                    {v.num}
                  </p>
                  <h3 style={{ fontFamily: "'Jost', sans-serif", fontWeight: 400, fontSize: "0.65rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#1C1B18", marginBottom: "0.75rem" }}>
                    {v.title}
                  </h3>
                  <div style={{ width: "1.5rem", height: "1px", background: "#D8D5CF", marginBottom: "0.75rem" }} />
                  <p style={{ fontFamily: "'Jost', sans-serif", fontWeight: 300, fontSize: "0.72rem", lineHeight: 1.9, color: "#6B6860" }}>
                    {v.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section style={{ background: "#fff", padding: "5rem 0" }}>
        <div className="container">
          <div
            ref={teamRef.ref}
            className={`transition-all duration-1000 ${teamRef.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <div className="text-center mb-12">
              <p style={{ fontFamily: "'Jost', sans-serif", fontWeight: 300, fontSize: "0.7rem", letterSpacing: "0.28em", textTransform: "uppercase", color: "#1C1B18" }}>
                Наша команда
              </p>
              <div style={{ width: "2rem", height: "1px", background: "#1C1B18", margin: "0.75rem auto 0" }} />
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {TEAM.map((member) => (
                <div key={member.name} className="group text-center">
                  <div className="overflow-hidden mb-4" style={{ aspectRatio: "3/4" }}>
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                      style={{ transition: "transform 0.5s ease" }}
                      onMouseEnter={e => (e.currentTarget.style.transform = "scale(1.04)")}
                      onMouseLeave={e => (e.currentTarget.style.transform = "scale(1)")}
                    />
                  </div>
                  <p style={{ fontFamily: "'Jost', sans-serif", fontWeight: 400, fontSize: "0.65rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "#1C1B18", marginBottom: "0.3rem" }}>
                    {member.name}
                  </p>
                  <p style={{ fontFamily: "'Jost', sans-serif", fontWeight: 300, fontSize: "0.65rem", color: "#9A9690" }}>
                    {member.role}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section style={{ padding: "5rem 0" }}>
        <div className="container">
          <div
            ref={timelineRef.ref}
            className={`transition-all duration-1000 ${timelineRef.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <div className="text-center mb-12">
              <p style={{ fontFamily: "'Jost', sans-serif", fontWeight: 300, fontSize: "0.7rem", letterSpacing: "0.28em", textTransform: "uppercase", color: "#1C1B18" }}>
                Наш путь
              </p>
              <div style={{ width: "2rem", height: "1px", background: "#1C1B18", margin: "0.75rem auto 0" }} />
            </div>
            <div className="max-w-2xl mx-auto">
              {TIMELINE.map((item, i) => (
                <div key={item.year} className="flex gap-8 mb-8">
                  <div className="flex flex-col items-center">
                    <div style={{ width: 1, height: i === 0 ? 0 : 24, background: "#E8E5DF" }} />
                    <div style={{ width: 8, height: 8, background: "#1C1B18", flexShrink: 0 }} />
                    <div style={{ width: 1, flex: 1, background: "#E8E5DF" }} />
                  </div>
                  <div style={{ paddingBottom: "1.5rem" }}>
                    <p style={{ fontFamily: "'Jost', sans-serif", fontWeight: 400, fontSize: "0.6rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "#9A9690", marginBottom: "0.4rem" }}>
                      {item.year}
                    </p>
                    <p style={{ fontFamily: "'Jost', sans-serif", fontWeight: 300, fontSize: "0.78rem", lineHeight: 1.8, color: "#6B6860" }}>
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "#2D2B6E", padding: "5rem 0" }}>
        <div className="container text-center">
          <p style={{ fontFamily: "'Jost', sans-serif", fontWeight: 400, fontSize: "0.6rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "rgba(255,255,255,0.5)", marginBottom: "0.75rem" }}>
            Присоединяйтесь
          </p>
          <h2 style={{ fontFamily: "'Jost', sans-serif", fontWeight: 200, fontSize: "clamp(1.2rem, 2.5vw, 1.6rem)", letterSpacing: "0.2em", textTransform: "uppercase", color: "#fff", marginBottom: "0.75rem" }}>
            Начните свой путь к идеальной коже
          </h2>
          <div style={{ width: "2rem", height: "1px", background: "rgba(255,255,255,0.4)", margin: "0 auto 2rem" }} />
          <Link href="/booking">
            <span className="btn-br-white" style={{ fontSize: "0.6rem" }}>Записаться на консультацию</span>
          </Link>
        </div>
      </section>

    </div>
  );
}
