import { z } from 'zod'

const authFormPolicy = {
    passwordMinLength: 6,
    passwordMaxLength: 32,
    nameMinLength: 1,
    emailMinLength: 4,
}

export const registerSchema = z.object({
    name: z
        .string({ message: 'Name is required' })
        .min(authFormPolicy.nameMinLength, { message: 'Name is required' })
        .min(authFormPolicy.nameMinLength, { message: `Name must be at least ${authFormPolicy.nameMinLength} characters'` }),
    email: z
        .email({ message: 'Please enter a valid email address' })
        .min(authFormPolicy.emailMinLength, { message: 'Email is required' }),
    password: z
        .string({ message: 'Password is required' })
        .min(1, { message: 'Password is required' })
        .min(authFormPolicy.passwordMinLength, {
            message: `Password must be at least ${authFormPolicy.passwordMinLength} characters`,
        }),
})

export const loginSchema = registerSchema.omit({ name: true })

export type RegisterSchemaType = z.infer<typeof registerSchema>
export type LoginSchemaType = z.infer<typeof loginSchema>