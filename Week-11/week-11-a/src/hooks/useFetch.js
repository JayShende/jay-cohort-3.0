import { useEffect, useState } from "react";


export function useFetch(url)
{   
    // console.log(url);
    const [fetchData,setFetchdata]=useState({});
    const [loading,setLoading]=useState(true);
    // console.log(loading);

    useEffect(()=>{
        getData();
    },[url]);

    useEffect(()=>{
        const intervalId= setInterval(getData,10*1000);
        return ()=> clearInterval(intervalId);
    },[]);

    async function getData()
    {
        setLoading(true);
        const repsonse=await fetch(url);
        const json =await repsonse.json();
        setFetchdata(json);
        setLoading(false);
    }
    // console.log(fetchData);
    return{
        fetchData,
        loading
    }
}