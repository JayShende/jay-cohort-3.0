"use client";

import { ReactNode } from "react";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import { Header } from "./header";
import { Social } from "./soical";
import { BackButton } from "./back-button";


 interface CardWrapperProps{
    children:ReactNode,
    headerLabel:string,
    backButtonLabel:string,
    backButtonHref:string,
    showSocial?:boolean
 }


 export const CardWrapper=({children,
    headerLabel,
    backButtonLabel,
    backButtonHref,
    showSocial
 }:CardWrapperProps)=>{

    return(
       <Card className="w-[400px] shadow-md">
        <CardHeader>
            <Header label={headerLabel} />
        </CardHeader>

        <CardContent>
        {children}
        </CardContent>

        {showSocial &&(
            <CardFooter>
                <Social/>
            </CardFooter>
        )}

        <CardFooter>
            <BackButton
            href={backButtonHref}
            label={backButtonLabel}
            />
        </CardFooter>
       </Card>
    )
 }