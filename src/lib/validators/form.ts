import { z } from "zod";

const phoneRegExp = /^\d{10}$/

export const FormValidator = z.object({
    name: z.string()
        .min(3, { message: 'Name must be at least 3 characters long' })
        .max(50, { message: 'Name must be at most 50 characters long' }),
    email: z.string().email({ message: 'Invalid email address' }),
    phone: z.string()
        .refine(value => phoneRegExp.test(value), {
            message: 'Invalid phone number',
        }),
    message: z.string()
        .min(5, { message: 'Message must be at least 5 characters long' })
        .max(500, { message: 'Message must be at most 500 characters long' }),
});

export type FormValues = z.infer<typeof FormValidator>;
