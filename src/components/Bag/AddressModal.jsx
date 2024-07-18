// src/components/Modal.js
import { Cross1Icon } from "@radix-ui/react-icons";
import React, { useContext, useEffect, useRef, useState } from "react";
import { AddressAction } from "../../store/AddressSlice";
import { useDispatch } from "react-redux";
import { Context } from "../../store/Context";
import { toast } from "react-toastify";

const AddressModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const { token } = useContext(Context);
  const dispatch = useDispatch();
  const street = useRef();
  const locality = useRef();
  const city = useRef();
  const state = useRef();
  const zipcode = useRef();

  const appendAddress = async () => {
    const addr = {
      street: street.current.value,
      locality: locality.current.value,
      city: city.current.value,
      state: state.current.value,
      zip: zipcode.current.value,
    };

    console.log("addr=", addr);

    try {
      const response = await fetch(
        "https://myntra-clone-backend-eight.vercel.app/user/address/add",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(addr),
        }
      );

      const data = await response.json();
      if (response.ok) {
        console.log("daaatatata", response);
        const newAddr = [addr];
        dispatch(AddressAction.addAddress(newAddr));

        toast.success("Address added successfully");
      } else {
        toast.error("Failed to add address");
      }
    } catch (error) {
      toast.error("Error adding address:", error);
    }
  };

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-10">
      <div className="bg-white p-6 rounded shadow-lg w-1/3">
        <div className="flex flex-row justify-between items-center border-b-[1px] border-gray-300 pb-4">
          <span className="text-sm uppercase font-bold text-gray-600">
            Add New Address
          </span>
          <Cross1Icon
            className="w-8 h-8 rounded-full p-1 hover:bg-gray-50 text-gray-500 cursor-pointer"
            onClick={onClose}
          />
        </div>
        <span className="text-[12px] uppercase font-semibold text-gray-700 ">
          Address
        </span>
        <form class="max-w-md mx-auto my-4">
          <div class="relative z-0 w-full mb-5 group">
            <input
              type="text"
              name="floating_address1"
              id="floating_address1"
              class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-b-[1px] border-gray-300 appearance-none   focus:outline-none focus:ring-0 focus:border-black peer"
              placeholder=" "
              required
              ref={street}
            />
            <label
              for="floating_address1"
              class="peer-focus:font-normal absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-black peer-focus:dark:text-black peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Address (Line 1)
            </label>
          </div>
          <div class="relative z-0 w-full mb-5 group">
            <input
              type="text"
              name="floating_address2"
              id="floating_address2"
              class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-b-[1px] border-gray-300 appearance-none   focus:outline-none focus:ring-0 focus:border-black peer"
              placeholder=" "
              required
              ref={locality}
            />
            <label
              for="floating_address2"
              class="peer-focus:font-normal absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-black peer-focus:dark:text-black peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Address (Line 2)
            </label>
          </div>
          <div class="relative z-0 w-full mb-5 group">
            <input
              type="text"
              name="floating_city"
              id="floating_city"
              class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-b-[1px] border-gray-300 appearance-none   focus:outline-none focus:ring-0 focus:border-black peer"
              placeholder=" "
              required
              ref={city}
            />
            <label
              for="floating_city"
              class="peer-focus:font-normal absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-black peer-focus:dark:text-black peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              City
            </label>
          </div>
          <div class="grid md:grid-cols-2 md:gap-6">
            <div class="relative z-0 w-full mb-5 group">
              <input
                type="text"
                name="floating_first_name"
                id="floating_first_name"
                class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-b-[1px] border-gray-300 appearance-none   focus:outline-none focus:ring-0 focus:border-black peer"
                placeholder=" "
                required
                ref={state}
              />
              <label
                for="floating_first_name"
                class="peer-focus:font-normal absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-black peer-focus:dark:text-black peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                State
              </label>
            </div>
            <div class="relative z-0 w-full mb-5 group">
              <input
                type="number"
                name="floating_last_name"
                id="floating_last_name"
                class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-b-[1px] border-gray-300 appearance-none   focus:outline-none focus:ring-0 focus:border-black peer"
                placeholder=" "
                required
                ref={zipcode}
              />
              <label
                for="floating_last_name"
                class="peer-focus:font-normal absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-black peer-focus:dark:text-black peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Zip Code
              </label>
            </div>
          </div>

          <button
            type="Submit"
            className="bg-red-500 w-full   text-white px-4 py-2 rounded"
            onClick={(event) => {
              event.preventDefault();
              appendAddress();
              onClose();
            }}
          >
            Add Address
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddressModal;
