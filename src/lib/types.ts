import {z } from "zod"

export const SubjectSchema = z.object({
    id: z.number().optional(),
    name: z.string().min(1).max(20),
    color: z.string()

});
export type Subject = z.infer<typeof SubjectSchema>;


export const QuestionSchema = z.object({
    unit: z.number().int().positive(), 
    name: z.string().min(1).max(30),
    description: z.string(),
    type: z.enum(['DATES', 'TERMINOLOGIE', 'FIGURES']), // Restrict type to allowed values
    subjectSlug: z.string(),
  });

export type Question = z.infer<typeof QuestionSchema>;
