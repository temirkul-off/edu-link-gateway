import { Link } from "@tanstack/react-router";
import { Menu, X, GraduationCap } from "lucide-react";
import { useState } from "react";

const links = [
  { to: "/", label: "Главная" },
  { to: "/study-abroad", label: "Учёба за рубежом" },
  { to: "/language-courses", label: "Языковые курсы" },
  { to: "/visa", label: "Визовая поддержка" },
  { to: "/parents-help", label: "Помощь родителям" },
  { to: "/about", label: "О компании" },
  { to: "/contacts", label: "Контакты" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur">
      <div className="container-x flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2 font-display font-bold text-lg" onClick={() => setOpen(false)}>
          <span className="grid h-9 w-9 place-items-center rounded-lg gradient-brand text-primary-foreground">
            <GraduationCap className="h-5 w-5" />
          </span>
          <span>INTER EDU LINK</span>
        </Link>
        <nav className="hidden lg:flex items-center gap-1">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: l.to === "/" }}
              className="px-3 py-2 text-sm font-medium text-muted-foreground rounded-md hover:text-foreground hover:bg-muted transition"
              activeProps={{ className: "px-3 py-2 text-sm font-medium rounded-md text-primary bg-primary-soft" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <Link
          to="/contacts"
          className="hidden lg:inline-flex items-center rounded-full gradient-brand text-primary-foreground px-5 py-2 text-sm font-semibold shadow-soft hover:opacity-95 transition"
        >
          Оставить заявку
        </Link>
        <button
          className="lg:hidden p-2 -mr-2 text-foreground"
          onClick={() => setOpen((v) => !v)}
          aria-label="Меню"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      {open && (
        <div className="lg:hidden border-t border-border bg-background">
          <nav className="container-x py-3 flex flex-col">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="py-3 text-base text-foreground border-b border-border/60 last:border-0"
              >
                {l.label}
              </Link>
            ))}
            <Link
              to="/contacts"
              onClick={() => setOpen(false)}
              className="mt-3 inline-flex justify-center rounded-full gradient-brand text-primary-foreground px-5 py-3 text-sm font-semibold"
            >
              Оставить заявку
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
