//src\app\api\some-api-name\route.ts
import { NextResponse } from "next/server";


export async function GET() {
  const data = { message: "This is an API response" };
  return NextResponse.json(data);
}
