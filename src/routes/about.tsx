import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import officeImg from "@/assets/office.jpg";
import { Target, Sparkles, ShieldCheck, Heart } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "О компании INTER EDU LINK" },
      { name: "description", content: "Образовательное агентство в Бишкеке с многолетним опытом международного обучения." },
    ],
  }),
  component: AboutPage,
});

const values = [
  { icon: Target, title: "Миссия", desc: "Делать качественное международное образование доступным для каждой семьи в Кыргызстане." },
  { icon: Sparkles, title: "Подход", desc: "Индивидуальная стратегия для каждого студента, без шаблонных решений." },
  { icon: ShieldCheck, title: "Гарантии", desc: "Прозрачный договор, фиксированная стоимость и сопровождение до зачисления." },
  { icon: Heart, title: "Поддержка", desc: "Остаёмся на связи и после поступления — помогаем адаптироваться за рубежом." },
];

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="О компании"
        title="INTER EDU LINK"
        description="Образовательное агентство, которое помогает студентам и родителям делать осознанный выбор будущего."
      />
      <section className="py-16">
        <div className="container-x grid lg:grid-cols-2 gap-12 items-center">
          <img
            src={officeImg}
            alt="Офис INTER EDU LINK в Бишкеке"
            width={1400}
            height={900}
            loading="lazy"
            className="rounded-3xl shadow-soft object-cover w-full h-[420px]"
          />
          <div>
            <h2 className="text-3xl font-bold">Кто мы</h2>
            <p className="mt-4 text-muted-foreground">
              Мы — команда консультантов, юристов и педагогов, которые сопровождают студентов на пути к зарубежному образованию.
              За годы работы мы помогли сотням ребят поступить в вузы Чехии, Германии, России и США.
            </p>
            <p className="mt-3 text-muted-foreground">
              Наш офис находится в Бишкеке, на проспекте Чингиза Айтматова 82А. Мы работаем напрямую с университетами и языковыми школами,
              что позволяет давать актуальную информацию и честные сроки.
            </p>
          </div>
        </div>
      </section>
      <section className="py-16 bg-surface border-y border-border">
        <div className="container-x">
          <h2 className="text-3xl font-bold">Наши ценности</h2>
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map((v) => (
              <div key={v.title} className="rounded-2xl bg-card border border-border p-6">
                <span className="inline-grid h-11 w-11 place-items-center rounded-lg bg-primary-soft text-primary">
                  <v.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 font-semibold">{v.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
