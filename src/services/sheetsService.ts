// Сервис для загрузки данных из Google Sheets
// Используется Google Sheets API через публичный доступ

export interface SheetProduct {
    id: number;
    image: string;
    name: string;
    price: number;
    oldPrice?: number;
    sizes: string;
    category: string;
    isNew?: boolean;
}

// Публикуем таблицу как CSV через Google Sheets
// Формат URL: https://docs.google.com/spreadsheets/d/{SPREADSHEET_ID}/export?format=csv&gid={SHEET_ID}
const SHEET_URL = import.meta.env.VITE_GOOGLE_SHEET_URL || '';

// Альтернативный способ через публичную JSON API
// Установите доступ "Просмотр" для всех
export async function fetchProductsFromSheets(): Promise<SheetProduct[]> {
    try {
        if (!SHEET_URL) {
            console.warn('VITE_GOOGLE_SHEET_URL не задан. Используется кэшированные данные.');
            return [];
        }

        const response = await fetch(SHEET_URL);
        const csv = await response.text();

        return parseCSV(csv);
    } catch (error) {
        console.error('Ошибка загрузки данных из Google Sheets:', error);
        return [];
    }
}

// Парсер CSV
function parseCSV(csv: string): SheetProduct[] {
    const lines = csv.trim().split('\n');
    const headers = lines[0].split(',').map(h => h.trim().toLowerCase());

    const products: SheetProduct[] = [];

    for (let i = 1; i < lines.length; i++) {
        const line = lines[i];
        if (!line.trim()) continue;

        const values = parseCSVLine(line);

        if (values.length >= 5) {
            const product: SheetProduct = {
                id: parseInt(values[0]) || i,
                image: values[1]?.trim() || '',
                name: values[2]?.trim() || '',
                price: parseFloat(values[3]) || 0,
                oldPrice: values[4] ? parseFloat(values[4]) : undefined,
                sizes: values[5]?.trim() || 'S,M,L',
                category: values[6]?.trim() || 'Другое',
                isNew: values[7]?.toLowerCase() === 'да',
            };

            products.push(product);
        }
    }

    return products;
}

// Парсер CSV строки (обработка кавычек)
function parseCSVLine(line: string): string[] {
    const result: string[] = [];
    let current = '';
    let inQuotes = false;

    for (let i = 0; i < line.length; i++) {
        const char = line[i];

        if (char === '"') {
            inQuotes = !inQuotes;
        } else if (char === ',' && !inQuotes) {
            result.push(current);
            current = '';
        } else {
            current += char;
        }
    }

    result.push(current);
    return result;
}

// Загрузка контактов из отдельного листа
export interface ContactInfo {
    phone: string;
    email: string;
    telegram: string;
    instagram: string;
    address: string;
}

export async function fetchContactsFromSheets(): Promise<ContactInfo | null> {
    try {
        if (!SHEET_URL) return null;

        // Замените {CONTACTS_SHEET_ID} на ID листа контактов
        const contactsUrl = SHEET_URL.replace(/gid=\d+/, 'gid=1'); // Обычно контакты на листе с gid=1
        const response = await fetch(contactsUrl);
        const csv = await response.text();

        const lines = csv.trim().split('\n');
        if (lines.length < 2) return null;

        const values = parseCSVLine(lines[1]);

        return {
            phone: values[0]?.trim() || '',
            email: values[1]?.trim() || '',
            telegram: values[2]?.trim() || '',
            instagram: values[3]?.trim() || '',
            address: values[4]?.trim() || '',
        };
    } catch (error) {
        console.error('Ошибка загрузки контактов:', error);
        return null;
    }
}
