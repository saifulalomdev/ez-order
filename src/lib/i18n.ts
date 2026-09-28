import { initReactI18next } from 'react-i18next';
import { authEn, authBn } from '@/features/auth';
import i18n from 'i18next';

i18n.use(initReactI18next).init({
    resources: {
        en: {
            auth: authEn,
        },
        bn: {
            auth: authBn,
        },
    },
    lng: 'bn',
    fallbackLng: 'bn',
    interpolation: {
        escapeValue: false,
    },
});

export default i18n;