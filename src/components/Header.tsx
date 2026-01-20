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
        <div className="flex items-center justify-between h-16 md:h-20 px-4">
          {/* Logo */}
          <a href="#home" className="font-serif text-2xl md:text-3xl font-semibold text-foreground">
            Bella<span className="text-primary">Rosa</span>
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
            className="md:hidden p-2 text-foreground"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 px-4 border-t border-border animate-fade-in">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className="block w-full text-left py-3 text-base font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                {link.name}
              </button>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
