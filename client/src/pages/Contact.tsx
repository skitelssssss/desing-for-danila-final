// LUXE BEAUTY — Contact Page (Biologique Recherche style)
// White/off-white bg, split layout, clean form, minimal info panel

import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

const labelStyle: React.CSSProperties = {
  fontFamily: "'Jost', sans-serif",
  fontWeight: 400,
  fontSize: "0.6rem",
  letterSpacing: "0.22em",
  textTransform: "uppercase" as const,
  color: "#9A9690",
};

const inputStyle: React.CSSProperties = {
  width: "100%",
  background: "#F8F7F4",
  border: "1px solid #D8D5CF",
  padding: "0.875rem 1rem",
  fontFamily: "'Jost', sans-serif",
  fontWeight: 300,
  fontSize: "0.78rem",
  color: "#1C1B18",
  outline: "none",
  transition: "border-color 0.2s",
};

const fieldLabelStyle: React.CSSProperties = {
  fontFamily: "'Jost', sans-serif",
  fontWeight: 400,
  fontSize: "0.6rem",
  letterSpacing: "0.18em",
  textTransform: "uppercase" as const,
  color: "#6B6860",
  display: "block",
  marginBottom: "0.5rem",
};

interface ContactForm {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const CONTACT_INFO = [
  { label: "Адрес", value: "Москва, ул. Патриарших прудов, 12" },
  { label: "Телефон", value: "+7 (495) 123-45-67" },
  { label: "Email", value: "hello@luxebeauty.ru" },
  { label: "Часы работы", value: "Пн–Сб: 10:00 – 20:00\nВс: 11:00 – 18:00" },
];

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
    <div style={{ background: "#F8F7F4", minHeight: "100vh" }}>

      {/* Page header */}
      <div className="text-center py-14" style={{ background: "#fff", borderBottom: "1px solid #F0EEE9" }}>
        <p style={{ ...labelStyle, marginBottom: "0.5rem" }}>Luxe Beauty</p>
        <h1 style={{ fontFamily: "'Jost', sans-serif", fontWeight: 200, fontSize: "clamp(1.2rem, 3vw, 1.8rem)", letterSpacing: "0.28em", textTransform: "uppercase", color: "#1C1B18" }}>
          Контакты
        </h1>
        <div style={{ width: "2rem", height: "1px", background: "#1C1B18", margin: "0.75rem auto 0" }} />
      </div>

      {/* Split layout */}
      <div className="grid grid-cols-1 md:grid-cols-2" style={{ minHeight: 600 }}>

        {/* Left: Contact info */}
        <div style={{ background: "#1C1B18", padding: "4rem 3rem" }}>
          <p style={{ fontFamily: "'Jost', sans-serif", fontWeight: 400, fontSize: "0.6rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "rgba(255,255,255,0.4)", marginBottom: "0.75rem" }}>
            Свяжитесь с нами
          </p>
          <h2 style={{ fontFamily: "'Jost', sans-serif", fontWeight: 200, fontSize: "clamp(1.2rem, 2vw, 1.5rem)", letterSpacing: "0.2em", textTransform: "uppercase", color: "#fff", marginBottom: "0.75rem" }}>
            Мы рады помочь
          </h2>
          <div style={{ width: "2rem", height: "1px", background: "rgba(255,255,255,0.3)", marginBottom: "3rem" }} />

          <div className="flex flex-col gap-8">
            {CONTACT_INFO.map(({ label, value }) => (
              <div key={label}>
                <p style={{ fontFamily: "'Jost', sans-serif", fontWeight: 400, fontSize: "0.58rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,0.4)", marginBottom: "0.4rem" }}>
                  {label}
                </p>
                <p style={{ fontFamily: "'Jost', sans-serif", fontWeight: 300, fontSize: "0.78rem", lineHeight: 1.8, color: "rgba(255,255,255,0.85)", whiteSpace: "pre-line" }}>
                  {value}
                </p>
              </div>
            ))}
          </div>

          <div style={{ marginTop: "3rem" }}>
            <p style={{ fontFamily: "'Jost', sans-serif", fontWeight: 400, fontSize: "0.58rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,0.4)", marginBottom: "1rem" }}>
              Соцсети
            </p>
            <div className="flex gap-4 flex-wrap">
              {["Instagram", "Telegram", "VK"].map((s) => (
                <button
                  key={s}
                  onClick={() => toast.info("Ссылка скоро будет добавлена")}
                  style={{
                    fontFamily: "'Jost', sans-serif",
                    fontWeight: 400,
                    fontSize: "0.58rem",
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    color: "rgba(255,255,255,0.5)",
                    background: "none",
                    border: "1px solid rgba(255,255,255,0.15)",
                    padding: "6px 14px",
                    cursor: "pointer",
                    transition: "all 0.2s",
                  }}
                  onMouseEnter={e => { e.currentTarget.style.color = "#fff"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.5)"; }}
                  onMouseLeave={e => { e.currentTarget.style.color = "rgba(255,255,255,0.5)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)"; }}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Right: Contact form */}
        <div style={{ background: "#fff", padding: "4rem 3rem" }}>
          <p style={{ ...labelStyle, marginBottom: "0.75rem" }}>Написать нам</p>
          <h2 style={{ fontFamily: "'Jost', sans-serif", fontWeight: 200, fontSize: "clamp(1.2rem, 2vw, 1.5rem)", letterSpacing: "0.2em", textTransform: "uppercase", color: "#1C1B18", marginBottom: "0.75rem" }}>
            Задайте вопрос
          </h2>
          <div style={{ width: "2rem", height: "1px", background: "#1C1B18", marginBottom: "2.5rem" }} />

          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
            <div>
              <label style={fieldLabelStyle}>Имя *</label>
              <input
                {...register("name", { required: true })}
                placeholder="Анна Иванова"
                style={{ ...inputStyle, borderColor: errors.name ? "#c0392b" : "#D8D5CF" }}
              />
            </div>
            <div>
              <label style={fieldLabelStyle}>Email *</label>
              <input
                type="email"
                {...register("email", { required: true })}
                placeholder="anna@example.com"
                style={{ ...inputStyle, borderColor: errors.email ? "#c0392b" : "#D8D5CF" }}
              />
            </div>
            <div>
              <label style={fieldLabelStyle}>Тема</label>
              <select {...register("subject")} style={inputStyle}>
                <option value="">Выберите тему</option>
                {["Вопрос о продукте", "Запись на процедуру", "Доставка и оплата", "Партнёрство", "Другое"].map(s => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
            </div>
            <div>
              <label style={fieldLabelStyle}>Сообщение *</label>
              <textarea
                {...register("message", { required: true })}
                rows={5}
                placeholder="Ваш вопрос или сообщение..."
                style={{ ...inputStyle, resize: "vertical", borderColor: errors.message ? "#c0392b" : "#D8D5CF" }}
              />
            </div>
            <button type="submit" className="btn-br mt-2" style={{ fontSize: "0.6rem" }}>
              {submitted ? "Отправлено ✓" : "Отправить сообщение"}
            </button>
          </form>
        </div>
      </div>

      {/* Map placeholder */}
      <div style={{ background: "#E8E5DF", height: 280, display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div className="text-center">
          <p style={{ ...labelStyle, marginBottom: "0.5rem" }}>Москва, Патриаршие пруды</p>
          <p style={{ fontFamily: "'Jost', sans-serif", fontWeight: 300, fontSize: "0.72rem", color: "#6B6860" }}>
            ул. Патриарших прудов, 12 — в 5 минутах от м. Маяковская
          </p>
        </div>
      </div>

    </div>
  );
}
