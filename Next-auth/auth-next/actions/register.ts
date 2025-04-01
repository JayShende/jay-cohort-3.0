"use server";

import { RegisterSchema } from "@/schemas";
import { z } from "zod";
import bcrypt from "bcryptjs";
import {client}  from "@/app/lib/index"
import { getUserByEmail } from "@/data";



export const register = async (values: z.infer<typeof RegisterSchema>) => {
//   await new Promise((resolve) => setTimeout(resolve, 10000)); // ⏳ Wait for 10 sec
  
    console.log(values); 

    // validating the data again
    const result=RegisterSchema.safeParse(values);

    console.log(result);
    if(result.success==false)
    {
        return{ error:"Inavild Inputs"}
    }
    const{name,email,password}=result.data;
    const hashedpwd= await bcrypt.hash(password,5);

    // confirming that the email has not been taken yet

    const userCheck= await getUserByEmail(email);

    if(userCheck)
    {
        return{ error:"Email Already Taken"}
    }

    // Since Now The email is Unique we can create the user

    await client.user.create({
        data:{
            name:name,
            email:email,
            password:hashedpwd
        }
    });

    // TODO Send Verification token email

    return{
        success:"User Create Successfully"
    }
}
