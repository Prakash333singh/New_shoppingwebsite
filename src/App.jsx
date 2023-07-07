import Header from "./components/Header";
import Home from "./Home";
import Footer from "./components/Footer";
import Product from "./components/Product";
import { Route, Routes } from "react-router";
import About from "./components/About";
import Contact from "./Contact";
import ProductPage from "./components/ProductPage";
import PageNotFound from "./PageNotFound";
import CategoriesProducts from "./components/CategoriesProducts";
import Cart from "./Cart";
function App() {
  return (
    < >
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/product/:id" element={<Product />}></Route>
        <Route path="/products" element={<ProductPage />} ></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/categories/:name" element={<CategoriesProducts />}></Route>
        <Route path="*" element={<PageNotFound />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
