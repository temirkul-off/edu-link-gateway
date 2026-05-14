import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { ApplicationForm } from "@/components/site/ApplicationForm";
import { CalendarDays, Coins, GraduationCap, ListChecks } from "lucide-react";

export const Route = createFileRoute("/study-abroad")({
  head: () => ({
    meta: [
      { title: "Учёба за рубежом — Чехия, Германия, Россия, США | INTER EDU LINK" },
      { name: "description", content: "Поступление в зарубежные вузы. Программы, требования, стоимость и сроки подачи документов." },
    ],
  }),
  component: StudyAbroadPage,
});

const countries = [
  {
    id: "чехия",
    name: "Чехия",
    flag: "🇨🇿",
    description: "Возможность бесплатного обучения на чешском языке в государственных вузах. Дипломы признаются в ЕС.",
    courses: "Бакалавриат, магистратура, языковые годовые курсы при вузах.",
    requirements: "Аттестат, нострификация, чешский B1–B2, мотивационное письмо.",
    cost: "Бесплатно (на чешском) или €2 000–6 000/год (на английском).",
    deadline: "Подача документов: ноябрь — март.",
  },
  {
    id: "россия",
    name: "Россия",
    flag: "🇷🇺",
    description: "Бюджетные места и квоты Россотрудничества. Сильные технические и медицинские вузы.",
    courses: "Бакалавриат, специалитет, магистратура, аспирантура.",
    requirements: "Аттестат, ЕГЭ или внутренние экзамены, медсправка.",
    cost: "Бесплатно (квота) или ₽150 000–450 000/год.",
    deadline: "Квоты: октябрь — январь. Контракт: до августа.",
  },
  {
    id: "германия",
    name: "Германия",
    flag: "🇩🇪",
    description: "Бесплатное высшее образование в государственных университетах. Топ инженерных и технических направлений.",
    courses: "Studienkolleg, бакалавриат, магистратура, дуальное обучение.",
    requirements: "Аттестат, немецкий B2–C1 или английский, тест TestAS.",
    cost: "Бесплатно + семестровый взнос €150–350.",
    deadline: "Зимний семестр: до 15 июля. Летний: до 15 января.",
  },
  {
    id: "сша",
    name: "США",
    flag: "🇺🇸",
    description: "Мировые рейтинги, стипендии до 100% и широкий выбор специальностей.",
    courses: "Community College, Bachelor, Master, MBA, PhD.",
    requirements: "TOEFL/IELTS, SAT/GRE/GMAT, эссе, рекомендации.",
    cost: "$15 000–60 000/год (стипендии до полной).",
    deadline: "Fall: ноябрь — февраль. Spring: июль — октябрь.",
  },
];

function StudyAbroadPage() {
  return (
    <>
      <PageHero
        eyebrow="Учёба за рубежом"
        title="Поступление в зарубежные вузы"
        description="Подбор страны, программы и сопровождение от подачи документов до зачисления."
      />
      <section className="py-16">
        <div className="container-x grid gap-8">
          {countries.map((c) => (
            <article key={c.id} id={c.id} className="rounded-3xl border border-border bg-card p-8 shadow-card scroll-mt-24">
              <div className="flex flex-wrap items-center gap-4">
                <span className="text-5xl">{c.flag}</span>
                <h2 className="text-3xl font-bold">{c.name}</h2>
              </div>
              <p className="mt-4 text-muted-foreground max-w-3xl">{c.description}</p>
              <div className="mt-8 grid sm:grid-cols-2 gap-5">
                <Info icon={GraduationCap} title="Программы">{c.courses}</Info>
                <Info icon={ListChecks} title="Требования">{c.requirements}</Info>
                <Info icon={Coins} title="Стоимость">{c.cost}</Info>
                <Info icon={CalendarDays} title="Сроки подачи">{c.deadline}</Info>
              </div>
            </article>
          ))}
        </div>
      </section>
      <section className="pb-24">
        <div className="container-x grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl font-bold">Получите персональный план поступления</h2>
            <p className="mt-3 text-muted-foreground">Расскажем какие документы готовить, в какие вузы реально поступить и сколько это будет стоить.</p>
          </div>
          <ApplicationForm />
        </div>
      </section>
    </>
  );
}

function Info({ icon: Icon, title, children }: { icon: typeof CalendarDays; title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-2xl bg-surface border border-border p-5">
      <div className="flex items-center gap-2 text-primary">
        <Icon className="h-4 w-4" />
        <span className="text-xs font-semibold uppercase tracking-wider">{title}</span>
      </div>
      <p className="mt-2 text-sm text-foreground">{children}</p>
    </div>
  );
}
