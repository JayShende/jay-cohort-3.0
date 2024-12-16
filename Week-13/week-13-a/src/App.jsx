import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { InputCompo } from "./Components/input";
import { LogoComp } from "./Components/logo";
import { TextCompo } from "./Components/text";
import { EmailCompo } from "./Components/emailCompo";
import { Otp } from "./Components/otp";


function App()
{
  return(
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/App1" element={<App1/>} />
        <Route path="/App2" element={<App2/>} />
        <Route path="/otpApp" element={<OtpApp/>} />
        <Route path="*" element={<Default/>} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

function App1() {
  return (
   <div className="bg-[#18203f] h-screen">
    <LogoComp/>
    <TextCompo/>
    <InputCompo type={"text"} placeholder={"Enter Your Birth Year"}/>
    
   </div>
  );
}

function App2()
{
  return (
    <div className="bg-[#18203f] h-screen">
     <LogoComp/>
     <TextCompo/>
     <InputCompo type={"email"} placeholder={"Enter Your Email"}/>
     
    </div>
   );
}

function OtpApp()
{
  return(
    <div className="bg-[#18203f] h-screen">
      <Otp/>
    </div>
  )
}

function Default()
{
  return(
    <div className="text-red-500 text-5xl flex justify-center mt-20">
      404 Resource Not Found
    </div>
  )
}




export default App;
