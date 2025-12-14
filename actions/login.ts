"use server";

import { signIn } from "@/auth";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";
import { LoginSchema } from "@/schemas";
import { AuthError } from "next-auth";
import { redirect } from "next/navigation";
import * as z from "zod";

export const login = async (values: z.infer<typeof LoginSchema>) => {
  const validatedValues = LoginSchema.safeParse(values);
  if (!validatedValues.success) {
    return { error: "Invalid Fields !" };
  }
  const { email, password } = validatedValues.data;

  try {
    const result = await signIn("credentials", {
      email,
      password,
    });
    if (!result?.ok) {
      return { error: "Invalid credentials" };
    }
    redirect(DEFAULT_LOGIN_REDIRECT);
  } catch (error) {
    if (error instanceof AuthError) {
      return { error: "Authentication failed" };
    }
    throw error;
  }
};
