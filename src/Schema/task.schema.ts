import { z } from 'zod'

export const addSchema = z
  .object({
    title: z
      .string()
      .min(2, { message: 'title must be more than 2 characters' })
      .max(16, { message: 'title must be less than 17 characters' }),
    description: z
      .string()
      .max(128, { message: 'description must be less than 129 characters' }),

    // just convert sting to number
    priority: z.preprocess(
      input => {
        const processed = z.string().regex(/^\d+$/).transform(Number).safeParse(input);
        return processed.success ? processed.data : input;
      },
      z
        .number()
        .gte(1, { message: 'priority must be equals or grater than 1' })
        .lte(5, { message: 'priority must be equals or less than 5 characters' })
    )
  })

export type AddSchema = z.infer<typeof addSchema>

export const updateTaskSchema = z
  .object({
    title: z
      .string()
      .min(2, { message: 'title must be more than 2 characters' })
      .max(16, { message: 'title must be less than 17 characters' }),
    description: z
      .string()
      .max(128, { message: 'description must be less than 129 characters' }),

    // just convert sting to number
    priority: z.preprocess(
      input => {
        const processed = z.string().regex(/^\d+$/).transform(Number).safeParse(input);
        return processed.success ? processed.data : input;
      },
      z
        .number()
        .gte(1, { message: 'priority must be equals or grater than 1' })
        .lte(5, { message: 'priority must be equals or less than 5 characters' })
    ),
    status: z
      .enum(['done', 'ongoing']),
    remind_datetime: z
      .string()
      .optional()
  })

export type UpdateTaskSchema = z.infer<typeof updateTaskSchema>

