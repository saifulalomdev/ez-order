import { ContentWrapper } from '@/components/ui/content-wrapper';
import { ScreenWrapper } from '@/components/ui/screen-wrapper';
import { Button } from '@/components/ui/button';
import { View, Text, Alert } from 'react-native';
import { Input } from '@/components/ui/input';
import { useRouter } from 'expo-router';
import { useState } from 'react';

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  
  const router = useRouter()

  const handleRegister = async () => {
    if (!name || !email || !password) {
      Alert.alert('Error', 'Please fill in all fields.')
      return
    }

    setIsLoading(true)

    try {
      // Log registration data
      console.log('Register data:', { name, email, password })

      // Navigate straight to main app tabs
      router.replace('/(tabs)')
    } catch {
      Alert.alert('Error', 'An unexpected error occurred. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <ScreenWrapper>
      <ContentWrapper>
        <View className="flex-1 justify-between items-center">
          {/* Header section matching Index and Login screens */}
          <View className="flex-1 items-center justify-center gap-3 w-full">
            <View className="w-20 h-20 rounded-2xl bg-black items-center justify-center mb-2">
              <Text className="text-white text-3xl font-bold">EZ</Text>
            </View>
            <Text className="text-3xl font-bold tracking-tight text-foreground">
              Create Account
            </Text>
            <Text className="text-gray-500 text-base text-center">
              Sign up to get started with EZ Order
            </Text>

            {/* Form Inputs */}
            <View className="w-full gap-3 mt-6">
              <Input
                placeholder="Full Name"
                value={name}
                onChangeText={setName}
                autoCapitalize="words"
              />
              <Input
                placeholder="Email address"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
              />
              <Input
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
              />
            </View>
          </View>

          {/* Action buttons */}
          <View className="flex-col gap-3 w-full mt-4">
            <Button
              onPress={handleRegister}
              disabled={isLoading}
              className="w-full"
            >
              {isLoading ? 'Creating account...' : 'Create Account'}
            </Button>

            <Button
              variant="link"
              onPress={() => router.push('/(auth)/login')}
              className="w-full"
            >
              Already have an account? Sign in
            </Button>
          </View>
        </View>
      </ContentWrapper>
    </ScreenWrapper>
  )
}