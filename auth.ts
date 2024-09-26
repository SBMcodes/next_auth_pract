// https://authjs.dev/getting-started/migrating-to-v5
// http://localhost:3000/api/auth/providers
// SECRET
// https://authjs.dev/guides/environment-variables

import NextAuth from "next-auth";
import authConfig from "./auth.config";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { db } from "./lib/db";

export const { auth, handlers, signIn, signOut } = NextAuth({
  adapter: PrismaAdapter(db),
  session: { strategy: "jwt" },
  ...authConfig,
});
