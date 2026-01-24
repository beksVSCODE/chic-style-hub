# 🔄 Как обновить существующие компоненты

После интеграции Google Sheets нужно обновить компоненты для использования хуков.

## ✏️ CatalogSection.tsx

Найти строку:
```typescript
import { products, categories, sizes, priceRanges, type Category, type Size } from "@/data/products";
```

Заменить на:
```typescript
import { useProducts, useCategories } from "@/hooks/use-products";
import { type Category, type Size } from "@/data/products";
```

Затем в компоненте, внутри функции:
```typescript
const CatalogSection = () => {
  // Добавьте ЭТО:
  const { data: products = [], isLoading } = useProducts();
  const categories = useCategories();

  // Удалите ЭТО (если было):
  // const products = ...
  // const categories = ...

  // Добавьте loading состояние:
  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {[...Array(6)].map((_, i) => (
          <Skeleton key={i} className="h-64" />
        ))}
      </div>
    );
  }

  // Остальной код остается без изменений!
  return (
    // ...
  );
};
```

---

## ✏️ NewArrivalsSection.tsx

```typescript
// Замените:
import { products } from "@/data/products";

// На:
import { useProducts } from "@/hooks/use-products";

// В компоненте добавьте:
const NewArrivalsSection = () => {
  const { data: products = [] } = useProducts();
  
  const newArrivals = products
    .filter((p) => p.isNew)
    .slice(0, 4);

  // Остальной код без изменений
  return (
    // ...
  );
};
```

---

## ✏️ ContactSection.tsx (если нужны динамические контакты)

```typescript
import { useContacts } from "@/hooks/use-contacts";

const ContactSection = () => {
  const { data: contacts, isLoading } = useContacts();

  if (isLoading || !contacts) {
    return <div>Загрузка контактов...</div>;
  }

  return (
    <div className="contact-info">
      <p>📞 {contacts.phone}</p>
      <p>📧 {contacts.email}</p>
      <p>💬 Telegram: {contacts.telegram}</p>
      <p>📱 Instagram: {contacts.instagram}</p>
      <p>📍 {contacts.address}</p>
    </div>
  );
};
```

---

## ✏️ Header.tsx (если нужны контакты в header)

```typescript
import { useContacts } from "@/hooks/use-contacts";

const Header = () => {
  const { data: contacts } = useContacts();

  return (
    <header>
      {/* ... существующий код ... */}
      
      {/* Добавьте контакты */}
      {contacts && (
        <div className="header-contacts">
          <a href={`tel:${contacts.phone}`}>{contacts.phone}</a>
          <a href={`mailto:${contacts.email}`}>{contacts.email}</a>
        </div>
      )}
    </header>
  );
};
```

---

## ✏️ Footer.tsx (если нужны социальные сети)

```typescript
import { useContacts } from "@/hooks/use-contacts";

const Footer = () => {
  const { data: contacts } = useContacts();

  return (
    <footer>
      {/* ... существующий код ... */}
      
      {/* Добавьте социальные сети */}
      {contacts && (
        <div className="footer-socials">
          {contacts.instagram && (
            <a href={`https://instagram.com/${contacts.instagram}`} target="_blank">
              Instagram
            </a>
          )}
          {contacts.telegram && (
            <a href={`https://t.me/${contacts.telegram}`} target="_blank">
              Telegram
            </a>
          )}
        </div>
      )}
    </footer>
  );
};
```

---

## ✏️ ProductCard.tsx (если нужны изменения)

Обычно это не требуется менять! Компонент уже работает с объектом `Product`.

Но если нужно добавить изображение с оптимизацией:

```typescript
<img 
  src={product.image} 
  alt={product.name}
  loading="lazy"  // ← Ленивая загрузка
  className="w-full h-64 object-cover"
/>
```

---

## ✅ Проверка после обновления

```bash
# 1. Остановите dev сервер (Ctrl+C)
# 2. Запустите заново
bun run dev

# 3. Откройте http://localhost:8080
# 4. Проверьте:
```

- [ ] Товары загружаются из Google Sheets
- [ ] Фильтры работают
- [ ] Контакты обновляются
- [ ] Нет ошибок в консоли (F12)
- [ ] Изображения загружаются

---

## 🚨 Если что-то сломалось

1. **Найти ошибку:**
   ```bash
   # Откройте браузерную консоль (F12)
   # Посмотрите красные сообщения об ошибке
   ```

2. **Распространенные ошибки:**
   - `Cannot read property 'map' of undefined` - данные еще не загружены
   - `useProducts is not defined` - не импортировали хук
   - CORS ошибка - проверьте переменную окружения

3. **Откатить изменения:**
   ```bash
   git checkout -- src/components/CatalogSection.tsx
   # Или отмените последний коммит:
   git revert HEAD
   ```

---

## 📝 Полный пример компонента

```typescript
import { useProducts, useCategories } from "@/hooks/use-products";
import ProductCard from "./ProductCard";
import { Skeleton } from "@/components/ui/skeleton";
import { useState, useMemo } from "react";

const CatalogSection = () => {
  const { data: products = [], isLoading } = useProducts();
  const categories = useCategories();
  
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredProducts = useMemo(() => {
    return selectedCategory
      ? products.filter(p => p.category === selectedCategory)
      : products;
  }, [products, selectedCategory]);

  if (isLoading) {
    return (
      <div className="grid grid-cols-3 gap-4">
        {[...Array(6)].map((_, i) => (
          <Skeleton key={i} className="h-64" />
        ))}
      </div>
    );
  }

  return (
    <section className="catalog">
      {/* Фильтры */}
      <div className="filters">
        <button onClick={() => setSelectedCategory(null)}>Все</button>
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={selectedCategory === cat ? "active" : ""}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Товары */}
      <div className="grid grid-cols-3 gap-6">
        {filteredProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <p className="text-center">Товаров не найдено</p>
      )}
    </section>
  );
};

export default CatalogSection;
```

---

## 🎯 Рекомендуемый порядок обновления

1. ✅ Добавьте переменную окружения в `.env.local`
2. ✅ Протестируйте `useProducts()` в одном компоненте
3. ✅ Обновите `CatalogSection`
4. ✅ Обновите `NewArrivalsSection`
5. ✅ Обновите `ContactSection`
6. ✅ Обновите `Header` и `Footer` (контакты)
7. ✅ Делайте `git push`
8. ✅ Netlify автоматически пересоберется

---

## 💡 Советы

- Используйте `isLoading` для показа скелетонов во время загрузки
- Всегда добавляйте `= []` как fallback в деструктуризацию
- Тестируйте на разных скоростях интернета (F12 → Network → Throttling)
- Не забывайте импортировать типы, если используете TypeScript

Готово! 🎉
