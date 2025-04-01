import { LoginButton } from "@/components/auth/login-button";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";
import { MdOutlineSecurity } from "react-icons/md";
const poppinsFont=Poppins({
   subsets: ['latin'], 
  weight: ['400', '600', '700']})

export default function Home() {
  return (
   <main className="flex h-screen w-screen flex-col justify-center items-center bg-sky-600">
    <div className="space-y-6 text-center">
    <h1 className={cn("text-6xl font-semibold text-white drop-shadow-md",
    poppinsFont.className
    )}>
      <div className="flex gap-x-2">
      <MdOutlineSecurity /> 
      <span>Auth</span>
      </div>
    </h1>
    <p className="text-white text-lg">
      A Simple Authentication Service
    </p>
    <div>
      
      <LoginButton>
        <Button variant="default"> Sigin</Button>
      </LoginButton>
    </div>
    </div>
   </main>
  );
}
