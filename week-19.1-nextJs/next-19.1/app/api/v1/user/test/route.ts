import { NextResponse } from "next/server";

export function GET()
{      return NextResponse.json({
    Message:"Not Found"
},{status:404})
}
