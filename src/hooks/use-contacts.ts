import { useQuery } from '@tanstack/react-query';
import { fetchContactsFromSheets, type ContactInfo } from '@/services/sheetsService';

// Fallback контакты (если Google Sheets недоступна)
const fallbackContacts: ContactInfo = {
    phone: '+7 (XXX) XXX-XX-XX',
    email: 'contact@chicstyle.com',
    telegram: '@chicstyle_hub',
    instagram: '@chicstyle_hub',
    address: 'г. Москва',
};

export function useContacts() {
    return useQuery({
        queryKey: ['contacts'],
        queryFn: async () => {
            const data = await fetchContactsFromSheets();
            return data || fallbackContacts;
        },
        staleTime: 1000 * 60 * 10, // 10 минут
        gcTime: 1000 * 60 * 30, // 30 минут
        retry: 1,
    });
}
