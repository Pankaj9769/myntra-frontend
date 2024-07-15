import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Item from "./Item";
import { fetchProducts } from "../../store/ProductSlice";
import { ColorRing } from "react-loader-spinner";
export const products = [
  {
    id: 0,
    category: "Men",
    type: "tshirt",
    image: [
      "../../src/assets/images/prod1.jpg",
      "../../src/assets/images/prod1_2.jpg",
    ],
    name: "U.S. Polo Assn.",
    description: "Men Lightweight T-shirt",
    currPrice: "489",
    orgPrice: "699",
    discount: "30",
    rating: {
      star: "4.5",
      by: "6k",
    },
  },
  {
    id: 1,
    category: "Men",
    type: "tshirt",
    image: [
      "../../src/assets/images/prod2.jpg",
      "../../src/assets/images/prod2_2.avif",
    ],
    name: "FanCode",
    description: "ICC World Cup Men T-shirt",
    currPrice: "1599",
    orgPrice: "1999",
    discount: "21",
    rating: {
      star: "4.1",
      by: "46",
    },
  },
  {
    id: 2,
    category: "Men",
    type: "tshirt",
    image: [
      "../../src/assets/images/prod3.jpg",
      "../../src/assets/images/prod3_2.jpg",
    ],
    name: "Rigo",
    description: "Polo Collar Long Sleeve T-shirt",
    currPrice: "674",
    orgPrice: "1499",
    discount: "55",
    rating: {
      star: "4.1",
      by: "901",
    },
  },
  {
    id: 3,
    category: "Women",
    type: "tshirt",
    image: [
      "../../src/assets/images/prod4_3.jpg",
      "../../src/assets/images/prod4_2.jpg",
    ],
    name: "HERE&NOW",
    description: "Cotton Drop-Shoulder T-shirt",
    currPrice: "499",
    orgPrice: "999",
    discount: "50",
    rating: {
      star: "4.4",
      by: "188",
    },
  },
  {
    id: 4,
    category: "Women",
    type: "shirt",
    image: [
      "../../src/assets/images/prod5.jpg",
      "../../src/assets/images/prod5_2.webp",
    ],
    name: "Roadster",
    description: "Women White Casual Shirt",
    currPrice: "489",
    orgPrice: "699",
    discount: "30",
    rating: {
      star: "3.8",
      by: "2k",
    },
  },
  {
    id: 5,
    category: "Women",
    type: "shirt",
    image: [
      "../../src/assets/images/prod6.jpg",
      "../../src/assets/images/prod6_2.webp",
    ],
    name: "Roadster",
    description: "Extended Sleeves Casual Shirt",
    currPrice: "645",
    orgPrice: "1899",
    discount: "66",
    rating: {
      star: "3.8",
      by: "810",
    },
  },
  {
    id: 6,
    category: "Men",
    type: "hoodies",
    image: [
      "../../src/assets/images/prod7.jpg",
      "../../src/assets/images/prod7_2.jpeg",
    ],
    name: "H&M",
    description: "Men Zip-Through Sports Hoodie",
    currPrice: "2699",
    orgPrice: "3499",
    discount: "23",
    rating: {
      star: "4.4",
      by: "21",
    },
  },
  {
    id: 7,
    category: "Both",
    type: "hoodies",
    image: [
      "../../src/assets/images/prod8.jpg",
      "../../src/assets/images/prod8_2.jpg",
    ],
    name: "H&M",
    description: "Loose Fit Hoodie",
    currPrice: "1499",
    orgPrice: "1999",
    discount: "20",
    rating: {
      star: "4.5",
      by: "6k",
    },
  },
  {
    id: 8,
    category: "Women",
    type: "bottoms",
    image: [
      "../../src/assets/images/prod9.jpg",
      "../../src/assets/images/prod9_2.jpg",
    ],
    name: "H&M",
    description: "Women Satin Cargo Trousers",
    currPrice: "2999",
    orgPrice: "2999",
    discount: "0",
    rating: {
      star: "4.5",
      by: "34",
    },
  },
  {
    id: 9,
    category: "Men",
    type: "bottoms",
    image: [
      "../../src/assets/images/prod10.jpg",
      "../../src/assets/images/prod10_2.jpg",
    ],
    name: "House of Koala",
    description: "Mid-Rise Cargo Trousers",
    currPrice: "489",
    orgPrice: "699",
    discount: "30",
    rating: {
      star: "3.5",
      by: "6k",
    },
  },
  {
    id: 10,
    category: "Men",
    type: "Bottoms",
    image: [
      "../../src/assets/images/prod11.jpg",
      "../../src/assets/images/prod11_2.jpg",
    ],
    name: "NOBERO",
    description: "Men Loose Fit Cargo Pants",
    currPrice: "1311",
    orgPrice: "3199",
    discount: "59",
    rating: {
      star: "4.2",
      by: "13",
    },
  },
  {
    id: 11,
    category: "Men",
    type: "shirt",
    image: [
      "../../src/assets/images/prod12.jpg",
      "../../src/assets/images/prod12_3.jpg",
    ],
    name: "Roadster",
    description: "Roadster Brown Printed Shirt",
    currPrice: "559",
    orgPrice: "1399",
    discount: "60",
    rating: {
      star: "3.6",
      by: "639",
    },
  },
  {
    id: 12,
    category: "Women",
    type: "shirt",
    image: [
      "../../src/assets/images/prod13.jpg",
      "../../src/assets/images/prod13_2.webp",
    ],
    name: "Roadster",
    description: "Life Co. Full Sleeves Casual Shirt",
    currPrice: "899",
    orgPrice: "1799",
    discount: "50",
    rating: {
      star: "4.2",
      by: "60",
    },
  },
  {
    id: 13,
    category: "Women",
    type: "shirt",
    image: [
      "../../src/assets/images/prod14.jpg",
      "../../src/assets/images/prod14_2.jpg",
    ],
    name: "Roadster",
    description: "Women Blue Solid Casual Shirt",
    currPrice: "755",
    orgPrice: "1799",
    discount: "58",
    rating: {
      star: "4.2",
      by: "6.9k",
    },
  },
  {
    id: 14,
    category: "Both",
    type: "jacket",
    image: [
      "../../src/assets/images/prod15.jpg",
      "../../src/assets/images/prod15_2.jpg",
    ],
    name: "Marks & Spencer",
    description: "Puffer Jacket",
    currPrice: "6999",
    orgPrice: "6999",
    discount: "0",
    rating: {
      star: "4.9",
      by: "2",
    },
  },
  {
    id: 15,
    category: "Kids",
    type: "hoodie",
    image: [
      "../../src/assets/images/prod16.jpg",
      "../../src/assets/images/prod16_2.jpg",
    ],
    name: "H&M",
    description: "Infant Bunny-Ear Cotton Hoodie",
    currPrice: "1299",
    orgPrice: "1499",
    discount: "10",
    rating: {
      star: "4.7",
      by: "160",
    },
  },
  {
    id: 16,
    category: "Kids",
    type: "hoodie",
    image: [
      "../../src/assets/images/prod17.jpg",
      "../../src/assets/images/prod17_2.jpg",
    ],
    name: "U.S. Polo Assn. Kids",
    description: "Boys Classic Cotton Shirt",
    currPrice: "959",
    orgPrice: "1599",
    discount: "40",
    rating: {
      star: "4.4",
      by: "43",
    },
  },
  {
    id: 17,
    category: "Kids",
    type: "tshirt",
    image: [
      "../../src/assets/images/prod18.jpg",
      "../../src/assets/images/prod18_2.jpg",
    ],
    name: "Kids Ville",
    description: "Boys Superman-Printed T-Shirt",
    currPrice: "639",
    orgPrice: "799",
    discount: "20",
    rating: {
      star: "4.0",
      by: "1.3k",
    },
  },
  {
    id: 18,
    category: "Kids",
    type: "bottoms",
    image: [
      "../../src/assets/images/prod19.jpg",
      "../../src/assets/images/prod19_2.jpg",
    ],
    name: "Gini and Jony",
    description: "Boys Cotton Cargos Trouser",
    currPrice: "1399",
    orgPrice: "1999",
    discount: "30",
    rating: {
      star: "3.8",
      by: "289",
    },
  },
  {
    id: 19,
    category: "Kids",
    type: "bottoms",
    image: [
      "../../src/assets/images/prod20.jpg",
      "../../src/assets/images/prod20_2.jpg",
    ],
    name: "Ariel",
    description: "Infant Cotton Shorts",
    currPrice: "349",
    orgPrice: "649",
    discount: "50",
    rating: {
      star: "3.8",
      by: "289",
    },
  },
  {
    id: 20,
    category: "Home Furnishing",
    type: "Home&Living",
    image: [
      "../../src/assets/images/prod21.jpg",
      "../../src/assets/images/prod21_2.jpeg",
    ],
    name: "THE WOOD WHITE",
    description: "Solid Cotton Pillow",
    currPrice: "1499",
    orgPrice: "1499",
    discount: "0",
    rating: {
      star: "4.2",
      by: "197",
    },
  },
  {
    id: 21,
    category: "Home Furnishing",
    type: "Home&Living",
    image: [
      "../../src/assets/images/prod22.jpg",
      "../../src/assets/images/prod22_2.jpg",
    ],
    name: "Eleganta",
    description: "Olive Stretchable Chair Cover",
    currPrice: "494",
    orgPrice: "899",
    discount: "45",
    rating: {
      star: "4.2",
      by: "2.3k",
    },
  },
];

const ProductsPage = () => {
  const dispatch = useDispatch();
  const prodList = useSelector((state) => state.products.currProd);
  const status = useSelector((state) => state.products.status);
  const error = useSelector((state) => state.products.error);

  if (status === "loading") {
    return (
      <div className="flex flex-row gap-2 text-lg font-semibold text-gray-600 items-center justify-center">
        <ColorRing
          visible={true}
          height="80"
          width="80"
          ariaLabel="color-ring-loading"
          wrapperStyle={{}}
          wrapperClass="color-ring-wrapper"
          colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
        />
        <span>Loading</span>
      </div>
    );
  }

  if (status === "failed") {
    return <div>Error: {error}</div>;
  }

  console.log([...prodList]);

  return (
    <>
      <span className="inline-block mt-7 ml-8 text-sm text-gray-600 capitalize text-md font-bold">
        Home / Products
      </span>
      <div className="flex flex-row flex-wrap gap-1 md:gap-10 items-center justify-center py-5 my-3">
        {prodList.map((product) => (
          <Item key={product.id} item={product} />
        ))}
      </div>
    </>
  );
};

export default ProductsPage;
