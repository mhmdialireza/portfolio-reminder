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
    // priority: z
    //   // .number()
    //   .gte(1, { message: 'priority must be equals or grater than 1' })
    //   .lte(5, { message: 'priority must be equals or less than 5 characters' })

    //   // .number()
    //   // .or(z.string().regex(/\d+/).transform(Number))
    //   // .refine(n => n >= 1 && 5 <= n)
    //   .string()
    //   .refine((val) => !Number.isNaN(parseInt(val, 10)), {
    //     message: "Expected number, received a string"
    //   })
  })

export type AddSchema = z.infer<typeof addSchema>

