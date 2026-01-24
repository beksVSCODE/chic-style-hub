import { Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container-custom px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <a href="#home" className="font-serif text-2xl font-semibold">
              NurSap<span className="text-primary">Collection</span>
            </a>
            <p className="mt-4 text-background/70 text-sm leading-relaxed">
              Ваш бутик женской одежды на центральном рынке. 
              Элегантность, качество и стиль уже 10 лет.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Навигация</h4>
            <nav className="space-y-2">
              {[
                { name: "Главная", href: "#home" },
                { name: "О нас", href: "#about" },
                { name: "Каталог", href: "#catalog" },
                { name: "Новинки", href: "#new" },
                { name: "Контакты", href: "#contact" },
              ].map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block text-background/70 hover:text-background transition-colors text-sm"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Контакты</h4>
            <div className="space-y-2 text-sm text-background/70">
              <p>+996 550 773 938</p>
              <p>г. Бишкек, Рынок Дордой</p>
              <p className="pt-2">Пн-Вс: 8:00 - 15:00</p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-background/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-background/50 text-sm">
            © {currentYear} NurSapCollection. Все права защищены.
          </p>
          <p className="text-background/50 text-sm flex items-center gap-1">
            Сделано с <Heart className="w-4 h-4 text-primary fill-primary" /> для наших клиентов
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
