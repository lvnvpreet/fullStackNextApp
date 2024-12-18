import {z} from 'zod';

export const verifySchema = z.object({
    token: z.string().length(8, "Token must be  8 characters"),
})