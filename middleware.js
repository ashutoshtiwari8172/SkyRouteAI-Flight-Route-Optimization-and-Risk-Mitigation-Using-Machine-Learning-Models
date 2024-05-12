import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
  async function middleware(req) {
    console.log(req.nextUrl.pathname);
    
    // Fetching user's role
    const userRole = req.nextauth?.token?.role;

    if (
      req.nextUrl.pathname.startsWith("/CreatePilot") &&
      userRole !== "airline"
    ) {
      return NextResponse.rewrite(new URL("/Denied", req.url));
    }

    if (
      req.nextUrl.pathname.startsWith("/CreateUser") &&
      userRole !== "admin"
    ) {
      return NextResponse.rewrite(new URL("/Denied", req.url));
    }
  },
  {
    callbacks: {
      authorized: ({ token }) => !!token,
    },
  }
);

export const config = { matcher: ["/CreateUser", "/CreatePilot"] };
