import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Wishlist from "./components/Wishlist/Wishlist.jsx";
import ProductsPage from "./components/ProductPage/ProductsPage.jsx";
import { Provider } from "react-redux";
import IndividualProduct from "./components/ProductPage/IndividualProduct.jsx";
import Bag from "./components/Bag/Bag.jsx";
import Address from "./components/Bag/Address.jsx";
import OrderPlacedAnimation from "./components/Bag/OrderPlacedAnimation.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Register from "./components/Register.jsx";
import Login from "./components/Login.jsx";
import { ContextProvider } from "./store/Context.jsx";
import { store, persistor } from "./store/store.js";
import { PersistGate } from "redux-persist/integration/react";
import Order from "./components/OrderPage/Order.jsx";
import OrderDetail from "./components/OrderPage/OrderDetail.jsx";
import Profile from "./components/OrderPage/Profile.jsx";

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
      {
        path: "/order",
        element: <Order />,
      },
      {
        path: "/order/details",
        element: <OrderDetail />,
      },
      {
        path: "/order/profile",
        element: <Profile />,
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
    <PersistGate loading={null} persistor={persistor}>
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
    </PersistGate>
  </Provider>
);
