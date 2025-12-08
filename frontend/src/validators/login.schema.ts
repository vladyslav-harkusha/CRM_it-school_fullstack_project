import { z } from "zod";

export const LoginSchema = z.object({
    email: z.email({ message: "Enter correct email" }).nonempty("Email is required"),
    password: z.string().min(5, "Min length 5 characters").nonempty("Password is required"),
});

export type LoginSchemaType = z.infer<typeof LoginSchema>;
