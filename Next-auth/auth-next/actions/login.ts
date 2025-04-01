"use server";

import { LoginSchema } from "@/schemas";
import { z } from "zod";
import { signIn } from "@/auth";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";
import { AuthError } from "next-auth";
export const login = async (values: z.infer<typeof LoginSchema>) => {
//   await new Promise((resolve) => setTimeout(resolve, 10000)); // ⏳ Wait for 10 sec
  
    console.log(values); 

    // validating the data again
    const result=LoginSchema.safeParse(values);
    console.log(result);
    if(result.success==false)
    {
        return{ error:"Inavild Inputs"}
    }

    // return{
    //     success:"Email Sent"
    // }

    const{email,password}=result.data;

    try{
        await signIn("credentials",{
            email,
            password,
            redirectTo:DEFAULT_LOGIN_REDIRECT
        })
    }
    catch(error){
         if(error instanceof AuthError){
            switch(error.type){
                case "CredentialsSignin":
                    return{error:"Invalid Credentials"}
                default:
                    return{error:"Something Went Wrong !"}
            }
        }
        throw error;
        //  no logic to throw error but we need to throw the error before the catch block ends 
        // if we dont thow the error the page wont redirect 
    }

}
