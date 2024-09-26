import authConfig from "./auth.config";
import NextAuth from "next-auth";

const { auth } = NextAuth(authConfig);

export default auth(async function middleware(req) {
  const isLoggedIn = !!req.auth;
  console.log(isLoggedIn);
  console.log("Route:", req.nextUrl.pathname);
});

// Matcher Stolen from:
// https://clerk.com/docs/quickstarts/nextjs
export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
};
