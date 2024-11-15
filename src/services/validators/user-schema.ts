import { z } from "zod";

export const userSchema = z.object({
    username: z.string().min(3).max(30),
    password: z.string().min(6).max(30),
    role: z.enum(["user", "admin"]).optional(),
});

export type TUserSchema = z.infer<typeof userSchema>;

