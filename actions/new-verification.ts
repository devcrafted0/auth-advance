"use server";

import { getUserByEmail } from "@/data/user";
import { getVerificationTokenByToken } from "@/data/verification-token";
import { User } from "@/schemas/User";
import { VerificationToken } from "@/schemas/VerificationToken";

export const newVerification = async (token: string) => {
  const existingToken = await getVerificationTokenByToken(token);

  if (!existingToken) {
    return { error: "Token does not exist!" };
  }

  const hasExpired = new Date(existingToken.expires) < new Date();

  if (hasExpired) {
    return { error: "Token has expired" };
  }

  const existingUser = await getUserByEmail(existingToken.email);

  if (!existingUser) {
    return { error: "Email does not exist" };
  }

  await User.findByIdAndUpdate(existingUser.id, {
    $set: {
      emailVerified: new Date(),
      email: existingToken.email,
    },
  });

  await VerificationToken.findByIdAndDelete(existingToken.id);

  return { success: "Email verified!" };
};
