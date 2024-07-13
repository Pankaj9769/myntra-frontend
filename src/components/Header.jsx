import { IoBagOutline } from "react-icons/io5";
import { HeartIcon, PersonIcon } from "@radix-ui/react-icons";
import { useState, useEffect, useRef } from "react";
import BurgerMenu from "./BurgerMenu";
import { Sling as Hamburger } from "hamburger-react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts, productAction } from "../store/ProductSlice";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const [respMenu, setRespMenu] = useState(false);
  const bag = useSelector((state) => state.bag.id);

  const toggleRespMenu = () => {
    setRespMenu(!respMenu);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setMenuOpen(false);
    }
  };
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const Men = () => {
    console.log("Hello");
    dispatch(productAction.filterMen());
    navigate("/");
  };

  const showAll = () => {
    // dispatch(productAction.addAll());
    dispatch(fetchProducts());
    navigate("/");
  };

  const Women = () => {
    console.log("Hello");
    dispatch(productAction.filterWomen());
    navigate("/");
  };

  const Kids = () => {
    console.log("Hello");
    dispatch(productAction.filterKids());
    navigate("/");
  };
  const HomeLiving = () => {
    console.log("Hello");
    dispatch(productAction.filterHomeLiving());
    navigate("/");
  };

  useEffect(() => {
    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <>
      <nav className="w-full h-20 flex flex-row items-center justify-around gap-3 bg-white shadow-md">
        <img
          src="/images/mnytra_logo.webp"
          className="ml-10 w-16 h-12 hover:cursor-pointer"
          onClick={showAll}
        />

        <div>
          <ul className="hidden xl:flex flex-row items-center text-xs font-bold text-gray-700 font-sans tracking-wider subpixel-antialiased cursor-pointer">
            <a
              className="px-4 py-[1.89rem] border-b-4 border-white hover:border-red-500"
              onClick={Men}
            >
              MEN
            </a>
            <a
              className="px-4 py-[1.89rem] border-b-4 border-white hover:border-red-500"
              onClick={Women}
            >
              WOMEN
            </a>
            <a
              className="px-4 py-[1.89rem] border-b-4 border-white hover:border-red-500"
              onClick={Kids}
            >
              KIDS
            </a>
            <a
              className="px-4 py-[1.89rem] border-b-4  border-white hover:border-red-500"
              onClick={HomeLiving}
            >
              HOME & LIVING
            </a>
            <a className="px-4 py-[1.89rem] border-b-4 border-white hover:border-red-500">
              BEAUTY
            </a>
            <a className="relative px-4 py-[1.89rem] border-b-4 border-white  hover:border-red-500">
              STUDIO
              <span className="studio-superscript subpixel-antialiased">
                NEW
              </span>
            </a>
          </ul>
        </div>

        <div className="hidden md:flex flex-row">
          <div className="bg-slate-100 h-10 px-2 py-2 rounded-l-md border-t-[1px] border-l-[1px] border-b-[1px] border-gray-300 text-gray-400 tracking-wide">
            Search
          </div>
          <input
            type="text"
            className="px-3 py-2 w-72 h-10 border-t-[1px] border-r-[1px] border-b-[1px] mr-0 border-gray-300 rounded-r-md"
            placeholder="Search for products, brands and more"
          />
        </div>
        <div className=" xl:hidden mr-5">
          <Hamburger onToggle={toggleRespMenu} />
        </div>
        <div className="hidden xl:flex flex-row  gap-7 ">
          <a
            className="flex flex-col items-center cursor-pointer"
            onClick={toggleMenu}
          >
            <PersonIcon className="text-gray-700 w-5 h-5" />
            <span className="text-xs font-semibold">Profile</span>
          </a>
          <Link
            to="/wishlist"
            className="flex flex-col items-center cursor-pointer"
          >
            <HeartIcon className="text-gray-700 w-5 h-5" />
            <span className="text-xs font-semibold">Wishlist</span>
          </Link>
          <div className="relative mr-8">
            <Link
              to="/bag"
              className="flex flex-col items-center cursor-pointer"
            >
              <IoBagOutline className="text-gray-700 w-5 h-5" />
              <span className="text-xs font-semibold">Bag</span>

              <div class="absolute inline-flex items-center justify-center w-5 h-5 text-xs font-semibold text-white bg-red-500 rounded-full top-[-10px] end-[-10px]">
                {bag.length}
              </div>
            </Link>
          </div>
        </div>
      </nav>
      {menuOpen && (
        <div ref={menuRef}>
          <BurgerMenu />
        </div>
      )}
      {respMenu && (
        <div className="absolute xl:hidden  top-24 w-screen h-full bg-white z-10 subpixel-antialiased">
          <ul className="flex flex-col items-center justify-center uppercase text-gray-700">
            <a className="flex flex-row items-center justify-center cursor-pointer hover:bg-gray-50 w-full py-2">
              <span className="text-md font-semibold tracking-wid e">
                Account
              </span>
            </a>
            <Link
              to="/wishlist"
              className="flex flex-row items-center justify-center cursor-pointer hover:bg-gray-50 w-full py-2"
            >
              <span className="text-md font-semibold tracking-wide">
                Wishlist
              </span>
            </Link>
            <Link
              to="/bag"
              className="flex flex-row items-center justify-center cursor-pointer hover:bg-gray-50 w-full py-2"
            >
              <span className="text-md font-semibold tracking-wide">Bag</span>
            </Link>
            <span className=" mx-auto w-11/12 border-b-[1px] border-gray-700"></span>
          </ul>

          <ul className="flex flex-col items-center justify-center text-gray-700 mt-5">
            <a className="flex flex-row items-center justify-center cursor-pointer hover:bg-gray-50 w-full py-2">
              <span className="text-md  tracking-wide">Men</span>
            </a>
            <a
              className="flex flex-row items-center justify-center cursor-pointer hover:bg-gray-50 w-full py-2"
              // onClick={toggleMenu}
            >
              <span className="text-md  tracking-wide">Women</span>
            </a>
            <a
              className="flex flex-row items-center justify-center cursor-pointer hover:bg-gray-50 w-full py-2"
              // onClick={toggleMenu}
            >
              <span className="text-md  tracking-wide">Kids</span>
            </a>
            <a
              className="flex flex-row items-center justify-center cursor-pointer hover:bg-gray-50 w-full py-2"
              // onClick={toggleMenu}
            >
              <span className="text-md  tracking-wide">Studio</span>
            </a>
            <span className=" mx-auto w-11/12 border-b-[1px] border-gray-200"></span>
          </ul>

          <div className="w-full flex flex-col items-center mt-5">
            <Link
              to="/register"
              className="inline-block w-fit px-4 py-[0.5rem] text-sm text-red-600 font-semibold mt-2 border-[1px] hover:border-red-600"
            >
              LOGIN / SIGNUP
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
