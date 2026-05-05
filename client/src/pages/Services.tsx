// LUXE BEAUTY — Services Page (Biologique Recherche style)
// White/off-white bg, centered headings, clean service cards, split editorial

import { useRef, useState, useEffect } from "react";
import { Link } from "wouter";
import { SERVICES } from "@/lib/data";

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

const PROCESS_STEPS = [
  { num: "01", title: "Анализ кожи", desc: "Детальная диагностика состояния кожи с помощью профессионального оборудования и экспертной оценки специалиста." },
  { num: "02", title: "Индивидуальный протокол", desc: "Разработка персонального плана процедур с учётом особенностей вашей кожи и желаемых результатов." },
  { num: "03", title: "Профессиональный уход", desc: "Проведение процедур с использованием премиальных продуктов и передовых техник." },
  { num: "04", title: "Домашний уход", desc: "Подбор индивидуальной программы домашнего ухода для поддержания и усиления результата." },
];

export default function Services() {
  const heroRef = useInView();
  const gridRef = useInView();
  const processRef = useInView();

  return (
    <div style={{ background: "#F8F7F4", minHeight: "100vh" }}>

      {/* Page header */}
      <div className="text-center py-14" style={{ background: "#fff", borderBottom: "1px solid #F0EEE9" }}>
        <p style={{ ...labelStyle, marginBottom: "0.5rem" }}>Luxe Beauty</p>
        <h1 style={{ fontFamily: "'Jost', sans-serif", fontWeight: 200, fontSize: "clamp(1.2rem, 3vw, 1.8rem)", letterSpacing: "0.28em", textTransform: "uppercase", color: "#1C1B18" }}>
          Процедуры
        </h1>
        <div style={{ width: "2rem", height: "1px", background: "#1C1B18", margin: "0.75rem auto 0" }} />
      </div>

      {/* Hero split */}
      <section style={{ background: "#fff" }}>
        <div
          ref={heroRef.ref}
          className={`grid grid-cols-1 md:grid-cols-2 transition-all duration-1000 ${heroRef.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          style={{ minHeight: 500 }}
        >
          <div className="overflow-hidden" style={{ minHeight: 380 }}>
            <img
              src="https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=900&q=80"
              alt="Процедуры"
              className="w-full h-full object-cover"
              style={{ transition: "transform 0.6s ease" }}
              onMouseEnter={e => (e.currentTarget.style.transform = "scale(1.03)")}
              onMouseLeave={e => (e.currentTarget.style.transform = "scale(1)")}
            />
          </div>
          <div className="flex flex-col items-center justify-center text-center px-12 py-16">
            <p style={{ ...labelStyle, marginBottom: "0.75rem" }}>Наш подход</p>
            <h2 style={{ fontFamily: "'Jost', sans-serif", fontWeight: 200, fontSize: "clamp(1.2rem, 2.5vw, 1.8rem)", letterSpacing: "0.18em", textTransform: "uppercase", color: "#1C1B18", lineHeight: 1.4, marginBottom: "0.75rem" }}>
              Наука красоты
            </h2>
            <div style={{ width: "2rem", height: "1px", background: "#1C1B18", margin: "0 auto 1.5rem" }} />
            <p style={{ fontFamily: "'Jost', sans-serif", fontWeight: 300, fontSize: "0.8rem", lineHeight: 1.9, color: "#6B6860", maxWidth: 380, marginBottom: "2rem" }}>
              Каждая процедура разработана с учётом индивидуальных потребностей кожи. Наши специалисты сочетают передовые технологии с проверенными методиками для достижения видимых результатов.
            </p>
            <Link href="/booking">
              <span className="btn-br" style={{ fontSize: "0.6rem" }}>Записаться на процедуру</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Services grid */}
      <section style={{ padding: "5rem 0" }}>
        <div className="container">
          <div
            ref={gridRef.ref}
            className={`transition-all duration-1000 ${gridRef.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <div className="text-center mb-12">
              <p style={{ fontFamily: "'Jost', sans-serif", fontWeight: 300, fontSize: "0.7rem", letterSpacing: "0.28em", textTransform: "uppercase", color: "#1C1B18" }}>
                Наши процедуры
              </p>
              <div style={{ width: "2rem", height: "1px", background: "#1C1B18", margin: "0.75rem auto 0" }} />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {SERVICES.map((service, i) => (
                <div
                  key={service.id}
                  style={{ background: "#fff", padding: "2.5rem", transition: "box-shadow 0.3s ease" }}
                  onMouseEnter={e => (e.currentTarget.style.boxShadow = "0 4px 20px rgba(0,0,0,0.06)")}
                  onMouseLeave={e => (e.currentTarget.style.boxShadow = "none")}
                >
                  <p style={{ ...labelStyle, marginBottom: "1.25rem" }}>0{i + 1}</p>
                  <h3 style={{ fontFamily: "'Jost', sans-serif", fontWeight: 300, fontSize: "0.85rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#1C1B18", marginBottom: "0.5rem" }}>
                    {service.name}
                  </h3>
                  <div style={{ width: "1.5rem", height: "1px", background: "#D8D5CF", margin: "0.75rem 0 1rem" }} />
                  <p style={{ fontFamily: "'Jost', sans-serif", fontWeight: 300, fontSize: "0.75rem", lineHeight: 1.9, color: "#6B6860", marginBottom: "1.5rem" }}>
                    {service.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <div>
                      <p style={{ ...labelStyle, marginBottom: "0.2rem" }}>Длительность</p>
                      <p style={{ fontFamily: "'Jost', sans-serif", fontWeight: 300, fontSize: "0.7rem", color: "#1C1B18" }}>{service.duration}</p>
                    </div>
                    <div className="text-right">
                      <p style={{ ...labelStyle, marginBottom: "0.2rem" }}>Стоимость</p>
                      <p style={{ fontFamily: "'Jost', sans-serif", fontWeight: 400, fontSize: "0.85rem", color: "#1C1B18" }}>₽{service.price}</p>
                    </div>
                  </div>
                  <div style={{ borderTop: "1px solid #F0EEE9", marginTop: "1.5rem", paddingTop: "1.5rem" }}>
                    <Link href="/booking">
                      <span className="btn-br block text-center" style={{ fontSize: "0.56rem" }}>Записаться</span>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process steps */}
      <section style={{ background: "#fff", padding: "5rem 0" }}>
        <div className="container">
          <div
            ref={processRef.ref}
            className={`transition-all duration-1000 ${processRef.inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <div className="text-center mb-12">
              <p style={{ fontFamily: "'Jost', sans-serif", fontWeight: 300, fontSize: "0.7rem", letterSpacing: "0.28em", textTransform: "uppercase", color: "#1C1B18" }}>
                Как это работает
              </p>
              <div style={{ width: "2rem", height: "1px", background: "#1C1B18", margin: "0.75rem auto 0" }} />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {PROCESS_STEPS.map((step) => (
                <div key={step.num} className="text-center">
                  <p style={{ fontFamily: "'Jost', sans-serif", fontWeight: 200, fontSize: "2rem", letterSpacing: "0.1em", color: "#D8D5CF", marginBottom: "1rem" }}>
                    {step.num}
                  </p>
                  <h4 style={{ fontFamily: "'Jost', sans-serif", fontWeight: 400, fontSize: "0.65rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#1C1B18", marginBottom: "0.75rem" }}>
                    {step.title}
                  </h4>
                  <div style={{ width: "1.5rem", height: "1px", background: "#D8D5CF", margin: "0 auto 0.75rem" }} />
                  <p style={{ fontFamily: "'Jost', sans-serif", fontWeight: 300, fontSize: "0.72rem", lineHeight: 1.9, color: "#6B6860" }}>
                    {step.desc}
                  </p>
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
            Начните сейчас
          </p>
          <h2 style={{ fontFamily: "'Jost', sans-serif", fontWeight: 200, fontSize: "clamp(1.2rem, 2.5vw, 1.6rem)", letterSpacing: "0.2em", textTransform: "uppercase", color: "#fff", marginBottom: "0.75rem" }}>
            Запишитесь на онлайн-консультацию
          </h2>
          <div style={{ width: "2rem", height: "1px", background: "rgba(255,255,255,0.4)", margin: "0 auto 2rem" }} />
          <Link href="/booking">
            <span className="btn-br-white" style={{ fontSize: "0.6rem" }}>Записаться</span>
          </Link>
        </div>
      </section>

    </div>
  );
}
