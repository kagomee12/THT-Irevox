import { z } from "zod";

export const taskSchema = z.object({
  title: z.string().min(3).max(30),
  completed: z.boolean().default(false),
});

export type TTaskSchema = z.infer<typeof taskSchema>;

export const taskEditSchema = z.object({
  title: z.string().min(3).max(30),
});

export type TTaskEditSchema = z.infer<typeof taskEditSchema>;
