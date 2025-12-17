"use server";

import { RegisterSchema } from "@/schemas";
import bcrypt from "bcryptjs";
import * as z from "zod";
import { User } from "@/schemas/User";
import { getUserByEmail } from "@/data/user";
import { generateVerificationToken } from "@/lib/tokens";
import { sendVerificationEmail } from "@/lib/resend";

export const register = async (values: z.infer<typeof RegisterSchema>) => {
  const validatedValues = RegisterSchema.safeParse(values);

  if (!validatedValues.success) {
    return { error: "Invalid Fields!" };
  }

  const { email, password, name } = validatedValues.data;

  const hashedPassword = await bcrypt.hash(password, 10);

  const existingEmail = await getUserByEmail(email);

  if (existingEmail) {
    return { error: "Email Already taken!" };
  }

  await User.create({ email, name, password: hashedPassword, accounts: [] });

  const verificationToken = await generateVerificationToken(email);

  await sendVerificationEmail(verificationToken.email, verificationToken.token);

  return { success: "Confirmation email sent!" };
};
