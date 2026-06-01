import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import parentsImg from "@/assets/parents-help.jpg";
import { Ear, Volume2, MessageSquare, Music, Heart, Download, AlertCircle, CheckCircle2 } from "lucide-react";
import { Link } from "@tanstack/react-router";

export const Route = createFileRoute("/parents-help")({
  head: () => ({
    meta: [
      { title: "Развитие слухового восприятия у детей с КИ | INTER EDU LINK" },
      { name: "description", content: "Помощь родителям: упражнения и рекомендации по развитию слухового восприятия у детей с нарушением слуха и кохлеарным имплантом." },
    ],
  }),
  component: ParentsHelpPage,
});

const principles = [
  { title: "Регулярность занятий", desc: "Ежедневные короткие занятия эффективнее редких длинных." },
  { title: "Постепенность", desc: "От простых звуков — к словам и связной речи." },
  { title: "Повторение", desc: "Повторяйте материал в разных контекстах для закрепления." },
  { title: "Бытовые ситуации", desc: "Используйте звуки кухни, улицы, игр для тренировки слуха." },
];

const exercises = [
  {
    icon: Ear,
    title: "Развитие слуховых реакций",
    items: ["Распознавание бытовых звуков (телефон, дверной звонок, вода)", "Игры «Услышь — покажи» с предметами и картинками"],
  },
  {
    icon: Volume2,
    title: "Различение звуков",
    items: ["Громко / тихо — хлопки, барабан, голос", "Высоко / низко — музыкальные инструменты, голоса животных"],
  },
  {
    icon: MessageSquare,
    title: "Развитие речи",
    items: ["Повторение слов и коротких фраз", "Простые диалоги в игровой форме", "Чтение вслух с выражением"],
  },
];

const ciTips = [
  "Период адаптации: дайте ребёнку время привыкнуть к новым звукам.",
  "Регулярная настройка процессора у сурдолога каждые 3–6 месяцев.",
  "Совместная работа с логопедом и сурдопедагогом.",
];

const recommendations = [
  "Занимайтесь ежедневно по 10–20 минут",
  "Поддерживайте мотивацию — хвалите и играйте",
  "Создавайте звуковую среду — музыка, разговоры, чтение",
  "Избегайте перегрузки — делайте перерывы",
];

function ParentsHelpPage() {
  return (
    <>
      <PageHero
        eyebrow="Помощь родителям"
        title="Развитие слухового восприятия у детей с нарушениями слуха"
        description="Методические рекомендации для родителей детей с нарушениями слуха, включая детей с кохлеарным имплантом (КИ)."
      />

      <section className="py-14">
        <div className="container-x grid lg:grid-cols-2 gap-10 items-center">
          <img
            src={parentsImg}
            alt="Родитель занимается с ребёнком развитием слуха"
            width={1400}
            height={900}
            loading="lazy"
            className="rounded-3xl shadow-soft object-cover w-full h-[400px]"
          />
          <div>
            <h2 className="text-3xl font-bold">Почему это важно</h2>
            <p className="mt-4 text-muted-foreground">
              Слуховое восприятие — основа для развития речи, мышления и общения ребёнка. От активного участия родителей зависит,
              насколько успешно ребёнок будет адаптироваться к миру звуков.
            </p>
            <p className="mt-3 text-muted-foreground">
              Чем раньше начать целенаправленные занятия — особенно после установки кохлеарного импланта — тем лучше результат.
              Родители играют ключевую роль: именно вы создаёте звуковую среду и вовлекаете ребёнка в общение.
            </p>
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="py-14 bg-surface border-y border-border">
        <div className="container-x">
          <h2 className="text-3xl font-bold">Основные принципы</h2>
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {principles.map((p) => (
              <div key={p.title} className="rounded-2xl bg-card border border-border p-6">
                <CheckCircle2 className="h-6 w-6 text-primary" />
                <h3 className="mt-4 font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Exercises */}
      <section className="py-14">
        <div className="container-x">
          <h2 className="text-3xl font-bold">Упражнения и рекомендации</h2>
          <div className="mt-8 grid lg:grid-cols-3 gap-5">
            {exercises.map((b) => (
              <div key={b.title} className="rounded-2xl border border-border bg-card p-6 shadow-card">
                <span className="inline-grid h-11 w-11 place-items-center rounded-lg gradient-brand text-primary-foreground">
                  <b.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 text-lg font-semibold">{b.title}</h3>
                <ul className="mt-3 space-y-2">
                  {b.items.map((i) => (
                    <li key={i} className="flex gap-2 text-sm text-muted-foreground">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      {i}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CI specifics */}
      <section className="py-14 bg-surface border-y border-border">
        <div className="container-x grid lg:grid-cols-2 gap-10">
          <div>
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-primary bg-primary-soft rounded-full px-3 py-1.5">
              <Music className="h-3.5 w-3.5" /> Кохлеарный имплант
            </span>
            <h2 className="mt-4 text-3xl font-bold">Особенности для детей с КИ</h2>
            <ul className="mt-6 space-y-3">
              {ciTips.map((t) => (
                <li key={t} className="flex gap-3 rounded-xl border border-border bg-card p-4">
                  <AlertCircle className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                  <span className="text-sm">{t}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-primary bg-primary-soft rounded-full px-3 py-1.5">
              <Heart className="h-3.5 w-3.5" /> Для родителей
            </span>
            <h2 className="mt-4 text-3xl font-bold">Рекомендации</h2>
            <ul className="mt-6 space-y-3">
              {recommendations.map((t) => (
                <li key={t} className="flex gap-3 rounded-xl border border-border bg-card p-4">
                  <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                  <span className="text-sm">{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Download + Consultation */}
      <section className="py-16">
        <div className="container-x grid lg:grid-cols-2 gap-6">
          <div className="rounded-3xl border border-border bg-card p-8 shadow-card">
            <Download className="h-8 w-8 text-primary" />
            <h3 className="mt-4 text-2xl font-bold">Скачайте материалы</h3>
            <p className="mt-2 text-muted-foreground">Памятка для родителей с упражнениями и расписанием занятий — в формате PDF.</p>
            <a
              href={"/Памятка.pdf"}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-full border border-primary text-primary px-5 py-3 text-sm font-semibold hover:bg-primary-soft transition"
            >
              <Download className="h-4 w-4" /> Скачать памятку (PDF)
            </a>
          </div>
          <div className="rounded-3xl gradient-brand text-primary-foreground p-8 shadow-soft">
            <Heart className="h-8 w-8" />
            <h3 className="mt-4 text-2xl font-bold">Нужна помощь специалиста?</h3>
            <p className="mt-2 text-primary-foreground/90">Запишитесь на консультацию сурдопедагога — поможем составить индивидуальный план занятий.</p>
            <Link
              to="/contacts"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-background text-foreground px-5 py-3 text-sm font-semibold hover:bg-background/90 transition"
            >
              Получить консультацию
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
