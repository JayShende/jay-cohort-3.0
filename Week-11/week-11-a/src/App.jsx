import {createContext, useContext, useState } from "react";
import "./App.css";
import { usePrev } from "./hooks/usePrev";

const countContext=createContext();

function App() {
 return(
  <>
    <Counter/>
  </>
 )
}

function Counter()
{ 
  const [count,setCount]=useState(0);
  return(
    <div>
    <countContext.Provider
    value={{
      setCount:setCount
    }}
    >
       <IncreaseCount/>
       <br /> <br />
       <DecreaseCount/>
    </countContext.Provider>
   <h1>{count}</h1>
    </div>
  )
}

function IncreaseCount()
{
  const {setCount}=useContext(countContext);
  return(
    <>
    <button onClick={()=>{
      setCount((previousValue)=>previousValue+1)
    }}>Increase </button>
    </>
  )
}

function DecreaseCount()
{
  const {setCount}=useContext(countContext);
  return(
    <>
    <button onClick={()=>{
      setCount((previousValue)=>previousValue-1)
    }}>Decrease</button>
    </>
  )
}

export default App;
