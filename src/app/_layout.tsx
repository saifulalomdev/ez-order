import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { NativeStackNavigationOptions, Stack } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "react-native";
import "../styles/global.css";
import { AuthProvider } from '@/features/auth/auth-context';
import { AuthGuard } from '@/features/auth/auth-guard';

export default function RootLayout() {

  const screenOptions: NativeStackNavigationOptions = {
    headerShown: false,
    animation: "slide_from_right"
  };

  return (
    <AuthProvider>
      <AuthGuard>
        <StatusBar barStyle="dark-content" className='bg-slate-100' />
        <GestureHandlerRootView className='flex-1'>
          <SafeAreaView edges={["top"]} className="flex-1 bg-surface">
            <Stack>
              <Stack.Screen name="(tabs)" options={screenOptions} />
              <Stack.Screen name="(auth)/login" options={screenOptions} />
            </Stack>
          </SafeAreaView>
        </GestureHandlerRootView>
      </AuthGuard>
    </AuthProvider>
  );
};
