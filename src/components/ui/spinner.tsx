// src/components/ui/spinner.tsx
import * as React from 'react'
import { View } from 'react-native'
import { Loader2 } from 'lucide-react-native'
import { cn } from 'cn'

interface SpinnerProps {
  size?: number
  color?: string
  className?: string
}

export function Spinner({
  size = 20,
  color = '#09090B',
  className,
}: SpinnerProps) {
  return (
    <View className={cn('items-center justify-center animate-spin', className)}>
      <Loader2 size={size} color={color} />
    </View>
  )
}