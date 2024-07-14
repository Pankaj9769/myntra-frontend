import { Outlet } from "react-router";
import Footer from "./components/Footer";
import Header from "./components/Header";

import ProductsPage from "./components/ProductPage/ProductsPage";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchProducts } from "./store/ProductSlice";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
