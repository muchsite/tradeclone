import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import "./global.scss";
import "animate.css";
import Home from "./pages/Home";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Calc from "./pages/Calc/Calc";
import Blogs from "./pages/Blogs/Blogs";
import Cases from "./pages/Cases/Cases";
import Blog from "./pages/Blog/Blog";
import SingleCase from "./pages/SingleCase/SingleCase";
import Product from "./pages/product/Product";
import { useRef } from "react";
import Terms from "./pages/terms/Terms";
import Refunds from "./pages/terms/Refunds";
import Disc from "./pages/terms/Disc";
import Cookies from "./pages/terms/Cookies";
import Privacy from "./pages/terms/Privacy";

export const BASE = "https://tradeflaircorp.in";
function App() {
  const myElementRef = useRef(null);

  const scrollToElement = () => {
    if (myElementRef.current) {
      myElementRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <HashRouter>
      <Navbar scrollToElement={scrollToElement} />
      <Routes>
        <Route
          element={
            <Home
              scrollToElement={scrollToElement}
              myElementRef={myElementRef}
            />
          }
          path="/"
        />
        <Route element={<Calc />} path="/calculator" />
        <Route element={<Blogs />} path="/blogs" />
        <Route element={<Blog />} path="/blog/:blogId" />
        <Route element={<Cases />} path="/cases" />
        <Route element={<SingleCase />} path="/case/:caseId" />
        <Route element={<Product />} path="/product" />
        <Route element={<Terms />} path="/terms" />
        <Route element={<Disc />} path="/disclaimer" />
        <Route element={<Cookies />} path="/cookies" />
        <Route element={<Privacy />} path="/privacy" />
        <Route element={<Refunds />} path="/refunds" />
      </Routes>
      <Footer />
    </HashRouter>
  );
}

export default App;
