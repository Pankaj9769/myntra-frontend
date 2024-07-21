const SideBar = ({ onPage }) => {
  const page = onPage;
  return (
    <>
      <div className=" flex flex-col justify-center border-b-[1px] border-gray-300 py-2 pb-4">
        <a className="text-gray-600 cursor-pointer">Overview</a>
      </div>
      <div className="text-gray-600 py-4 flex flex-col gap-3 border-b-[1px] border-gray-300">
        <span className="uppercase text-xs text-gray-500">orders</span>
        <a
          className={`text-md ${
            page === "Orders" ? "text-[#03A685]" : "text-gray-600"
          } font-bold cursor-pointer`}
        >
          Orders & Returns
        </a>
      </div>

      <div className="text-gray-600 py-4 flex flex-col gap-3 border-b-[1px] border-gray-300">
        <span className="uppercase text-xs text-gray-500">Account</span>
        <ul>
          <li>
            <a
              className={`text-md ${
                page === "Profile"
                  ? "text-[#03A685]  font-bold"
                  : "text-gray-600"
              } cursor-pointer`}
            >
              Profile
            </a>
          </li>
          <li>
            <a
              className={`text-md ${
                page === "Cards" ? "text-[#03A685] font-bold" : "text-gray-600"
              } cursor-pointer`}
            >
              Saved Cards
            </a>
          </li>
          <li>
            <a
              className={`text-md ${
                page === "Address"
                  ? "text-[#03A685] font-bold"
                  : "text-gray-600"
              } cursor-pointer`}
            >
              Addresses
            </a>
          </li>
          <li>
            <a
              className={`text-md ${
                page === "Insider"
                  ? "text-[#03A685] font-bold"
                  : "text-gray-600"
              } cursor-pointer`}
            >
              Myntra Insider
            </a>
          </li>
        </ul>
      </div>

      <div className="absolute right-0 bottom-0 w-[1px] h-full border-r-[1px] border-gray-300 float-end"></div>
    </>
  );
};

export default SideBar;
