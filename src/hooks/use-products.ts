import { useQuery } from '@tanstack/react-query';
import { fetchProductsFromSheets } from '@/services/sheetsService';
import { products as fallbackProducts, type Product } from '@/data/products';

// Конвертация данных из Google Sheets в формат Product
function convertToProduct(data: any): Product {
    const sizes = (data.sizes || 'S,M,L')
        .split(',')
        .map((s: string) => s.trim())
        .filter((s: string) => ['XS', 'S', 'M', 'L', 'XL', 'XXL'].includes(s));

    return {
        id: data.id,
        image: data.image || '',
        name: data.name || '',
        price: data.price || 0,
        oldPrice: data.oldPrice,
        sizes: sizes.length > 0 ? sizes : ['S', 'M', 'L'],
        category: data.category || 'Другое' as any,
        isNew: data.isNew || false,
    };
}

export function useProducts() {
    return useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            const sheetData = await fetchProductsFromSheets();

            // ТОЛЬКО Google Sheets контент - без fallback!
            if (!sheetData || sheetData.length === 0) {
                throw new Error('Не удалось загрузить товары из Google Sheets. Проверьте переменную VITE_GOOGLE_SHEET_URL');
            }

            return sheetData.map(convertToProduct);
        },
        staleTime: 1000 * 60 * 5, // 5 минут
        gcTime: 1000 * 60 * 10, // 10 минут
        retry: 2, // 2 попытки загрузки
    });
}

// Хук для получения уникальных категорий
export function useCategories() {
    const { data: products = [] } = useProducts();

    return Array.from(
        new Set(products.map(p => p.category))
    ).sort();
}

// Хук для получения размеров
export function useSizes() {
    const { data: products = [] } = useProducts();
    const sizes = new Set<string>();

    products.forEach(p => {
        p.sizes.forEach(size => sizes.add(size));
    });

    return Array.from(sizes).sort((a, b) => {
        const order = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];
        return order.indexOf(a) - order.indexOf(b);
    });
}
