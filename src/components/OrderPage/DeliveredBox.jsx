import { GoContainer } from "react-icons/go";

const DeliveredBox = ({ date }) => {
  const itemDate = new Date(date);
  const sevenDaysLater = new Date(itemDate.getTime() + 7 * 24 * 60 * 60 * 1000);
  const fourteenDaysLater = new Date(
    itemDate.getTime() + 14 * 24 * 60 * 60 * 1000
  );
  const isDelivered = sevenDaysLater < date;

  return (
    <>
      {isDelivered ? (
        <div className="bg-[#03A685] w-[95%] mx-auto flex flex-row p-3 gap-5 rounded-sm mt-4">
          <GoContainer className="text-white" />
          <div className="flex flex-col items-start gap-1">
            <span className="text-white text-sm font-semibold">Delivered</span>
            <span className="text-white text-xs">
              On {new Date(date).toDateString()}
            </span>
          </div>
        </div>
      ) : (
        <div className="bg-red-500 w-[95%] mx-auto flex flex-row p-3 gap-5 rounded-sm mt-4">
          <GoContainer className="text-white" />
          <div className="flex flex-col items-start gap-1">
            <span className="text-white text-sm font-semibold">
              To be Delivered
            </span>
            <span className="text-white text-xs">
              by {new Date(date).toDateString()}
            </span>
          </div>
        </div>
      )}
    </>
  );
};

export default DeliveredBox;
