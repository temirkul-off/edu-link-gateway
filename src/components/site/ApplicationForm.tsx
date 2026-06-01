import { useState } from "react";
import { z } from "zod";
import { Send, CheckCircle2 } from "lucide-react";

const schema = z.object({
  name: z.string().trim().min(2, "Введите имя").max(100),
  phone: z.string().trim().min(6, "Введите телефон").max(30),
  email: z.string().trim().email("Некорректный email").max(255),
  country: z.string().min(1, "Выберите страну"),
  message: z.string().max(1000).optional(),
});

const countries = ["Чехия", "Россия", "Германия", "США", "Другое"];

interface Props {
  defaultCountry?: string;
  compact?: boolean;
}

export function ApplicationForm({ defaultCountry = "", compact = false }: Props) {
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const data = {
      name: String(fd.get("name") || ""),
      phone: String(fd.get("phone") || ""),
      email: String(fd.get("email") || ""),
      country: String(fd.get("country") || ""),
      message: String(fd.get("message") || ""),
    };
    const result = schema.safeParse(data);
    if (!result.success) {
      const errs: Record<string, string> = {};
      for (const issue of result.error.issues) errs[String(issue.path[0])] = issue.message;
      setErrors(errs);
      return;
    }
    setErrors({});
    setLoading(true);
    // Compose WhatsApp link as a friendly fallback "send"
    const text =
      `Заявка с сайта INTER EDU LINK%0A` +
      `Имя: ${encodeURIComponent(data.name)}%0A` +
      `Телефон: ${encodeURIComponent(data.phone)}%0A` +
      `Email: ${encodeURIComponent(data.email)}%0A` +
      `Страна: ${encodeURIComponent(data.country)}%0A` +
      (data.message ? `Сообщение: ${encodeURIComponent(data.message)}` : "");
    setTimeout(() => {
      setLoading(false);
      setSent(true);
      window.open(`https://wa.me/996553432030?text=${text}`, "_blank");
    }, 400);
  }

  if (sent) {
    return (
      <div className="rounded-2xl border border-border bg-card p-8 text-center shadow-card">
        <CheckCircle2 className="h-12 w-12 text-primary mx-auto" />
        <h3 className="mt-4 text-xl font-semibold">Заявка отправлена!</h3>
        <p className="mt-2 text-muted-foreground">Мы свяжемся с вами в ближайшее время.</p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className={`rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-card ${compact ? "" : ""}`}>
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Имя" name="name" error={errors.name} />
        <Field label="Телефон" name="phone" type="tel" placeholder="+996" error={errors.phone} />
        <Field label="Email" name="email" type="email" error={errors.email} />
        <div>
          <label className="text-sm font-medium text-foreground">Страна</label>
          <select
            name="country"
            defaultValue={defaultCountry}
            className="mt-1.5 w-full rounded-lg border border-input bg-background px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
          >
            <option value="">Выберите страну</option>
            {countries.map((c) => <option key={c} value={c}>{c}</option>)}
          </select>
          {errors.country && <p className="mt-1 text-xs text-destructive">{errors.country}</p>}
        </div>
      </div>
      {!compact && (
        <div className="mt-4">
          <label className="text-sm font-medium text-foreground">Сообщение (необязательно)</label>
          <textarea
            name="message"
            rows={3}
            className="mt-1.5 w-full rounded-lg border border-input bg-background px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
          />
        </div>
      )}
      <button
        disabled={loading}
        type="submit"
        className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full gradient-brand text-primary-foreground px-6 py-3 text-sm font-semibold shadow-soft hover:opacity-95 transition disabled:opacity-60"
      >
        {loading ? "Отправка..." : (<>Отправить заявку <Send className="h-4 w-4" /></>)}
      </button>
      <p className="mt-3 text-xs text-muted-foreground text-center">
        Нажимая кнопку, вы соглашаетесь на обработку персональных данных.
      </p>
    </form>
  );
}

function Field({ label, name, type = "text", placeholder, error }: { label: string; name: string; type?: string; placeholder?: string; error?: string }) {
  return (
    <div>
      <label className="text-sm font-medium text-foreground">{label}</label>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        className="mt-1.5 w-full rounded-lg border border-input bg-background px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
      />
      {error && <p className="mt-1 text-xs text-destructive">{error}</p>}
    </div>
  );
}
