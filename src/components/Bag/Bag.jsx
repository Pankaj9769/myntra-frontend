import "../../index.css";
import BagPageSlider from "./BagPageSlider";
import BagItem from "./BagItem";
// import { products } from "../ProductPage/ProductsPage";
import { useSelector } from "react-redux";
import { useContext, useEffect, useState } from "react";
import BagNavBar from "./BagNavBar";
import { useNavigate } from "react-router";
import { Context } from "../../store/Context";

const Bag = () => {
  const navigate = useNavigate();
  const products = useSelector((state) => state.products.prod);
  const loggedIn = JSON.parse(localStorage.getItem("loggedIn"));
  const bag = useSelector((state) => state.bag.id);

  if (!loggedIn) {
    console.log("Bag->" + loggedIn);
    navigate("/login");
  }
  let [bagSummary, setSummary] = useState({
    length: 0,
    totalMrp: 0,
    discountMrp: 0,
    platformFee: 20,
    shippingFee: 0,
  });

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
      prod.totalMrp = prod.totalMrp + +item.orgPrice;
      prod.discountMrp = prod.discountMrp + +item.orgPrice - +item.currPrice;
      prod.shippingFee += 20;
      return true;
    }
  });

  const user = {
    name: "Pankaj Parihar",
    address: {
      street: "Flat No. 613, 6th floor, A wing, Navjivan CHS, Carter Rd no. 4",
      locality: "Borivali East",
      city: "Mumbai",
      zip: 400066,
      state: "Maharashtra",
    },
  };

  useEffect(() => {
    setSummary({
      length: prod.length,
      totalMrp: prod.totalMrp,
      discountMrp: prod.discountMrp,
      platformFee: 20,
      shippingFee: prod.shippingFee,
    });
  }, [bag]);

  const gotoAddress = () => {
    navigate("/address");
  };

  useEffect(() => {
    console.log("Bag Summary", bagSummary);
  }, [bagSummary]);

  return (
    <>
      <BagNavBar page={1} />
      <div className=" h-max w-[99%] ml-2 flex flex-col items-center subpixel-antialiased">
        <div className="flex md:hidden flex-row uppercase text-[0.8rem] font-[500] tracking-[3px]  text-gray-400 mt-3">
          <BagPageSlider page={1} />
        </div>
        <div className="flex flex-col-reverse sm:flex-row w-full  gap-8 items-center sm:items-start justify-center mt-10">
          <div className="w-[100%] sm:w-[50%] flex flex-col items-center sm:items-stretch">
            <div className="border-[1px] border-gray-200 h-max bg-red-50 rounded-md py-4 px-2 flex flex-col sm:flex-row justify-around items-center">
              <div className="flex flex-col">
                <span className="text-sm font-normal text-gray-600">
                  Deliver to:{" "}
                  <span className="text-gray-700 font-semibold ">
                    {user.name}, {user.address.zip}
                  </span>
                </span>
                <span className="text-xs overflow-clip text-gray-700 mt-2 sm:mt-0">
                  {user.address.street},{user.address.locality}
                </span>
              </div>
              <button className="uppercase text-xs font-semibold px-2 py-2 border-red-500 border-[1px] rounded-sm text-red-500 mt-2 sm:mt-0">
                change address
              </button>
            </div>
            <div className="flex flex-row flex-wrap justify-around">
              {bagList.map((item) => (
                <BagItem key={item.id} item={item} />
              ))}
            </div>
          </div>

          <div className="w-[60%] sm:w-[27%] h-fit flex flex-col border-[1px] border-gray-300 rounded-md">
            <span className="text-gray-700 font-semibold text-sm ml-4 mt-5">
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
              onClick={gotoAddress}
            >
              Place Order
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Bag;
