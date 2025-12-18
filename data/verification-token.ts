import { connectDB } from "@/lib/db";
import { VerificationToken } from "@/schemas/VerificationToken";

export const getVerificationTokenByEmail = async (email: string) => {
  try {
    await connectDB();
    const verificationToken = await VerificationToken.findOne({ email });
    return verificationToken;
  } catch {
    return null;
  }
};

export const getVerificationTokenByToken = async (token: string) => {
  try {
    await connectDB();
    const verificationToken = await VerificationToken.findOne({ token });
    return verificationToken;
  } catch {
    return null;
  }
};
