import { useContext, useEffect, useRef, useState } from "react";
import BagNavBar from "./BagNavBar";
import BagPageSlider from "./BagPageSlider";
import { useDispatch, useSelector } from "react-redux";
// import { products } from "../ProductPage/ProductsPage";
import { AddressAction } from "../../store/AddressSlice";
import AddressModal from "./AddressModal";
import { useNavigate } from "react-router";
import { ToastContainer, toast } from "react-toastify";
import { Context } from "../../store/Context";

const Address = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const products = useSelector((state) => state.products.prod);
  const { token } = useContext(Context);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const dispatch = useDispatch();
  const bag = useSelector((state) => state.bag.id);
  const name = "Pankaj Parihar";
  const userAddress = useSelector((state) => state.address.address);
  let [bagSummary, setSummary] = useState({
    length: 0,
    totalMrp: 0,
    discountMrp: 0,
    platformFee: 20,
    shippingFee: 0,
  });

  const selectedIndex = useRef(null);
  const navigate = useNavigate();
  const onContinue = () => {
    if (selectedIndex.current === null) {
      toast.error("Please select an Address");
    } else {
      navigate("/orderPlaced");
    }
  };

  useEffect(() => {
    let prod = {
      length: 0,
      totalMrp: 0,
      discountMrp: 0,
      platformFee: 20,
      shippingFee: 0,
    };

    const bagList = products.filter((item) => {
      if (bag.includes(String(item.id))) {
        prod.length++;
        prod.totalMrp += +item.orgPrice;
        prod.discountMrp += +item.orgPrice - +item.currPrice;
        prod.shippingFee += 20;
        return true;
      }
      return false;
    });

    setSummary({
      length: prod.length,
      totalMrp: prod.totalMrp,
      discountMrp: prod.discountMrp,
      platformFee: 20,
      shippingFee: prod.shippingFee,
    });
  }, [bag]);

  const handleAddressSelect = (index) => {
    selectedIndex.current = index;
  };

  const removeAddress = async (index) => {
    try {
      const response = await fetch(
        `https://myntra-clone-backend-eight.vercel.app/user/address/remove/${index}`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const data = await response.json();
      if (response.ok) {
        toast.success("Address Removed");
        dispatch(AddressAction.removeAddress(index));
      }
    } catch (error) {}
  };

  return (
    <>
      <BagNavBar page={2} />

      <AddressModal isOpen={isModalOpen} onClose={closeModal} />

      <div className="h-max w-[99%] ml-2 flex flex-col items-center subpixel-antialiased">
        <div className="flex md:hidden flex-row uppercase text-[0.8rem] font-[500] tracking-[3px] text-gray-400 mt-3">
          <BagPageSlider page={1} />
        </div>
        <div className="flex flex-col-reverse sm:flex-row w-full gap-8 items-center sm:items-start justify-center mt-10">
          <div className="w-[100%] sm:w-[50%] flex flex-col items-center sm:items-stretch">
            <div className="flex flex-row flex-wrap items-center justify-between">
              <span className="text-md font-bold text-gray-700 tracking-wide">
                Select Delivery Address
              </span>
              <button
                className="px-3 py-2 border-[1px] border-black text-gray-700 rounded-[3px] font-semibold tracking-wide text-xs uppercase"
                onClick={openModal}
              >
                Add New Address
              </button>
            </div>
            <span className="uppercase font-bold text-xs text-gray-700 mt-3">
              default address
            </span>

            {/* address radio */}
            <nav className="flex min-w-[240px] flex-col gap-1 my-4 font-sans text-base font-normal text-blue-gray-700">
              {userAddress.map((addr, index) => (
                <div
                  key={index}
                  role="button"
                  className="flex items-center w-full p-0 leading-tight transition-all outline-none text-start hover:bg-blue-gray-50 hover:bg-opacity-80 hover:text-blue-gray-900 focus:bg-blue-gray-50 focus:bg-opacity-80 focus:text-blue-gray-900 active:bg-blue-gray-50 active:bg-opacity-80 active:text-blue-gray-900 shadow-inner px-2 py-3 hover:shadow-lg border-[1px] border-gray-100"
                  onClick={() => handleAddressSelect(index)}
                >
                  <label
                    htmlFor={`address-${index}`}
                    className="flex items-center w-full px-3 py-2 cursor-pointer"
                  >
                    <div className="grid mr-3 place-items-center">
                      <div className="inline-flex items-center">
                        <label
                          className="relative flex items-center p-0 rounded-full cursor-pointer"
                          htmlFor={`address-${index}`}
                        >
                          <input
                            name="vertical-list"
                            id={`address-${index}`}
                            type="radio"
                            className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-blue-gray-200 text-gray-900 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-900 checked:before:bg-gray-900 hover:before:opacity-0"
                          />
                          <span className="absolute text-red-400 transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-3.5 w-3.5"
                              viewBox="0 0 16 16"
                              fill="currentColor"
                            >
                              <circle
                                data-name="ellipse"
                                cx="8"
                                cy="8"
                                r="8"
                              ></circle>
                            </svg>
                          </span>
                        </label>
                      </div>
                    </div>
                    <div className="flex flex-col ">
                      <span className="text-sm font-semibold text-gray-700 flex items-center">
                        {name}
                        {index === 0 && (
                          <span className="bg-white text-green-800 text-[9px] font-bold ms-2 px-2 rounded-full dark:text-green-600 border border-green-600 ml-3 uppercase">
                            Home
                          </span>
                        )}
                      </span>
                      <span className="text-gray-900 font-normal text-xs w-[80%] mt-2 leading-5">
                        {addr.street}, {addr.locality}, {addr.city}-{addr.zip},{" "}
                        {addr.state}
                      </span>
                      <span className="text-xs mt-2 text-gray-600">
                        *Pay On Delivery Available
                      </span>
                      <div className="flex flex-row justify-start mt-4 gap-3 tracking-wide">
                        <button
                          className="px-4 py-2 uppercase text-[0.7rem] font-semibold border-[1px] border-gray-500 text-gray-700 hover:border-black rounded-[4px]"
                          onClick={() => removeAddress(index)}
                        >
                          remove
                        </button>
                        <button className="px-4 py-2 uppercase text-[0.7rem] font-semibold border-[1px] border-gray-500 text-gray-700 hover:border-black rounded-[4px]">
                          Edit
                        </button>
                      </div>
                    </div>
                  </label>
                </div>
              ))}
            </nav>
            <button
              className="w-full shadow-sm mb-5 py-5 px-3 border-[1px] border-gray-300 text-red-500 font-bold text-left hover:shadow-md"
              onClick={() => {
                openModal();
              }}
            >
              + Add New Address
            </button>
          </div>

          <div className="w-[60%] sm:w-[27%] h-fit flex flex-col border-[1px] border-gray-300 rounded-md">
            <span className="text-gray-700 font-semibold text-[0.8rem] ml-4 mt-5 uppercase">
              Delivery Estimates
            </span>
            <span className="text-gray-500 font-light text-[0.85rem] ml-4 mt-2">
              Delivery within{" "}
              <span className="font-bold text-gray-700">7 Days</span>
            </span>

            <span className="text-gray-700 font-semibold text-sm ml-4 mt-3">
              PRICE DETAILS ({bagSummary.length} items){" "}
            </span>
            <span className="inline-block w-[90%] mx-auto border-b-[1px] border-gray-300 mt-1"></span>
            <span className="text-sm w-full flex flex-row justify-between mt-5">
              <span className="ml-4 text-gray-500">Total MRP</span>
              <span className="text-right mr-4 text-gray-800">
                ₹{bagSummary.totalMrp}
              </span>
            </span>
            <span className="text-sm w-full flex flex-row justify-between mt-2">
              <span className="ml-4 text-gray-500">Discount MRP</span>
              <span className="text-right mr-4 text-green-500">
                -₹{bagSummary.discountMrp}
              </span>
            </span>
            <span className="text-sm w-full flex flex-row justify-between mt-2">
              <span className="ml-4 text-gray-500">Platform Fee</span>
              <span className="text-right mr-4 text-gray-800">
                {bagSummary.length === 0 ? "0" : "₹20"}
              </span>
            </span>
            <span className="text-sm w-full flex flex-row justify-between mt-2">
              <span className="ml-4 text-gray-500">Shipping Fee</span>
              <span className="text-right mr-4 text-gray-800">
                ₹{bagSummary.shippingFee}
              </span>
            </span>
            <span className="inline-block w-[90%] mx-auto border-b-[1px] border-gray-300 mt-2"></span>
            <span className="text-sm font-bold w-full flex flex-row justify-between mt-2">
              <span className="ml-4 text-gray-800">Total Amount</span>
              <span className="text-right mr-4 text-gray-800">
                ₹
                {bagSummary.totalMrp -
                  bagSummary.discountMrp +
                  (bagSummary.length === 0 ? 0 : 20) +
                  bagSummary.shippingFee}
              </span>
            </span>
            <button
              className="uppercase w-[90%] bg-red-500 mx-auto my-5 py-[10px] rounded-sm text-white font-semibold text-sm"
              onClick={onContinue}
            >
              Continue
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Address;
