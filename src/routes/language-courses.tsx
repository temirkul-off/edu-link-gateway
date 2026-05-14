import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { ApplicationForm } from "@/components/site/ApplicationForm";
import { Monitor, Users, Clock, Wallet } from "lucide-react";

export const Route = createFileRoute("/language-courses")({
  head: () => ({
    meta: [
      { title: "Языковые курсы — английский, немецкий, чешский | INTER EDU LINK" },
      { name: "description", content: "Языковые курсы онлайн и офлайн. Подготовка к IELTS, TOEFL, TestDaF, экзаменам по чешскому." },
    ],
  }),
  component: LangPage,
});

const courses = [
  { lang: "Английский", flag: "🇬🇧", levels: "A1 — C2, IELTS, TOEFL", duration: "3–9 месяцев", price: "от 4 500 сом / месяц" },
  { lang: "Немецкий", flag: "🇩🇪", levels: "A1 — C1, TestDaF, Goethe", duration: "4–10 месяцев", price: "от 5 000 сом / месяц" },
  { lang: "Чешский", flag: "🇨🇿", levels: "A1 — B2 для поступления", duration: "6–12 месяцев", price: "от 6 000 сом / месяц" },
  { lang: "Русский (РКИ)", flag: "🇷🇺", levels: "Подготовка к ТРКИ-1, ТРКИ-2", duration: "3–8 месяцев", price: "от 3 500 сом / месяц" },
];

function LangPage() {
  return (
    <>
      <PageHero
        eyebrow="Языковые курсы"
        title="Курсы иностранных языков"
        description="Опытные преподаватели, мини-группы и индивидуальные занятия. Гарантия результата и сертификат."
      />
      <section className="py-16">
        <div className="container-x grid sm:grid-cols-2 gap-5">
          {courses.map((c) => (
            <div key={c.lang} className="rounded-2xl border border-border bg-card p-6 shadow-card">
              <div className="flex items-center gap-3">
                <span className="text-3xl">{c.flag}</span>
                <h3 className="text-xl font-semibold">{c.lang}</h3>
              </div>
              <ul className="mt-5 space-y-2 text-sm">
                <li className="flex items-start gap-2"><Users className="h-4 w-4 text-primary mt-0.5" /> {c.levels}</li>
                <li className="flex items-start gap-2"><Clock className="h-4 w-4 text-primary mt-0.5" /> {c.duration}</li>
                <li className="flex items-start gap-2"><Wallet className="h-4 w-4 text-primary mt-0.5" /> {c.price}</li>
                <li className="flex items-start gap-2"><Monitor className="h-4 w-4 text-primary mt-0.5" /> Онлайн или офлайн в Бишкеке</li>
              </ul>
            </div>
          ))}
        </div>
      </section>
      <section className="pb-24">
        <div className="container-x max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-center">Запишитесь на пробный урок</h2>
          <p className="mt-3 text-center text-muted-foreground">Бесплатное определение уровня и подбор программы.</p>
          <div className="mt-8"><ApplicationForm /></div>
        </div>
      </section>
    </>
  );
}
