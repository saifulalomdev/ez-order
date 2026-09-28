// src/modules/auth/components/auth-branding.tsx
import { useTranslation } from 'react-i18next';
import { View, Text } from 'react-native';

export function AuthBranding() {
  const { t } = useTranslation('auth');

  return (
    <View className="flex-1 items-center justify-center gap-3">
      <View className="w-20 h-20 rounded-2xl bg-black items-center justify-center shadow-sm">
        <Text className="text-white text-3xl font-bold">EZ</Text>
      </View>
      <Text className="text-3xl font-bold tracking-tight text-foreground">
        {t('appName')}
      </Text>
      <Text className="text-sm text-muted-foreground text-center px-6">
        {t('appSubtitle')}
      </Text>
    </View>
  );
}