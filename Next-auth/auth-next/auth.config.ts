import Credentials from "next-auth/providers/credentials"
import GitHub from "next-auth/providers/github"
import Google from "next-auth/providers/google"
import type { NextAuthConfig } from "next-auth"
import { LoginSchema } from "./schemas"
import { getUserByEmail } from "./data";
import bcrypt from "bcryptjs";

export default { providers: [
    GitHub({
        clientId:process.env.GITHUB_CLIENT_ID as string,
        clientSecret:process.env.GITHUB_CLIENT_SECRET as string
    }),
    Google,
    Credentials({
        async authorize(credentials){
            
            // again checking that the credentails passes or recived are zod schema compialent
            const validatedFields = LoginSchema.safeParse(credentials);

            if(validatedFields.success){
                const {email,password}=validatedFields.data;

                const user=await getUserByEmail(email);

                // we check if the user with the email exist or not if the user not exist then we return null as per the credentails previder norms
                // we also check one edge condiation ie that we have an entry with the email but the entry dont have an password entry ie the password is missing this can happen when the user has used github / gmail to signin and now is using the credentails provider
                // in this scenerio we would not allow
                if(!user || !user.password) return null;

                const passwordMatch= await bcrypt.compare(password,user.password);

                if(passwordMatch) return user;
            }
            return null;
        }
    })
] } satisfies NextAuthConfig