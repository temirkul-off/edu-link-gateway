import { Link } from "@tanstack/react-router";
import { Menu, X, GraduationCap, ChevronDown, Globe2, Languages, FileCheck2 } from "lucide-react";
import { useState, useRef, useEffect } from "react";

const admissionLinks = [
  { to: "/study-abroad", label: "Учёба за рубежом", desc: "Поступление в вузы Европы, России и США", icon: Globe2 },
  { to: "/language-courses", label: "Языковые курсы", desc: "Английский, немецкий, чешский", icon: Languages },
  { to: "/visa", label: "Визовая поддержка", desc: "Сопровождение визового процесса", icon: FileCheck2 },
] as const;

const simpleLinks = [
  { to: "/", label: "Главная" },
  { to: "/parents-help", label: "Помощь родителям" },
  { to: "/about", label: "О компании" },
  { to: "/contacts", label: "Контакты" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const [admissionOpen, setAdmissionOpen] = useState(false);
  const [mobileAdmissionOpen, setMobileAdmissionOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setAdmissionOpen(false);
      }
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

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
          <Link
            to="/"
            activeOptions={{ exact: true }}
            className="px-3 py-2 text-sm font-medium text-muted-foreground rounded-md hover:text-foreground hover:bg-muted transition"
            activeProps={{ className: "px-3 py-2 text-sm font-medium rounded-md text-primary bg-primary-soft" }}
          >
            Главная
          </Link>

          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setAdmissionOpen((v) => !v)}
              className="inline-flex items-center gap-1 px-3 py-2 text-sm font-medium text-muted-foreground rounded-md hover:text-foreground hover:bg-muted transition"
            >
              Поступающим
              <ChevronDown className={`h-4 w-4 transition ${admissionOpen ? "rotate-180" : ""}`} />
            </button>
            {admissionOpen && (
              <div className="absolute left-0 top-full mt-2 w-80 rounded-2xl border border-border bg-popover shadow-soft p-2 animate-in fade-in slide-in-from-top-2">
                {admissionLinks.map((l) => (
                  <Link
                    key={l.to}
                    to={l.to}
                    onClick={() => setAdmissionOpen(false)}
                    className="flex items-start gap-3 rounded-xl p-3 hover:bg-muted transition"
                  >
                    <span className="mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-primary-soft text-primary">
                      <l.icon className="h-4.5 w-4.5" />
                    </span>
                    <span>
                      <span className="block text-sm font-semibold text-foreground">{l.label}</span>
                      <span className="block text-xs text-muted-foreground mt-0.5">{l.desc}</span>
                    </span>
                  </Link>
                ))}
              </div>
            )}
          </div>

          {simpleLinks.slice(1).map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="px-3 py-2 text-sm font-medium text-muted-foreground rounded-md hover:text-foreground hover:bg-muted transition"
              activeProps={{ className: "px-3 py-2 text-sm font-medium rounded-md text-primary bg-primary-soft" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <Link
          to="/contacts"
          className="hidden lg:inline-flex items-center justify-center leading-none rounded-full gradient-brand text-primary-foreground px-5 h-10 text-sm font-semibold shadow-soft hover:opacity-95 transition"
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
            <Link
              to="/"
              onClick={() => setOpen(false)}
              className="py-3 text-base text-foreground border-b border-border/60"
            >
              Главная
            </Link>
            <button
              onClick={() => setMobileAdmissionOpen((v) => !v)}
              className="flex items-center justify-between py-3 text-base text-foreground border-b border-border/60"
            >
              Поступающим
              <ChevronDown className={`h-4 w-4 transition ${mobileAdmissionOpen ? "rotate-180" : ""}`} />
            </button>
            {mobileAdmissionOpen && (
              <div className="pl-4 border-b border-border/60">
                {admissionLinks.map((l) => (
                  <Link
                    key={l.to}
                    to={l.to}
                    onClick={() => setOpen(false)}
                    className="block py-2.5 text-sm text-muted-foreground"
                  >
                    {l.label}
                  </Link>
                ))}
              </div>
            )}
            {simpleLinks.slice(1).map((l) => (
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
