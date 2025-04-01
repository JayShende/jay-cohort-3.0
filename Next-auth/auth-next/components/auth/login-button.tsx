"use client";

import { useRouter } from "next/navigation";
import { ReactNode } from "react";

interface LoginButtonProps{
    children: ReactNode,
    mode?:"modal" | "redirect",
    asChild?:boolean
}

export const LoginButton=({
    children,
    mode="redirect",
    asChild
}:LoginButtonProps)=>{

    const router=useRouter();

    const fun=()=>{
        console.log("Login Button Clicked");
        router.push("/auth/login")
    }
    return(
        <span className="cursor-pointer " onClick={fun}>
            {children}
        </span>
    )
}