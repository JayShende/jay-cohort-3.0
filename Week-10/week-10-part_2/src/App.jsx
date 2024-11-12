/* eslint-disable react/prop-types */
import { useContext } from "react";
import { createContext } from "react";
import { useState } from "react"

const BulbContext=createContext();

function App()
{ 
  const [light,setLight]=useState(true);
  return(
    <div>
      <BulbContext.Provider value={{
        light:light,
        setLight:setLight
      }}>
      <Light/>
      </BulbContext.Provider>
    </div>
  )
}

function Light()
{
  return(
    <div>
      <LightBulb/>
      <LightSwitch/>
    </div>
  )
}

function LightBulb()
{ 
  const {light}=useContext(BulbContext);
  return(
    <div>
      {light?"Bulb On":"Bulb Off"}
    </div>
  )
}

function LightSwitch()
{ 
  const {setLight}=useContext(BulbContext);
  function toggle()
  {
    setLight((currentValue)=> !currentValue);
  }
  return(
    <div>
      <button onClick={toggle}> Toggle the Light Bulb</button>
    </div>
  )
}


export default App;