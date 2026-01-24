import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Главная", href: "#home" },
  { name: "О нас", href: "#about" },
  { name: "Каталог", href: "#catalog" },
  { name: "Новинки", href: "#new" },
  { name: "Отзывы", href: "#reviews" },
  { name: "Контакты", href: "#contact" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container-custom">
        <div className="flex items-center justify-between h-14 md:h-20 px-4">
          {/* Logo */}
          <a href="#home" className="font-serif text-xl md:text-3xl font-semibold text-foreground">
            NurSap<span className="text-primary">Collection</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors link-underline"
              >
                {link.name}
              </button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 -mr-2 text-foreground"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation - Full Screen */}
        {isMenuOpen && (
          <nav className="md:hidden fixed inset-x-0 top-14 bottom-0 bg-background/98 backdrop-blur-sm animate-fade-in z-40">
            <div className="flex flex-col items-center justify-center h-full gap-2 -mt-16">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className="text-2xl font-serif font-medium text-foreground hover:text-primary transition-colors py-4 px-8"
                >
                  {link.name}
                </button>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
