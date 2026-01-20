import { useState, useMemo } from "react";
import { X, SlidersHorizontal, ChevronDown } from "lucide-react";
import ProductCard from "./ProductCard";
import { products, categories, sizes, priceRanges, type Category, type Size } from "@/data/products";

const CatalogSection = () => {
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
  const [selectedSizes, setSelectedSizes] = useState<Size[]>([]);
  const [selectedPriceRange, setSelectedPriceRange] = useState<{ min: number; max: number } | null>(null);
  const [showFilters, setShowFilters] = useState(false);

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      // Category filter
      if (selectedCategory && product.category !== selectedCategory) {
        return false;
      }

      // Size filter
      if (selectedSizes.length > 0) {
        const hasMatchingSize = product.sizes.some((size) => selectedSizes.includes(size));
        if (!hasMatchingSize) return false;
      }

      // Price filter
      if (selectedPriceRange) {
        if (product.price < selectedPriceRange.min || product.price > selectedPriceRange.max) {
          return false;
        }
      }

      return true;
    });
  }, [selectedCategory, selectedSizes, selectedPriceRange]);

  const toggleSize = (size: Size) => {
    setSelectedSizes((prev) =>
      prev.includes(size) ? prev.filter((s) => s !== size) : [...prev, size]
    );
  };

  const clearFilters = () => {
    setSelectedCategory(null);
    setSelectedSizes([]);
    setSelectedPriceRange(null);
  };

  const hasActiveFilters = selectedCategory || selectedSizes.length > 0 || selectedPriceRange;

  return (
    <section id="catalog" className="section-padding">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12">
          <p className="text-primary font-medium tracking-widest uppercase text-xs md:text-sm mb-2 md:mb-4">
            Наш ассортимент
          </p>
          <h2 className="font-serif text-2xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 md:mb-4">
            Каталог одежды
          </h2>
          <p className="text-muted-foreground text-sm md:text-base max-w-2xl mx-auto px-4">
            Широкий выбор женской одежды на любой вкус
          </p>
        </div>

        {/* Mobile Category Pills - Horizontal Scroll */}
        <div className="md:hidden mb-4 -mx-4 px-4">
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
            <button
              onClick={() => setSelectedCategory(null)}
              className={`flex-shrink-0 px-4 py-2.5 rounded-full text-sm font-medium transition-colors ${
                !selectedCategory
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-foreground"
              }`}
            >
              Все
            </button>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(selectedCategory === category ? null : category)}
                className={`flex-shrink-0 px-4 py-2.5 rounded-full text-sm font-medium transition-colors whitespace-nowrap ${
                  selectedCategory === category
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-foreground"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Mobile Filter Toggle - Simplified */}
        <button
          onClick={() => setShowFilters(!showFilters)}
          className="md:hidden flex items-center gap-2 w-full justify-center mb-4 py-3 bg-card rounded-lg text-foreground font-medium shadow-sm"
        >
          <SlidersHorizontal className="w-4 h-4" />
          <span className="text-sm">Размер и цена</span>
          {(selectedSizes.length > 0 || selectedPriceRange) && (
            <span className="bg-primary text-primary-foreground text-xs px-2 py-0.5 rounded-full">
              {selectedSizes.length + (selectedPriceRange ? 1 : 0)}
            </span>
          )}
          <ChevronDown className={`w-4 h-4 transition-transform ${showFilters ? "rotate-180" : ""}`} />
        </button>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Mobile Filters - Simplified Bottom Sheet Style */}
          {showFilters && (
            <div className="md:hidden bg-card rounded-xl p-4 mb-4 shadow-sm animate-fade-in">
              {/* Size Filter - Large Touch Targets */}
              <div className="mb-4">
                <h4 className="font-medium text-foreground mb-3 text-sm">Размер</h4>
                <div className="flex flex-wrap gap-2">
                  {sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => toggleSize(size)}
                      className={`min-w-[48px] h-12 rounded-lg text-sm font-medium transition-colors ${
                        selectedSizes.includes(size)
                          ? "bg-primary text-primary-foreground"
                          : "bg-secondary text-foreground"
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price Filter - Simple Pills */}
              <div>
                <h4 className="font-medium text-foreground mb-3 text-sm">Цена</h4>
                <div className="flex flex-wrap gap-2">
                  {priceRanges.map((range) => (
                    <button
                      key={range.label}
                      onClick={() =>
                        setSelectedPriceRange(
                          selectedPriceRange?.min === range.min ? null : { min: range.min, max: range.max }
                        )
                      }
                      className={`px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                        selectedPriceRange?.min === range.min
                          ? "bg-primary text-primary-foreground"
                          : "bg-secondary text-foreground"
                      }`}
                    >
                      {range.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Clear Filters */}
              {hasActiveFilters && (
                <button
                  onClick={clearFilters}
                  className="w-full mt-4 py-3 text-primary text-sm font-medium"
                >
                  Сбросить фильтры
                </button>
              )}
            </div>
          )}

          {/* Desktop Filters Sidebar */}
          <aside className="hidden md:block lg:w-64 flex-shrink-0">
            <div className="bg-card p-6 rounded-xl shadow-soft sticky top-24">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-semibold text-foreground">Фильтры</h3>
                {hasActiveFilters && (
                  <button
                    onClick={clearFilters}
                    className="text-sm text-primary hover:underline"
                  >
                    Сбросить
                  </button>
                )}
              </div>

              {/* Category Filter */}
              <div className="mb-6">
                <h4 className="font-medium text-foreground mb-3">Категория</h4>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(selectedCategory === category ? null : category)}
                      className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                        selectedCategory === category
                          ? "bg-primary text-primary-foreground"
                          : "hover:bg-secondary text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>

              {/* Size Filter */}
              <div className="mb-6">
                <h4 className="font-medium text-foreground mb-3">Размер</h4>
                <div className="flex flex-wrap gap-2">
                  {sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => toggleSize(size)}
                      className={`w-10 h-10 rounded-lg text-sm font-medium transition-colors ${
                        selectedSizes.includes(size)
                          ? "bg-primary text-primary-foreground"
                          : "bg-secondary text-foreground hover:bg-primary/20"
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price Filter */}
              <div>
                <h4 className="font-medium text-foreground mb-3">Цена</h4>
                <div className="space-y-2">
                  {priceRanges.map((range) => (
                    <button
                      key={range.label}
                      onClick={() =>
                        setSelectedPriceRange(
                          selectedPriceRange?.min === range.min ? null : { min: range.min, max: range.max }
                        )
                      }
                      className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                        selectedPriceRange?.min === range.min
                          ? "bg-primary text-primary-foreground"
                          : "hover:bg-secondary text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      {range.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Products Area */}
          <div className="flex-1">
            {/* Active Filters Tags */}
            {hasActiveFilters && (
              <div className="flex flex-wrap gap-2 mb-6">
                {selectedCategory && (
                  <span className="inline-flex items-center gap-1 px-3 py-1.5 bg-primary/10 text-primary rounded-full text-sm">
                    {selectedCategory}
                    <button onClick={() => setSelectedCategory(null)}>
                      <X className="w-4 h-4" />
                    </button>
                  </span>
                )}
                {selectedSizes.map((size) => (
                  <span
                    key={size}
                    className="inline-flex items-center gap-1 px-3 py-1.5 bg-primary/10 text-primary rounded-full text-sm"
                  >
                    Размер {size}
                    <button onClick={() => toggleSize(size)}>
                      <X className="w-4 h-4" />
                    </button>
                  </span>
                ))}
                {selectedPriceRange && (
                  <span className="inline-flex items-center gap-1 px-3 py-1.5 bg-primary/10 text-primary rounded-full text-sm">
                    {priceRanges.find((r) => r.min === selectedPriceRange.min)?.label}
                    <button onClick={() => setSelectedPriceRange(null)}>
                      <X className="w-4 h-4" />
                    </button>
                  </span>
                )}
              </div>
            )}

            {/* Results Count */}
            <p className="text-muted-foreground text-sm mb-6">
              Найдено товаров: <span className="font-medium text-foreground">{filteredProducts.length}</span>
            </p>

            {/* Products Grid */}
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} {...product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <p className="text-muted-foreground mb-4">
                  По вашему запросу ничего не найдено
                </p>
                <button
                  onClick={clearFilters}
                  className="btn-outline"
                >
                  Сбросить фильтры
                </button>
              </div>
            )}

            {/* Contact CTA */}
            <div className="text-center mt-12">
              <a href="#contact" className="btn-outline inline-block">
                Узнать о наличии
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CatalogSection;
