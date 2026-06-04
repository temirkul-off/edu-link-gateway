import { Link } from "@tanstack/react-router";
import { GraduationCap, MapPin, Phone, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="container-x py-14 grid gap-10 md:grid-cols-4">
        <div>
          <Link to="/" className="flex items-center gap-2 font-display font-bold text-lg">
            <span className="grid h-9 w-9 place-items-center rounded-lg gradient-brand text-primary-foreground">
              <GraduationCap className="h-5 w-5" />
            </span>
            INTER EDU LINK
          </Link>
          <p className="mt-4 text-sm text-muted-foreground">
            Образовательное агентство в Бишкеке. Помогаем студентам и родителям поступать в зарубежные вузы.
          </p>
        </div>
        <div>
          <h4 className="text-sm font-semibold mb-3">Услуги</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/study-abroad" className="hover:text-foreground">Учёба за рубежом</Link></li>
            <li><Link to="/language-courses" className="hover:text-foreground">Языковые курсы</Link></li>
            <li><Link to="/visa" className="hover:text-foreground">Визовая поддержка</Link></li>
            <li><Link to="/parents-help" className="hover:text-foreground">Помощь родителям</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold mb-3">Компания</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/about" className="hover:text-foreground">О нас</Link></li>
            <li><Link to="/contacts" className="hover:text-foreground">Контакты</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold mb-3">Контакты</h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li className="flex gap-2"><Phone className="h-4 w-4 mt-0.5 text-primary" /> +996 700207172</li>
            <li className="flex gap-2"><Mail className="h-4 w-4 mt-0.5 text-primary" /> interedulink2017@gmail.com</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="container-x py-5 text-xs text-muted-foreground flex flex-col sm:flex-row justify-between gap-2">
          <span>© {new Date().getFullYear()} INTER EDU LINK. Все права защищены.</span>
          <span>Бишкек, Кыргызстан</span>
        </div>
      </div>
    </footer>
  );
}
