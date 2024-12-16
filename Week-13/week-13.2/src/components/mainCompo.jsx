import { useState } from "react";
import { SidebarToggle } from "../icons/SidebarToggle";

export const MainCompo = () => {

    const [sidebar,setSidebar]=useState(true);
  return (
    <div className="flex">
      <SideBar sidebar={sidebar} setSidebar={setSidebar} />
      <Content />
    </div>
  );
};

function SideBar({sidebar,setSidebar}) {

    if(sidebar)
    {
        return (
            <div>
              <div className="bg-blue-200 h-screen md:w-60 w-0 transition-w duration-1000">
                <div className="hover:bg-slate-300 cursor-pointer  " onClick={()=>{
                    setSidebar(!sidebar)
                }}>
                <SidebarToggle/>
                </div>
              </div>
            </div>
          );
    }

    return (
        <div>
            <div className="hover:bg-slate-300 cursor-pointer fixed top-0 left-0" onClick={()=>{
                setSidebar(!sidebar)
            }}>
            <SidebarToggle/>
            </div>
        </div>
      );
  
}
function Content() {
  return (
    <div className="w-full">
      <div className="bg-black w-full h-32 md:block  hidden"></div>
      <div className=" gap-4 grid grid-cols-12 p-6">
        <div className="bg-white h-[300px] rounded-2xl -translate-y-16 col-span-3 justify-center md:block hidden shadow-xl ">
           <img src="https://images.unsplash.com/photo-1606386666595-d135abc1e3b2?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt=""  className="object-center w-24 ml-20 mt-12 "/>
           <b className="ml-20 mt-10">Jay Shende</b>
           <p className="ml-16 text-slate-600">jayshende@gmail.com</p>
        </div>
        <div className="col-span-9">
            <p></p>
        <p className="text-4xl font-bold ml-28">Good Morning Jay !</p>
        </div>
        <div className="grid grid-cols-12">
        <div className="bg-red-200   rounded-md md:col-span-6 col-span-12 md:h-96 h-72 shadow-xl"></div>
        <div className="bg-white   rounded-xl md:col-span-6 col-span-12 h-48 shadow-xl"></div>
        </div>
      </div>
    </div>
  );
}
