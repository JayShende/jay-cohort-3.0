import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import { SiAuthelia } from "react-icons/si";
const poppinsFont=Poppins({
    weight:["600"],
    subsets:["latin"]
});


interface headerProps{
    label:string
}

 export const Header=({
    label
 }:headerProps)=>{

    return(
       <div className="w-full flex flex-col gap-y-4 items-center justify-center">
        <h1 className={cn("text-3xl font-semibold",
            poppinsFont.className
        )}>
           <div className="flex gap-x-2 ">
           <SiAuthelia className="text-3xl" /> Auth
           </div>
        </h1>
        <p className="text-muted-foreground text-sm">
            {label}
        </p>
       </div> 
    )
 }