import { User } from "@/schemas/User";

export const getUserByEmail = async (email: string) => {
  try {
    const user = await User.findOne({ email });
    return user;
  } catch {
    return null;
  }
};

export const getUserById = async (id: string) => {
  try {
    const user = await User.findOne({ id });
    return user;
  } catch {
    return null;
  }
};
