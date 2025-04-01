import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
// const client = new PrismaClient();

import client from "@/app/lib";

export async function POST(req:NextRequest)
{
   const data=await req.json()
   const{username,password}=data;
    
  try{
    const user=await client.user.create({
        data:{
            username:username,
            password:password
        }
       })
        
        return NextResponse.json({
            message:"I am The Best",
            data:user
        })
  }
  catch(error)
  {
    return NextResponse.json({
        message:"An Error Eccoured",
        error:error
    });
    
  }
}