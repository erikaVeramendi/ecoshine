import { NextRequest, NextResponse } from 'next/server';

const ADMIN_COOKIE = 'ecoshineAdminSession';
const ADMIN_LOGIN_PATH = '/admin/login';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Only apply to /admin paths
  if (!pathname.startsWith('/admin')) {
    return NextResponse.next();
  }

  // Allow the login page through unconditionally
  if (pathname === ADMIN_LOGIN_PATH) {
    return NextResponse.next();
  }

  // Check for valid admin session cookie
  const sessionCookie = request.cookies.get(ADMIN_COOKIE);
  if (!sessionCookie || sessionCookie.value !== 'authenticated') {
    const loginUrl = new URL(ADMIN_LOGIN_PATH, request.url);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*'],
};
