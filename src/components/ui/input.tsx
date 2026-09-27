import * as React from 'react'
import { TextInput, type TextInputProps } from 'react-native'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from 'cn'

const inputVariants = cva(
  'w-full rounded-full border border-gray-200 bg-white px-5 font-normal text-gray-900 placeholder:text-gray-400 focus:border-black active:border-black disabled:opacity-50',
  {
    variants: {
      size: {
        default: 'h-16 text-base',
        sm: 'h-12 text-sm px-4',
        lg: 'h-18 text-lg px-6',
      },
      error: {
        true: 'border-red-500 focus:border-red-500',
        false: '',
      },
    },
    defaultVariants: {
      size: 'default',
      error: false,
    },
  }
)

export interface InputProps
  extends TextInputProps,
    VariantProps<typeof inputVariants> {
  error?: boolean
}

const Input = React.forwardRef<TextInput, InputProps>(
  ({ className, size, error, placeholderTextColor, ...props }, ref) => {
    return (
      <TextInput
        ref={ref}
        placeholderTextColor={placeholderTextColor ?? '#9CA3AF'} // Gray-400
        className={cn(inputVariants({ size, error }), className)}
        {...props}
      />
    )
  }
)

Input.displayName = 'Input'

export { Input, inputVariants }