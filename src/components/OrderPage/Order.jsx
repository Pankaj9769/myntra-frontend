import { GoContainer } from "react-icons/go";
import { CheckIcon, ChevronRightIcon } from "@radix-ui/react-icons";
import Rating from "./Rating";
import SideBar from "./SideBar";
import OrderItem from "./OrderItems";

const Order = () => {
  const name = "Pankaj";

  return (
    <>
      <div className=" h-max w-[80%] mx-auto p-0 md:p-3 subpixel-antialiased">
        <div className="mt-10 ">
          <span className="block w-[100%]  font-bold text-gray-700 -mb-2">
            Account
          </span>
          <span className="inline-block w-[100%]  text-[12px] text-gray-800">
            {name}
          </span>
        </div>
        <span className="inline-block border-b-[1px] border-gray-300 h-[1px] w-[100%]"></span>
        <div className="flex flex-row w-full">
          <div className="hidden sm:block relative w-1/5 ">
            <SideBar onPage={"Orders"} />
          </div>
          <div className="w-full md:w-4/5 py-5 px-3 ">
            <div className="flex flex-col mb-4">
              <span className="text-gray-700 font-bold w-full tracking-wide">
                All orders
              </span>
              <span className="block text-gray-700 w-full -mt-1 ">
                from anytime
              </span>
            </div>
            <div className="bg-gray-100 py-3 px-2 ">
              {/* ITEMS */}
              <OrderItem />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Order;
