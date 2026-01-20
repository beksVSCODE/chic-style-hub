import ProductCard from "./ProductCard";
import productCoat from "@/assets/product-coat.jpg";
import productSweater from "@/assets/product-sweater.jpg";
import productSkirt from "@/assets/product-skirt.jpg";
import productBlouse from "@/assets/product-blouse.jpg";

const products = [
  {
    id: 1,
    image: productCoat,
    name: "Пальто оверсайз пыльная роза",
    price: 8990,
    oldPrice: 12900,
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: 2,
    image: productSweater,
    name: "Свитер вязаный с косами кремовый",
    price: 3490,
    sizes: ["S", "M", "L"],
  },
  {
    id: 3,
    image: productSkirt,
    name: "Юбка миди плиссе бежевая",
    price: 2990,
    sizes: ["XS", "S", "M", "L"],
  },
  {
    id: 4,
    image: productBlouse,
    name: "Блуза шёлковая розовая",
    price: 4290,
    sizes: ["S", "M", "L"],
    isNew: true,
  },
];

const categories = [
  "Все",
  "Пальто",
  "Платья",
  "Блузы",
  "Юбки",
  "Брюки",
  "Свитера",
];

const CatalogSection = () => {
  return (
    <section id="catalog" className="section-padding">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-primary font-medium tracking-widest uppercase text-sm mb-4">
            Наш ассортимент
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Каталог одежды
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Широкий выбор женской одежды на любой вкус и случай. 
            От повседневных образов до элегантных нарядов.
          </p>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((category, index) => (
            <button
              key={category}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                index === 0
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-secondary-foreground hover:bg-primary/10"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>

        {/* View More */}
        <div className="text-center mt-12">
          <a
            href="#contact"
            className="btn-outline inline-block"
          >
            Узнать о наличии
          </a>
        </div>
      </div>
    </section>
  );
};

export default CatalogSection;
