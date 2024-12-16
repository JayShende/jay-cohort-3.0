export const LHSSide=()=>{
    return(
        <div>
            <div className="flex mt-4 m-2 justify-between">
                <div className="bg-[#022c5c]  w-28 h-8 font-Poppins rounded-lg">
                <i class="ri-live-line text-white text-l ml-2"></i>
                    <span className="text-white ml-2 text-xs font-semibold">Webinar</span>
                    <span className="text-cyan-300 text-xs">.gg</span>
                </div>
                <img src="src\assets\images\pexels-prabhala-raghuvir-11235-57901.jpg" className="w-10 rounded-sm mr-2 " alt="" />
            </div>

            <div className="mt-8 font-Poppins text-sm text-gray-500">
            <div className=" border-gray-200 border-2  rounded-lg ml-2 mt-4 w-56 h-9 flex justify-between hover:bg-gray-200 hover:text-[#022c5c] ">
                    <p className="m-2">Home</p>
                <i class="ri-home-5-fill text-lg m-1 mr-2"></i>
                </div>

                <div className=" border-gray-200 border-2  rounded-lg ml-2 mt-4 w-56 h-9 flex justify-between hover:bg-gray-200 hover:text-[#022c5c] ">
                    <p className="m-2">Webinar</p>
                    <i class="ri-account-box-line text-lg m-1 mr-2"></i>
                </div>

                <div className=" border-gray-200 border-2  rounded-lg ml-2 mt-4 w-56 h-9 flex justify-between hover:bg-gray-200 hover:text-[#022c5c] ">
                    <p className="m-2">Billing</p>
                    <i class="ri-bank-card-fill text-lg m-1 mr-2"></i>
                </div>
                <div className=" border-gray-200 border-2  rounded-lg ml-2 mt-4 w-56 h-9 flex justify-between hover:bg-gray-200 hover:text-[#022c5c] ">
                    <p className="m-2">User Managment</p>
                <i class="ri-home-5-fill text-lg m-1 mr-2"></i>
                </div>

                <div className=" border-gray-200 border-2  rounded-lg ml-2 mt-4 w-56 h-9 flex justify-between hover:bg-gray-200 hover:text-[#022c5c] ">
                    <p className="m-2">Settings</p>
                    <i class="ri-tools-fill text-lg m-1 mr-2"></i>
                </div>

            </div>
        </div>
    )
}