

export const RoomCode=()=>{
    let currCode="";
    function setcodeValue(code:string)
    {
        currCode=code;
    }

    return{currCode,setcodeValue};
}