"use server";

import { LoginSchema } from "@/schemas";

export const login = async (values: any) => {
  const validatedValues = LoginSchema.safeParse(values);
  if (!validatedValues.success) {
    return { error: "Invalid Fields !" };
  }
  return { success: "Email sent !" };
};
