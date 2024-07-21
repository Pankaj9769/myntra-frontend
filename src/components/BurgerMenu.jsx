import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../store/Context";

const BurgerMenu = () => {
  const { logout, user } = useContext(Context);
  const navigate = useNavigate();
  const loggedIn = JSON.parse(localStorage.getItem("loggedIn"));

  const signOut = () => {
    navigate("/login");
    logout();
  };

  return (
    <div className="absolute top-20 right-14 bg-white border-[1px] shadow-lg z-10 subpixel-antialiased">
      <div className="flex flex-col px-4 py-5 items-center justify-center">
        {!loggedIn && (
          <div className="flex flex-col">
            <span className="font-semibold text-[0.9rem] tracking-tight">
              Welcome
            </span>
            <span className="font-normal text-gray-500 tracking-tight">
              To access account and manage orders
            </span>
            <Link
              to="/register"
              className="inline-block w-fit px-4 py-[0.5rem] text-sm text-red-600 font-semibold mt-2 border-[1px] hover:border-red-600"
            >
              LOGIN / SIGNUP
            </Link>
            <span className="border-b-[1px] border-gray-200 mt-4"></span>
          </div>
        )}
        {loggedIn && user && (
          <>
            <span className="inline-block w-full text-gray-700 font-semibold">
              Hi, {user.name.split(" ")[0]}
            </span>
            <span className="w-full border-b-[1px] border-gray-200 mt-3"></span>
          </>
        )}
        <div className="flex flex-col items-start justify-start w-full text-gray-500 text-[0.9rem] tracking-tight mt-3 cursor-pointer subpixel-antialiased gap-1">
          <Link to="/order">Orders</Link>
          <Link to="/wishlist">Wishlist</Link>
          <Link to="/gift-cards">Gift Cards</Link>
          <Link to="/contact-us">Contact Us</Link>
        </div>
        <span className="w-full border-b-[1px] border-gray-200 mt-3"></span>
        {loggedIn && (
          <div className="flex flex-col w-[14rem]">
            <button
              onClick={signOut}
              className="inline-block w-fit px-4 py-[0.5rem] text-sm text-red-600 font-semibold mt-2 border-[1px] hover:border-red-600"
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default BurgerMenu;
