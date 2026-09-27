import { ContentWrapper } from '@/components/ui/content-wrapper';
import { ScreenWrapper } from '@/components/ui/screen-wrapper';
import { Spinner } from '@/components/ui/spinner';
import { Button } from '@/components/ui/button';
import { View, Text } from 'react-native';
import { useState } from 'react';

export default function Login() {
  const [isLoading, setIsLoading] = useState(false);

  const handleGoogleSignIn = () => {
    setIsLoading(false)
  }

  return (
    <ScreenWrapper>
      <ContentWrapper>
        <View className="flex-1 justify-between items-center">
          <View className="flex-1 items-center justify-center gap-3">
            <View className="w-20 h-20 rounded-2xl bg-black items-center justify-center">
              <Text className="text-white text-3xl font-bold">EZ</Text>
            </View>
            <Text className="text-3xl font-bold tracking-tight text-foreground">
              EZ Order
            </Text>
          </View>

          <Button
            disabled={isLoading} className='w-full'
            onPress={handleGoogleSignIn}
          >
            {isLoading ? <Spinner color='#ffff' /> : "Continue with Google"}
          </Button>
        </View>
      </ContentWrapper>
    </ScreenWrapper>
  )
}