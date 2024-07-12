import React, { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { products } from "../ProductPage/ProductsPage.jsx";
import WishlistItem from "./WishlistItem.jsx";
import { Context } from "../../store/Context.jsx";
import { useNavigate } from "react-router-dom";

const Wishlist = () => {
  const navigate = useNavigate();
  const loggedIn = JSON.parse(localStorage.getItem("loggedIn"));

  const wishlist = useSelector((state) => state.wishlist.id);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!loggedIn) {
      console.log("WISH->", loggedIn);
      navigate("/login");
    }
  }, [loggedIn, navigate]);

  useEffect(() => {
    console.log("Wishlist updated:", wishlist);
  }, [wishlist]);

  const newList = products.filter((product) =>
    wishlist.includes(String(product.id))
  );

  return (
    <div className="flex flex-row flex-wrap items-center justify-center gap-10 my-10">
      {newList.map((product) => (
        <WishlistItem key={product.id} item={product} />
      ))}
    </div>
  );
};

export default Wishlist;
