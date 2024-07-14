import { useLocation, useNavigate } from "react-router";
import { GiShoppingBag } from "react-icons/gi";
import { useDispatch, useSelector } from "react-redux";
import { bagAction } from "../../store/bagSlice";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { useContext } from "react";
import { Context } from "../../store/Context";

const IndividualProduct = () => {
  const location = useLocation();
  const { token } = useContext(Context);
  const navigate = useNavigate();
  const loggedIn = JSON.parse(localStorage.getItem("loggedIn"));
  const { item } = location.state;
  const bag = useSelector((state) => state.bag.id);
  console.log(item);
  const dispatch = useDispatch();

  const addToBag = async () => {
    if (!loggedIn) {
      return navigate("/login");
    } else {
      dispatch(bagAction.addToBag(item.id));
    }

    try {
      const response = await fetch(
        `https://myntra-clone-backend-eight.vercel.app/user/bag/add/${item.id}`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const data = await response.json();

      if (response.ok) {
        toast.success("Added Successfully!");
      } else {
        console.error(`Error: ${data.response}`);
        toast.error("Failed to add item to bag.");
      }
    } catch (error) {
      console.error(`Error: ${error}`);
      toast.error("Failed to add item to bag.");
    }
  };

  return (
    <div className="subpixel-antialiased h-max p-5 flex flex-col">
      <span className="inline-block mt-2 ml-3 text-sm text-gray-600 capitalize">
        Home / {item.category} / {item.type} /
        <span className="font-bold"> {item.name}</span>
      </span>
      <div className="flex flex-col lg:flex-row items-center justify-between lg:items-start h-max w-[100%]  gap-14 ml-3 mr-10 mt-6">
        <div className=" w-[70%] md:w-[60%] h-[20rem] md:h-fit  flex flex-row gap-3 overflow-y-auto md:overflow-hidden">
          <img
            src={item.image[0]}
            className="w-[100%] h-[20rem]  md:w-[49%] lg:h-[28rem] md:hover:scale-105 transition-all"
          />
          <img
            src={item.image[1]}
            className="w-[100%] h-[20rem]  md:w-[49%] lg:h-[28rem] md:hover:scale-105 transition-all"
          />
        </div>

        {/* ITEM NAME */}
        <div className=" lg:w-[41%] ">
          <span className="inline-block h-max w-[100%] font-bold text-2xl text-gray-700">
            {item.name}
          </span>
          <span className="inline-block h-max w-[100%] capitalize text-gray-400 text-lg mt-1">
            {item.description}
          </span>

          {/* RATING SECTION */}
          <div className="mt-4 border-gray-200 hover:border-black border-[1px] w-fit h-[1.75rem] rounded-[3px] text-xs font-semibold tracking-wide">
            <div className="flex flex-row items-center h-full">
              <span className=" font-semibold text-[0.9rem] ml-2">
                {item.rating.star}
              </span>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1.2em"
                height="1.2em"
                viewBox="0 0 256 256"
                className="ml-1"
              >
                <path
                  fill="#379777"
                  d="m234.29 114.85l-45 38.83L203 211.75a16.4 16.4 0 0 1-24.5 17.82L128 198.49l-50.53 31.08A16.4 16.4 0 0 1 53 211.75l13.76-58.07l-45-38.83A16.46 16.46 0 0 1 31.08 86l59-4.76l22.76-55.08a16.36 16.36 0 0 1 30.27 0l22.75 55.08l59 4.76a16.46 16.46 0 0 1 9.37 28.86Z"
                ></path>
              </svg>

              <span className=" ml-1 w-[1px] h-[1rem] border-r-2 border-gray-300 "></span>
              <span className="text-gray-500 font-normal text-[0.95rem] ml-2 mr-2">
                {item.rating.by} Ratings
              </span>
            </div>
          </div>
          <span className="inline-block border-b-[1px] border-gray-300 h-[1px] w-full"></span>

          {/* PRICE SECTION */}
          <div className="mb-1">
            <span className="inline-block font-bold text-[1.35rem] text-gray-700">
              ₹{item.currPrice}
            </span>
            <span className="inline-block ml-2 text-[1.17rem] text-gray-500 line-through">
              ₹{item.orgPrice}
            </span>
            <span className="inline-block ml-2 text-[1.17rem] font-bold text-orange-400">
              ({item.discount}% OFF)
            </span>
          </div>
          <span className="font-bold text-sm text-[#379777]">
            inclusive of all taxes
          </span>

          {/* SIZE BUTTONS */}
          <div className="flex flex-col flex-wrap mt-5">
            <span className="text-[0.95rem] font-semibold">SELECT SIZE</span>
            <ul class="flex flex-row gap-5 flex-wrap w-full mt-4">
              <li>
                <input
                  type="radio"
                  id="hosting-small"
                  name="hosting"
                  value="hosting-small"
                  class="hidden peer"
                  required
                />
                <label
                  for="hosting-small"
                  class="flex flex-col items-center justify-between px-5 py-1 font-semibold text-sm text-black border border-gray-400 hover:border-black rounded-full cursor-pointer peer-checked:border-red-600 peer-checked:text-red-600 "
                >
                  <span>S</span>
                  <span className="inline-block text-xs font-light ">
                    ₹{item.currPrice}
                  </span>
                </label>
              </li>
              <li>
                <input
                  type="radio"
                  id="hosting-med"
                  name="hosting"
                  value="hosting-med"
                  class="hidden peer"
                  required
                />
                <label
                  for="hosting-med"
                  class="flex flex-col items-center justify-between px-5 py-1 font-semibold text-sm text-black border border-gray-400  hover:border-black rounded-full cursor-pointer peer-checked:border-red-600 peer-checked:text-red-600 "
                >
                  <span>M</span>
                  <span className="inline-block text-xs font-light ">
                    ₹{item.currPrice}
                  </span>
                </label>
              </li>
              <li>
                <input
                  type="radio"
                  id="hosting-large"
                  name="hosting"
                  value="hosting-large"
                  class="hidden peer"
                  required
                />
                <label
                  for="hosting-large"
                  class="flex flex-col items-center justify-between px-5 py-1 font-semibold text-sm text-black border border-gray-400 hover:border-black rounded-full cursor-pointer peer-checked:border-red-600 peer-checked:text-red-600 "
                >
                  <span>L</span>
                  <span className="inline-block text-xs font-light ">
                    ₹{item.currPrice}
                  </span>
                </label>
              </li>
              <li>
                <input
                  type="radio"
                  id="hosting-extralarge"
                  name="hosting"
                  value="hosting-extralarge"
                  class="hidden peer"
                  required
                />
                <label
                  for="hosting-extralarge"
                  class="flex flex-col items-center justify-between px-5 py-1 font-semibold text-sm text-black border border-gray-400 hover:border-black rounded-full cursor-pointer peer-checked:border-red-600 peer-checked:text-red-600 "
                >
                  <span>XL</span>
                  <span className="inline-block text-xs font-light ">
                    ₹{item.currPrice}
                  </span>
                </label>
              </li>
            </ul>
          </div>

          {/* ADD TO BAG BUTTON */}

          {!bag.includes(String(item.id)) ? (
            <button
              className="uppercase bg-[#FF407D] rounded-md hover:bg-opacity-85 mt-5 w-fit px-12 py-3 flex flex-row justify-center items-center gap-2 font-semibold text-white"
              onClick={addToBag}
            >
              <GiShoppingBag />
              <span>add to bag</span>
            </button>
          ) : (
            <Link
              to="/bag"
              className="uppercase bg-[#FF407D] rounded-md hover:bg-opacity-85 mt-5 w-fit px-12 py-3 flex flex-row justify-center items-center gap-2 font-semibold text-white"
            >
              <span>go to bag</span>
              <FaArrowRightLong />
            </Link>
          )}

          <span className=" inline-block border-b-[1px] border-gray-300 w-full h-[1px]"></span>
          <span className="inline-block text-gray-500 w-full">
            Get it within 5 days
          </span>
          <span className="inline-block w-full text-gray-800">
            Seller:
            <span className="text-[#FF407D]  font-semibold"> Myntra</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default IndividualProduct;
