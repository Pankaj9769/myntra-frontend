import { Outlet } from "react-router";
import Footer from "./components/Footer";
import Header from "./components/Header";

import ProductsPage from "./components/ProductPage/ProductsPage";

function App() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
