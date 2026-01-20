import heroImage from "@/assets/hero-fashion.jpg";

const HeroSection = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Стильная женская одежда"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/60 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom px-4 pt-20">
        <div className="max-w-2xl animate-slide-up">
          <p className="text-primary font-medium tracking-widest uppercase text-sm mb-4">
            Новая коллекция 2025
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight mb-6">
            Элегантность в каждой детали
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-lg">
            Откройте для себя изысканные коллекции женской одежды. 
            Стиль, качество и комфорт для современных женщин.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => scrollToSection("#catalog")}
              className="btn-primary text-center"
            >
              Смотреть каталог
            </button>
            <button
              onClick={() => scrollToSection("#new")}
              className="btn-outline text-center"
            >
              Новинки сезона
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
