// src/components/ui/content-wrapper.tsx
import { ScrollView } from 'react-native-gesture-handler'
import { ReactNode } from 'react'
import { cn } from 'cn';

interface ContentsWrapperProps {
  children?: ReactNode;
  className?: string;
}

export function ContentWrapper({ children, className }: ContentsWrapperProps) {
  return (
    <ScrollView
      className={cn(
        "flex-col gap-1.5 mt-2.5 px-5 mb-20",
        className,
      )}
      showsVerticalScrollIndicator={false}
    >
      {children}
    </ScrollView>
  )
}