import { useState } from 'react';
import { ActivityIndicator, Pressable, Text, View } from 'react-native';
import { ScreenWrapper } from '@/components/ui/screen-wrapper';
import { authClient } from '@/features/auth/auth-client';
import { Button } from '@/components/ui/button';
import { useRouter } from 'expo-router';

export default function Settings() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter()

  async function handleLogout() {
    setIsLoading(true);
    setError(null);

    try {
      const { error } = await authClient.signOut();
      if (error) {
        setError(error.message ?? 'Failed to log out. Please try again.');
      } else {
        router.push("/(auth)")
      }
    } catch (err) {
      console.log(err)
      setError('Something went wrong. Please try again.');
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <ScreenWrapper>
      <View className="gap-3 p-5">
        {error && <Text className="text-sm text-red-500">{error}</Text>}

        <Button
          onPress={handleLogout}
          disabled={isLoading}
          variant="destructive"
        >
          {isLoading ? (
            <ActivityIndicator color="white" />
          ) : (
            <Text className="font-semibold text-white">Log out</Text>
          )}
        </Button>
      </View>
    </ScreenWrapper>
  );
}