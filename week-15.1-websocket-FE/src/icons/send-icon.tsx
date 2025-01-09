interface propsInterface{
    onclick:()=>void;
}

export const SendIcon=(props:propsInterface)=>{
    return(
        <div className="bg-[#778a7d] h-full rounded-br-xl px-3 py-2 cursor-pointer hover:bg-[#9caca0]" onClick={props.onclick}>
            <i className="ri-send-plane-fill text-2xl text-[#1b2c29]"></i>
        </div>
    )
}