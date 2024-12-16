import { Content } from "./content";
import { ProfileCard } from "./profileCard";
import { RhsCompo } from "./rhs.";

export const Rhs_main = () => {
  return (
    <div className="w-full h-full">
      <div className="bg-gray-700 w-full  sm:h-[20%] h-[10%]"></div>
      <div className="flex flex-col sm:flex-row h-[80%] pt-8 bg-[#fbfcfe]">
        <ProfileCard />
        <div className="h-full w-[350px] sm:w-[600px]  ml-10">
          <div className="font-Poppins">
            <p>Monday, 14 October</p>
            <h1 className="text-2xl sm:text-3xl  font-bold mt-2 sm:mt-5 text-[#022c5c]">
              Good Morning, Jay ! 👋
            </h1>
          </div>
          <div className="w-full h-96 bg-white rounded-xl mt-10 shadow-xl border-grey-200 border-2">
            <div className="bg-[#f5f6f7] w-90 h-10 m-4 rounded-l flex justify-between">
              <div className="flex">
                <i class="ri-calendar-2-line text-xl text-[#022c5c] m-1 "></i>
                <p className="font-Poppins m-2 text-sm sm:text-inherit">Monday, 14 October 2024</p>
                <i class="ri-arrow-drop-down-line text-2xl mt-1 text-[#022c5c]"></i>
              </div>
              <div className="m-1">
                <i class="ri-arrow-left-line text-xl mr-2 text-gray-400"></i>
                <i class="ri-arrow-right-line text-xl mr-2 text-gray-400"></i>
              </div>
            </div>
            <Content />
          </div>
        </div>
        <div className=" mt-6 sm:mt-32 w-[350px] sm:w-80 h-full sm:h-56 bg-white border-grey-200 border-2 shadow-xl rounded-xl ml-10">
          <RhsCompo />
        </div>
      </div>
    </div>
  );
};
