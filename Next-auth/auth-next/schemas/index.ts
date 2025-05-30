import * as z from "zod";

export const LoginSchema=z.object({
    email:z.string().email({
        message:"Email is Required"
    }),
    password:z.string().min(1,{
        message:"Password is Required"
    })
})

export const RegisterSchema=z.object({
    email:z.string().email({
        message:"Email is Required"
    }),
    password:z.string().min(6,{
        message:"Minimum 6 Characters Required"
    }),
    name:z.string().min(3,{
        message:"Name is Required"
    })
})