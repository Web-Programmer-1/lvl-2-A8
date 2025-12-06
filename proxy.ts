
import { NextRequest, NextResponse } from "next/server";

// 🟢 All private/protected routes
const PROTECTED_ROUTES = [
  "/guide",
  "/about",
];

// 🔵 Auth routes (public but blocked for logged users)
const AUTH_ROUTES = ["/login", "/register"];

export function proxy(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Read token
  const accessToken = req.cookies.get("access_token")?.value;

  // Check Protected Route (startsWith any)
  const isProtected = PROTECTED_ROUTES.some((route) =>
    pathname.startsWith(route)
  );

  // Check Auth Route
  const isAuth = AUTH_ROUTES.some((route) =>
    pathname.startsWith(route)
  );

  // 1️⃣ Protected route but NOT logged in → redirect to login
  if (isProtected && !accessToken) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  // 2️⃣ Logged user going to login/register → redirect to default private route
  if (isAuth && accessToken) {
    return NextResponse.redirect(new URL("/guide", req.url));
  }

  return NextResponse.next();
}

// Next.js matcher
export const config = {
  matcher: [
    "/guide",
    "/login",
    "/register",
    "/about",
  ],
};
