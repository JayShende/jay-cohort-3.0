"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
import { useRef } from "react";

export default function SignupComponent(){
    
    async function funSignup()
    {
        console.log("hello");
        const username=usernameRef.current?.value;
        const password=pwdRef.current?.value;
        const res=await axios({
            method:"post",
            url:"http://localhost:3000/api/v1/signup",
            data:{
                username:username,
                password:password
            }
        })
        router.push("/signin");
    }
    const usernameRef=useRef<HTMLInputElement>(null);
    const pwdRef=useRef<HTMLInputElement>(null);
    const router=useRouter();
    return(
        <div className="w-screen h-screen flex justify-center items-center">

            <div className="border-1 border-slate-500 rounded-xl w-72 h-80 flex flex-col items-center">
                <div className="m-3 text-2xl font-semibold text-slate-300">
                    Signup
                </div>

                <div className="flex flex-col items-center mt-3">
                    <input type="email" className="w-56 h-7 rounded-sm border-1 p-3 border-slate-300 text-slate-500" placeholder="Enter Your Email" required ref={usernameRef}/>
                    <input type="password" className="mt-4 w-56 h-7 rounded-sm border-1 p-3 border-slate-300 text-slate-500" placeholder="Enter Your Password" required ref={pwdRef}/>
                </div>

                <div>
                    <button className="mt-5 text-md font-semibold text-slate-200 w-32 border-1 p-2 rounded-md bg-slate-500 hover:bg-slate-800 hover:cursor-pointer" onClick={funSignup}>Signup</button>
                </div>
            </div>
            
        </div>
    )
}
