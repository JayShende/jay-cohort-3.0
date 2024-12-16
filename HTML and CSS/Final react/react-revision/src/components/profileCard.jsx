export const ProfileCard=()=>{
    return(
        <div className=" w-56 h-80 rounded-xl bg-white shadow-xl ml-10 -translate-y-16 border-grey-200 border-2 sm:flex hidden flex-col items-center">
            <img
              src="src\assets\images\pexels-prabhala-raghuvir-11235-57901.jpg"
              alt=""
              className="w-[130px] h-[130px]  rounded-xl mt-10"
            />

            <span className="font-Poppins font-semibold text-[#022c5c] mt-5">
              Jay Shende
            </span>
            <p className="font-Poppins text-sm text-gray-400 mt-1">
              jayshende@gmail.com
            </p>
            <p className="font-Poppins text-sm text-gray-400 mt-1">789465132</p>
            <p className="font-Poppins text-sm text-gray-400 mt-1">
              India, Earth
            </p>
          </div>
    )
}