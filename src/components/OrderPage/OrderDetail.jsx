import { useLocation } from "react-router";
import SideBar from "./SideBar";
import { GoContainer } from "react-icons/go";
import Rating from "./Rating";
import DeliveredBox from "./DeliveredBox";
import ExchangeWindow from "./ExchangeWindow";
const OrderDetail = () => {
  const location = useLocation();
  const date = new Date();
  const name = "Pankaj";
  const item = location.state.item;
  console.log(location.state.item);
  const itemDate = new Date(item.date);
  const sevenDaysLater = new Date(itemDate.getTime() + 7 * 24 * 60 * 60 * 1000);
  const fourteenDaysLater = new Date(
    itemDate.getTime() + 14 * 24 * 60 * 60 * 1000
  );
  const isDelivered = sevenDaysLater < date;
  const exchangeWindowClosed = fourteenDaysLater <= date;

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
          <div className="w-full md:w-4/5 p-3">
            <div className="bg-gray-100 w-full h-max p-3">
              <center className="flex flex-col">
                <img
                  src={item.image}
                  className="h-36 self-center hover:opacity-70 cursor-pointer mt-16"
                ></img>
                <span className="inline-block mt-4 text-sm text-gray-700 font-[700]">
                  {item.name}
                </span>
                <span className="inline-block mt-2 text-xs text-gray-800 tracking-wide">
                  {item.description}
                </span>
                <span className="inline-block mt-2 text-xs text-gray-800 tracking-wide">
                  Size: M
                </span>
                <DeliveredBox date={item.date} />
              </center>

              <ExchangeWindow
                isClosed={exchangeWindowClosed}
                closesOn={fourteenDaysLater.toDateString()}
              />

              <div className="bg-white flex flex-col mt-2  py-2 px-6">
                <div className="  flex flex-row gap-5 items-center">
                  <img
                    src={item.image}
                    className="rounded-full w-16 h-16 baseline object-cover"
                  />
                  <div className="flex flex-col items-start gap-2">
                    <span className="text-gray-700 font-bold">
                      Rate this Product
                    </span>
                    <div className="flex flex-row">
                      <Rating count={Math.floor(item.rating.star)} />
                    </div>
                  </div>
                </div>
                <span className="block mt-3 text-sm text-gray-600 ">
                  Rate & Review to{" "}
                  <span className="font-semibold text-gray-700">
                    earn Myntra Credit
                  </span>
                </span>
              </div>
              <div className="bg-white flex flex-col mt-2  py-4 px-6">
                <span className="font-bold text-gray-700">
                  Delivery Address
                </span>
                <span className="text-gray-700 font-semibold text-sm mt-2 tracking-wide">
                  {name}
                </span>
                <span className="text-sm overflow-clip text-gray-700 mt-2 sm:mt-0">
                  {item.address.street},{item.address.locality},{" "}
                  {item.address.city} - {item.address.zip}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderDetail;
