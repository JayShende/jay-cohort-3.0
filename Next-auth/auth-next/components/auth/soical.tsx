"use client";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { Button } from "../ui/button";

import { signIn } from "next-auth/react";
// use this from "next-auth/react" so that we can use the signin inside the client component

import { DEFAULT_LOGIN_REDIRECT } from "@/routes";

export const Social=()=>{

    function onClick(provider:"github"){
        signIn(provider,{
            callbackUrl:DEFAULT_LOGIN_REDIRECT
        })
    }

    return(
        <div className="flex items-center w-full gap-x-2">
            <Button
            size="lg"
            className="w-[50%]"
            variant="outline"
            // onClick={()=> onClick("google")}
            >
                <FcGoogle className="h-5 w-5"/>
            </Button>

            <Button
            size="lg"
            className="w-[50%]"
            variant="outline"
            onClick={()=>onClick("github")}
            >
                <FaGithub className=""/>
            </Button>
        </div>
    )
}