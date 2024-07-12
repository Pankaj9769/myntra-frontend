import { useContext, useState } from "react";
import { Cross1Icon } from "@radix-ui/react-icons";
import { useDispatch } from "react-redux";
import { WishlistAction } from "../../store/WishlistSlice";
import { Context } from "../../store/Context";
import { bagAction } from "../../store/bagSlice";
const WishlistItem = ({ item }) => {
  const dispatch = useDispatch();

  const { token } = useContext(Context);
  let [wishlistButton, setWishListButton] = useState(false);

  const movetoBag = async () => {
    const response = await fetch(
      `https://myntra-clone-backend-eight.vercel.app/user/bag/add/${item.id}`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    if (response.ok) {
      dispatch(bagAction.addToBag(item.id));
      removeItemFromWishlist();
    }
  };

  const removeItemFromWishlist = async () => {
    const response = await fetch(
      `https://myntra-clone-backend-eight.vercel.app/user/wishlist/remove/${item.id}`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    if (response.ok) {
      dispatch(WishlistAction.removeToWishList(item.id));
    }
  };

  return (
    <div className=" relative w-[14rem] h-max border-gray-200 border-[1px] subpixel-antialiased">
      <a className="cursor-pointer">
        <img src={item.image[0]} className="relative h-72 w-full"></img>
        <a
          className="absolute top-2 right-2 bg-white bg-opacity-70 rounded-full p-[0.6rem] hover:bg-opacity-50"
          onClick={removeItemFromWishlist}
        >
          <Cross1Icon />
        </a>
        <div className="absolute left-2 bottom-[7.85rem] bg-white bg-opacity-75 px-2 py-1 rounded-[3px] text-xs font-semibold tracking-wide">
          <div className="flex flex-row justify-center items-center">
            <span className="">{item.rating.star}</span>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 256 256"
              className="ml-1"
            >
              <path
                fill="#379777"
                d="m234.29 114.85l-45 38.83L203 211.75a16.4 16.4 0 0 1-24.5 17.82L128 198.49l-50.53 31.08A16.4 16.4 0 0 1 53 211.75l13.76-58.07l-45-38.83A16.46 16.46 0 0 1 31.08 86l59-4.76l22.76-55.08a16.36 16.36 0 0 1 30.27 0l22.75 55.08l59 4.76a16.46 16.46 0 0 1 9.37 28.86Z"
              ></path>
            </svg>

            <span className="ml-[3px]">|</span>
            <span className="ml-[3px]">{item.rating.by}</span>
          </div>
        </div>

        <span className="block ml-2 mt-2 text-md text-gray-800 font-bold ">
          {item.name}
        </span>

        <span className="block ml-2 text-md text-gray-500 text-sm overflow-x-clip   text-nowrap">
          {item.description}
        </span>
        <span className="ml-2  font-semibold text-sm">₹{item.currPrice}</span>
        <span className="ml-2 text-xs text-gray-500 line-through">
          ₹{item.orgPrice}
        </span>
        <span className="ml-2 text-xs text-orange-400">({item.discount})</span>
      </a>
      {/* <center className="mt-2 mb-3"> */}
      <button
        className="uppercase text-sm font-semibold mt-2 border-t-[1px] w-full border-gray-200 text-red-600 px-10 py-2"
        onClick={movetoBag}
      >
        Move to Bag
      </button>
      {/* </center> */}
    </div>
  );
};

export default WishlistItem;
