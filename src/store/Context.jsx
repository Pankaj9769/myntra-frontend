import { createContext, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { WishlistAction } from "./WishlistSlice";
import { bagAction } from "./bagSlice";

export const Context = createContext(null);

export const ContextProvider = ({ children }) => {
  const dispatch = useDispatch();
  let [token, settoken] = useState(localStorage.getItem("token"));
  let [loggedIn, setLoggedIn] = useState(false);
  let [user, setUser] = useState(null);
  useEffect(() => {
    if (token) {
      setLoggedIn(true);
      console.log("Context" + loggedIn);
      localStorage.setItem("loggedIn", true);
    }

    const checkUser = async () => {
      if (token) {
        const response = await fetch(
          "https://myntra-clone-backend-eight.vercel.app/auth/user",
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (response.ok) {
          const data = await response.json();
          console.log("data->", data);
          setUser(data.findUser);
          dispatch(WishlistAction.addAll({ id: data.findUser.wishlist }));
          dispatch(bagAction.addAll({ id: data.findUser.bag }));
        } else {
          logout();
          localStorage.setItem("loggedIn", false);
        }
      }
    };
    checkUser();
  }, []);

  useEffect(() => {
    if (user) {
      console.log("USERNAMECONTEXT", user.name);
    }
  }, [user]);

  const putUser = (userInfo) => {
    setUser(userInfo);
  };

  useEffect(() => {
    if (token) {
      localStorage.setItem("token", token);
      setLoggedIn(true);
      localStorage.setItem("loggedIn", true);
    }
  }, [token]);

  function putToken(token) {
    settoken(token);
  }

  function logout() {
    settoken(null);
    localStorage.setItem("token", null);
    dispatch(bagAction.removeAll());
    dispatch(WishlistAction.removeAll());
    setLoggedIn(false);
    localStorage.setItem("loggedIn", false);
  }

  return (
    <Context.Provider
      value={{ token, putToken, logout, loggedIn, user, putUser }}
    >
      {children}
    </Context.Provider>
  );
};
