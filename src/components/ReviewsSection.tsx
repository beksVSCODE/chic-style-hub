import { Star, Quote } from "lucide-react";

const reviews = [
  {
    id: 1,
    name: "Анна К.",
    rating: 5,
    text: "Прекрасный магазин! Всегда нахожу здесь что-то особенное. Качество отличное, цены адекватные. Продавцы очень приветливые и помогают с выбором.",
    date: "2 недели назад",
  },
  {
    id: 2,
    name: "Мария С.",
    rating: 5,
    text: "Купила пальто — просто влюбилась! Носить одно удовольствие. Уже второй сезон и выглядит как новое. Обязательно вернусь за весенней коллекцией.",
    date: "1 месяц назад",
  },
  {
    id: 3,
    name: "Елена П.",
    rating: 5,
    text: "Рекомендую всем подругам! Здесь можно собрать полный гардероб. Особенно нравится, что всегда можно примерить и подобрать размер.",
    date: "3 недели назад",
  },
];

const ReviewsSection = () => {
  return (
    <section id="reviews" className="section-padding">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-primary font-medium tracking-widest uppercase text-sm mb-4">
            Что говорят клиенты
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Отзывы покупателей
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Нам доверяют тысячи женщин. Вот что они говорят о нас.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-card p-6 md:p-8 rounded-xl shadow-soft relative"
            >
              {/* Quote Icon */}
              <Quote className="absolute top-6 right-6 w-8 h-8 text-primary/20" />

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-accent text-accent"
                  />
                ))}
              </div>

              {/* Text */}
              <p className="text-foreground mb-6 leading-relaxed">
                "{review.text}"
              </p>

              {/* Author */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-primary font-semibold">
                      {review.name.charAt(0)}
                    </span>
                  </div>
                  <span className="font-medium text-foreground">{review.name}</span>
                </div>
                <span className="text-sm text-muted-foreground">{review.date}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { value: "1000+", label: "Довольных клиентов" },
            { value: "10+", label: "Лет на рынке" },
            { value: "500+", label: "Моделей одежды" },
            { value: "4.9", label: "Средняя оценка" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-serif text-3xl md:text-4xl font-bold text-primary mb-2">
                {stat.value}
              </p>
              <p className="text-muted-foreground text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
