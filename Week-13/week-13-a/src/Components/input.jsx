import { useRef, useState } from "react"
import { Button } from "./button";



export function InputCompo({type,placeholder})
{
    const inputRef=useRef();
    // const[r2,setr2]=useState(inputRef);
    const[btn,setBtn]=useState(true);
    function fun()
    {
        console.log(inputRef.current.value);
        if(inputRef.current.value!="")
        {
            setBtn(false);
        }else{
            setBtn(true)
        }
    }
  return(
    <>
    <div className="flex justify-center pt-20">
      <input type={type}  placeholder={placeholder} 
      onChange={fun} ref={inputRef}
      className="w-80 h-14 rounded-xl px-5 bg-[#2d45a0] "/>
    </div>

    <Button disabled={btn}
    PlaceHolder={"Submit"}
    />
    </>
  )
}
