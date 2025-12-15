import NextAuth, { DefaultSession } from "next-auth";
import authConfig from "./auth.config";
import Credentials from "next-auth/providers/credentials";
import { LoginSchema } from "@/schemas";
import { getUserByEmail, getUserById } from "@/data/user";
import bcrypt from "bcryptjs";

type ExtendedUser = DefaultSession["user"] & {
  role: "admin" | "user";
};

declare module "next-auth" {
  interface Session {
    user: ExtendedUser;
  }
}

export const { handlers, signIn, signOut, auth } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      async authorize(credentials) {
        const validatedFields = LoginSchema.safeParse(credentials);
        if (validatedFields.success) {
          const { email, password } = validatedFields.data;
          const user = await getUserByEmail(email);
          if (!user || !user.password) return null;

          const passwordMatch = await bcrypt.compare(password, user.password);

          console.log(user);
          if (passwordMatch) {
            return user;
          }
        }
        return null;
      },
    }),
  ],
  callbacks: {
    async session({ token, session }) {
      console.log({ sessionToken: token });
      if (token.sub && session.user) {
        session.user.id = token.sub;
      }
      if (token.role && session.user) {
        session.user.role = token.role as "admin" | "user";
      }
      return session;
    },
    async jwt({ token }) {
      if (!token.sub) return token;

      const existingUser = await getUserById(token.sub);

      if (!existingUser) return token;

      token.role = existingUser.role;

      return token;
    },
  },
});
