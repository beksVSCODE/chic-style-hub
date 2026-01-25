import { Heart } from "lucide-react";

interface ProductCardProps {
  image: string;
  name: string;
  price: number;
  oldPrice?: number;
  sizes: string[];
  isNew?: boolean;
}

const ProductCard = ({ image, name, price, oldPrice, sizes, isNew }: ProductCardProps) => {
  const formatPrice = (value: number) => {
    return new Intl.NumberFormat("ru-RU").format(value) + "сом";
  };

  return (
    <div className="group card-elegant">
      {/* Image Container */}
      <div className="relative aspect-[3/4] overflow-hidden bg-secondary">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        
        {/* Badges */}
        {isNew && (
          <span className="absolute top-2 left-2 md:top-3 md:left-3 bg-accent text-accent-foreground px-2 md:px-3 py-0.5 md:py-1 text-xs font-medium rounded-full">
            Новинка
          </span>
        )}
        
        {oldPrice && (
          <span className="absolute top-2 right-2 md:top-3 md:right-3 bg-primary text-primary-foreground px-2 md:px-3 py-0.5 md:py-1 text-xs font-medium rounded-full">
            Скидка
          </span>
        )}

        {/* Mobile: Tap to contact overlay */}
        <a
          href="https://wa.me/+996550773938"
          target="_blank"
          rel="noopener noreferrer"
          className="absolute inset-x-0 bottom-0 p-3 md:p-4 bg-gradient-to-t from-foreground/70 to-transparent md:opacity-0 md:group-hover:opacity-100 transition-opacity"
        >
          <span className="block w-full bg-background text-foreground py-2 md:py-2.5 rounded-full text-xs md:text-sm font-medium text-center hover:bg-primary hover:text-primary-foreground transition-colors">
            Написать продавцу
          </span>
        </a>
      </div>

      {/* Details */}
      <div className="p-3 md:p-4">
        <h3 className="font-medium text-foreground text-sm md:text-base mb-1 md:mb-2 line-clamp-2">{name}</h3>
        
        {/* Sizes - Simplified on mobile */}
        <div className="flex flex-wrap gap-1 mb-2 md:mb-3">
          {sizes.slice(0, 4).map((size) => (
            <span
              key={size}
              className="text-xs text-muted-foreground bg-secondary px-1.5 md:px-2 py-0.5 rounded"
            >
              {size}
            </span>
          ))}
          {sizes.length > 4 && (
            <span className="text-xs text-muted-foreground">+{sizes.length - 4}</span>
          )}
        </div>

        {/* Price */}
        <div className="flex items-center gap-2">
          <span className="font-semibold text-base md:text-lg text-foreground">{formatPrice(price)}</span>
          {oldPrice && (
            <span className="text-xs md:text-sm text-muted-foreground line-through">
              {formatPrice(oldPrice)}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
