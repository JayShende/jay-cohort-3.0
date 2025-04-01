import { ReactNode } from "react"

export default function Layout({children}:{
    children:ReactNode
}){

    return(
        <div className="h-full flex justify-center items-center bg-sky-600"    >
            {children}
        </div>
    )
}