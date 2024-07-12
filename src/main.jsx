import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Wishlist from "./components/Wishlist/Wishlist.jsx";
import ProductsPage from "./components/ProductPage/ProductsPage.jsx";
import { Provider } from "react-redux";
import { store } from "./store/store.js";
import IndividualProduct from "./components/ProductPage/IndividualProduct.jsx";
import Bag from "./components/Bag/Bag.jsx";
import Address from "./components/Bag/Address.jsx";
import OrderPlacedAnimation from "./components/Bag/OrderPlacedAnimation.jsx";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Register from "./components/Register.jsx";
import Login from "./components/Login.jsx";
import { ContextProvider } from "./store/Context.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <ProductsPage />,
      },
      {
        path: "/wishlist",
        element: <Wishlist />,
      },
      {
        path: "/product",
        element: <IndividualProduct />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
  {
    path: "/bag",
    element: <Bag />,
  },
  {
    path: "/address",
    element: <Address />,
  },
  {
    path: "/orderPlaced",
    element: <OrderPlacedAnimation />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <ContextProvider>
      <React.StrictMode>
        <ToastContainer
          position="bottom-right"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />

        <RouterProvider router={router} />
      </React.StrictMode>
    </ContextProvider>
  </Provider>
);
