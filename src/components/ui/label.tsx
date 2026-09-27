import * as React from 'react'
import { Text, type TextProps } from 'react-native'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from 'cn'

const labelVariants = cva('text-sm font-medium', {
  variants: {
    variant: {
      default: 'text-gray-700 ml-1 mb-1',
      muted: 'text-gray-500 ml-1 mt-1',
      error: 'text-red-500 ml-4 mt-1',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
})

export interface LabelProps
  extends TextProps,
    VariantProps<typeof labelVariants> {
  children?: React.ReactNode
}

const Label = React.forwardRef<Text, LabelProps>(
  ({ className, variant, children, ...props }, ref) => {
    if (!children) return null

    return (
      <Text
        ref={ref}
        className={cn(labelVariants({ variant }), className)}
        {...props}
      >
        {children}
      </Text>
    )
  }
)

Label.displayName = 'Label'

export { Label, labelVariants }