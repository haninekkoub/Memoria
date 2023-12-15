import {z } from "zod"

export const SubjectSchema = z.object({
    id: z.number().optional(),
    name: z.string().min(1).max(20),
});
export type Subject = z.infer<typeof SubjectSchema>;