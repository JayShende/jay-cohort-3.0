import { ButtoonCompo } from "@/components/button";
import { useRef, useState } from "react";
import randomize from "randomatic";
import { useNavigate } from "react-router-dom";
// import {RoomCode} from "../hooks/useRoomCode";


export const HomePage = () => {

    const[roomcode,setRoomcode]=useState<string>("");
    const naviagate=useNavigate();
    const inputRef=useRef<HTMLInputElement>(null);
    // const {setcodeValue} = RoomCode();
    function funGenCode()
    {
        const code =randomize('Aa0',7);
        setRoomcode(code);
    }

    function funJoinRoom()
    {   
        localStorage.removeItem("code");
        const code:string=inputRef.current?.value || "";
        localStorage.setItem("code",code)
        naviagate("/chatPage")
    }

  return (
    <div className="w-full h-full bg-[#1b2c29] flex justify-center items-center">
      <div className="w-[650px] h-80 bg-[#ddd4b4] rounded-xl">
        <div className="w-full flex justify-center border-b-2 p-2 border-[#1b2c29]">
          <p className="mt-3 text-2xl font-bold font-[poppins] text-[#1b2c29] ">
            100x Chat App
          </p>
        </div>
        <div className="flex flex-row justify-between h-[37vh]">
          <div className="w-[50%] border-r-2 h-full border-[#1b2c29] flex flex-col items-center">
            <p className="font-[poppins] text-md font-medium mt-2">
              Create Room
            </p>
            <div className="w-36 h-10 bg-[#008172] rounded-lg mt-2 flex justify-between">
                <span className="p-1 pl-3 font-[poppins] text-[#1b2c29]">{roomcode}</span>
            <span><i className="cursor-pointer ri-clipboard-fill text-[#1b2c29] mr-3 text-lg" onClick={()=>navigator.clipboard.writeText(roomcode)}></i></span>
            </div>
            
            <ButtoonCompo placeholder="Generate Code" onClick={funGenCode}/>
          </div>

          <div className="w-[50%] border-r-2 h-full border-[#1b2c29] flex flex-col items-center">
            <p className="font-[poppins] text-md font-medium mt-2 ">Join Room</p>

            <div className="flex flex-col">
              <input
                type="text"
                name=""
                id=""
                ref={inputRef}
                className="bg-[#008172] w-36 h-10 rounded-lg mt-2 text-[#1b2c29] p-3 font-[poppins] "
              />
              <ButtoonCompo placeholder="Join Room" onClick={funJoinRoom}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
