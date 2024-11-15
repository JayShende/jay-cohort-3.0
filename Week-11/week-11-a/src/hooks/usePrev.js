import { useEffect, useRef } from "react";

export function usePrev(value)
{
    const ref=useRef();

    useEffect(()=>{
        ref.current=value;
    },[value]);

    return ref.current;

}

// in React it returns first then the the Effect is called 