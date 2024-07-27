import { useContext } from "react";
import SideBar from "./SideBar";
import { Context } from "../../store/Context";

const Profile = () => {
  const { user } = useContext(Context);
  const name = user.name;
  return (
    <>
      <div className=" h-max w-[80%] mx-auto p-0 md:p-3 subpixel-antialiased">
        <div className="mt-10 ">
          <span className="block w-[100%]  font-bold text-gray-700 -mb-2">
            Account
          </span>
          <span className="inline-block w-[100%]  text-[12px] text-gray-800">
            {name}
          </span>
        </div>
        <span className="inline-block border-b-[1px] border-gray-300 h-[1px] w-[100%]"></span>
        <div className="flex flex-row w-full">
          <div className="hidden sm:block relative w-1/5 ">
            <SideBar onPage={"Profile"} />
          </div>
          <div className="w-full md:w-4/5 p-2 flex flex-col justify-center ">
            <img
              src="../images/profile1.png"
              className="object-contain  h-40"
            />
            <span className="border-b-[1px] border-gray-300 inline-block w-full"></span>
            <div className="flex flex-col">
              <span className="text-gray-800 text-lg">Name: {name}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
