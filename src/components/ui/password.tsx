import * as React from 'react'
import { View, Pressable } from 'react-native'
import { Eye, EyeOff } from 'lucide-react-native'
import { Input, type InputProps } from '@/components/ui/input'

export interface PasswordProps extends Omit<InputProps, 'secureTextEntry'> {}

const Password = React.forwardRef<any, PasswordProps>(
  ({ className, error, ...props }, ref) => {
    const [showPassword, setShowPassword] = React.useState(false)

    return (
      <View className="relative w-full justify-center">
        <Input
          ref={ref}
          secureTextEntry={!showPassword}
          className={className}
          error={error}
          {...props}
        />
        <Pressable
          onPress={() => setShowPassword((prev) => !prev)}
          className="absolute right-4 p-2 items-center justify-center active:opacity-60"
          hitSlop={8}
        >
          {showPassword ? (
            <EyeOff size={20} color="#6B7280" />
          ) : (
            <Eye size={20} color="#6B7280" />
          )}
        </Pressable>
      </View>
    )
  }
)

Password.displayName = 'Password'

export { Password }