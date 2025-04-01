import { NextRequest, NextResponse } from "next/server";

export function GET()
{   
    return NextResponse.json({
        name:"Jay Shende",
        email:"jayshende1709@gmail.com"
    });
    
}
export async  function POST(req:NextRequest)
{
    const data=await req.json()
    return NextResponse.json({
        name:"Jay Shende",
        email:"jayshende1709@gmail.com",
        input:data.input
    });
}

export function PUT()
{
    return NextResponse.json({
        name:"Jay Shende",
        email:"jayshende1709@gmail.com"
    });
}