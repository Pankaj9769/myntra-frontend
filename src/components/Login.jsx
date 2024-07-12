import { useContext, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { bagAction } from "../store/bagSlice";
import { WishlistAction } from "../store/WishlistSlice";

import { Context } from "../store/Context";

const Login = () => {
  const { token, putToken, putUser } = useContext(Context);

  const dispatch = useDispatch();
  const emailRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();

  const loginUser = async (event) => {
    event.preventDefault();

    const user = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };

    try {
      const response = await fetch(
        "https://myntra-clone-backend-eight.vercel.app/auth/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(user),
        }
      );

      const data = await response.json();
      console.log("ATLAS" + data);
      if (response.ok) {
        toast.success("Logged In");
        dispatch(bagAction.addAll({ id: data.user.bag }));
        dispatch(WishlistAction.addAll({ id: data.user.wishlist }));
        putUser(data.user);
        putToken(data.token);

        navigate("/");
        emailRef.current.value = "";
        passwordRef.current.value = "";
      } else {
        toast.error(`${data.response}`);
      }
    } catch (error) {
      console.log(`Error: ${error}`);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center p-3 bg-yellow-200 h-max subpixel-antialiased">
      <div className="w-[28%] flex flex-col items-center bg-white">
        <img src="/src/assets/images/myntra-offer.jpg" alt="Myntra Offer" />
        <span className="text-lg font-semibold text-gray-700 mt-2">Login</span>
        <form
          onSubmit={loginUser}
          className="flex flex-col items-center w-full p-1"
        >
          <input
            type="text"
            id="email"
            placeholder="Email"
            className="inline h-10 w-[90%] border-[1px] mt-2 mb-2 border-gray-200 outline-none focus:border-black p-2 rounded-md"
            ref={emailRef}
          />

          <input
            type="password"
            placeholder="Password"
            className="inline h-10 w-[90%] border-[1px] mt-2 mb-2 border-gray-200 outline-none focus:border-black p-2 rounded-md"
            ref={passwordRef}
          />
          <button
            type="submit"
            className="bg-red-500 px-14 py-2 rounded-sm my-2 text-white font-semibold hover:bg-red-600"
          >
            Login
          </button>
          <span className="text-xs text-gray-500 my-1">
            Not a customer?
            <Link to="/register" className="text-red-500 font-semibold">
              {" "}
              Signup
            </Link>
          </span>
        </form>
      </div>
    </div>
  );
};

export default Login;
