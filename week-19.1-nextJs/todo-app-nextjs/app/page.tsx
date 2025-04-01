import Link from "next/link"

export default function Home() {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="flex  flex-col justify-center items-center">
        <span className="text-4xl text-blue-400 font-bold">
          To Do Application
        </span>
        <div className="w-72 flex justify-between">
          <Link href="/signup"> <div className="mt-5 border-1 py-3 px-5 bg-slate-700 hover:bg-slate-900 hover:cursor-pointer rounded-xl text-xl font-semibold">Signup</div></Link>
          <Link href="/signin"> <div className="mt-5 border-1 py-3 px-5 bg-slate-700 hover:bg-slate-900 hover:cursor-pointer rounded-xl text-xl font-semibold">Signin</div></Link>
        </div>
      </div>
    </div>
  );
}
