import { ReactNode } from "react"

interface ChildInt{
    children:ReactNode
}

export default function Layout({children}:ChildInt){
    return(
        <div>
            <div>
                This is a Header
            </div>
        {children}
        <div>
            This is a Footer
        </div>
        </div>
    )
}