import { Schema, model, models, Types } from "mongoose";

export interface IAccount {
  _id: Types.ObjectId;
  userId: Types.ObjectId;

  type: string;
  provider: string;
  providerAccountId: string;

  refresh_token?: string | null;
  access_token?: string | null;
  expires_at?: number | null;

  token_type?: string | null;
  scope?: string | null;
  id_token?: string | null;
  session_state?: string | null;
}

const AccountSchema = new Schema<IAccount>(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
      index: true,
    },

    type: {
      type: String,
      required: true,
    },

    provider: {
      type: String,
      required: true,
    },

    providerAccountId: {
      type: String,
      required: true,
    },

    refresh_token: {
      type: String,
    },

    access_token: {
      type: String,
    },

    expires_at: {
      type: Number,
    },

    token_type: {
      type: String,
    },

    scope: {
      type: String,
    },

    id_token: {
      type: String,
    },

    session_state: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

AccountSchema.index({ provider: 1, providerAccountId: 1 }, { unique: true });

export const Account =
  models.Account || model<IAccount>("Account", AccountSchema);
