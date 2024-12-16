import { useRef, useState } from "react";
import { Button } from "./button";

export const Otp = () => {
  const ref1 = useRef();
  const ref2 = useRef();
  const ref3 = useRef();
  const ref4 = useRef();
  const ref5 = useRef();
  const ref6 = useRef();

  const [dis, setDis] = useState(true);
  return (
    <div>
        <h1 className="text-white flex justify-center py-12">Verify OTP APP</h1>
      <div className="flex justify-center ">
        <OtpBox
          refrence={ref1}
          onDone={() => {
            if(ref1.current.value==="")
                {
                    ref1.current.focus();
                }
                else{
                    ref2.current.focus();
                }
          }}
        />
        <OtpBox
          refrence={ref2}
          onDone={() => {
            if(ref2.current.value==="")
                {
                    ref1.current.focus();
                }
                else{
                    ref3.current.focus();
                }
          }}
        />
        <OtpBox
          refrence={ref3}
          onDone={() => {
            if(ref3.current.value==="")
                {
                    ref2.current.focus();
                }
                else{
                    ref4.current.focus();
                }
          }}
        />
        <OtpBox
          refrence={ref4}
          onDone={() => {
            if(ref4.current.value==="")
            {
                ref3.current.focus();
            }
            else{
                ref5.current.focus();
            }
          }}
        />
        <OtpBox
          refrence={ref5}
          onDone={() => {
            if (ref5.current.value === "") {
              ref4.current.focus();
            } else {
              ref6.current.focus();
            }
          }}
        />
        <OtpBox
          refrence={ref6}
          onDone={() => {
            if (ref6.current.value === "") {
              ref5.current.focus();
              setDis(true);
            }
            else{
                setDis(false);
            }
          }}
        />

        <br />
      </div>
      <div>
        <Button disabled={dis} PlaceHolder={"Verify OTP"} />
      </div>
    </div>
  );
};

function OtpBox({
  // eslint-disable-next-line react/prop-types
  refrence,
  onDone,
}) {
  return (
    <div>
      <input
        type="text"
        className="w-8 h-8 rounded-md mt-12 ml-2 bg-[#3154c4] text-white px-3"
        ref={refrence}
        onChange={onDone}
      />
    </div>
  );
}
