import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "react-native";
import { Stack } from "expo-router";
import "../styles/global.css"


export default function RootLayout() {
  return (
    <>
      <StatusBar barStyle="dark-content" className='bg-slate-100' />
      <GestureHandlerRootView className='flex-1'>
        <SafeAreaView edges={["top"]} className="flex-1 bg-surface">
          <Stack>
            <Stack.Screen name="(onboarding)" options={{ headerShown: false }} />
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            <Stack.Screen name="(auth)" options={{ headerShown: false }} />
          </Stack>
        </SafeAreaView>
      </GestureHandlerRootView>

    </>
  );
}
