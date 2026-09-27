// src/components/ui/screen-wrapper.tsx
import { View } from 'react-native';
import { ReactNode } from 'react';

export function ScreenWrapper({ children }: { children?: ReactNode }) {
  return (
    <View className="flex-1 bg-slate-100">
      {children}
    </View>
  );
}