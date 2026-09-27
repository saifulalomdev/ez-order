import { ReactNode } from 'react'
import { Text, View, Pressable } from 'react-native'
import { ContentWrapper } from '@/components/ui/content-wrapper'
import { ScreenWrapper } from '@/components/ui/screen-wrapper'

export default function Login() {
  const handleGoogleSignIn = () => {
    // Add your Google Sign-In logic here
  }

  return (
    <ScreenWrapper>
      <ContentWrapper>
        <View className="flex-1 justify-between min-h-[80vh] py-10 px-4">
          {/* Logo & App Name */}
          <View className="items-center justify-center flex-1 gap-3">
            {/* Minimal App Icon Placeholder */}
            <View className="w-20 h-20 rounded-2xl bg-black items-center justify-center">
              <Text className="text-white text-3xl font-bold">EZ</Text>
            </View>

            <Text className="text-3xl font-bold tracking-tight text-foreground">
              EZ Order
            </Text>
          </View>

          {/* Continue with Google Button */}
          <View className="w-full pb-6">
            <Pressable
              onPress={handleGoogleSignIn}
              className="w-full h-14 flex-row items-center justify-center rounded-full border border-gray-300 bg-white active:bg-gray-50 shadow-sm"
            >
              {/* <GoogleIcon /> */}
              <Text className="text-base font-medium text-gray-800 ml-3">
                Continue with Google
              </Text>
            </Pressable>
          </View>
        </View>
      </ContentWrapper>
    </ScreenWrapper>
  )
}