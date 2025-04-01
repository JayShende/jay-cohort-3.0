

// import NextAuth from "next-auth"
import NextAuth, { type DefaultSession } from "next-auth"
import {PrismaAdapter} from "@auth/prisma-adapter"

import authConfig from "./auth.config"

// we also need to import the prisma client
import {client} from "@/app/lib/index"
import { getUserById } from "./data"

declare module "next-auth"{
    interface Session{

        user:{
            role:"ADMIN" | "USER"
        }& DefaultSession["user"]

    } 
}

export const { auth, handlers, signIn, signOut } = NextAuth({
    adapter:PrismaAdapter(client),
    callbacks:{

        // async signIn({user}){

        //   const existingUser=await getUserById(user.id);
        //   if(!existingUser || !existingUser.emailVerified)
        //   {
        //     return false
        //   }

        //     return true;
        // },

        async session({ token,session }) {
            
            // console.log("sessiontoken",token)
            if(token.role && session.user)
            {
                session.user.role=token.role as "ADMIN" |"USER";
            }
            if(token.sub && session.user)
            {
                session.user.id=token.sub; 
            }
            // checking in above two conditions just to avoid ts error that the user dont exist, role dont exist blah blah

            return session
          },
        async jwt({ token }) {
            if(!token.sub) return token; // ie i am logged out
            const user=await getUserById(token.sub);
            
            if(!user) return token;
             token.role=user.role;
            
            // console.log({token})
           
            return token
          }
          
    },
    session:{strategy:"jwt"},
 ...authConfig
})