import GitHub from "next-auth/providers/github";
import type { NextAuthConfig } from "next-auth";

// For edge compatibility we are using this

export default { providers: [GitHub] } satisfies NextAuthConfig;
