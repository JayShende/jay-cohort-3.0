import { NextResponse } from "next/server";

export function GET()
{   
    return NextResponse.json({
        name:"Jay Shende",
        email:"jayshende1709@gmail.com"
    });
    
}


export function POST()
{
    return NextResponse.json({
        name:"Jay Shende",
        email:"jayshende1709@gmail.com"
    });
}

export function PUT()
{
    return NextResponse.json({
        name:"Jay Shende",
        email:"jayshende1709@gmail.com"
    });
}