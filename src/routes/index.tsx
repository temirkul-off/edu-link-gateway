import { createFileRoute, Link } from "@tanstack/react-router";
import { GraduationCap, Globe2, FileCheck2, Languages, ArrowRight, CheckCircle2, Star, Users, Award, Headphones } from "lucide-react";
import heroImg from "@/assets/hero-students.jpg";
import { ApplicationForm } from "@/components/site/ApplicationForm";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "INTER EDU LINK — Учёба за рубежом из Бишкека" },
      { name: "description", content: "Поступление в вузы Чехии, Германии, России и США. Языковые курсы, визовая поддержка, помощь родителям. Бесплатная консультация." },
    ],
  }),
  component: HomePage,
});

const services = [
  { icon: Globe2, title: "Учёба за рубежом", desc: "Подбор программ и поступление в вузы Чехии, Германии, России и США.", to: "/study-abroad" },
  { icon: Languages, title: "Языковые курсы", desc: "Английский, немецкий, чешский — онлайн и офлайн с сертификатом.", to: "/language-courses" },
  { icon: FileCheck2, title: "Визовая поддержка", desc: "Полное сопровождение визового процесса от документов до собеседования.", to: "/visa" },
  { icon: Headphones, title: "Помощь родителям", desc: "Методики развития слухового восприятия у детей с КИ.", to: "/parents-help" },
] as const;

const benefits = [
  { icon: Award, title: "10+ лет опыта", desc: "Сотни студентов уже учатся за рубежом благодаря нам." },
  { icon: Users, title: "Прямые партнёры", desc: "Договоры с университетами и языковыми школами Европы." },
  { icon: CheckCircle2, title: "Гарантия зачисления", desc: "Сопровождаем до получения уведомления о зачислении." },
  { icon: Star, title: "Индивидуальный подход", desc: "Подбираем программу под цели, бюджет и язык студента." },
];

const countries = [
  { name: "Чехия", flag: "🇨🇿", desc: "Бесплатное образование на чешском" },
  { name: "Германия", flag: "🇩🇪", desc: "Топовые инженерные вузы" },
  { name: "Россия", flag: "🇷🇺", desc: "Бюджетные места и квоты" },
  { name: "США", flag: "🇺🇸", desc: "Стипендии и MBA программы" },
];

function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="gradient-soft border-b border-border">
        <div className="container-x grid lg:grid-cols-2 gap-12 py-16 lg:py-24 items-center">
          <div>
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-primary bg-primary-soft rounded-full px-3 py-1.5">
              <GraduationCap className="h-3.5 w-3.5" /> Образование без границ
            </span>
            <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05]">
              Открой двери в <span className="bg-clip-text text-transparent gradient-brand">лучшие вузы мира</span>
            </h1>
            <p className="mt-5 text-lg text-muted-foreground max-w-xl">
              INTER EDU LINK — образовательное агентство в Бишкеке. Поступаем в Чехию, Германию,
              Россию и США. Подбор программы, языковая подготовка и виза под ключ.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/contacts" className="inline-flex items-center gap-2 rounded-full gradient-brand text-primary-foreground px-6 py-3.5 text-sm font-semibold shadow-soft hover:opacity-95 transition">
                Бесплатная консультация <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/study-abroad" className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-6 py-3.5 text-sm font-semibold hover:bg-muted transition">
                Все направления
              </Link>
            </div>
            <div className="mt-10 grid grid-cols-3 gap-6 max-w-md">
              <Stat n="500+" l="студентов" />
              <Stat n="15+" l="вузов-партнёров" />
              <Stat n="98%" l="успешных виз" />
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 gradient-brand opacity-20 blur-3xl rounded-3xl" />
            <img
              src={heroImg}
              alt="Студентка с паспортом в международном кампусе"
              width={1600}
              height={1024}
              className="relative rounded-3xl shadow-soft object-cover w-full h-[480px] lg:h-[560px]"
            />
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20">
        <div className="container-x">
          <SectionHeader eyebrow="Наши услуги" title="Полное сопровождение от выбора до зачисления" />
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {services.map((s) => (
              <Link
                to={s.to}
                key={s.title}
                className="group rounded-2xl border border-border bg-card p-6 shadow-card hover:-translate-y-1 hover:border-primary/40 transition"
              >
                <span className="inline-grid h-12 w-12 place-items-center rounded-xl bg-primary-soft text-primary">
                  <s.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 text-lg font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                  Подробнее <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Countries */}
      <section className="py-16 bg-surface border-y border-border">
        <div className="container-x">
          <SectionHeader eyebrow="Страны" title="Куда можно поступить" />
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {countries.map((c) => (
              <Link to="/study-abroad" hash={c.name.toLowerCase()} key={c.name} className="rounded-2xl bg-card border border-border p-6 hover:border-primary/40 transition">
                <div className="text-4xl">{c.flag}</div>
                <h3 className="mt-3 text-lg font-semibold">{c.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{c.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20">
        <div className="container-x">
          <SectionHeader eyebrow="Почему мы" title="Преимущества INTER EDU LINK" />
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {benefits.map((b) => (
              <div key={b.title} className="rounded-2xl border border-border bg-card p-6">
                <span className="inline-grid h-11 w-11 place-items-center rounded-lg gradient-brand text-primary-foreground">
                  <b.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 font-semibold">{b.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Form */}
      <section className="pb-24">
        <div className="container-x">
          <div className="rounded-3xl gradient-brand text-primary-foreground p-8 lg:p-14 grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold">Готовы начать путь к мечте?</h2>
              <p className="mt-4 text-primary-foreground/90 text-lg">
                Оставьте заявку — наш консультант перезвонит в течение часа и подберёт оптимальную программу под ваши цели.
              </p>
              <ul className="mt-6 space-y-2 text-sm text-primary-foreground/90">
                {["Бесплатная консультация", "Подбор страны и вуза", "Расчёт стоимости"].map((t) => (
                  <li key={t} className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4" /> {t}</li>
                ))}
              </ul>
            </div>
            <div className="text-foreground">
              <ApplicationForm compact />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function Stat({ n, l }: { n: string; l: string }) {
  return (
    <div>
      <div className="text-2xl sm:text-3xl font-bold text-foreground">{n}</div>
      <div className="text-xs text-muted-foreground mt-1">{l}</div>
    </div>
  );
}

function SectionHeader({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="max-w-2xl">
      <span className="text-xs font-semibold uppercase tracking-wider text-primary">{eyebrow}</span>
      <h2 className="mt-2 text-3xl sm:text-4xl font-bold">{title}</h2>
    </div>
  );
}
