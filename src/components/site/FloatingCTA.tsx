import { MessageCircle, Phone } from "lucide-react";

export function FloatingCTA() {
  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-3">
      <a
        href="https://wa.me/996700207172"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
        className="grid h-14 w-14 place-items-center rounded-full bg-[oklch(0.72_0.18_150)] text-white shadow-soft hover:scale-105 transition"
      >
        <MessageCircle className="h-6 w-6" />
      </a>
      <a
        href="tel:+996700207172"
        aria-label="Позвонить"
        className="grid h-14 w-14 place-items-center rounded-full gradient-brand text-primary-foreground shadow-soft hover:scale-105 transition"
      >
        <Phone className="h-6 w-6" />
      </a>
    </div>
  );
}
