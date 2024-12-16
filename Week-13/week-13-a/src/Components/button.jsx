
export const Button=({
    disabled,
    OnCLick,
    PlaceHolder
})=>{
    return(
        <div className="flex justify-center mt-10">
        <span className={`bg-[#7f95ac] ${disabled? "bg-blue-400" :"bg-green-500"} cursor-pointer px-14 py-5 rounded-2xl  `}>
          {PlaceHolder}
        </span>
        </div>
    )
}