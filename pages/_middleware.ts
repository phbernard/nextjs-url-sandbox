import type { NextRequest } from "next/server";

export default function middleware(req: NextRequest) {
  console.log("Middleware - Request URL", req.nextUrl);
  const hostname = req.headers.get("host");
  console.log("Middleware - Host", hostname);
}
