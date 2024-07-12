import { useState } from "react";
import AddToWishlistButton from "./AddToWishlistButton";
import { useNavigate } from "react-router";

const Item = ({ item }) => {
  let [wishlistButton, setWishListButton] = useState(false);

  const handleOnMouseEnter = () => {
    setWishListButton(true);
  };

  const handleOnMouseLeave = () => {
    setWishListButton(false);
  };
  const navigate = useNavigate();
  const gotoProduct = () => {
    navigate("/product", { state: { item } });
  };

  return (
    <div
      className=" relative w-[13.5rem] h-max subpixel-antialiased hover:shadow-lg"
      onMouseEnter={handleOnMouseEnter}
      onMouseLeave={handleOnMouseLeave}
    >
      <button className="cursor-pointer">
        <img
          src={item.image[0]}
          className="relative h-72 w-full"
          onClick={gotoProduct}
        ></img>
        {wishlistButton && <AddToWishlistButton id={item.id} />}
        {!wishlistButton && (
          <div className="absolute left-2 bottom-[5.7rem] bg-white bg-opacity-75 px-2 py-1 rounded-[3px] text-xs font-semibold tracking-wide">
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
        )}
        <span className="block ml-2 mt-2 text-md text-gray-800 font-bold ">
          {item.name}
        </span>
        <div onClick={gotoProduct} className="w-full overflow-clip">
          <span className="block ml-2 text-md  text-gray-500 text-sm overflow-hidden ">
            {item.description}
          </span>
          <span className="inline-block ml-2  font-semibold text-sm mb-2">
            ₹{item.currPrice}
          </span>
          <span className="inline-block ml-2 mb-2 text-xs text-gray-500 line-through">
            ₹{item.orgPrice}
          </span>
          <span className="inline-block ml-2 mb-3 text-xs text-orange-400">
            ({item.discount} % OFF)
          </span>
        </div>
      </button>
    </div>
  );
};

export default Item;
