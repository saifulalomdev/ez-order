// src/components/ui/content-wrapper.tsx
import { ScrollView } from 'react-native-gesture-handler'
import { ReactNode } from 'react'

interface ContentsWrapperProps {
  children?: ReactNode
}

export function ContentWrapper({ children }: ContentsWrapperProps) {
  return (
    <ScrollView
      className="flex-col gap-1.5 mt-2.5 px-5 mb-20"
      showsVerticalScrollIndicator={false}
    >
      {children}
    </ScrollView>
  )
}