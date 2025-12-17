import { VerificationToken } from "@/schemas/VerificationToken";

export const getVerificationTokenByEmail = async (email: string) => {
  try {
    const verificationToken = await VerificationToken.findOne({ email });
    return verificationToken;
  } catch {
    return null;
  }
};

export const getVerificationTokenById = async (id: string) => {
  try {
    const verificationToken = await VerificationToken.findById(id);
    return verificationToken;
  } catch {
    return null;
  }
};
