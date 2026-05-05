// LUXE BEAUTY — Booking Page (Biologique Recherche style)
// White/off-white bg, clean multi-step form, minimal styling

import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { SERVICES } from "@/lib/data";

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
  background: "#fff",
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
      <div style={{ background: "#F8F7F4", minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div className="text-center" style={{ maxWidth: 480, padding: "2rem" }}>
          <div style={{ width: 64, height: 64, border: "1px solid #1C1B18", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 2rem" }}>
            <span style={{ fontSize: "1.5rem" }}>✓</span>
          </div>
          <p style={{ fontFamily: "'Jost', sans-serif", fontWeight: 300, fontSize: "0.7rem", letterSpacing: "0.28em", textTransform: "uppercase", color: "#1C1B18", marginBottom: "0.75rem" }}>
            Запись подтверждена
          </p>
          <div style={{ width: "2rem", height: "1px", background: "#1C1B18", margin: "0 auto 1.5rem" }} />
          <p style={{ fontFamily: "'Jost', sans-serif", fontWeight: 300, fontSize: "0.78rem", lineHeight: 1.9, color: "#6B6860", marginBottom: "2rem" }}>
            Спасибо за вашу запись. Мы свяжемся с вами в ближайшее время для подтверждения.
          </p>
          <button
            onClick={() => { setSubmitted(false); setStep(0); setSelectedService(""); setSelectedDate(""); setSelectedTime(""); }}
            className="btn-br"
            style={{ fontSize: "0.6rem" }}
          >
            Записаться снова
          </button>
        </div>
      </div>
    );
  }

  return (
    <div style={{ background: "#F8F7F4", minHeight: "100vh" }}>

      {/* Page header */}
      <div className="text-center py-14" style={{ background: "#fff", borderBottom: "1px solid #F0EEE9" }}>
        <p style={{ ...labelStyle, marginBottom: "0.5rem" }}>Luxe Beauty</p>
        <h1 style={{ fontFamily: "'Jost', sans-serif", fontWeight: 200, fontSize: "clamp(1.2rem, 3vw, 1.8rem)", letterSpacing: "0.28em", textTransform: "uppercase", color: "#1C1B18" }}>
          Запись на консультацию
        </h1>
        <div style={{ width: "2rem", height: "1px", background: "#1C1B18", margin: "0.75rem auto 0" }} />
      </div>

      <div className="container py-16">
        <div className="max-w-2xl mx-auto">

          {/* Step indicator */}
          <div className="flex items-center justify-center gap-0 mb-14">
            {STEPS.map((s, i) => (
              <div key={s} className="flex items-center">
                <div className="flex flex-col items-center">
                  <div style={{
                    width: 32, height: 32,
                    border: `1px solid ${i <= step ? "#1C1B18" : "#D8D5CF"}`,
                    background: i < step ? "#1C1B18" : "#fff",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    transition: "all 0.3s",
                  }}>
                    {i < step ? (
                      <span style={{ color: "#fff", fontSize: "0.65rem" }}>✓</span>
                    ) : (
                      <span style={{ fontFamily: "'Jost', sans-serif", fontWeight: 400, fontSize: "0.6rem", color: i === step ? "#1C1B18" : "#9A9690" }}>
                        {i + 1}
                      </span>
                    )}
                  </div>
                  <span style={{ ...labelStyle, marginTop: "0.5rem", color: i === step ? "#1C1B18" : "#9A9690" }}>{s}</span>
                </div>
                {i < STEPS.length - 1 && (
                  <div style={{ width: 80, height: 1, background: i < step ? "#1C1B18" : "#D8D5CF", margin: "0 0.5rem", marginBottom: "1.5rem", transition: "background 0.3s" }} />
                )}
              </div>
            ))}
          </div>

          {/* Step 0: Service selection */}
          {step === 0 && (
            <div>
              <p style={{ fontFamily: "'Jost', sans-serif", fontWeight: 300, fontSize: "0.7rem", letterSpacing: "0.28em", textTransform: "uppercase", color: "#1C1B18", textAlign: "center", marginBottom: "2rem" }}>
                Выберите процедуру
              </p>
              <div className="grid grid-cols-1 gap-3">
                {SERVICES.map((service) => (
                  <button
                    key={service.id}
                    onClick={() => setSelectedService(service.id)}
                    style={{
                      background: selectedService === service.id ? "#1C1B18" : "#fff",
                      border: `1px solid ${selectedService === service.id ? "#1C1B18" : "#E8E5DF"}`,
                      padding: "1.25rem 1.5rem",
                      cursor: "pointer",
                      transition: "all 0.2s",
                      textAlign: "left",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <div>
                      <p style={{ fontFamily: "'Jost', sans-serif", fontWeight: 400, fontSize: "0.65rem", letterSpacing: "0.18em", textTransform: "uppercase", color: selectedService === service.id ? "#fff" : "#1C1B18", marginBottom: "0.3rem" }}>
                        {service.name}
                      </p>
                      <p style={{ fontFamily: "'Jost', sans-serif", fontWeight: 300, fontSize: "0.68rem", color: selectedService === service.id ? "rgba(255,255,255,0.65)" : "#9A9690" }}>
                        {service.duration}
                      </p>
                    </div>
                    <p style={{ fontFamily: "'Jost', sans-serif", fontWeight: 400, fontSize: "0.8rem", color: selectedService === service.id ? "#fff" : "#1C1B18" }}>
                      ₽{service.price}
                    </p>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 1: Date & Time */}
          {step === 1 && (
            <div>
              <p style={{ fontFamily: "'Jost', sans-serif", fontWeight: 300, fontSize: "0.7rem", letterSpacing: "0.28em", textTransform: "uppercase", color: "#1C1B18", textAlign: "center", marginBottom: "2rem" }}>
                Выберите дату и время
              </p>
              <div className="mb-6">
                <label style={fieldLabelStyle}>Дата</label>
                <input
                  type="date"
                  value={selectedDate}
                  onChange={e => setSelectedDate(e.target.value)}
                  style={inputStyle}
                  min={new Date().toISOString().split("T")[0]}
                />
              </div>
              <div>
                <label style={fieldLabelStyle}>Время</label>
                <div className="grid grid-cols-5 gap-2">
                  {TIME_SLOTS.map((t) => (
                    <button
                      key={t}
                      onClick={() => setSelectedTime(t)}
                      style={{
                        background: selectedTime === t ? "#1C1B18" : "#fff",
                        border: `1px solid ${selectedTime === t ? "#1C1B18" : "#E8E5DF"}`,
                        padding: "0.625rem",
                        fontFamily: "'Jost', sans-serif",
                        fontWeight: 300,
                        fontSize: "0.68rem",
                        color: selectedTime === t ? "#fff" : "#1C1B18",
                        cursor: "pointer",
                        transition: "all 0.2s",
                      }}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Step 2: Personal info */}
          {step === 2 && (
            <form onSubmit={handleSubmit(onSubmit)}>
              <p style={{ fontFamily: "'Jost', sans-serif", fontWeight: 300, fontSize: "0.7rem", letterSpacing: "0.28em", textTransform: "uppercase", color: "#1C1B18", textAlign: "center", marginBottom: "2rem" }}>
                Ваши данные
              </p>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <label style={fieldLabelStyle}>Имя *</label>
                  <input
                    {...register("firstName", { required: true })}
                    placeholder="Анна"
                    style={{ ...inputStyle, borderColor: errors.firstName ? "#c0392b" : "#D8D5CF" }}
                  />
                </div>
                <div>
                  <label style={fieldLabelStyle}>Фамилия *</label>
                  <input
                    {...register("lastName", { required: true })}
                    placeholder="Иванова"
                    style={{ ...inputStyle, borderColor: errors.lastName ? "#c0392b" : "#D8D5CF" }}
                  />
                </div>
              </div>
              <div className="mb-4">
                <label style={fieldLabelStyle}>Email *</label>
                <input
                  type="email"
                  {...register("email", { required: true })}
                  placeholder="anna@example.com"
                  style={{ ...inputStyle, borderColor: errors.email ? "#c0392b" : "#D8D5CF" }}
                />
              </div>
              <div className="mb-4">
                <label style={fieldLabelStyle}>Телефон</label>
                <input type="tel" {...register("phone")} placeholder="+7 (999) 000-00-00" style={inputStyle} />
              </div>
              <div className="mb-4">
                <label style={fieldLabelStyle}>Тип кожи</label>
                <select {...register("skinType")} style={inputStyle}>
                  <option value="">Выберите тип кожи</option>
                  {["Нормальная", "Сухая", "Жирная", "Комбинированная", "Чувствительная"].map(t => (
                    <option key={t} value={t}>{t}</option>
                  ))}
                </select>
              </div>
              <div className="mb-4">
                <label style={fieldLabelStyle}>Проблемы кожи</label>
                <input {...register("concerns")} placeholder="Акне, пигментация, морщины..." style={inputStyle} />
              </div>
              <div className="mb-6">
                <label style={fieldLabelStyle}>Дополнительные пожелания</label>
                <textarea {...register("notes")} rows={3} placeholder="Любая дополнительная информация..." style={{ ...inputStyle, resize: "vertical" }} />
              </div>
              <button type="submit" className="btn-br w-full" style={{ fontSize: "0.6rem" }}>
                Подтвердить запись
              </button>
            </form>
          )}

          {/* Navigation */}
          {step < 2 && (
            <div className="flex justify-between mt-10">
              {step > 0 ? (
                <button
                  onClick={() => setStep(step - 1)}
                  style={{ fontFamily: "'Jost', sans-serif", fontWeight: 400, fontSize: "0.6rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "#9A9690", background: "none", border: "none", cursor: "pointer" }}
                >
                  ← Назад
                </button>
              ) : <div />}
              <button
                onClick={() => canGoNext() && setStep(step + 1)}
                className="btn-br"
                style={{ fontSize: "0.6rem", opacity: canGoNext() ? 1 : 0.4, cursor: canGoNext() ? "pointer" : "not-allowed" }}
              >
                Далее →
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
