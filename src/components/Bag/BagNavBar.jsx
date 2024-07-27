import { AiFillSafetyCertificate } from "react-icons/ai";
import BagPageSlider from "./BagPageSlider";

const BagNavBar = ({ page }) => {
  return (
    <>
      <nav className="w-full h-20 flex gap-10 md:gap-0 md:flex-row items-center  justify-between bg-white shadow-sm subpixel-antialiased">
        <img src="../images/mnytra_logo.webp" className="ml-11 w-16 h-12" />
        <div className="hidden md:flex flex-row uppercase text-[0.8rem] font-[500] tracking-[3px]  text-gray-400">
          <BagPageSlider page={page} />
        </div>
        <div className="flex flex-row items-center mr-16 gap-2">
          <AiFillSafetyCertificate className="text-green-500 w-10 h-10" />
          <span className="text-gray-500 text-xs font-semibold tracking-[3px]">
            100% SECURE
          </span>
        </div>
      </nav>
    </>
  );
};

export default BagNavBar;
