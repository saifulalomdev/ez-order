import { loginSchema, type LoginSchemaType } from '@/features/auth/auth-schema';
import { ContentWrapper } from '@/components/ui/content-wrapper';
import { ScreenWrapper } from '@/components/ui/screen-wrapper';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Password } from '@/components/ui/password';
import { View, Text, Alert } from 'react-native';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useRouter } from 'expo-router';

export default function Login() {
  const router = useRouter()

  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginSchemaType>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  })

  const onSubmit = async (data: LoginSchemaType) => {
    try {
      console.log('Valid Form Data:', data)
      router.replace('/(tabs)')
    } catch {
      Alert.alert('Error', 'An unexpected error occurred. Please try again.')
    }
  }

  return (
    <ScreenWrapper>
      <ContentWrapper>
        <View className="flex-1 justify-between items-center">
          {/* Header Section */}
          <View className="flex-1 items-center justify-center gap-3 w-full">
            <View className="w-20 h-20 rounded-2xl bg-black items-center justify-center mb-2">
              <Text className="text-white text-3xl font-bold">EZ</Text>
            </View>
            <Text className="text-3xl font-bold tracking-tight text-foreground">
              Welcome back
            </Text>
            <Text className="text-gray-500 text-base text-center">
              Sign in to continue to EZ Order
            </Text>

            {/* Form Inputs with Field Labels & Error Labels */}
            <View className="w-full gap-4 mt-6">
              {/* Email Field */}
              <View className="w-full">
                <Label>Email Address</Label>
                <Controller
                  control={control}
                  name="email"
                  render={({ field: { onChange, onBlur, value } }) => (
                    <Input
                      placeholder="e.g. user@example.com"
                      value={value}
                      onChangeText={onChange}
                      onBlur={onBlur}
                      keyboardType="email-address"
                      autoCapitalize="none"
                      autoCorrect={false}
                      error={!!errors.email}
                    />
                  )}
                />
                <Label variant="error">{errors.email?.message}</Label>
              </View>

              {/* Password Field */}
              <View className="w-full">
                <Label>Password</Label>
                <Controller
                  control={control}
                  name="password"
                  render={({ field: { onChange, onBlur, value } }) => (
                    <Password
                      placeholder="Enter your password"
                      value={value}
                      onChangeText={onChange}
                      onBlur={onBlur}
                      error={!!errors.password}
                    />
                  )}
                />
                <Label variant="error">{errors.password?.message}</Label>
              </View>
            </View>
          </View>

          {/* Action Buttons */}
          <View className="flex-col gap-3 mt-4 w-full">
            <Button
              onPress={handleSubmit(onSubmit)}
              disabled={isSubmitting}
              className="w-full"
            >
              {isSubmitting ? 'Signing in...' : 'Sign In'}
            </Button>

            <Button
              variant="link"
              onPress={() => router.push('/(auth)/register')}
              className="w-full"
            >
              Don't have an account? Sign up
            </Button>
          </View>
        </View>
      </ContentWrapper>
    </ScreenWrapper>
  )
}