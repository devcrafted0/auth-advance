import { getVerificationTokenByEmail } from "@/data/verification-token";
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
