import { ReactNode } from "react"

interface ChildInt{
    children:ReactNode
}

export default function Layout({children}:ChildInt){

    return(
        <div>
            {children}
            <h2>This is the Layout.tsx located at auth/</h2>
        </div>
    )
}