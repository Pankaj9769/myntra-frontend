const BagPageSlider = ({ page }) => {
  return (
    <>
      <span className="border-b-2 border-green-500 text-green-500">bag</span>
      <span className={` relative dash-1 w-[3rem]`}></span>
      <span
        className={`border-b-2 ${
          page > 1 ? "border-green-500 text-green-500" : "border-white"
        }`}
      >
        address
      </span>
      <span className={` relative dash-1 w-[3rem]`}></span>
      <span
        className={`border-b-2 ${
          page > 2 ? "border-green-500 text-green-500" : "border-white"
        }`}
      >
        payment
      </span>
    </>
  );
};

export default BagPageSlider;
