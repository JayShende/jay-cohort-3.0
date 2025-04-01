import { NextRequest } from "next/server";
const JWT_SECRET="JayShende007@";
import Jwt  from "jsonwebtoken";
export async function POST(req:NextRequest)
{
    const data=await req.json();
    const{username,passsowrd}=data;
}