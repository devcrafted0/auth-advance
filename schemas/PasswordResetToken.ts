import { Schema, model, models } from "mongoose";

const PasswordResetTokenSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      trim: true,
    },
    token: {
      type: String,
      required: true,
      unique: true,
    },
    expires: {
      type: Date,
      required: true,
    },
  },
  {
    timestamps: false,
  }
);

// Compound unique index (email + token)
PasswordResetTokenSchema.index({ email: 1, token: 1 }, { unique: true });

export const PasswordResetToken =
  models.VerificationToken ||
  model("VerificationToken", PasswordResetTokenSchema);
