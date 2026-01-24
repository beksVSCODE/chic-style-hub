import aboutImage from "@/assets/about-store.jpg";
import { Heart, Sparkles, Award } from "lucide-react";

const features = [
  {
    icon: Heart,
    title: "С любовью к клиентам",
    description: "Индивидуальный подход к каждой покупательнице",
  },
  {
    icon: Sparkles,
    title: "Качественные ткани",
    description: "Только проверенные поставщики и материалы",
  },
  {
    icon: Award,
    title: "10 лет на рынке",
    description: "Тысячи довольных клиентов по всему городу",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-secondary/30">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative animate-fade-in">
            <img
              src={aboutImage}
              alt="Интерьер магазина BellaRosa"
              className="w-full h-[400px] md:h-[500px] object-cover rounded-lg shadow-card"
            />
            <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground px-8 py-4 rounded-lg shadow-lg hidden md:block">
              <p className="font-serif text-3xl font-bold">10+</p>
              <p className="text-sm">лет опыта</p>
            </div>
          </div>

          {/* Content */}
          <div>
            <p className="text-primary font-medium tracking-widest uppercase text-sm mb-4">
              О нашем магазине
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              История NurSap
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Мы начали свой путь более 10 лет назад на рынке Дордой, с небольшого контейнера. Сегодня NurSap — это надёжный оптовый магазин женской одежды, который работает с владельцами магазинов и розничными продавцами по всей стране.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
             Наша миссия — помогать предпринимателям развивать свой бизнес, предлагая качественную женскую одежду по выгодным оптовым ценам. Мы тщательно отбираем каждую модель, чтобы вы могли уверенно продавать её своим клиентам и зарабатывать больше.
            </p>

            {/* Features */}
            <div className="grid gap-6">
              {features.map((feature) => (
                <div key={feature.title} className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{feature.title}</h3>
                    <p className="text-muted-foreground text-sm">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
