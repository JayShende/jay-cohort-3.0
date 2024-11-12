import { useState,useRef } from "react";

function App()
{ 
  let [timer,setTimer]=useState(1);
  const intervalRef = useRef();
  function startClock()
  {
    intervalRef.current=setInterval(()=>{setTimer(timer=>timer+1)},1000)
  }
  function stopClock()
  {
    clearInterval(intervalRef.current);
  }
  return(
    <div>
      <h1>{timer}</h1>
     <button onClick={startClock}> Start</button>
     <button onClick={stopClock}> Stop</button>
    </div>
  )
};

export default App;