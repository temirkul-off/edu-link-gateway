import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { ApplicationForm } from "@/components/site/ApplicationForm";
import { FileText, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/visa")({
  head: () => ({
    meta: [
      { title: "Визовая поддержка | INTER EDU LINK" },
      { name: "description", content: "Полное сопровождение визового процесса: документы, запись, собеседование." },
    ],
  }),
  component: VisaPage,
});

const steps = [
  "Консультация и определение типа визы",
  "Сбор и проверка документов",
  "Перевод и нотариальное заверение",
  "Запись в визовый центр / посольство",
  "Подготовка к собеседованию",
  "Получение визы и брифинг перед вылетом",
];

const docs = [
  "Загранпаспорт (срок действия минимум 12 месяцев)",
  "Подтверждение о зачислении в вуз",
  "Договор на обучение",
  "Подтверждение оплаты обучения / общежития",
  "Выписка с банковского счёта",
  "Медицинская страховка",
  "Биометрические фотографии",
  "Сертификат о знании языка",
];

function VisaPage() {
  return (
    <>
      <PageHero
        eyebrow="Визовая поддержка"
        title="Студенческая виза под ключ"
        description="98% наших студентов получают визу с первого раза. Берём на себя весь процесс от и до."
      />
      <section className="py-16">
        <div className="container-x grid lg:grid-cols-2 gap-10">
          <div>
            <h2 className="text-2xl font-bold">Этапы получения визы</h2>
            <ol className="mt-6 space-y-4">
              {steps.map((s, i) => (
                <li key={s} className="flex gap-4 rounded-xl border border-border bg-card p-4">
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full gradient-brand text-primary-foreground font-semibold">{i + 1}</span>
                  <span className="text-sm self-center">{s}</span>
                </li>
              ))}
            </ol>
          </div>
          <div>
            <h2 className="text-2xl font-bold">Список документов</h2>
            <ul className="mt-6 space-y-3 rounded-2xl border border-border bg-card p-6">
              {docs.map((d) => (
                <li key={d} className="flex items-start gap-3 text-sm">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" /> {d}
                </li>
              ))}
            </ul>
            <div className="mt-6 rounded-2xl bg-primary-soft border border-primary/20 p-5 flex items-start gap-3">
              <FileText className="h-5 w-5 text-primary mt-0.5" />
              <div>
                <h3 className="font-semibold">Сроки оформления</h3>
                <p className="mt-1 text-sm text-muted-foreground">От 30 до 90 дней в зависимости от страны и типа визы. Рекомендуем подавать за 3–4 месяца до начала учёбы.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="pb-24">
        <div className="container-x max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-center">Получить визовую консультацию</h2>
          <div className="mt-8"><ApplicationForm /></div>
        </div>
      </section>
    </>
  );
}
