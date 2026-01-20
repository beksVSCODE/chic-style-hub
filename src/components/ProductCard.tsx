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
    return new Intl.NumberFormat("ru-RU").format(value) + " ₽";
  };

  return (
    <div className="group card-elegant">
      {/* Image Container */}
      <div className="relative aspect-[3/4] overflow-hidden bg-secondary">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        
        {/* Badges */}
        {isNew && (
          <span className="absolute top-3 left-3 bg-accent text-accent-foreground px-3 py-1 text-xs font-medium rounded-full">
            Новинка
          </span>
        )}
        
        {oldPrice && (
          <span className="absolute top-3 right-3 bg-primary text-primary-foreground px-3 py-1 text-xs font-medium rounded-full">
            Скидка
          </span>
        )}

        {/* Wishlist Button */}
        <button
          className="absolute top-3 right-3 w-10 h-10 bg-background/80 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-background"
          aria-label="Добавить в избранное"
          style={{ display: oldPrice ? "none" : "flex" }}
        >
          <Heart className="w-5 h-5 text-foreground" />
        </button>

        {/* Quick View Overlay */}
        <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-foreground/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
          <button className="w-full bg-background text-foreground py-2.5 rounded-full text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors">
            Написать продавцу
          </button>
        </div>
      </div>

      {/* Details */}
      <div className="p-4">
        <h3 className="font-medium text-foreground mb-2 line-clamp-2">{name}</h3>
        
        {/* Sizes */}
        <div className="flex flex-wrap gap-1 mb-3">
          {sizes.map((size) => (
            <span
              key={size}
              className="text-xs text-muted-foreground bg-secondary px-2 py-0.5 rounded"
            >
              {size}
            </span>
          ))}
        </div>

        {/* Price */}
        <div className="flex items-center gap-2">
          <span className="font-semibold text-lg text-foreground">{formatPrice(price)}</span>
          {oldPrice && (
            <span className="text-sm text-muted-foreground line-through">
              {formatPrice(oldPrice)}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
