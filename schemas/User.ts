import { Schema, model, models, Types } from "mongoose";

export interface IUser {
  _id: Types.ObjectId;
  name: string;
  email: string;
  password?: string;
  image?: string | null;
  emailVerified: Date;
  role: "admin" | "user";
  accounts?: Types.ObjectId[];
}

const UserSchema = new Schema<IUser>({
  name: {
    type: String,
    required: true,
    trim: true,
  },

  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    index: true,
  },

  password: {
    type: String,
    // select: false,
  },

  image: {
    type: String,
    default: null,
  },

  emailVerified: { type: Date, default: null },
  role: {
    type: String,
    enum: ["user", "admin"],
    default: "user",
    required: true,
  },
});

export const User = models.User || model<IUser>("User", UserSchema);
