import { useEffect, useState } from "react";

export const useFetch=(url)=>{
    
    const [data,setData]=useState({});
    const [loading,setLoading]=useState(true);
    useEffect(()=>{
    async function getData()
    {   
        setLoading(true);
        const response= await fetch(url);
        const json=await response.json();
        setData(json);
        setLoading(false);
    }
    getData();
    },[])

    return({
        data,
        loading
    })
}