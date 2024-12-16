import { LHSSide } from "./lhs-sidebar";
import { Rhs_main } from "./rhsMain";

export const Sidebar = () => {
  return (
    <div className="flex w-screen h-screen">
      <div className="bg-[#f5f6f7] shadow-lg transition-w duration-1000 sm:w-72 w-0 h-full">
        <LHSSide />
      </div>
      <Rhs_main/>
    </div>
  );
};
