import { auth, signOut } from "@/auth"
import { Button } from "@/components/ui/button";

export default async function SettingsPage(){

    const session=await auth();
    const imageUrl=session?.user.image;
    return(
        <div>
            Settings Page 
            <br />
            {session?.user.role}
            <br />
            {JSON.stringify(session)};
            <br />
            <img src={imageUrl} alt="" />
            <form action={async()=>{
                "use server";
                await signOut();
            }}>
                <Button type="submit" variant="destructive">
                    Sign Out
                </Button>
            </form>
        </div>
    )
}