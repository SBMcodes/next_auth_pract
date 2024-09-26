// https://authjs.dev/getting-started/migrating-to-v5
// http://localhost:3000/api/auth/providers
// SECRET
// https://authjs.dev/guides/environment-variables

import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import Google from "next-auth/providers/google";

export const { auth, handlers, signIn, signOut } = NextAuth({
  providers: [GitHub, Google],
});
