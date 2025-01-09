interface ButtonProps{
    placeholder:string;
    onClick:()=>void;
}

export const ButtoonCompo=(props:ButtonProps)=>{


    return(
        <button className="bg-[#a0afa5] p-3 rounded-sm m-2 mt-8 font-[poppins] text-sm  hover:bg-[#778a7d] hover:text-[#1b2c29] " onClick={props.onClick}>{props.placeholder}</button>
    )
}