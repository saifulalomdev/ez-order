import { AuthBranding } from '@/features/auth/components/auth-branding';
import { LanguageSwitcher } from '@/components/language-switcher';
import { ContentWrapper } from '@/components/ui/content-wrapper';
import { ScreenWrapper } from '@/components/ui/screen-wrapper';
import { Spinner } from '@/components/ui/spinner';
import { Button } from '@/components/ui/button';
import { useTranslation } from 'react-i18next';
import { GoogleIcon } from '@/icons/google';
import { View } from 'react-native';
import { useState } from 'react';

export default function Login() {
  const [isLoading, setIsLoading] = useState(false);
  const { t } = useTranslation('auth');

  const handleGoogleSignIn = () => {
    setIsLoading(true);
  };

  return (
    <ScreenWrapper>
      <ContentWrapper>
        <View className="flex-1 justify-between items-center py-6">
          <AuthBranding />

          <View className="w-full flex-col gap-6 items-center">
            <LanguageSwitcher />

            <Button
              className="w-full"
              disabled={isLoading}
              onPress={handleGoogleSignIn}
            >
             <GoogleIcon/> {isLoading ? <Spinner color="#ffffff" /> : t('continueWithGoogle')}
            </Button>
          </View>
        </View>
      </ContentWrapper>
    </ScreenWrapper>
  );
}