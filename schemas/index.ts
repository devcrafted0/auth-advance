import * as z from "zod";

export const LoginSchema = z.object({
  email: z.email("Invalid Email !").trim(),
  password: z.string().min(1, {
    message: "Password is required",
  }),
});

export const RegisterSchema = z.object({
  email: z.email("Invalid Email !").trim(),
  password: z.string().min(6, {
    message: "Password must at least be 6 characters",
  }),
  name: z.string().min(1, {
    message: "Name is required",
  }),
});
