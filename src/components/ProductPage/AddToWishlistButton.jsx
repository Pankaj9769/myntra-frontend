import { useContext, useEffect, useState } from "react";
import { HeartIcon, HeartFilledIcon } from "@radix-ui/react-icons";
import Heart from "../../../src/assets/images/like.png";
import { useDispatch, useSelector } from "react-redux";
import { WishlistAction } from "../../store/WishlistSlice";
import { Context } from "../../store/Context";
import { toast } from "react-toastify";
const AddToWishlistButton = ({ id }) => {
  const dispatch = useDispatch();
  let [addWishlist, setAddWishlist] = useState(false);
  const wishlist = useSelector((state) => state.wishlist.id);
  const loggedIn = JSON.parse(localStorage.getItem("loggedIn"));
  const { token } = useContext(Context);

  useEffect(() => {
    if (wishlist.includes(String(id))) {
      setAddWishlist(true);
    }
  }, []);

  const addToWishlist = async () => {
    if (!loggedIn) {
      return toast.error("Please login!");
    } else {
      dispatch(WishlistAction.addToWishList(id));
      const response = await fetch(
        `https://myntra-clone-backend-eight.vercel.app/user/wishlist/add/${id}`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (response.ok) setAddWishlist(true);
    }
  };
  return (
    <div className="absolute bottom-[4.7rem] left-0 w-full h-12  bg-opacity-75 z-20">
      <div className="h-full bg-white flex flex-row justify-center items-center">
        <button
          className={`flex flex-row justify-center gap-1 my-auto items-center px-10 py-1 ${
            addWishlist ? "hover:border-red-600" : "hover:border-gray-950"
          } border-gray-300 border-[1px]   text-xs tracking-wider uppercase font-semibold`}
          onClick={addToWishlist}
        >
          {addWishlist ? (
            <HeartFilledIcon className={` text-red-600  w-[1rem] h-[0.9rem]`} />
          ) : (
            <HeartIcon className={` text-gray-700  w-[1rem] h-[0.9rem]`} />
          )}
          <span>Wishlist</span>
        </button>
      </div>
    </div>
  );
};

export default AddToWishlistButton;
