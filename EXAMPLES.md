// Пример использования useProducts хука в компонентах

import { useProducts, useCategories } from '@/hooks/use-products';
import ProductCard from './ProductCard';
import { Skeleton } from '@/components/ui/skeleton';

// ✅ ПРИМЕР 1: Использование в CatalogSection
export function CatalogSectionExample() {
  const { data: products = [], isLoading, error } = useProducts();
  const categories = useCategories();

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {[...Array(6)].map((_, i) => (
          <Skeleton key={i} className="h-64" />
        ))}
      </div>
    );
  }

  if (error) {
    console.error('Ошибка загрузки товаров:', error);
    // Стандартная ошибка обработана, используются fallback данные
  }

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

// ✅ ПРИМЕР 2: Использование в NewArrivalsSection
export function NewArrivalsSectionExample() {
  const { data: products = [], isLoading } = useProducts();
  
  const newArrivals = products
    .filter(p => p.isNew)
    .slice(0, 4);

  if (isLoading) return <div>Загрузка...</div>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {newArrivals.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

// ✅ ПРИМЕР 3: С фильтрацией
export function FilteredProductsExample() {
  const { data: products = [] } = useProducts();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filtered = selectedCategory 
    ? products.filter(p => p.category === selectedCategory)
    : products;

  return (
    <div>
      <div className="flex gap-2 mb-6">
        <button onClick={() => setSelectedCategory(null)}>Все</button>
        {Array.from(new Set(products.map(p => p.category))).map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat as string)}
            className={selectedCategory === cat ? 'font-bold' : ''}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-3 gap-4">
        {filtered.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

// ✅ ПРИМЕР 4: Использование в ContactSection
import { useContacts } from '@/hooks/use-contacts';

export function ContactSectionExample() {
  const { data: contacts, isLoading } = useContacts();

  if (isLoading || !contacts) {
    return <div>Загрузка контактов...</div>;
  }

  return (
    <div>
      <p>📞 {contacts.phone}</p>
      <p>📧 {contacts.email}</p>
      <p>💬 Telegram: {contacts.telegram}</p>
      <p>📱 Instagram: {contacts.instagram}</p>
      <p>📍 {contacts.address}</p>
    </div>
  );
}
