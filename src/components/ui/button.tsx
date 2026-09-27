// src/components/ui/button.tsx
import * as React from 'react'
import {
  Pressable,
  Text,
  type PressableProps,
} from 'react-native'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from 'cn'

const buttonVariants = cva(
  'flex-row items-center justify-center rounded-full active:opacity-80 disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'bg-black active:bg-gray-800',
        destructive: 'bg-red-600 active:bg-red-700',
        outline: 'border border-gray-200 bg-transparent active:bg-gray-100 shadow-sm',
        secondary: 'bg-gray-100 active:bg-gray-200',
        ghost: 'bg-transparent active:bg-gray-100',
        link: 'bg-transparent underline',
      },
      size: {
        default: 'h-16 px-6 py-3',
        sm: 'h-12 px-4 py-2',
        lg: 'h-18 px-8 py-4',
        icon: 'h-14 w-14 rounded-full p-0',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
)

const buttonTextVariants = cva('font-semibold text-base', {
  variants: {
    variant: {
      default: 'text-white',
      destructive: 'text-white',
      outline: 'text-gray-800',
      secondary: 'text-gray-900',
      ghost: 'text-gray-900',
      link: 'text-black underline',
    },
    size: {
      default: 'text-base',
      sm: 'text-sm',
      lg: 'text-lg',
      icon: 'text-base',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'default',
  },
})

export interface ButtonProps
  extends PressableProps,
    VariantProps<typeof buttonVariants> {
  children?: React.ReactNode
  textClassName?: string
}

export function Button({
  children,
  variant,
  size,
  className,
  textClassName,
  disabled,
  ...props
}: ButtonProps) {
  return (
    <Pressable
      disabled={disabled}
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    >
      {typeof children === 'string' ? (
        <Text className={cn(buttonTextVariants({ variant, size }), textClassName)}>
          {children}
        </Text>
      ) : (
        children
      )}
    </Pressable>
  )
}