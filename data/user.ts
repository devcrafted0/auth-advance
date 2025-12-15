import { connectDB } from "@/lib/db";
import { User } from "@/schemas/User";

export const getUserByEmail = async (email: string) => {
  try {
    await connectDB();
    const user = await User.findOne({ email });
    return user;
  } catch {
    return null;
  }
};

export const getUserById = async (id: string) => {
  try {
    await connectDB();
    const user = await User.findById(id);
    return user;
  } catch {
    return null;
  }
};
