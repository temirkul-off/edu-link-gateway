import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { ApplicationForm } from "@/components/site/ApplicationForm";
import { MapPin, Phone, Mail, MessageCircle, Clock } from "lucide-react";

export const Route = createFileRoute("/contacts")({
  head: () => ({
    meta: [
      { title: "Контакты | INTER EDU LINK Бишкек" },
      { name: "description", content: "Адрес: Бишкек, пр. Чингиза Айтматова 82А. Телефон, WhatsApp, форма обратной связи." },
    ],
  }),
  component: ContactsPage,
});

function ContactsPage() {
  return (
    <>
      <PageHero
        eyebrow="Контакты"
        title="Свяжитесь с нами"
        description="Приходите в офис, звоните или напишите в WhatsApp — мы ответим в течение часа."
      />
      <section className="py-16">
        <div className="container-x grid lg:grid-cols-2 gap-10">
          <div className="space-y-4">
            <Card icon={Phone} title="Телефон"><a href="tel:+996700207172" className="hover:text-primary">+996 (700) 20-71-72</a></Card>
            <Card icon={MessageCircle} title="WhatsApp"><a href="https://wa.me/996700207172" target="_blank" rel="noopener noreferrer" className="hover:text-primary">Написать в WhatsApp</a></Card>
            <Card icon={Mail} title="Email"><a href="mailto:interedulink2017@gmail.com" className="hover:text-primary">interedulink2017@gmail.com</a></Card>
            <Card icon={Clock} title="Часы работы">Пн–Сб: 09:00 – 18:00 · Вс: выходной</Card>
          </div>
          <div>
            <h2 className="text-2xl font-bold">Форма обратной связи</h2>
            <p className="mt-2 text-muted-foreground">Оставьте заявку и мы свяжемся с вами.</p>
            <div className="mt-6"><ApplicationForm /></div>
          </div>
        </div>
      </section>
    </>
  );
}

function Card({ icon: Icon, title, children }: { icon: typeof MapPin; title: string; children: React.ReactNode }) {
  return (
    <div className="flex gap-4 rounded-2xl border border-border bg-card p-5">
      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg bg-primary-soft text-primary">
        <Icon className="h-5 w-5" />
      </span>
      <div>
        <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">{title}</h3>
        <div className="mt-1 text-base text-foreground">{children}</div>
      </div>
    </div>
  );
}
