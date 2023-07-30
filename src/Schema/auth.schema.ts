import { z } from 'zod'

export const registerSchema = z
  .object({
    username: z
      .string()
      .min(1, { message: 'username is required' }),
    email: z
      .string()
      .min(1, { message: 'email is required' })
      .email({ message: 'input must be a valid email' }),
    password: z
      .string()
      .min(4, { message: 'Password must be at least 6 characters' }),
    password_confirmation: z
      .string()
      .min(1, { message: 'Confirm Password is required' })
  })
  .refine(data => data.password === data.password_confirmation, {
    path: ['password_confirmation'],
    message: "Password don't match"
  })

export type RegisterSchema = z.infer<typeof registerSchema>

export const loginSchema = z.object({
  email: z
    .string()
    .min(1, { message: 'email is required' })
    .email({ message: 'input must be a valid email' }),
  password: z
    .string()
    .min(1, { message: 'password is required' })
})

export type LoginSchema = z.infer<typeof loginSchema>
