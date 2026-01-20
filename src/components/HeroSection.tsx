import heroImage from "@/assets/hero-fashion.jpg";

const HeroSection = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-[100svh] flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Стильная женская одежда"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-transparent md:from-background/90 md:via-background/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom px-4 pt-20 pb-24">
        <div className="max-w-2xl animate-slide-up">
          <p className="text-primary font-medium tracking-widest uppercase text-xs md:text-sm mb-3 md:mb-4">
            Новая коллекция 2025
          </p>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-foreground leading-tight mb-4 md:mb-6">
            Элегантность в каждой детали
          </h1>
          <p className="text-base md:text-xl text-muted-foreground mb-6 md:mb-8 max-w-lg">
            Откройте для себя изысканные коллекции женской одежды. 
            Стиль, качество и комфорт.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
            <button
              onClick={() => scrollToSection("#catalog")}
              className="btn-primary text-center text-base py-4 sm:py-3"
            >
              Смотреть каталог
            </button>
            <a
              href="https://wa.me/79991234567"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline text-center text-base py-4 sm:py-3 flex items-center justify-center gap-2"
            >
              <span>Написать в WhatsApp</span>
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator - hidden on mobile */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
