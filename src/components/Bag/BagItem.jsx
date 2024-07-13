import { Cross1Icon } from "@radix-ui/react-icons";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { bagAction } from "../../store/bagSlice";
import { toast } from "react-toastify";
import { useContext } from "react";
import { Context } from "../../store/Context";

const BagItem = ({ item }) => {
  const navigate = useNavigate();
  const { token } = useContext(Context);
  const gotoProduct = () => {
    navigate("/product", { state: { item } });
  };
  const dispatch = useDispatch();
  const removeFromBag = async () => {
    dispatch(bagAction.removeFromBag(item.id));
    const response = await fetch(
      `https://myntra-clone-backend-eight.vercel.app/user/bag/remove/${item.id}`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    if (response.ok) {
      toast.success(`Item removed from bag`);
    } else {
      toast.error(`There was an Error, Please try again`);
    }
  };

  return (
    <div className="flex flex-col sm:flex-row w-[44%] sm:w-full border-gray-300 border-[1px] my-3 p-2 gap-3">
      {/* {console.log(item.image[0])} */}
      <img
        src={item.image[0]}
        className="h-40  cursor-pointer"
        onClick={gotoProduct}
      />
      <div className="relative  w-full">
        <a
          className=" hidden sm:block  absolute top-0 right-0 bg-gray-300 bg-opacity-70 rounded-full p-[0.5rem] hover:bg-opacity-50 text-gray-900 cursor-pointer"
          onClick={removeFromBag}
        >
          <Cross1Icon />
        </a>
        <span className="inline-block w-full font-bold text-gray-700">
          {item.name}
        </span>
        <span className="inline-block w-full font-normal text-gray-500 text-sm">
          {item.description}
        </span>
        <span className="inline-block w-full font-normal text-gray-400 text-xs">
          Sold by: <span className="text-red-500 font-semibold">Myntra</span>
        </span>
        <span className="inline-block w-fit text-black font-semibold text-sm bg-gray-300 rounded-sm px-[6px] py-[1px]">
          Size: M
        </span>
        <span className="inline-block ml-3 w-fit text-black font-semibold text-sm bg-gray-300 rounded-sm px-[6px] py-[1px]">
          Qty: 1
        </span>
        <div className="">
          <span className="inline-block font-semibold text-sm text-gray-800">
            ₹{item.currPrice}
          </span>
          <span className="inline-block ml-2 text-sm text-gray-500 line-through">
            ₹{item.orgPrice}
          </span>
          <span className="inline-block ml-2 text-sm font-semibold text-orange-400">
            ({item.discount}%OFF)
          </span>
        </div>
        <span className="text-xs text-gray-500">
          <span className="font-bold text-gray-700">14 days </span> return
          available
        </span>
      </div>
    </div>
  );
};

export default BagItem;
