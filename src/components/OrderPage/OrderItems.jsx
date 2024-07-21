import { CheckIcon, ChevronRightIcon } from "@radix-ui/react-icons";
import { GoContainer } from "react-icons/go";
import Rating from "./Rating";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import ExchangeWindow from "./ExchangeWindow";

const OrderItem = () => {
  const date = new Date();
  const items = useSelector((state) => state.order.orders);
  const navigate = useNavigate();

  const goToDetails = (item) => {
    navigate("/order/details", { state: { item } });
  };

  console.log(items);

  return (
    <>
      {items.length > 0 &&
        items.map((item) => {
          const itemDate = new Date(item.date);
          const sevenDaysLater = new Date(
            itemDate.getTime() + 7 * 24 * 60 * 60 * 1000
          );
          const fourteenDaysLater = new Date(
            itemDate.getTime() + 14 * 24 * 60 * 60 * 1000
          );
          const isDelivered = sevenDaysLater < date;
          const exchangeWindowClosed = fourteenDaysLater <= date;

          return (
            <div key={item.id} className="bg-white py-2 px-5 my-2">
              <div className="flex flex-row">
                <div className="flex flex-row ">
                  <center className="relative h-10 w-10 align-">
                    {isDelivered ? (
                      <CheckIcon className="absolute bottom-0 -right-0 text-white bg-green-500 border-[1px] border-white rounded-full" />
                    ) : (
                      <span className="absolute bottom-0 -right-0 w-4 h-4 text-white bg-red-500 border-[1px] border-white rounded-full"></span>
                    )}
                    <GoContainer className=" bg-gray-700 text-white rounded-full h-9 w-9 p-2" />
                  </center>
                </div>
                <div className="flex flex-col ml-5 ">
                  {isDelivered ? (
                    <>
                      <span className="text-green-500 font-bold">
                        Delivered
                      </span>
                      <span className="block text-gray-600 text-sm tracking-wide -mt-1">
                        On {sevenDaysLater.toDateString()}
                      </span>
                    </>
                  ) : (
                    <>
                      <span className="text-red-500 font-bold">Pending</span>
                      <span className="block text-gray-600 text-sm tracking-wide -mt-1">
                        Expected Delivery On {sevenDaysLater.toDateString()}
                      </span>
                    </>
                  )}
                </div>
              </div>
              <div className="mt-3">
                <button
                  className="bg-gray-100 hover:bg-gray-200 w-full p-3 flex flex-row justify-between items-center"
                  onClick={() => {
                    goToDetails(item);
                  }}
                >
                  <div className="flex flex-row gap-5">
                    <img src={item.image} className="w-14" alt={item.name} />
                    <div className="flex flex-col justify-start items-start">
                      <span className="font-bold text-[14px] text-gray-700">
                        {item.name}
                      </span>
                      <span className="text-[14px] text-gray-600 tracking-wide">
                        {item.description}
                      </span>
                      <span className="text-[14px] text-gray-600 tracking-wide">
                        Size: S
                      </span>
                    </div>
                  </div>
                  <ChevronRightIcon className="text-right" />
                </button>
                <ExchangeWindow
                  isClosed={exchangeWindowClosed}
                  closesOn={fourteenDaysLater.toDateString()}
                />
              </div>
              <div className="py-3 px-5 bg-gray-100 mt-[1px]">
                <div className="flex flex-row gap-2 mb-2">
                  {item && (
                    <Rating count={Math.floor(Number(item.rating.star))} />
                  )}
                </div>
                <span className="text-gray-600 text-sm">
                  Rate & Review to{" "}
                  <span className="font-bold">earn Myntra Credit</span>
                </span>
              </div>
            </div>
          );
        })}
    </>
  );
};

export default OrderItem;
