import { getPasswordResetTokenByEmail } from "@/data/password-reset-token";
import { getVerificationTokenByEmail } from "@/data/verification-token";
import { PasswordResetToken } from "@/schemas/PasswordResetToken";
import { VerificationToken } from "@/schemas/VerificationToken";
import { v4 as uuid } from "uuid";

export const generateVerificationToken = async (email: string) => {
  const token = uuid();
  const expires = new Date(new Date().getTime() + 3600 * 1000);
  const exisitingToken = await getVerificationTokenByEmail(email);

  if (exisitingToken) {
    await VerificationToken.deleteOne({ _id: exisitingToken._id });
  }

  const verificationToken = await VerificationToken.create({
    email,
    token,
    expires,
  });
  return verificationToken;
};

export const generatePasswordResetToken = async (email: string) => {
  const token = uuid();
  const expires = new Date(new Date().getTime() + 3600 * 1000);
  const exisitingToken = await getPasswordResetTokenByEmail(email);

  if (exisitingToken) {
    await PasswordResetToken.deleteOne({ _id: exisitingToken.id });
  }

  const passwordResetToken = await PasswordResetToken.create({
    email,
    token,
    expires,
  });

  return passwordResetToken;
};
