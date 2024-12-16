export const RhsCompo = () => {
  return (
    <div className="w-full h-full ">
      <div className="flex  justify-around mt-5">
        <div className="bg-cyan-500 w-14 h-14 rounded-lg p-3 ">
          <i class="ri-calendar-schedule-fill text-3xl"></i>
        </div>
        <div className="bg-cyan-500 w-14 h-14 rounded-lg p-3">
          <i class="ri-add-box-line text-3xl"></i>
        </div>
      </div>
      <div className="flex justify-between font-Poppins text-[0.7vw] font-light">
        <p className="ml-6 mt-2">Schedule an Webinar</p>
        <p className="mr-8 mt-2">Join an Webinar</p>
      </div>

      <div className="flex  justify-around mt-5">
        <div className="bg-cyan-500 w-14 h-14 rounded-lg p-3 ">
          <i class="ri-calendar-schedule-fill text-3xl"></i>
        </div>
        <div className="bg-cyan-500 w-14 h-14 rounded-lg p-3 invisible">
          <i class="ri-add-box-line text-3xl"></i>
        </div>
      </div>
      <div className="flex justify-between font-Poppins text-[0.7vw] font-light">
        <p className="ml-6 mt-2">Schedule an Webinar</p>
        <p className="mr-8 mt-2 hi invisible">Join an Webinar</p>
      </div>

      
    </div>
  );
};
