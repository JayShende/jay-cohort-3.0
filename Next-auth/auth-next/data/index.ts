import { client } from "@/app/lib"

export const getUserByEmail=async(email:string)=>{
    try{
        const user = await client.user.findUnique({
            where:{
                email:email
            }
        })
        return user;
    }
    catch{
        return null
    }
}


export const getUserById=async(Id:string)=>{
    try{
        const user = await client.user.findUnique({
            where:{
               id:Id
            }
        })
        return user
    }
    catch{
        return null
    }
}