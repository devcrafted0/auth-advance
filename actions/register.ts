"use server";

import { RegisterSchema } from "@/schemas";
import { db } from "@/lib/db";
import bcrypt from "bcrypt";
import * as z from "zod";

export const register = async (values: z.infer<typeof RegisterSchema>) => {
  const validatedValues = RegisterSchema.safeParse(values);

  if (!validatedValues.success) {
    return { error: "Invalid Fields !" };
  }

  const { email, password, name } = validatedValues.data;

  const hashedPassword = await bcrypt.hash(password, 10);

  const existingEmail = await db.user.findUnique({
    where: {
      email,
    },
  });

  if (existingEmail) {
    return { error: "Email Already taken !" };
  }

  await db.user.create({ data: { email, password: hashedPassword, name } });

  return { success: "User created !" };
};
