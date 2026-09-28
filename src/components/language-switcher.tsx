// src/components/ui/language-switcher.tsx
import { Button } from '@/components/ui/button';
import { useTranslation } from 'react-i18next';
import { View } from 'react-native';

export function LanguageSwitcher() {
  const { t, i18n } = useTranslation('auth');

  const changeLanguage = (lang: 'en' | 'bn') => {
    i18n.changeLanguage(lang);
  };

  const isEnglish = i18n.language === 'en';
  const isBangla = i18n.language === 'bn';

  return (
    <View className="flex-row items-center gap-2 justify-between w-full bg-gray-100 p-1.5 rounded-full">
      <Button
        size="sm"
        variant={isBangla ? 'default' : 'outline'}
        className="flex-1"
        onPress={() => changeLanguage('bn')}
      >
        {t('languageBangla')}
      </Button>

      <Button
        size="sm"
        variant={isEnglish ? 'default' : 'outline'}
        className="flex-1"
        onPress={() => changeLanguage('en')}
      >
        {t('languageEnglish')}
      </Button>
    </View>
  );
}