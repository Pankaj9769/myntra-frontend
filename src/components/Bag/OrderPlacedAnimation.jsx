// src/components/Iframe.js
import React from "react";
import BagNavBar from "./BagNavBar";
import { Link } from "react-router-dom";

const OrderPlacedAnimation = () => {
  return (
    <>
      <BagNavBar page={3} />
      <div className="flex flex-col gap-10">
        <iframe
          src="https://lottie.host/embed/4682668b-0106-4530-a20e-86341f48e9ee/slxNWmRokz.json"
          width="100%"
          height="500px"
          // allowFullScreen
          className="w-full h-[90%]"
          title="Lottie Animation"
        ></iframe>
        <span className="inline-block w-full text-center text-2xl font-bold text-gray-700">
          Order Placed Successfully!
        </span>
        <Link
          to="/"
          className="inline-block bg-red-500 px-3 py-2 mx-auto text-white font-semibold rounded-sm "
        >
          Go to Home
        </Link>
      </div>
    </>
  );
};

export default OrderPlacedAnimation;
