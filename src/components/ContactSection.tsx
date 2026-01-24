import { Phone, MapPin, Clock, MessageCircle } from "lucide-react";

const contactMethods = [
  {
    icon: Phone,
    title: "Телефон",
    value: "+996707493529",
    href: "tel:+996707493529",
    description: "Звоните в рабочие часы",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    value: "Написать в WhatsApp",
    href: "https://wa.me/996550773938",
    description: "Быстрый ответ",
    highlight: true,
  },
];

const ContactSection = () => {
  return (
    <section id="contact" className="section-padding bg-secondary/30">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12">
          <p className="text-primary font-medium tracking-widest uppercase text-xs md:text-sm mb-2 md:mb-4">
            Свяжитесь с нами
          </p>
          <h2 className="font-serif text-2xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 md:mb-4">
            Контакты
          </h2>
          <p className="text-muted-foreground text-sm md:text-base max-w-2xl mx-auto px-4">
            Будем рады помочь вам с выбором!
          </p>
        </div>

        {/* Mobile-First Contact Buttons */}
        <div className="md:hidden space-y-3 mb-8">
          <a
            href="https://wa.me/79991234567"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-4 bg-[#25D366] text-white rounded-xl shadow-md"
          >
            <MessageCircle className="w-8 h-8" />
            <div>
              <p className="font-semibold text-lg">WhatsApp</p>
              <p className="text-sm opacity-90">Быстрый ответ</p>
            </div>
          </a>

          <a
            href="https://t.me/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-4 bg-[#229ED9] text-white rounded-xl shadow-md"
          >
            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.161c-.18 1.897-.962 6.502-1.359 8.627-.168.9-.5 1.201-.82 1.23-.697.064-1.226-.461-1.901-.903-1.056-.692-1.653-1.123-2.678-1.799-1.185-.781-.417-1.21.258-1.911.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.139-5.062 3.345-.479.329-.913.489-1.302.481-.428-.009-1.252-.242-1.865-.442-.752-.244-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.831-2.529 6.998-3.015 3.333-1.386 4.025-1.627 4.477-1.635.099-.002.321.023.465.141.121.1.154.232.17.324.015.093.033.302.019.467z"/>
            </svg>
            <div>
              <p className="font-semibold text-lg">Telegram</p>
              <p className="text-sm opacity-90">@nursapcollection</p>
            </div>
          </a>

          <a
            href="tel:+79991234567"
            className="flex items-center gap-4 p-4 bg-primary text-primary-foreground rounded-xl shadow-md"
          >
            <Phone className="w-8 h-8" />
            <div>
              <p className="font-semibold text-lg">Позвонить</p>
              <p className="text-sm opacity-90">+7 (999) 123-45-67</p>
            </div>
          </a>
        </div>

        {/* Mobile Address & Hours Card */}
        <div className="md:hidden bg-card p-5 rounded-xl shadow-soft mb-6">
          <div className="flex items-start gap-4 mb-5">
            <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-semibold text-foreground mb-1">Адрес</h3>
              <p className="text-muted-foreground text-sm">
                г. Москва, Центральный рынок<br />
                Павильон 42, 2 этаж
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <Clock className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-semibold text-foreground mb-1">Часы работы</h3>
              <p className="text-muted-foreground text-sm">
                Пн-Сб: 9:00 - 19:00<br />
                Вс: 10:00 - 17:00
              </p>
            </div>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Info */}
          <div className="space-y-6">
            {/* Contact Methods */}
            <div className="grid sm:grid-cols-2 gap-4">
              {contactMethods.map((method) => (
                <a
                  key={method.title}
                  href={method.href}
                  target={method.href.startsWith("http") ? "_blank" : undefined}
                  rel={method.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className={`block p-6 rounded-xl transition-all hover:shadow-hover ${
                    method.highlight
                      ? "bg-primary text-primary-foreground"
                      : "bg-card shadow-soft"
                  }`}
                >
                  <method.icon className={`w-8 h-8 mb-4 ${method.highlight ? "text-primary-foreground" : "text-primary"}`} />
                  <h3 className={`font-semibold mb-1 ${method.highlight ? "text-primary-foreground" : "text-foreground"}`}>
                    {method.title}
                  </h3>
                  <p className={`font-medium ${method.highlight ? "text-primary-foreground/90" : "text-foreground"}`}>
                    {method.value}
                  </p>
                  <p className={`text-sm mt-1 ${method.highlight ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
                    {method.description}
                  </p>
                </a>
              ))}
            </div>

            {/* Telegram */}
            <a
              href="https://t.me/+gRq6LHIlDRswNmRi"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-6 bg-card rounded-xl shadow-soft hover:shadow-hover transition-all"
            >
              <div className="w-12 h-12 bg-[#229ED9] rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.161c-.18 1.897-.962 6.502-1.359 8.627-.168.9-.5 1.201-.82 1.23-.697.064-1.226-.461-1.901-.903-1.056-.692-1.653-1.123-2.678-1.799-1.185-.781-.417-1.21.258-1.911.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.139-5.062 3.345-.479.329-.913.489-1.302.481-.428-.009-1.252-.242-1.865-.442-.752-.244-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.831-2.529 6.998-3.015 3.333-1.386 4.025-1.627 4.477-1.635.099-.002.321.023.465.141.121.1.154.232.17.324.015.093.033.302.019.467z"/>
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Telegram</h3>
                <p className="text-muted-foreground">@nursapcollection</p>
              </div>
            </a>

            {/* Address & Hours */}
            <div className="bg-card p-6 rounded-xl shadow-soft">
              <div className="flex items-start gap-4 mb-6">
                <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Адрес контейнера</h3>
                  <p className="text-muted-foreground">
                    Рынок Дордой 0 проход 2042 контейнер<br />
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Clock className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Часы работы</h3>
                  <p className="text-muted-foreground">
                    Пн-Вс: 8:00 - 15:00<br />
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="bg-card rounded-xl overflow-hidden shadow-soft h-[400px] lg:h-full min-h-[400px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2245.2980909454247!2d37.6173!3d55.7558!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTXCsDQ1JzIwLjkiTiAzN8KwMzYnMzguMyJF!5e0!3m2!1sen!2sus!4v1600000000000!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Карта расположения магазина"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
